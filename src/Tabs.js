import { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

const Tabs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(0);

  const getJobs = async () => {
    const response = await fetch('http://localhost:3001');
    const data = await response.json();
    setJobs(data);
    setLoading(false);
  };

  useEffect(() => {
    getJobs();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  const { id, order, title, dates, duties, company } = jobs[value];

  return (
    <section className="section">
      <div className="companies">
        {jobs.map((company, index) => {
          return (
            <button
              className={value === index ? 'companies__company companies__company--active-company' : 'companies__company'}
              key={index}
              onClick={() => {
                setValue(index);
              }}
            >
              {company.company}
            </button>
          );
        })}
      </div>
      <div className="card">
        <h2>Jobs</h2>
        <div className="card__company">{company}</div>
        <div className="card__title">{title}</div>
        <div className="card__date">{dates}</div>
        <div>
          {duties.map(duty => {
            return (
              <div className="card__duties">
                <FaAngleDoubleRight className="card__icon" />
                <p>{duty}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Tabs;
