import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import style from "../Styles/styles.module.css"
import { Pollings } from './Pollings'

export const Dashboard = () => {

    const err = useSelector(state => state.Auth.err)
    const data = [{ name: "Chittoor", type: "Town", population: 234453, polling: [1, 2, 3] }]
    const totalPages = [1, 2, 3, 4]
    const [page, setPage] = useState(1)

    return (
        <div>
            <div className="row">
                <div className="col-2 col-lg-1 py-5 border-right text-center" style={{ background: "whitesmoke" }}>
                    <div>
                        <div className={style.hoverDiv}>
                            <img src="https://www.flaticon.com/svg/static/icons/svg/565/565341.svg" alt="sort" width="20" />
                            <div className={`${style.innerHoverDiv}`}>
                                <p>Original</p>
                                <p>Ascending</p>
                                <p>Descending</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <div className={style.hoverDiv}>
                            <img src="https://www.flaticon.com/svg/static/icons/svg/60/60954.svg" alt="sort" width="20" />
                            <div className={`${style.innerHoverDiv}`}>
                                <p>Original</p>
                                <p>Metro</p>
                                <p>Town</p>
                                <p>Village</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-10 col-lg-11">
                    <div className="pt-5 text-center text-danger">{err}</div>
                    <Pollings data={data} totalPages={totalPages} page={page} setPage={setPage} />
                </div>
            </div>
        </div >
    )
}
