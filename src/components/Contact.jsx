/* eslint-disable no-alert */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import emailjs from 'emailjs-com';
import '../styles/Contact.css';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', message: '' };

    this.handleChange = this.handleChange.bind(this);
    this.clearInputs = this.clearInputs.bind(this);
    this.emailjs = this.emailjs.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState({ [event.target.id]: value });
  }

  clearInputs() {
    this.setState({ name: '', email: '', message: '' });
  }

  sendEmail(e) {
    emailjs
      .sendForm('service_t2oan2b', 'template_jxh1fs2', e.target, 'user_DhSr30V1iRuKT3WJojzXc')
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  emailjs(event) {
    event.preventDefault();
    this.sendEmail(event);
    this.clearInputs();
    alert('MENSAGEM ENVIADA');
  }

  render() {
    console.log(emailjs);

    const { name, email, message } = this.state;
    return (
      <div id="contact" className="contact-form-container">
        <div className="contact-form-texts">
          <h1 className="contact-form-title">Vamos lá</h1>
          <p className="contact-form-text">
            Agora que você sabe muito sobre mim, deixe-me saber se você tem interesse em trabalhar
            comigo.
          </p>
        </div>
        <form className="contact-form" onSubmit={this.emailjs}>
          <label className="contact-form-label" htmlFor="teste">
            Nome
            <input
              className="contact-form-input"
              type="text"
              name="user_name"
              id="name"
              value={name}
              onChange={this.handleChange}
              required
            />
          </label>
          <label className="contact-form-label" htmlFor="email-form-id">
            Email
            <input
              className="contact-form-input"
              type="email"
              name="user_email"
              id="email"
              value={email}
              onChange={this.handleChange}
              required
            />
          </label>
          <label className="contact-form-label" htmlFor="message-form-id">
            Mensagem
            <textarea
              className="contact-form-textarea"
              name="message"
              id="message"
              value={message}
              onChange={this.handleChange}
              required
            />
          </label>
          <button className="contact-form-button" type="submit" value="Send">
            ENVIAR MENSAGEM
          </button>
        </form>
      </div>
    );
  }
}

export default Contact;
