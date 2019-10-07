import React from 'react'
import NumericLabel from 'react-pretty-numbers'
import { UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

const option = {
    'justification': 'L',
    'locales': 'en-US',
    'currency': false,
    'percentage': false,
    'precision': 0,
    'commafy': true,
    'shortFormat': true,
    'shortFormatMinValue': 10000,
    'shortFormatPrecision': 1,
    'title': true
};

const CountWidget = ({ count, edit, handleRemoveCount, handleOpenInfo, handleOpenEdit }) => {

    return (
        <div className="container mt-3">
            <div className="ox-dashboard-edit-block">
                    {edit ?
                        <button onClick={()=> handleRemoveCount(count.id)} className="btn ox-dashboard-block-btn-count">
                            <i onClick={()=> handleRemoveCount(count.id)} className="fas fa-times"></i>

                        </button>   
                        :
                        <UncontrolledButtonDropdown>
                            <DropdownToggle className="ox-dashboard-main-dot-menu">
                                <i className="fas fa-ellipsis-h"></i>
                            </DropdownToggle>
                            <DropdownMenu className="ox-dashboard-count-dot-item">
                                <DropdownItem onClick={() => handleOpenInfo(count)}>
                                    Info
                                </DropdownItem>
                                <DropdownItem onClick={() => handleOpenEdit()}>
                                    Edit
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledButtonDropdown>   
                    }
            </div>
            <div className="row">
                <h2>
                    <NumericLabel params={option}>{count.value}</NumericLabel>
                </h2>
                <span className={count.compare.charAt(0) === '+' ? 'ox-dashboard-tag-green' : ''}>{count.compare}</span>
            </div>
            <div className="row ox-d-description">
                <p>
                    {count.title} {'for'} {' '}
                    {count.period}
                </p>
            </div>
        </div>
    )
}

export default CountWidget