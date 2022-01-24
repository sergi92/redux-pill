import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { applyFilter } from '../../../redux/filter/actions'
import NavBar from '../../UI/NavBar'
import HomeList from '../../UI/HomeList'
import FilterSection from '../../UI/FilterSection'
export default function Dashboard() {

    return (
        <div>
            <NavBar />
            <FilterSection />
            <br />
            <HomeList />
        </div>
    )
}
