import AuthUser from "./AuthUser";
import { useNavigate } from "react-router-dom";

const Subcodes = () => {
  const apiUrl = process.env.REACT_APP_API_BASE_URL;
  const { getToken } = AuthUser();
  const token = getToken();
  const navigate = useNavigate();

  const httpCode = async (endpoint, method, data = null) => {
    const url = `${apiUrl}/${endpoint}`;

    const options = {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    };

    if (data) {
      options.body = JSON.stringify(data);
    }

    try {
      const response = await fetch(url, options);
      if (response.status === 401) {
        navigate('/login');
      }
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  };

const getAllSubCodes = async (searchTerm = '', page = 1) => {
  // Include the search term and page information
  const queryParams = searchTerm ? `?search=${searchTerm}&page_size=10&p=${page}` : `?p=${page}&page_size=10`;
  return httpCode(`product_subcodes${queryParams}`, 'GET');
};

  const getSubCode = (id) => {
    return httpCode(`product_subcodes/${id}`, 'GET');
  };

  const createSubCode = (code) => {
    return httpCode(`product_subcodes`, 'POST', { code });
  };

  const updateSubCode = (id) => {
    return httpCode(`product_subcodes/${id}`, 'PATCH');
  };

  const deleteSubCode = (id) => {
    return httpCode(`product_subcodes/${id}`, 'DELETE');
  };

  const uploadFile = async (file) => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      console.log('token', token);
      const response = await fetch(`${apiUrl}/upload-document`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formData,
      });
      if (response.status === 401) {
        navigate('/login');
      }
      if (!response.ok) {
        throw new Error(`File upload failed with status: ${response.status}`);
      }

      return response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  };

  return {
    httpCode,
    getAllSubCodes,
    getSubCode,
    createSubCode,
    updateSubCode,
    deleteSubCode,
    uploadFile
  };
};

export default Subcodes;