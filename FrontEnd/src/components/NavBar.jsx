import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { loginUser, logout, registerUser } from '../Redux/AuthRedux/actions'
import "./Styles/styles.module.css"

export const NavBar = () => {

    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [district, setDistrict] = useState("")
    const [password, setPassword] = useState("")
    const err = useSelector(state => state.Auth.err)
    const auth = useSelector(state => state.Auth.auth)
    const dispatch = useDispatch()

    const handleLogin = () => {
        dispatch(loginUser({ email, password, district }))
        handleData()
    }

    const handleRegister = () => {
        dispatch(registerUser({ name, email, password, district }))
        handleData()
    }

    const handleLogout = () => {
        dispatch(logout())
    }

    const handleData = () => {
        setName("")
        setEmail("")
        setDistrict("")
        setPassword("")
    }

    return (
        <div className={`row p-3 font-weight-bolder shadow border-bottom`} style={{ background: "whitesmoke" }}>
            <div className="col-12 col-md-8 col-lg-10">
                <Link to="/" className="text-dark h3 font-weight-bolder" style={{ textDecoration: "none" }}><b>Election Polling</b></Link>
            </div>
            {
                !auth ?
                    <div className="col-12 col-md-4 col-lg-2">
                        <div className="text-right pr-5 pt-2" data-toggle="modal" data-target="#modalLRForm">Sign</div>
                    </div> :
                    <div className="col-12 col-md-4 col-lg-2">
                        <div className="text-right pr-5 pt-2" onClick={handleLogout}>LogOut</div>
                    </div>
            }
            <div
                className="modal fade"
                id="modalLRForm"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="myModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog cascading-modal" role="document">
                    <div className="modal-content">
                        <div className="modal-c-tabs">
                            <ul
                                className="nav nav-tabs md-tabs tabs-2 bg-secondary darken-3"
                                role="tablist"
                            >
                                <li className="nav-item">
                                    <div
                                        className="nav-link active"
                                        data-toggle="tab"
                                        href="#panel7"
                                        role="tab"
                                    >
                                        <i className="fas fa-user mr-1"></i>Login</div>
                                </li>
                                <li className="nav-item">
                                    <div
                                        className="nav-link"
                                        data-toggle="tab"
                                        href="#panel8"
                                        role="tab"
                                    >
                                        <i className="fas fa-user-plus mr-1"></i>Register</div>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div
                                    className="tab-pane fade in show active"
                                    id="panel7"
                                    role="tabpanel"
                                >
                                    <div className="modal-body">
                                        <input
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Enter Email"
                                            type="email"
                                            className="form-control form-control-sm validate mb-3"
                                        />
                                        {err.includes("email") && (
                                            <small className="text-danger">{err}</small>
                                        )}
                                        <input
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="Enter Password"
                                            type="password"
                                            className="form-control form-control-sm validate mb-3"
                                        />
                                        {err.includes("password") && (
                                            <small className="text-danger">{err}</small>
                                        )}
                                        <input
                                            value={district}
                                            onChange={(e) => setDistrict(e.target.value)}
                                            placeholder="Enter District"
                                            type="text"
                                            className="form-control form-control-sm validate mb-3"
                                        />
                                        {err.includes("district") && (
                                            <small className="text-danger">{err}</small>
                                        )}
                                        <div className="text-center">
                                            <button onClick={handleLogin} className="btn btn-secondary">Log in</button>
                                            {!err.includes("email") && !err.includes("password") && (
                                                <small className="text-danger">{err}</small>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="panel8" role="tabpanel">
                                    <div className="modal-body">
                                        <input
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder="Enter Name"
                                            type="text"
                                            className="form-control form-control-sm validate mb-3"
                                        />
                                        {err.includes("name") && (
                                            <small className="text-danger">{err}</small>
                                        )}
                                        <input
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Enter Email"
                                            type="email"
                                            className="form-control form-control-sm validate mb-3"
                                        />
                                        {err.includes("email") && (
                                            <small className="text-danger">{err}</small>
                                        )}
                                        <input
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="Enter Password"
                                            type="password"
                                            className="form-control form-control-sm validate mb-3 "
                                        />
                                        {err.includes("password") && (
                                            <small className="text-danger">{err}</small>
                                        )}
                                        <input
                                            value={district}
                                            onChange={(e) => setDistrict(e.target.value)}
                                            placeholder="Enter District"
                                            type="text"
                                            className="form-control form-control-sm validate mb-3"
                                        />
                                        {err.includes("district") && (
                                            <small className="text-danger">{err}</small>
                                        )}
                                        <div className="text-center form-sm">
                                            <button
                                                onClick={handleRegister}
                                                className="btn btn-secondary"
                                            >Sign up</button>
                                            {!err.includes("email") &&
                                                !err.includes("password") &&
                                                !err.includes("name") && (
                                                    <small className="text-danger">{err}</small>
                                                )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
