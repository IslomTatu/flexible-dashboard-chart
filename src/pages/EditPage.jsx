import React, { Component } from 'react'
import { connect } from 'react-redux'

import EditableCount from '../container/CountContainer/EditableCount';
import EditableChart from '../container/ChartContainer/EditableChart';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';




class EditPage extends Component {

    state = {
        open: false,
        saveClicked: false
    }

    handleOpen = () => {
        this.setState({
            open: !this.state.open
        })
    }

    handleMainPage = () => {
        this.props.history.push("/")
    }

    handleClickSave = () => {
        this.setState({
            ...this.state,
            saveClicked: true
        })
    }

    render() {
        const { loading } = this.props
        const { open, saveClicked } = this.state
        return (
            <div className="w-100">
                <div className="row">
                    <div className="ox-dashboard-header col-sm-12 d-flex justify-content-between mt-3 mb-1">
                        <div>
                            <h2>
                                Edit dashboard
                            </h2>
                        </div>
                        <div>

                            <Dropdown
                                isOpen={open}
                                toggle={this.handleOpen}
                            >
                                <DropdownToggle className="ox-dashboard-main-dot-menu">
                                    <i className="fas fa-ellipsis-h"></i>
                                </DropdownToggle>
                                <DropdownMenu className="ox-dashboard-main-dot-item">
                                    <DropdownItem onClick={this.handleMainPage}>
                                        Cancel
                                </DropdownItem>
                                </DropdownMenu>

                            </Dropdown>

                        </div>
                    </div>
                </div>

                <div className="row">
                    <EditableCount
                        saveClicked={saveClicked}
                    />
                </div>


                <div className="mb-5">
                    <div className="">
                        <EditableChart
                            saveClicked={saveClicked}
                        />
                    </div>
                </div>
                <div className="row fixed-bottom ox-dashboard-save-div">
                    <button
                        className={"btn btn-block"}
                        onClick={this.handleClickSave}
                    >
                        {loading ?
                            <div className="spinner-border text-primary" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>

                            :
                            "Save"
                        }
                    </button>
                </div>

            </div>
        )
    }
}

const mapStateToProps = ({ widgets }) => ({
    loading: widgets.loading,
})

export default connect(mapStateToProps, null)(EditPage)