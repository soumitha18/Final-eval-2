import React from 'react'
import style from "../../Styles/styles.module.css"
import { useState } from 'react'
import { useHistory } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { editCity, handleState } from '../../../Redux/ElectionRedux/actions'
import { useEffect } from 'react'

export const EditPolling = ({ data }) => {
    const [name, setName] = useState(data.name)
    const [type, setType] = useState(data.type)
    const [population, setPopulation] = useState(data.population)
    let polling = data.polling
    const [pollingCount, setPollingCount] = useState(polling.length)
    const isEdit = useSelector(state => state.Election.isEdit)
    const auth = useSelector(state => state.Auth.auth)

    const history = useHistory()
    const dispatch = useDispatch()

    const editing = () => {
        let payload = {
            ...data,
            name,
            type,
            population,
            polling
        }
        console.log(payload)
        dispatch(editCity({ payload }))
    }

    const handleEditAdd = (obj, index) => {
        polling = polling.map((item, i) => i === index ? obj : item)
        console.log(polling, obj)
        alert("Poll updated!")
    }

    const addPolling = () => {
        let getPolling = []
        for (let i = 0; i < pollingCount; i++) {
            getPolling.push(<div key={i}><Polling onSubmit={handleEditAdd} data={polling[i]} i={i} /></div>)
        }
        return getPolling
    }

    const addMorePoll = () => {
        setPollingCount(pollingCount + 1)
        polling.push({ name: "", address: "", pincode: "" })
    }

    useEffect(() => {
        if (isEdit) {
            alert("City Updated Successfully!")
            dispatch(handleState())
            history.push("/")
        }
    }, [isEdit, dispatch, history])

    if (!auth) {
        history.push("/")
    }

    return (
        <div className={`px-5 pt-4 container ${style.form}`}>
            <h3 className="text-center text-info">EditTeachers Here</h3>
            <input className="form-control mb-3" type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Enter City Name" />
            <select value={type} onChange={e => setType(e.target.value)} className="form-control mb-3">
                <option value="">Type</option>
                <option value="Metro">Metro</option>
                <option value="Town">Town</option>
                <option value="Village">Village</option>
            </select>
            <input className="form-control mb-3" type="number" value={population} onChange={e => setPopulation(e.target.value)} placeholder="Enter Population" />
            <h5 className="text-info">Polling</h5>
            {
                addPolling()
            }
            <div className="row text-center">
                <div className="col-4">
                    <button className="btn btn-info px-5" onClick={() => addMorePoll()}>Add More Polling</button>
                </div>
                <div className="col-4">
                    <button className="btn btn-success px-5" onClick={() => editing()}>Update Change</button>
                </div>
                <div className="col-4">
                    <button className="btn btn-danger px-5" onClick={() => history.push("/polling")}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

function Polling({ onSubmit, data, i, handleDeletePoll }) {

    const [name, setName] = useState(data.name)
    const [address, setAddress] = useState(data.address)
    const [pincode, setPincode] = useState(data.pincode)

    const handleEdit = () => {
        if (name === "" || address === "" || pincode === "") {
            alert("No field should be empty")
            return
        }
        let obj = { name, address, pincode: Number(pincode) }
        onSubmit(obj, i)
    }

    return (
        <div className="px-5">
            <input className="form-control mb-3" type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
            <input className="form-control mb-3" type="text" value={address} onChange={e => setAddress(e.target.value)} placeholder="Address" />
            <input className="form-control mb-3" type="text" value={pincode} onChange={e => setPincode(e.target.value)} placeholder="Pin Code" />
            <button className="btn btn-primary mb-3" onClick={handleEdit}>update class</button>
            <button className="btn btn-danger ml-3 mb-3" onClick={() => handleDeletePoll(i)}>Delete</button>
        </div>
    )
}