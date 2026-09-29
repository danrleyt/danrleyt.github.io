import SectionHeading from './SectionHeading'

const SKILLS = [
  { key: 'languages', items: ['Typescript / Javascript', 'Java', 'Python', 'SQL'] },
  { key: 'cloud', items: ['AWS — EKS, ECS, Lambda, S3, SQS/SNS, DynamoDB, RDS'] },
  { key: 'platform', items: ['Kubernetes', 'HPA', 'Docker', 'Kafka'] },
  { key: 'databases', items: ['PostgreSQL', 'MongoDB', 'DynamoDB'] },
  {
    key: 'interests',
    items: [
      'Microservices',
      'Databases',
      'Event-driven architecture',
      'Geospatial data',
      'Encoding',
      'Code optimisation',
    ],
  },
  { key: 'spoken', items: ['Portuguese (native)', 'English (fluent)', 'German (B1)'] },
]

const Skills = () => (
  <section id="skills">
    <SectionHeading label="skills" />
    <div className="prompt">
      <span className="ps1">dan@portfolio:~$</span>
      <span className="cmd">cat</span>
      <span className="arg">skills.yaml</span>
    </div>
    <dl className="skills">
      {SKILLS.map((s) => (
        <div className="skill-row" key={s.key}>
          <dt>{s.key}:</dt>
          <dd>
            {s.items.map((item) => (
              <span className="chip" key={item}>
                {item}
              </span>
            ))}
          </dd>
        </div>
      ))}
    </dl>
  </section>
)

export default Skills
