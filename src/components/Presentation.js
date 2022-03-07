import React from 'react'

const Presentation = () => (
  <div className="container">
    <div className="row justify-content-center align-items-center">
      <div className="col">
        <h1 className="text-title">Hi, I am Dan!</h1>
        <span className="text-desc">
          I am a Software Engineer who has successfully developed web
          applications, Hybrid Mobile Apps and backend servers. Fast learner,
          well-educated and with experience in an international work
          environment. Looking for the opportunity to be involved with all
          aspects of application development.
        </span>
        <div className="row justify-content-center pt-3">
          <div className="px-1">
            <a href="https://twitter.com/danrley_t">
              <i className="fab fa-twitter-square fa-3x"></i>
            </a>
          </div>
          <div className="px-1">
            <a href="https://www.linkedin.com/in/danrley-teixeira/">
              <i className="fab fa-linkedin fa-3x"></i>
            </a>
          </div>
          <div className="px-1">
            <a href="https://github.com/danrleyt">
              <i className="fab fa-github-square fa-3x"></i>
            </a>
          </div>
          <div className="px-1">
            <a href="https://dev.to/danrleyt">
              <i className="fab fa-dev fa-3x"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Presentation
