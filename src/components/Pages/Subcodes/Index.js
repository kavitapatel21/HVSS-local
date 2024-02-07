import Sidebar from "../../Layout/Sidebar";
import Header from "../../Layout/Header";
// import Loader from "../../loader";
import "../../../assets/scss/import.scss";
import Addrule from "../../../assets/images/add-rule.svg";
import IcoMore from "../../../assets/images/more.svg";
import IcoSearch from "../../../assets/images/search_ico.svg";
import { Dropdown } from "react-bootstrap";
import Subcodes from "../Services/Subcodes";
import { useEffect, useState } from "react";

const SubcodesData = () => {
    const { getAllSubCodes, deleteSubCode } = Subcodes();
    const [subcodes, setSubcodes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    // const [currentPage, setCurrentPage] = useState(1);
    // const recordsPerPage = 10;

    const handleDelete = async (id) => {
        try {
            // delete the specific subcode
            await deleteSubCode(id);
            // After successful deletion, fetch the updated subcodes
            const res = await getAllSubCodes(searchTerm);
            setSubcodes(res.data.results);
        } catch (error) {
            console.error('Error deleting subcode:', error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getAllSubCodes(searchTerm);
                setSubcodes(res.data.results);
            } catch (error) {
                // Handle error
                console.error('Error fetching subcodes:', error);
            }
        };
        fetchData();
    }, [searchTerm,getAllSubCodes]);
    // console.log('subcodes data:', subcodes);

    //Searching [Start]
    // const filteredSubcodes = subcodes.filter((subcode) =>
    //     Object.values(subcode).some(
    //         (value) =>
    //             typeof value === 'string' &&
    //             value.toLowerCase().includes(searchTerm.toLowerCase())
    //     )
    // );
    //Searching [End]

    //Pagination [Start]
    // const indexOfLastRecord = currentPage * recordsPerPage;
    // const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    // const currentRecords = filteredSubcodes.slice(indexOfFirstRecord, indexOfLastRecord);

    // const totalPages = Math.ceil(filteredSubcodes.length / recordsPerPage);

    // const handlePageChange = (newPage) => {
    //     setCurrentPage(newPage);
    // };
    //Pagination [End]

    return (
        <div className="d-flex">
            {/* <Loader /> */}
            <Sidebar />
            <div className="page-wrapper">
                <Header />
                <div className="common-layout">
                    <h2 className="page-title mb-4">Subcodes</h2>
                    <div className="table-wrapper">
                        <div className="table-search">
                            <div className="position-relative">
                                <img src={IcoSearch} className="ico_float left" alt="Search Here" />
                                <input type="text" placeholder="Search" id="search" name="search" value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)} />
                            </div>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Code Position</th>
                                    <th>Description</th>
                                    <th>Code</th>
                                    <th>PDF Name</th>
                                    <th style={{ width: "40px" }}></th>
                                </tr>
                            </thead>
                            {subcodes.length === 0 ? (
                                <tbody>
                                    <tr>
                                        <td colSpan="5" style={{textAlign: 'center'}}>No data found</td>
                                    </tr>
                                </tbody>
                            ) : (
                                <tbody>
                                    {subcodes.map((subcode) => (
                                        <tr key={subcode.id}>
                                            <td>{subcode.code_position}</td>
                                            <td>{subcode.description}</td>
                                            <td>{subcode.code}</td>
                                            <td>{subcode.document_id?.name}</td>
                                            <td className="text-center" style={{ width: '40px' }}>
                                                <Dropdown>
                                                    <Dropdown.Toggle className="transparent-button" id="dropdown-basic">
                                                        <img src={IcoMore} alt="More" />
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="/add-rules">Add rule</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                                                        <Dropdown.Item onClick={() => handleDelete(subcode.id)}>Delete</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            )}

                        </table>
                    </div>
                    {/* <div className="pagination">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span>Page {currentPage} of {totalPages}</span>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div> */}
                    <div className="new-addition mt-4">
                        <a href="/" className="new-record d-flex align-items-center">
                            <img src={Addrule} width={18} height={18} className="me-3" alt="Add Rule" />
                            Add record
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SubcodesData;