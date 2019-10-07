import React, { Component } from 'react'
import { connect } from 'react-redux'

// reactstrap
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'
import Select from 'react-select'
import { DatePicker } from 'material-ui-pickers'

// actions 
import { getLocations, getBrands, getZones, getCashDesks, getBlurs } from '../../actions/widgetActions'

import { selects } from '../../utils/modalSelects'
import moment from 'moment'

class ModalEdit extends Component {


    state = {
        category: "",
        type: "",
        style: "",
        zone: "",
        types: [],
        styles: [],
        categories: selects.categories,
        zones: [],
        currencies: [],
        currency: '',
        blurs: [],
        blur: '',
        blurLabel: "",
        period: '',
        periods: selects.periods,
        groups: selects.groups,
        fromDate: new Date(),
        toDate: new Date(),
        ifCompare: false,
        group: ''
    }


    componentDidMount(){
        this.props.getZones()
    }

    onSelectCategory = (e) => {
        const sale = e.target.value
        const types = selects.categories.filter(select => select.value === sale)
        console.log(types[0].types)
        this.setState({
            ...this.setState,
            types: types[0].types,
            category: sale,
            styles: [],
            type: ''
        })
    }

    onSelectType = (e) => {
        const { types } = this.state
        const type = e.target.value
        let label = ""
        const styles = types.filter(select => select.value === type)
        if (type.toLowerCase().indexOf("location") !== -1) {
            this.props.getBlurs("locations")
            label = "Locations"
        }
        else if (type.toLowerCase().indexOf("brand") !== -1) {
            this.props.getBlurs("brands")
            label = "Brands"
        }
        else if (type.toLowerCase().indexOf("cashdesk") !== -1) {
            this.props.getBlurs('cash-desks')
            label = "Cash Desks"
        }
        else {
            this.props.getBlurs('cash-desks')
            label = "Cash Desks"
        }
        this.setState({
            ...this.state,
            styles: styles[0].styles,
            type: type,
            blurLabel: label
        })
    }

    onSelectStyle = (e) => {
        this.setState({
            ...this.state,
            style: e.target.value
        })
    }

    onSelectZone = e => {

        const { zones } = this.state
        const currentZone = zones.filter(zone => zone.name === e.target.value)

        let currencies = currentZone[0].currencies

        this.setState({
            ...this.state,
            zone: e.target.value,
            currencies: currencies.map(currency => ({ value: currency, name: currency })),
            currency: currencies[0]
        })
    }

    onSelectCurrency = e => {
        this.setState({
            ...this.state,
            currency: e.target.value
        })
    }

    onSelectBlur = e => {

        this.setState({
            ...this.state,
            blur: e
        })
    }

    onSelectPeriod = e => {
        this.setState({
            ...this.state,
            period: e.target.value
        })
    }

    onSelectGroup = e => {
        this.setState({
            ...this.state,
            group: e.target.value
        })
    }

    onSelectDate = date => {
        console.log(date.calendar())
        this.setState({
            ...this.state,
            fromDate: date
        })
    }


    changeCompare = (e) => {
        this.setState({
            ifCompare: e.target.checked
        })
    }

    handleCloseModal = () => {
        this.setState({
            category: "",
            type: "",
            style: "",
            zone: "",
            currency: '',
            blur: '',
            blurLabel: "",
            period: '',
        })
        const form = document.getElementById("ox-dashboard-modal-form")
        form.reset()

        this.props.handleCloseEdit()
    }

    handleSubmit = () => {
        const { category, style, type, blur, fromDate, toDate, period, group, zone, currency } = this.state

        const data = {
            category: category,
            type: type,
            style: style,
            period: period,
            columns: [
                {
                    name: zone
                },
                {
                    name: "net_sales",
                    currency: currency
                }
            ],
            useGraphic: {
                position: [0, 0, 2, 3],
                filter: {
                    location: [11],
                    zone: 2
                }
            }
        }

        this.props.addWidget(data)


        this.setState({
            category: "",
            type: "",
            style: "",
            zone: "",
            currency: '',
            blur: '',
            blurLabel: "",
            period: '',
        })
        const form = document.getElementById("ox-dashboard-modal-form")
        form.reset()


    }


    render() {

        const { classes, open } = this.props
        const { category, type, style, categories, types, styles, zones, zone,
            currencies, currency, blur, blurs, blurLabel,
            period, periods, fromDate, toDate, ifCompare, groups } = this.state

        return (
            <Modal
                aria-labelledby="simple-dialog-title"
                isOpen={open}
            >
                <ModalHeader id="simple-dialog-title">Add widget</ModalHeader>
                <ModalBody>
                    <form id="ox-dashboard-modal-form">
                        <div className="form-group text-grey">
                            <label htmlFor="category">Category</label>
                            <select
                                onChange={this.onSelectCategory}
                                className="form-control"
                                id="category"
                                placeholder="choose category"
                                defaultValue="choose"
                            >
                                <option value="choose" disabled>choose category</option>
                                {categories.map(option => (
                                    <option key={option.label} value={option.value}>{option.label}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="type">Type</label>
                            <select
                                className="form-control"
                                id="type"
                                disabled={types.length > 0 ? false : true}
                                onChange={this.onSelectType}
                                defaultValue="choose"
                            >
                                <option value="choose" disabled>choose type</option>
                                {types.map(option => (
                                    <option key={option.label} value={option.value}>{option.label}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="style">Style</label>
                            <select
                                className="form-control"
                                id="style"
                                disabled={styles.length > 0 ? false : true}
                                onChange={this.onSelectStyle}
                                defaultValue="choose"
                            >
                                <option value="choose" disabled>choose style</option>
                                {styles.map(option => (
                                    <option key={option.label} value={option.value}>{option.label}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="zone">Zone</label>
                                <select
                                    className="form-control"
                                    id="zone"
                                    disabled={zones.length > 0 ? false : true}
                                    onChange={this.onSelectZone}
                                    defaultValue="choose"
                                >
                                    <option value="choose" disabled>choose zone</option>
                                    {zones.map(option => (
                                        <option key={option.id} value={option.value}>{option.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="currency">Currency</label>
                                <select
                                    className="form-control"
                                    id="currency"
                                    disabled={zones.length > 0 ? false : true}
                                    onChange={this.onSelectCurrency}
                                    defaultValue="choose"
                                >
                                    <option value="choose" disabled>choose currency</option>
                                    {currencies.map(option => (
                                        <option key={option.name} value={option.value}>{option.name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        {blurs.length > 0 &&
                            <div className="form-group">
                                <label htmlFor="blur">{blurLabel}</label>
                                <Select
                                    isMulti={true}
                                    value={blur}
                                    onChange={this.onSelectBlur}
                                    options={blurs}
                                />
                            </div>
                        }
                        <div className="form-group">
                            <label htmlFor="period">Period</label>
                            <select
                                className="form-control"
                                id="period"
                                onChange={this.onSelectPeriod}
                                defaultValue="choose"
                            >
                                <option value="choose" disabled>choose period</option>
                                {periods.map(option => (
                                    <option key={option.value} value={option.value}>{option.label}</option>
                                ))}
                            </select>
                        </div>
                        {period.indexOf('custom') > -1 &&

                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <div className="picker">
                                        <label htmlFor="fromDate">from</label>
                                        <DatePicker
                                            id="fromDate"
                                            value={fromDate}
                                            onChange={(date) => this.onSelectDate(date)}
                                            className="form-control"
                                            format="DD/MM/YYYY"
                                        />
                                    </div>
                                </div>
                                <div className="form-group col-md-6">
                                    <div className="picker">
                                        <label htmlFor="toDate">to</label>
                                        <DatePicker
                                            id="toDate"
                                            value={toDate}
                                            onChange={(date) => this.onSelectDate(date)}
                                            className="form-control"
                                            format="DD/MM/YYYY"
                                        />
                                    </div>
                                </div>
                            </div>
                        }
                        <div className="form-group">
                            <label htmlFor="group">Group by date</label>
                            <select
                                className="form-control"
                                id="group"
                                onChange={this.onSelectGroup}
                                defaultValue="choose"
                            >
                                <option value="choose" disabled>Group by date</option>
                                {groups.map(option => (
                                    <option key={option.value} value={option.value}>{option.label}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-row">
                            <div className='form-group col-md-2'>
                                <label htmlFor="customCheck1">Compare</label>
                                <input type="checkbox" onChange={this.changeCompare} className="form-control" id="customCheck1" />
                            </div>
                            {ifCompare &&
                                <div className="form-group col-md-9">
                                    <label htmlFor="compare_with">Compare with</label>
                                    <select
                                        className="form-control"
                                        id="compare_with"
                                        onChange={this.onSelectPeriod}
                                        defaultValue="choose"
                                    >
                                        <option value="choose" disabled>compare with</option>
                                        <option value="compare_with_last_period">Compare with last period</option>
                                        <option value="compare_with_same_period_with_last_year">Compare with same period with last year</option>
                                    </select>
                                </div>
                            }
                        </div>
                    </form>
                </ModalBody>

                <ModalFooter>
                    <Button onClick={this.handleCloseModal} outline color="secondary">Cancel</Button>
                    <Button color="primary" onClick={this.handleSubmit}>Submit</Button>
                </ModalFooter>

            </Modal>
        )
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.zones !== this.props.zones) {
            if (nextProps.zones.length) {
                const selectZones = nextProps.zones.map(zone => ({ ...zone, value: zone.name }))
                this.setState({
                    ...this.state,
                    zones: selectZones
                })
            }
        }
        if (nextProps.blurs !== this.props.blurs) {
            if (nextProps.blurs.length) {
                const selectBlur = nextProps.blurs.map(blur => ({ id: blur.id, value: blur.name, label: blur.name }))
                this.setState({
                    ...this.state,
                    blurs: selectBlur
                })
            }
        }
    }

}

const mapStateToProps = state => ({
    zones: state.widgets.zones,
    blurs: state.widgets.blurs
})

export default connect(mapStateToProps, { getBrands, getLocations, getZones, getCashDesks, getBlurs })(ModalEdit)
