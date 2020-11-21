import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { allCity, deleteCity, filterSortCity, getCity, searchCity } from '../../Redux/ElectionRedux/actions'
import style from "../Styles/styles.module.css"
import { Pollings } from './Pollings'

export const Dashboard = () => {

    const err = useSelector(state => state.Auth.err)
    const data = useSelector(state => state.Election.data)
    const total = useSelector(state => state.Election.totalPages)
    const auth = useSelector(state => state.Auth.auth)
    const isDelete = useSelector(state => state.Election.isDelete)
    const user = useSelector(state => state.Auth.userData)
    const [page, setPage] = useState(1)
    const [sort, setSort] = useState("")
    const [type, setType] = useState("")
    const dispatch = useDispatch()

    let totalPages = []

    for (let i = 0; i < total; i++) {
        totalPages.push(i + 1)
    }

    const handleDelete = (id) => {
        dispatch(deleteCity({ id }))
    }

    const handleSearch = (name) => {
        if (auth) {
            dispatch(searchCity({ district_id: user._id, name }))
        }
        else {
            dispatch(searchCity({ name }))
        }
    }
    useEffect(() => {
        if (auth) {
            if (sort === "" || type === "") {
                dispatch(getCity({ district_id: user._id, page }))
            }
            else {
                dispatch(filterSortCity({ district_id: user._id, page, sort, type }))
            }
        }
        else {
            dispatch(allCity({ sort, page, type }))
        }
    }, [sort, type, page, dispatch, auth, user, isDelete])

    return (
        <div>
            <div className="row">
                <div className="col-2 col-lg-1 py-5 border-right text-center" style={{ background: "whitesmoke" }}>
                    {
                        auth ?
                            <div className="mb-5">
                                <Link to="/modify-polling/add">
                                    <img src="https://www.flaticon.com/svg/static/icons/svg/17/17132.svg" alt="Adding" width="20px" height="20px" />
                                </Link>
                            </div>
                            : null
                    }
                    <div>
                        <div className={style.hoverDiv}>
                            <img src="https://www.flaticon.com/svg/static/icons/svg/565/565341.svg" alt="sort" width="20" />
                            <div className={`${style.innerHoverDiv}`}>
                                <p onClick={() => setSort("")}>Original</p>
                                <p onClick={() => setSort("asc")}>Ascending</p>
                                <p onClick={() => setSort("dsc")}>Descending</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <div className={style.hoverDiv}>
                            <img src="https://www.flaticon.com/svg/static/icons/svg/60/60954.svg" alt="sort" width="20" />
                            <div className={`${style.innerHoverDiv}`}>
                                <p onClick={() => setType("")}>Original</p>
                                <p onClick={() => setType("Metro")}>Metro</p>
                                <p onClick={() => setType("Town")}>Town</p>
                                <p onClick={() => setType("Village")}>Village</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-10 col-lg-11">
                    <div className="pt-5 text-center text-danger">{err}</div>
                    <Pollings data={data} totalPages={totalPages} page={page} setPage={setPage} handleDelete={handleDelete} handleSearch={handleSearch} />
                </div>
            </div>
        </div >
    )
}
