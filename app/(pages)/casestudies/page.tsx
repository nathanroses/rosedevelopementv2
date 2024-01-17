import type { Metadata } from 'next';

import Testimonials from '~/components/widgets/Testimonials';
import { testimonialData, statsData} from '~/shared/data';
import Stats from '~/components/widgets/Stats';

export const metadata: Metadata = {
  title: 'Case Studies',
};

const CaseStudiesPage = () => {
  return (
    <>
      <h1 style={{ fontSize: '40pt', fontWeight: 'bold', padding: '25px', textAlign: 'center', }}>Case Studies</h1>
     
      
      <Stats {...statsData} />
      <Testimonials {...testimonialData} />
    
    </>
  );
};

export default CaseStudiesPage;
