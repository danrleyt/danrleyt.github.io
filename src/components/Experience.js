import React from 'react'

const Experience = () => (
  <div className="container">
    <div className="row justify-content-center">
      <h1>Experience</h1>
      <section>
        <p>
          <b>SENIOR SOFTWARE ENGINEER</b> - Just Eat Takeaway.com | Berlin | Mar
          2023 – Present
        </p>
        <ul>
          <li>
            Cutting the time from courier clock-on to first delivery by 20%, by
            introducing geo-restricted clock-on backed by geospatial indexes in
            MongoDB.
          </li>
          <li>
            Owning courier-facing services that process hundreds of thousands of
            orders a day across all markets, on AWS and Kubernetes.
          </li>
          <li>
            Designing the event-driven flows over Kafka that carry courier
            state, location and order-lifecycle events between services.
          </li>
          <li>
            Introducing an RFC process, code review standards and shared
            architectural patterns, adopted across three teams.
          </li>
        </ul>
      </section>
      <section>
        <p>
          <b>ENGINEERING MANAGER</b> - commercetools GmbH | Berlin/Remote | Apr
          2021 – Jan 2023
        </p>
        <ul>
          <li>
            Leading a cross-functional team of 6 engineers owning the Import
            API, the bulk data ingestion gateway every new customer onboards
            through.
          </li>
          <li>
            Cutting infrastructure cost by 10% with queue-based back-pressure
            and right-sized Kubernetes autoscaling, so capacity tracked real
            demand instead of peak provisioning.
          </li>
          <li>
            Cutting failed imports by 25% by tracking down and fixing the
            recurring failure modes in the ingestion pipeline.
          </li>
        </ul>
      </section>
      <section>
        <p>
          <b>BACKEND ENGINEER</b> - commercetools GmbH | Berlin/Remote | Jan 2020
          – Mar 2021
        </p>
        <ul>
          <li>
            Rewriting the Import API gateway from Java to Typescript, for I/O
            handling under large numbers of simultaneous client connections.
          </li>
          <li>
            Containerisation of services and Kubernetes HPA creations, enabling
            the gateway service to autoscale to 50% more requests at 20% lower
            latency.
          </li>
          <li>
            Reducing latency of requests by a further 25%, by streaming import
            payloads instead of buffering them in memory and compressing
            requests on the wire.
          </li>
        </ul>
      </section>
      <section>
        <p>
          <b>SOFTWARE ENGINEER</b> - DATAPREV | Brazil | Oct 2018 – Oct 2019
        </p>
        <ul>
          <li>
            Migration of technologies, e.g JSF to React with Java Spring on the
            backend. Making it possible to scale the application for more than 2
            million users.
          </li>
          <li>
            Establishing communication between services, defining the queues for
            the microservices communication via messages, so failures stopped
            cascading.
          </li>
        </ul>
      </section>
      <section>
        <p>
          <b>SOFTWARE ENGINEER</b> - Instituto Atlântico | Brazil | May – Oct
          2018
        </p>
        <ul>
          <li>
            Designing and implementing a multi-platform application from
            scratch.
          </li>
          <li>
            Working alongside HP engineers to port the application to the HP
            Smart.
          </li>
        </ul>
      </section>
      <section>
        <p>
          <b>SOFTWARE ENGINEER</b> - HeavyConnect Inc. | Remote | Jan 2017 – May
          2018
        </p>
        <ul>
          <li>
            Adding/building features from the backend to the frontend of a farm
            compliance and food-safety platform.
          </li>
          <li>
            Working closely with customers to understand their needs and gather
            requirements.
          </li>
        </ul>
      </section>
    </div>
  </div>
)

export default Experience
