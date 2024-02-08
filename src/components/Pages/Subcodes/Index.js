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
import AscArrow from "../../../assets/images/sort_asc.png"
import DecArrow from "../../../assets/images/sort_desc.png"
import AscDecArrows from "../../../assets/images/sort_both.png"

const SubcodesData = () => {
    const { getAllSubCodes, deleteSubCode, createSubCode } = Subcodes();
    const [subcodes, setSubcodes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isAdding, setIsAdding] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [newRecord, setNewRecord] = useState({
        code_position: "",
        description: "",
        code: "",
        document_id: ""
    });
    const [sortField, setSortField] = useState(null);
    const [sortDirection, setSortDirection] = useState('asc');

    const handleSort = (field) => {
        setSortField(field);
        setSortDirection((prevDirection) => (prevDirection === 'asc' ? 'desc' : 'asc'));
    };

    const renderSortArrow = (field) => {
        if (sortField === field) {
            return sortDirection === 'asc' ? <img src={AscArrow} alt="Ascending" /> : <img src={DecArrow} alt="Descending" />;
        } else {
            return <img src={AscDecArrows} alt="Both Arrows" />;
        }
    };
    const handleSearch = async () => {
        try {
            const res = await getAllSubCodes(searchTerm, 1); // Set current page to 1 when searching
            setSubcodes(res.data.results);
            const newTotalPages = Math.ceil(res.data.count / 10);
            setTotalPages(newTotalPages);

            // Reset current page to 1 if it's greater than the new total pages
            // if (currentPage > newTotalPages) {
            setCurrentPage(1);
            // }

        } catch (error) {
            console.error('Error fetching subcodes:', error);
        }
    };
    const handlePageChange = async (pageNumber) => {
        try {
            const res = await getAllSubCodes(searchTerm, pageNumber);
            setSubcodes(res.data.results);
            setCurrentPage(pageNumber);
        } catch (error) {
            console.error('Error fetching subcodes:', error);
        }
    };

    const handleAddClick = () => {
        setIsAdding(!isAdding);
        // Initialize the new record input
        setNewRecord({
            code_position: "",
            description: "",
            code: "",
            document_id: ""
        });
    };

    const handleInputChange = (e, field) => {
        setNewRecord({
            ...newRecord,
            [field]: e.target.value,
        });
    };

    const handleSaveRecord = async () => {
        try {
            // Add logic to submit the new record to your backend

            await createSubCode(newRecord);
            const res = await getAllSubCodes(searchTerm);
            setSubcodes(res.data.results);
            setIsAdding(false); // Toggle back to view mode
        } catch (error) {
            console.error('Error adding new record:', error);
        }
    };

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
                const res = await getAllSubCodes(searchTerm, currentPage);
                setSubcodes(res.data.results);
                if (res.data.count === 0) {
                    setTotalPages(1);
                    setCurrentPage(1);
                } else {
                    setTotalPages(Math.ceil(res.data.count / 10)); // 10 records per page
                }
            } catch (error) {
                // Handle error
                setSubcodes([]);
                console.error('Error fetching subcodes:', error);
            }
        };
        fetchData();
    }, [searchTerm, currentPage, totalPages]);

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
                            <div className="new-addition mt-4">
                                <button className="new-record d-flex align-items-center" style={{ border: 'none', color: '#147594', backgroundColor: '#fff' }} onClick={handleAddClick}>
                                    <img src={Addrule} width={18} height={18} className="me-3" alt="Add Rule" />
                                    Add record
                                </button>
                            </div>
                            <div className="position-relative search-input-container">
                                <img src={IcoSearch} className="ico_float left" alt="Search Here" />
                                <input type="text" placeholder="Search" id="search" name="search" value={searchTerm}
                                    onChange={(e) => {
                                        setSearchTerm(e.target.value);
                                        handleSearch(); // Call handleSearch directly on input change
                                    }} />
                            </div>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th onClick={() => handleSort('code_position')}>
                                        Code Position
                                        {renderSortArrow('code_position')}
                                    </th>
                                    <th onClick={() => handleSort('description')}>
                                        Description
                                        {renderSortArrow('description')}
                                    </th>
                                    <th onClick={() => handleSort('code')}>
                                        Code
                                        {renderSortArrow('code')}
                                    </th>
                                    <th onClick={() => handleSort('document_id')}>
                                        PDF Name
                                        {renderSortArrow('document_id')}
                                    </th>
                                    <th style={{ width: "40px" }}></th>
                                    {/* <th>Code Position</th>
                                    <th>Description</th>
                                    <th>Code</th>
                                    <th>PDF Name</th>
                                    <th style={{ width: "40px" }}></th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {isAdding && (
                                    <tr>
                                        <td>
                                            <input
                                                type="text"
                                                placeholder="Code Position"
                                                value={newRecord.code_position}
                                                onChange={(e) => handleInputChange(e, "code_position")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                placeholder="Description"
                                                value={newRecord.description}
                                                onChange={(e) => handleInputChange(e, "description")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                placeholder="Code"
                                                value={newRecord.code}
                                                onChange={(e) => handleInputChange(e, "code")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                placeholder="Document Id"
                                                value={newRecord.document_id}
                                                onChange={(e) => handleInputChange(e, "document_id")}
                                            />
                                        </td>
                                        <td>
                                            <button className="save-data" onClick={handleSaveRecord}>Save</button>
                                        </td>
                                    </tr>
                                )}
                                {subcodes.length === 0 ? (
                                    <tr>
                                        <td colSpan="5" style={{ textAlign: 'center' }}>No data found</td>
                                    </tr>
                                ) : (
                                    <>
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
                                    </>
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* {subcodes.length >= 10 && ( */}
                    <div className="pagination" style={{ textAlign: 'center', marginTop: '15px' }}>
                        {currentPage > 1 && (
                            <button
                                style={{ width: '7%', padding: '0px 10px', backgroundColor: '#147594', color: '#fff' }}
                                //disabled={currentPage === 1}
                                onClick={() => handlePageChange(currentPage - 1)}
                            >
                                Previous
                            </button>
                        )}

                        {subcodes.length > 0 && (
                            <>
                                <span style={{ width: '45px', height: '45px', display: 'flex', alignItems: 'center', backgroundColor: '#147594', color: '#fff', justifyContent: 'center', margin: '0px 10px' }}>{currentPage}</span>
                                {currentPage !== totalPages && (
                                    <button
                                        style={{ width: '7%', padding: '0px 10px', backgroundColor: '#147594', color: '#fff' }}
                                        //disabled={subcodes.length < 10} // Assuming 10 records per page
                                        onClick={() => handlePageChange(currentPage + 1)}
                                    >
                                        Next
                                    </button>
                                )}
                            </>
                        )}
                    </div>
                    {/* )} */}
                </div>
            </div>
        </div>
    );
};
export default SubcodesData;