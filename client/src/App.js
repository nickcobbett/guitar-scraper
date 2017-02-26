import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';


class App extends Component {
  constructor() {
    super()
    this.state = {
      value: '',
      tab: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(event) {
    // var instance = axios.create({
    //   baseURL: 'https://some-domain.com/api/',
    //   timeout: 1000,
    //   headers: {'X-Custom-Header': 'foobar'}
    // });
    var that = this;
    console.log(this.state.value)
    axios.defaults.baseURL = 'http://127.0.0.1:8000';
    axios.get('/', {
      params: {
        url: JSON.stringify(this.state.value)
      }
    })

    // axios.get('/url/' + JSON.stringify(this.state.value))
    .then(function (response) {
      console.log(response.data)
      that.setState({tab: response.data})
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

    event.preventDefault();
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Ultimate Guitar Scrubber</h2>
        </div>
        <div className="App-body">
          <p className="App-intro">
            Paste ultimate guitar url eg...
            https://tabs.ultimate-guitar.com/j/jimi_hendrix/little_wing_tab.htm
          </p>
          <form onSubmit={this.handleSubmit}>
            <label>
              <textarea className="url-form" value={this.state.value} onChange={this.handleChange} />
            </label>
            <br/>
            <input type="submit" value="Submit" />
          </form>
          <div className="tab">
            <pre>{this.state.tab}</pre>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
