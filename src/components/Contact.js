import React, { useRef } from "react";
import { Form } from "react-bootstrap";
import emailjs from "@emailjs/browser";

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nytato7",
        "template_urpa3un",
        form.current,
        "oj2PpRQ4NZit9PGj5"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section class="page-section" id="contact">
      <div className="container bg-success">
        <br/><h2 className="text-center">CONTACT US</h2>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="form-control card-flex-center dir-column"
        >
          <Form.Group className="mb-3" controlId="formGroupText">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your full name"
              name="user_name"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="user_email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGroupSubject">
            <Form.Label>Subject</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the subject"
              name="subject"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGroupMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="Enter your message"
              name="message"
              required
            />
          </Form.Group>

          <button type="submit" className="btn btn-success">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;