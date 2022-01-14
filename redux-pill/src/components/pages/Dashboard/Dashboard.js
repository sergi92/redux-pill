import React from 'react'

import NavBar from '../../UI/NavBar'
import HomeList from '../../UI/HomeList'
import FilterSection from '../../UI/FilterSection'
export default function Dashboard() {
    return (
        <div>
            <NavBar />
            Hello from Dashboard
            <FilterSection />
            <br />
            <HomeList />
        </div>
    )
}
