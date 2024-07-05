import './App.css';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

const logos = ["1069827.jpg",
  "1280px-PHPUnit_Logo.svg.png",
  "1994-to-today-Fedex-logo-min-1024x576.png",
  "1C5C6027248EC8976C56C495782CF896B3353FDA.jpeg",
  "1_e0hDmiO7rx40JfodzPPKGA.webp",
  "2560px-Ruby_On_Rails_Logo.svg.png",
  "317I7LHK+nL._SY445_SX342_.jpg",
  "31pk7DxDsxL.jpg",
  "41+u6Vm1DrL._SL350_.jpg",
  "41bOkXnNBjL._SY445_SX342_.jpg",
  "41GVM8S40TL._AC_UF1000,1000_QL80_.jpg",
  "41iZulVq18L._SY445_SX342_.jpg",
  "41rsBGaE1KL._SY445_SX342_.jpg",
  "511cVq13clL._SY445_SX342_.jpg",
  "518B8Q32VVL._AC_UF1000,1000_QL80_.jpg",
  "51EyaJeebHL._AC_UF1000,1000_QL80_.jpg",
  "51Mx2wNFgKL._SY445_SX342_.jpg",
  "51nL96Abi1L.jpg",
  "51P060lZSEL._AC_UF894,1000_QL80_.jpg",
  "51TywQ-wMmS._SL500_.jpg",
  "61-+RJemWdL._AC_UF1000,1000_QL80_.jpg",
  "61BFOf9Ap-L._AC_UF1000,1000_QL80_.jpg",
  "61GzazUmKyL._AC_UF1000,1000_QL80_.jpg",
  "61jC09nUHxL._AC_UF1000,1000_QL80_.jpg",
  "61Jdrn9cfpL._AC_UF1000,1000_QL80_.jpg",
  "61JiMzCssOL._AC_UF894,1000_QL80_.jpg",
  "61LJaDHdPKL._AC_UF1000,1000_QL80_.jpg",
  "61o93lrQ1ZL._AC_UF1000,1000_QL80_.jpg",
  "61q7qV49m+L._AC_UF1000,1000_QL80_.jpg",
  "61ztlXgCmpL._AC_UF1000,1000_QL80_.jpg",
  "6CD6967EAA4CF396F16E11589C067CC586739986.jpeg",
  "71A4igyepNL._AC_UF1000,1000_QL80_.jpg",
  "71BJJdpOKzL._AC_UF1000,1000_QL80_.jpg",
  "71TGolfP8fL._AC_UF1000,1000_QL80_.jpg",
  "81bSa9px6qL._AC_UF1000,1000_QL80_.jpg",
  "840.jpg",
  "852968.jpg",
  "874086.png",
  "91sh+QdzfCL._AC_UF1000,1000_QL80_.jpg",
  "91uFdkCJmAL._AC_UF1000,1000_QL80_.jpg",
  "alberta ministry of forests and parks.jpg",
  "algh_hu113d2c3e50fd75c09b6733c171b149ce_93961_250x0_resize_q75_box.jpg",
  "Apache_HTTP_server_logo_(2019-present).svg.png",
  "apache_tomcat_logo_icon_167851.webp",
  "arius.png",
  "bc education.png",
  "BC_FLNR_H_RGB_pos.png",
  "beanstream.png",
  "c-sharp-open-source.png",
  "camosun logo.png",
  "Canada-Post-logo.png",
  "canadian_space_agency_logo_2023_small.jpg",
  "cober.png",
  "Company_logo_of_ScotiaMocatta.jpg",
  "csss logo.png",
  "designing.gif.450x600_q75_autocrop_crop-scale_upscale.jpg",
  "dhl-1.svg",
  "download (1).jfif",
  "download (2).jfif",
  "download (3).jfif",
  "download.jfif",
  "free-ruby-47-1175102.webp",
  "git.jpg",
  "Google-Cloud-Platform-GCP-Logo.png",
  "Google_Maps_Logo_2020.svg.png",
  "GrabOp-Final-Logo-01-e1627545901270.png",
  "html.png",
  "images (1).jfif",
  "images (1).png",
  "images (2).png",
  "images (3).png",
  "images (4).png",
  "images (5).png",
  "images.jfif",
  "images.png",
  "Java-Logo.png",
  "Javascript_badge.svg.png",
  "Jenkins_logo_with_title.svg.png",
  "jrpm.jpg",
  "logo-guide-logos-1.svg",
  "macOS-Logo.png",
  "meta.png",
  "Microsoft-Office-logo.png",
  "microsoft-sql-server-logo.svg",
  "mobilewrx.png",
  "Moneris_Moneris_partners_with_Wix_to_provide_Canadian_businesses.jpg",
  "Mysql_logo.png",
  "Oracle_logo.svg.png",
  "Paypal_2014_logo.png",
  "Perl_language_logo.svg",
  "php.png",
  "PhpStorm_Icon.svg.png",
  "prj.jpg",
  "Python_logo_and_wordmark.svg.png",
  "react-original-wordmark-icon-840x1024-vhmauxp6.png",
  "Selenium_Logo.png",
  "SelkirkLogo.png",
  "The_C_Programming_Language_logo.svg.png",
  "tsgit_hu09204dda6e2c959a4cc6bd46a61e0f67_2774232_250x0_resize_q75_box.jpg",
  "tulip.png",
  "Ubuntu-logo-2022.svg.png",
  "UPS-logo.png",
  "vscode.png",
  "well.png",
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
      category: 'Employee'
    },
    {
      start: new Date('2014-01-01'),
      end: null,
      name: 'Basics',
      description: 'Created a searchable filterable web interface for product and sales data using PHP, MySQL, HTML, CSS, jQuery, Gitlab.',
      category: 'Contractor'
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
      category: 'education'
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
      category: 'education'
    },
    {
      start: new Date('2004-11-02'),
      end: new Date('2005-04-02'),
      name: '6th Dimension Devices - Coop',
      description: 'Created Pocket PC and desktop interfaces to connect and collect movement data from a custom athletic performance device using Java and EvC++. Made a tool to sync and pair recorded data with recorded video by converting data to display as audio samples in Java.',
      leaving: 'Coop ended',
      category: 'Employee'
    },
    {
      start: new Date('2005-04-03'),
      end: new Date('2005-06-02'),
      name: '6th Dimension Devices - Software Developer',
      description: 'Created Pocket PC and desktop interfaces to connect and collect movement data from a custom athletic performance device using Java and EvC++. Made a tool to sync and pair recorded data with recorded video by converting data to display as audio samples in Java.',
      leaving: 'Without Cause',
      category: 'Employee'
    },
    {
      start: new Date('2008-05-02'),
      end: new Date('2010-07-02'),
      name: 'Vancouver Island Java Users Group Member',
      description: 'Attended several monthly meetings with guest speakers focused on Java and other technlologies.',
      category: 'Group'
    },
    {
      start: new Date('2005-06-02'),
      end: new Date('2009-06-02'),
      name: 'Selkirk Systems Inc',
      description: 'Created flood emergency managment software for the Ministry of Forest and used it in a weeklong demonstration in Whistler British Columbia, Using Pocket PCs, J2ME, digital radios and satalite communications with Java and SQL backend. Using agile methodoligies we had a ticket board, introspections and scrums. I went on several trips to Edmonton to integrate with the Alberta Ministry of Natural Resources. Worked on a digital radio and satalite project for the Canadian Space Agency. I started a movie night and shared meals.',
      leaving: 'Without Cause',
      category: 'Employee'
    },
    {
      start: new Date('2009-07-02'),
      end: new Date('2010-07-02'),
      name: 'Beanstream Internet Commerce',
      description: 'Performed a large refactoring project that involved changing each line that ran a database query, used regular expressions, classes and eval to speed up conversion using VB6. Helped create the SoctiaMocatta precious metals Estore using VB.NET.',
      leaving: 'Quit, moved to Ontario',
      category: 'Employee'
    },
    {
      start: new Date('2010-10-02'),
      end: new Date('2011-09-02'),
      name: 'Arius Software',
      description: 'Worked on FinTech document flows using JavaScript and a custom Java like frontend language. Implemented daily standups after not meeting for weeks.',
      leaving: 'Quit, limited learning',
      category: 'Employee'
    },
    {
      start: new Date('2011-09-03'),
      end: new Date('2012-09-02'),
      name: 'Well.ca',
      description: 'Using agile and kanban mantained and built features for an ecommerce site, including warehousing, shipping, purchase orders, business intelegence, customer mangment, order managment, product managment, coupons, and sales. Participated in many hack days. Tech stack used was a distributed system using PHP, MySQL, CodeIgniter, HTML, CSS, JavaScript, jQuery, EXTJS, worker queues, MongoDB, Solr, and database migrations.',
      leaving: 'Without Cause, Founding new company',
      category: 'Employee'
    },
    {
      start: new Date('2012-09-03'),
      end: new Date('2014-07-02'),
      name: 'Tulip Retail',
      description: 'Founding member of Tulip Retail. Helped work on a warehousing system for a beverage client. Given scrum master duties for 2 teams.',
      leaving: 'Without Cause',
      category: 'Employee'
    },
    {
      start: new Date('2014-09-03'),
      end: new Date('2012-11-02'),
      name: 'Plum HR',
      description: 'Helped out with frontend redesign of an applicant survey and testing system. Implemented and performed user experience testing. Changed the Bootstrap UI and worked with Python and Django on the backend.',
      leaving: 'Without Cause',
      category: 'Employee'
    },
    {
      start: new Date('2014-12-03'),
      end: new Date('2015-05-02'),
      name: 'MetaMarketplace',
      description: 'Customized a white label cottage vacation rental application to match clients branding. The frontend was CoffeeScript, Backbone.js, Marrionette.js, Gulp and the backend was Ruby and Ruby-on-Rails in the cloud.',
      leaving: 'Without Cause, Mass layoff',
      category: 'Employee'
    },
    {
      start: new Date('2015-07-03'),
      end: new Date('2020-11-02'),
      name: 'Cober Solutions',
      description: 'Created APIs and integrated with Swagger APIs for B2B print orders of one of North Amercia`s largest printers. Created a multi site warehousing system using jQuery, Bootstrap, MySQL, PHP and Laravel. Created order tracking system and unified several different systems to track all orders through the printing plants. Hosting was on virtualized machines and kept local for security issues.',
      leaving: 'Without Cause during Covid',
      category: 'Employee'
    },
    {
      start: new Date('2021-01-03'),
      end: new Date('2023-11-21'),
      name: 'Tulip Retail',
      description: 'Worked on the Well.ca stack on the ecommerce team. Helped integrate Beanstream payment system to double our ecommerce clients. Shared learning via tech talks, hackdays, video reviews and tech book reviews.',
      leaving: 'Without Cause, Mass layoff',
      category: 'Employee'
    },
    {
      start: new Date('2011-03-28'),
      end: null,
      name: 'Guelph PHP User Group',
      description: 'Guelph, Kitchener, Waterloo PHP User Group. Hosted by Well at the begining and Vehikl. Usually a guest speaker, and usually about PHP. Have done group coding sessions and some meetings are social.',
      category: 'Group'
    },
    {
      start: new Date('2014-01-14'),
      end: null,
      name: 'DevHouse Waterloo',
      description: 'A place to demo projects, anyone can demonstrate, sometimes there is a time limit. Food, drinks and social afterwards. Went online during Covid.',
      category: 'Group'
    },
    {
      start: new Date('2010-10-21'),
      end: new Date('2013-11-05'),
      name: 'Startup Drinks',
      description: 'Tech startup social at Chansaw in Kitchener',
      category: 'Group'
    },
    {
      start: new Date('2015-02-14'),
      end: new Date('2016-09-08'),
      name: 'The Front Edge',
      description: 'A web frontend focused meetup. I gave a talk on hackathons at one meeting. Hosted by Axonify.',
      category: 'Group'
    },
    {
      start: new Date('2013-11-11'),
      end: new Date('2019-09-05'),
      name: 'HackerNest Kitchener-Waterloo',
      description: 'A tech social hosted by a different business each time. This group is global and has local organizations. Drinks and snacks provided. Anouncements in the middle for other tech events.',
      category: 'Group'
    },
    {
      start: new Date('2012-06-21'),
      end: null,
      name: 'UX Waterloo',
      description: 'User iterface focused talks. Sometimes atendees present projects, other times group work. They hold and annual UX confrence.',
      category: 'Group'
    },
    {
      start: new Date('2011-01-21'),
      end: null,
      name: 'Agile/Lean P2P',
      description: 'A wide variety of topics. Sometimes interactive. Usually a speaker. Hosted in different public spaces.',
      category: 'Group'
    },
    {
      start: new Date('2018-05-29'),
      end: null,
      name: 'Indie Game Development P2P',
      description: 'Work on and demo games, annual game dev challenge.',
      category: 'Group'
    },
    {
      start: new Date('2009-01-01'),
      end: null,
      name: 'MobileWrx',
      description: 'Created a mobile app for Blackberry that displayed barcodes for couponing and event ticketing.',
      category: 'Founder'
    },
    {
      start: new Date('2013-01-01'),
      end: null,
      name: 'GrabOp',
      description: 'Created a Php, MySQL, webapp for the gig economy.',
      category: 'Founder'
    },
    {
      start: new Date('2008-01-01'),
      end: null,
      name: 'REES',
      description: 'Created a service recording and reporting stand alone application for non profit clients using Java.',
      category: 'Volunteer'
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
      category: 'Contractor'
    },
    {
      start: new Date('2023-01-01'),
      end: null,
      name: 'Barrie Computer and Technology Club',
      description: 'A group of 10 to 15 talking about new software and presenting to each other. Lot of Q and A about basic computer skills.',
      category: 'Group'
    },
    {
      start: new Date('2023-01-01'),
      end: null,
      name: 'Midland Makers',
      description: 'A group of crafters and engineers that meet up around the Midland Library Makerspace.',
      category: 'Group'
    },
    {
      start: new Date('2023-01-01'),
      end: null,
      name: 'South Georgian Bay Amateur Radio Club',
      description: 'A group of amature radio operators that maintain local repeaters and gather for a monthly meal.',
      category: 'Group'
    },
    {
      start: new Date('2017-01-01'),
      end: null,
      name: 'MLH Hackathons',
      description: 'I volunteer as a mentor and teach lessons at hackathons. I float around various teams helping them get unstuck. I tought lessons on retaining information in a web app.',
      category: 'Volunteer'
    },
    {
      start: new Date('2016-01-01'),
      end: null,
      name: 'Conestoga College Kitchener',
      description: 'I volunteer as a computer science toutor teaching C#, presenting skills and interviewing skills.',
      category: 'Volunteer'
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
      category: 'Volunteer'
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
    }

    
  ]

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
        {categories.map((category) => <a href={'#' + category} key={category} to={category}>{category}</a>)}
      </nav>
      <section id='header'>
        <h1>Chris Carr's Developer Portfolio</h1>
        <img src='profilephoto.png' alt='headshot'/>
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
                <h1>{event.name}</h1>
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
        <h1>Books, Tools and Clients</h1>
        <div id='logos' className='logos'>
          {
            logoIndexes.map((logoIndex) => {
              return <img className='book' key={logoIndex} alt="book, tool, clients" src={'/logos/' + logos[logoIndex]}/>
            })
          }
        </div>
      </section>
    </div>
  );
}

export default App;
