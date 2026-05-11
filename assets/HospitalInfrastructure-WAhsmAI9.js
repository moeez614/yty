import{r as e}from"./chunk-CilyBKbf.js";import{h as t,s as n}from"./index-B0t0rHNF.js";var r=e(t(),1),i=n(),a=[{value:`847`,label:`Patient Rooms`,icon:`🏥`,suffix:``},{value:`24`,label:`Operating Theaters`,icon:`⚕️`,suffix:``},{value:`99.97`,label:`System Uptime`,icon:`📡`,suffix:`%`},{value:`1.2M`,label:`Sq Ft Campus`,icon:`🏛️`,suffix:``}],o=[{id:`cardiac`,name:`Cardiac Center`,floor:`Floors 3–6`,beds:120,status:`Operational`,color:`#C0392B`,desc:`State-of-the-art catheterization labs, hybrid OR suites, and 24/7 cardiac monitoring units.`,features:[`Hybrid OR ×4`,`Cath Labs ×6`,`CCU ×32 beds`,`Echo Suite`]},{id:`neuro`,name:`Neuroscience Tower`,floor:`Floors 7–11`,beds:98,status:`Operational`,color:`#8E44AD`,desc:`Cutting-edge intraoperative MRI, neuro ICU, and comprehensive stroke intervention suite.`,features:[`iMRI Suite`,`Neuro ICU ×28`,`Gamma Knife`,`Sleep Lab`]},{id:`oncology`,name:`Oncology Pavilion`,floor:`Floors 12–15`,beds:144,status:`Operational`,color:`#16A085`,desc:`Integrated cancer care with proton therapy, linear accelerators, and bone marrow transplant unit.`,features:[`Proton Therapy`,`LINAC ×5`,`BMT Unit ×18`,`Infusion Bays ×42`]},{id:`trauma`,name:`Level I Trauma`,floor:`Ground & Floor 1`,beds:80,status:`Operational`,color:`#E67E22`,desc:`Verified Level I Trauma Center with dedicated helipad, resuscitation bays, and rapid imaging.`,features:[`Helipad ×2`,`Trauma Bays ×8`,`CT Scanner ×3`,`Rapid OR ×6`]},{id:`pediatric`,name:`Children's Wing`,floor:`Floors 2–4 (East)`,beds:110,status:`Operational`,color:`#2980B9`,desc:`Purpose-designed pediatric environment with dedicated PICU, NICU, and family-centered care spaces.`,features:[`PICU ×24`,`NICU Level III ×40`,`Peds OR ×4`,`Play Therapy`]},{id:`research`,name:`Research Institute`,floor:`Floors 16–18`,beds:0,status:`Active`,color:`#1ABC9C`,desc:`Translational research laboratories, clinical trial coordination center, and biobank facility.`,features:[`BSL-3 Labs ×6`,`Clinical Trials`,`Biobank 2M+`,`AI Diagnostics`]}],s=[{category:`Digital & IT`,icon:`💻`,items:[{name:`Epic EMR System`,detail:`Full enterprise deployment`},{name:`AI Diagnostic Platform`,detail:`Radiology & pathology`},{name:`Real-time Asset Tracking`,detail:`RFID + IoT sensors`},{name:`Redundant Data Centers`,detail:`Tier IV, dual-site`},{name:`Secure 10Gb Network`,detail:`Zero-trust architecture`}]},{category:`Energy & Utilities`,icon:`⚡`,items:[{name:`Dual Utility Feeds`,detail:`Independent grid connections`},{name:`Emergency Generators`,detail:`12 × 2MW units`},{name:`UPS Systems`,detail:`2-hour full campus coverage`},{name:`Solar Array`,detail:`4.2 MW rooftop capacity`},{name:`Chilled Water Plant`,detail:`12,000-ton capacity`}]},{category:`Medical Equipment`,icon:`🔬`,items:[{name:`3T MRI Systems`,detail:`8 units campus-wide`},{name:`CT Scanners`,detail:`12 units, 256-slice`},{name:`PET/CT Scanners`,detail:`4 units, digital`},{name:`Robotic Surgery`,detail:`da Vinci Xi ×6`},{name:`Cryogenic Storage`,detail:`Tissue & specimen bank`}]},{category:`Safety & Security`,icon:`🛡️`,items:[{name:`Command Center`,detail:`24/7 integrated ops`},{name:`Access Control`,detail:`Biometric + card ×1,200 pts`},{name:`CCTV Network`,detail:`2,800 HD cameras`},{name:`Fire Suppression`,detail:`FM-200 & sprinkler zones`},{name:`Hazmat Response`,detail:`Decon stations ×8`}]}],c=[{year:`1987`,event:`Original hospital founded`,type:`founding`},{year:`1999`,event:`Trauma Center Level I certification`,type:`milestone`},{year:`2005`,event:`Neuroscience Tower opens`,type:`expansion`},{year:`2011`,event:`Oncology Pavilion & proton therapy`,type:`expansion`},{year:`2016`,event:`Research Institute commissioned`,type:`expansion`},{year:`2020`,event:`AI diagnostics platform deployed`,type:`technology`},{year:`2023`,event:`Net-zero energy certification`,type:`milestone`},{year:`2025`,event:`Quantum imaging suite opens`,type:`technology`}],l=`
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=DM+Sans:wght@300;400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --gold: #B8960C;
    --gold-light: #D4AF37;
    --gold-pale: rgba(184,150,12,0.12);
    --dark: #080C10;
    --dark-2: #0D1117;
    --dark-3: #141B24;
    --dark-4: #1C2535;
    --dark-5: #243044;
    --text-primary: #F0EDE8;
    --text-secondary: #9DA8B5;
    --text-muted: #5A6478;
    --border: rgba(184,150,12,0.18);
    --border-subtle: rgba(255,255,255,0.06);
    --radius: 2px;
    --radius-lg: 4px;
  }

  html, body { height: 100%; background: var(--dark); }

  .page {
    background: var(--dark);
    color: var(--text-primary);
    font-family: 'DM Sans', sans-serif;
    font-size: 15px;
    font-weight: 300;
    line-height: 1.6;
    min-height: 100vh;
    overflow-x: hidden;
  }

  /* NAV */
  .nav {
    position: sticky; top: 0; z-index: 100;
    background: rgba(8,12,16,0.92);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--border);
    display: flex; align-items: center; justify-content: space-between;
    padding: 0 48px; height: 68px;
  }
  .nav-logo { display: flex; align-items: center; gap: 14px; }
  .nav-cross {
    width: 32px; height: 32px; position: relative;
    display: flex; align-items: center; justify-content: center;
  }
  .nav-cross::before, .nav-cross::after {
    content: ''; position: absolute;
    background: var(--gold-light);
    border-radius: 1px;
  }
  .nav-cross::before { width: 3px; height: 22px; }
  .nav-cross::after { width: 22px; height: 3px; }
  .nav-name {
    font-family: 'Cormorant Garamond', serif;
    font-size: 20px; font-weight: 400; letter-spacing: 0.12em;
    color: var(--text-primary);
    text-transform: uppercase;
  }
  .nav-links { display: flex; gap: 36px; }
  .nav-link {
    font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase;
    color: var(--text-secondary); cursor: pointer; transition: color 0.2s;
    border: none; background: none; font-family: 'DM Sans', sans-serif;
    font-weight: 400;
  }
  .nav-link:hover, .nav-link.active { color: var(--gold-light); }
  .nav-badge {
    background: var(--gold-pale);
    border: 1px solid var(--border);
    color: var(--gold-light);
    font-size: 11px; letter-spacing: 0.08em;
    padding: 5px 14px; border-radius: 1px;
    font-family: 'DM Sans', sans-serif;
  }

  /* HERO */
  .hero {
    position: relative; overflow: hidden;
    padding: 120px 48px 100px;
    display: flex; flex-direction: column; align-items: flex-start;
    gap: 32px;
  }
  .hero-grid-bg {
    position: absolute; inset: 0; pointer-events: none;
    background-image:
      linear-gradient(rgba(184,150,12,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(184,150,12,0.04) 1px, transparent 1px);
    background-size: 60px 60px;
    mask-image: radial-gradient(ellipse 80% 60% at 50% 50%, black 0%, transparent 100%);
  }
  .hero-accent {
    position: absolute; top: -80px; right: -80px;
    width: 600px; height: 600px; border-radius: 50%;
    background: radial-gradient(circle, rgba(184,150,12,0.06) 0%, transparent 70%);
    pointer-events: none;
  }
  .hero-eyebrow {
    display: flex; align-items: center; gap: 12px;
    font-size: 11px; letter-spacing: 0.25em; text-transform: uppercase;
    color: var(--gold-light);
  }
  .hero-eyebrow::before {
    content: ''; width: 40px; height: 1px; background: var(--gold-light);
  }
  .hero-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(52px, 7vw, 88px);
    font-weight: 300; line-height: 1.0;
    letter-spacing: -0.01em;
    max-width: 820px;
  }
  .hero-title em {
    font-style: italic; color: var(--gold-light);
  }
  .hero-subtitle {
    max-width: 560px;
    font-size: 16px; font-weight: 300;
    color: var(--text-secondary); line-height: 1.75;
  }
  .hero-divider {
    width: 100%; height: 1px;
    background: linear-gradient(90deg, var(--gold-light) 0%, transparent 60%);
    opacity: 0.25; margin: 8px 0;
  }

  /* STATS */
  .stats-row {
    display: grid; grid-template-columns: repeat(4, 1fr);
    gap: 1px; background: var(--border);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    overflow: hidden; margin: 0 48px;
  }
  .stat-card {
    background: var(--dark-2);
    padding: 36px 28px;
    display: flex; flex-direction: column; gap: 8px;
    transition: background 0.3s;
  }
  .stat-card:hover { background: var(--dark-3); }
  .stat-icon { font-size: 22px; margin-bottom: 4px; }
  .stat-value {
    font-family: 'Cormorant Garamond', serif;
    font-size: 52px; font-weight: 300;
    color: var(--text-primary); line-height: 1;
  }
  .stat-value span {
    font-size: 28px; color: var(--gold-light); margin-left: 2px;
  }
  .stat-label {
    font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase;
    color: var(--text-muted); margin-top: 4px;
  }

  /* SECTION */
  .section { padding: 96px 48px; }
  .section-header { margin-bottom: 56px; }
  .section-tag {
    display: inline-flex; align-items: center; gap: 8px;
    font-size: 10px; letter-spacing: 0.3em; text-transform: uppercase;
    color: var(--gold-light); margin-bottom: 16px;
  }
  .section-tag::after {
    content: ''; width: 30px; height: 1px; background: var(--gold-light);
  }
  .section-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(36px, 4vw, 52px); font-weight: 300;
    line-height: 1.1; letter-spacing: -0.01em;
  }
  .section-desc {
    margin-top: 16px; max-width: 600px;
    color: var(--text-secondary); font-size: 15px; line-height: 1.8;
  }

  /* WINGS */
  .wings-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1px; background: var(--border-subtle);
    border: 1px solid var(--border-subtle);
    border-radius: var(--radius-lg); overflow: hidden;
  }
  .wing-card {
    background: var(--dark-2);
    padding: 32px 28px;
    cursor: pointer; transition: all 0.3s;
    position: relative; overflow: hidden;
    border: 1px solid transparent;
  }
  .wing-card:hover, .wing-card.selected {
    background: var(--dark-3);
    border-color: var(--border);
    z-index: 2;
  }
  .wing-card::before {
    content: ''; position: absolute;
    top: 0; left: 0; width: 3px; height: 100%;
    background: var(--wing-color);
    opacity: 0; transition: opacity 0.3s;
  }
  .wing-card:hover::before, .wing-card.selected::before { opacity: 1; }
  .wing-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 16px; }
  .wing-name {
    font-family: 'Cormorant Garamond', serif;
    font-size: 22px; font-weight: 400; line-height: 1.2;
  }
  .wing-status {
    font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase;
    padding: 3px 10px; border-radius: 1px;
    background: rgba(26,188,156,0.1); border: 1px solid rgba(26,188,156,0.3);
    color: #1ABC9C;
  }
  .wing-floor {
    font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase;
    color: var(--text-muted); margin-bottom: 14px;
  }
  .wing-desc { font-size: 13px; color: var(--text-secondary); line-height: 1.7; margin-bottom: 20px; }
  .wing-features { display: flex; flex-wrap: wrap; gap: 6px; }
  .wing-feature {
    font-size: 11px; letter-spacing: 0.06em;
    color: var(--text-secondary);
    border: 1px solid var(--border-subtle);
    padding: 3px 10px; border-radius: 1px;
    background: rgba(255,255,255,0.02);
  }
  .wing-beds {
    font-family: 'Cormorant Garamond', serif;
    font-size: 36px; font-weight: 300;
    color: var(--text-primary); margin: 12px 0 2px;
  }
  .wing-beds-label {
    font-size: 10px; letter-spacing: 0.18em; text-transform: uppercase;
    color: var(--text-muted);
  }

  /* INFRA */
  .infra-grid {
    display: grid; grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
  .infra-card {
    background: var(--dark-2);
    border: 1px solid var(--border-subtle);
    border-radius: var(--radius-lg);
    padding: 32px 28px;
    transition: border-color 0.3s;
  }
  .infra-card:hover { border-color: var(--border); }
  .infra-header {
    display: flex; align-items: center; gap: 12px;
    margin-bottom: 28px;
    padding-bottom: 20px;
    border-bottom: 1px solid var(--border-subtle);
  }
  .infra-icon { font-size: 22px; }
  .infra-category {
    font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase;
    color: var(--gold-light); font-weight: 400;
  }
  .infra-items { display: flex; flex-direction: column; gap: 0; }
  .infra-item {
    display: flex; justify-content: space-between; align-items: center;
    padding: 14px 0;
    border-bottom: 1px solid var(--border-subtle);
  }
  .infra-item:last-child { border-bottom: none; }
  .infra-item-name { font-size: 14px; color: var(--text-primary); font-weight: 400; }
  .infra-item-detail { font-size: 12px; color: var(--text-muted); letter-spacing: 0.04em; }

  /* TIMELINE */
  .timeline { position: relative; padding-left: 0; }
  .timeline::before {
    content: ''; position: absolute;
    left: 100px; top: 0; bottom: 0; width: 1px;
    background: linear-gradient(180deg, transparent 0%, var(--border) 10%, var(--border) 90%, transparent 100%);
  }
  .timeline-item {
    display: flex; align-items: flex-start; gap: 0;
    padding: 20px 0; position: relative;
    opacity: 0.6; transition: opacity 0.3s;
  }
  .timeline-item:hover { opacity: 1; }
  .timeline-year {
    width: 100px; padding-right: 24px;
    font-family: 'Cormorant Garamond', serif;
    font-size: 26px; font-weight: 300;
    color: var(--text-secondary); text-align: right; flex-shrink: 0;
    padding-top: 2px;
  }
  .timeline-dot {
    width: 9px; height: 9px; border-radius: 50%;
    background: var(--dark-4); border: 2px solid var(--text-muted);
    flex-shrink: 0; margin-top: 9px; margin-right: 0;
    position: relative; z-index: 2; transition: border-color 0.3s;
  }
  .timeline-item:hover .timeline-dot { border-color: var(--gold-light); background: var(--gold-pale); }
  .timeline-content { padding-left: 28px; }
  .timeline-event { font-size: 16px; color: var(--text-primary); font-weight: 400; }
  .timeline-type {
    margin-top: 4px;
    font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase;
    color: var(--text-muted);
  }

  /* FOOTER */
  .footer {
    border-top: 1px solid var(--border);
    padding: 48px 48px 40px;
    display: flex; justify-content: space-between; align-items: center;
    background: var(--dark-2);
  }
  .footer-left { display: flex; flex-direction: column; gap: 6px; }
  .footer-name {
    font-family: 'Cormorant Garamond', serif;
    font-size: 18px; font-weight: 400; letter-spacing: 0.1em;
    text-transform: uppercase; color: var(--text-primary);
  }
  .footer-sub {
    font-size: 12px; color: var(--text-muted); letter-spacing: 0.08em;
  }
  .footer-right { display: flex; gap: 32px; }
  .footer-link {
    font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase;
    color: var(--text-muted); cursor: pointer;
    transition: color 0.2s; border: none; background: none;
    font-family: 'DM Sans', sans-serif;
  }
  .footer-link:hover { color: var(--gold-light); }

  /* ANIMATIONS */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .fade-up { animation: fadeUp 0.7s ease forwards; }
  .fade-up-1 { animation-delay: 0.1s; opacity: 0; }
  .fade-up-2 { animation-delay: 0.25s; opacity: 0; }
  .fade-up-3 { animation-delay: 0.4s; opacity: 0; }
  .fade-up-4 { animation-delay: 0.55s; opacity: 0; }

  @media (max-width: 1024px) {
    .wings-grid { grid-template-columns: repeat(2, 1fr); }
    .stats-row { grid-template-columns: repeat(2, 1fr); }
  }
  @media (max-width: 768px) {
    .nav { padding: 0 24px; }
    .nav-links { display: none; }
    .hero { padding: 80px 24px 60px; }
    .stats-row { margin: 0 24px; }
    .section { padding: 64px 24px; }
    .wings-grid { grid-template-columns: 1fr; }
    .infra-grid { grid-template-columns: 1fr; }
    .footer { padding: 36px 24px; flex-direction: column; gap: 20px; align-items: flex-start; }
  }
`,u=[`Overview`,`Wings`,`Infrastructure`,`History`];function d(){let[e,t]=(0,r.useState)(null),[n,d]=(0,r.useState)(`Overview`),f=e=>{let t=document.getElementById(e.toLowerCase());t&&t.scrollIntoView({behavior:`smooth`,block:`start`}),d(e)};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(`style`,{children:l}),(0,i.jsxs)(`div`,{className:`page`,children:[(0,i.jsxs)(`nav`,{className:`nav`,children:[(0,i.jsxs)(`div`,{className:`nav-logo`,children:[(0,i.jsx)(`div`,{className:`nav-cross`}),(0,i.jsx)(`span`,{className:`nav-name`,children:`Meridian Medical Center`})]}),(0,i.jsx)(`div`,{className:`nav-links`,children:u.map(e=>(0,i.jsx)(`button`,{className:`nav-link${n===e?` active`:``}`,onClick:()=>f(e),children:e},e))}),(0,i.jsx)(`div`,{className:`nav-badge`,children:`Est. 1987 · Level I`})]}),(0,i.jsxs)(`section`,{className:`hero`,id:`overview`,children:[(0,i.jsx)(`div`,{className:`hero-grid-bg`}),(0,i.jsx)(`div`,{className:`hero-accent`}),(0,i.jsx)(`div`,{className:`hero-eyebrow fade-up fade-up-1`,children:`Campus Infrastructure`}),(0,i.jsxs)(`h1`,{className:`hero-title fade-up fade-up-2`,children:[`Architecture of`,(0,i.jsx)(`br`,{}),(0,i.jsx)(`em`,{children:`Precision Medicine`})]}),(0,i.jsx)(`p`,{className:`hero-subtitle fade-up fade-up-3`,children:`A fully integrated 1.2 million square foot medical campus designed around the convergence of advanced diagnostics, compassionate care, and breakthrough research.`}),(0,i.jsx)(`div`,{className:`hero-divider fade-up fade-up-4`})]}),(0,i.jsx)(`div`,{className:`stats-row`,children:a.map((e,t)=>(0,i.jsxs)(`div`,{className:`stat-card`,children:[(0,i.jsx)(`div`,{className:`stat-icon`,children:e.icon}),(0,i.jsxs)(`div`,{className:`stat-value`,children:[e.value,e.suffix&&(0,i.jsx)(`span`,{children:e.suffix})]}),(0,i.jsx)(`div`,{className:`stat-label`,children:e.label})]},e.label))}),(0,i.jsxs)(`section`,{className:`section`,id:`wings`,children:[(0,i.jsxs)(`div`,{className:`section-header`,children:[(0,i.jsx)(`div`,{className:`section-tag`,children:`Clinical Wings`}),(0,i.jsxs)(`h2`,{className:`section-title`,children:[`Specialized Centers`,(0,i.jsx)(`br`,{}),`of Excellence`]}),(0,i.jsx)(`p`,{className:`section-desc`,children:`Six purpose-built clinical environments, each engineered with specialized infrastructure, staffing models, and technology ecosystems.`})]}),(0,i.jsx)(`div`,{className:`wings-grid`,children:o.map(n=>(0,i.jsxs)(`div`,{className:`wing-card${e===n.id?` selected`:``}`,style:{"--wing-color":n.color},onClick:()=>t(e===n.id?null:n.id),children:[(0,i.jsxs)(`div`,{className:`wing-header`,children:[(0,i.jsx)(`div`,{className:`wing-name`,children:n.name}),(0,i.jsx)(`div`,{className:`wing-status`,children:n.status})]}),(0,i.jsx)(`div`,{className:`wing-floor`,children:n.floor}),n.beds>0?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(`div`,{className:`wing-beds`,children:n.beds}),(0,i.jsx)(`div`,{className:`wing-beds-label`,children:`Licensed Beds`})]}):(0,i.jsx)(`div`,{style:{height:`52px`}}),(0,i.jsx)(`p`,{className:`wing-desc`,style:{marginTop:`14px`},children:n.desc}),(0,i.jsx)(`div`,{className:`wing-features`,children:n.features.map(e=>(0,i.jsx)(`span`,{className:`wing-feature`,children:e},e))})]},n.id))})]}),(0,i.jsxs)(`section`,{className:`section`,id:`infrastructure`,style:{background:`var(--dark-2)`,borderTop:`1px solid var(--border-subtle)`,borderBottom:`1px solid var(--border-subtle)`},children:[(0,i.jsxs)(`div`,{className:`section-header`,children:[(0,i.jsx)(`div`,{className:`section-tag`,children:`Core Systems`}),(0,i.jsxs)(`h2`,{className:`section-title`,children:[`Engineering &`,(0,i.jsx)(`br`,{}),`Technical Infrastructure`]}),(0,i.jsx)(`p`,{className:`section-desc`,children:`Redundant, resilient systems underpinning uninterrupted clinical operations across every department and specialty.`})]}),(0,i.jsx)(`div`,{className:`infra-grid`,children:s.map(e=>(0,i.jsxs)(`div`,{className:`infra-card`,children:[(0,i.jsxs)(`div`,{className:`infra-header`,children:[(0,i.jsx)(`span`,{className:`infra-icon`,children:e.icon}),(0,i.jsx)(`span`,{className:`infra-category`,children:e.category})]}),(0,i.jsx)(`div`,{className:`infra-items`,children:e.items.map(e=>(0,i.jsxs)(`div`,{className:`infra-item`,children:[(0,i.jsx)(`span`,{className:`infra-item-name`,children:e.name}),(0,i.jsx)(`span`,{className:`infra-item-detail`,children:e.detail})]},e.name))})]},e.category))})]}),(0,i.jsxs)(`section`,{className:`section`,id:`history`,children:[(0,i.jsxs)(`div`,{className:`section-header`,children:[(0,i.jsx)(`div`,{className:`section-tag`,children:`Institutional History`}),(0,i.jsxs)(`h2`,{className:`section-title`,children:[`Milestones &`,(0,i.jsx)(`br`,{}),`Expansion`]}),(0,i.jsx)(`p`,{className:`section-desc`,children:`Nearly four decades of continuous investment in clinical capability, research, and campus development.`})]}),(0,i.jsx)(`div`,{className:`timeline`,children:c.map((e,t)=>(0,i.jsxs)(`div`,{className:`timeline-item`,children:[(0,i.jsx)(`div`,{className:`timeline-year`,children:e.year}),(0,i.jsx)(`div`,{className:`timeline-dot`}),(0,i.jsxs)(`div`,{className:`timeline-content`,children:[(0,i.jsx)(`div`,{className:`timeline-event`,children:e.event}),(0,i.jsx)(`div`,{className:`timeline-type`,children:e.type})]})]},e.year))})]}),(0,i.jsxs)(`footer`,{className:`footer`,children:[(0,i.jsxs)(`div`,{className:`footer-left`,children:[(0,i.jsx)(`div`,{className:`footer-name`,children:`Meridian Medical Center`}),(0,i.jsx)(`div`,{className:`footer-sub`,children:`Infrastructure Overview · Fiscal Year 2025`})]}),(0,i.jsxs)(`div`,{className:`footer-right`,children:[(0,i.jsx)(`button`,{className:`footer-link`,children:`Facilities`}),(0,i.jsx)(`button`,{className:`footer-link`,children:`Operations`}),(0,i.jsx)(`button`,{className:`footer-link`,children:`Contacts`}),(0,i.jsx)(`button`,{className:`footer-link`,children:`Compliance`})]})]})]})]})}export{d as default};