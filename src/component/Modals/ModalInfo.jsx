import React from 'react'

// components
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap'

const ModalInfo = (props) => {

    const { data, openInfo, toggle, handleToggle } = props

    return (
        <Modal
            isOpen={openInfo}
            toggle={handleToggle}
        >
            <ModalHeader toggle={handleToggle}>
                Info
            </ModalHeader>
            <ModalBody>
                <h5>{data.type}</h5>
                <h6>{data.style}</h6>
                <h6>{data.title}</h6>
                <h6>{data.period}</h6>
            </ModalBody>
        </Modal>
    )
}

export default ModalInfo