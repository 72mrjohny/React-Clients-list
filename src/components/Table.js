import React from 'react';
import './App.css';
import Row from './Row';
import Modal from './Modal';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          name: "Jan Kowalski",
          address: "ul. Testowa 1, Pruszcz Gdański",

        },
        {
          id: 2, name: "Andrzej Nowak", address: "ul. Programistów 5 Gdańsk",

        },
        {
          id: 3, name: "Piotr Piotrowski", address: "ul. Wiejska 1, Warszawa",

        }

      ],
      name: '',
      address: '',
      counter: 4,
      search: '',
      show: false

    };

    this.compareBy.bind(this);
    this.sortBy.bind(this);
  }

  showModal = (/*id*/) => {
    this.setState({ show: true });
    // console.log(id);

  };

  hideModal = () => {
    this.setState({ show: false });
  };

  compareBy(key) {
    return function (a, b) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    };
  }

  sortBy(key) {
    let arrayCopy = [...this.state.data];
    const newArray = arrayCopy.sort(this.compareBy(key));
    this.setState({ data: newArray });
  }

  handleText = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleAddress = (e) => {
    this.setState({
      address: e.target.value
    })
  }

  handleSearch = (e) => {
    this.setState({
      search: e.target.value
    })
  }

  addPerson = (name, address) => {
    // console.log("dodany obiekt");
    const person = {
      id: this.state.counter,
      name,
      address
    };
    this.setState({
      data: [...this.state.data, person],
      counter: this.state.counter + 1
    })

    return true;
  }



  handleClick = () => {
    console.log("dodaj");

    const { name, address } = this.state;
    if (name && address) {
      const person = this.addPerson(name, address);
      if (person) {
        this.setState({
          name: '',
          address: '',

        })
      }
    } else {
      alert("Wypełnij pola formularza!")
    }
  }


  render() {

    const filteredArr = this.state.data.filter((person) => {
      return person.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
    });

    const rows = filteredArr.map(rowData => <Row {...rowData} key={rowData.id} />);



    return (

      <div className="table-app">


        <div className="search-wrapper"><input type="text" placeholder="Wyszukaj klienta" value={this.state.search} onChange={this.handleSearch} /></div>

        <table className="table-wrapper">
          <thead>
            <tr className="header">
              <th /*onClick={this.sortBy('id')}*/>Id</th>
              <th /*onClick={this.sortBy('name')}*/>Nazwa klienta</th>
              <th /*onClick={this.sortBy('address')}*/>Adres</th>
            </tr>
          </thead>
          <tbody className="body">{rows}</tbody>
        </table>

        <div className="add-wrapper">
          <input type="text" placeholder="Podaj imię i nazwisko" value={this.state.name} onChange={this.handleText} />
          <input type="text" placeholder="Podaj adres" value={this.state.address} onChange={this.handleAddress} />
          <button className="btn" onClick={this.handleClick}>Dodaj Klienta</button>
        </div>


        <Modal show={this.state.show} handleClose={this.hideModal}>
          <p>Modal</p>
        </Modal>


      </div>
    );
  }
}
export default Table;
