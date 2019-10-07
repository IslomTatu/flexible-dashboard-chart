import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import CounContainer from '../container/CountContainer';
import ChartContainer from '../container/ChartContainer';
import ModalInfo from '../component/Modals/ModalInfo';
import ModalWrapped from '../component/Modals/ModalWrapped';
import ModalEdit from '../component/Modals/ModalEdit';

class MainPage extends Component {

    state = {
        open: false,
        openAdd: false,
        data: {},
        openInfo: false,
        openEdit: false
    }

    handleOpen = () => {
        this.setState({
            open: !this.state.open
        })
    }

    handleClose = () => {
        this.setState({
            open: false
        })
    }
    handleEditpage = () => {
        this.props.history.push("/edit")
    }

    handleAddWidget = () => {
        this.setState({
            openAdd: true
        })
    }

    // For modals
    handleOpenInfo = (data) => {
        console.log(data)
        this.setState({
            openInfo: true,
            data: data
        })
    }

    handleCloseInfo = () => this.setState({openInfo: false})

    handleOpedAdd = () => this.setState({ openAdd: true })
    handleCloseAdd = () => this.setState({ openAdd: false })

    handleOpenEdit= () => {
        this.setState({
            openEdit: true
        })
    }

    handleCloseEdit = () => this.setState({ openEdit: false })

    handleSaveEdit = () => {
        
    }

    render() {
        const { open, openAdd, openInfo, openEdit, data } = this.state
        return (
            <div className="w-100 ox-dashboard-main-container">
                <div className="row">
                    <div className="ox-dashboard-header col-sm-12 d-flex justify-content-between mt-3 mb-1">
                        <div>
                            <h2>
                                Dashboard
                            </h2>
                        </div>
                        <div className="ox-dashboard-header-rs">
                            <Dropdown
                                isOpen={open}
                                toggle={this.handleOpen}
                            >

                                <DropdownToggle className="ox-dashboard-main-dot-menu">
                                    <i className="fas fa-ellipsis-h"></i>
                                </DropdownToggle>
                                <DropdownMenu className="ox-dashboard-main-dot-item">
                                    <DropdownItem onClick={this.handleEditpage}>
                                        Edit
                                    </DropdownItem>
                                    <DropdownItem onClick={this.handleAddWidget}>
                                        Add
                                    </DropdownItem>
                                </DropdownMenu>

                            </Dropdown>

                        </div>
                    </div>
                </div>

                <div className="row">
                    <CounContainer 
                        handleOpenInfo={this.handleOpenInfo}
                        handleOpenEdit={this.handleOpenEdit}
                    />
                </div>


                <div>
                    <ChartContainer 
                        // openAdd={openAdd}
                        handleOpenInfo={this.handleOpenInfo}
                        handleOpenEdit={this.handleOpenEdit}
                    />
                </div>

                {openAdd && 
                    <div>
                        <ModalWrapped 
                            open={openAdd}
                            handleClose={this.handleCloseAdd}
                        />
                    </div>
                }

                {openInfo &&
                    <div>
                        <ModalInfo 
                            openInfo={openInfo}
                            handleToggle={this.handleCloseInfo}
                            data={data}
                        />
                    </div>
                }

                {openEdit &&
                    <div>
                        <ModalEdit
                            open={openEdit}
                            handleCloseEdit={this.handleCloseEdit}
                            handleSaveEdit={this.handleSaveEdit}

                        />
                    </div>
                }

            </div>
        )
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.charts !== this.props.charts || nextProps.submittedChart !== this.props.submittedChart || nextProps.submittedCount !== this.props.submittedCount){
            if(nextProps.submittedChart || nextProps.submittedCount){
                this.setState({
                    openAdd: false
                })
            }
        }
    }
}

const mapStateToProps = ({ widgets }) => ({
    charts: widgets.charts,
    submittedCount: widgets.submittedCount,
    submittedChart: widgets.submittedChart
})

export default connect(mapStateToProps, null)(MainPage)