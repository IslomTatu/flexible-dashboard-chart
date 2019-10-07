import React from 'react'
import ReactApexChart from 'react-apexcharts'

class StackedPercentage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          toolbar: {
            show: false
          },
          stacked: true,
          stackType: '100%',
          animations: {
            enabled: props.animation
          }
        },
        colors: ['#23A9F6', '#4A4A4A', '#7ED321', '#6B4EDD', '#FA9B00'],
        plotOptions: {
          bar: {
            horizontal: true,
          },
        },
        xaxis: {
          labels: {
            offsetY: -5,
            style: {
              fontSize: '9px'
            },
          },
          categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
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
        fill: {
          opacity: 1
        },
        legend: {
          position: 'bottom',
          horizontalAlign: 'center',
          offsetX: 40
        }
      },
      series: [{
        name: 'Marine Sprite',
        data: [44, 55, 41, 37, 22, 43, 21]
      }, {
        name: 'Striking Calf',
        data: [53, 32, 33, 52, 13, 43, 32]
      }, {
        name: 'Tank Picture',
        data: [12, 17, 11, 9, 15, 11, 20]
      }, {
        name: 'Bucket Slope',
        data: [9, 7, 5, 8, 6, 9, 4]
      }, {
        name: 'Reborn Kid',
        data: [25, 12, 19, 32, 25, 24, 10]
      }],
    }
  }

  render() {
    const { width, height } = this.props
    const { reSize } = this.state
    return (
      <div className="chart">
        {reSize &&
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            width={width}
            height={height}
            type="bar"
          />
        }
        {!reSize &&

          <ReactApexChart
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


export default StackedPercentage