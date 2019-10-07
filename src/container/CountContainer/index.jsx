import React, { Component } from 'react'
import { connect } from 'react-redux'
import Slider from 'react-slick'

import CountWidget from '../../component/CountWidget';

const settings = {
    dots: false,
    speed: 900,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnFocus: true,
    responsive: [
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
    ]
}

class CountContainer extends Component {

    state = {
        counts: this.props.counts
    }

    render() {
        const { layout  } = this.state
        const { classes, counts } = this.props
        
        return (

            <div className='col-sm-12' >
                <div>
                    <Slider {...settings}>
                        {counts.map((count, index) => (
                            <div key={count.id} className={`ox-dashboard-count-widget ${count.className}`}>
                                <CountWidget 
                                    handleOpenInfo={this.props.handleOpenInfo} 
                                    handleOpenEdit={this.props.handleOpenEdit}
                                    count={count} 
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div >
        )
    }
}

const mapStateToProps = ({ widgets }) => ({
    loading: widgets.loading,
    counts: widgets.counts,
    submittedCount: widgets.submittedCount
})

export default connect(mapStateToProps, null)(CountContainer)