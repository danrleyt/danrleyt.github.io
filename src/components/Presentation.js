import React from 'react'

const Presentation = () => (
  <div className="container">
    <div className="row justify-content-center align-items-center">
      <div className="col">
        <h1 className="text-title">Hi, I am Dan!</h1>
        <span className="text-desc">
          Software Engineer by heart with experience in Management, passionate
          about challenges involving <b>data-intensive applications</b>,{' '}
          <b>microservices</b>, and <b>optimisation</b>. Currently in Berlin,
          building the systems couriers depend on at Just Eat Takeaway.com.
        </span>
        <p style={{ textAlign: 'center' }}>
          <a href="mailto:danrleyt@gmail.com" aria-label="Email">
            <i className="fas fa-at fa-2x"></i>
          </a>{' '}
          <a href="https://www.linkedin.com/in/danrley-teixeira/" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in fa-2x"></i>
          </a>{' '}
          <a href="https://github.com/danrleyt" aria-label="GitHub">
            <i className="fab fa-github fa-2x"></i>
          </a>{' '}
          <a href="https://dev.to/danrleyt" aria-label="dev.to">
            <i className="fab fa-dev fa-2x"></i>
          </a>
        </p>
      </div>
    </div>
  </div>
)

export default Presentation
