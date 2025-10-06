
import React from 'react'

const injectStyles = () => {
  const css = `
  :root{
    --bg:#0f1724;
    --card:#0b1220;
    --accent:#4f46e5;
    --muted:#94a3b8;
    --glass: rgba(255,255,255,0.03);
    --radius: 14px;
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
  }
  *{box-sizing:border-box}
  body{margin:0;background:linear-gradient(180deg,#071029 0%, #071a2a 100%);color:#e6eef8}
  .container{max-width:1200px;margin:0 auto;padding:28px}

  /* Navbar */
  .navbar{display:flex;align-items:center;justify-content:space-between;padding:10px 0}
  .logo{display:flex;gap:12px;align-items:center;font-weight:700}
  .logo .mark{width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,var(--accent),#06b6d4);display:flex;align-items:center;justify-content:center;font-weight:800;color:white}
  .navlinks{display:flex;gap:18px;align-items:center}
  .navlinks a{color:var(--muted);text-decoration:none;font-weight:600}
  .cta{background:linear-gradient(90deg,var(--accent),#06b6d4);padding:10px 16px;border-radius:10px;color:white;font-weight:700;border:none}

  /* Hero */
  .hero{display:grid;grid-template-columns:1fr 420px;gap:32px;align-items:center;margin-top:22px}
  .hero-headline{font-size:34px;line-height:1.03;margin:0 0 12px}
  .hero-sub{color:var(--muted);margin-bottom:18px}
  .hero-ctas{display:flex;gap:12px}
  .secondary{background:transparent;border:1px solid rgba(255,255,255,0.06);padding:10px 14px;border-radius:10px;color:var(--muted)}
  .banner{background:linear-gradient(135deg, rgba(79,70,229,0.12), rgba(6,182,212,0.06));border-radius:18px;padding:22px;display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:280px}
  .illus{width:100%;height:220px;border-radius:12px;background: radial-gradient(circle at 30% 20%, rgba(79,70,229,0.18), transparent 10%), radial-gradient(circle at 70% 80%, rgba(6,182,212,0.12), transparent 12%), linear-gradient(180deg,#083048 0%, #052029 100%);display:flex;align-items:center;justify-content:center;color: #cfefff}
  .illus h3{margin:0;font-size:18px}

  /* Features */
  .features{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;margin-top:28px}
  .card{background:var(--glass);padding:18px;border-radius:12px;backdrop-filter: blur(6px);border:1px solid rgba(255,255,255,0.03)}
  .card h4{margin:8px 0 0}
  .card p{margin:8px 0 0;color:var(--muted);font-size:14px}
  .icon{width:48px;height:48px;border-radius:10px;background:linear-gradient(180deg,#0b1220,rgba(255,255,255,0.02));display:flex;align-items:center;justify-content:center}

  /* Testimonials */
  .testimonials{display:flex;gap:14px;margin-top:30px}
  .tcard{flex:1;background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));padding:14px;border-radius:12px}
  .tmeta{display:flex;gap:12px;align-items:center}
  .avatar{width:44px;height:44px;border-radius:50%;background:linear-gradient(90deg,#06b6d4,#4f46e5);display:flex;align-items:center;justify-content:center;font-weight:700}
  .tname{font-weight:700}
  .ttext{color:var(--muted);margin-top:8px;font-size:14px}

  /* Footer */
  footer{margin-top:36px;padding:22px;border-top:1px solid rgba(255,255,255,0.03)}
  .footer-grid{display:grid;grid-template-columns:1fr 1fr;gap:18px}
  .small{color:var(--muted);font-size:13px}

  /* Responsive */
  @media (max-width:980px){
    .hero{grid-template-columns:1fr 360px}
    .features{grid-template-columns:repeat(2,1fr)}
  }
  @media (max-width:720px){
    .container{padding:18px}
    .hero{grid-template-columns:1fr;gap:18px}
    .banner{min-height:200px}
    .illus{height:160px}
    .features{grid-template-columns:1fr}
    .testimonials{flex-direction:column}
    .navlinks{display:none}
  }

  /* small utilities */
  .muted{color:var(--muted)}
  `
  const style = document.createElement('style')
  style.setAttribute('id','ielts-styles')
  style.innerHTML = css
  if (!document.getElementById('ielts-styles')) document.head.appendChild(style)
}

injectStyles()

const Icon = ({children}) => (
  <div className="icon" aria-hidden>
    {children}
  </div>
)

const Navbar = () => (
  <nav className="navbar container" aria-label="Main Navigation">
    <div className="logo">
      <div className="mark">I</div>
      <div>
        <div style={{fontSize:16}}>IELTS <span style={{color:'var(--accent)'}}>Pro</span></div>
        <div style={{fontSize:12,color:'var(--muted)',marginTop:2}}>Score higher. Speak confidently.</div>
      </div>
    </div>

    <div className="navlinks" role="navigation" aria-label="Primary Links">
      <a href="#features">Features</a>
      <a href="#courses">Courses</a>
      <a href="#testimonials">Testimonials</a>
      <a href="#contact">Contact</a>
      <button className="cta" aria-label="Sign up">Enroll Now</button>
    </div>
  </nav>
)

const Hero = () => (
  <section className="hero container">
    <div>
      <h1 className="hero-headline">Achieve your target <span style={{color:'var(--accent)'}}>band score</span> with expert coaching</h1>
      <p className="hero-sub">Live tutors • Weekly mock tests • AI Band predictor • Personalized feedback to help you improve every week.</p>
      <div className="hero-ctas">
        <button className="cta">Get Started</button>
        <button className="secondary">Book Free Demo</button>
      </div>

      <div className="features" style={{marginTop:26}} id="features">
        <div className="card">
          <Icon>🎙️</Icon>
          <h4>Speaking Practice</h4>
          <p>One-to-one speaking drills with instant feedback and tips.</p>
        </div>
        <div className="card">
          <Icon>📝</Icon>
          <h4>Mock Tests</h4>
          <p>Timed, realistic mock tests with detailed score reports.</p>
        </div>
        <div className="card">
          <Icon>🤖</Icon>
          <h4>AI Band Score</h4>
          <p>Automatic band prediction with suggestions to improve.</p>
        </div>
        <div className="card">
          <Icon>📚</Icon>
          <h4>Personalized Study Plan</h4>
          <p>Daily micro-tasks tailored to your current level and goals.</p>
        </div>
      </div>
    </div>

    <aside>
      <div className="banner" aria-hidden>
        <div className="illus">
          <div style={{textAlign:'center'}}>
            <h3>Next batch starts in 7 days</h3>
            <p className="muted" style={{marginTop:8}}>Reserve your seat for a free demo class.</p>
            <div style={{marginTop:14}}>
              <button className="cta">Reserve Seat</button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  </section>
)

const Features = () => (
  <section className="container" style={{marginTop:18}}>
    <h3 style={{marginBottom:12}}>Why choose IELTS Pro?</h3>
    <div className="features">
      <div className="card">
        <Icon>👩‍🏫</Icon>
        <h4>Experienced Tutors</h4>
        <p>Coaches with proven success records and exam-specific strategies.</p>
      </div>
      <div className="card">
        <Icon>⏱️</Icon>
        <h4>Flexible Timings</h4>
        <p>Evening & weekend batches to fit your schedule.</p>
      </div>
      <div className="card">
        <Icon>📈</Icon>
        <h4>Progress Tracking</h4>
        <p>Weekly analytics to measure improvement and focus weak areas.</p>
      </div>
      <div className="card">
        <Icon>🌐</Icon>
        <h4>Live & Online</h4>
        <p>Attend from anywhere with the same interactive experience.</p>
      </div>
    </div>
  </section>
)

const Testimonials = () => (
  <section className="container" id="testimonials">
    <h3 style={{marginBottom:12}}>What our students say</h3>
    <div className="testimonials">
      <div className="tcard">
        <div className="tmeta">
          <div className="avatar">AR</div>
          <div>
            <div className="tname">Ananya R.</div>
            <div className="small">Band 8.0 • Completed in 8 weeks</div>
          </div>
        </div>
        <div className="ttext">The speaking drills and personalized feedback helped me structure answers confidently. My band improved from 6.5 to 8.0.</div>
      </div>

      <div className="tcard">
        <div className="tmeta">
          <div className="avatar">MK</div>
          <div>
            <div className="tname">Mohit K.</div>
            <div className="small">Band 7.5 • IELTS Pro Mock Tests</div>
          </div>
        </div>
        <div className="ttext">Mock tests were very realistic and the AI analysis pinpointed my weak grammar patterns. Highly recommended.</div>
      </div>

      <div className="tcard">
        <div className="tmeta">
          <div className="avatar">SN</div>
          <div>
            <div className="tname">Sana N.</div>
            <div className="small">Band 7.0</div>
          </div>
        </div>
        <div className="ttext">The tutors gave focused tips for each module. The study plan made it easy to practice daily without overwhelm.</div>
      </div>
    </div>
  </section>
)

const Footer = () => (
  <footer>
    <div className="container footer-grid">
      <div>
        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <div className="mark" style={{width:52,height:52,borderRadius:12,display:'flex',alignItems:'center',justifyContent:'center',background:'linear-gradient(135deg,var(--accent),#06b6d4)'}}>I</div>
          <div>
            <div style={{fontWeight:700}}>IELTS Pro</div>
            <div className="small">Online & Offline coaching • Trusted by 10,000+ students</div>
          </div>
        </div>

        <div style={{marginTop:12}} className="small">
          Email: hello@ieltspro.example<br />Phone: +91 99999 88888
        </div>
      </div>

      <div>
        <div style={{display:'flex',gap:28}}>
          <div>
            <div style={{fontWeight:700}}>Courses</div>
            <div className="small" style={{marginTop:8}}>General Training<br/>Academic<br/>One-to-One Coaching</div>
          </div>
          <div>
            <div style={{fontWeight:700}}>Quick Links</div>
            <div className="small" style={{marginTop:8}}>About • FAQ • Terms</div>
          </div>
        </div>

        <div style={{marginTop:18}} className="small">© {new Date().getFullYear()} IELTS Pro. All rights reserved.</div>
      </div>
    </div>
  </footer>
)

export default function App(){
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  )
}
