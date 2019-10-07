import React from 'react'
import Chart from 'react-apexcharts'

class SpiderWeb extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {
        plotOptions: {
          radar: {
            polygons: {
              strokeColor: '#e8e8e8',
              fill: {
                colors: ['#f8f8f8', '#fff']
              }
            }
          }
        },
        yaxis: {
          show: false,
        },
        chart: {
          toolbar: {
            show: false
          },
          animations: {
            enabled: props.animation
          }
        },
        colors: ['#757575', '#4EC3FF'],
        stroke: {
          show: true,
          width: 2,
          colors: ['#757575', '#4EC3FF'],
          dashArray: 0
        },
        fill: {
          opacity: 0.5,
          colors: ['#757575', '#4EC3FF'],
        },
        markers: {
          colors: ['#757575', '#4EC3FF'],
          size: 4
        }
      },
      labels: ['Garderobe', 'Colins', 'Morgan', 'Cacharel', 'Santa-Barbara', 'Googies'],
      series: [{
        name: 'Target net sales',
        data: [80000000, 50000000, 30000000, 40000000, 100000000, 20000000],
      },
      {
        name: 'Net sales by fact',
        data: [90000000, 60000000, 30000000, 20000000, 90000000, 50000000],
      },]
    }
  }

  render() {
    const { width, height } = this.props
    const { reSize } = this.state
    return (
      <div className="chart">
        {/* {reSize &&
          <Chart
            options={this.state.options}
            series={this.state.series}
            width={width}
            height={height}
            type="radar"
          />
        }
        {!reSize && */}

          <Chart
            options={this.state.options}
            series={this.state.series}
            width={width}
            height={height}
            type="radar"
          />
        {/* } */}
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

export default SpiderWeb
