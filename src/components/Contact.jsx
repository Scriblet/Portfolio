/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', message: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState({ [event.target.name]: value });
  }

  // function sendEmail(e) {
  //   e.preventDefault();

  //   emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
  //     .then((result) => {
  //         console.log(result.text);
  //     }, (error) => {
  //         console.log(error.text);
  //     });
  // }

  render() {
    const { name, email, message } = this.state;
    return (
      <div className="contact-form-container">
        <div className="contact-form-texts">
          <h1 className="contact-form-title">Vamos lá</h1>
          <p className="contact-form-text">
            Agora que você sabe muito sobre mim, deixe-me saber se você tem interesse em trabalhar
            comigo.
          </p>
        </div>
        <form className="contact-form">
          <label className="contact-form-label" htmlFor="teste">
            Nome
            <input
              className="contact-form-input"
              type="text"
              name="name"
              id="name-form-id"
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <label className="contact-form-label" htmlFor="email-form-id">
            Email
            <input
              className="contact-form-input"
              type="email"
              name="email"
              id="email-form-id"
              value={email}
              onChange={this.handleChange}
            />
          </label>
          <label className="contact-form-label" htmlFor="message-form-id">
            Mensagem
            <textarea
              className="contact-form-textarea"
              name="message"
              id="message-form-id"
              value={message}
              onChange={this.handleChange}
            />
          </label>
          <button className="contact-form-button" type="button">
            ENVIAR MENSAGEM
          </button>
        </form>
      </div>
    );
  }
}

export default Contact;
