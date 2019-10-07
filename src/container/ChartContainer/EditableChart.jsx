import React, { Component } from 'react'
import { connect } from 'react-redux'
import { resizeChart, removeChart } from '../../actions/widgetActions'

import GridLayout from 'react-grid-layout'
import OxChart from '../../component/OxChart';
import { WidthProvider, Responsive } from "react-grid-layout";

const ResponsiveGridLayout = WidthProvider(Responsive);

class EditableChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stop: false,
            charts: this.props.charts,
            lastWidth: 0,
            lastHeigth: 0,
            windowWidth: window.innerWidth - 100,
            chartLayouts: this.props.charts.map(chart => chart.position),
        }
    }

    componentWillMount() {
        window.addEventListener('resize', this.handleResizeWindow)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResizeWindow)
    }

    handleResizeWindow = () => this.setState({ windowWidth: window.innerWidth - 100 })


    onResize = (layout, oldItem, newItem, placeholder) => {
        // console.log(newItem)
        const newLayout = this.state.chartLayouts.map(layout => layout.i === newItem.i ? { ...newItem } : layout)
        this.setState({
            charts: this.state.charts.map((chart, index) => ({ ...chart, position: { ...newLayout[index] } })),
            chartLayouts: newLayout
        })
    }

    handleResizeStarted = () => this.setState({ stop: false })

    handleResizeStopped = (layout, oldItem, newItem, placeholder) => {
        // console.log(newItem)
        const newLayout = this.state.chartLayouts.map(layout => layout.i === newItem.i ? { ...newItem } : layout)
        this.setState({
            stop: true,
            charts: this.state.charts.map((chart, index) => ({ ...chart, position: { ...newLayout[index] } })),
            chartLayouts: newLayout
        })
    }
    onDragStop = (layout, oldItem, newItem, placeholder) => {
        // console.log(newItem)
        const newLayout = this.state.chartLayouts.map(layout => layout.i === newItem.i ? { ...newItem } : layout)
        this.setState({
            charts: this.state.charts.map((chart, index) => ({ ...chart, position: { ...newLayout[index] } })),
            chartLayouts: newLayout
        })
    }

    handleRemoveChart = (id) => {
        this.props.removeChart(id, 'chart')
    }

    render() {
        const { items, windowWidth, layout, chartLayouts, stop, charts } = this.state
        const layouts = { lg: chartLayouts }
        return (
            <ResponsiveGridLayout
                layouts={layouts}
                rowHeight={100}
                width={window.innerWidth}
                breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
                cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
                onResize={(layout, oldItem, newItem, placeholder) => this.onResize(layout, oldItem, newItem, placeholder)}
                onResizeStop={(layout, oldItem, newItem, placeholder) => this.handleResizeStopped(layout, oldItem, newItem, placeholder)}
                onResizeStart={this.handleResizeStarted}
                onDragStop={(layout, oldItem, newItem, placeholder) => this.onDragStop(layout, oldItem, newItem, placeholder)}
            >
                {charts.map(chart => (
                    <div
                        key={chart.position.i}
                        className='ox-dashboard-chart-div'
                    >
                        <div className="ox-dashboard-block-main">
                            <div className="col">
                                <h5 className="ox-dashboard-block-h"> {chart.type}</h5>
                            </div>
                        </div>
                        <div className="col">
                            <div className="ox-dashboard-block-btn">

                                <button onClick={()=>this.handleRemoveChart(chart.id)} type="button" aria-haspopup="true" aria-expanded="false" className="ox-dashboard-main-dot-menu btn btn-secondary"><i className="fas fa-times"></i></button>

                            </div>
                        </div>
                        <OxChart style={chart.style} height={chart.position.h * 100} stop={stop} />
                    </div>
                ))}
            </ResponsiveGridLayout>




        )
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.charts !== this.props.charts) {
            this.setState({
                ...this.state,
                charts: nextProps.charts,
                chartLayouts: nextProps.charts.map(chart => chart.position)
            })
        }
        if (nextProps.saveClicked !== this.props.saveClicked) {
            if (nextProps.saveClicked) {
                console.log(this.state.charts)
                this.props.resizeChart(this.state.charts)
            }
        }
    }
}

const mapStateToProps = ({ widgets }) => ({
    charts: widgets.charts
})

export default connect(mapStateToProps, { resizeChart, removeChart })(EditableChart)