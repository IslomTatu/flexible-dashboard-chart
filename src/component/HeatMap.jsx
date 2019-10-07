import React, { Component } from 'react'
import Chart from "react-apexcharts"

function generateData(count, yrange) {
  var i = 0;
  var series = [];
  while (i < count) {
    var x = 'w' + (i + 1).toString();
    var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push({
      x: x,
      y: y
    });
    i++;
  }
  return series;
}

class HeatMap extends Component {

  constructor(props) {
    super(props)
    this.state = {
      reSize: false,
      options: {
        chart: {
          toolbar: {
            show: false
          },
          animations: {
            enabled: props.animation
          }
        },
        dataLabels: {
          enabled: true
        },
        colors: ["#008FFB"],
      },
      series: [
        {
          name: 'T-Shirt',
          data: generateData(8, {
            min: 0,
            max: 9
          })
        },
        {
          name: 'Only for mens',
          data: generateData(8, {
            min: 0,
            max: 9
          })
        },
        {
          name: 'Fall winter',
          data: generateData(8, {
            min: 0,
            max: 9
          })
        },
        {
          name: 'For ladies',
          data: generateData(8, {
            min: 0,
            max: 9
          })
        },
        {
          name: 'Hoodies',
          data: generateData(8, {
            min: 0,
            max: 9
          })
        }
      ],
    }
  }


  render() {
    const { width, height } = this.props
    const { reSize } = this.state
    return (
      <div className="chart">
        {reSize &&
          <Chart
            options={this.state.options}
            series={this.state.series}
            width={width}
            height={height}
            type="heatmap"
          />
        }
        {!reSize &&

          <Chart
            options={this.state.options}
            series={this.state.series}
            width={width}
            height={height}
            type="heatmap"
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

export default HeatMap