import './App.css';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

const logos = ["1280px-PHPUnit_Logo.svg.png",
"1994-to-today-Fedex-logo-min-1024x576.png",
"1_e0hDmiO7rx40JfodzPPKGA.webp",
"2560px-Ruby_On_Rails_Logo.svg.png",
"874086.png",
"alberta ministry of forests and parks.jpg",
"Apache_HTTP_server_logo_(2019-present).svg.png",
"apache_tomcat_logo_icon_167851.webp",
"BC_FLNR_H_RGB_pos.png",
"c-sharp-open-source.png",
"Canada-Post-logo.png",
"canadian_space_agency_logo_2023_small.jpg",
"Company_logo_of_ScotiaMocatta.jpg",
"csss logo.png",
"dhl-1.svg",
"free-ruby-47-1175102.webp",
"git.jpg",
"Google-Cloud-Platform-GCP-Logo.png",
"Google_Maps_Logo_2020.svg.png",
"GrabOp-Final-Logo-01-e1627545901270.png",
"html.png",
"images (1).png",
"images (2).png",
"images (3).png",
"images (4).png",
"images (5).png",
"images.png",
"Java-Logo.png",
"Javascript_badge.svg.png",
"Jenkins_logo_with_title.svg.png",
"logo-guide-logos-1.svg",
"macOS-Logo.png",
"Microsoft-Office-logo.png",
"microsoft-sql-server-logo.svg",
"Moneris_Moneris_partners_with_Wix_to_provide_Canadian_businesses.jpg",
"Mysql_logo.png",
"Oracle_logo.svg.png",
"Paypal_2014_logo.png",
"Perl_language_logo.svg",
"php.png",
"PhpStorm_Icon.svg.png",
"Python_logo_and_wordmark.svg.png",
"react-original-wordmark-icon-840x1024-vhmauxp6.png",
"Selenium_Logo.png",
"Ubuntu-logo-2022.svg.png",
"UPS-logo.png",
"vscode.png",
"Wikimedia_logo_text_RGB.svg.png"];

function App() {

  const [logoIndexes, setLogoIndexes] = useState([0, 1, 2, 3, 4, 5]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      let newIndexes = [];
      while(newIndexes.length < 6){
        let newIndex = Math.floor(Math.random() * logos.length);
        if(!newIndexes.includes(newIndex) && !logoIndexes.includes(newIndex)){
          newIndexes.push(newIndex);
        }
      }
      setLogoIndexes(newIndexes)
    }, 10000);

    return () => clearTimeout(timeoutId);
  }, [logoIndexes]);
  

  let events = [
    {
      start: new Date('2004-06-02'),
      end: new Date('2004-09-02'),
      name: 'Ministry of Education, British Columbia - Coop',
      description: 'Helped convert K-12 corriculum from HTML to XML and a standard DOM. Used Perl and regular expressions to speed up the process.',
      leaving: 'Coop ended',
      category: 'Employee',
      image: 'bc education.png',
      url: 'https://www2.gov.bc.ca/gov/content/governments/organizational-structure/ministries-organizations/ministries/education'
    },
    {
      start: new Date('2014-01-01'),
      end: null,
      name: 'Basics',
      description: 'Created a searchable filterable web interface for product and sales data using PHP, MySQL, HTML, CSS, jQuery, Gitlab.',
      category: 'Contractor',
      image: 'basics-office-supplies-canada-1-max.jpg',
      url: 'https://beatties.com/'
    },
    {
      start: new Date('1999-08-02'),
      end: null,
      name: 'Sidney In-Home Computer Maintenance',
      description: 'Started my own computer maintance business. Upgraded computers, removed viruses, toutored, transfered emails in exchange for a 3 hour sail boat tour.',
      category: 'Founder'
    },
    {
      start: new Date('1991-09-02'),
      end: new Date('1992-07-30'),
      name: 'Computer Lab Assistant - Greenglade Elementry School',
      description: 'Helped tuotor students in the Apple IIe and Mac lab',
      category: 'Volunteer'
    },
    {
      start: new Date('1994-09-02'),
      end: new Date('1996-07-30'),
      name: 'Computer Club Member - North Saanich Middle School',
      description: 'Helped tuotor students in the Mac labs, experiemented with Hypercard, FTP',
      category: 'Volunteer'
    },
    {
      start: new Date('1997-09-02'),
      end: new Date('2000-07-30'),
      name: 'Parkland High School',
      description: 'Learned Pascal, Claris Works, CAD, Computer Science 12, Physics 11, Judo, Entreprenurship, Math 12, Physics 12, Work experience in 3 IT shops',
      category: 'Student'
    },
    {
      start: new Date('1999-08-02'),
      end: new Date('1999-08-09'),
      name: 'Starting Point',
      description: 'Ran a cyber cafe for a week with a friend while the owners had a family emergency. Also worked on creating a Druid Quake Mod with friends. I focused on making the maps.',
      category: 'Volunteer'
    },
    {
      start: new Date('2002-09-02'),
      end: new Date('2005-06-02'),
      name: 'Camosun College - Computer Systems Technlogy Diploma - with Coop',
      description: 'Courses on math, entreprenurship, technical writing, object oriented programming, data warehousing, Python, Java, Perl, C, C++, Oracle, Flash, HTML, CSS, Compiler(Craps), Scheme, Networking, Real-time Programming, Graphics. Capstone project with 2 team mates displaying 3 axis acceleration on a Pocket PC, connecting wirelessly over a serial connection using EvC++. I started a chess club. I read the pragmatic programmer, C guide, Design Patterns',
      category: 'Student',
      image: 'camosun logo.png',
      url: 'https://camosun.ca/'
    },
    {
      start: new Date('2004-11-02'),
      end: new Date('2005-04-02'),
      name: '6th Dimension Devices - Coop',
      description: 'Created Pocket PC and desktop interfaces to connect and collect movement data from a custom athletic performance device using Java and EvC++. Made a tool to sync and pair recorded data with recorded video by converting data to display as audio samples in Java.',
      leaving: 'Coop ended',
      category: 'Employee',
      image: '6dd-link.png',
      url: 'https://patentimages.storage.googleapis.com/55/0b/fd/c63cce4b8c2f3b/CA2635638A1.pdf'
    },
    {
      start: new Date('2005-04-03'),
      end: new Date('2005-06-02'),
      name: '6th Dimension Devices - Software Developer',
      description: 'Created Pocket PC and desktop interfaces to connect and collect movement data from a custom athletic performance device using Java and EvC++. Made a tool to sync and pair recorded data with recorded video by converting data to display as audio samples in Java.',
      leaving: 'Without Cause',
      category: 'Employee',
      image: '6dd-link.png',
      url: 'https://patentimages.storage.googleapis.com/55/0b/fd/c63cce4b8c2f3b/CA2635638A1.pdf'
    },
    {
      start: new Date('2008-05-02'),
      end: new Date('2010-07-02'),
      name: 'Vancouver Island Java Users Group Member',
      description: 'Attended several monthly meetings with guest speakers focused on Java and other technlologies.',
      category: 'Peer'
    },
    {
      start: new Date('2005-06-02'),
      end: new Date('2009-06-02'),
      name: 'Selkirk Systems Inc',
      description: 'Created flood emergency managment software for the Ministry of Forest and used it in a weeklong demonstration in Whistler British Columbia, Using Pocket PCs, J2ME, digital radios and satalite communications with Java and SQL backend. Using agile methodoligies we had a ticket board, introspections and scrums. I went on several trips to Edmonton to integrate with the Alberta Ministry of Natural Resources. Worked on a digital radio and satalite project for the Canadian Space Agency. I started a movie night and shared meals.',
      leaving: 'Without Cause',
      category: 'Employee',
      image: 'SelkirkLogo.png',
      url: 'https://www.selkirksystems.com/'
    },
    {
      start: new Date('2009-07-02'),
      end: new Date('2010-07-02'),
      name: 'Beanstream Internet Commerce',
      description: 'Performed a large refactoring project that involved changing each line that ran a database query, used regular expressions, classes and eval to speed up conversion using VB6. Helped create the SoctiaMocatta precious metals Estore using VB.NET.',
      leaving: 'Quit, moved to Ontario',
      category: 'Employee',
      image: 'beanstream.png',
      url: 'https://worldline.com/en-ca/home'
    },
    {
      start: new Date('2010-10-02'),
      end: new Date('2011-09-02'),
      name: 'Arius Software',
      description: 'Worked on FinTech document flows using JavaScript and a custom Java like frontend language. Implemented daily standups after not meeting for weeks.',
      leaving: 'Quit, limited learning',
      category: 'Employee',
      image: 'arius.png',
      url: 'https://www.linkedin.com/company/arius-software/about/'

    },
    {
      start: new Date('2011-09-03'),
      end: new Date('2012-09-02'),
      name: 'Well.ca',
      description: 'Using agile and kanban mantained and built features for an ecommerce site, including warehousing, shipping, purchase orders, business intelegence, customer mangment, order managment, product managment, coupons, and sales. Participated in many hack days. Tech stack used was a distributed system using PHP, MySQL, CodeIgniter, HTML, CSS, JavaScript, jQuery, EXTJS, worker queues, MongoDB, Solr, and database migrations.',
      leaving: 'Without Cause, Founding new company',
      category: 'Employee',
      url: 'https://well.ca/',
      image: 'well.png'
    },
    {
      start: new Date('2012-09-03'),
      end: new Date('2014-07-02'),
      name: 'Tulip Retail',
      description: 'Founding member of Tulip Retail. Helped work on a warehousing system for a beverage client. Given scrum master duties for 2 teams.',
      leaving: 'Without Cause',
      category: 'Employee',
      image: 'tulip.png',
      url: 'https://www.tulip.com/'
    },
    {
      start: new Date('2014-09-03'),
      end: new Date('2012-11-02'),
      name: 'Plum HR',
      description: 'Helped out with frontend redesign of an applicant survey and testing system. Implemented and performed user experience testing. Changed the Bootstrap UI and worked with Python and Django on the backend.',
      leaving: 'Without Cause',
      category: 'Employee',
      image: 'images.png',
      url: 'https://www.plum.io/'
    },
    {
      start: new Date('2014-12-03'),
      end: new Date('2015-05-02'),
      name: 'MetaMarketplace',
      description: 'Customized a white label cottage vacation rental application to match clients branding. The frontend was CoffeeScript, Backbone.js, Marrionette.js, Gulp and the backend was Ruby and Ruby-on-Rails in the cloud.',
      leaving: 'Without Cause, Mass layoff',
      category: 'Employee',
      image: 'meta.png',
      url: 'https://www.linkedin.com/company/metamarketplace/'
    },
    {
      start: new Date('2015-07-03'),
      end: new Date('2020-11-02'),
      name: 'Cober Solutions',
      description: 'Created APIs and integrated with Swagger APIs for B2B print orders of one of North Amercia`s largest printers. Created a multi site warehousing system using jQuery, Bootstrap, MySQL, PHP and Laravel. Created order tracking system and unified several different systems to track all orders through the printing plants. Hosting was on virtualized machines and kept local for security issues.',
      leaving: 'Without Cause during Covid',
      category: 'Employee',
      url: 'https://cobersolutions.com/',
      image: 'cober.png'
    },
    {
      start: new Date('2021-01-03'),
      end: new Date('2023-11-21'),
      name: 'Tulip Retail',
      description: 'Worked on the Well.ca stack on the ecommerce team. Helped integrate Beanstream payment system to double our ecommerce clients. Shared learning via tech talks, hackdays, video reviews and tech book reviews.',
      leaving: 'Without Cause, Mass layoff',
      category: 'Employee',
      image: 'tulip.png',
      url: 'https://www.tulip.com/'
    },
    {
      start: new Date('2011-03-28'),
      end: null,
      name: 'Guelph PHP User Group',
      description: 'Guelph, Kitchener, Waterloo PHP User Group. Hosted by Well at the begining and Vehikl. Usually a guest speaker, and usually about PHP. Have done group coding sessions and some meetings are social.',
      category: 'Peer',
      url: 'https://www.meetup.com/_gpug_/'
    },
    {
      start: new Date('2014-01-14'),
      end: null,
      name: 'DevHouse Waterloo',
      description: 'A place to demo projects, anyone can demonstrate, sometimes there is a time limit. Food, drinks and social afterwards. Went online during Covid.',
      category: 'Peer',
      url: 'https://www.meetup.com/devhouse-waterloo/'
    },
    {
      start: new Date('2010-10-21'),
      end: new Date('2013-11-05'),
      name: 'Startup Drinks',
      description: 'Tech startup social at Chansaw in Kitchener',
      category: 'Peer'
    },
    {
      start: new Date('2015-02-14'),
      end: new Date('2016-09-08'),
      name: 'The Front Edge',
      description: 'A web frontend focused meetup. I gave a talk on hackathons at one meeting. Hosted by Axonify.',
      category: 'Peer'
    },
    {
      start: new Date('2013-11-11'),
      end: new Date('2019-09-05'),
      name: 'HackerNest Kitchener-Waterloo',
      description: 'A tech social hosted by a different business each time. This group is global and has local organizations. Drinks and snacks provided. Anouncements in the middle for other tech events.',
      category: 'Peer',
      image: 'headerlogo.png',
      url: 'https://hackernest.com/'
    },
    {
      start: new Date('2012-06-21'),
      end: null,
      name: 'UX Waterloo',
      description: 'User iterface focused talks. Sometimes atendees present projects, other times group work. They hold and annual UX confrence.',
      category: 'Peer',
      url: 'https://www.meetup.com/uxwaterloo-p2p/'
    },
    {
      start: new Date('2011-01-21'),
      end: null,
      name: 'Agile/Lean P2P',
      description: 'A wide variety of topics. Sometimes interactive. Usually a speaker. Hosted in different public spaces.',
      category: 'Peer',
      url: 'https://www.meetup.com/agile-lean-p2p/'
    },
    {
      start: new Date('2018-05-29'),
      end: null,
      name: 'Indie Game Development P2P',
      description: 'Work on and demo games, annual game dev challenge.',
      category: 'Peer',
      url: 'https://www.meetup.com/indie-game-developmentp2p/'
    },
    {
      start: new Date('2009-01-01'),
      end: null,
      name: 'MobileWrx',
      description: 'Created a mobile app for Blackberry that displayed barcodes for couponing and event ticketing.',
      category: 'Founder',
      image: 'mobilewrx.png',
      url: 'https://radiowrx.site123.me/'
    },
    {
      start: new Date('2013-01-01'),
      end: null,
      name: 'GrabOp',
      description: 'Created a Php, MySQL, webapp for the gig economy.',
      category: 'Founder',
      image: 'GrabOp-Final-Logo-01-e1627545901270.png',
      url: 'https://grabop.com/'
    },
    {
      start: new Date('2008-01-01'),
      end: null,
      name: 'REES - Cool Aid',
      description: 'Created a service recording and reporting stand alone application for non profit clients using Java.',
      category: 'Volunteer',
      image: 'coolaid.svg',
      url: 'https://coolaid.org/'
    },
    {
      start: new Date('2009-01-01'),
      end: null,
      name: 'Victoria Motorcycle Salvage',
      description: 'Created a searchable filterable web interface for motorcycle parts using an Access database.',
      category: 'Contractor'
    },
    {
      start: new Date('2014-01-01'),
      end: null,
      name: 'Rockstar Music',
      description: 'Created a custom event calendar from an API that was returning HTML.',
      category: 'Contractor'
    },
    {
      start: new Date('2023-01-01'),
      end: null,
      name: 'Georgian Bay Metis Council',
      description: 'Helped customize existing WordPress website. Tutored staff on how to make future changes.',
      category: 'Contractor',
      image: 'metis.jfif',
      url: 'https://georgianbaymetiscouncil.com/'
    },
    {
      start: new Date('2023-01-01'),
      end: null,
      name: 'Barrie Computer and Technology Club',
      description: 'A group of 10 to 15 talking about new software and presenting to each other. Lot of Q and A about basic computer skills.',
      category: 'Peer',
      image: 'bug.jpg',
      url: 'https://barrietechnology.weebly.com/'
    },
    {
      start: new Date('2023-01-01'),
      end: null,
      name: 'Midland Makers',
      description: 'A group of crafters and engineers that meet up around the Midland Library Makerspace.',
      category: 'Peer',
      image: 'maker.jfif',
      url: 'https://midlandlibrary.com/the-mpl-makerplace/'
    },
    {
      start: new Date('2023-01-01'),
      end: null,
      name: 'South Georgian Bay Amateur Radio Club',
      description: 'A group of amature radio operators that maintain local repeaters and gather for a monthly meal.',
      category: 'Peer',
      image: 'radio.jfif',
      radio: 'https://www.qsl.net/sgbarc/'
    },
    {
      start: new Date('2017-01-01'),
      end: null,
      name: 'MLH Hackathons',
      description: 'I volunteer as a mentor and teach lessons at hackathons. I float around various teams helping them get unstuck. I tought lessons on retaining information in a web app.',
      category: 'Volunteer',
      image: 'mlh.png',
      url: 'https://mlh.io/'
    },
    {
      start: new Date('2016-01-01'),
      end: null,
      name: 'Conestoga College Kitchener',
      description: 'I volunteer as a computer science toutor teaching C#, presenting skills and interviewing skills.',
      category: 'Volunteer',
      image: 'conestoga-logo.svg',
      url: 'https://www.conestogac.on.ca/'
    },
    {
      start: new Date('2019-01-01'),
      end: null,
      name: 'Excel, VBA Volunteer',
      description: 'I volunteer with a vision impared business owner customizing tax and rental form PDF generation.',
      category: 'Volunteer'
    },
    {
      start: new Date('2019-01-01'),
      end: null,
      name: 'Technovation Girls Mentor',
      description: 'I volunteered as a mentor for several years with teams of girls creating mobile apps to solve real problems.',
      category: 'Volunteer',
      image: 'cropped-Technovation-Logo-Girls-White.png',
      url: 'https://technovationchallenge.org/'
    }
  ];

  const contacts = [
    {
      icon: 'email-1572-svgrepo-com.svg',
      url: 'mailto:ccarrster@gmail.com',
      tip: 'Email'
    },
    {
      icon: 'github-142-svgrepo-com.svg',
      url: 'https://github.com/ccarrster',
      tip: 'Github'
    },
    {
      icon: 'hackerrank-svgrepo-com.svg',
      url: 'https://www.hackerrank.com/profile/ccarrster',
      tip: 'HackerRank'
    },
    {
      icon: 'linkedin-linked-in-svgrepo-com.svg',
      url: 'https://www.linkedin.com/in/chris-carr-220a7924/',
      tip: 'Linkedin'
    },
    {
      icon: 'radio-handheld-svgrepo-com.svg',
      url: 'https://apc-cap.ic.gc.ca/pls/apc_anon/query_amat_cs$callsign.QueryViewByKey?P_CALLSIGN=VE3AUZ&Z_CHK=56767',
      tip: 'HAM - VE3AUZ'
    },
    {
      icon: 'scratch-svgrepo-com.svg',
      url: 'https://scratch.mit.edu/users/ccarrster/',
      tip: 'Scratch'
    },
    {
      icon: 'twitter-rounded-svgrepo-com.svg',
      url: 'https://twitter.com/moonscientist',
      tip: 'Twitter/X'
    },
    {
      icon: 'wordpress-139-svgrepo-com.svg',
      url: 'https://christophergordoncarr.wordpress.com/',
      tip: 'Wordpress Blog'
    },
    {
      icon: 'profile1-svgrepo-com.svg',
      url: 'Resume Chris Carr.pdf',
      tip: 'Resume'
    },
    {
      icon: 'devpost-svgrepo-com.svg',
      url: 'https://devpost.com/ccarrster',
      tip: 'DevPost'
    }
    
  ]

  const books = [
    {
      url: 'https://www.amazon.ca/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882?&linkCode=ll1&tag=ccarrster02-20&linkId=907fb22f385c01d0a79a1322839e3217&language=en_CA&ref_=as_li_ss_tl',
      title: 'Clean Code',
      subtitle: 'A Handbook of Agile Software Craftsmanship',
      authors: 'Robert Martin',
      image: 'cleancode.jpg'
    },
    {
      url: 'https://www.amazon.ca/Pragmatic-Programmer-journey-mastery-Anniversary/dp/0135957052?pd_rd_w=p4oUj&content-id=amzn1.sym.d3f44101-6e04-446e-916c-a6ec5616982b&pf_rd_p=d3f44101-6e04-446e-916c-a6ec5616982b&pf_rd_r=R1KM13EPF1DJ26AGM8X8&pd_rd_wg=hlnwM&pd_rd_r=9939f34a-cfe5-4b9a-b164-592eebeb2377&pd_rd_i=0135957052&psc=1&linkCode=ll1&tag=ccarrster02-20&linkId=aa44777daa13e2bccd040dded4980b1a&language=en_CA&ref_=as_li_ss_tl',
      title: 'The Pragmatic Programmer',
      subtitle: 'your journey to mastery',
      authors: 'David Thomas, Andrew Hunt',
      image: 'pragmaticprogrammer.jpg'
    },
    {
      url: 'https://www.amazon.ca/Code-Complete-2nd-Steve-McConnell/dp/0735619670?crid=94S8BYBSA3NT&dib=eyJ2IjoiMSJ9.uKnS_KWeq01ns81nQdT5TCE9dPd5u--R7H_vdxx5e3DE_BhDcAGRj62tSB3GV6CQEH7qTsqz46uJJp4oiJIV5UktO7BpAjhTeusjdUhHY7HoqtNuRMmTxHkTaJRO1znUOFTJI7aSlXuKITxvec_oyCBt1HdvDq96ZmDRRaBNJ8RoTxd4voV0ErR0JHbkWracISvLrb3Hev9ZgDUhqyInKlvHCI9WHgLitByGvcYaas0.YFd0H5C0Yxwd8O7xFRIvDZ1AOwmLDceJOFyYmReNGKs&dib_tag=se&keywords=code+complete&qid=1720186070&s=books&sprefix=code+complete%2Cstripbooks%2C94&sr=1-1&linkCode=ll1&tag=ccarrster02-20&linkId=ff1ca3848a1b1a113c41b3052962eecb&language=en_CA&ref_=as_li_ss_tl',
      title: 'Code Complete 2',
      subtitle: 'A practical handbook of software construction',
      authors: 'Steve McConnell',
      image: 'codecomplete.jpg'
    },
    {
      url: 'https://www.amazon.ca/Refactoring-Improving-Design-Existing-Code/dp/0134757599?crid=16HRDSELQK949&dib=eyJ2IjoiMSJ9.d5ydIv1vhzDGghLAj8wLkmEhti6uojhM8KI4lTkV9jDfjOiPiQbErdaD1aFECYUjxqbidO6dNVbljFgS9VtbB7oNWvspuGUw-3NPRE_uMZ04B22hLBU5VGtbglxRwHu3Hue_lxMXLzZRJkV-VQ5xJp06u-u6EPwlbHlpu1f1_OHVOvIFGl1bkthNER0yyIXbC5eyD0xhMdWLl4zFD73Ee3JR-WO3aZvzsWSZD4LAPII.kb0ILyCljgWq5FrG0G8lbG5rJNs_0LxfixESwBpmkMc&dib_tag=se&keywords=refactoring&qid=1720186255&s=books&sprefix=refactoring%2Cstripbooks%2C135&sr=1-1&linkCode=ll1&tag=ccarrster02-20&linkId=6687c5c926d8e6e987d70a94e7ef42e1&language=en_CA&ref_=as_li_ss_tl',
      title: 'Refactoring',
      subtitle: 'Improving the Design of Existing Code',
      authors: 'Martin Fowler',
      image: 'refactoring.jpg'
    },
    {
      url: 'https://www.amazon.ca/Extreme-Programming-Explained-Embrace-Change/dp/0321278658?crid=O3A9A7YSMNAI&dib=eyJ2IjoiMSJ9.dd2c_PpN18z5uj_9TFSrGBbLrSMIyAkmFm7Khv4Wr0KmbtJuXqte4g7lXBPv7MpqS6aTyarh-yHjWnUtf6VnP0jaKzEiiwkFXtVBZRmrnMLQUbGrqiEenju4wM7kKY44PjOmxBpoqV249H9n3-opryOZ98cKwPgiDsxloVPXu5nji9YIC4Evbwy6yKnECARIFFTyp0N_m9YuvAjdO6BsCNQrYTDAqs6pbYePFwgEHrw.q-cCmSdKqTj8HKJeV9jl4MHq5SI39OtqySLWXqeBLqs&dib_tag=se&keywords=kent+beck&qid=1720186354&s=books&sprefix=kent+beck%2Cstripbooks%2C103&sr=1-2&linkCode=ll1&tag=ccarrster02-20&linkId=cf8dfb73a5572deae589466db99a35a1&language=en_CA&ref_=as_li_ss_tl',
      title: 'Extreme Programming Explained',
      subtitle: 'Embrace Change',
      authors: 'Kent Beck, Cynthia Andres',
      image: 'extremeprogramming.jpg'
    },
    {
      url: 'https://www.amazon.ca/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612?crid=2JRFSQXS5IY7P&dib=eyJ2IjoiMSJ9.EMyqNPA-2ANqWOHp1sF1LTpWconMUhvxv2IokjZvPmFf5yQVOfwzxYGerpCRdAAXdeGZyQmx8R2R6ntchDWgnjARUPjZ-WbZhRkz9c805QsceYvSAdBKtH59ICzHzzChX2jE9LRHf4beNiboJntqZsu1mBb_7hGGUmRjLZA2fLvHxz9mv35_1mZOOi_kDhyBlMSZWpqARzIGcsP7gnFEJeMzSjJcLPX2gKdJxL1KmKQ.RF73Cg0fUSIHQgKCXnnTxJEmYI3YrqxiDem2TAu0pDc&dib_tag=se&keywords=erich+gamma&qid=1720186542&s=books&sprefix=erich+gamma%2Cstripbooks%2C92&sr=1-1&linkCode=ll1&tag=ccarrster02-20&linkId=fddb3119e05d5b9b652bd8099dd88e2e&language=en_CA&ref_=as_li_ss_tl',
      title: 'Design Patterns',
      subtitle: 'Elements of Reusable Object-Oriented Software',
      authors: 'Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides',
      image: 'designpatterns.jpg'
    },
    {
      url: 'https://www.amazon.ca/Psychology-Computer-Programming-Silver-Anniversary/dp/0932633420?crid=2XIXKSOJP4SX&dib=eyJ2IjoiMSJ9.oRmbBqmPsmnBCSKw4vQJyBJAzYM_lIvyRs851ZPWaYBfC9o75k7Kw9u1XhGH0861FxP7cfavXgRdGklK569pLJELY20nJs4y0uCsMacegVh1LJure35bRISpY_Hg36XGrvxtwfCkM6cTmvdWdWNXWJIax-ND6WLh6EjR5YCXZd93lMVYaNamumcrdkI6JUjD9_vyEsn9bzbatYOyn6qM0SuRWMuCEfhzdWcPIUZd3Xg.yNZ9v8PZ4rdwaDAZEQw0ACb_60RACSAJw3CWXZ9RCrI&dib_tag=se&keywords=psychology+of+computer+programming&qid=1720186954&s=books&sprefix=phycology+of+computer+programming%2Cstripbooks%2C93&sr=1-1&linkCode=ll1&tag=ccarrster02-20&linkId=0a83e03f13ab55cb0f5c33f14c9cf430&language=en_CA&ref_=as_li_ss_tl',
      title: 'The Psychology of Computer Programming',
      subtitle: '',
      authors: 'Gerald M. Weinberg',
      image: 'phycology.jpg'
    } ,
    {
      url: 'https://www.amazon.ca/Mythical-Man-Month-Software-Engineering-Anniversary/dp/0201835959?pd_rd_w=7ytD0&content-id=amzn1.sym.5c2f4a04-3107-46ca-9aa1-5c31efa67ff2&pf_rd_p=5c2f4a04-3107-46ca-9aa1-5c31efa67ff2&pf_rd_r=J8TBP69VKK3V9VZYDYTJ&pd_rd_wg=cN7h3&pd_rd_r=3c8c3eb5-b781-4f6e-b2fd-5f36a9b1cc67&pd_rd_i=0201835959&psc=1&linkCode=ll1&tag=ccarrster02-20&linkId=0fa2b3074cec7d8b3317856f766e7b84&language=en_CA&ref_=as_li_ss_tl',
      title: 'The Mythical Man-Month',
      subtitle: 'Essays on Software Engineering',
      authors: 'Frederick P. Brooks, Jr.',
      image: 'manmonth.jpg'
    },
    {
      url: 'https://www.amazon.ca/Principles-Product-Development-Flow-Generation/dp/1935401009?crid=X91DHFHPESJG&dib=eyJ2IjoiMSJ9.q13iir53VvwNucBi1JIKptVudosIyj6gglv9tR4gUQ5JTWdNdK3I6_5jZ1OXcphCYwWoMJCCquE5-XkHgrLZvEqd7tSVZ2mUUGLbwjlG7fyclhJ8vlZPltBqamYHwd3EBtErtnSgmYDPs7JIxyMf4Tii4zI6tMUYvfRAU8vmBEm5QztIOQ_gzLg3xSNNgpSWN-y0QHqC9TvDbZuST7n-_0X3X1N9N43oSVilG04-L5U.NsCt-wzzgqOBzICLC9JePpBG6eP7JmZbO1T0lmhBz_U&dib_tag=se&keywords=product+development+flow&qid=1720187237&s=books&sprefix=product+development+flow%2Cstripbooks%2C121&sr=1-1&linkCode=ll1&tag=ccarrster02-20&linkId=52b1a7345aa664a47e49a31ab033db9f&language=en_CA&ref_=as_li_ss_tl',
      title: 'The Principles of Product Development Flow',
      subtitle: 'Second Generation Lean Product Develpoment',
      authors: 'Donald G. Reinertsen',
      image: 'flow.jpg'
    } ,
    {
      url: 'https://www.amazon.ca/Accelerate-Software-Performing-Technology-Organizations/dp/1942788339?crid=22W691TAO2TEF&dib=eyJ2IjoiMSJ9.g9EhxSy88dnr8S4Qorwi4DaLUaZtk4zOlTr_6zA3k3RICoAFTl9_S4X4yECO50CC6-zZAZGzd1_e7OjS4e54W0R5ERkqu0Ta2-6WU4LpBKH1oYwNHEynw5EbJw6wu_zdaAnRRsm_T2_vpP8rOXCDKYcPZ2eTD1itRFddlwk8GcI6pGKfkzyoUHhVEgoDSiwCx0irZuxDJIXDE_o1hj2L0WRbXrbSeT0Fiv761m_CtjE.8Rc-oVXaBk6FwblXzQkgXl8RWj5co_usfbVxaN5Nv0g&dib_tag=se&keywords=accelerate&qid=1720187540&s=books&sprefix=accelrate%2Cstripbooks%2C151&sr=1-1&linkCode=ll1&tag=ccarrster02-20&linkId=cf9c332f1a72b6edabdca9cce2eb3ded&language=en_CA&ref_=as_li_ss_tl',
      title: 'Accelerate',
      subtitle: 'The Science of Lean Software and DevOps',
      authors: 'Nicole Forgren PhD, Jez Humble, Gene Kim',
      image: 'accelerate.jpg'
    } ,
    {
      url: 'https://www.amazon.ca/Designing-Web-Usability-Jakob-Nielsen/dp/156205810X?crid=1SH5LLN3ESJO9&dib=eyJ2IjoiMSJ9.Pghye2qr7hv0gISXV1qW1SZBQZGzrJrlBWPDdKpixvLMd9R6wUxjQt-J5muTnIlk4XE528h-5bDQTP6mKUvgMi47XR52vaUvAz5iFBkDdmq_JXih28kiBMuz9tSd-8k76d1pKHsDEAXjfvP6PO_3YNdPCKwfYt0mTL8OkYcFIjWcqchxkvWpJyXFXLGtd_plsWz6CLIXmJ65pqByUvWtjlC8GpwTwaqCveDi-Gnq4PQ.Ripy4Gebp6oR4w1IqdKA8KEWLzXfE2lbhZKzFq1WpcY&dib_tag=se&keywords=Web+Usability&qid=1720188693&s=books&sprefix=web+usability%2Cstripbooks%2C102&sr=1-1&linkCode=ll1&tag=ccarrster02-20&linkId=1bcf264a03aec78c272854012430eb6e&language=en_CA&ref_=as_li_ss_tl',
      title: 'Designing Web Usability',
      subtitle: '',
      authors: 'Jakob Nielsen',
      image: 'webusability.jpg'
    } ,
    {
      url: 'https://www.amazon.ca/Dont-Make-Think-Revisited-Usability/dp/0321965515?crid=2TUBNX4DSP7CF&dib=eyJ2IjoiMSJ9.qQS_-gDkiKpoayqMU5wKaA277YaBtut311pHwc6F-p4LgNLEn_miMEa3FtIFf3--DG2y6z0JtKst_m4FAqlyxAwvygrh0Cy-N55VvL5ZnKFaxZdR4REXZrZumXhViOQ8abK31Dsvs3Uynze2oeVTAwx6JSfLidcBVmSgZGNAF1KhR3JUVasGQnhJzF_eG4KdMThWunMAMmbcl9pC6ImiLpzxGW79ahRaAGxJ88moec4.32N7DHbpE09K1EqfmLF4MvpNUGz32foSJO_D7qnZrw8&dib_tag=se&keywords=don%27t+make+me+think&qid=1720188850&s=books&sprefix=don%27t+make+me+think%2Cstripbooks%2C114&sr=1-1&linkCode=ll1&tag=ccarrster02-20&linkId=ef2bfb37b4a6a03cf6e7be5d4d6b346a&language=en_CA&ref_=as_li_ss_tl',
      title: 'Don`t Make Me Think',
      subtitle: 'A Common Sence Approach to Web Usability',
      authors: 'Steve Krug',
      image: 'think.jpg'
    }
    
    
    
    
    /*

    ,
    {
      url: '',
      title: '',
      subtitle: '',
      authors: '',
      image: ''
    }

    */
  ];

  const projects = [
    {
      projectName: 'My Ore!',
      description: 'I created a My Ore as an experiment using the PIXI JS HTML5 canvas library. I made a clone of the rules for Hey, That`s My Fish board game. This version is hotseat, so all play on the same computer/web page.',
      image: 'ore.png',
      video: 'https://www.youtube.com/watch?v=W3gr9mP8n_I',
      source: 'https://github.com/ccarrster/asteroid-ore',
      demourl: 'http://chriscarr.name/myore/',
      externalurl: 'https://boardgamegeek.com/boardgame/8203/hey-thats-my-fish'
    },
    {
      projectName: 'Potluck',
      description: 'I created a Potluck app because I like to share food with co-workers and I wanted to experiment with a new stack. Potluck uses React, TailwindCSS, Nextjs.',
      image: 'potluck.png',
      video: 'https://www.youtube.com/watch?v=c9HXfaZhwDY',
      source: 'https://github.com/ccarrster/potluck'
    },
    {
      projectName: 'Awe Thicket',
      description: 'I created Awe Thicket using the rules from Wonder Woods. It uses HTML, CSS, Javascript, JQuery.',
      image: 'awethicket.png',
      video: 'https://www.youtube.com/watch?v=2Cm_jJjo5CE',
      source: 'https://github.com/ccarrster/awethicket',
      demourl: 'http://chriscarr.name/awethicket',
      externalurl: 'https://boardgamegeek.com/boardgame/354729/wonder-woods'
    },
    {
      projectName: 'Kraplow',
      description: 'I created Text Kraplow! as an experiment to see if I can get all the rules of a western card game into software. Kraplow! Uses HTML and AJAX. It is now a multiplayer version with AI using Java/Tomcat server side. The rules implemented are same from the board game Bang! and Dodge City.',
      image: 'kraplow.png',
      source: 'https://github.com/ccarrster/kraplow',
      demourl: 'http://chriscarr.name:8080/westerncardgame',
      externalurl: 'https://boardgamegeek.com/boardgame/3955/bang'
    },
    {
      projectName: 'Shade Harvest',
      description: 'Shade Harvest is a web version of a board game Photosynthesis. The theme is growing and harvesting trees that cast shadows on nearby trees. At the moment you can only play hotseat. I will add AI and online multiplayer next. Just looking for feedback now.',
      image: 'photo.png',
      video: 'https://www.youtube.com/watch?v=YgOxbgqymFI',
      source: 'https://github.com/ccarrster/grow',
      demourl: 'http://chriscarr.name/grow',
      externalurl: 'https://boardgamegeek.com/boardgame/218603/photosynthesis'
    },
    {
      projectName: 'Snack Tracker',
      description: 'Created a multi-store IOU management system for the office store I ran at Well.ca/Tulip and other companies. Create your own free IOU store today!',
      image: 'iou.jpg',
      source: 'https://github.com/ccarrster/ioyousnack',
      demourl: 'http://chriscarr.name/ioyoudemo/index.php',
    },
    {
      projectName: 'Deck of cards',
      description: 'I want to design a very fast way to put board games on the web. My goal is a minimalistic no rules interface. At the moment it is a deck of cards. Double click to flip cards. Drag to move cards. Drag select to select multiple cards. Icons to shuffle, stack and flip selected cards. Refresh the page for a new deck. My plan is to add private and public areas(You can only see your poker hand), rolling dice(likely double click to roll). To create a new game, you would need pictures of the front and back of game elements and an initial layout. Shared checkers shares the locations of the pieces to all browsers visiting the page, and updates every second.',
      image: 'anygame.png',
      demourl: 'http://chriscarr.name:8080/anygame/example.html'
    },
    {
      projectName: 'Bungle',
      description: 'I created Bungle - a single player Boggle clone to demonstrate a simple internet game that doesn`t required Java or downloading anything.',
      image: 'bungle.png',
      video: 'https://www.youtube.com/watch?v=g1rCen2ZIm0',
      source: 'http://chriscarr.name:8080/bungles/bungle.html',
      demourl: 'http://chriscarr.name:8080/bungle/bungle.jsp',
      externalurl: 'https://boardgamegeek.com/boardgame/1293/boggle'
    },
    {
      projectName: 'Stackem Blocks',
      description: 'I created Stacking Blocks because a "How to become a game developer" recommended it as a good start.',
      image: 'stackthumb.png',
      video: 'https://www.youtube.com/watch?v=P9_-5rEtGUg',
      source: 'http://chriscarr.name:8080/stack/stackemblockssource.zip',
      demourl: 'http://chriscarr.name:8080/stack/stack.html'
    },
    {
      projectName: 'Jacks or Better Video Poker Clone',
      description: 'I created Video Poker as a challenge to myself to start on the way to online multiplayer games, specifically a western card game.',
      image: 'pokerthumb.png',
      video: 'https://www.youtube.com/watch?v=q0ZQUyPM5OY',
      source: 'http://chriscarr.name:8080/poker/videopokersrc.zip',
      demourl: 'http://chriscarr.name:8080/poker/poker.html',
      externalurl: 'https://boardgamegeek.com/boardgame/1115/poker'
    },
    {
      projectName: 'DevPost Hackathon Submissions',
      description: 'I participate in lots of hackathons through dev post. Check out my submissions on DevPost.',
      demourl: 'https://devpost.com/ccarrster',
    }
  ];

  /*


    {
      projectName: '',
      description: '',
      image: '',
      video: '',
      source: '',
      demourl: '',
      externalurl: ''
    }

  */

  const categories = Array.from(new Set(events.map((event) => event.category )));

  let sortedEvents = events.sort((a, b) => b.start - a.start);
  
  
  return (
    <div className="App">
      <section>
        {contacts.map((contact) => {
          return(
            <a href={contact.url} target='_blank'><img className='contact' src={'icons/' + contact.icon} alt={contact.tip}/></a>
          )
        })}
      </section>
      <nav>
        {categories.map((category) => <a href={'#' + category} key={category} className='navlink' to={category}>{category}</a>)}
      </nav>
      <section id='header'>
        <h1>Chris Carr's Developer Portfolio</h1>
        <h2>Solving problems with maintainable software</h2>
        <img src='profilephoto.png' alt='headshot'/>
        <p>Send me an email: <a href='mailto:ccarrster@gmail.com'>ccarrster@gmail.com</a> and we can book a call or meeting.</p>
        <p>I am actively looking for full stack development work(employment or contract) remote or hybrid. I am a Canadian citizen and I live in Penetanguishene, Ontario, Canada.</p>
        <p>I enjoy helping startups, mentoring and attending hackathons.</p>
      </section>
      {categories.map((category) => {
        return(
          <section id={category}>
            <h1>{category} Timeline</h1>
            <div className='events'>
            {sortedEvents.map((event) => {
              if(event.category !== category){
                return null;
              }
              return(
              <div className='event' key={event.name + event.start}>
                {event.url ? <a href={event.url} target='_blank'><h1>{event.name}</h1></a> : <h1>{event.name}</h1>}
                {event.image && <img src={'logos/' + event.image} alt='company logo'/>}
                <p>{event.description}</p>
                <p>Started {event.start.toLocaleDateString()}</p>
                {event.end && 
                  <p>Ended {event.end.toLocaleDateString()}</p>
                }
              </div>
              );
            })}
            </div>
          </section>
        );
      }
        
      )}
      <section>
        <h1>My Tech Library</h1>
        <div className='books'>
        {books.map((book) => {
          return (
            <div className='booklink'>
              <a href={book.url}>
              <h2>{book.title}</h2>
              <p>{book.subtitle}</p>
              <p><img src={'books/' + book.image} alt='book cover'/></p>
              <p>{book.authors}</p>
              </a>
            </div>
          )
        }
        )}
        </div>
      </section>

      <section>
        <h1>Technologies and Clients</h1>
        <div id='logos' className='logos'>
          {
            logoIndexes.map((logoIndex) => {
              return <img className='book' key={logoIndex} alt="book, tool, clients" src={'/logos/' + logos[logoIndex]}/>
            })
          }
        </div>
      </section>
      <section id='footer'>
        {contacts.map((contact) => {
          return(
            <a href={contact.url} target='_blank'><img className='contact' src={'icons/' + contact.icon} alt={contact.tip}/></a>
          )
        })}
      </section>
    </div>
  );
}

export default App;
