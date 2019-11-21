import React from 'react';

class Presentation extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <h1>Hi, I am Dan!</h1>
          <span>
            Software Engineer who has successfully developed web applications,
            Hybrid Mobile Apps and backends. Fast learner, well-educated and
            with experience in an international work environment. Looking for
            the opportunity to be involved with all aspects of application
            development.
          </span>
          <div className="row">
            <a href="https://twitter.com/danrley_t">Twitter</a>
            <a href="https://www.linkedin.com/in/danrley-teixeira/">LinkedIn</a>
            <a href="https://github.com/danrleyt">GitHub</a>
            <a href="https://medium.com/@danrleyt">Medium</a>
            <a href="https://dev.to/danrleyt">Dev Community</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Presentation;
