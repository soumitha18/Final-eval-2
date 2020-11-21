import React, { useState } from 'react'
import { useHistory } from 'react-router'
import style from "../Styles/styles.module.css"

export const Pollings = ({ data, totalPages, page, setPage, handleDelete, handleSearch }) => {

    const [search, setSearch] = useState("")
    const history = useHistory()

    const handleChange = (item) => {
        localStorage.setItem("Election", JSON.stringify(item));
        history.push("/polling")
    }

    return (
        <div>
            <div className={`mb-3 ${style.search}`}>
                <div className="input-group">
                    <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} className="form-control" placeholder="Search Teacher" />
                    <div className="input-group-prepend">
                        <div className="input-group-text" onClick={() => handleSearch(search)}>
                            <img src="https://www.flaticon.com/svg/static/icons/svg/1086/1086933.svg" width="20px" alt="search" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-5 row">
                {
                    data && data.map((item, i) => (
                        <div key={i} className={`card my-3 ${style.cards}`}>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-12 col-md-3 col-lg-2">
                                        <img className="rounded-circle" src="https://via.placeholder.com/100" width="100px" alt={item.name} />
                                    </div>
                                    <div className="col-12 col-md-7 col-lg-8">
                                        <h5 className="font-weight-bolder card-text">{item.name}</h5>
                                        <p className="card-text">Population : <b>{item.population}</b></p>
                                        <p className="card-text">No. of Polling : <b>{item.polling.length}</b></p>
                                    </div>
                                    <div className="col-1">
                                        <img onClick={() => handleDelete(item._id)} src="https://www.flaticon.com/svg/static/icons/svg/2089/2089743.svg" alt="delete" width="20px" />
                                    </div>
                                    <div className="col-1">
                                        <img onClick={() => handleChange(item)} src="https://www.flaticon.com/svg/static/icons/svg/1828/1828805.svg" alt="moreInfo" width="20px" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))
                }
                {
                    data && data.length === 0 ? <div className="text-center text-danger col-12"><small><b>Data is Empty</b></small></div> : null
                }
            </div>
            <div>
                <ul className="pagination justify-content-center mt-4">
                    <li className={`page-item ${page === 1 ? "disabled" : null}`}>
                        <p className="page-link" tabIndex="-1" aria-disabled="true" onClick={() => setPage(page - 1)}>Previous</p>
                    </li>
                    {
                        totalPages && totalPages.map(item =>
                            <li className={`page-item ${item === page ? "active" : null}`} key={item}>
                                <p className="page-link" onClick={() => setPage(item)}>{item}</p>
                            </li>
                        )
                    }
                    <li className={`page-item ${page === totalPages[totalPages.length - 1] ? "disabled" : null}`}>
                        <p className="page-link" onClick={() => setPage(page + 1)}>Next</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}
