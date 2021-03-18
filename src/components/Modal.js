import React from 'react'

class Modal extends React.Component {
    render(){
        return(
            <div className="modalContainer">
                <div className="modalBackground" onClick={ this.props.toggleModal }></div>
                    <div className="modalContent">
                        { this.props.component }
                    </div>
            </div>
        )
    }
}

export default Modal