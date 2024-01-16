import type { Metadata } from 'next';

import CaseStudies from '~/components/widgets/CaseStudies';
import Testimonials from '~/components/widgets/Testimonials';
import FAQs from '~/components/widgets/FAQs';
import { caseStudiesData, testimonialData, faqsData } from '~/shared/data'; // Corrected the import name

export const metadata: Metadata = {
  title: 'Case Studies',
};

const CaseStudiesPage = () => {
  return (
    <>
      <Testimonials {...testimonialData}>{/* Corrected the import name */}</Testimonials>
      <FAQs {...faqsData} />
    </>
  );
};

export default CaseStudiesPage;
