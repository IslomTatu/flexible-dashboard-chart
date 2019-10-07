import React from 'react';

const TableWidget = (props) => {
    const { width, height } = props
    return (
        <div className='ox-dashboard-payment-container' style={{ width: width, height: height }}>
            <div className="ox-dashboard-payment-meth col-6">
                <div className="ox-dashboard-payment-block">
                    <img style={{
                        height: '30px'
                    }} src="https://click.uz/wp-content/uploads/2018/07/uzcard_bg.png" alt="Uzcard" />
                    <h2>UzCard</h2>
                </div>
            </div>
            <div className="text-align-right ox-dashboard-payment-meth col-6">
                <div>
                    <span>830 000</span>
                    <small>UZS</small>
                </div>
            </div>
        </div>
    )
}

export default TableWidget