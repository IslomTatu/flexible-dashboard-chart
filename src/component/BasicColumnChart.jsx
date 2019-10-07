import React from 'react'
import Chart from 'react-apexcharts'


class BasicColumnChart extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      reSize: false,
      options: {
        chart: {
          animations: {
            enabled: props.animation
          },
          toolbar: {
            show: false
          },
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
        grid: {
          show: true,
          borderColor: '#f7f7f7',
        },
        plotOptions: {
          bar: {
            horizontal: false,
            endingShape: 'rounded',
            columnWidth: '55%',
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        xaxis: {
          labels: {
            offsetY: -5,
            style: {
              fontSize: '9px'
            },
          },
          categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        },
        yaxis: {
          title: {
            text: '$ (thousands)'
          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "$ " + val + " thousands"
            }
          }
        }
      },
      series: [{
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
      }, {
        name: 'Revenue',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
      }, {
        name: 'Free Cash Flow',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
      }],
    }
  }

  render() {
    const { width, height } = this.props
    const { reSize } = this.state
    return (
      <div className="chart">
        {/* <span>height: {height}   width: {width}</span> */}
        {reSize &&
          <Chart
            options={this.state.options}
            series={this.state.series}
            width={width}
            height={height}
            type="bar"
          />
        }
        {!reSize &&

          <Chart
            options={this.state.options}
            series={this.state.series}
            width={width}
            height={height}
            type="bar"
          />
        }
      </div>
    );
  }

  componentWillReceiveProps(nextProps) {

    if (this.props.height !== nextProps.width || this.props.width !== nextProps.width) {
      this.setState({
        ...this.state,
        reSize: !this.state.reSize
      })
    }
  }
}

export default BasicColumnChart
