import './App.css';
import { Link } from "react-router-dom";

function App() {
  const events = [
    {
      start: new Date('1991-09-02'),
      end: new Date('1992-07-30'),
      name: 'Computer Lab Assistant - Greenglade Elementry School',
      description: 'Helped tuotor students in the Apple IIe and Mac lab',
      category: 'volunteer'
    },
    {
      start: new Date('1994-09-02'),
      end: new Date('1996-07-30'),
      name: 'Computer Club Member - North Saanich Middle School',
      description: 'Helped tuotor students in the Mac labs, experiemented with Hypercard, FTP',
      category: 'volunteer'
    },
    {
      start: new Date('1997-09-02'),
      end: new Date('2000-07-30'),
      name: 'Computer Science 11, Drafting - Parkland High School',
      description: 'Learned Pascal, Claris Works, CAD, Computer Science 12, Physics 11, Judo, Entreprenurship, Math 12, Physics 12',
      category: 'education'
    },
    {
      start: new Date('1996-09-02'),
      end: new Date('2000-07-30'),
      name: 'Fast Times Model Car Club',
      description: 'Designed, build, sanded, painted, bondoed, polished, raced wooden/metal model cars. I made a kit hot rod, superbird, semi truck, spider, battle tank and a station wagon. I won best looking in the heavy category for a semi truck. I won first in racing for a station wagon. The last year I was a mentor/volunteer. Each year ended in a weekend camp.',
      category: 'volunteer'
    },
    {
      start: new Date('1998-08-02'),
      end: new Date('1998-08-09'),
      name: 'SALTS small boat rowing/sailing trip',
      description: 'Rowed, sailed, learned knots, setup camp, swam and it rained for 7 of the 9 days in an open boat. Some self discovery and I am no longer afraid of getting wet.',
      category: 'education'
    },
    {
      start: new Date('1999-08-02'),
      end: new Date('1999-08-09'),
      name: 'Starting Point - Volunteering',
      description: 'Ran a cyber cafe for a week with a friend while the owners had a family emergency. Also worked on creating a Druid Quake Mod with friends. I focused on making the maps.',
      category: 'volunteer'
    },
    {
      start: new Date('1999-08-02'),
      end: null,
      name: 'Sidney In-Home Computer Maintenance',
      description: 'Started my own computer maintance business. Upgraded computers, removed viruses, toutored, transfered emails in exchange for a 3 hour sail boat tour.',
      category: 'founder'
    },
    {
      start: new Date('2002-09-02'),
      end: new Date('2005-06-02'),
      name: 'Camosun College - Computer Systems Technlogy Diploma - with Coop',
      description: 'Courses on math, entreprenurship, technical writing, object oriented programming, data warehousing, Python, Java, Perl, C, C++, Oracle, Flash, HTML, CSS, Compiler(Craps), Scheme, Networking, Real-time Programming, Graphics. Capstone project with 2 team mates displaying 3 axis acceleration on a Pocket PC, connecting wirelessly over a serial connection using EvC++. I started a chess club. I read the pragmatic programmer, C guide, Design Patterns',
      category: 'education'
    },
    {
      start: new Date('2004-06-02'),
      end: new Date('2004-09-02'),
      name: 'Ministry of Education, British Columbia - Coop',
      description: 'Helped convert K-12 corriculum from HTML to XML and a standard DOM. Used Perl and regular expressions to speed up the process.',
      leaving: 'Coop ended',
      category: 'employee'
    },
    {
      start: new Date('2004-11-02'),
      end: new Date('2005-04-02'),
      name: '6th Dimension Devices - Coop',
      description: 'Created Pocket PC and desktop interfaces to connect and collect movement data from a custom athletic performance device using Java and EvC++. Made a tool to sync and pair recorded data with recorded video by converting data to display as audio samples in Java.',
      leaving: 'Coop ended',
      category: 'employee'
    },
    {
      start: new Date('2005-04-03'),
      end: new Date('2005-06-02'),
      name: '6th Dimension Devices - Software Developer',
      description: 'Created Pocket PC and desktop interfaces to connect and collect movement data from a custom athletic performance device using Java and EvC++. Made a tool to sync and pair recorded data with recorded video by converting data to display as audio samples in Java.',
      leaving: 'Without Cause',
      category: 'employee'
    },
    {
      start: new Date('2008-05-02'),
      end: new Date('2010-07-02'),
      name: 'Vancouver Island Java Users Group Member',
      description: 'Attended several monthly meetings with guest speakers focused on Java and other technlologies.',
      category: 'user group'
    },
    {
      start: new Date('2005-06-02'),
      end: new Date('2009-06-02'),
      name: 'Selkirk Systems Inc',
      description: 'Created flood emergency managment software for the Ministry of Forest and used it in a weeklong demonstration in Whistler British Columbia, Using Pocket PCs, J2ME, digital radios and satalite communications with Java and SQL backend. Using agile methodoligies we had a ticket board, introspections and scrums. I went on several trips to Edmonton to integrate with the Alberta Ministry of Natural Resources. Worked on a digital radio and satalite project for the Canadian Space Agency. I started a movie night and shared meals.',
      leaving: 'Without Cause',
      category: 'employee'
    },
    {
      start: new Date('2009-07-02'),
      end: new Date('2010-07-02'),
      name: 'Beanstream Internet Commerce',
      description: 'Performed a large refactoring project that involved changing each line that ran a database query, used regular expressions, classes and eval to speed up conversion using VB6. Helped create the SoctiaMocatta precious metals Estore using VB.NET.',
      leaving: 'Quit, moved to Ontario',
      category: 'employee'
    },
    {
      start: new Date('2010-10-02'),
      end: new Date('2011-09-02'),
      name: 'Arius Software',
      description: 'Worked on FinTech document flows using JavaScript and a custom Java like frontend language. Implemented daily standups after not meeting for weeks.',
      leaving: 'Quit, limited learning',
      category: 'employee'
    },
    {
      start: new Date('2011-09-03'),
      end: new Date('2012-09-02'),
      name: 'Well.ca',
      description: 'Using agile and kanban mantained and built features for an ecommerce site, including warehousing, shipping, purchase orders, business intelegence, customer mangment, order managment, product managment, coupons, and sales. Participated in many hack days. Tech stack used was a distributed system using PHP, MySQL, CodeIgniter, HTML, CSS, JavaScript, jQuery, EXTJS, worker queues, MongoDB, Solr, and database migrations.',
      leaving: 'Without Cause, Founding new company',
      category: 'employee'
    },
    {
      start: new Date('2012-09-03'),
      end: new Date('2014-07-02'),
      name: 'Tulip Retail',
      description: 'Founding member of Tulip Retail. Helped work on a warehousing system for a beverage client. Given scrum master duties for 2 teams.',
      leaving: 'Without Cause',
      category: 'employee'
    },
    {
      start: new Date('2014-09-03'),
      end: new Date('2012-11-02'),
      name: 'Plum HR',
      description: 'Helped out with frontend redesign of an applicant survey and testing system. Implemented and performed user experience testing. Changed the Bootstrap UI and worked with Python and Django on the backend.',
      leaving: 'Without Cause',
      category: 'employee'
    },
    {
      start: new Date('2014-12-03'),
      end: new Date('2015-05-02'),
      name: 'MetaMarketplace',
      description: 'Customized a white label cottage vacation rental application to match clients branding. The frontend was CoffeeScript, Backbone.js, Marrionette.js, Gulp and the backend was Ruby and Ruby-on-Rails in the cloud.',
      leaving: 'Without Cause, Mass layoff',
      category: 'employee'
    },
    {
      start: new Date('2015-07-03'),
      end: new Date('2020-11-02'),
      name: 'Cober Solutions',
      description: 'Created APIs and integrated with Swagger APIs for B2B print orders of one of North Amercia`s largest printers. Created a multi site warehousing system using jQuery, Bootstrap, MySQL, PHP and Laravel. Created order tracking system and unified several different systems to track all orders through the printing plants. Hosting was on virtualized machines and kept local for security issues.',
      leaving: 'Without Cause during Covid',
      category: 'employee'
    },
    {
      start: new Date('2021-01-03'),
      end: new Date('2023-11-21'),
      name: 'Tulip Retail',
      description: 'Worked on the Well.ca stack on the ecommerce team. Helped integrate Beanstream payment system to double our ecommerce clients. Shared learning via tech talks, hackdays, video reviews and tech book reviews.',
      leaving: 'Without Cause, Mass layoff',
      category: 'employee'
    },
    {
      start: new Date('2011-03-28'),
      end: null,
      name: 'Guelph PHP User Group',
      description: 'Guelph, Kitchener, Waterloo PHP User Group. Hosted by Well at the begining and Vehikl. Usually a guest speaker, and usually about PHP. Have done group coding sessions and some meetings are social.',
      category: 'user group'
    },
    {
      start: new Date('2014-01-14'),
      end: null,
      name: 'DevHouse Waterloo',
      description: 'A place to demo projects, anyone can demonstrate, sometimes there is a time limit. Food, drinks and social afterwards. Went online during Covid.',
      category: 'user group'
    },
    {
      start: new Date('2010-10-21'),
      end: new Date('2013-11-05'),
      name: 'Startup Drinks',
      description: 'Tech startup social at Chansaw in Kitchener',
      category: 'user group'
    },
    {
      start: new Date('2015-02-14'),
      end: new Date('2016-09-08'),
      name: 'The Front Edge',
      description: 'A web frontend focused meetup. I gave a talk on hackathons at one meeting. Hosted by Axonify.',
      category: 'user group'
    },
    {
      start: new Date('2013-11-11'),
      end: new Date('2019-09-05'),
      name: 'HackerNest Kitchener-Waterloo',
      description: 'A tech social hosted by a different business each time. This group is global and has local organizations. Drinks and snacks provided. Anouncements in the middle for other tech events.',
      category: 'user group'
    },
    {
      start: new Date('2012-06-21'),
      end: null,
      name: 'UX Waterloo',
      description: 'User iterface focused talks. Sometimes atendees present projects, other times group work. They hold and annual UX confrence.',
      category: 'user group'
    },
    {
      start: new Date('2011-01-21'),
      end: null,
      name: 'Agile/Lean P2P',
      description: 'A wide variety of topics. Sometimes interactive. Usually a speaker. Hosted in different public spaces.',
      category: 'user group'
    },
    {
      start: new Date('2018-05-29'),
      end: null,
      name: 'Indie Game Development P2P',
      description: 'Work on and demo games, annual game dev challenge.',
      category: 'user group'
    },
    {
      start: new Date(),
      end: null,
      name: 'MobileWrx',
      description: 'Created a mobile app for Blackberry that displayed barcodes for couponing and event ticketing.',
      category: 'founder'
    },
    {
      start: new Date(),
      end: null,
      name: 'GrabOp',
      description: 'Created a Php, MySQL, webapp for the gig economy.',
      category: 'founder'
    },
    {
      start: new Date(),
      end: null,
      name: 'REES',
      description: 'Created a service recording and reporting stand alone application for non profit clients using Java.',
      category: 'volunteer'
    },
    {
      start: new Date(),
      end: null,
      name: 'Basics',
      description: 'Created a searchable filterable web interface for product and sales data using PHP, MySQL, HTML, CSS, jQuery, Gitlab.',
      category: 'contractor'
    },
    {
      start: new Date(),
      end: null,
      name: 'Victoria Motorcycle Salvage',
      description: 'Created a searchable filterable web interface for motorcycle parts using an Access database.',
      category: 'contractor'
    },
    {
      start: new Date(),
      end: null,
      name: 'Rockstar Music',
      description: 'Created a custom event calendar from an API that was returning HTML.',
      category: 'contractor'
    },
    {
      start: new Date(),
      end: null,
      name: 'Georgian Bay Metis Council',
      description: 'Helped customize existing WordPress website. Tutored staff on how to make future changes.',
      category: 'contractor'
    },
    {
      start: new Date(),
      end: null,
      name: 'Barrie Computer and Technology Club',
      description: 'A group of 10 to 15 talking about new software and presenting to each other. Lot of Q and A about basic computer skills.',
      category: 'user group'
    },
    {
      start: new Date(),
      end: null,
      name: 'Midland Makers',
      description: 'A group of crafters and engineers that meet up around the Midland Library Makerspace.',
      category: 'user group'
    },
    {
      start: new Date(),
      end: null,
      name: 'South Georgian Bay Amateur Radio Club',
      description: 'A group of amature radio operators that maintain local repeaters and gather for a monthly meal.',
      category: 'user group'
    },
    {
      start: new Date(),
      end: null,
      name: 'MLH Hackathons',
      description: 'I volunteer as a mentor and teach lessons at hackathons. I float around various teams helping them get unstuck. I tought lessons on retaining information in a web app.',
      category: 'volunteer'
    },
    {
      start: new Date(),
      end: null,
      name: 'Conestoga College Kitchener',
      description: 'I volunteer as a computer science toutor teaching C#, presenting skills and interviewing skills.',
      category: 'volunteer'
    }
  ];
  
  const categories = Array.from(new Set(events.map((event) => event.category )));
  return (
    <div className="App">
      <nav>
        {categories.map((category) => <Link key={category} to={category}>{category}</Link>)}
      </nav>
      <section id='header'>
        <h1>Chris Carr's Developer Portfolio</h1>
      </section>
      <section>
        <h1>Timeline</h1>
        {events.map((event) => {
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
      </section>
    </div>
  );
}

export default App;
