import SectionHeading from './SectionHeading'

const RECENT = [
  {
    company: 'Just Eat Takeaway.com',
    url: 'https://www.justeattakeaway.com',
    location: 'Berlin, Germany',
    roles: [
      {
        title: 'Senior Software Engineer',
        dates: 'Mar 2023 – present',
        bullets: [
          'Cutting the time from courier clock-on to first delivery by 20%, by introducing geo-restricted clock-on backed by geospatial indexes in MongoDB.',
          'Owning courier-facing services that process hundreds of thousands of orders a day across all markets, on AWS and Kubernetes.',
          'Designing the event-driven flows over Kafka that carry courier state, location and order-lifecycle events between services.',
          'Introducing an RFC process, code review standards and shared architectural patterns, adopted across three teams.',
        ],
      },
    ],
  },
  {
    company: 'commercetools GmbH',
    url: 'https://commercetools.com',
    location: 'Berlin / Remote',
    roles: [
      {
        title: 'Engineering Manager',
        dates: 'Apr 2021 – Jan 2023',
        bullets: [
          'Leading a cross-functional team of 6 engineers owning the Import API, the bulk data ingestion gateway every new customer onboards through.',
          'Cutting infrastructure cost by 10% with queue-based back-pressure and right-sized Kubernetes autoscaling, so capacity tracked real demand instead of peak provisioning.',
          'Cutting failed imports by 25% by tracking down and fixing the recurring failure modes in the ingestion pipeline.',
        ],
      },
      {
        title: 'Backend Engineer',
        dates: 'Jan 2020 – Mar 2021',
        bullets: [
          'Rewriting the Import API gateway from Java to Typescript, for I/O handling under large numbers of simultaneous client connections.',
          'Containerisation of services and Kubernetes HPA creations, enabling the gateway service to autoscale to 50% more requests at 20% lower latency.',
          'Reducing latency of requests by a further 25%, by streaming import payloads instead of buffering them in memory and compressing requests on the wire.',
        ],
      },
    ],
  },
]

const EARLIER = [
  {
    company: 'DATAPREV',
    location: 'Brazil',
    roles: [
      {
        title: 'Software Engineer',
        dates: 'Oct 2018 – Oct 2019',
        bullets: [
          'Migration of technologies, e.g JSF to React with Java Spring on the backend. Making it possible to scale the application for more than 2 million users.',
          'Establishing communication between services, defining the queues for the microservices communication via messages, so failures stopped cascading.',
        ],
      },
    ],
  },
  {
    company: 'Instituto Atlântico',
    location: 'Brazil',
    roles: [
      {
        title: 'Software Engineer',
        dates: 'May 2018 – Oct 2018',
        bullets: [
          'Designing and implementing a multi-platform application from scratch.',
          'Working alongside HP engineers to port the application to the HP Smart.',
        ],
      },
    ],
  },
  {
    company: 'HeavyConnect Inc.',
    location: 'Remote',
    roles: [
      {
        title: 'Software Engineer',
        dates: 'Jan 2017 – May 2018',
        bullets: [
          'Adding/building features from the backend to the frontend of a farm compliance and food-safety platform.',
          'Working closely with customers to understand their needs and gather requirements.',
        ],
      },
    ],
  },
]

const Job = ({ company, url, location, roles }) => (
  <div className="exp-block">
    <h3 className="exp-company">
      {url ? (
        <a href={url} target="_blank" rel="noopener">
          {company}
        </a>
      ) : (
        company
      )}
    </h3>
    <div className="exp-loc">{location}</div>
    {roles.map((r) => (
      <div className="exp-role" key={r.title}>
        <div className="exp-role-hd">
          <span className="exp-title">{r.title}</span>
          <span className="exp-date">{r.dates}</span>
        </div>
        <ul className="exp-list">
          {r.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
)

const Experience = () => (
  <section id="experience">
    <SectionHeading label="work experience" />
    {RECENT.map((job) => (
      <Job key={job.company} {...job} />
    ))}
    <details className="exp-earlier">
      <summary>earlier experience — DATAPREV, Instituto Atlântico, HeavyConnect (2017 – 2019)</summary>
      {EARLIER.map((job) => (
        <Job key={job.company} {...job} />
      ))}
    </details>
  </section>
)

export default Experience
