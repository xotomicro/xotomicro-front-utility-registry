import React, {useEffect, useState} from "react"
import { isArray } from 'util'
import {EventModel} from "../model/EventModel"

function EventApi({token}: any) {
    const [events, setEvents]: any = useState(null)
    const [loading, setLoading]: any = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch(`http://${process.env.SERVICE_URL}:8080/events`, {headers: {"Content-Type": "application/json", Authorization: token}})
            .then((response: Response) => response.json())
            .then(setEvents)
            .then(() => setLoading(false))
    }, [token])

    if (loading) return <p>Loading...</p>

    if (events && Array.isArray(events)) {
        return (
            <div className="user">
                <table>
                    <thead>
                        <tr>
                            <th>Topic</th>
                            <th>Partition</th>
                            <th>Offset</th>
                            <th>Timestamp</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {events.map((event: EventModel, index: React.Key | null | undefined) => (
                            <tr key={index}>
                                <td>{event.topic}</td>
                                <td>{event.partition}</td>
                                <td>{event.offset}</td>
                                <td>{event.timestamp}</td>
                                <td>{event.value}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }

    return <p>Cannot load data</p>
}

export default EventApi
