import React from 'react';

const Modal = ({ handleClose, show }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                {/* <input type="text" placeholder="Podaj nowe imię i nazwisko" value={props.name} onChange={props.handleNewName} />
                <input type="text" placeholder="Podaj nowy adres" value={props.address} onChange={this.handleNewAddress} /> */}
                <p>Podaj nowe imię i nazwisko</p>
                <p>Podaj nowy adres</p>
                <button className="editbtn" onClick={handleClose}>Submit</button>
                <button className="editbtn" onClick={handleClose}>close</button>
            </section>
        </div>
    );
};


export default Modal;