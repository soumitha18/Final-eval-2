import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { deleteCity, handleState } from '../../Redux/ElectionRedux/actions'
import style from "../Styles/styles.module.css"

export const Polling = () => {

    const data = JSON.parse(localStorage.getItem("Election"))
    const history = useHistory()
    const dispatch = useDispatch()
    const auth = useSelector(state => state.Auth.auth)
    const isDelete = useSelector(state => state.Election.isDelete)

    const handleBack = () => {
        history.push("/")
    }

    const handleEdit = () => {
        history.push("/modify-polling/edit")
    }

    const handleDelete = (id) => {
        dispatch(deleteCity({ id }))
    }

    useEffect(() => {
        if (isDelete) {
            alert(`${data.name} Deleted Successfully`)
            dispatch(handleState())
            history.push("/")
        }
    }, [isDelete, dispatch, history, data.name])

    return (
        <div className={`card ${style.more} mt-5`}>
            <div className="card-header">
                <div className="row">
                    <h2 className="col-10">{data.name}</h2>
                    <div className="col-1">
                        <img className="rounded-circle" src="https://via.placeholder.com/50" alt={data.name} width="50px" />
                    </div>
                </div>
            </div>
            <div className="card-body">
                <div className="card-text h5">Type : <b className="h4">{data.type}</b></div>
                <div className="card-text h5">Population : <b className="h4">{data.population}</b></div>
                <div className="card-text row">
                    <p className="col-12 col-md-2 col-lg-2 h4">Polling : </p>
                    <div className="col-12 col-md-10 col-10 text-center">
                        <div className="card pt-3 bg-dark text-light">
                            <div className="row">
                                <p className="col-3">Sl.No</p>
                                <p className="col-3">Name</p>
                                <p className="col-3">Address</p>
                                <p className="col-3">Pin Code</p>
                            </div>
                        </div>
                        {
                            data.polling && data.polling.map((item, i) =>
                                <div key={i} className="card pt-3">
                                    <div className="row">
                                        <p className="col-3">{i + 1}</p>
                                        <p className="col-3">{item.name}</p>
                                        <p className="col-3">{item.address}</p>
                                        <p className="col-3">{item.pincode}</p>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
                {
                    auth ?
                        <div className="row m-3 text-center">
                            <div className="col-4">
                                <button className="btn btn-info px-5" onClick={() => handleEdit()}>Edit</button>
                            </div>
                            <div className="col-4">
                                <button className="btn btn-success px-5" onClick={() => handleBack()}>Back</button>
                            </div>
                            <div className="col-4">
                                <button className="btn btn-danger px-5" onClick={() => handleDelete(data._id)}>Delete</button>
                            </div>
                        </div>
                        :
                        <div className="text-center mt-3">
                            <button className="btn px-5 btn-success" onClick={() => handleBack()} >Back</button>
                        </div>
                }
            </div>
        </div>
    )
}
