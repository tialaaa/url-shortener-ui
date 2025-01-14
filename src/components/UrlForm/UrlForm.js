import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UrlForm extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      title: '',
      urlToShorten: ''
    };
  }

  handleNameChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();

    if (!this.validateInputs()) {
      // TO DO: refactor sad path to something more user-friendly than an alert
      return alert('Please fill out all form inputs') 
    };

    const newUrl = {
      long_url: this.state.urlToShorten,
      title: this.state.title
    };

    this.props.submitPost(newUrl);
    this.clearInputs();
  }

  validateInputs = () => {
    if(!this.state.title || !this.state.urlToShorten) {
      return false
    };

    return true;
  }

  clearInputs = () => {
    this.setState({title: '', urlToShorten: ''});
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Title...'
          name='title'
          value={this.state.title}
          onChange={e => this.handleNameChange(e)}
        />

        <input
          type='text'
          placeholder='URL to Shorten...'
          name='urlToShorten'
          value={this.state.urlToShorten}
          onChange={e => this.handleNameChange(e)}
        />

        <button name='submit' onClick={e => this.handleSubmit(e)}>
          Shorten Please!
        </button>
      </form>
    )
  }
}

export default UrlForm;

UrlForm.propTypes = {
  props: PropTypes.objectOf(PropTypes.func)
}