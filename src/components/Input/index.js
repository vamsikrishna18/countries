import React from 'react'

import PropTypes from 'prop-types'

// assets
import Arrow from '../../assets/arrow.svg'

import './styles.scss'

const Input = ({ selectedvalue, hideDropdown, setHideDropdown }) => (
    <div className="wrapper">
        <input
            type="input"
            className="w-100 h-100 p-2 input"
            placeholder="select a country..."
            defaultValue={selectedvalue}
            onFocus={() => setHideDropdown(true)}
        />
        {/* eslint-disable-next-line  */}
        <img
            src={Arrow}
            alt={Arrow}
            className="input-dropdown"
            onClick={() => setHideDropdown(!hideDropdown)}
        />
    </div>
)

Input.propTypes = {
    selectedvalue: PropTypes.string,
    hideDropdown: PropTypes.bool,
    setHideDropdown: PropTypes.func,
}

export default Input
