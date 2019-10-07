import React, { Component } from "react";
import Chart from "react-apexcharts";

class BGLineChart extends Component {
    constructor(props) {
        super(props);
        this.timeOut = null
        this.state = {
            reSize: false,
            options: {
                chart: {
                    type: 'line',
                    sparkline: {
                        enabled: true
                    },
                    animations: {
                        enabled: props.animation
                    },
                },
                noData: {
                    text: 'No recods',
                    align: 'center',
                    verticalAlign: 'middle',
                    offsetX: 0,
                    offsetY: -30,
                    style: {
                        color: '#fff',
                        fontSize: '24px'
                    }
                },
                colors: ['#FFF'],
                markers: {
                    size: 0,
                    shape: "circle",
                    hover: {
                        size: 2,
                    }
                },
                stroke: {
                    lineCap: 'round',
                    width: 4,
                    curve: 'smooth',
                },
                tooltip: {
                    fixed: {
                        enabled: false
                    },
                    x: {
                        show: true,
                    },
                    y: {
                        title: {
                            formatter: function (seriesName) {
                                return ''
                            }
                        }
                    },
                    marker: {
                        show: false
                    }
                },

                xaxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                },
            },
            series: [
                {
                    name: "Addidas SD",
                    data: [10000, 40000, 35000, 51000, 49000, 62000, 69000, 91000, 148000]
                },
            ],
        }
    }

    render() {
        const { width, height } = this.props
        const { reSize, } = this.state
        return (
            <div className="chart">
                {reSize &&
                    <Chart
                        options={this.state.options}
                        series={this.state.series}
                        width={width}
                        height={height}
                    />
                }
                {!reSize &&

                    <Chart
                        options={this.state.options}
                        series={this.state.series}
                        width={width}
                        height={height}
                    />
                }

                <div className="ox-d-widget-total">
                    Total
                </div>
            </div>
        );
    }


    // shouldComponentUpdate(nextProps) {
    //     if (nextProps.stop) {
    //         return false
    //     }
    //     return true
    // }

    componentWillReceiveProps(nextProps) {

        // if (nextProps.stop) {
        //     clearTimeout(this.timeOut)
        //     this.setState({
        //         ...this.state,
        //         reSize: !this.state.reSize
        //     })
        // }

        if (this.props.height !== nextProps.width || this.props.width !== nextProps.width) {

            // this.timeOut = setTimeout(() => {
                this.setState({
                    ...this.state,
                    reSize: !this.state.reSize,
                })
            // }, 100)
        }
    }

    // componentWillUnmount() {
    //     setTimeout(() => {
    //         clearTimeout(this.timeOut)
    //     }, 200)
    // }


}

export default BGLineChart;