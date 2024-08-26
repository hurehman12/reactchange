import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountDue: '',
      amountReceived: '',
      changeDue: 0,
      hundreds: 0,
      twenties: 0,
      tens: 0,
      fives: 0,
      ones: 0,
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0,
      additionalOwed: 0
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.calculateChange = this.calculateChange.bind(this);
    this.generateRandomAmountDue = this.generateRandomAmountDue.bind(this);
  }

  generateRandomAmountDue() {
    let min = 0;
    let max = 1000;
    let randomAmount = (Math.random() * (max - min) + min).toFixed(2);
    this.setState({ amountDue: randomAmount });
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  // Corrected calculateChange method
  calculateChange() {
    let amountDue = parseFloat(this.state.amountDue);
    let amountReceived = parseFloat(this.state.amountReceived);

    if (isNaN(amountDue)) {
      alert("Sorry, you need to buy something to receive change.");
      return;
    }
    if (isNaN(amountReceived)) {
      alert("I can't give you change if you don't pay me first.");
      return;
    }

    let change = amountReceived - amountDue;

    if (change < 0) {
      let difference = Math.abs(change);
      alert("You don't have enough money! You need $" + difference.toFixed(2) + " more.");
      return;
    }

    // Calculate the number of each denomination
    let hundreds = Math.floor(change / 100);
    change %= 100;

    let twenties = Math.floor(change / 20);
    change %= 20;

    let tens = Math.floor(change / 10);
    change %= 10;

    let fives = Math.floor(change / 5);
    change %= 5;

    let ones = Math.floor(change);
    change %= 1;

    let quarters = Math.floor(change / 0.25);
    change %= 0.25;

    let dimes = Math.floor(change / 0.10);
    change %= 0.10;

    let nickels = Math.floor(change / 0.05);
    change %= 0.05;

    let pennies = Math.round(change / 0.01);

   
    this.setState({
      changeDue: (amountReceived - amountDue).toFixed(2),
      hundreds,
      twenties,
      tens,
      fives,
      ones,
      quarters,
      dimes,
      nickels,
      pennies
    });
  }

 

  render() {
    return (
      <div className="container">
        <h1 className="text-center">Change Calculator</h1>
        
        
        <div className="row">
          <div className="col-4">
            <div className="card">
              <div className="card-body">
    
                <div className="form-group">
                  <label>How much is due?</label>
                  <input 
                    type="number" 
                    className="form-control" 
                    value={this.state.amountDue} 
                    onChange={this.handleInputChange} 
                    name="amountDue" 
                  />
                </div>
                <div className="form-group">
                  <label>How much was received?</label>
                  <input 
                    type="number" 
                    className="form-control" 
                    value={this.state.amountReceived} 
                    onChange={this.handleInputChange} 
                    name="amountReceived" 
                  />
                </div>
                <button className="btn btn-primary" onClick={this.calculateChange}>Calculate</button>
              </div>
            </div>
          </div>

          <div className="col-8">
            {this.state.additionalOwed > 0 ? (
              <div className="alert alert-danger">
                Additional money owed: ${this.state.additionalOwed}
              </div>
            ) : (
              <div className="alert alert-success">
                The total change due is ${this.state.changeDue}
              </div>
            )}

<div className="row text-center mt-4">
<div className="col-3 mb-3">
    <div className="card p-3">
      <h4>Hundreds</h4>
      <p className="change display-4">{this.state.hundreds}</p>
    </div>
  </div>
  <div className="col-3 mb-3">
    <div className="card p-3">
      <h4>Twenties</h4>
      <p className="change display-4">{this.state.twenties}</p>
    </div>
  </div>
  <div className="col-3 mb-3">
    <div className="card p-3">
      <h4>Tens</h4>
      <p className="change display-4">{this.state.tens}</p>
    </div>
  </div>
  <div className="col-3 mb-3">
    <div className="card p-3">
      <h4>Fives</h4>
      <p className="change display-4">{this.state.fives}</p>
    </div>
  </div>
  <div className="col-3 mb-3">
    <div className="card p-3">
      <h4>Ones</h4>
      <p className="change display-4">{this.state.ones}</p>
    </div>
  </div>
  <div className="col-3 mb-3">
    <div className="card p-3">
      <h4>Quarters</h4>
      <p className="change display-4">{this.state.quarters}</p>
    </div>
  </div>
  <div className="col-3 mb-3">
    <div className="card p-3">
      <h4>Dimes</h4>
      <p className="change display-4">{this.state.dimes}</p>
    </div>
  </div>
  <div className="col-3 mb-3">
    <div className="card p-3">
      <h4>Nickels</h4>
      <p className="change display-4">{this.state.nickels}</p>
    </div>
  </div>
  <div className="col-3 mb-3">
    <div className="card p-3">
      <h4>Pennies</h4>
      <p className="change display-4">{this.state.pennies}</p>
    </div>
  </div>
</div>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
