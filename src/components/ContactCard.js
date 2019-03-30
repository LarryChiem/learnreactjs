import React from "react"

function ContactCard(props) {
    return (
        <div className="contact-card">
            <h3>{props.name}</h3>
            <img src={props.imgUrl} alt="1"/>
            <p>Phone: {props.phone}</p>
            <p>Email: {props.email}</p>
        </div>
    )
}
export default ContactCard
