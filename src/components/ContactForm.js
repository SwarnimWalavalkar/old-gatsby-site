import React from "react"

import styles from "./ContactForm.module.scss"

export default class MyForm extends React.Component {
  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
    this.state = {
      status: "",
    }
  }

  render() {
    const { status } = this.state
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/mvowrbyd"
        method="POST"
      >
        <label>Name:</label>
        <input type="name" name="name" className={`${styles.feedbackInput}`} />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          className={`${styles.feedbackInput}`}
        />
        <label>Message:</label>
        <textarea name="message" className={`${styles.feedbackInput}`} />
        {status === "SUCCESS" ? (
          <p>Thanks! I'll get back to you ASAP</p>
        ) : (
          <button type="submit">Send Message</button>
        )}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
    )
  }

  submitForm(ev) {
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader("Accept", "application/json")
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        this.setState({ status: "SUCCESS" })
      } else {
        this.setState({ status: "ERROR" })
      }
    }
    xhr.send(data)
  }
}
