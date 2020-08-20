import React, { useState, useMemo, useEffect } from 'react'

// tools
import { uid } from 'react-uid'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

// components
import Input from '../Input'

// service
import { addCountryToList } from '../../services/service'

// styles
import './styles.scss'
import 'react-toastify/dist/ReactToastify.css'

const Select = ({ data, setApiCall }) => {
    const [searchValue, setSearchValue] = useState('')
    const [selectedvalue, setSelectedValue] = useState('')
    const [visible, setVisible] = useState(5)
    const [hideDropdown, setHideDropdown] = useState(false)

    const location = useLocation()

    useEffect(() => {
        if (hideDropdown) {
            setVisible(5)
            setSearchValue('')
        }
    }, [hideDropdown])

    const handleSearchData = useMemo(() => {
        if (searchValue && searchValue.length) {
            return data.filter((item) =>
                item
                    .toLocaleLowerCase()
                    .includes(searchValue.toLocaleLowerCase())
            )
        }
        return data
    }, [searchValue, data])

    const handleAddCountry = () => {
        addCountryToList(searchValue, (value) => {
            if (value?.status === 'Success') {
                toast.success('Added successfully!')
                setApiCall(true)
                setApiCall(false)
                return setSelectedValue(searchValue)
            }
            toast.warning('Error occurred/country already exist!')
        })
    }

    return (
        <>
            <h5 className="text-secondary pb-2">
                Click on the icon to open/close the dropdown
            </h5>
            <div className="selectBox">
                <Input
                    selectedvalue={selectedvalue}
                    hideDropdown={hideDropdown}
                    setHideDropdown={setHideDropdown}
                />
                {hideDropdown && (
                    <div className="selectBox-select px-1 pt-3 pb-1 w-100 h-auto border border-top-0">
                        <input
                            type="input"
                            className="searchBar p-2 w-100"
                            placeholder="search country...."
                            onChange={(e) => setSearchValue(e.target.value)}
                        />

                        <div className="pt-2 px-1 selectBox-options">
                            {Array.isArray(handleSearchData) &&
                            handleSearchData.length ? (
                                handleSearchData
                                    .slice(0, visible)
                                    .map((item, i) => (
                                        // eslint-disable-next-line
                                        <div
                                            className="p-2 option"
                                            key={uid(item, i)}
                                            onClick={() =>
                                                setSelectedValue(item)
                                            }
                                        >
                                            {item}
                                        </div>
                                    ))
                            ) : (
                                <div className="justify-content-between align-items-center d-flex selectBox-custom">
                                    <div>{`"${searchValue}" not found`}</div>

                                    {location.pathname === '/admin' && (
                                        <button
                                            type="button"
                                            className="btn btn-outline-secondary text-capitalize"
                                            onClick={handleAddCountry}
                                        >
                                            Add & select
                                        </button>
                                    )}
                                </div>
                            )}
                        </div>

                        {handleSearchData.length > visible ? (
                            <div>
                                {/* eslint-disable-next-line  */}
                                <p
                                    className="selectBox-more text-right m-0 font-weight-bold pr-2"
                                    onClick={() =>
                                        setVisible((preCount) => preCount + 5)
                                    }
                                >
                                    5 more...
                                </p>
                            </div>
                        ) : (
                            ''
                        )}
                    </div>
                )}{' '}
            </div>
            <ToastContainer />
        </>
    )
}

Select.propTypes = {
    data: PropTypes.instanceOf(Array),
    setApiCall: PropTypes.func,
}

export default Select
