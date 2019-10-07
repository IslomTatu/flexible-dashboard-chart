import React from 'react'
import Chart from 'react-apexcharts'

class PieChart extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      reSize: false,
      options: {
        chart: {
          animations: {
            enabled: props.animation
          }
        },
        dataLabels: {
          enabled: true
        },
        responsive: [
          {
            breakpoint: 600,
            options: {
              legend: {
                position: "bottom"
              }
            }
          }
        ],
        plotOptions: {
          pie: {
            donut: {
              size: '50%',
              labels: {
                show: true,
                value: {
                  show: true,
                  fontSize: '14px',
                  color: undefined,
                  offsetY: 0,
                  formatter: function (val) {
                    return val
                  }
                },
                total: {
                  show: true,
                  label: 'Total',
                  color: '#373d3f',
                  formatter: function (w) {
                    return w.globals.seriesTotals.reduce((a, b) => {
                      return a + b
                    }, 0)
                  }
                }
              }
            }
          },
        },
        labels: ['Avva', 'DS Damat', 'Santa Barbara', 'Goodzone', 'Cacharel', 'Senior&Senioritta'],
        colors: ['#14D42E', '#15E79F', '#8204F5', '#FF504E', '#FA9B00', '#23A9F6', '#7ED321', '#4A4A4A', '#6B4EDD'],
        legend: {
          position: 'right',
          itemMargin: {
            horizontal: 2,
            vertical: 0
          },
        }
      },

      series: [1300, 505, 1003, 220, 403, 322]
    }
  }

  appendData() {
    var arr = this.state.series.slice()
    arr.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1)

    this.setState({
      series: arr
    })
  }

  removeData() {
    if (this.state.series.length === 1) return

    var arr = this.state.series.slice()
    arr.pop()

    this.setState({
      series: arr
    })
  }

  randomize() {
    this.setState({
      series: this.state.series.map(() => {
        return Math.floor(Math.random() * (100 - 1 + 1)) + 1
      })
    })
  }

  reset() {
    this.setState({
      series: [44, 55, 13, 33]
    })
  }

  render() {
    const { width, height, id } = this.props
    const { reSize } = this.state
    return (
      <div className="chart">
        <Chart
          options={this.state.options}
          series={this.state.series}
          width={width}
          height={height}
          type="donut"
        />
      </div>
    );
  }
}


export default PieChart
