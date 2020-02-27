import React from 'react';
import './App.css';
import Row from './Row';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          name: "Jan Kowalski",
          address: "ul. Testowa 1, Pruszcz Gdański"
        },
        { id: 2, name: "Andrzej Nowak", address: "ul. Programistów 5 Gdańsk" },
        { id: 3, name: "Piotr Piotrowski", address: "ul. Wiejska 1, Warszawa" }
      ],
      name: '',
      address: '',
      counter: 4,
      search: ''

    };

    this.compareBy.bind(this);
    this.sortBy.bind(this);
  }

  compareBy(key) {
    return function (a, b) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    };
  }

  sortBy(key) {
    let arrayCopy = [...this.state.data];
    arrayCopy.sort(this.compareBy(key));
    this.setState({ data: arrayCopy });
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

  addWorker = (name, address) => {
    // console.log("dodany obiekt");
    const worker = {
      id: this.state.counter,
      name,
      address
    };
    this.setState({
      data: [...this.state.data, worker],
      counter: this.state.counter + 1
    })
  }

  handleClick = () => {
    console.log("dodaj");

    const { name, address } = this.state;
    if (name && address) {
      const worker = this.addWorker(name, address);
      if (worker) {
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

    let filteredArr = this.state.data.filter((worker) => {
      return worker.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
    });

    const rows = filteredArr.map(rowData => <Row {...rowData} />);


    return (

      <div className="table">

        <input type="text" placeholder="Wyszukaj pracownika" value={this.state.search} onChange={this.handleSearch} />


        <tr className="header">
          <th >Id</th>
          <th >Nazwa klienta</th>
          <th >Adres</th>
        </tr>

        <div className="body">{rows}</div>

        <div className="addRow">
          <input type="text" placeholder="Podaj imię i nazwisko" value={this.state.name} onChange={this.handleText} />
          <input type="text" placeholder="Podaj adres" value={this.state.address} onChange={this.handleAddress} />

          <button onClick={this.handleClick}>Dodaj pracownika</button>
        </div>

      </div>
    );
  }
}
export default Table;
