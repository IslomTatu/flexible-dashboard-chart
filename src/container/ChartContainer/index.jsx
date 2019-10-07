import React, { Component } from 'react'
import { connect } from 'react-redux'
import GridLayout from 'react-grid-layout'
import { WidthProvider, Responsive } from "react-grid-layout";
import SvgSaver from "svgsaver"

// import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import ModalWrapped from '../../component/Modals/ModalWrapped';

import { getZones, getLocations, getBrands, getCashDesks } from '../../actions/widgetActions';
import OxChart from '../../component/OxChart';

// style
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'

const ResponsiveGridLayout = WidthProvider(Responsive);

class ChartContainer extends Component {

    state = {
        open: false,
        windowWidth: window.innerWidth,
    }



    downloadJPG = (svg) => {
        const svgchart = document.getElementById(svg).childNodes[1].children[0].children[0].children[0]
        console.log(svgchart)
        // const image = svgchart.toDataURI("image/png")

        // domtoimage.toJpeg(svgchart, { quality: 0.95 })
        //         .then(function (dataUrl) {
        //             var link = document.createElement('a');
        //             link.download = 'my-image-name.jpeg';
        //             link.href = dataUrl;
        //             link.click();
        //         });
        
        // var canvas = document.getElementById("canvas");
        // var ctx = canvas.getContext("2d");
        // var DOMURL = window.URL || window.webkitURL || window
        // var img = new Image();
        // var svg = new Blob([svgString], {type: "image/svg+xml;charset=utf-8"});
        // var url = DOMURL.createObjectURL(svg);
        // img.onload = function() {
            //     ctx.drawImage(img, 0, 0);
            //     var png = canvas.toDataURL("image/png");
            //     document.querySelector('#png-container').innerHTML = '<img src="'+png+'"/>';
            //     DOMURL.revokeObjectURL(png);
            // };
            
            // img.src = url;
            // var link = document.createElement('a');
            // link.download = 'my-image-name.jpeg';
            // link.crossorigin = true
            // link.href = url;
            // link.click();
            
            // ----------
            var svgString = new XMLSerializer().serializeToString(svgchart);
    
            const mySVG = "data:image/svg+xml," + encodeURIComponent(svgString)
            
            // var dl = document.createElement("a");
            // document.body.appendChild(dl); // This line makes it work in Firefox.
            // dl.setAttribute("href", mySVG);
            // dl.setAttribute("download", "chart.jpg");
            // dl.click();

                
            const svgsaver = new SvgSaver()

            svgsaver.asPng(svgchart, 'chart.png')

    }


    render() {
        const { charts } = this.props
        const chartLayouts = { 'lg': charts.map(chart => chart.position) }
        const { open, windowWidth } = this.state
        return (
            <div className="ox-dashboard-chart-main-div">
                <ResponsiveGridLayout
                    className='layout'
                    layouts={chartLayouts}
                    rowHeight={100}
                    width={windowWidth}
                    isResizable={false}
                    isDraggable={false}
                    breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
                    cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
                >
                    {charts.map((chart, index) => {
                        return (
                            <div
                                id={`${chart.id}-main-svg`}
                                key={chart.id}
                                className={`ox-dashboard-chart-div ${chart.className}`}
                            >
                                <div className="ox-dashboard-block-main">
                                    <div className="col">
                                        <h5 className="ox-dashboard-block-h"> {chart.type}</h5>
                                    </div>
                                    <div className="col">
                                    <h5 className="ox-dashboard-block-t"><i className="far fa-clock"></i>  {chart.period}</h5>
                                    </div>
                                    <div className="ox-dashboard-block-btn">
                                        <UncontrolledButtonDropdown>
                                            <DropdownToggle className="ox-dashboard-main-dot-menu">
                                                <i className="fas fa-ellipsis-h"></i>
                                            </DropdownToggle>
                                            <DropdownMenu className="ox-dashboard-chart-dot-item">
                                                <DropdownItem onClick={() => this.props.handleOpenInfo(chart)}>
                                                    Info
                                                </DropdownItem>
                                                <DropdownItem onClick={() => this.props.handleOpenEdit()} > 
                                                    Edit
                                                </DropdownItem>
                                                <DropdownItem onClick={() => this.downloadJPG(`${chart.id}-main-svg`)}>
                                                    Download jpg
                                                </DropdownItem>
                                            </DropdownMenu>

                                        </UncontrolledButtonDropdown>
                                    </div>
                                </div>
                                <OxChart style={chart.style} height={chart.position.h * 100} animation={true} t />
                            </div>
                        )
                    })}
                </ResponsiveGridLayout>
                {/* <div className="row">
                    <div className="col-sm-4">
                        <div onClick={this.handleAddWidgetClick} className={"ox-dashboard-add-widget"}>
                            <p>+ Add Widget</p>
                        </div>
                    </div>
                </div> */}
            </div>
        )
    }

    componentWillReceiveProps(nextProps){

        if(nextProps.charts !== this.props.charts || nextProps.submittedChart !== this.props.submittedChart || nextProps.submittedCount !== this.props.submittedCount){
            if(nextProps.submittedChart || nextProps.submittedCount){
                this.setState({
                    open: false
                })
            }
        }
    }
    
}

const mapStateToProps = ({ router, widgets }) => ({
    pathname: router.location.pathname,
    loading: widgets.loading,
    charts: widgets.charts,
    submittedCount: widgets.submittedCount,
    submittedChart: widgets.submittedChart
})

export default connect(mapStateToProps, {
    getZones, getLocations, getBrands, getCashDesks
})(ChartContainer)