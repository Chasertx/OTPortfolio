import './style.css'

const experience = [
  {
    role: 'Handyman Services, Self-Employed',
    period: 'Jan 2021 - Current',
    track: 'construction',
    detail: 'Provide independent solutions for residential and commercial remodel projects.'
  },
  {
    role: 'Master Plumber\'s Assistant, Quick Rooter Plumbing',
    period: 'Jan 2020 - May 2021, Aug 2015 - May 2016',
    track: 'construction',
    detail: 'Assisted with plumbing installation and repair for residential and commercial properties.'
  },
  {
    role: 'Senior Field Team Leader, GCHQ',
    period: 'Jan 2019 - Oct 2019',
    track: 'leadership',
    detail: 'Educated residents on healthcare initiatives and solution pathways for chronic conditions.'
  },
  {
    role: 'Carpenter\'s Assistant, Fine Renovations Inc.',
    period: 'Nov 2017 - Jul 2018',
    track: 'construction',
    detail: 'Supported custom home remodeling across framing, roofing, flooring, tile, painting, and sheetrock.'
  },
  {
    role: 'Carpenter\'s Assistant, Peace of Mind Construction',
    period: 'May 2016 - Nov 2017',
    track: 'construction',
    detail: 'Assisted in all phases of residential remodeling and construction.'
  },
  {
    role: 'Assistant Director of Athletic Performance, Mississippi Sports Medicine & Orthopedic Center',
    period: 'Jan 2014 - Aug 2015',
    track: 'performance',
    detail: 'Led athletic-performance initiatives, staffing support, and program outcomes for clients.'
  },
  {
    role: 'Sales Consultant, Watson Quality Ford',
    period: 'May 2013 - Oct 2013',
    track: 'leadership',
    detail: 'Guided customers through vehicle purchases with a focus on new model specialization and service quality.'
  },
  {
    role: 'Athletic Performance Specialist, Mississippi Sports Medicine & Orthopedic Center',
    period: 'Mar 2011 - Aug 2012',
    track: 'performance',
    detail: 'Trained staff, managed productivity, supervised programs, and developed client relations.'
  },
  {
    role: 'Business Director and Sports Performance Director, Velocity Sports Performance',
    period: '2009 - 2011',
    track: 'leadership',
    detail: 'Directed marketing and sales, hosted events, supervised staff, and trained elite athletes.'
  },
  {
    role: 'Head Performance Coach, Velocity Sports Performance',
    period: 'Mar 2007 - Feb 2009',
    track: 'performance',
    detail: 'Designed strength and conditioning programs with a focus on movement and athletic performance.'
  },
  {
    role: 'Guest Lecturer, Mississippi College Department of Kinesiology',
    period: '2009 - 2013',
    track: 'performance',
    detail: 'Supported faculty instruction on biomechanics, human performance, and professional development.'
  },
  {
    role: 'Personal Trainer and Fitness Staff, Courthouse Racquet & Fitness',
    period: 'Mar 2005 - Jun 2007',
    track: 'performance',
    detail: 'Directed fitness programs, coached clients, and supported daily gym operations.'
  }
]

const skills = [
  'Residential & Commercial Plumbing',
  'Carpentry and Remodeling',
  'Strength and Conditioning',
  'Team Leadership and Staff Development',
  'Business Management and Marketing',
  'Public Speaking and Training Delivery',
  'Sales and Customer Relations',
  'Health, Wellness, and Nutrition'
]

document.querySelector('#app').innerHTML = `
  <div class="bg-mesh" aria-hidden="true"></div>
  <div class="grain" aria-hidden="true"></div>
  <header class="topbar">
    <div class="brand-wrap">
      <p class="brand-eyebrow">Portfolio</p>
      <div class="brand">Joseph Wesley Carnegie</div>
    </div>
    <nav>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#experience">Experience</a>
      <a href="#education">Education</a>
    </nav>
  </header>

  <main>
    <section class="hero reveal" id="about">
      <div class="hero-intro">
        <p class="kicker">Construction. Performance. Leadership.</p>
        <h1>Versatile Professional with Multi-Industry Impact</h1>
        <p class="intro">
          Experienced across construction trades, plumbing, athletic performance, coaching,
          and business leadership. Known for adaptability, clear communication, and consistent results.
        </p>
        <div class="hero-points">
          <span>Residential and Commercial Projects</span>
          <span>Athlete Performance Development</span>
          <span>Team Building and Client Relationships</span>
        </div>
      </div>
      <div class="hero-panel" aria-hidden="true">
        <div class="monogram">JWC</div>
        <p>Builder</p>
        <p>Coach</p>
        <p>Leader</p>
      </div>
      <div class="hero-cards">
        <article>
          <h2>15+ Years</h2>
          <p>Hands-on and leadership experience</p>
        </article>
        <article>
          <h2>3 Domains</h2>
          <p>Construction, performance, and operations</p>
        </article>
        <article>
          <h2>People-First</h2>
          <p>Coaching, training, and client-focused delivery</p>
        </article>
      </div>
    </section>

    <section class="reveal" id="skills">
      <div class="section-title-wrap">
        <h3>Core Skills</h3>
        <p>Capabilities sharpened across trades, sport, and business environments.</p>
      </div>
      <div class="pill-grid">
        ${skills.map((skill) => `<span class="pill">${skill}</span>`).join('')}
      </div>
    </section>

    <section class="reveal" id="experience">
      <div class="section-head">
        <h3>Work History</h3>
        <div class="filters" role="group" aria-label="Experience category filters">
          <button class="filter is-active" data-filter="all" type="button">All</button>
          <button class="filter" data-filter="construction" type="button">Construction</button>
          <button class="filter" data-filter="performance" type="button">Performance</button>
          <button class="filter" data-filter="leadership" type="button">Leadership</button>
        </div>
      </div>
      <div class="timeline" id="timeline"></div>
    </section>

    <section class="reveal" id="education">
      <div class="section-title-wrap">
        <h3>Education and Certifications</h3>
        <p>Formal training supporting performance science and coaching practice.</p>
      </div>
      <div class="edu-grid">
        <article>
          <h4>B.S. in Kinesiology</h4>
          <p>Mississippi College, Minor in Nutrition, 2009</p>
        </article>
        <article>
          <h4>USAW Certification</h4>
          <p>Sports Performance Coach Certification, 2009</p>
        </article>
        <article>
          <h4>ISSA Certification</h4>
          <p>Personal Training Certification, 2006</p>
        </article>
      </div>
    </section>
  </main>

  <footer>
    <p>Portfolio built from resume highlights for web presentation.</p>
    <p><span id="year"></span> Joseph Wesley Carnegie</p>
  </footer>
`

const timelineEl = document.querySelector('#timeline')
const filterEls = Array.from(document.querySelectorAll('.filter'))

function renderTimeline(filter = 'all') {
  const visible = filter === 'all'
    ? experience
    : experience.filter((item) => item.track === filter)

  timelineEl.innerHTML = visible
    .map(
      (item) => `
      <article class="timeline-item reveal" data-track="${item.track}">
        <p class="period">${item.period}</p>
        <h4>${item.role}</h4>
        <p class="track">${item.track}</p>
        <p>${item.detail}</p>
      </article>
    `
    )
    .join('')

  observeReveal()
}

filterEls.forEach((btn) => {
  btn.addEventListener('click', () => {
    filterEls.forEach((item) => item.classList.remove('is-active'))
    btn.classList.add('is-active')
    renderTimeline(btn.dataset.filter)
  })
})

function observeReveal() {
  const revealEls = document.querySelectorAll('.reveal')
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.2 }
  )

  revealEls.forEach((el) => observer.observe(el))
}

document.querySelector('#year').textContent = new Date().getFullYear()
renderTimeline()
observeReveal()
