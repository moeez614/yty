import{r as e}from"./chunk-CilyBKbf.js";import{h as t,s as n}from"./index-B0t0rHNF.js";var r=e(t(),1),i=n(),a=`
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
`;function o({children:e,cls:t=``,delay:n=``}){let a=(0,r.useRef)(null),[o,s]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{let e=new IntersectionObserver(([t])=>{t.isIntersecting&&(s(!0),e.disconnect())},{threshold:.12});return a.current&&e.observe(a.current),()=>e.disconnect()},[]),(0,i.jsx)(`div`,{ref:a,className:`hvm-fu ${n} ${o?`hvm-v`:``} ${t}`,children:e})}var s=[{icon:`✦`,num:`01`,title:`Patient-Centred Excellence`,text:`Every decision, every protocol, every innovation begins and ends with the well-being of those who entrust us with their care.`},{icon:`◈`,num:`02`,title:`Clinical Innovation`,text:`We relentlessly pursue the frontiers of medical science, integrating evidence-based advances to redefine what is possible.`},{icon:`◉`,num:`03`,title:`Compassionate Service`,text:`Beyond diagnoses lies the human dimension of healing — we honour it in every interaction, without exception.`}],c=[{label:`Integrity`,desc:`Unwavering ethical standards`},{label:`Precision`,desc:`Diagnostic & clinical accuracy`},{label:`Empathy`,desc:`Human-first approach`},{label:`Innovation`,desc:`Continuous advancement`},{label:`Accountability`,desc:`Transparent outcomes`},{label:`Equity`,desc:`Care for all, without barrier`}],l=[{val:`1973`,lbl:`Year Established`},{val:`450+`,lbl:`Specialist Physicians`},{val:`98.4%`,lbl:`Patient Satisfaction`},{val:`38`,lbl:`Medical Specialties`}],u=[{title:`Clinical Excellence`,text:`Our standards exceed national benchmarks. Every clinical pathway is evidence-based, every outcome meticulously tracked, and every protocol continuously refined through peer review.`},{title:`Ethical Practice`,text:`We uphold the highest standards of medical ethics — from transparent communication and informed consent to equitable access and end-of-life dignity.`},{title:`Research & Education`,text:`As a teaching hospital, we shape the next generation of healers through world-class education, active research programmes, and academic partnerships.`},{title:`Community Health`,text:`Our responsibility extends beyond our walls. We invest in preventive care, health literacy, and community wellness initiatives that address the root causes of illness.`}];function d(){let[e,t]=(0,r.useState)(`vision`),n=e=>{t(e),document.getElementById(e)?.scrollIntoView({behavior:`smooth`})};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(`style`,{children:a}),(0,i.jsxs)(`div`,{className:`hvm`,children:[(0,i.jsxs)(`section`,{className:`hvm-hero`,children:[(0,i.jsx)(`div`,{className:`hvm-grid`}),[560,860,1160].map(e=>(0,i.jsx)(`div`,{className:`hvm-ring`,style:{width:e,height:e}},e)),(0,i.jsxs)(`div`,{className:`hvm-hero-inner`,children:[(0,i.jsxs)(`div`,{className:`hvm-eyebrow`,children:[(0,i.jsx)(`span`,{}),(0,i.jsx)(`span`,{style:{background:`none`,width:`auto`,height:`auto`,opacity:1,letterSpacing:`inherit`},children:`Allied Hospital`}),(0,i.jsx)(`span`,{})]}),(0,i.jsxs)(`h1`,{className:`hvm-htitle`,children:[`Where `,(0,i.jsx)(`em`,{children:`Purpose`}),(0,i.jsx)(`br`,{}),`Meets Precision`]}),(0,i.jsx)(`p`,{className:`hvm-hsub`,children:`Vision · Mission · Values`}),(0,i.jsx)(`div`,{className:`hvm-vline`})]})]}),(0,i.jsx)(`nav`,{className:`hvm-nav`,children:[`vision`,`mission`,`values`,`commitments`].map(t=>(0,i.jsx)(`button`,{className:`hvm-nb ${e===t?`on`:``}`,onClick:()=>n(t),children:t},t))}),(0,i.jsxs)(`section`,{id:`vision`,className:`hvm-sec`,children:[(0,i.jsx)(o,{children:(0,i.jsxs)(`div`,{className:`hvm-shead`,children:[(0,i.jsx)(`div`,{className:`hvm-snum`,children:`01`}),(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`span`,{className:`hvm-stag`,children:`Our Vision`}),(0,i.jsxs)(`h2`,{className:`hvm-stitle`,children:[`A future where`,(0,i.jsx)(`br`,{}),(0,i.jsx)(`em`,{children:`every life`}),` flourishes`]}),(0,i.jsx)(`p`,{className:`hvm-sbody`,children:`We envision a world where access to exceptional healthcare is not a privilege, but a universal right — where the convergence of human compassion and clinical mastery creates outcomes once thought impossible.`})]})]})}),(0,i.jsx)(o,{delay:`d1`,children:(0,i.jsxs)(`div`,{className:`hvm-vcard`,children:[(0,i.jsx)(`div`,{className:`hvm-vcard-lbl`,children:`Vision Statement`}),(0,i.jsx)(`p`,{className:`hvm-vquote`,children:`"To be the leading institution of healing in the region — recognised not merely for clinical excellence, but for the transformative impact we have on the lives, communities, and futures of those we serve."`})]})}),(0,i.jsx)(`div`,{className:`hvm-pillars`,children:s.map((e,t)=>(0,i.jsx)(o,{delay:`d${t+1}`,children:(0,i.jsxs)(`div`,{className:`hvm-pillar`,children:[(0,i.jsx)(`div`,{className:`hvm-picon`,children:e.icon}),(0,i.jsx)(`span`,{className:`hvm-pnum`,children:e.num}),(0,i.jsx)(`div`,{className:`hvm-ptitle`,children:e.title}),(0,i.jsx)(`p`,{className:`hvm-ptext`,children:e.text})]})},e.num))})]}),(0,i.jsx)(`div`,{className:`hvm-stats-wrap`,children:(0,i.jsx)(`div`,{className:`hvm-stats`,children:l.map((e,t)=>(0,i.jsx)(o,{delay:`d${t+1}`,children:(0,i.jsxs)(`div`,{className:`hvm-stat`,children:[(0,i.jsx)(`div`,{className:`hvm-sval`,children:e.val}),(0,i.jsx)(`div`,{className:`hvm-slbl`,children:e.lbl})]})},e.lbl))})}),(0,i.jsxs)(`section`,{id:`mission`,className:`hvm-sec`,children:[(0,i.jsx)(o,{children:(0,i.jsxs)(`div`,{className:`hvm-shead`,children:[(0,i.jsx)(`div`,{className:`hvm-snum`,children:`02`}),(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`span`,{className:`hvm-stag`,children:`Our Mission`}),(0,i.jsxs)(`h2`,{className:`hvm-stitle`,children:[`Purpose in`,(0,i.jsx)(`br`,{}),(0,i.jsx)(`em`,{children:`every act`}),` of care`]})]})]})}),(0,i.jsx)(o,{delay:`d1`,children:(0,i.jsxs)(`div`,{className:`hvm-mlayout`,children:[(0,i.jsx)(`div`,{className:`hvm-mstmt`,children:(0,i.jsx)(`p`,{className:`hvm-mtext`,children:`To deliver compassionate, evidence-based healthcare of the highest quality — advancing medical knowledge, nurturing the healers of tomorrow, and building healthier communities through integrity, innovation, and unwavering service.`})}),(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`p`,{className:`hvm-mpara`,children:`Our mission is lived daily in the decisions of our physicians, the dedication of our nurses, and the commitment of every individual who forms part of this institution.`}),(0,i.jsx)(`p`,{className:`hvm-mpara`,style:{marginBottom:0},children:`We measure success not in procedures performed, but in lives meaningfully improved — in the patient who returns home restored, the family given hope, the community made healthier.`})]})]})})]}),(0,i.jsx)(`div`,{className:`hvm-values-wrap`,id:`values`,children:(0,i.jsxs)(`div`,{className:`hvm-values-inner`,children:[(0,i.jsx)(o,{children:(0,i.jsxs)(`div`,{className:`hvm-shead`,children:[(0,i.jsx)(`div`,{className:`hvm-snum`,children:`03`}),(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`span`,{className:`hvm-stag`,children:`Our Values`}),(0,i.jsxs)(`h2`,{className:`hvm-stitle`,children:[`The principles`,(0,i.jsx)(`br`,{}),`that `,(0,i.jsx)(`em`,{children:`guide us`})]})]})]})}),(0,i.jsx)(o,{delay:`d1`,children:(0,i.jsx)(`div`,{children:c.map(e=>(0,i.jsxs)(`div`,{className:`hvm-vrow`,children:[(0,i.jsx)(`div`,{className:`hvm-vdot`}),(0,i.jsx)(`div`,{className:`hvm-vlbl`,children:e.label}),(0,i.jsx)(`div`,{className:`hvm-vdesc`,children:e.desc})]},e.label))})})]})}),(0,i.jsxs)(`section`,{id:`commitments`,className:`hvm-sec`,children:[(0,i.jsx)(o,{children:(0,i.jsxs)(`div`,{className:`hvm-shead`,children:[(0,i.jsx)(`div`,{className:`hvm-snum`,children:`04`}),(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`span`,{className:`hvm-stag`,children:`Our Commitments`}),(0,i.jsxs)(`h2`,{className:`hvm-stitle`,children:[`Promises we`,(0,i.jsx)(`br`,{}),(0,i.jsx)(`em`,{children:`keep`}),`, every day`]}),(0,i.jsx)(`p`,{className:`hvm-sbody`,children:`Vision and mission only have meaning when translated into concrete commitments — binding obligations that shape how we allocate resources, make decisions, and hold ourselves accountable.`})]})]})}),(0,i.jsx)(`div`,{className:`hvm-cgrid`,children:u.map((e,t)=>(0,i.jsx)(o,{delay:`d${t%2+1}`,children:(0,i.jsxs)(`div`,{className:`hvm-ccard`,children:[(0,i.jsxs)(`div`,{className:`hvm-cnum`,children:[`0`,t+1]}),(0,i.jsx)(`div`,{className:`hvm-ctitle`,children:e.title}),(0,i.jsx)(`p`,{className:`hvm-ctext`,children:e.text})]})},e.title))})]}),(0,i.jsxs)(`footer`,{className:`hvm-footer`,children:[(0,i.jsx)(`div`,{className:`hvm-flogo`,children:`Allied Hospital`}),(0,i.jsx)(`div`,{className:`hvm-ftag`,children:`Excellence · Compassion · Innovation`}),(0,i.jsx)(`div`,{className:`hvm-fdiv`})]})]})]})}export{d as default};