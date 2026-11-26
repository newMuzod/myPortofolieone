import { useState } from 'react';
import { ArrowUpRight, Dribbble, Github, Instagram, Linkedin, Menu, X } from 'lucide-react';

const skills = ['Brand identity', 'UI / UX design', 'Art direction', 'Web design', 'Motion', 'Creative coding'];

const projects = [
  { number: '01', title: 'Northline Studio', type: 'Brand identity', year: '2024', size: 'large', tone: 'lime' },
  { number: '02', title: 'Auralis', type: 'Digital product', year: '2024', size: 'small', tone: 'blue' },
  { number: '03', title: 'Frame / 24', type: 'Editorial direction', year: '2023', size: 'small', tone: 'sand' },
  { number: '04', title: 'Noma House', type: 'Web experience', year: '2023', size: 'wide', tone: 'orange' },
];

function Portrait() {
  return (
    <div className="portrait-wrap" aria-label="Ozodbek Musoev portreti">
      <div className="portrait-glow" />
      <div className="portrait-grid" />
      <svg className="portrait" viewBox="0 0 360 460" role="img" aria-label="Stilizatsiyalangan portret">
        <defs>
          <linearGradient id="shirt" x1="0" x2="1">
            <stop offset="0" stopColor="#18251e" />
            <stop offset="1" stopColor="#4f7d47" />
          </linearGradient>
          <linearGradient id="skin" x1="0" x2="1">
            <stop offset="0" stopColor="#c58f6e" />
            <stop offset="1" stopColor="#f0ba8b" />
          </linearGradient>
        </defs>
        <path d="M40 460c8-88 46-130 98-143h84c52 13 91 55 98 143H40Z" fill="url(#shirt)" />
        <path d="M128 280c-2-23 2-43 8-56h91c7 16 10 35 8 56l-30 36h-48l-29-36Z" fill="url(#skin)" />
        <path d="M111 143c0-71 31-108 74-108 55 0 76 42 76 107v39c-9 62-39 91-76 91s-68-30-75-91v-38Z" fill="url(#skin)" />
        <path d="M111 151c-11-92 26-133 81-133 54 0 82 36 73 123l-25-40c-27 17-70 20-111 4l-18 46Z" fill="#131b1c" />
        <path d="M119 103c22-47 61-64 107-32" stroke="#374d46" strokeWidth="11" fill="none" strokeLinecap="round" />
        <path d="M138 169c14-9 28-8 39 0M210 169c14-9 28-8 39 0" stroke="#202a28" strokeWidth="6" fill="none" strokeLinecap="round" />
        <circle cx="162" cy="170" r="4" fill="#15201e" /><circle cx="228" cy="170" r="4" fill="#15201e" />
        <path d="M176 216c12 8 26 8 38 0" stroke="#8f5648" strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M151 272c20 18 52 19 75 0l-7 44h-62l-6-44Z" fill="#b77d63" opacity=".5" />
        <path d="M127 319l51 50 54-50" fill="none" stroke="#9bdc55" strokeWidth="2" opacity=".8" />
      </svg>
      <div className="portrait-label">OM <span>01 / 01</span></div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <nav className="nav shell">
        <a href="#top" className="logo" onClick={closeMenu}>OM<span>.</span></a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menyuni ochish">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#work" onClick={closeMenu}>Ishlar</a>
          <a href="#about" onClick={closeMenu}>Men haqimda</a>
          <a href="#contact" onClick={closeMenu}>Aloqa</a>
          <a href="mailto:hello@ozodbek.uz" className="nav-cta" onClick={closeMenu}>Loyiha boshlaymiz <ArrowUpRight size={15} /></a>
        </div>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> Toshkent / O‘zbekiston <span className="eyebrow-line" /> 2024</p>
          <h1>Ozodbek<br /><em>Musoev</em></h1>
          <p className="hero-description">Brendlar, raqamli mahsulotlar va odamlar eslab qoladigan vizual hikoyalar yarataman.</p>
          <a href="#work" className="text-link">Tanlangan ishlar <ArrowUpRight size={18} /></a>
        </div>
        <Portrait />
        <div className="hero-index">01 <span>/</span> 04</div>
      </section>

      <section className="skills shell" aria-label="Ko‘nikmalar">
        <p className="section-kicker">Nimalar qilaman</p>
        <div className="skills-list">{skills.map((skill, index) => <span key={skill}><b>0{index + 1}</b>{skill}</span>)}</div>
      </section>

      <section className="work shell" id="work">
        <div className="section-heading"><div><p className="section-kicker">Tanlangan loyihalar</p><h2>Yaqinroq <em>ko‘ring.</em></h2></div><p className="heading-note">G‘oya va shakl o‘rtasida<br />eng yaxshi yechimlar.</p></div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className={`project-card ${project.size} ${project.tone}`} key={project.title}>
              <div className="project-top"><span>{project.number}</span><ArrowUpRight size={19} /></div>
              <div className="project-art"><div className="art-mark">{project.title.split(' ').map((word) => word[0]).join('')}</div><span className="art-caption">{project.type}</span></div>
              <div className="project-bottom"><div><h3>{project.title}</h3><p>{project.type}</p></div><span>{project.year}</span></div>
            </article>
          ))}
        </div>
      </section>

      <section className="about shell" id="about">
        <div className="about-visual"><span>ABOUT / 02</span><div className="about-monogram">OM</div></div>
        <div className="about-copy"><p className="section-kicker">Men haqimda</p><h2>Oddiylik — bu<br /><em>aniqlik.</em></h2><p>Men Ozodbek Musoev — mustaqil dizayner va vizual yo‘nalish yaratuvchisiman. Har bir loyihada chiroyli ko‘rinishdan tashqari, aniq fikr va foydali tajriba bo‘lishiga ishonaman.</p><p className="muted">Bugun yangi brendlar va jasur g‘oyalar bilan ishlayapman.</p><a href="mailto:hello@ozodbek.uz" className="text-link">Birga ishlaymiz <ArrowUpRight size={18} /></a></div>
      </section>

      <footer className="footer shell" id="contact">
        <div><p className="section-kicker">Aloqa</p><h2>Biror narsa<br /><em>yaratamizmi?</em></h2></div>
        <div className="footer-right"><a className="email" href="mailto:hello@ozodbek.uz">hello@ozodbek.uz <ArrowUpRight size={21} /></a><div className="socials"><a href="https://www.instagram.com" aria-label="Instagram"><Instagram size={18} /></a><a href="https://www.linkedin.com" aria-label="LinkedIn"><Linkedin size={18} /></a><a href="https://github.com" aria-label="GitHub"><Github size={18} /></a><a href="https://dribbble.com" aria-label="Dribbble"><Dribbble size={18} /></a></div></div>
        <div className="footer-base"><span>© 2024 Ozodbek Musoev</span><span>Made with intention / 41°18′N 69°16′E</span></div>
      </footer>
    </main>
  );
}

export default App;
