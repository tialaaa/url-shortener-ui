import React, { Component } from 'react';
import './App.css';
import { getUrls, postUrls } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: [],
      error: ''
    }
  }

  componentDidMount() {
    getUrls()
      .then(data => this.setState({ urls: data.urls }))
      .catch(err => console.log(err))
  }

  submitPost = (newUrl) => {
    postUrls(newUrl)
      .then(() => {
        getUrls()
          .then(data => this.setState({ urls: data.urls }))
      })
      .catch(err => this.setState({ error: [...this.state.error, err]}))
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm submitPost={this.submitPost}/>
        </header>

        <UrlContainer urls={this.state.urls}/>
      </main>
    );
  }
}

export default App;
