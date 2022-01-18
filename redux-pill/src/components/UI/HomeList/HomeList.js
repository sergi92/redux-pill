import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProperties, applyFilter } from '../../../redux/filter/actions'
const data = require('../../../components/db/data')

export default function HomeList() {

    const properties = useSelector(state => state.properties)
    const dispatch = useDispatch()

    // console.log(properties)
    // getProperties()

    // useEffect(() => {
    //     // dispatch(getProperties())
    //     dispatch(applyFilter())
    // }, [dispatch])

    return (
        <div>
            {/* {properties.map(item => <ul>
                <li key={`street-${item.id}`}>Street: {item.street}</li>
                <li key={`number-${item.id}`}>Number: {item.number}</li>
                <li key={`city-${item.id}`}>City: {item.city}</li>
                <li key={`province-${item.id}`}>Province: {item.province}</li>
                <li key={`status-${item.id}`}>Status: {item.status}</li>
                <li key={`type-${item.id}`}>Type: {item.type}</li>
                <li key={`description-${item.id}`}>Description: {item.description}</li>
                <li key={`mail-${item.id}`}>E-mail: {item.contact_mail}</li>
                <li key={`phone-${item.id}`}>Phone: {item.contact_phone}</li>
                <li key={`condition-${item.id}`}>Condition: {item.condition}</li>
                <li key={`bath-${item.id}`}>Bathrooms: {item.bath}</li>
                <li key={`size-${item.id}`}>Size: {item.size}</li>
                <li key={`pet-${item.id}`}>Pet: {item.pet ? "Yes" : "No"}</li>
                <li key={`garden-${item.id}`}>Garden: {item.garden ? "Yes" : "No"}</li>
                <li key={`air-${item.id}`}>Air conditioning: {item.air_conditioning ? "Yes" : "No"}</li>
                <li key={`swimming-${item.id}`}>Swimming Pool: {item.swimming_pool ? "Yes" : "No"}</li>
                <li key={`terrace-${item.id}`}>Terrace: {item.terrace ? "Yes" : "No"}</li>
                <li key={`date-${item.id}`}>Publication Date: {item.publication_date}</li>
                <li key={`price-${item.id}`}>Price: {item.price}</li>
                <li key={`rooms-${item.id}`}>Rooms: {item.room}</li>
            </ul>)} */}
        </div>
    )
}
