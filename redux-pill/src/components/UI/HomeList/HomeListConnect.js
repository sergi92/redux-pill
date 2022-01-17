import { connect } from "react-redux";


const HomeListConnect = ({ properties }) => {
    return (
        <div>
            {properties.map(item => <ul>
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
                <li key={`pet-${item.id}`}>Pet: {item.pet}</li>
                <li key={`garden-${item.id}`}>Garden: {item.garden}</li>
                <li key={`air-${item.id}`}>Air conditioning: {item.air_conditioning}</li>
                <li key={`swimming-${item.id}`}>Swimming Pool: {item.swimming_pool}</li>
                <li key={`terrace-${item.id}`}>Terrace: {item.terrace}</li>
                <li key={`date-${item.id}`}>Publication Date: {item.publication_date}</li>
                <li key={`price-${item.id}`}>Price: {item.price}</li>
                <li key={`rooms-${item.id}`}>Rooms: {item.room}</li>
            </ul>)}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        properties: state.filter.propertiesData
    }
};

const reduxHoc = connect(mapStateToProps);

export default reduxHoc(HomeListConnect);
