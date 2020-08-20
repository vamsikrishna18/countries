import React, { useState, useEffect } from 'react'

// components
import Select from '../../components/select'

// service
import { getCountriesList } from '../../services/service'

import './styles.scss'

export default () => {
    const [countries, setCountries] = useState([])
    const [apiCall, setApiCall] = useState(false)

    useEffect(() => {
        getCountriesList((data) => {
            if (data) {
                setCountries(data.countries)
            }
        })
    }, [])

    useEffect(() => {
        console.log('exec')
        if (apiCall) {
            getCountriesList((data) => {
                if (data) {
                    setCountries(data.countries)
                }
            })
        }
    }, [apiCall])

    return (
        <div className="container-fluid m-4 p-4">
            <div className="navlinks d-flex pb-4 pb-3 pl-4">
                <a href="/user" className="pl-5">
                    Standard Dropdown
                </a>
                <a href="/admin" className="ml-4 pl-4">
                    Admin Dropdown
                </a>
            </div>
            <div className="pl-5 mt-3">
                <Select data={countries} setApiCall={setApiCall} />
            </div>
        </div>
    )
}
