import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function FilterSection() {
    const filter = useSelector(state => state.filter)
    const dispatch = useDispatch()

    const [searchSettings, setSearchSettings] = useState({ flat: false, house: false });


    const handleType = (e) => {

        const { value } = e.target;

        dispatch({
            type: 'FILTER_TYPE',
            propertyElement: 'type',
            value
        });
    }

    const handleCondition = (e) => {

        const { value } = e.target;

        dispatch({
            type: 'FILTER_CONDITION',
            propertyElement: 'condition',
            value
        });
    }
    const handleRooms = (e) => {
        const { value } = e.target;
        dispatch({
            type: 'FILTER_ROOMS',
            propertyElement: 'rooms',
            value
        })
    }

    const handleBathrooms = (e) => {
        const { value } = e.target;
        dispatch({
            type: 'FILTER_BATHROOMS',
            propertyElement: 'bathrooms',
            value
        })
    }
    const handleSize = (e) => {
        const { value } = e.target;
        dispatch({
            type: 'FILTER_SIZE',
            propertyElement: 'size',
            value
        })
    }
    const handleMaxPrice = (e) => {
        const { value } = e.target;
        console.log(value)
        dispatch({
            type: 'FILTER_MAX_PRICE',
            propertyElement: 'price',
            value
        })
    }

    const handleMinPrice = (e) => {
        const { value } = e.target;
        console.log(value)
        dispatch({
            type: 'FILTER_MIN_PRICE',
            propertyElement: 'price',
            value
        })
    }

    const handleMaxSize = (e) => {
        const { value } = e.target;
        console.log(value)
        dispatch({
            type: 'FILTER_MAX_SIZE',
            propertyElement: 'max_size',
            value
        })
    }

    const handleMinSize = (e) => {
        const { value } = e.target;
        console.log(value)
        dispatch({
            type: 'FILTER_MIN_SIZE',
            propertyElement: 'min_size',
            value
        })
    }
    const handlePet = (e) => {
        const { value } = e.target;
        dispatch({
            type: 'FILTER_PET',
            propertyElement: 'pets',
            value
        })
    }
    const handleGarden = (e) => {
        const { value } = e.target;
        dispatch({
            type: 'FILTER_GARDEN',
            propertyElement: 'garden',
            value
        })
    }
    const handleAirConditioning = (e) => {
        const { value } = e.target;
        dispatch({
            type: 'FILTER_AIR_CONDITIONING',
            propertyElement: 'air_conditioning',
            value
        })
    }
    const handleTerrace = (e) => {
        const { value } = e.target;
        dispatch({
            type: 'FILTER_TERRACE',
            propertyElement: 'terrace',
            value
        })
    }
    const handleSwimmingPool = (e) => {
        const { value } = e.target;
        dispatch({
            type: 'FILTER_SWIMMING_POOL',
            propertyElement: 'swimming_pool',
            value
        })
    }
    const handleDate = (e) => {
        const { value } = e.target;
        dispatch({
            type: 'FILTER_DATE',
            propertyElement: 'publication_date',
            value
        })
    }

    return (
        <>
            <div className="d-flex justify-content-center">
                <div>
                    <h6>Type of Home</h6>
                    <div className="form-check">
                        <input name="type" className="form-check-input" type="checkbox" value="flat/apartment" onChange={handleType} checked={filter.filters.type.includes("flat/apartment")} />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Flat/Apartment
                        </label>
                    </div>
                    <div className="form-check">
                        <input name="type" className="form-check-input" type="checkbox" value="house" onChange={handleType} checked={filter.filters.type.includes("house")} />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            House
                        </label>
                    </div>
                    <div className="form-check">
                        <input name="type" className="form-check-input" type="checkbox" value="duplex" onChange={handleType} checked={filter.filters.type.includes("duplex")} />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Duplex
                        </label>
                    </div>
                    <div className="form-check">
                        <input name="type" className="form-check-input" type="checkbox" value="penthouse" onChange={handleType} checked={filter.filters.type.includes("penthouse")} />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            PentHouse
                        </label>
                    </div>
                </div>

                <div>
                    <h6>Condition</h6>
                    <div className="form-check">
                        <input name="condition" className="form-check-input" type="checkbox" value="new" onChange={handleCondition} checked={filter.filters.condition.includes("new")} />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            New Homes
                        </label>
                    </div>
                    <div className="form-check">
                        <input name="condition" className="form-check-input" type="checkbox" value="needs renovation" onChange={handleCondition} checked={filter.filters.condition.includes("needs renovation")} />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Needs renovation
                        </label>
                    </div>
                    <div className="form-check">
                        <input name="condition" className="form-check-input" type="checkbox" value="good" onChange={handleCondition} checked={filter.filters.condition.includes("good")} />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Good condition
                        </label>
                    </div>
                </div>
                <div>
                    <h6>Bedrooms</h6>
                    <div className="btn-group mr-2" role="group" aria-label="First group">
                        <button type="button" className="btn btn-secondary" value="1" onClick={handleRooms}>1</button>
                        <button type="button" className="btn btn-secondary" value="2" onClick={handleRooms}>2</button>
                        <button type="button" className="btn btn-secondary" value="3" onClick={handleRooms}>3</button>
                        <button type="button" className="btn btn-secondary" value="4" onClick={handleRooms}>4</button>
                        <button type="button" className="btn btn-secondary" value="more_than_4" >More than 4</button>
                    </div>
                </div>
                <div>
                    <h6>Bathrooms</h6>
                    <div className="btn-group mr-2" role="group" aria-label="First group">
                        <button type="checkbox" className="btn btn-secondary" value="1" onClick={handleBathrooms}>1</button>
                        <button type="checkbox" className="btn btn-secondary" value="2" onClick={handleBathrooms}>2</button>
                        <button type="checkbox" className="btn btn-secondary" value="3" onClick={handleBathrooms}>3</button>
                        <button type="checkbox" className="btn btn-secondary" value="more_than_3" onClick={handleBathrooms}>More than 3</button>
                    </div>
                </div>

                <div>
                    <h6>Price</h6>
                    <label htmlFor="customRange2" className="form-label">Max price</label>
                    <input type="number" className="form-range" min="0" max="" id="customRange2" onChange={handleMaxPrice}></input>
                    <br />
                    <label htmlFor="customRange2" className="form-label">Min Price</label>
                    <input type="number" className="form-range" min="0" max="" id="customRange2" onChange={handleMinPrice}></input>
                </div>
                <div>
                    <div>
                        <h6>Size</h6>
                        <label htmlFor="customRange2" className="form-label">Max size</label>
                        <input type="number" className="form-range" min="0" max="" id="customRange2" onSubmit={handleMaxSize}></input>
                        <br />
                        <label htmlFor="customRange2" className="form-label">Min size</label>
                        <input type="number" className="form-range" min="0" max="" id="customRange2" onChange={handleMinSize}></input>

                    </div>
                    <h6>Publication date</h6>
                    <select name="publi-date" id="publi-date" onChange={handleDate}>
                        <option value="any">Any</option>
                        <option value="last_24h">Last 24 hours</option>
                        <option value="last_week">Last week</option>
                        <option value="last_month">Last month</option>
                        <option value="last_year">Last year</option>
                    </select>
                </div>

                <div>
                    <h6>More Filters</h6>
                    <div>
                        <h6>Type of Home</h6>
                        <div className="form-check">
                            <input name="pets" className="form-check-input" type="checkbox" value="true" onChange={handlePet} checked={filter.filters.pets.includes("true")} />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Pets allowed
                            </label>
                        </div>
                        <div className="form-check">
                            <input name="swimming_pool" className="form-check-input" type="checkbox" value="true" onChange={handleSwimmingPool} checked={filter.filters.swimming_pool.includes("true")} />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Swimming Pool
                            </label>
                        </div>
                        <div className="form-check">
                            <input name="garden" className="form-check-input" type="checkbox" value="true" onChange={handleGarden} checked={filter.filters.garden.includes("true")} />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Garden
                            </label>
                        </div>
                        <div className="form-check">
                            <input name="air_conditioning" className="form-check-input" type="checkbox" value="true" onChange={handleAirConditioning} checked={filter.filters.air_conditioning.includes("true")} />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Air conditioning
                            </label>
                        </div>
                        <div className="form-check">
                            <input name="terrace" className="form-check-input" type="checkbox" value="true" onChange={handleTerrace} checked={filter.filters.terrace.includes("true")} />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Terrace
                            </label>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
