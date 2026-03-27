export const locales = ['en'] as const
export type Locale = (typeof locales)[number]

export const translations = {
  en: {
    nav: {
      home: 'Home',
      product: 'Product',
      solutions: 'Solutions',
      about: 'About',
      contact: 'Contact',
      demo: 'Demo',
      getStarted: 'Get Started',
    },
    hero: {
      badge: 'AI-Powered Exam Platform',
      title1: 'The Ultimate ',
      titleHighlight: 'AI-Powered',
      title2: 'Mock Exam Platform',
      subtitle: 'Help your students experience real exam conditions and get instant, accurate results with Testium AI. Simulate. Evaluate. Improve.',
      requestDemo: 'Request Demo',
      watchDemo: 'Watch Demo',
    },
    trust: {
      title: 'Trusted by modern educational organizations worldwide',
    },
    features: {
      badge: 'Features',
      title: 'Everything you need for',
      titleHighlight: 'modern exam preparation',
      subtitle: 'Testium provides a comprehensive suite of tools to help educational organizations deliver authentic exam experiences.',
    },
    howItWorks: {
      badge: 'How It Works',
      title: 'Simple process,',
      titleHighlight: 'powerful results',
      subtitle: 'Get started with Testium in minutes and transform how your organization handles exam preparation.',
      steps: {
        step1: 'Setup',
        step1Desc: 'Create your organization account and configure exam settings',
        step2: 'Create Exams',
        step2Desc: 'Build custom exams or use our pre-built templates',
        step3: 'Students Take Exams',
        step3Desc: 'Students experience realistic exam conditions',
        step4: 'AI Evaluation',
        step4Desc: 'Get instant, accurate results with detailed feedback',
      },
    },
    modules: {
      badge: 'Exam Modules',
      title: 'Comprehensive exam coverage',
      subtitle: 'Support for all major international exams with authentic simulation',
    },
    aiHighlight: {
      badge: 'AI Technology',
      title: 'Powered by advanced',
      titleHighlight: 'artificial intelligence',
      subtitle: 'Our proprietary AI engine delivers human-quality evaluation with instant feedback.',
    },
    useCases: {
      badge: 'Use Cases',
      title: 'Perfect for every',
      titleHighlight: 'educational organization',
      subtitle: 'From small learning centers to large universities, Testium adapts to your needs.',
    },
    cta: {
      title: 'Ready to transform',
      titleHighlight: 'exam preparation?',
      subtitle: 'Join hundreds of educational organizations already using Testium.',
      button: 'Request Demo',
    },
    footer: {
      description: 'AI-powered mock exam platform for educational organizations.',
      developedBy: 'Developed by',
      pages: 'Pages',
      contact: 'Contact',
      followUs: 'Follow Us',
      rights: 'All rights reserved.',
    },
    about: {
      badge: 'About Testium',
      title: 'Making education',
      titleHighlight: 'smarter with AI',
      subtitle: 'Testium is developed by the EduSelf.uz team, a group of passionate educators and technologists dedicated to transforming educational assessment through artificial intelligence.',
      mission: 'Mission',
      missionDesc: 'Making exam preparation smarter with AI. We believe every student deserves access to quality practice and instant feedback.',
      vision: 'Vision',
      visionDesc: 'To become the global standard for AI-powered educational assessment, transforming how institutions evaluate and improve student performance.',
      values: 'Values',
      valuesDesc: 'Innovation, fairness, accessibility, and continuous improvement guide everything we do. We are committed to ethical AI practices.',
      teamBadge: 'Our Team',
      teamTitle: 'Meet the people behind',
      teamSubtitle: 'A diverse team of educators, engineers, and AI experts working together to revolutionize exam preparation.',
    },
    contact: {
      badge: 'Contact Us',
      title: 'Get in touch',
      titleHighlight: 'with our team',
      subtitle: 'Have questions about Testium? We are here to help.',
      form: {
        name: 'Full Name',
        email: 'Email Address',
        organization: 'Organization',
        message: 'Message',
        submit: 'Send Message',
      },
      info: {
        email: 'Email',
        phone: 'Phone',
        address: 'Address',
      },
    },
    product: {
      badge: 'Product',
      title: 'Powerful features for',
      titleHighlight: 'modern education',
      subtitle: 'Discover all the tools and features that make Testium the leading exam preparation platform.',
    },
    solutions: {
      badge: 'Solutions',
      title: 'Solutions for every',
      titleHighlight: 'educational need',
      subtitle: 'Whether you are a small tutoring center or a large university, we have the right solution for you.',
    },
    aiTechnology: {
      nav: 'Testium AI',
      badge: 'Testium AI',
      title: 'Advanced AI Engine',
      titleHighlight: 'for Educational Excellence',
      subtitle: 'Discover how our proprietary artificial intelligence technology powers accurate exam evaluation and instant feedback.',
      
      capabilities: {
        title: 'AI Capabilities',
        subtitle: 'State-of-the-art technology powering every evaluation',
        items: [
          {
            name: 'Natural Language Processing',
            desc: 'Advanced NLP algorithms understand context, grammar, and meaning in student responses across multiple languages.'
          },
          {
            name: 'Machine Learning Models',
            desc: 'Continuously improving evaluation models trained on millions of exam responses for maximum accuracy.'
          },
          {
            name: 'Pattern Recognition',
            desc: 'Identifies common misconceptions and learning patterns to provide targeted feedback.'
          },
          {
            name: 'Multi-Language Support',
            desc: 'Evaluates responses in English, Russian, Uzbek, and many other languages with equal accuracy.'
          },
          {
            name: 'Real-Time Processing',
            desc: 'Instant evaluation of answers within seconds of submission for immediate student feedback.'
          },
          {
            name: 'Bias Detection',
            desc: 'Ethical AI that ensures fair and unbiased evaluation for all students regardless of background.'
          },
        ]
      },

      howWorks: {
        title: 'How Testium AI Works',
        steps: [
          {
            title: 'Text Analysis',
            desc: 'AI analyzes submitted answers using advanced NLP to understand student comprehension'
          },
          {
            title: 'Semantic Understanding',
            desc: 'Deep learning models extract meaning and identify key concepts in responses'
          },
          {
            title: 'Comparison & Scoring',
            desc: 'Responses are compared against ideal answers and rubric criteria'
          },
          {
            title: 'Feedback Generation',
            desc: 'Personalized feedback is generated based on evaluation results'
          },
          {
            title: 'Analytics',
            desc: 'Data is aggregated for comprehensive performance analytics and insights'
          },
        ]
      },

      advantages: {
        title: 'Why Choose Testium AI?',
        items: [
          {
            title: 'Human-Quality Evaluation',
            desc: 'AI evaluation rivaling experienced educators with consistent, fair grading.'
          },
          {
            title: '24/7 Availability',
            desc: 'No waiting for teacher grading - students get instant feedback anytime, anywhere.'
          },
          {
            title: 'Complete Objectivity',
            desc: 'Eliminates grading bias and ensures fair evaluation for every student.'
          },
          {
            title: 'Scalability',
            desc: 'Evaluate thousands of exams simultaneously without quality degradation.'
          },
          {
            title: 'Continuous Improvement',
            desc: 'Machine learning models improve over time as they evaluate more exams.'
          },
          {
            title: 'Data Security',
            desc: 'Enterprise-grade security with encrypted data and GDPR compliance.'
          },
        ]
      },

      ethics: {
        title: 'Ethical AI Commitment',
        description: 'We believe artificial intelligence should serve education responsibly. That\'s why we\'ve built ethical safeguards into every layer of our AI:',
        points: [
          'Transparent algorithms with explainable decision-making',
          'Regular bias audits to ensure fair evaluation for all students',
          'Human oversight and review processes for quality assurance',
          'Privacy-first architecture protecting student data',
          'Clear limitations documentation for educators',
        ]
      },
    },

    legal: {
      privacy: 'Privacy Policy',
      privacyMatters: 'Your Privacy Matters',
      privacyDescription: 'We are committed to protecting your privacy and ensuring you understand our practices. This policy explains how we collect, use, and safeguard your information.',
      
      terms: 'Terms of Service',
      legalAgreement: 'Legal Agreement',
      termsDescription: 'Please read these terms of service carefully before using Testium. By accessing and using our platform, you agree to be bound by these terms.',
      
      sections: {
        introduction: 'Introduction',
        collection: 'Information Collection and Use',
        useOfData: 'Use of Data',
        security: 'Security of Data',
        retention: 'Data Retention',
        transfer: 'Transfer of Data',
        aiMachineLearning: 'AI and Machine Learning',
        childrenPrivacy: 'Children\'s Privacy',
        changes: 'Changes to This Privacy Policy',
        contact: 'Contact Us',
      },
      
      contactUs: 'Contact Us',
      email: 'Email',
      phone: 'Phone',
      address: 'Address',
      lastUpdated: 'Last Updated',
    },
  },
} as const

export type TranslationKey = keyof typeof translations.en
