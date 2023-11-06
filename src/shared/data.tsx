import {
  IconArrowDown,
  IconArrowsRightLeft,
  IconBrandFacebook,
  IconBrandGithub,
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
  IconRss,
  IconStar,
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
import SnugbugLogo from '~/assets/images/snugbuglogo.png';
import ZeroLogo from '~/assets/images/zero.png';
import MonkeyCeo from '~/assets/images/Monkey 1.png';
import MonkeyLegal from '~/assets/images/Monkey 2.png';
import MonkeyMoney from '~/assets/images/Monkey 3.png';
import MonkeyPaint from '~/assets/images/Monkey 4.png';
import GreenBar from '~/assets/images/greenbar.png';
import GoldBar from '~/assets/images/goldbar.png';
import SilverBar from '~/assets/images/silverbar.png';
import ProfileOne from '~/assets/images/ProfileOne.png';
import ProfileTwo from '~/assets/images/ProfileTwo.png';
import ProfileThree from '~/assets/images/ProfileThree.png';



// Announcement data
export const announcementData: AnnouncementProps = {
  title: 'NEW',
  callToAction: {
    text: 'Q4 Update: New partnership boosts your success. Experience precision and performance »',
    href: 'https://nextjs.org/docs/app',
  },
  callToAction2: {
    text: 'Follow @rosedevelopement on Twitter',
    href: 'https://twitter.com/intent/user?screen_name=onwidget',
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
          label: 'About us',
          href: '/about',
        },
        {
          label: 'Pricing',
          href: '/pricing',
        },
        {
          label: 'Privacy Policy',
          href: '/privacy',
        },
        {
          label: 'Terms & Conditions',
          href: '/terms',
        },
      ],
    },
  ],
  actions: [
    {
      text: 'Contact',
      href: '/contact',
      targetBlank: true,
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
      Unified platform <span className="hidden md:inline">for diverse corporate</span> <span>ventures</span> 
      <span className="sm:whitespace-nowrap"></span>
    </>
  ),
  subtitle: (
    <>
      <span className="hidden md:inline">
        <span className="font-semibold underline decoration-wavy decoration-1 underline-offset-2">
          Rose Developement
        </span>{' '}
         is a buisness platform, uniting diverse enterprises with modern elegance. Built on principles of Global Synergy, Sustainable Growth, and Innovative Leadership, it embodies a future-forward vision for multifaceted corporate endeavors.
      </span>{' '}

    </>
  ),
  callToAction: {
    text: 'Our Portfolio',
    href: '/About Us',
    icon: IconStar,
    targetBlank: true,
    btnType: 'primary',
  },
  callToAction2: {
    text: 'Learn more',
    href: '/About Us',
  },
  image: {
    src: heroImg,
    alt: 'Hero TailNext',
  },
};

// Hero2 data
export const hero2Data: HeroProps = {
  title: 'Where Visionaries Thrive',
  subtitle:
    'In the business of building legacies, our collective of companies stands testament to the belief that diversity fuels innovation. We champion entrepreneurial spirit, fostering an environment where ambition transforms into achievement. Great companies are born from great people, and we cultivate excellence with every venture under our wing.',
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
      link: 'https://theleadingedgeinc.com/',
      src: SnugbugLogo,
      alt: 'None',
    },
    {
      link: 'https://tailwindcss.com/',
      src: ZeroLogo,
      alt: 'Snugbug',
    },
    {
      link: 'https://tailwindcss.com/',
      src: ZeroLogo,
      alt: 'Snugbug',
    },
    {
      link: 'https://www.typescriptlang.org/',
      src: ZeroLogo,
      alt: 'None',
    },
  ],
};

// FAQS data
export const faqsData: FAQsProps = {
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
    subtitle: 'Do you have other questions?',
    // highlight: 'FAQS',
    position: 'left',
  },
  items: [
    {
      title: 'Which plan is best for me?',
      description: `Nunc mollis tempor quam, non fringilla elit sagittis in. Nullam vitae consectetur mi, a elementum arcu. Sed laoreet, ipsum et vehicula dignissim, leo orci pretium sem, ac condimentum tellus est quis ligula.`,
    },
    {
      title: 'What are my payment options?',
      description: `Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer eleifend vestibulum nisl in iaculis. Mauris dictum ac purus vestibulum auctor. Praesent imperdiet lectus et massa faucibus, quis viverra massa rhoncus.`,
    },
    {
      title: 'How do I change my plan to a different one?',
      description: `Mauris vitae eros a dui varius luctus. Suspendisse rutrum, sapien nec blandit bibendum, justo sapien sollicitudin erat, id aliquam sapien purus quis leo. Aliquam vulputate vestibulum consectetur.`,
    },
    {
      title: 'What happen at the end of my free trial?',
      description: `Nunc dapibus lacinia ipsum ut elementum. Integer in pretium sapien. Ut pretium nisl mauris, ut rutrum justo condimentum id. Etiam aliquet, arcu at iaculis laoreet, est arcu egestas sapien, eget sollicitudin odio orci et nunc.`,
    },
    {
      title: 'Can I import data from other tools?',
      description: `Duis in maximus mauris, id eleifend mauris. Nam a fringilla arcu. Curabitur convallis, tellus non aliquet rhoncus, lacus massa auctor eros, in interdum lectus augue sed augue. Fusce tempor ex id faucibus efficitur.`,
    },
    {
      title: 'Can I cancel my plan at any time?',
      description: `Nullam imperdiet sapien tincidunt erat dapibus faucibus. Vestibulum a sem nec lorem imperdiet scelerisque non sed lacus. Ut pulvinar id diam vitae auctor. Nam tempus, neque et elementum consectetur, ex ipsum pulvinar risus, vel sodales ligula tortor eu eros.`,
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
        label: 'Plans, prices and payments',
        href: '/tab2',
      },
      items: [
        {
          title: 'Which plan is best for me?',
          description: `Nunc mollis tempor quam, non fringilla elit sagittis in. Nullam vitae consectetur mi, a elementum arcu. Sed laoreet, ipsum et vehicula dignissim, leo orci pretium sem, ac condimentum tellus est quis ligula.`,
        },
        {
          title: 'What are my payment options?',
          description: `Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer eleifend vestibulum nisl in iaculis. Mauris dictum ac purus vestibulum auctor. Praesent imperdiet lectus et massa faucibus, quis viverra massa rhoncus.`,
        },
        {
          title: 'How do I change my plan to a different one?',
          description: `Mauris vitae eros a dui varius luctus. Suspendisse rutrum, sapien nec blandit bibendum, justo sapien sollicitudin erat, id aliquam sapien purus quis leo. Aliquam vulputate vestibulum consectetur.`,
        },
        {
          title: 'What happen at the end of my free trial?',
          description: `Nunc dapibus lacinia ipsum ut elementum. Integer in pretium sapien. Ut pretium nisl mauris, ut rutrum justo condimentum id. Etiam aliquet, arcu at iaculis laoreet, est arcu egestas sapien, eget sollicitudin odio orci et nunc.`,
        },
        {
          title: 'Can I import data from other tools?',
          description: `Duis in maximus mauris, id eleifend mauris. Nam a fringilla arcu. Curabitur convallis, tellus non aliquet rhoncus, lacus massa auctor eros, in interdum lectus augue sed augue. Fusce tempor ex id faucibus efficitur.`,
        },
        {
          title: 'Can I cancel my plan at any time?',
          description: `Nullam imperdiet sapien tincidunt erat dapibus faucibus. Vestibulum a sem nec lorem imperdiet scelerisque non sed lacus. Ut pulvinar id diam vitae auctor. Nam tempus, neque et elementum consectetur, ex ipsum pulvinar risus, vel sodales ligula tortor eu eros.`,
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
  title: 'Rose Developement',
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
        What you get with <span className="whitespace-nowrap">Rose Developement</span>
      </>
    ),
    subtitle:
      'Driving businesses forward with unmatched expertise. Every venture thrives under our guidance. Experience passion, precision, and performance.',
    highlight: 'Features',
  },
  items: [
    {
      title: 'Strategic Leadership',
      description:
        'Our team of industry experts ensures that every business under Rose Development is steered with a visionary approach, aligning with the latest market trends and innovations.',
      icon: IconBrandTailwind,
      link: {
        label: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'Operational Excellence',
      description:
        'We streamline processes, optimize resources, and employ best practices to guarantee that our managed companies are always performing at their peak.',
      icon: IconComponents,
      link: {
        label: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'Growth Catalyst',
      description:
        'With our vast network and strategic partnerships, businesses under our helm experience accelerated growth and expanded market reach.',
      icon: IconListCheck,
      link: {
        label: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'Integrated Solutions',
      description:
        'From finance to human resources, marketing to supply chain management, we offer integrated solutions that cover every facet of running a successful enterprise.',
      icon: IconRocket,
      link: {
        label: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'Innovation Hub',
      description:
        'Staying ahead of the curve is crucial. Rose Development fosters a culture of innovation ensuring our businesses are always equipped with cutting-edge tools and strategies.',
      icon: IconArrowsRightLeft,
      link: {
        label: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'End-to-End Management',
      description:
        'Our Hands-on Approach End-to-End Management means were with you every step of the way. From conceptualization to execution.',
      icon: IconBulb,
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
      title: 'Strategic Leadership',
      description: 'Our team of industry experts ensures that every business under Rose Development is steered with a visionary approach, aligning with the latest market trends and innovations.',
      icon: IconBrandTailwind,
    },
    {
      title: 'Operational Excellence',
      description: 'We streamline processes, optimize resources, and employ best practices to guarantee that our managed companies are always performing at their peak.',
      icon: IconComponents,
    },
    {
      title: 'Growth Catalyst',
      description: 'With our vast network and strategic partnerships, businesses under our helm experience accelerated growth and expanded market reach.',
      icon: IconListCheck,
    },
    {
      title: 'Integrated Solutions',
      description: 'From finance to human resources, marketing to supply chain management, we offer integrated solutions that cover every facet of running a successful enterprise.',
      icon: IconRocket,
    },
    {
      title: 'Innovation Hub',
      description:
        'Staying ahead of the curve is crucial. Rose Development fosters a culture of innovation ensuring our businesses are always equipped with cutting-edge tools and strategies.',
      icon: IconArrowsRightLeft,
    },
    {
      title: 'End-to-End Management',
      description: 'Our Hands-on Approach End-to-End Management means were with you every step of the way. From conceptualization to execution.',
      icon: IconBulb,
    },
  ],
};

// Content data
export const contentData: ContentProps = {
  header: {
    title: 'Business Acumen Refined',
    subtitle: 'A Distinct Approach to Contemporary Challenges',
    highlight: 'Perspective',
  },
  content:
    'Recent analytical insights reveal a compelling trend: Organizations that embrace strategic foresight are poised for success. Rose Development exemplifies this forward-thinking ethos.',
  items: [
    {
      title: 'Embracing the Digital Renaissance',
      description:
        'In a world where digital transformation is paramount, we position organizations to harness the full potential of their digital assets.',
    },
    {
      title: 'The Art and Science of Business',
      description:
        'By 2030, the confluence of technology and creativity will redefine market leadership. We guide our partners through this intricate dance of innovation.',
    },
    {
      title: 'Sustainability: The New Gold Standard',
      description:
        'In-depth research underscores the significance of sustainable practices in shaping the enterprises of tomorrow. With us, sustainability is not an afterthought—it’s integral.',
    },
  ],
  image: {
    src: contentOne,
    alt: 'Colorful Image',
  },
}


// Content2 data
export const content2Data: ContentProps = {
  content:
    'In an era marked by rapid technological shifts, business landscapes evolve at an unprecedented rate. At Rose Development, we decipher tomorrow’s complexities today.',
  items: [
    {
      title: 'The Quantum Leap in Finance',
    },
    {
      title: 'AI: The New Business Oracle',
    },
    {
      title: 'The Era of Decentralized Enterprises',
    },
    {
      title: 'Evolving Consumer Dynamics',
    },
    {
      title: 'Green Tech: Powering Tomorrow',
    },
    {
      title: 'Digital Ethos in Modern Governance',
    },
  ],
  image: {
    src: contentTwo,
    alt: 'Futuristic Business Landscape',
  },
  isReversed: true,
  isAfterContent: true,
};


// Steps data
export const stepsData = {
  title: 'A Journey of Innovation',
  items: [
    {
      title: 'Initiate',
      description: 'Collaborate closely with our team, setting the stage for an extraordinary venture.',
      icon: IconArrowDown
    },
    {
      title: 'Craft & Construct',
      description: 'Watch as we transform your ideas into tangible solutions, ensuring every detail is perfect.',
      icon: IconArrowDown
    },
    {
      title: 'Optimize & Perfect',
      description: 'Through rigorous testing and iterations, we ensure the outcome is primed for the market.',
      icon: IconArrowDown
    },
    {
      title: 'Elevate!',
      description: 'Revel in the realization of your vision, reaching new heights of success.',
      icon: IconCheck
    }
  ],
  image: {
    src: gasImg,
    alt: 'Innovative Journey Image'
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
        src: MonkeyCeo,
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
        src: MonkeyMoney,
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
      name: 'Joe Becker',
      occupation: 'General Counsel',
      image: {
        src: MonkeyLegal,
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
      name: 'Awais',
      occupation: 'Designer',
      image: {
        src: MonkeyPaint,
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
      name: 'Sophie Turner',
      occupation: 'CEO of TechFlare',
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
      name: 'Derek Wang',
      occupation: 'Founder of GreenSustain',
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
      name: 'Maya Rodriguez',
      occupation: 'COO of LuxeFash',
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

// Pricing data
export const pricingData: PricingProps = {
  header: {
    title: 'Choose Your Path',
    subtitle:
      'Empower your enterprise with tailored strategies and dedicated partnership. Each of our packages is designed to cater to your unique ambitions, ensuring success at every business stage.',
    // highlight: 'Pricing',
  },
  prices: [
    {
      title: 'Essential',
      icon: SilverBar,
      period: 'Startups & Emerging Enterprises',
      texts: [
        'Initial business assessment',
        'Monthly performance reviews',
        'Basic strategy formulation',
      ],
      callToAction: {
        text: 'Get Started',
        href: '/',
      },
      hasRibbon: false,
    },
    {
      title: 'Growth',
      icon: GoldBar,
      period: 'Mid Sized & Expanding Businesses',
      texts: ['Comprehensive business analysis', 
      'Advanced strategic planning', 
      'Bi-weekly strategy sessions', 
      'Access to an extended network of industry experts',
      'Priority Support '],

      callToAction: {
        text: 'Explore Insights',
        href: '/',
      },
      hasRibbon: true,
      ribbonTitle: 'Top Seller',
    },
    {
      title: 'Elite',
      icon: GreenBar,
      period: 'Established & Leading Enterprises',
      texts: [
        'In-depth business, market, and competitor analysis',
        'Bespoke strategy formulation tailored to your unique landscape',
        'Weekly executive strategy sessions',
        'Dedicated account manager for personalized guidance',
      ],
      callToAction: {
        text: 'Schedule a Call',
        href: '/',
      },
      hasRibbon: false,
    },
  ],
};

// Comparison data
export const comparisonData: ComparisonProps = {
  header: {
    title: "Explore Our Rose Development Plans",
    subtitle:
      'Dive into the depth of our rose cultivation expertise. Our plans are designed to meet diverse horticultural needs, showcasing our versatility and commitment to quality.',
    // highlight: 'Comparison',
  },
  columns: [
    {
      title: 'Compare Plans',
      items: [
        {
          title: 'Species Varieties',
        },
        {
          title: 'Growth Support',
        },
        {
          title: 'Bloom Enhancers',
        },
        {
          title: 'Disease Management',
        },
        {
          title: 'Customized Nutrition',
        },
        {
          title: 'Expert Consultations',
        },
      ],
    },
    {
      title: 'Basic',
      items: [
        {
          title: 'Select Range',
        },
        {
          title: 'Guided',
        },
        {
          title: 'Standard',
        },
        {
          title: 'Basic Coverage',
        },
        {
          title: 'Standard Formulas',
        },
        {
          title: 'Email Support',
        },
      ],
      callToAction: {
        text: 'Learn More',
        href: '/basic-plan',
        btnType: 'primary',
      },
    },
    {
      title: 'Standard',
      items: [
        {
          title: 'Expanded Selection',
        },
        {
          title: 'Enhanced',
        },
        {
          title: 'Premium Boosters',
        },
        {
          title: 'Comprehensive Protection',
        },
        {
          title: 'Tailored Solutions',
        },
        {
          title: 'Direct Chat',
        },
      ],
      callToAction: {
        text: 'Discover More',
        href: '/standard-plan',
        btnType: 'primary',
      },
    },
    {
      title: 'Premium',
      items: [
        {
          title: 'Exclusive Varieties',
        },
        {
          title: 'Full Support',
        },
        {
          title: 'Advanced Formulations',
        },
        {
          title: 'Integrated Disease Management',
        },
        {
          title: 'Bespoke Nutrition Plans',
        },
        {
          title: 'One-on-One Consultations',
        },
      ],
      callToAction: {
        text: 'Join Now',
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
      title: 50,
      description: 'Partner Companies',
    },
    {
      title: 10,
      description: 'Countries Served',
    },
    {
      title: 10,
      description: 'Products',
    },
    {
      title: 78439,
      description: 'Invested Capital',
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
  title: 'TailNext',
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
      texts: ['Office: +1 303 749 5155'],
    },
    {
      title: 'Email',
      texts: ['Office: rosedevelopement@gmail.com'],
    },
  ],
  socials: [
    { label: 'Twitter', icon: IconBrandTwitter, href: '#' },
    { label: 'Instagram', icon: IconBrandInstagram, href: '#' },
    { label: 'Facebook', icon: IconBrandFacebook, href: '#' },
    { label: 'RSS', icon: IconRss, href: '#' },
    { label: 'Github', icon: IconBrandGithub, href: 'https://github.com/onwidget/tailnext' },
  ],

};
