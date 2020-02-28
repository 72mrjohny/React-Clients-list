import React from 'react';

const Modal = ({ handleClose, show }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <input className="inputChangeName" type="text" placeholder="Podaj nowe imię i nazwisko" /*value={props.name} onChange={props.handleNewName}*/ />
                <input className="inputChangeName" type="text" placeholder="Podaj nowy adres" /*value={props.address} onChange={this.handleNewAddress}*/ />

                <button className="btn submitBtn" onClick={handleClose}>Submit</button>
                <button className="btn closeBtn" onClick={handleClose}>close</button>
            </section>
        </div>
    );
};


export default Modal;