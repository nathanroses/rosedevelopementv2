import { CaseStudiesProps } from '~/shared/types';

const CaseStudies = ({ data }: { data: CaseStudiesProps }) => {
  if (!data || !data.caseStudies || !Array.isArray(data.caseStudies)) {
    return null; // Handle the case where data is not valid
  }

  return (
    <section id="case-studies">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {data.caseStudies.map((study, studyIndex) => (
            <div key={studyIndex} className="mx-auto max-w-4xl pb-10 text-center md:pb-16">
              <h2 className="mb-3 text-3xl font-bold">{study.title}</h2>
              <p className="mb-6 text-xl font-normal text-gray-600 dark:text-slate-400">{study.summary}</p>
              <a href={study.detailedLink} className="btn btn-primary">
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
