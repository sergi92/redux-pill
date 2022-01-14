import React, { useState } from 'react'


export default function FilterSection() {

    const [searchSettings, setSearchSettings] = useState({ flat: false, house: false });

    const handleCheck = (e) => {
        const { name, checked } = e.target;
        setSearchSettings({ ...searchSettings, [name]: checked });
    }
    return (
        <>
            <div className="d-flex justify-content-center">
                <div>
                    <h6>Type of Home</h6>
                    <div className="form-check">
                        <input name="flat" className="form-check-input" type="checkbox" value={searchSettings.flat} id="flexCheckDefault" onChange={handleCheck} />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Flat/Apartment
                        </label>
                    </div>
                    <div className="form-check">
                        <input name="house" className="form-check-input" type="checkbox" value={searchSettings.house} id="flexCheckDefault" onChange={handleCheck} />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            House
                        </label>
                    </div>
                    <div className="form-check">
                        <input name="house" className="form-check-input" type="checkbox" value={searchSettings.duplex} id="flexCheckDefault" onChange={handleCheck} />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Duplex
                        </label>
                    </div>
                    <div className="form-check">
                        <input name="house" className="form-check-input" type="checkbox" value={searchSettings.penthouse} id="flexCheckDefault" onChange={handleCheck} />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            PentHouse
                        </label>
                    </div>
                </div>

                <div>
                    <h6>Condition</h6>
                    <div className="form-check">
                        <input name="flat" className="form-check-input" type="checkbox" value={searchSettings.newHomes} id="flexCheckDefault" onChange={handleCheck} />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            New Homes
                        </label>
                    </div>
                    <div className="form-check">
                        <input name="house" className="form-check-input" type="checkbox" value={searchSettings.needsReno} id="flexCheckDefault" onChange={handleCheck} />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Needs renovation
                        </label>
                    </div>
                    <div className="form-check">
                        <input name="house" className="form-check-input" type="checkbox" value={searchSettings.house} id="flexCheckDefault" onChange={handleCheck} />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Good condition
                        </label>
                    </div>
                </div>
                <div>
                    <h6>Bedrooms</h6>
                    <div className="btn-group mr-2" role="group" aria-label="First group">
                        <button type="button" className="btn btn-secondary">1</button>
                        <button type="button" className="btn btn-secondary">2</button>
                        <button type="button" className="btn btn-secondary">3</button>
                        <button type="button" className="btn btn-secondary">4</button>
                        <button type="button" className="btn btn-secondary">More than 4</button>
                    </div>
                </div>
                <div>
                    <h6>Bathrooms</h6>
                    <div className="btn-group mr-2" role="group" aria-label="First group">
                        <button type="button" className="btn btn-secondary">1</button>
                        <button type="button" className="btn btn-secondary">2</button>
                        <button type="button" className="btn btn-secondary">3</button>
                        <button type="button" className="btn btn-secondary">More than 3</button>
                    </div>
                </div>

                <div>
                    <h6>Price</h6>
                    <label htmlFor="customRange2" className="form-label">Max price</label>
                    <input type="range" className="form-range" min="0" max="5" id="customRange2"></input>
                    <label htmlFor="customRange2" className="form-label">Min Price</label>
                    <input type="range" className="form-range" min="0" max="5" id="customRange2"></input>
                </div>
                <div>
                    <h6>Publication date</h6>
                    <select name="publi-date" id="publi-date">
                        <option value="">Any</option>
                        <option value="1">Last 24 hours</option>
                        <option value="2">Last week</option>
                        <option value="3">Last month</option>
                        <option value="4">Last year</option>
                    </select>
                </div>
                <div>
                    <h6>Equipment</h6>
                    <select name="equipment" id="equipment">
                        <option value="">Any</option>
                        <option value="1">Equiped</option>
                        <option value="2">Not equiped</option>
                    </select>
                </div>

                <div>
                    <h6>More Filters</h6>
                    <div>
                        <h6>Type of Home</h6>
                        <div className="form-check">
                            <input name="flat" className="form-check-input" type="checkbox" value={searchSettings.flat} id="flexCheckDefault" onChange={handleCheck} />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Pets allowed
                            </label>
                        </div>
                        <div className="form-check">
                            <input name="house" className="form-check-input" type="checkbox" value={searchSettings.house} id="flexCheckDefault" onChange={handleCheck} />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Lift
                            </label>
                        </div>
                        <div className="form-check">
                            <input name="house" className="form-check-input" type="checkbox" value={searchSettings.house} id="flexCheckDefault" onChange={handleCheck} />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Garden
                            </label>
                        </div>
                        <div className="form-check">
                            <input name="house" className="form-check-input" type="checkbox" value={searchSettings.house} id="flexCheckDefault" onChange={handleCheck} />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Air conditioning
                            </label>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
