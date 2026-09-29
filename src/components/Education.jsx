import SectionHeading from './SectionHeading'

const SCHOOLS = [
  {
    school: 'Federal University of Ceará',
    url: 'https://www.ufc.br',
    degree: 'BSc. Information Systems',
    location: 'Ceará, Brazil',
    dates: '2012 – 2018',
  },
  {
    school: 'Freie Universität Berlin',
    url: 'https://www.fu-berlin.de',
    sub: 'Science without Borders scholarship',
    degree: 'Informatik',
    location: 'Berlin, Germany',
    dates: '2015 – 2016',
  },
]

const Education = () => (
  <section id="education">
    <SectionHeading label="education" />
    {SCHOOLS.map((s) => (
      <div className="edu-item" key={s.school}>
        <div className="edu-body">
          <h3 className="edu-school">
            <a href={s.url} target="_blank" rel="noopener">
              {s.school}
            </a>
          </h3>
          {s.sub && <div className="edu-sub">{s.sub}</div>}
          <div className="edu-deg">{s.degree}</div>
        </div>
        <div className="edu-side">
          <div className="edu-sub">{s.location}</div>
          <div className="edu-date">{s.dates}</div>
        </div>
      </div>
    ))}
  </section>
)

export default Education
