import Header from "../../../components/Layout/Header"
import Sidebar from "../../../components/Layout/Sidebar"
import "../../../assets/scss/search.scss";
import IcoSearch from "../../../assets/images/search_ico.svg"
// import IcoMore from "../../../assets/images/more.svg"

const HomeSearch = () => {
    return (
      <div className="d-flex">  
        <Sidebar />
        <div className="page-wrapper search">         
            <Header />
            <div className="common-layout">
                <h2 className="page-title mb-4">Search</h2> 
                <div className="table-wrapper py-4">
                    <div className="search-data mx-auto">
                        <div className="table-search px-0">
                            <div className="position-relative">
                                <img src={IcoSearch} className="ico_float left" alt="Search Here" />
                                <input type="text" placeholder="Search" id="search" name="search" />
                            </div>
                        </div>
                        <table className="mt-4">
                            <thead>
                                <tr>
                                    <th style={{width: "30%"}}>Code</th>
                                    <th style={{width: "70%"}}>Description</th> 
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        4
                                    </td>
                                    <td>4-way version</td> 
                                </tr> 
                                <tr>
                                    <td>
                                        WEH
                                    </td>
                                    <td>Electro-hydraulic</td> 
                                </tr> 
                                <tr>
                                    <td>
                                    7X
                                    </td>
                                    <td>Component series 70…79 (70…79: unchanged installation and connection
                                        dimensions) – NG16 (from series 72) and NG25 ("W.H 22")
                                    </td> 
                                </tr> 
                            </tbody>
                        </table>
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
                </div> */}  
            </div>
        </div>
      </div>
    );
  };
export default HomeSearch;