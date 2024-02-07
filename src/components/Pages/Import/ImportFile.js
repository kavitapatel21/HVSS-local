import Sidebar from "../../Layout/Sidebar";
import Header from "../../Layout/Header";
import Loader from "../../Loader";
import "../../../assets/scss/import.scss";
import Upload from "../../../assets/images/Upload.svg"
import { useState } from "react";
import Subcodes from "../Services/Subcodes";
// import IcoMore from "../../../assets/images/more.svg"

const ImportFile = () => {
    const [loading, setLoading] = useState(false);
    const [selectedFileName, setSelectedFileName] = useState('');
    const {uploadFile} = Subcodes();

    const handleFileUpload = async (event) => {
        try {
          const fileInput = event.target;
          if (fileInput.files.length > 0) {
            setSelectedFileName(fileInput.files[0].name);
        } else {
            setSelectedFileName('');
        }
          const file = fileInput.files[0];
      
          if (!file) {
            console.error('No file selected');
            return;
          }
      
          setLoading(true);
      
          // Now, you have the file, you can do additional checks or display its name
          console.log('Selected File:', file.name);
      
          const response = await uploadFile(file);
          console.log('File uploaded successfully:', response);
          // Perform any other actions with the API response if needed
        } catch (error) {
          console.error('File upload failed:', error);
        } finally {
          setLoading(false);
        }
      };

    return (
        <div className="d-flex">
            {loading && <Loader />}
            <Sidebar />
            <div className="page-wrapper search">
                <Header />
                <div className="common-layout">
                    <h2 className="page-title mb-4">Import a File</h2>
                    <div className="custom-file-upload">
                        <div className="file-upload-box">
                            <div className="input-box">
                                <input type="file" name="file-upload" id="file_upload" />
                                <div className="file-information">
                                    <img src={Upload} alt="Upload" />
                                    {selectedFileName ? (
                                        <p>{selectedFileName}</p>
                                    ) : (
                                        <p></p>
                                    )}
                                    <p className="regular-title">
                                        Drop file here or <span className="highlight position-relative c-pointer">
                                            <input type="file" name="file-upload" id="file_upload" accept=".pdf" onChange={handleFileUpload} />
                                            browse</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="table-wrapper">
                    <div className="table-search">
                        <div className="position-relative">
                            <img src={IcoSearch} className="ico_float left" alt="Search Here" />
                            <input type="text" placeholder="Search" id="search" name="search" />
                        </div>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>PDF</th>
                                <th>Position</th>
                                <th>Code</th>
                                <th>Description</th>
                                <th style={{width: "40px"}}></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <input type="text" name="pdf" id="pdf" placeholder="PDF" />
                                </td>
                                <td><input type="text" name="pdf" id="pdf" placeholder="PDF" /></td>
                                <td><input type="text" name="pdf" id="pdf" placeholder="PDF" /></td>
                                <td><input type="text" name="pdf" id="pdf" placeholder="PDF" /></td>
                                <td className="text-center" style={{width: "40px"}}><img src={IcoMore} alt="More" /></td>
                            </tr> 
                        </tbody>
                    </table>
                </div>  */}
                </div>
            </div>
        </div>
    );
};
export default ImportFile;