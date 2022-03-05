import React from "react"
import EventApi from "../../api/EventApi"
import {getToken} from "../../services/EventServices"

const token: string | null = getToken()

export const EventWeb: any = (props: any): JSX.Element => (
    <div className="section-app__item">
        <p>Event list</p>
        <EventApi token={token} />
    </div>
)
