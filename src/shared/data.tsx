import {
  IconArrowDown,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTailwind,
  IconBrandTwitter,
  IconBulb,
  IconCheck,
  IconChevronDown,
  IconClock,
  IconComponents,
  IconDownload,
  IconHeadset,
  IconHelp,
  IconListCheck,
  IconMail,
  IconMapPin,
  IconMessages,
  IconPhoneCall,
  IconRocket,
  IconSettings,
  IconChartBar,
  IconRss,
  IconStar,
  IconWorld,
  IconCode,
  IconBrain,
  IconDeviceLaptop,
  IconAdjustments,
} from '@tabler/icons-react';
import {
  AnnouncementProps,
  CallToActionProps,
  ComparisonProps,
  ContactProps,
  ContentProps,
  FAQsProps,
  FeaturesProps,
  FooterProps,
  HeaderProps,
  HeroProps,
  PricingProps,
  SocialProofProps,
  StatsProps,
  TeamProps,
  TestimonialProps,
} from './types';

//Import of Images

import contentOne from '~/assets/images/iphone.png';
import contentTwo from '~/assets/images/content3.png';
import heroImg from '~/assets/images/JET.png';
import NycstockImg from '~/assets/images/nycstock.png';
import gasImg from '~/assets/images/box.png'; 
import GreenBar from '~/assets/images/greenbar.png';
import GoldBar from '~/assets/images/goldbar.png';
import SilverBar from '~/assets/images/silverbar.png';
import ProfileOne from '~/assets/images/ProfileOne.png';
import ProfileTwo from '~/assets/images/ProfileTwo.png';
import ProfileThree from '~/assets/images/ProfileThree.png';
import TleLogo from '~/assets/images/tle.png';
import MochaLogo from '~/assets/images/mocha.png';
import TstyleLogo from '~/assets/images/tstyle.png';
import kaws1 from '~/assets/images/kaws1.png';
import kaws2 from '~/assets/images/kaws2.png';
import kaws3 from '~/assets/images/kaws3.png';
import kaws4 from '~/assets/images/kaws4.png';


// Announcement data
export const announcementData: AnnouncementProps = {
  title: 'NEW',
  callToAction: {
    text: 'Q1 Update: Discover Custom Tech Solutions for Your Business',
    href: 'https://nextjs.org/docs/app',
  },
  callToAction2: {
    text: 'Connect with Rose Development on Twitter',
    href: 'https://twitter.com/home?lang=en',
  },
};

// Header data
export const headerData: HeaderProps = {
  links: [
    {
      label: 'Navigation',
      icon: IconChevronDown,
      links: [
        {
          label: 'Our Story',
          href: '/about',
        },
        {
          label: 'Pricing',
          href: '/pricing',
        },
        {
          label: 'Case Studies',
          href: '/casestudies',
        },
      ],
    },
  ],
  actions: [
    {
      text: 'Contact',
      href: '/contact',
      targetBlank: false,
      btnType: 'primary',
    },
  ],
  isSticky: true,
  showToggleTheme: true,
  showRssFeed: false,
  position: 'right',
};

// Hero data
export const heroData: HeroProps = {
  title: (
    <>
     Revolutionizing Business <span className="hidden md:inline">with Customized Tech Innovations</span> 
      <span className="sm:whitespace-nowrap"></span>
    </>
  ),
  subtitle: (
    <>
      Welcome to <span className="font-semibold underline decoration-wavy decoration-1 underline-offset-2">
      Rose Development</span>. We are not just developers; we are partners in your digital transformation journey. Specializing in AI-driven solutions and bespoke web and app development, we align technology with your unique business vision.
    </>
  ),
  callToAction: {
    text: 'Our Client List',
    href: '/blog',
    icon: IconStar,
    targetBlank: true,
    btnType: 'primary',
  },
  callToAction2: {
    text: 'Learn more',
    href: '/about',
  },
  image: {
    src: heroImg,
    alt: 'Hero TailNext',
  },
}

// Hero2 data
export const hero2Data: HeroProps = {
  title: 'Where Visionaries Thrive',
  subtitle:
    'At the forefront of technological evolution, our dedicated development team is the driving force behind our innovative ventures. Embracing the limitless possibilities of AI, we are not just building software; we are sculpting the future. Our commitment to excellence in AI development guides our journey towards creating transformative solutions for tomorrow.',
  callToAction: {
    text: 'Trusted Partners',
    href: 'https://www.linkedin.com/',
    targetBlank: true,
    btnType: 'primary',
  },
  callToAction2: {
    text: 'Contact us',
    href: '/contact',
  },
  image: {
    src: NycstockImg,
    alt: 'Hero TailNext',
  },
};

// SocialProof data
export const socialProofData: SocialProofProps = {
  images: [
    {
      link: 'https://code-equity.com/',
      src: MochaLogo,
      alt: 'Code Equity',
    },
    {
      link: 'https://theleadingedge-production.up.railway.app/',
      src: TleLogo,
      alt: 'The Leading Edge',
    },   {
      link: 'https://hilink-pp2xzvkkr-nathanroses-projects.vercel.app',
      src: TstyleLogo,
      alt: 'The Leading Edge',
    },
    
  ],
};

// FAQS data
export const faqsData: FAQsProps = {
  header: {
    title: 'Frequently Asked Questions',
    subtitle:
      'Discover how our cutting-edge technology and expertise set us apart. Explore our FAQs to learn more about our pivotal role in the tech industry.',
    highlight: 'FAQS',
  },
  items: [
    {
      title: 'What innovative technologies does Rose Development specialize in?',
      description: `Our expertise spans advanced fields such as AI, machine learning, and blockchain, positioning us at the forefront of technological innovation.`,
    },
    {
      title: 'How does Rose Development drive industry-leading code equity?',
      description: `As pioneers of the code equity project, we focus on optimizing code efficiency and quality, setting new standards in software development and analysis.`,
    },
    {
      title: 'What sets Rose Development apart in AI and machine learning?',
      description: `Our unique approach combines deep learning, neural networks, and data-driven insights to create AI solutions that are both innovative and practical.`,
    },
    {
      title: 'How does your company contribute to the future of web development?',
      description: `We are redefining web development with our forward-thinking strategies, focusing on user experience, performance, and next-generation web technologies.`,
    },
    {
      title: 'What role does Rose Development play in global tech advancements?',
      description: `Our global reach and collaborations enable us to drive significant advancements in tech, influencing trends and contributing to major breakthroughs.`,
    },
    {
      title: 'How do you integrate ethical practices in your tech solutions?',
      description: `Ethics are integral to our process. We prioritize responsible AI, data security, and sustainable practices to ensure our technology benefits society as a whole.`,
    },
  ],
};

// FAQS data 2
export const faqsData2: FAQsProps = {
  header: {
    title: 'Frequently Asked Questions',
    subtitle:
      'Your business aspirations deserve an expert touch. Dive into our frequently asked questions and discover how we can elevate your enterprise to new heights.',
    highlight: 'FAQS',
  },
  items: [
    {
      title: 'Which industries are within your area of expertise?',
      description: `We navigate a vast spectrum of sectors, ensuring each business thrives under our specialized guidance.`,
    },
    {
      title: 'How do you set yourselves apart from other management firms?',
      description: `Rose Development transcends traditional management. Our holistic approach and dedication ensure your business is always poised for success.      `,
    },
    {
      title: "Can businesses anticipate measurable results?",
      description: `Indeed. Our partners consistently witness unparalleled growth, operational finesse, and leadership in their respective markets.

      `,
    },
    {
      title: "What's the journey like when partnering with you?",
      description: `The voyage begins with an in-depth business analysis. From there, we tailor strategies and provide unwavering support, sculpting a roadmap to success.`,
    },
    {
      title: 'Is global expansion on your radar?',
      description: `Certainly. Our expansive global network and adeptness at navigating diverse market dynamics make us the ideal ally for international endeavors.`,
    },
    {
      title: 'How do you prioritize sustainability and ethical practices?',
      description: `Creating success that benefits the larger ecosystem is intrinsic to our ethos. We champion eco-friendly initiatives and advocate for a conscientious business approach.`,
    },
  ],
};

// FAQS3 data
export const faqs3Data: FAQsProps = {
  header: {
    title: 'Pricing FAQs',
    subtitle: 'Seeking further details? Let’s address your queries.',
    // highlight: 'FAQS',
    position: 'left',
  },
  items: [
    {
      title: 'Which rose development plan suits my needs?',
      description: `Each plan is tailored to cater to different scales of rose cultivation. Whether you're a hobbyist or a commercial grower, we have a plan that fits. Assess your variety interest, support requirements, and scale to choose the perfect plan.`,
    },
    {
      title: 'What payment methods are accepted?',
      description: `We accept a range of payment options for your convenience, including all major credit cards, bank transfers, and online payment platforms. Secure and flexible payment is part of our commitment to you.`,
    },
    {
      title: 'How can I upgrade or downgrade my plan?',
      description: `Adjusting your plan is simple and can be managed directly from your account dashboard. If you need personalized assistance, our customer service team is readily available to guide you through the process.`,
    },
    {
      title: 'What happens at the end of my billing cycle?',
      description: `There are no surprises at the end of your billing cycle. We'll send a reminder before your plan renews. You'll have the option to continue with us, change your plan, or, if you must, cancel your services.`,
    },
    {
      title: 'Is it possible to integrate my existing data?',
      description: `Absolutely! Our platform supports data integration from various sources. We're here to ensure a seamless transition, so you can carry on with your rose cultivation without missing a beat.`,
    },
    {
      title: 'What is the cancellation policy?',
      description: `Should you decide to cancel, you can do so at any time. Our policy ensures that you're not bound by long-term commitments. We believe in the quality of our service and hope you'll stay with us for the value it adds.`,
    },
  ],
  callToAction: {
    text: 'Contact us',
    href: '/contact',
    btnText: 'uppercase',
    btnType: 'primary',
  },
};

// FAQS4 data
export const faqs4Data: FAQsProps = {
  header: {
    title: 'Frequently Asked Questions',
    subtitle:
      'Praesent rutrum purus in sem blandit, in consectetur mi pharetra. Ut sagittis sapien sit amet congue cursus. Nulla eu elementum ex, tincidunt semper nisi.',
    highlight: 'FAQS',
    position: 'center',
  },
  tabs: [
    {
      link: {
        label: 'General',
        href: '/tab1',
      },
      items: [
        {
          title: 'What do I need to start?',
          description: `Nunc mollis tempor quam, non fringilla elit sagittis in. Nullam vitae consectetur mi, a elementum arcu. Sed laoreet, ipsum et vehicula dignissim, leo orci pretium sem, ac condimentum tellus est quis ligula.`,
        },
        {
          title: 'How to install the NextJS + Tailwind CSS template?',
          description: `Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer eleifend vestibulum nisl in iaculis. Mauris dictum ac purus vestibulum auctor. Praesent imperdiet lectus et massa faucibus, quis viverra massa rhoncus.`,
        },
        {
          title: "What's something that you completely don't understand?",
          description: `Mauris vitae eros a dui varius luctus. Suspendisse rutrum, sapien nec blandit bibendum, justo sapien sollicitudin erat, id aliquam sapien purus quis leo. Aliquam vulputate vestibulum consectetur.`,
        },
        {
          title: "What's an example of when you changed your mind?",
          description: `Nunc dapibus lacinia ipsum ut elementum. Integer in pretium sapien. Ut pretium nisl mauris, ut rutrum justo condimentum id. Etiam aliquet, arcu at iaculis laoreet, est arcu egestas sapien, eget sollicitudin odio orci et nunc.`,
        },
        {
          title: 'What is something that you would really like to try again?',
          description: `Duis in maximus mauris, id eleifend mauris. Nam a fringilla arcu. Curabitur convallis, tellus non aliquet rhoncus, lacus massa auctor eros, in interdum lectus augue sed augue. Fusce tempor ex id faucibus efficitur.`,
        },
        {
          title: 'If you could only ask one question to each person you meet, what would that question be?',
          description: `Nullam imperdiet sapien tincidunt erat dapibus faucibus. Vestibulum a sem nec lorem imperdiet scelerisque non sed lacus. Ut pulvinar id diam vitae auctor. Nam tempus, neque et elementum consectetur, ex ipsum pulvinar risus, vel sodales ligula tortor eu eros.`,
        },
      ],
    },
    {
      link: {
        label: 'Plans, Prices, and Payments',
        href: '/tab2',
    },
    items: [
        {
            title: 'Selecting the Right Plan for Your Business Needs',
            description: `Explore a range of plans designed to suit different business scales and requirements. Whether you're a start-up or a well-established enterprise, our plans offer flexibility and scalability to meet your evolving business needs.`,
        },
        {
            title: 'Diverse Payment Options for Convenience',
            description: `We provide multiple payment methods, including credit cards, bank transfers, and digital wallets, to ensure ease of transaction. Our secure payment gateway ensures safe and hassle-free processing.`,
        },
        {
            title: 'Seamless Plan Transition for Growing Businesses',
            description: `Easily upgrade or change your plan as your business needs evolve. Our support team is here to assist with a smooth transition, ensuring no disruption to your services.`,
        },
        {
            title: 'Maximizing Value Post-Trial',
            description: `After your free trial, choose the plan that best fits your business. Our team can guide you through the options, ensuring you make the most of our services.`,
        },
        {
            title: 'Effortless Data Integration from Various Tools',
            description: `Seamlessly import data from other platforms and tools into our system. Our solution is designed for compatibility and ease, simplifying your transition to our services.`,
        },
        {
            title: 'Flexible Cancellation Policy',
            description: `We understand business needs can change. Our cancellation policy is designed to be flexible, allowing you to make decisions that are best for your business without long-term commitments.`,
        },
    ],
    },
    
    {
      link: {
        label: 'Others',
        href: '/tab3',
      },
      items: [
        {
          title: 'How do I download the template?',
          description: `In ullamcorper pellentesque ante, nec commodo ex euismod viverra. Phasellus facilisis, justo a bibendum pellentesque, nibh est egestas lectus, volutpat ullamcorper arcu ante ac dolor.`,
        },
        {
          title: 'How do I customize the template?',
          description: `Pellentesque semper euismod malesuada. Curabitur quis lectus tortor. Aliquam efficitur pretium tellus, ut sagittis turpis dignissim eget. Etiam scelerisque nec risus eget iaculis. Nunc maximus metus id felis dapibus, sed ullamcorper sapien faucibus.`,
        },
        {
          title: 'Does the template come with any tutorials or instructions?',
          description: `Sed sagittis arcu suscipit auctor suscipit. Nam dapibus risus vitae tristique fermentum. In egestas turpis elit, id gravida diam dictum eu. Ut dictum libero ut rhoncus egestas. Ut sit amet tortor blandit, faucibus tellus vitae, consequat purus. Nullam id odio enim.`,
        },
        {
          title: 'Are there any additional fees or charges for using the template?',
          description: `Fusce efficitur, augue et vulputate pharetra, augue turpis viverra turpis, id tempor purus eros sed erat. Curabitur blandit eget sem vitae malesuada.`,
        },
      ],
    },
  ],
};

// CallToAction data
export const callToActionData: CallToActionProps = {
  title: 'Rose Development',
  subtitle:
    'Dive deeper into our portfolio of companies and discover our comprehensive services. Download our brochure to learn more about how we can elevate your business.',
  callToAction: {
    text: 'Download Brochure',
    href: 'https://img.freepik.com/free-photo/abstract-surface-textures-white-concrete-stone-wall_74190-8189.jpg',
    icon: IconDownload,
  },
  items: [
    {
      title: 'Download Brochure',
      description: 'Gain insights into our expansive network of ventures and partnerships.',
      href: 'https://img.freepik.com/free-photo/abstract-surface-textures-white-concrete-stone-wall_74190-8189.jpg',
    },
    {
      title: 'Learn more',
      description: 'Discover our unique approach to fostering businesses.',
      href: '/',
    },
    {
      title: 'Subscribe',
      description: 'Stay updated with our latest business insights.',
      form: {
        icon: IconMail,
        input: {
          type: 'email',
          name: 'email',
          autocomplete: 'email',
          placeholder: 'Enter your email address',
        },
        btn: {
          title: 'Subscribe',
          type: 'submit',
        },
      },
    },
  ],
};

// CallToAction2 data
export const callToActionData2: CallToActionProps = {
  title: 'Still have questions?',
  subtitle:
    'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut in leo odio. Cras finibus ex a ante convallis ullamcorper.',
  callToAction: {
    text: 'Contact us',
    href: '/contact',
    btnType: 'primary',
  },
};

// Feature data
export const featuresData: FeaturesProps = {
  header: {
    title: (
      <>
        What you get with <span className="whitespace-nowrap">Rose Development</span>
      </>
    ),
    subtitle:
      'Pioneering in web development and AI analytics, Rose Development leads the charge in digital innovation and code equity. We bring cutting-edge solutions to the forefront of technology.',
    highlight: 'Features',
  },
  items: [
    {
      title: 'Web Development Excellence',
      description:
        'Crafting state-of-the-art websites with a blend of aesthetics and functionality. Our development team excels in creating digital platforms that engage and inspire.',
      icon: IconWorld, // Icon symbolizing global connectivity and web development
      link: {
        label: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'Code Equity',
      description:
        'Ensuring the highest standards in coding practices. We champion code equity, delivering clean, efficient, and scalable code that sets industry benchmarks.',
      icon: IconCode, // Icon representing coding and development
      link: {
        label: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'AI Analytic Insights',
      description:
        'Leveraging AI for deep analytical insights. Our AI code analytic grading system evaluates and enhances code performance, driving innovation and excellence.',
      icon: IconBrain, // Icon denoting AI and intelligence
      link: {
        label: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'Integrated Digital Solutions',
      description:
        'Delivering comprehensive solutions for all digital needs. From UI/UX design to back-end development, we cover every aspect of creating a robust online presence.',
      icon: IconDeviceLaptop, // Icon indicating digital solutions and technology
      link: {
        label: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'Strategic IT Consultation',
      description:
        'Providing expert IT strategy and consulting services. Our advice guides businesses through technological transformations, ensuring they stay ahead in a digital world.',
      icon: IconAdjustments, // Icon symbolizing strategic planning and consultation
      link: {
        label: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'Continuous Innovation',
      description:
        'Staying ahead with constant technological evolution. Our dedication to innovation means we’re always exploring new horizons in web and AI technologies.',
      icon: IconBulb, // Icon representing innovation and forward-thinking
      link: {
        label: 'Discover now',
        href: '/',
      },
    },
  ],
};


// Feature2 data
export const featuresData2: FeaturesProps = {
  header: {
    title: 'Support Center',
    subtitle: 'Looking for something in particular?',
  },
  items: [
    {
      title: 'Have a question?',
      description: 'See our frequently asked questions',
      icon: IconHelp,
      link: {
        href: '/faqs',
      },
    },
    {
      title: 'Chat with us',
      description: 'Live chat with our support team',
      icon: IconMessages,
      link: {
        href: '/',
      },
    },
    {
      title: 'Get help',
      description: 'Speak to our team today',
      icon: IconHeadset,
      link: {
        href: '/',
      },
    },
  ],
};

// Feature data 3
export const featuresData3: FeaturesProps = {
  header: {
    title: 'Services',
  },
  items: [
    {
      title: 'Advanced Tech Leadership',
      description: 'Guiding businesses with cutting-edge technological insights, we align with emerging tech trends and drive innovation in every sector we touch.',
      icon: IconBrandTailwind,
    },
    {
      title: 'Tech-Driven Operational Excellence',
      description: 'Employing advanced technology to optimize operations, our approach ensures peak performance through automation, AI integration, and data analytics.',
      icon: IconComponents,
    },
    {
      title: 'Technology as a Growth Catalyst',
      description: 'Utilizing our tech expertise and strategic partnerships, we empower businesses to scale rapidly and effectively in todays digital age.',
      icon: IconListCheck,
    },
    {
      title: 'Comprehensive Tech Solutions',
      description: 'We provide end-to-end tech solutions, covering aspects from software development to cybersecurity, ensuring a seamless and secure technological environment.',
      icon: IconDeviceLaptop,
    },
    {
      title: 'Innovation and R&D Hub',
      description: 'Our commitment to research and development places us at the vanguard of technological innovation, constantly exploring and creating future-forward solutions.',
      icon: IconSettings,
    },
    {
      title: 'AI-Driven Management',
      description: 'Integrating AI into our management practices, we offer advanced analytics and intelligent decision-making tools for optimized business operations.',
      icon: IconBrain,
    },
    {
      title: 'Data-Driven Strategy',
      description: 'Leveraging big data analytics to craft strategies that are not only reactive to current trends but also predictive of future market dynamics.',
      icon: IconChartBar,
    },
    // Additional items can be added here
  ],
};


export const contentData: ContentProps = {
  header: {
    title: 'Tailored Tech Innovation',
    subtitle: 'Crafting Your Digital Future',
    highlight: 'Customization',
  },
  content:
    'At Rose Development, we specialize in transforming your business vision into digital reality. Our focus is on delivering bespoke tech solutions that are not only industry-compliant but also innovative and trendsetting.',
  items: [
    {
      title: 'Bespoke Digital Solutions',
      description:
        'We don’t just build; we create. Specializing in customized web and app development, we ensure your digital presence is unique, engaging, and tailored to your specific business needs.',
    },
    {
      title: 'Operational Excellence through Technology',
      description:
        'Our tech-driven approach streamlines your operations, integrating the latest technologies to enhance efficiency and scalability. We empower your business to thrive in today’s digital ecosystem.',
    },
    {
      title: 'Pioneering in Tech Innovation',
      description:
        'Innovation is at the core of what we do. From AI solutions to advanced web technologies, our commitment to research and development puts cutting-edge tools in your hands, driving your business forward.',
    },
  ],
  image: {
    src: contentOne,
    alt: 'Innovative Digital Solutions',
  },
};



export const content2Data: ContentProps = {
  content:
    'Empowering Your Enterprise in the Digital Age with Advanced Solutions.',
  items: [
    {
      title: 'Innovative Tech Implementation',
    },
    {
      title: 'AI & Machine Learning Integration',
    },
    {
      title: 'Robust Digital Ecosystems',
    },
    {
      title: 'User-Centric Design Excellence',
    },
    {
      title: 'Eco-Friendly Tech Innovations',
    },
    {
      title: 'Secure FinTech Solutions',
    },
  ],
  image: {
    src: contentTwo,
    alt: 'Advanced Business Technology',
  },
  isReversed: true,
  isAfterContent: true,
};



// Steps data
export const stepsData = {
  title: 'Your Project, Our Passion',
  items: [
    {
      title: 'Consult & Conceptualize',
      description: 'Begin your journey with a detailed consultation, where we understand your vision and goals, setting the stage for a tailored tech solution.',
      icon: IconArrowDown
    },
    {
      title: 'Design & Develop',
      description: 'Transitioning from ideas to action, our team designs and develops your project, focusing on functionality, aesthetics, and user experience.',
      icon: IconArrowDown
    },
    {
      title: 'Test & Refine',
      description: 'Quality is key. We meticulously test and refine the product, ensuring it not only meets but exceeds industry standards and your expectations.',
      icon: IconArrowDown
    },
    {
      title: 'Launch & Support',
      description: 'The final step is a successful launch. We dont just deliver; we provide ongoing support to ensure continuous performance and satisfaction.',
      icon: IconCheck
    }
  ],
  image: {
    src: gasImg,
    alt: 'Project Development Process'
  }
};



// Team data
export const teamData: TeamProps = {
  header: {
    title: 'Team Members',
    subtitle:
      'Meet the pillars of our team spanning from legal expertise to marketing, financial acumen to strategic leadership, all working in unison to drive our vision forward',
    // highlight: 'Team',
  },
  teams: [
    {
      name: 'Nathan Rose',
      occupation: 'Chief Executive Officer',
      image: {
        src: kaws1,
        alt: 'Cindy Belcher',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Lee Alverson',
      occupation: 'Head of Accounting',
      image: {
        src: kaws2,
        alt: '',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Joe Moceri',
      occupation: 'Full Stack Developer',
      image: {
        src: kaws3,
        alt: 'Clark Bourne',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Samantha Peterson',
      occupation: 'Designer',
      image: {
        src: kaws4,
        alt: 'Bella Chase',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
  ],
};

// Testimonial data
export const testimonialData: TestimonialProps = {
  header: {
    title: 'What our customers say about us',
    subtitle:
      'In a world of relentless business challenges, we stand as your steadfast ally. Our expertise ensures your enterprise thrives in any landscape.',
    // highlight: 'Testimonial',
  },
  testimonials: [
    {
      name: 'Sophia',
      occupation: 'IT at Orbit Odyssey',
      comment:
        'Transformative insights led us to record growth.',
      image: {
        src: ProfileOne,
        alt: '',
      },
      icon: IconBrandTwitter,
      href: '#',
    },
    {
      name: 'Ethan',
      occupation: 'Support at Pixel Play',
      comment:
        'Commitment to excellence took our sustainability initiatives to new heights.',
      image: {
        src: ProfileTwo,
        alt: '',
      },
      icon: IconBrandTwitter,
      href: '#',
    },
    {
      name: 'Ava',
      occupation: 'Founder of Brew',
      comment:
        'Innovative strategies gave us the competitive edge we needed.',
      image: {
        src: ProfileThree,
        alt: '',
      },
      icon: IconBrandTwitter,
      href: '#',
    },
  ],
};

export const pricingData: PricingProps = {
  header: {
    title: 'Customized Technology Solutions',
    subtitle:
      'Tailored services for every business need. Whether you’re tech-savvy or new to digital solutions, we guide your journey towards technological excellence.',
  },
  prices: [
    {
      title: 'Bespoke Web & App Development',
      icon: SilverBar,
      period: 'Ideal for Startups & SMEs',
      texts: [
        'Custom website and mobile app development tailored to your unique business requirements',
        'User experience design focused on engagement and conversion',
        'Continuous support and updates to keep your digital presence ahead of the curve',
      ],
      callToAction: {
        text: '$500+',
        href: '/',
      },
      hasRibbon: false,
    },
    {
      title: 'AI-Driven Business Transformation',
      icon: GoldBar,
      period: 'Perfect for Growing Enterprises',
      texts: [
        'Integration of AI and machine learning to automate and optimize business processes',
        'Personalized AI solutions like chatbots to enhance customer interaction',
        'Data analytics for insightful business decision-making and strategy development',
      ],
      callToAction: {
        text: '$1000+',
        href: '/',
      },
      hasRibbon: true,
      ribbonTitle: 'Trending',
    },
    {
      title: 'Comprehensive Tech Overhaul',
      icon: GreenBar,
      period: 'For Established Businesses',
      texts: [
        'Complete digital transformation strategy encompassing all tech aspects of your business',
        'Advanced analytics and bespoke software solutions for operational excellence',
        'Long-term tech partnership for continuous innovation and growth',
      ],
      callToAction: {
        text: '$5000+',
        href: '/',
      },
      hasRibbon: false,
    },
  ],
};


export const comparisonData: ComparisonProps = {
  header: {
    title: "Service Plans Tailored for You",
    subtitle: 'Select the perfect plan for your business needs.',
  },
  columns: [
    {
      title: 'Service Features',
      items: [
        { title: 'Business Analysis' },
        { title: 'Operational Support' },
        { title: 'Strategic Planning' },
        { title: 'Risk Management' },
        { title: 'Financial Advisory' },
        { title: 'Leadership Training' },
      ],
    },
    {
      title: 'Startup Essentials',
      items: [
        { title: 'Yes' }, // Business Analysis
        { title: 'Yes' }, // Operational Support
        { title: 'Yes' }, // Strategic Planning
        { title: 'No' },  // Risk Management
        { title: 'No' },  // Financial Advisory
        { title: 'No' },  // Leadership Training
      ],
      callToAction: {
        text: 'Explore Startup Plans',
        href: '/basic-plan',
        btnType: 'primary',
      },
    },
    {
      title: 'Growth & Development',
      items: [
        { title: 'Yes' }, // Business Analysis
        { title: 'Yes' }, // Operational Support
        { title: 'Yes' }, // Strategic Planning
        { title: 'Yes' }, // Risk Management
        { title: 'Yes' }, // Financial Advisory
        { title: 'No' },  // Leadership Training
      ],
      callToAction: {
        text: 'Grow Your Business',
        href: '/standard-plan',
        btnType: 'primary',
      },
    },
    {
      title: 'Corporate Excellence',
      items: [
        { title: 'Yes' }, // Business Analysis
        { title: 'Yes' }, // Operational Support
        { title: 'Yes' }, // Strategic Planning
        { title: 'Yes' }, // Risk Management
        { title: 'Yes' }, // Financial Advisory
        { title: 'Yes' }, // Leadership Training
      ],
      callToAction: {
        text: 'Achieve Operational Excellence',
        href: '/premium-plan',
        btnType: 'primary',
      },
    },
  ],
};


// Stats
export const statsData: StatsProps = {
  items: [
    {
      title: 45,
      description: 'Successful Projects Delivered',
    },
    {
      title: 30,
      description: 'Websites and Apps Developed',
    },
    {
      title: 35,
      description: 'Branding and Logo Designs Completed',
    },
    {
      title: 20,
      description: 'Countries with Client Engagement',
    },
  ],
};


// Contact data
export const contactData: ContactProps = {
  header: {
    title: 'Connect with Us',
    subtitle: 'At Rose Development, we are ready to assist you',
    highlight: 'Contact',
  },
  content:
    'Rose Development is dedicated to bringing your visions to life with innovative solutions and exceptional service.',
  items: [
    {
      title: 'Our Address',
      description: ['8 The Green', 'Dover Delaware, United States'],
      icon: IconMapPin,
    },
    {
      title: 'Contact',
      description: ['Phone: (704) 326-6651', 'Email: support@rosedevelopment.org'],
      icon: IconPhoneCall,
    },
    {
      title: 'Working hours',
      description: ['Monday - Friday: 08:00 - 3:00', 'Saturday: 08:00 - 12:00'],
      icon: IconClock,
    },
  ],
  form: {
    title: 'Ready to Get Started?',
    inputs: [
      {
        type: 'text',
        name: 'name',
        autocomplete: 'given-name',
        placeholder: 'Your name',
      },
      {
        type: 'email',
        name: 'email',
        autocomplete: 'email',
        placeholder: 'Your email address',
      },
    ],
    textarea: {
      cols: 30,
      rows: 5,
      name: 'textarea',
      placeholder: 'Write your message...',
    },
    btn: {
      title: 'Send Message',
      type: 'submit',
    },
  },
};

// Contact2 data
export const contact2Data: ContactProps = {
  header: {
    title: 'Connect with Us',
    subtitle: 'Rose Development is here for you',
    highlight: 'Contact',
  },
  content:
    'Whether you need technical support or have questions about our services, our team is here to provide the answers you need.',
  items: [
    {
      title: 'Our Address',
      description: ['8 The Green', 'Dover, Delaware, United States'],
      icon: IconMapPin,
    },
    {
      title: 'Contact',
      description: ['Phone: 1-800-ROSE (7673)', 'Email: support@rosedevelopment.com'],
      icon: IconPhoneCall,
    },
    {
      title: 'Working hours',
      description: ['Monday - Friday: 08:00 - 3:00', 'Saturday: 08:00 - 12:00'],
      icon: IconClock,
    },
  ],
  form: {
    title: 'Ready to Get Started?',
    description:
      'Join us on a journey where your ideas take digital form. Rose Development is where your vision becomes reality.',
    inputs: [
      {
        type: 'text',
        label: 'First name',
        name: 'name',
        autocomplete: 'given-name',
        placeholder: 'First name',
      },
      {
        type: 'text',
        label: 'Last name',
        name: 'lastName',
        placeholder: 'Last name',
      },
      {
        type: 'email',
        label: 'Email address',
        name: 'email',
        placeholder: 'Email address',
      },
    ],
    radioBtns: {
      label: 'What is the reason for your contact?',
      radios: [
        {
          label: 'General inquiries',
        },
        {
          label: 'Technical help',
        },
        {
          label: 'Claims',
        },
        {
          label: 'Others',
        },
      ],
    },
    textarea: {
      cols: 30,
      rows: 5,
      label: 'How can we help you?',
      name: 'textarea',
      placeholder: 'Write your message...',
    },
    checkboxes: [
      {
        label: 'Have you read our privacy policy?',
        value: '',
      },
      {
        label: 'Do you want to receive monthly updates by email?',
        value: '',
      },
    ],
    btn: {
      title: 'Send Message',
      type: 'submit',
    },
  },
};

// Footer data
export const footerData: FooterProps = {
  title: 'Rose Developement',
  links: [
    {
      label: 'Terms & Conditions',
      href: '/terms',
    },
    {
      label: 'Privacy Policy',
      href: '/privacy',
    },
  ],
  columns: [
    {
      title: 'Product',
      links: [
        {
          label: 'Features',
          href: '/',
        },
        {
          label: 'Security',
          href: '/',
        },
        {
          label: 'Team',
          href: '/',
        },
        {
          label: 'Enterprise',
          href: '/',
        },
        {
          label: 'Customer stories',
          href: '/',
        },
        {
          label: 'Pricing',
          href: '/pricing',
        },
        {
          label: 'Resources',
          href: '/',
        },
      ],
    },
    {
      title: 'Platform',
      links: [
        {
          label: 'Developer API',
          href: '/',
        },
        {
          label: 'Partners',
          href: '/',
        },
      ],
    },
    {
      title: 'Support',
      links: [
        {
          label: 'Docs',
          href: '/',
        },
        {
          label: 'Community Forum',
          href: '/',
        },
        {
          label: 'Professional Services',
          href: '/',
        },
        {
          label: 'Skills',
          href: '/',
        },
        {
          label: 'Status',
          href: '/',
        },
      ],
    },
    {
      title: 'Company',
      links: [
        {
          label: 'About',
          href: '/',
        },
        {
          label: 'Blog',
          href: '/blog',
        },
        {
          label: 'Careers',
          href: '/',
        },
        {
          label: 'Press',
          href: '/',
        },
        {
          label: 'Inclusion',
          href: '/',
        },
        {
          label: 'Social Impact',
          href: '/',
        },
        {
          label: 'Shop',
          href: '/',
        },
      ],
    },
  ],
  socials: [
    { label: 'Twitter', icon: IconBrandTwitter, href: '#' },
    { label: 'Instagram', icon: IconBrandInstagram, href: '#' },
    { label: 'Facebook', icon: IconBrandFacebook, href: '#' },
    { label: 'RSS', icon: IconRss, href: '#' },

  ],
  footNote: (
    <div className="mr-4 text-sm dark:text-slate-400">
      <span className="float-left mr-1.5 h-5 w-5 rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)] bg-cover md:-mt-0.5 md:h-6 md:w-6"></span>
      Made by{' '}
      <a className="text-purple-600 hover:underline dark:text-gray-200" href="https://onwidget.com/">
        {' '}
        onWidget
      </a>{' '}
      · All rights reserved.
    </div>
  ),
};

// Footer2 data
export const footerData2: FooterProps = {
  links: [
    {
      label: 'Terms & Conditions',
      href: '/terms',
    },
    {
      label: 'Privacy Policy',
      href: '/privacy',
    },
  ],
  columns: [
    {
      title: 'Address',
      texts: ['8 The Green Dover, DE 19901'],
    },
    {
      title: 'Phone',
      texts: ['Office: +1 704 326 6651'],
    },
    {
      title: 'Email',
      texts: ['Office: support@rosedevelopment.org'],
    },
  ],
  socials: [
    { label: 'Twitter', icon: IconBrandTwitter, href: 'https://twitter.com/home?lang=en' },
    { label: 'Instagram', icon: IconBrandInstagram, href: 'https://www.instagram.com/' },
    { label: 'Facebook', icon: IconBrandFacebook, href: 'https://www.facebook.com/' },
    { label: 'RSS', icon: IconRss, href: 'https://rss.com/' },
  ],

};
