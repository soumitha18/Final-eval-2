import React from 'react'
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

export const NavBar = () => {

    const auth = useSelector(state => state.Auth.auth)

    return (
        <div className={`row p-3 font-weight-bolder shadow border-bottom`} style={{ background: "whitesmoke" }}>
            <div className="col-12 col-md-8 col-lg-10">
                <Link to="/" className="text-dark h3 font-weight-bolder"><b>Election Polling</b></Link>
            </div>
            {
                !auth ?
                    <div className="col-12 col-md-4 col-lg-2">
                        <div className="text-right pr-5 pt-2">SignUp</div>
                    </div> :
                    <div className="col-12 col-md-4 col-lg-2">
                        <div className="text-right pr-5 pt-2">LogOut</div>
                    </div>
            }

        </div>
    )
}
