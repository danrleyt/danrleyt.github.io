import React from 'react'

const Presentation = () => (
  <div className="container">
    <div className="row justify-content-center align-items-center">
      <div className="col">
        <h1 className="text-title">Hi, I am Dan!</h1>
        <span className="text-desc">
          Software Engineer by heart with experience in Management, passionate
          about challenges involving <b>data-intensive applications</b>,{' '}
          <b>microservices</b>, and <b>optimisation</b>.
        </span>
        <p style={{ textAlign: 'center' }}>
          <a href="mailto:danrleyt@gmail.com">
            <i class="fas fa-at fa-2x"></i>
          </a>{' '}
          <a href="https://www.linkedin.com/in/danrley-teixeira/">
            <i class="fab fa-linkedin-in fa-2x"></i>
          </a>{' '}
          <a href="https://github.com/danrleyt">
            <i class="fab fa-github fa-2x"></i>
          </a>{' '}
          <a href="https://dev.to/danrleyt">
            <i className="fab fa-dev fa-2x"></i>
          </a>
        </p>
      </div>
    </div>
  </div>
)

export default Presentation
