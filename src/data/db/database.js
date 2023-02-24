import Mock from "../mock";

const database = {
  information: {
    name: 'Angel Contreras',
    aboutContent: "I am a Full Stack Software Engineer who works with Springboot, React, and iOS. A Linux fanatic and a taco-to-code converter",
    // age: 32,
    phone: '',
    nationality: 'American',
    language: 'English and Spanish',
    email: 'contact@angelc.dev',
    // address: '121 King Street, Melbourne, Australia',
    // freelanceStatus: 'Available',
    socialLinks: {
      facebook: '',
      twitter: '',
      pinterest: '',
      behance: '',
      linkedin: 'https://www.linkedin.com/in/angel-contreras',
      dribbble: '',
      instagram: 'https://www.instagram.com/angelc.dev/',
      github: 'https://github.com/angelfretz23/'
    },
    brandImage: '/images/brand-image.jpg',
    aboutImage: '/images/about-image.jpg',
    aboutImageLg: '/images/about-image-lg.jpg',
    cvfile: '/files/Resume2023.pdf'
  },
  // services: [
  //   // {
  //   //   title: "Web Design",
  //   //   icon: 'color-pallet',
  //   //   details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod."
  //   // },
  //   // {
  //   //   title: "Web Development",
  //   //   icon: 'code',
  //   //   details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod."
  //   // },
  //   // {
  //   //   title: "Mobile Application",
  //   //   icon: 'mobile',
  //   //   details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod."
  //   // }
  // ],
  // reviews: [
  //   // {
  //   //   id: 1,
  //   //   content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam, aliquid maxime tempora.",
  //   //   author: {
  //   //     name: 'Burdette Turner',
  //   //     designation: 'Web Developer, Abc Company'
  //   //   }
  //   // },
  //   // {
  //   //   id: 2,
  //   //   content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam.",
  //   //   author: {
  //   //     name: 'Susan Yost',
  //   //     designation: 'Client'
  //   //   }
  //   // },
  //   // {
  //   //   id: 3,
  //   //   content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  //   //   author: {
  //   //     name: 'Irving Feeney',
  //   //     designation: 'Fiverr Client'
  //   //   }
  //   // }
  // ],
  skills: [
    {
      title: "Springboot",
      value: 75
    },
    {
      title: "iOS",
      value: 90
    },
    {
      title: "Flutter",
      value: 85
    },
    {
      title: "Java",
      value: 60
    },
    {
      title: "MySQL",
      value: 45
    },
    {
      title: "ReactJS",
      value: 80
    },
    {
      title: "Docker",
      value: 70
    },
    {
      title: "Linux",
      value: 65
    },
    {
      title: "JPA-Hibernate",
      value: 75
    },
    {
      title: "GQL",
      value: 30
    },
    {
      title: "Docker",
      value: 60
    },
    {
      title: "CI/CD",
      value: 60
    },
    {
      title: "GIT",
      value: 95
    },
    {
      title: "SAFe Agile",
      value: 80
    },
    {
      title: "Kotlin",
      value: 75
    },
    {
      title: "AWS",
      value: 60
    },
  ],
  portfolios: [
    {
      id: 1,
      title: "T-shirt Mockup",
      subtitle: "A beautiful t-shirt mockup.",
      imageUrl: "/images/portfolio-image-1.jpg",
      largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
      url: 'https://dribbble.com'
    },
    {
      id: 2,
      title: "Coffee Mug",
      subtitle: "Awesome coffee mug design.",
      imageUrl: "/images/portfolio-image-4.jpg",
      largeImageUrl: [
        "/images/portfolio-image-4-lg.jpg",
        "/images/portfolio-image-4-lg2.jpg"
      ],
      url: 'https://facebook.com'
    },
    {
      id: 3,
      title: "Tea & Coffee Mug",
      subtitle: "Beautiful mug with logo.",
      imageUrl: "/images/portfolio-image-2.jpg",
      url: 'https://pinterest.com'
    },
    {
      id: 4,
      title: "Pen Holder",
      subtitle: "A pen holder with beautiful design.",
      imageUrl: "/images/portfolio-image-3.jpg",
      largeImageUrl: ["/images/portfolio-image-3-lg.jpg"],
      url: '#'
    },
    {
      id: 5,
      title: "Mug",
      subtitle: "Mug with awesome style",
      imageUrl: "/images/portfolio-image-5.jpg",
      largeImageUrl: ["/images/portfolio-image-5-lg.jpg"]
    },
    {
      id: 6,
      title: "Pendrive",
      subtitle: "Free pendrive mockup design.",
      imageUrl: "/images/portfolio-image-6.jpg",
      largeImageUrl: ["/images/portfolio-image-6-lg.jpg"]
    },
    {
      id: 7,
      title: "Beautiful Pendrive",
      subtitle: "Pendrive with great design & flexible.",
      imageUrl: "/images/portfolio-image-7.jpg",
      largeImageUrl: ["/images/portfolio-image-7-lg.jpg"],
      url: 'https://twitter.com'
    },
    {
      id: 8,
      title: "Sticker",
      subtitle: "Clip sticker mockup design.",
      imageUrl: "/images/portfolio-image-8.jpg",
      largeImageUrl: ["/images/portfolio-image-8-lg.jpg"]
    },
    {
      id: 9,
      title: "Packet",
      subtitle: "Beautiful packet & product design.",
      imageUrl: "/images/portfolio-image-9.jpg",
      largeImageUrl: ["/images/portfolio-image-9-lg.jpg"]
    },
    {
      id: 10,
      title: "Pen Holder",
      subtitle: "A pen holder with beautiful design.",
      imageUrl: "/images/portfolio-image-3.jpg",
      largeImageUrl: ["/images/portfolio-image-3-lg.jpg"],
      url: '#'
    },
    {
      id: 11,
      title: "Coffee Mug",
      subtitle: "Awesome coffee mug design.",
      imageUrl: "/images/portfolio-image-4.jpg",
      largeImageUrl: [
        "/images/portfolio-image-4-lg.jpg",
        "/images/portfolio-image-4-lg2.jpg"
      ],
      url: 'https://facebook.com'
    },
    {
      id: 12,
      title: "Tea & Coffee Mug",
      subtitle: "Beautiful mug with logo.",
      imageUrl: "/images/portfolio-image-2.jpg",
      url: 'https://pinterest.com'
    },
    {
      id: 13,
      title: "T-shirt Mockup",
      subtitle: "A beautiful t-shirt mockup.",
      imageUrl: "/images/portfolio-image-1.jpg",
      largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
      url: 'https://dribbble.com'
    },
    {
      id: 14,
      title: "Mug",
      subtitle: "Mug with awesome style",
      imageUrl: "/images/portfolio-image-5.jpg",
      largeImageUrl: ["/images/portfolio-image-5-lg.jpg"]
    },
    {
      id: 15,
      title: "Pendrive",
      subtitle: "Free pendrive mockup design.",
      imageUrl: "/images/portfolio-image-6.jpg",
      largeImageUrl: ["/images/portfolio-image-6-lg.jpg"]
    },
    {
      id: 16,
      title: "Beautiful Pendrive",
      subtitle: "Pendrive with great design & flexible.",
      imageUrl: "/images/portfolio-image-7.jpg",
      largeImageUrl: ["/images/portfolio-image-7-lg.jpg"],
      url: 'https://twitter.com'
    },
    {
      id: 17,
      title: "Sticker",
      subtitle: "Clip sticker mockup design.",
      imageUrl: "/images/portfolio-image-8.jpg",
      largeImageUrl: ["/images/portfolio-image-8-lg.jpg"]
    },
    {
      id: 18,
      title: "Packet",
      subtitle: "Beautiful packet & product design.",
      imageUrl: "/images/portfolio-image-9.jpg",
      largeImageUrl: ["/images/portfolio-image-9-lg.jpg"]
    },
    {
      id: 19,
      title: "T-shirt Mockup",
      subtitle: "A beautiful t-shirt mockup.",
      imageUrl: "/images/portfolio-image-1.jpg",
      largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
      url: 'https://dribbble.com'
    },
    {
      id: 20,
      title: "Coffee Mug",
      subtitle: "Awesome coffee mug design.",
      imageUrl: "/images/portfolio-image-4.jpg",
      largeImageUrl: [
        "/images/portfolio-image-4-lg.jpg",
        "/images/portfolio-image-4-lg2.jpg"
      ],
      url: 'https://facebook.com'
    },
    {
      id: 21,
      title: "Tea & Coffee Mug",
      subtitle: "Beautiful mug with logo.",
      imageUrl: "/images/portfolio-image-2.jpg",
      url: 'https://pinterest.com'
    },
    {
      id: 22,
      title: "Pen Holder",
      subtitle: "A pen holder with beautiful design.",
      imageUrl: "/images/portfolio-image-3.jpg",
      largeImageUrl: ["/images/portfolio-image-3-lg.jpg"],
      url: '#'
    },
    {
      id: 23,
      title: "Mug",
      subtitle: "Mug with awesome style",
      imageUrl: "/images/portfolio-image-5.jpg",
      largeImageUrl: ["/images/portfolio-image-5-lg.jpg"]
    }
  ],
  experience: {
    workingExperience: [
      {
        id: 3,
        year: "Sep 2016 - Preset",
        position: "Full Stack Software Engineer",
        company: "The Way, LLC",
        description: "Architected, designed, and developed systems to modernize the Bible by allowing churches to upload video snippets that explain Bible verses so readers will be able have a deeper understanding with just a finger tap",
        details: [
          "Created a Spring boot Rest API with Kotlin that interfaces with an AWS RDS (MySQL) instance using JPA-Hibernate",
          "Implemented unit and behavior driven development tests using Spring profiles, JUnit and Cucumber-Gherkin for Spring boot micro service",
          "Created a mobile application for both Android and iOS using Flutter SDK and the Dart programming language",
          "In order to play Apple Music, an iOS native feature, I developed a package that utilizes Channels to have the Flutter runtime communicate with the iOS(Native) runtime. Soon to be make it open sourced",
          "Some video snippets needed to be clipped from existing sermons. To save cost from procuring existing software and automating the clipping, I created a ffmpeg wrapper CLI tool to fetch the time intervals from a database, create the snippet videos, and upload them to an S3 bucket. For speed, it was later migrated to using Apple's AVFoundation",
        ],
      },
      {
        id: 1,
        year: "Feb 2021 - Jun 2022",
        position: "Mobile Developer",
        company: "iFit Health and Fitness",
        description: `
        Using Xamarin Native, I contributed to the development of two features that iFit will hope to disrupt the fitness industry by intelligently adjusting the speed, incline, or resistance on Aerobic exercise equipment based on the user’s physical capabilities and their current heart rate during the workout.
        `,
        details: [
            "Created responsive views that will hide, shrink, or unhide based on the screen state the app is in (Full Screen, Normal Screen with exercise metrics, or metrics only)",
            "Created a view that displayed current RPM and target RPM for aerobic machines which required to fetch data asynchronously from the machine’s console (current RPM) and from a REST Api (target RPM)",
            "All views were created for both Android and iOS using Xamarin Native, C#, and MVVM",
            "Dedicated my OKR time to create unit tests to increase code coverage. By doing so, my tests decreased the amount bugs from making it into production to almost zero",
            "Coordinated with external team to implement a feature to allow users to sync up their preferred workout settings across multiple devices and equipment by leveraging the the team’s Rest API",
            "Using Flutter, I created a debugging tool for QA and our team to inspect workout data. Anyone was able to use it regardless of platform (Mac, Windows, Linux, iOS, Android, and Web)",
        ]
      },
      {
        id: 2,
        year: "Jan 2018 - Nov 2020",
        position: "Full Stack Software Engineer II",
        company: "Live Nation Entertainment/Ticketmaster",
        description: "Assisted in the design and development of a B2B React based interface to serve from two legacy ticketing systems breaking new technological ground in a company with rich history. Clients love it and its ability to streamline their workflows.",
        details: [
            "Wrote maintainable, extensible, and well documented code in JavaScript, Swift, Objective-C, and Java",
            "Collaborated closely with team members, managers, and other technical staff to understand business needs, develop technical plans, and deliver impactful solutions all within SAFe Agile methodologies",
            "Strict enforcer in reducing manual regression tests by incorporating unit, automation, behavior driven development (BDD) tests using the following frameworks and libraries: Jest, Enzyme, Cucumber Gherkin (Java and JS), and JUnit",
            "Worked under limited or no guidance and consistently delivered on commitments",
            "Set up Grafana dashboards to monitor performance for back-end services using RED methodologies (Rate-Errors-Duration) integrating with AWS CloudWatch logs and metrics",
            "Instituted CI/CD GitLab pipelines to test, build, and deploy backend and client facing applications using Blue-Green deployment strategies, Terraform, Docker, and AWS CLI tools",
            "Contributed to the development of a service that interfaces with printer drivers to print RFID enabled tickets to PCL and FGL printing protocols",
            "Developed Cloud Native applications that utilize Spring boot and GraphQL and deployed them to AWS Lambda & EC2",
            "On-Call Team-Leader who takes ownership in having all monitoring and rollback procedures prepared to limit downtime no greater than 2 minutes during critical incidents",
        ]
      },
      
      {
        id: 4,
        year: "May 2017 - Jan 2018",
        position: "Software Engineer I",
        company: "Live Nation Entertainment/Ticketmaster",
        description: "Maintained two legacy iOS box-office point of sale applications and its back-end services that clients were still thrilled to use because of their flexibility to sell ticket from anywhere in the venue and deliver them via SMS. Also, was a contributor to B2B iOS and Android SDK used by major sport leagues and Ticketmaster’s core mobile applications.",
        details: [
          "Thrilled to expand/improve applications by adding new functionality and resolving existing issues using Objective-C, C++, and Swift.",
          "Converted manual tests into UI tests using XCTest framework to decrease toil and deploy to the App Store almost immediately",
          "Ported existing company libraries from Objective-C to Swift. Also, vastly contributed in migrating core company libraries using Swift 2 to Swift 5",
          "Created intuitive UI screens using Xcode, Storyboards, and Xibs",
          "Contributed to a B2B SDK used by sport leagues like NFL, NBA, NHL and provided first-hand support",
          "Technical writer of the SDK's integration and reference documentation on Ticketmaster's developer web page",
          "Took the initiative in migrating databases utilizing Oracle SQL to MySQL databases saving the company thousands of dollars monthly in Oracle DB licenses",
          "By migrating to MySQL, I removed a limitation of delivering less than 25 tickets via SMS per transaction. Now, and estimate of twenty-thousand tickets are able to be delivered via SMS",
          "Learned new technologies and shared with my teams",
          "Maintained legacy Spring boot applications and set up Jenkins pipelines to test, build, and deploy to testing and production environments",
        ],
      },
      {
        id: 5,
        year: "",
        position: "Music Drop",
        company: "Personal Project",
        description: "Personal project that leverages Apple Music and MapKit to place music in locations for others passing by to see. Users will pick music pulled from, at the time, iTunes Search API, add a message describing an experience in that location, and the app will render a custom Annotation using the album artwork of the song chosen. The app also uses CloudKit to store the annotation data in the cloud. The difficult part of the project was dealing with clusters of annotations cluttering the map view. I develop complex formula/algorithm to gather a cluster of annotations into only one while displaying an accumulation count in the annotation’s label. Though this nice formula later became obsolete when Apple release their own implementation in 2018.",
        details: [
         ]
      }
    ],
    personalProjects: [
      {
        id: 1,
        year: "2018 - 2019",
        position: "Full Stack Engineer/Designer",
        appName: "The Way Works LLC",
        description: "",
        details: [
          "Designed client facing applications using Sketch and other prototyping tools to plan and layout UI components before commencing software development",
          "Created a Springboot Rest API integrating an AWS RDS (MySQL) to serve necessary data to a mobile and web applications",
          "Built an iOS and React app for the client side based on mocks previously planned",
          "Set up an AWS EC2 instance to host the Springboot Rest API using Terraform and AWS CLI tools to be able to scale as necessary"
        ],
      },
    ],
    educationExperience: [
      {
        id: 1,
        year: "2011-2012",
        graduation: "Mathematics / Computer Science",
        university: "Pierce College",
        description: "",
        details: []
      },
      {
        id: 2,
        year: "2009 - 2010",
        graduation: "Architecture",
        university: "College Of the Canyons",
        description: "",
        details: []
      },
    ],
  },
  blogs: [
    {
      id: 1,
      title: 'Markdown & Html supported blog.',
      featuredImage: '/images/blog-image-1.jpg',
      filesource: '../../blog/markdown-html-supported-blog.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 2,
      title: 'Installing NodeJS on your device.',
      featuredImage: '/images/blog-image-2.jpg',
      filesource: '../../blog/installing-nodejs-on-your-device.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 3,
      title: 'UI/UX design starter with Adobe XD.',
      featuredImage: '/images/blog-image-3.jpg',
      filesource: '../../blog/uiux-design-starter-with-adobe-xd.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 4,
      title: 'Boost your post for increasing sales.',
      featuredImage: '/images/blog-image-4.jpg',
      filesource: '../../blog/boost-your-post-for-increasing-sales.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 5,
      title: 'Difference between GatsbyJS & NextJS.',
      featuredImage: '/images/blog-image-5.jpg',
      filesource: '../../blog/difference-between-gatsbyjs-and-nextjs.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 6,
      title: 'How to choose javascript framework for project.',
      featuredImage: '/images/blog-image-6.jpg',
      filesource: '../../blog/how-to-choose-javascript-framework-for-project.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 7,
      title: 'Web automation with python language.',
      featuredImage: '/images/blog-image-7.jpg',
      filesource: '../../blog/web-automation-with-python-language.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 8,
      title: 'Time to use latest technology for creating a website.',
      featuredImage: '/images/blog-image-8.jpg',
      filesource: '../../blog/time-to-use-latest-technology-for-creating-a-website.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 9,
      title: 'Think out of the box.',
      featuredImage: '/images/blog-image-9.jpg',
      filesource: '../../blog/think-out-of-the-box.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 10,
      title: 'Trending designs in 2020.',
      featuredImage: '/images/blog-image-1.jpg',
      filesource: '../../blog/trending-designs-in-2020.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 11,
      title: 'How to get 10k instagram followers?',
      featuredImage: '/images/blog-image-2.jpg',
      filesource: '../../blog/how-to-get-10k-instagram-followers.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 12,
      title: 'What NodeJS can do?',
      featuredImage: '/images/blog-image-3.jpg',
      filesource: '../../blog/what-nodejs-can-do.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 13,
      title: 'Futures of javascript.',
      featuredImage: '/images/blog-image-4.jpg',
      filesource: '../../blog/future-of-javascript.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 14,
      title: 'Popular javascript library in 2020.',
      featuredImage: '/images/blog-image-5.jpg',
      filesource: '../../blog/popular-javascript-library-in-2020.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 15,
      title: 'Promrammers must read books.',
      featuredImage: '/images/blog-image-6.jpg',
      filesource: '../../blog/programmers-must-read-books.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    }
  ],
  contactInfo: {
    // phoneNumbers: ['1(818) 523-5174'],
    emailAddress: ['contact@angelc.dev'],
    address: "Frisco, Texas"
  }
}


Mock.onGet("/api/information").reply(config => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply(config => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply(config => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply(config => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply(config => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply(config => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/blog").reply(config => {
  const response = database.blogs;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply(config => {
  const response = database.contactInfo;
  return [200, response];
});