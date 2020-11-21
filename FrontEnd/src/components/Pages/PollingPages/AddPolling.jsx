import React from 'react'
import style from "../../Styles/styles.module.css"
import { useState } from 'react'
import { useHistory } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { addCity, handleState } from '../../../Redux/ElectionRedux/actions'
import { useEffect } from 'react'

export const AddPolling = () => {

    const [name, setName] = useState("")
    const [type, setType] = useState("")
    const [population, setPopulation] = useState(0)
    const [polling, setPolling] = useState(0)
    const [pollingData, setPollingData] = useState([])
    const history = useHistory()
    const dispatch = useDispatch()
    const user = useSelector(state => state.Auth.userData)
    const auth = useSelector(state => state.Auth.auth)
    const isAdded = useSelector(state => state.Election.isAdd)

    const handleCancel = () => {
        history.push("/")
    }

    const handleAdd = (obj) => {
        setPollingData([...pollingData, obj])
        alert("Polling Added!")
    }

    useEffect(() => {
        if (isAdded) {
            alert("City Added Successfully!")
            dispatch(handleState())
            history.push("/")
        }
    }, [isAdded, dispatch, history])

    const handleSubmit = () => {
        let payload = { district_id: user._id, name, type, population, polling: pollingData }
        dispatch(addCity(payload))
    }

    const AddPollingData = () => {
        let getPolling = []
        for (let i = 0; i < polling; i++) {
            getPolling.push(<div key={i}><Polling onSubmit={handleAdd} /></div>)
        }
        return getPolling
    }

    if (!auth) {
        history.push("/")
    }

    return (
        <div className={`p-5 container ${style.form}`}>
            <h3 className="text-center text-info mb-3">Add City Here</h3>
            <input className="form-control mb-3" type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Enter City Name" />
            <select value={type} onChange={e => setType(e.target.value)} className="form-control mb-3">
                <option value="">Type</option>
                <option value="Metro">Metro</option>
                <option value="Town">Town</option>
                <option value="Village">Village</option>
            </select>
            <input className="form-control mb-3" type="number" value={population} onChange={e => setPopulation(e.target.value)} placeholder="Enter Population" />
            <h5 className="text-info">Polling</h5>
            <Polling onSubmit={handleAdd} />
            {
                AddPollingData()
            }
            <div className="row text-center">
                <div className="col-4">
                    <button className="btn btn-info px-5" onClick={() => setPolling(polling + 1)}>Add More polling</button>
                </div>
                <div className="col-4">
                    <button className="btn btn-success px-5" onClick={handleSubmit}>Add City</button>
                </div>
                <div className="col-4">
                    <button className="btn btn-danger px-5" onClick={handleCancel}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

function Polling({ onSubmit, key }) {

    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [pincode, setPincode] = useState("")

    const handleAdd = () => {
        let obj = { name, address, pincode }
        onSubmit(obj)
    }

    return (
        <div className={`px-5 ${style.classes}`}>
            <input className="form-control mb-3" type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
            <input className="form-control mb-3" type="text" value={address} onChange={e => setAddress(e.target.value)} placeholder="Address" />
            <input className="form-control mb-3" type="text" value={pincode} onChange={e => setPincode(e.target.value)} placeholder="Pin Code" />
            <button className="btn btn-primary mb-3" onClick={handleAdd}>+</button>
        </div>
    )
}