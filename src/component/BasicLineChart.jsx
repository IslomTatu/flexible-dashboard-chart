import React, { Component } from "react";
import Chart from "react-apexcharts";

class BasicLineChart extends Component {
  constructor(props) {
    super(props);
    this.timeOut = null
    this.state = {
      reSize: false,
      options: {
        chart: {
          type: "line",
          animations: {
            enabled: props.animation
          },
          toolbar: {
            show: false
          },
        },
        colors: ['#FA9B00', '#23A9F6', '#7ED321', '#4A4A4A', '#6B4EDD'],
        markers: {
          size: 0,
          shape: "circle",
          hover: {
            size: 5,
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          lineCap: 'round',
          width: 2
        },
        grid: {
          show: true,
          borderColor: '#f7f7f7',
        },
        xaxis: {
          labels: {
            offsetY: -5,
            style: {
              fontSize: '9px'
            },
          },
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        },
        legend: {
          fontSize: '12px',
          offsetY: 0,
          fontFamily: 'Roboto',
          itemMargin: {
            horizontal: 5,
            vertical: 5
          },
        },
        yaxis: {
          labels: {
            style: {
              fontSize: '9px'
            },
          },
        },
      },
      series: [
        {
          name: "Addidas SD",
          data: [10000, 40000, 35000, 51000, 49000, 62000, 69000, 91000, 148000]
        },
        {
          name: "Addidas CS",
          data: [16000, 0, 20000, 69000, 51000, 12000, 88000, 100000, 20000]
        },
        {
          name: "Colins SD",
          data: [0, 35000, 62000, 51000, 49000, 83000, 69000, 91000, 148000]
        },
        {
          name: "Colins CS",
          data: [16000, 12000, 88000, 100000, 20000, 0, 20000, 69000, 51000,]
        },
        {
          name: "Celio SD",
          data: [89000, 10000, 40000, 35000, 51000, 49000, 62000, 91000, 148000]
        },
        {
          name: "Celio CS",
          data: [15000, 16000, 0, 20000, 69000, 51000, 12000, 88000, 100000]
        },

      ],
    }
  }

  render() {
    const { width, height } = this.props
    const { reSize, } = this.state
    return (
      <div className="chart">
        {/* {reSize &&
          <Chart
            options={this.state.options}
            series={this.state.series}
            width={width}
            height={height}
          />
        }
        {!reSize && */}

          <Chart
            options={this.state.options}
            series={this.state.series}
            width={width}
            height={height}
          />
        {/* } */}
      </div>
    );
  }


  // shouldComponentUpdate(nextProps) {
  //   if (nextProps.stop) {
  //     return false
  //   }
  //   return true
  // }

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
        // this.setState({
        //   ...this.state,
        //   reSize: !this.state.reSize,
        // })
      // }, 100)
    }
  }

  // componentWillUnmount() {
  //   setTimeout(() => {
  //     clearTimeout(this.timeOut)
  //   }, 200)
  // }


}

export default BasicLineChart;