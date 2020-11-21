import React from 'react'
import { useParams } from 'react-router'
import { AddPolling } from './PollingPages/AddPolling'
import { EditPolling } from './PollingPages/EditPolling'

export const EditOrAddPolling = () => {

    const params = useParams()

    const data = JSON.parse(localStorage.getItem("Election"))

    return (
        <div>
            {
                params.name === "add" ? <AddPolling /> : <EditPolling data={data} />
            }
        </div>
    )
}
