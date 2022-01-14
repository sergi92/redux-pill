import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function SearchForm() {

    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/dashboard');
    }
    return (
        <div>
            <form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    )
}
