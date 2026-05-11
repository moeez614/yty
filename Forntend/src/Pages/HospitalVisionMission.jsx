import { useState, useEffect, useRef } from "react";

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');

  .hvm * { margin: 0; padding: 0; box-sizing: border-box; }

  .hvm {
    --navy: #0a1628;
    --navy-mid: #0f1e35;
    --gold: #c9a84c;
    --gold-lt: #e8c97a;
    --gold-pale: #f3e8c8;
    --cream: #faf8f3;
    --white: #ffffff;
    --muted: #8a95a3;
    --text: #1a2332;
    --bdr: rgba(201,168,76,0.18);
    font-family: 'DM Sans', sans-serif;
    background: var(--cream);
    color: var(--text);
    overflow-x: hidden;
  }

  /* HERO */
  .hvm-hero {
    position: relative;
    background: var(--navy);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 80px 24px;
    overflow: hidden;
  }
  .hvm-grid {
    position: absolute; inset: 0;
    background-image:
      linear-gradient(rgba(201,168,76,0.055) 1px, transparent 1px),
      linear-gradient(90deg, rgba(201,168,76,0.055) 1px, transparent 1px);
    background-size: 64px 64px;
  }
  .hvm-ring {
    position: absolute; border-radius: 50%;
    border: 1px solid rgba(201,168,76,0.1);
    top: 50%; left: 50%; transform: translate(-50%,-50%);
  }
  .hvm-hero-inner {
    position: relative; z-index: 2;
    text-align: center; max-width: 840px;
  }
  .hvm-eyebrow {
    display: inline-flex; align-items: center; gap: 12px;
    font-size: 10.5px; font-weight: 500;
    letter-spacing: 0.26em; text-transform: uppercase;
    color: var(--gold); margin-bottom: 36px;
  }
  .hvm-eyebrow span { display: block; width: 36px; height: 1px; background: var(--gold); opacity: 0.45; }
  .hvm-htitle {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(56px, 9vw, 100px);
    font-weight: 300; line-height: 1.0;
    letter-spacing: -0.025em; color: var(--white);
    margin-bottom: 18px;
  }
  .hvm-htitle em { font-style: italic; color: var(--gold-lt); }
  .hvm-hsub {
    font-size: 13px; font-weight: 300;
    letter-spacing: 0.22em; text-transform: uppercase;
    color: rgba(255,255,255,0.38); margin-bottom: 52px;
  }
  .hvm-vline {
    width: 1px; height: 72px;
    background: linear-gradient(var(--gold), transparent);
    margin: 0 auto; opacity: 0.45;
  }

  /* NAV */
  .hvm-nav {
    position: sticky; top: 0; z-index: 100;
    background: rgba(10,22,40,0.97);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--bdr);
    display: flex; justify-content: center;
  }
  .hvm-nb {
    background: none; border: none; border-bottom: 2px solid transparent;
    font-family: 'DM Sans', sans-serif;
    font-size: 11.5px; font-weight: 500;
    letter-spacing: 0.17em; text-transform: uppercase;
    color: rgba(255,255,255,0.38);
    padding: 18px 30px; cursor: pointer;
    transition: color 0.25s, border-color 0.25s;
  }
  .hvm-nb:hover { color: rgba(255,255,255,0.72); }
  .hvm-nb.on { color: var(--gold); border-bottom-color: var(--gold); }

  /* GENERIC SECTION */
  .hvm-sec { padding: 120px 24px; max-width: 1100px; margin: 0 auto; }
  .hvm-shead { display: flex; align-items: flex-start; gap: 56px; margin-bottom: 80px; }
  .hvm-snum {
    font-family: 'Cormorant Garamond', serif;
    font-size: 116px; font-weight: 300;
    color: var(--gold-pale); line-height: 1;
    flex-shrink: 0; margin-top: -14px; user-select: none;
  }
  .hvm-stag {
    font-size: 10.5px; font-weight: 500;
    letter-spacing: 0.25em; text-transform: uppercase;
    color: var(--gold); display: block; margin-bottom: 16px;
  }
  .hvm-stitle {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(38px, 5vw, 62px);
    font-weight: 300; line-height: 1.1;
    letter-spacing: -0.02em; color: var(--navy);
  }
  .hvm-stitle em { font-style: italic; color: var(--gold); }
  .hvm-sbody {
    font-size: 16.5px; font-weight: 300;
    line-height: 1.88; color: #4d5e72;
    max-width: 660px; margin-top: 22px;
  }

  /* VISION CARD */
  .hvm-vcard {
    background: var(--navy); border-radius: 2px;
    padding: 60px 68px; position: relative;
    overflow: hidden; margin-bottom: 56px;
  }
  .hvm-vcard::before {
    content: '"'; position: absolute;
    top: -24px; left: 44px;
    font-family: 'Cormorant Garamond', serif;
    font-size: 280px; line-height: 1;
    color: rgba(201,168,76,0.07);
    pointer-events: none;
  }
  .hvm-vcard-lbl {
    font-size: 10.5px; font-weight: 500;
    letter-spacing: 0.26em; text-transform: uppercase;
    color: var(--gold); margin-bottom: 28px;
    display: flex; align-items: center; gap: 14px;
  }
  .hvm-vcard-lbl::after {
    content: ''; flex: 1; height: 1px;
    background: var(--bdr); max-width: 70px;
  }
  .hvm-vquote {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(22px, 2.8vw, 34px);
    font-weight: 300; font-style: italic;
    color: var(--white); line-height: 1.55;
    position: relative; z-index: 1;
  }

  /* PILLARS */
  .hvm-pillars {
    display: grid; grid-template-columns: repeat(3, 1fr);
    gap: 1px; background: rgba(201,168,76,0.14);
    border: 1px solid rgba(201,168,76,0.14);
  }
  .hvm-pillar {
    background: var(--white); padding: 48px 36px;
    transition: background 0.3s;
  }
  .hvm-pillar:hover { background: var(--cream); }
  .hvm-picon {
    width: 46px; height: 46px; border-radius: 50%;
    border: 1px solid var(--bdr);
    display: flex; align-items: center; justify-content: center;
    font-size: 19px; margin-bottom: 26px; color: var(--gold);
  }
  .hvm-pnum {
    font-family: 'Cormorant Garamond', serif;
    font-size: 12.5px; font-weight: 400;
    color: var(--gold); letter-spacing: 0.1em;
    display: block; margin-bottom: 12px;
  }
  .hvm-ptitle {
    font-family: 'Cormorant Garamond', serif;
    font-size: 25px; font-weight: 400;
    color: var(--navy); margin-bottom: 14px; line-height: 1.2;
  }
  .hvm-ptext {
    font-size: 13.5px; font-weight: 300;
    color: var(--muted); line-height: 1.78;
  }

  /* STATS */
  .hvm-stats-wrap { background: var(--navy); padding: 60px 24px; }
  .hvm-stats {
    max-width: 1100px; margin: 0 auto;
    display: grid; grid-template-columns: repeat(4,1fr);
    gap: 1px; background: rgba(201,168,76,0.1);
  }
  .hvm-stat {
    background: var(--navy-mid);
    padding: 40px 28px; text-align: center;
  }
  .hvm-sval {
    font-family: 'Cormorant Garamond', serif;
    font-size: 54px; font-weight: 300;
    color: var(--gold-lt); line-height: 1; margin-bottom: 8px;
  }
  .hvm-slbl {
    font-size: 11px; font-weight: 400;
    letter-spacing: 0.14em; text-transform: uppercase;
    color: rgba(255,255,255,0.36);
  }

  /* MISSION */
  .hvm-mlayout {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 80px; align-items: start;
  }
  .hvm-mstmt {
    border-left: 2px solid var(--gold); padding-left: 36px;
  }
  .hvm-mtext {
    font-family: 'Cormorant Garamond', serif;
    font-size: 27px; font-weight: 300;
    line-height: 1.62; color: var(--navy);
  }
  .hvm-mpara {
    font-size: 15px; font-weight: 300;
    line-height: 1.9; color: #546070;
    margin-bottom: 24px;
  }

  /* VALUES */
  .hvm-values-wrap { padding: 0 24px 120px; }
  .hvm-values-inner { max-width: 1100px; margin: 0 auto; }
  .hvm-vrow {
    display: flex; align-items: center; gap: 20px;
    padding: 22px 0; border-bottom: 1px solid rgba(0,0,0,0.055);
    transition: all 0.2s; cursor: default;
  }
  .hvm-vrow:first-child { border-top: 1px solid rgba(0,0,0,0.055); }
  .hvm-vrow:hover .hvm-vlbl { color: var(--gold); }
  .hvm-vdot { width: 6px; height: 6px; border-radius: 50%; background: var(--gold); flex-shrink: 0; }
  .hvm-vlbl {
    font-family: 'Cormorant Garamond', serif;
    font-size: 22px; font-weight: 400;
    color: var(--navy); flex: 1; transition: color 0.2s;
  }
  .hvm-vdesc {
    font-size: 13px; font-weight: 300;
    color: var(--muted); text-align: right;
    max-width: 175px;
  }

  /* COMMITMENTS */
  .hvm-cgrid {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 2px; margin-top: 64px;
    background: rgba(201,168,76,0.1);
  }
  .hvm-ccard {
    background: var(--white); padding: 48px 44px;
    position: relative; transition: background 0.25s;
  }
  .hvm-ccard:hover { background: #fdfcf7; }
  .hvm-cnum {
    font-family: 'Cormorant Garamond', serif;
    font-size: 60px; font-weight: 300;
    color: var(--gold-pale); line-height: 1;
    position: absolute; top: 20px; right: 28px;
    user-select: none;
  }
  .hvm-ctitle {
    font-family: 'Cormorant Garamond', serif;
    font-size: 27px; font-weight: 400;
    color: var(--navy); margin-bottom: 16px;
  }
  .hvm-ctext {
    font-size: 14px; font-weight: 300;
    line-height: 1.88; color: #6a7a8b;
  }

  /* FOOTER */
  .hvm-footer {
    background: var(--navy); padding: 60px 24px;
    text-align: center; border-top: 1px solid var(--bdr);
  }
  .hvm-flogo {
    font-family: 'Cormorant Garamond', serif;
    font-size: 30px; font-weight: 300;
    color: var(--white); letter-spacing: 0.1em; margin-bottom: 8px;
  }
  .hvm-ftag {
    font-size: 11px; letter-spacing: 0.22em; text-transform: uppercase;
    color: rgba(255,255,255,0.28); margin-bottom: 32px;
  }
  .hvm-fdiv {
    width: 52px; height: 1px; background: var(--gold);
    margin: 0 auto 24px; opacity: 0.38;
  }
  .hvm-fcopy { font-size: 11.5px; color: rgba(255,255,255,0.18); }

  /* ANIMATIONS */
  .hvm-fu { opacity: 0; transform: translateY(28px); transition: opacity 0.7s ease, transform 0.7s ease; }
  .hvm-fu.hvm-v { opacity: 1; transform: none; }
  .hvm-fu.d1 { transition-delay: 0.1s; }
  .hvm-fu.d2 { transition-delay: 0.2s; }
  .hvm-fu.d3 { transition-delay: 0.32s; }

  @media (max-width: 740px) {
    .hvm-pillars { grid-template-columns: 1fr; }
    .hvm-mlayout { grid-template-columns: 1fr; gap: 44px; }
    .hvm-stats { grid-template-columns: 1fr 1fr; }
    .hvm-cgrid { grid-template-columns: 1fr; }
    .hvm-shead { flex-direction: column; gap: 8px; }
    .hvm-snum { font-size: 68px; }
    .hvm-vcard { padding: 36px 28px; }
  }
`;

function FadeUp({ children, cls = "", delay = "" }) {
  const ref = useRef(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const ob = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setOn(true); ob.disconnect(); } },
      { threshold: 0.12 }
    );
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, []);
  return <div ref={ref} className={`hvm-fu ${delay} ${on ? "hvm-v" : ""} ${cls}`}>{children}</div>;
}

const PILLARS = [
  { icon: "✦", num: "01", title: "Patient-Centred Excellence", text: "Every decision, every protocol, every innovation begins and ends with the well-being of those who entrust us with their care." },
  { icon: "◈", num: "02", title: "Clinical Innovation", text: "We relentlessly pursue the frontiers of medical science, integrating evidence-based advances to redefine what is possible." },
  { icon: "◉", num: "03", title: "Compassionate Service", text: "Beyond diagnoses lies the human dimension of healing — we honour it in every interaction, without exception." },
];

const VALUES = [
  { label: "Integrity", desc: "Unwavering ethical standards" },
  { label: "Precision", desc: "Diagnostic & clinical accuracy" },
  { label: "Empathy", desc: "Human-first approach" },
  { label: "Innovation", desc: "Continuous advancement" },
  { label: "Accountability", desc: "Transparent outcomes" },
  { label: "Equity", desc: "Care for all, without barrier" },
];

const STATS = [
  { val: "1973", lbl: "Year Established" },
  { val: "450+", lbl: "Specialist Physicians" },
  { val: "98.4%", lbl: "Patient Satisfaction" },
  { val: "38", lbl: "Medical Specialties" },
];

const COMMITS = [
  { title: "Clinical Excellence", text: "Our standards exceed national benchmarks. Every clinical pathway is evidence-based, every outcome meticulously tracked, and every protocol continuously refined through peer review." },
  { title: "Ethical Practice", text: "We uphold the highest standards of medical ethics — from transparent communication and informed consent to equitable access and end-of-life dignity." },
  { title: "Research & Education", text: "As a teaching hospital, we shape the next generation of healers through world-class education, active research programmes, and academic partnerships." },
  { title: "Community Health", text: "Our responsibility extends beyond our walls. We invest in preventive care, health literacy, and community wellness initiatives that address the root causes of illness." },
];

export default function HospitalVisionMission() {
  const [active, setActive] = useState("vision");

  const go = (id) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <style>{css}</style>
      <div className="hvm">

        {/* HERO */}
        <section className="hvm-hero">
          <div className="hvm-grid" />
          {[560, 860, 1160].map(s => (
            <div key={s} className="hvm-ring" style={{ width: s, height: s }} />
          ))}
          <div className="hvm-hero-inner">
            <div className="hvm-eyebrow">
              <span /><span style={{ background: "none", width: "auto", height: "auto", opacity: 1, letterSpacing: "inherit" }}>Allied Hospital</span><span />
            </div>
            <h1 className="hvm-htitle">Where <em>Purpose</em><br />Meets Precision</h1>
            <p className="hvm-hsub">Vision · Mission · Values</p>
            <div className="hvm-vline" />
          </div>
        </section>

        {/* NAV */}
        <nav className="hvm-nav">
          {["vision","mission","values","commitments"].map(id => (
            <button key={id} className={`hvm-nb ${active===id?"on":""}`} onClick={() => go(id)}>{id}</button>
          ))}
        </nav>

        {/* VISION */}
        <section id="vision" className="hvm-sec">
          <FadeUp>
            <div className="hvm-shead">
              <div className="hvm-snum">01</div>
              <div>
                <span className="hvm-stag">Our Vision</span>
                <h2 className="hvm-stitle">A future where<br /><em>every life</em> flourishes</h2>
                <p className="hvm-sbody">We envision a world where access to exceptional healthcare is not a privilege, but a universal right — where the convergence of human compassion and clinical mastery creates outcomes once thought impossible.</p>
              </div>
            </div>
          </FadeUp>
          <FadeUp delay="d1">
            <div className="hvm-vcard">
              <div className="hvm-vcard-lbl">Vision Statement</div>
              <p className="hvm-vquote">"To be the leading institution of healing in the region — recognised not merely for clinical excellence, but for the transformative impact we have on the lives, communities, and futures of those we serve."</p>
            </div>
          </FadeUp>
          <div className="hvm-pillars">
            {PILLARS.map((p,i) => (
              <FadeUp key={p.num} delay={`d${i+1}`}>
                <div className="hvm-pillar">
                  <div className="hvm-picon">{p.icon}</div>
                  <span className="hvm-pnum">{p.num}</span>
                  <div className="hvm-ptitle">{p.title}</div>
                  <p className="hvm-ptext">{p.text}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </section>

        {/* STATS */}
        <div className="hvm-stats-wrap">
          <div className="hvm-stats">
            {STATS.map((s,i) => (
              <FadeUp key={s.lbl} delay={`d${i+1}`}>
                <div className="hvm-stat">
                  <div className="hvm-sval">{s.val}</div>
                  <div className="hvm-slbl">{s.lbl}</div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>

        {/* MISSION */}
        <section id="mission" className="hvm-sec">
          <FadeUp>
            <div className="hvm-shead">
              <div className="hvm-snum">02</div>
              <div>
                <span className="hvm-stag">Our Mission</span>
                <h2 className="hvm-stitle">Purpose in<br /><em>every act</em> of care</h2>
              </div>
            </div>
          </FadeUp>
          <FadeUp delay="d1">
            <div className="hvm-mlayout">
              <div className="hvm-mstmt">
                <p className="hvm-mtext">To deliver compassionate, evidence-based healthcare of the highest quality — advancing medical knowledge, nurturing the healers of tomorrow, and building healthier communities through integrity, innovation, and unwavering service.</p>
              </div>
              <div>
                <p className="hvm-mpara">Our mission is lived daily in the decisions of our physicians, the dedication of our nurses, and the commitment of every individual who forms part of this institution.</p>
                <p className="hvm-mpara" style={{marginBottom:0}}>We measure success not in procedures performed, but in lives meaningfully improved — in the patient who returns home restored, the family given hope, the community made healthier.</p>
              </div>
            </div>
          </FadeUp>
        </section>

        {/* VALUES */}
        <div className="hvm-values-wrap" id="values">
          <div className="hvm-values-inner">
            <FadeUp>
              <div className="hvm-shead">
                <div className="hvm-snum">03</div>
                <div>
                  <span className="hvm-stag">Our Values</span>
                  <h2 className="hvm-stitle">The principles<br />that <em>guide us</em></h2>
                </div>
              </div>
            </FadeUp>
            <FadeUp delay="d1">
              <div>
                {VALUES.map(v => (
                  <div className="hvm-vrow" key={v.label}>
                    <div className="hvm-vdot" />
                    <div className="hvm-vlbl">{v.label}</div>
                    <div className="hvm-vdesc">{v.desc}</div>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>

        {/* COMMITMENTS */}
        <section id="commitments" className="hvm-sec">
          <FadeUp>
            <div className="hvm-shead">
              <div className="hvm-snum">04</div>
              <div>
                <span className="hvm-stag">Our Commitments</span>
                <h2 className="hvm-stitle">Promises we<br /><em>keep</em>, every day</h2>
                <p className="hvm-sbody">Vision and mission only have meaning when translated into concrete commitments — binding obligations that shape how we allocate resources, make decisions, and hold ourselves accountable.</p>
              </div>
            </div>
          </FadeUp>
          <div className="hvm-cgrid">
            {COMMITS.map((c,i) => (
              <FadeUp key={c.title} delay={`d${(i%2)+1}`}>
                <div className="hvm-ccard">
                  <div className="hvm-cnum">0{i+1}</div>
                  <div className="hvm-ctitle">{c.title}</div>
                  <p className="hvm-ctext">{c.text}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="hvm-footer">
          <div className="hvm-flogo">Allied Hospital</div>
          <div className="hvm-ftag">Excellence · Compassion · Innovation</div>
          <div className="hvm-fdiv" />
        </footer>

      </div>
    </>
  );
}
