import React from 'react'

const Skills = () => {
  return (
    <div className="container">
      <h1>Skills</h1>
      <section>
        <p>
          <b>Languages</b>
        </p>
        <ul>
          <li>Portuguese - Native</li>
          <li>English - Fluent</li>
          <li>German - B1</li>
        </ul>
      </section>
      <section>
        <p>
          <b>Programming Languages</b>
        </p>
        <ul>
          <li>Typescript / Javascript</li>
          <li>Java</li>
          <li>Python</li>
          <li>SQL</li>
        </ul>
      </section>
      <section>
        <p>
          <b>Infrastructure</b>
        </p>
        <ul>
          <li>AWS - EKS, ECS, Lambda, S3, SQS/SNS, DynamoDB, RDS</li>
          <li>Kubernetes, HPA, Docker</li>
          <li>Kafka</li>
          <li>PostgreSQL, MongoDB, DynamoDB</li>
        </ul>
      </section>
      <section>
        <p>
          <b>Topics of Interest</b>
        </p>
        <ul>
          <li>Microservices</li>
          <li>Databases</li>
          <li>Event-driven architecture</li>
          <li>Geospatial data</li>
          <li>Encoding</li>
          <li>Code optimisation</li>
        </ul>
      </section>
    </div>
  )
}

export default Skills
