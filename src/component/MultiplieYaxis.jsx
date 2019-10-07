import React, { Component } from "react";
import Chart from "react-apexcharts";

class MultiplieYaxis extends Component {
  constructor(props) {
    super(props);
    this.timeOut = null
    this.state = {
      reSize: false,
      options: {
        chart: {
          stacked: false,
          toolbar: {
            show: false
          },
          stroke: {
            width: [0, 0, 3],
          },
          plotOptions: {
            bar: {
              columnWidth: '50%'
            }
          },
          grid: {
            show: true,
            borderColor: '#f7f7f7',
          },
          labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003', '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'
          ],
          markers: {
            size: 0
          },
          xaxis: {
            type: 'datetime',
            labels: {
              offsetY: -5,
              style: {
                fontSize: '9px'
              },
            },
          },
        },
        yaxis: {
          show: false
        },
        tooltip: {
          shared: true,
          intersect: false,
          y: {
            formatter: function (y) {
              if (typeof y !== "undefined") {
                return y.toFixed(0) + ' CURRENCY_GOES_HERE';
              }
              return y;
            }
          }
        }
      },
      series: [{
        name: 'Net sales',
        type: 'column',
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
      }, {
        name: 'Landed cost sum',
        type: 'column',
        data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
      }, {
        name: 'Target net sales',
        type: 'line',
        data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
      }],
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
      </div>
    );
  }


  shouldComponentUpdate(nextProps) {
    if (nextProps.stop) {
      return false
    }
    return true
  }

  componentWillReceiveProps(nextProps) {

    // if (nextProps.stop) {
    //   clearTimeout(this.timeOut)
    //   this.setState({
    //     ...this.state,
    //     reSize: !this.state.reSize
    //   })
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
  //   setTimeout(() => {
  //     clearTimeout(this.timeOut)
  //   }, 200)
  // }


}

export default MultiplieYaxis;