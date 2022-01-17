import { connect } from "react-redux";

import { filterbyTypes } from "../../../redux/filter/actions";

const FilterSection = ({ onFilterbyTypes }) => {
    return (

        <div>
            <h6>Type of Home</h6>
            <div className="form-check">
                <input name="type" className="form-check-input" type="checkbox" id="flat/apartment" title='FILTER_TYPE' onChange={onHandleCheck} />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Flat/Apartment
                </label>
            </div>
            <div className="form-check">
                <input name="type" className="form-check-input" type="checkbox" id="house" title='FILTER_TYPE' onChange={onHandleCheck} />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    House
                </label>
            </div>
            <div className="form-check">
                <input name="type" className="form-check-input" type="checkbox" id="duplex" title="FILTER_TYPE" onChange={onHandleCheck} />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Duplex
                </label>
            </div>
            <div className="form-check">
                <input name="type" className="form-check-input" type="checkbox" id="penthouse" title="FILTER_TYPE" onChange={onHandleCheck} />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    PentHouse
                </label>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    onHandleCheck = (e) => dispatch(filterbyTypes(e.target.name, e.target.title, e.target.id))
}

const reduxHoc = connect(null, mapDispatchToProps);

export default reduxHoc(FilterSection);