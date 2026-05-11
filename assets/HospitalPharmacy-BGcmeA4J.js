import{r as e}from"./chunk-CilyBKbf.js";import{h as t,s as n}from"./index-B0t0rHNF.js";import{t as r}from"./format-YDEiWp9I.js";var i=e(t(),1),a=n(),o=`
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=DM+Sans:wght@300;400;500&display=swap');

  * { margin: 0; padding: 0; box-sizing: border-box; }

  :root {
    --navy: #0a1628;
    --navy-mid: #112040;
    --navy-light: #1a2f55;
    --gold: #c9a96e;
    --gold-light: #e8cc96;
    --gold-pale: #f5ead5;
    --teal: #0d7377;
    --teal-light: #14a8ad;
    --teal-pale: #e6f7f8;
    --white: #ffffff;
    --off-white: #f9f7f4;
    --text-main: #0a1628;
    --text-muted: #5a6b82;
    --text-light: #8fa3bc;
    --border: #e2ddd6;
    --success: #1a7a4a;
    --success-bg: #eaf5ef;
    --warn: #a05c00;
    --warn-bg: #fff4e6;
    --danger: #8b1a1a;
    --danger-bg: #fdf0f0;
  }

  .pharmacy-root {
    font-family: 'DM Sans', sans-serif;
    background: var(--off-white);
    min-height: 100vh;
    color: var(--text-main);
  }

  /* SIDEBAR */
  .sidebar {
    position: fixed;
    left: 0; top: 0; bottom: 0;
    width: 260px;
    background: var(--navy);
    display: flex;
    flex-direction: column;
    z-index: 100;
    padding: 0;
  }

  .sidebar-brand {
    padding: 28px 24px 20px;
    border-bottom: 1px solid rgba(201,169,110,0.2);
  }

  .sidebar-brand .cross {
    width: 32px; height: 32px;
    background: var(--gold);
    border-radius: 4px;
    display: flex; align-items: center; justify-content: center;
    margin-bottom: 12px;
    position: relative;
  }

  .sidebar-brand .cross::before,
  .sidebar-brand .cross::after {
    content: '';
    position: absolute;
    background: var(--navy);
    border-radius: 2px;
  }
  .sidebar-brand .cross::before { width: 4px; height: 20px; }
  .sidebar-brand .cross::after { width: 20px; height: 4px; }

  .brand-name {
    font-family: 'Cormorant Garamond', serif;
    font-size: 18px;
    font-weight: 600;
    color: var(--white);
    letter-spacing: 0.3px;
    line-height: 1.2;
  }

  .brand-sub {
    font-size: 11px;
    color: var(--gold);
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-top: 3px;
  }

  .sidebar-nav {
    padding: 20px 0;
    flex: 1;
    overflow-y: auto;
  }

  .nav-section-label {
    font-size: 10px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: rgba(143,163,188,0.6);
    padding: 8px 24px 6px;
    margin-top: 8px;
  }

  .nav-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 11px 24px;
    cursor: pointer;
    font-size: 13.5px;
    color: rgba(255,255,255,0.6);
    transition: all 0.2s;
    border-left: 2px solid transparent;
    text-decoration: none;
  }

  .nav-item:hover {
    color: var(--white);
    background: rgba(255,255,255,0.04);
  }

  .nav-item.active {
    color: var(--gold);
    border-left-color: var(--gold);
    background: rgba(201,169,110,0.07);
  }

  .nav-icon {
    width: 18px; height: 18px;
    opacity: 0.8;
    flex-shrink: 0;
  }

  .nav-item.active .nav-icon { opacity: 1; }

  .sidebar-footer {
    padding: 16px 20px;
    border-top: 1px solid rgba(255,255,255,0.07);
  }

  .user-chip {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    border-radius: 8px;
    background: rgba(255,255,255,0.05);
  }

  .avatar {
    width: 34px; height: 34px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--teal), var(--navy-light));
    display: flex; align-items: center; justify-content: center;
    font-size: 13px;
    font-weight: 500;
    color: white;
    flex-shrink: 0;
  }

  .user-info p { font-size: 13px; color: var(--white); font-weight: 500; }
  .user-info span { font-size: 11px; color: rgba(255,255,255,0.4); }

  /* MAIN CONTENT */
  .main-content {
    margin-left: 260px;
    padding: 0;
    min-height: 100vh;
  }

  /* TOP BAR */
  .topbar {
    background: var(--white);
    border-bottom: 1px solid var(--border);
    padding: 0 36px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 50;
  }

  .topbar-left h1 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 22px;
    font-weight: 600;
    color: var(--navy);
    letter-spacing: 0.2px;
  }

  .topbar-left p {
    font-size: 12px;
    color: var(--text-muted);
    margin-top: 1px;
  }

  .topbar-right {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .search-box {
    display: flex;
    align-items: center;
    gap: 8px;
    background: var(--off-white);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 8px 14px;
    width: 240px;
  }

  .search-box input {
    border: none;
    background: transparent;
    outline: none;
    font-size: 13px;
    color: var(--text-main);
    width: 100%;
    font-family: 'DM Sans', sans-serif;
  }

  .search-box input::placeholder { color: var(--text-light); }

  .icon-btn {
    width: 38px; height: 38px;
    border-radius: 8px;
    border: 1px solid var(--border);
    background: var(--white);
    display: flex; align-items: center; justify-content: center;
    cursor: pointer;
    transition: all 0.2s;
    color: var(--text-muted);
    position: relative;
  }

  .icon-btn:hover { background: var(--off-white); color: var(--navy); }

  .notif-dot {
    width: 8px; height: 8px;
    background: var(--gold);
    border-radius: 50%;
    position: absolute;
    top: 7px; right: 7px;
    border: 2px solid white;
  }

  /* PAGE BODY */
  .page-body {
    padding: 28px 36px 48px;
  }

  /* STATS ROW */
  .stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    margin-bottom: 28px;
  }

  .stat-card {
    background: var(--white);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 20px;
    position: relative;
    overflow: hidden;
    transition: transform 0.2s, box-shadow 0.2s;
  }

  .stat-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(10,22,40,0.08);
  }

  .stat-card::after {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
  }

  .stat-card.navy::after { background: var(--navy); }
  .stat-card.gold::after { background: var(--gold); }
  .stat-card.teal::after { background: var(--teal); }
  .stat-card.warn::after { background: #e07b00; }

  .stat-label {
    font-size: 11px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: var(--text-muted);
    margin-bottom: 10px;
    font-weight: 500;
  }

  .stat-value {
    font-family: 'Cormorant Garamond', serif;
    font-size: 38px;
    font-weight: 600;
    color: var(--navy);
    line-height: 1;
    margin-bottom: 6px;
  }

  .stat-trend {
    font-size: 12px;
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .stat-trend.up { color: var(--success); }
  .stat-trend.down { color: var(--danger); }
  .stat-trend.neutral { color: var(--text-muted); }

  .stat-icon-bg {
    position: absolute;
    right: 16px; top: 50%;
    transform: translateY(-50%);
    width: 48px; height: 48px;
    border-radius: 10px;
    display: flex; align-items: center; justify-content: center;
    font-size: 22px;
    opacity: 0.12;
  }

  .stat-card.navy .stat-icon-bg { background: var(--navy); }
  .stat-card.gold .stat-icon-bg { background: var(--gold); }
  .stat-card.teal .stat-icon-bg { background: var(--teal); }
  .stat-card.warn .stat-icon-bg { background: #e07b00; }

  /* SECTION ROW */
  .two-col {
    display: grid;
    grid-template-columns: 1fr 340px;
    gap: 20px;
    margin-bottom: 20px;
  }

  .section-card {
    background: var(--white);
    border: 1px solid var(--border);
    border-radius: 12px;
    overflow: hidden;
  }

  .section-header {
    padding: 18px 22px;
    border-bottom: 1px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .section-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: 17px;
    font-weight: 600;
    color: var(--navy);
    letter-spacing: 0.2px;
  }

  .section-sub {
    font-size: 12px;
    color: var(--text-muted);
    margin-top: 2px;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    padding: 3px 10px;
    border-radius: 20px;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.3px;
  }

  .badge.success { background: var(--success-bg); color: var(--success); }
  .badge.warn { background: var(--warn-bg); color: var(--warn); }
  .badge.danger { background: var(--danger-bg); color: var(--danger); }
  .badge.navy { background: rgba(10,22,40,0.07); color: var(--navy); }
  .badge.teal { background: var(--teal-pale); color: var(--teal); }

  /* PRESCRIPTIONS TABLE */
  .table-wrap { overflow-x: auto; }

  .presc-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 13px;
  }

  .presc-table th {
    padding: 10px 22px;
    text-align: left;
    font-size: 10.5px;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    color: var(--text-muted);
    font-weight: 500;
    background: var(--off-white);
    border-bottom: 1px solid var(--border);
  }

  .presc-table td {
    padding: 14px 22px;
    border-bottom: 1px solid rgba(226,221,214,0.6);
    vertical-align: middle;
  }

  .presc-table tr:last-child td { border-bottom: none; }
  .presc-table tr:hover td { background: var(--off-white); }

  .patient-cell {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .pat-avatar {
    width: 32px; height: 32px;
    border-radius: 50%;
    font-size: 12px;
    font-weight: 500;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
  }

  .pat-name { font-weight: 500; color: var(--navy); font-size: 13px; }
  .pat-id { font-size: 11px; color: var(--text-muted); }

  .action-btn {
    padding: 5px 14px;
    border-radius: 6px;
    font-size: 12px;
    font-weight: 500;
    cursor: pointer;
    border: 1px solid;
    transition: all 0.2s;
    font-family: 'DM Sans', sans-serif;
  }

  .action-btn.primary {
    background: var(--navy);
    color: white;
    border-color: var(--navy);
  }

  .action-btn.primary:hover { background: var(--navy-mid); }

  .action-btn.outline {
    background: transparent;
    color: var(--text-muted);
    border-color: var(--border);
  }

  .action-btn.outline:hover { border-color: var(--navy); color: var(--navy); }

  .action-btn.gold {
    background: var(--gold);
    color: var(--navy);
    border-color: var(--gold);
  }

  .action-btn.gold:hover { background: var(--gold-light); }

  /* INVENTORY PANEL */
  .inventory-list { padding: 4px 0; }

  .inv-item {
    display: flex;
    align-items: center;
    padding: 13px 20px;
    border-bottom: 1px solid rgba(226,221,214,0.5);
    gap: 12px;
    transition: background 0.15s;
    cursor: default;
  }

  .inv-item:last-child { border-bottom: none; }
  .inv-item:hover { background: var(--off-white); }

  .inv-icon {
    width: 36px; height: 36px;
    border-radius: 8px;
    display: flex; align-items: center; justify-content: center;
    font-size: 16px;
    flex-shrink: 0;
  }

  .inv-name { font-size: 13px; font-weight: 500; color: var(--navy); }
  .inv-cat { font-size: 11px; color: var(--text-muted); margin-top: 1px; }
  .inv-stock-bar-wrap { flex: 1; }
  .inv-stock-bar-bg { height: 4px; background: var(--border); border-radius: 2px; overflow: hidden; }
  .inv-stock-bar { height: 100%; border-radius: 2px; transition: width 0.4s; }
  .inv-qty { font-size: 12px; font-weight: 500; color: var(--text-muted); white-space: nowrap; }

  /* ALERTS / EXPIRY */
  .alert-item {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    padding: 14px 20px;
    border-bottom: 1px solid rgba(226,221,214,0.5);
  }

  .alert-item:last-child { border-bottom: none; }

  .alert-dot {
    width: 8px; height: 8px;
    border-radius: 50%;
    margin-top: 5px;
    flex-shrink: 0;
  }

  .alert-dot.danger { background: #d14a4a; }
  .alert-dot.warn { background: #e07b00; }
  .alert-dot.info { background: var(--teal); }

  .alert-title { font-size: 13px; font-weight: 500; color: var(--navy); }
  .alert-desc { font-size: 12px; color: var(--text-muted); margin-top: 2px; }
  .alert-time { font-size: 11px; color: var(--text-light); margin-left: auto; white-space: nowrap; }

  /* BOTTOM ROW */
  .three-col {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
  }

  /* PILL TABS */
  .pill-tabs {
    display: flex;
    gap: 4px;
    background: var(--off-white);
    border-radius: 8px;
    padding: 3px;
  }

  .pill-tab {
    padding: 5px 14px;
    border-radius: 6px;
    font-size: 12px;
    font-weight: 500;
    cursor: pointer;
    color: var(--text-muted);
    transition: all 0.2s;
    border: none;
    background: transparent;
    font-family: 'DM Sans', sans-serif;
  }

  .pill-tab.active {
    background: var(--white);
    color: var(--navy);
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  }

  /* DRUG QUICK CARDS */
  .drug-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    padding: 16px;
  }

  .drug-card {
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 14px;
    transition: all 0.2s;
    cursor: pointer;
  }

  .drug-card:hover {
    border-color: var(--teal);
    box-shadow: 0 4px 12px rgba(13,115,119,0.1);
  }

  .drug-card-name { font-size: 13px; font-weight: 500; color: var(--navy); }
  .drug-card-info { font-size: 11px; color: var(--text-muted); margin-top: 3px; }
  .drug-card-price { font-size: 14px; font-weight: 500; color: var(--teal); margin-top: 8px; }

  /* SCHEDULE */
  .schedule-list { padding: 8px 0; }

  .schedule-item {
    display: flex;
    align-items: center;
    padding: 12px 20px;
    gap: 14px;
    border-bottom: 1px solid rgba(226,221,214,0.5);
  }

  .schedule-item:last-child { border-bottom: none; }

  .sch-time {
    font-family: 'Cormorant Garamond', serif;
    font-size: 18px;
    font-weight: 600;
    color: var(--navy);
    width: 60px;
    flex-shrink: 0;
    line-height: 1;
  }

  .sch-time span { display: block; font-size: 11px; font-family: 'DM Sans', sans-serif; color: var(--text-light); font-weight: 400; }
  .sch-title { font-size: 13px; font-weight: 500; color: var(--navy); }
  .sch-sub { font-size: 11px; color: var(--text-muted); margin-top: 1px; }

  .sch-bar {
    width: 3px; height: 36px; border-radius: 2px; flex-shrink: 0;
  }

  /* MODAL OVERLAY */
  .modal-overlay {
    position: fixed; inset: 0;
    background: rgba(10,22,40,0.55);
    z-index: 200;
    display: flex; align-items: center; justify-content: center;
  }

  .modal {
    background: var(--white);
    border-radius: 16px;
    width: 440px;
    padding: 28px;
    position: relative;
  }

  .modal-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: 21px;
    font-weight: 600;
    color: var(--navy);
    margin-bottom: 4px;
  }

  .modal-sub { font-size: 13px; color: var(--text-muted); margin-bottom: 22px; }

  .form-group { margin-bottom: 16px; }

  .form-label {
    font-size: 11.5px;
    font-weight: 500;
    letter-spacing: 0.5px;
    color: var(--text-muted);
    margin-bottom: 6px;
    display: block;
  }

  .form-input {
    width: 100%;
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 9px 14px;
    font-size: 13px;
    font-family: 'DM Sans', sans-serif;
    color: var(--navy);
    outline: none;
    transition: border-color 0.2s;
    background: var(--white);
  }

  .form-input:focus { border-color: var(--teal); }

  .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }

  .modal-footer { display: flex; justify-content: flex-end; gap: 10px; margin-top: 20px; }

  .close-btn {
    position: absolute; top: 18px; right: 18px;
    width: 30px; height: 30px;
    border-radius: 6px;
    border: none;
    background: var(--off-white);
    color: var(--text-muted);
    cursor: pointer;
    font-size: 16px;
    display: flex; align-items: center; justify-content: center;
    transition: background 0.2s;
  }

  .close-btn:hover { background: var(--border); }

  /* SCROLLBAR */
  ::-webkit-scrollbar { width: 4px; height: 4px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb { background: var(--border); border-radius: 2px; }

  /* ANIMATIONS */
  @keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
  .fade-in { animation: fadeIn 0.35s ease both; }
  .fade-in-1 { animation-delay: 0.05s; }
  .fade-in-2 { animation-delay: 0.1s; }
  .fade-in-3 { animation-delay: 0.15s; }
  .fade-in-4 { animation-delay: 0.2s; }

  .section-card { animation: fadeIn 0.4s ease both; }
`,s=[{id:`Rx-20481`,patient:`Sarah Al-Rashid`,initials:`SA`,avatarColor:`#1a2f55`,bg:`#e8f0fb`,ward:`Cardiology`,drug:`Metoprolol 25mg`,qty:`30 tabs`,status:`pending`,doctor:`Dr. Hasan`,time:`9:14 AM`},{id:`Rx-20480`,patient:`Omar Farouq`,initials:`OF`,avatarColor:`#0f6e56`,bg:`#e6f5ef`,ward:`Orthopedics`,drug:`Ibuprofen 400mg`,qty:`20 tabs`,status:`dispensed`,doctor:`Dr. Malik`,time:`8:52 AM`},{id:`Rx-20479`,patient:`Ayla Khatoon`,initials:`AK`,avatarColor:`#a05c00`,bg:`#fff4e6`,ward:`Neurology`,drug:`Levetiracetam 500mg`,qty:`60 tabs`,status:`pending`,doctor:`Dr. Siddiqui`,time:`8:30 AM`},{id:`Rx-20478`,patient:`Tariq Mehmood`,initials:`TM`,avatarColor:`#8b1a1a`,bg:`#fdf0f0`,ward:`Oncology`,drug:`Ondansetron 4mg`,qty:`10 tabs`,status:`on hold`,doctor:`Dr. Yusuf`,time:`8:11 AM`},{id:`Rx-20477`,patient:`Fatima Zahra`,initials:`FZ`,avatarColor:`#534ab7`,bg:`#eeedfe`,ward:`Pediatrics`,drug:`Amoxicillin 250mg`,qty:`1 bottle`,status:`dispensed`,doctor:`Dr. Noor`,time:`7:55 AM`}],c=[{name:`Paracetamol 500mg`,cat:`Analgesic`,stock:85,max:100,color:`#0d7377`,bg:`#e6f7f8`},{name:`Metformin 500mg`,cat:`Antidiabetic`,stock:42,max:100,color:`#c9a96e`,bg:`#f5ead5`},{name:`Amoxicillin 500mg`,cat:`Antibiotic`,stock:18,max:100,color:`#d14a4a`,bg:`#fdf0f0`},{name:`Omeprazole 20mg`,cat:`Antacid`,stock:63,max:100,color:`#1a2f55`,bg:`#e8f0fb`},{name:`Atorvastatin 10mg`,cat:`Statin`,stock:29,max:100,color:`#e07b00`,bg:`#fff4e6`}],l=[{type:`danger`,title:`Amoxicillin 500mg — Low Stock`,desc:`Only 54 units remaining (threshold: 100)`,time:`Now`},{type:`warn`,title:`Warfarin 5mg — Expiring Soon`,desc:`Batch EX-4421 expires in 14 days`,time:`12 min`},{type:`warn`,title:`Atorvastatin 10mg — Reorder Point`,desc:`87 units — supplier order advised`,time:`1 hr`},{type:`info`,title:`Metformin 500mg — Received`,desc:`New shipment of 500 units logged`,time:`2 hr`}],u=[{time:`10`,period:`AM`,title:`Ward A Distribution`,sub:`General Medicine · 34 items`,color:`#0d7377`},{time:`11`,period:`AM`,title:`ICU Medication Run`,sub:`Critical Care · 18 items`,color:`#d14a4a`},{time:`02`,period:`PM`,title:`Oncology Chemo Prep`,sub:`Oncology Ward · 6 items`,color:`#534ab7`},{time:`04`,period:`PM`,title:`Evening Round Dispense`,sub:`All Wards · 52 items`,color:`#c9a96e`}],d=[{name:`Ceftriaxone`,info:`Antibiotic · IV/IM`,price:`₨ 420`},{name:`Heparin`,info:`Anticoagulant · IV`,price:`₨ 1,200`},{name:`Morphine`,info:`Opioid · IV`,price:`₨ 880`},{name:`Insulin Glargine`,info:`Antidiabetic · SC`,price:`₨ 2,600`}],f=[{icon:`⊞`,label:`Dashboard`,active:!0},{icon:`📋`,label:`Prescriptions`,active:!1},{icon:`📦`,label:`Inventory`,active:!1},{icon:`🏥`,label:`Ward Requests`,active:!1},{icon:`🔄`,label:`Orders & Procurement`,active:!1},{icon:`📊`,label:`Reports`,active:!1},{icon:`💊`,label:`Drug Database`,active:!1},{icon:`⚙️`,label:`Settings`,active:!1}];function p({status:e}){let[t,n]={pending:[`warn`,`Pending`],dispensed:[`success`,`Dispensed`],"on hold":[`danger`,`On Hold`]}[e]||[`navy`,e];return(0,a.jsx)(`span`,{className:`badge ${t}`,children:n})}var m=r(new Date,`eeee, MMMM dd`);function h(){let[e,t]=(0,i.useState)(!1),[n,r]=(0,i.useState)(`all`),[h,g]=(0,i.useState)(``),_=s.filter(e=>n===`pending`?e.status===`pending`:n===`dispensed`?e.status===`dispensed`:!0).filter(e=>h===``||e.patient.toLowerCase().includes(h.toLowerCase())||e.drug.toLowerCase().includes(h.toLowerCase()));return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(`style`,{children:o}),(0,a.jsxs)(`div`,{className:`pharmacy-root`,children:[(0,a.jsxs)(`aside`,{className:`sidebar`,children:[(0,a.jsxs)(`div`,{className:`sidebar-brand`,children:[(0,a.jsx)(`div`,{className:`cross`}),(0,a.jsx)(`div`,{className:`brand-name`,children:`Allied Hospital`}),(0,a.jsx)(`div`,{className:`brand-sub`,children:`Pharmacy Module`})]}),(0,a.jsxs)(`nav`,{className:`sidebar-nav`,children:[(0,a.jsx)(`div`,{className:`nav-section-label`,children:`Main`}),f.slice(0,4).map((e,t)=>(0,a.jsxs)(`div`,{className:`nav-item${e.active?` active`:``}`,children:[(0,a.jsx)(`span`,{style:{fontSize:16},children:e.icon}),e.label]},t)),(0,a.jsx)(`div`,{className:`nav-section-label`,children:`Management`}),f.slice(4).map((e,t)=>(0,a.jsxs)(`div`,{className:`nav-item`,children:[(0,a.jsx)(`span`,{style:{fontSize:16},children:e.icon}),e.label]},t))]}),(0,a.jsx)(`div`,{className:`sidebar-footer`,children:(0,a.jsxs)(`div`,{className:`user-chip`,children:[(0,a.jsx)(`div`,{className:`avatar`,children:`MA`}),(0,a.jsxs)(`div`,{className:`user-info`,children:[(0,a.jsx)(`p`,{children:`Moeez Ali`}),(0,a.jsx)(`span`,{children:`Head Pharmacist`})]})]})})]}),(0,a.jsxs)(`div`,{className:`main-content`,children:[(0,a.jsxs)(`div`,{className:`topbar`,children:[(0,a.jsxs)(`div`,{className:`topbar-left`,children:[(0,a.jsx)(`h1`,{children:`Pharmacy Dashboard`}),(0,a.jsx)(`p`,{children:m})]}),(0,a.jsxs)(`div`,{className:`topbar-right`,children:[(0,a.jsxs)(`div`,{className:`search-box`,children:[(0,a.jsx)(`span`,{style:{color:`#8fa3bc`,fontSize:15},children:`🔍`}),(0,a.jsx)(`input`,{placeholder:`Search prescriptions, drugs…`,value:h,onChange:e=>g(e.target.value)})]}),(0,a.jsxs)(`button`,{className:`icon-btn`,children:[`🔔`,(0,a.jsx)(`span`,{className:`notif-dot`})]}),(0,a.jsx)(`button`,{className:`action-btn gold`,onClick:()=>t(!0),children:`+ New Prescription`})]})]}),(0,a.jsxs)(`div`,{className:`page-body`,children:[(0,a.jsx)(`div`,{className:`stats-grid`,children:[{cls:`navy`,label:`Total Prescriptions`,val:`284`,trend:`up`,trendTxt:`+12 today`,icon:`📋`},{cls:`teal`,label:`Dispensed Today`,val:`191`,trend:`up`,trendTxt:`+8 this hour`,icon:`✅`},{cls:`warn`,label:`Pending Queue`,val:`37`,trend:`neutral`,trendTxt:`Est. wait 14 min`,icon:`⏳`},{cls:`gold`,label:`Low Stock Alerts`,val:`6`,trend:`down`,trendTxt:`2 critical`,icon:`⚠️`}].map((e,t)=>(0,a.jsxs)(`div`,{className:`stat-card ${e.cls} fade-in fade-in-${t+1}`,children:[(0,a.jsx)(`div`,{className:`stat-label`,children:e.label}),(0,a.jsx)(`div`,{className:`stat-value`,children:e.val}),(0,a.jsxs)(`div`,{className:`stat-trend ${e.trend}`,children:[e.trend===`up`?`↑`:e.trend===`down`?`↓`:`·`,` `,e.trendTxt]}),(0,a.jsx)(`div`,{className:`stat-icon-bg`,children:e.icon})]},t))}),(0,a.jsxs)(`div`,{className:`two-col`,style:{animationDelay:`0.1s`},children:[(0,a.jsxs)(`div`,{className:`section-card`,children:[(0,a.jsxs)(`div`,{className:`section-header`,children:[(0,a.jsxs)(`div`,{children:[(0,a.jsx)(`div`,{className:`section-title`,children:`Active Prescriptions`}),(0,a.jsxs)(`div`,{className:`section-sub`,children:[_.length,` records shown`]})]}),(0,a.jsx)(`div`,{className:`pill-tabs`,children:[`all`,`pending`,`dispensed`].map(e=>(0,a.jsx)(`button`,{className:`pill-tab${n===e?` active`:``}`,onClick:()=>r(e),children:e.charAt(0).toUpperCase()+e.slice(1)},e))})]}),(0,a.jsx)(`div`,{className:`table-wrap`,children:(0,a.jsxs)(`table`,{className:`presc-table`,children:[(0,a.jsx)(`thead`,{children:(0,a.jsxs)(`tr`,{children:[(0,a.jsx)(`th`,{children:`Patient`}),(0,a.jsx)(`th`,{children:`Rx ID`}),(0,a.jsx)(`th`,{children:`Medication`}),(0,a.jsx)(`th`,{children:`Ward`}),(0,a.jsx)(`th`,{children:`Status`}),(0,a.jsx)(`th`,{children:`Action`})]})}),(0,a.jsx)(`tbody`,{children:_.map((e,t)=>(0,a.jsxs)(`tr`,{children:[(0,a.jsx)(`td`,{children:(0,a.jsxs)(`div`,{className:`patient-cell`,children:[(0,a.jsx)(`div`,{className:`pat-avatar`,style:{background:e.bg,color:e.avatarColor},children:e.initials}),(0,a.jsxs)(`div`,{children:[(0,a.jsx)(`div`,{className:`pat-name`,children:e.patient}),(0,a.jsxs)(`div`,{className:`pat-id`,children:[e.doctor,` · `,e.time]})]})]})}),(0,a.jsx)(`td`,{style:{fontSize:12,color:`var(--text-muted)`,fontFamily:`monospace`},children:e.id}),(0,a.jsxs)(`td`,{children:[(0,a.jsx)(`div`,{style:{fontSize:13,fontWeight:500,color:`var(--navy)`},children:e.drug}),(0,a.jsx)(`div`,{style:{fontSize:11,color:`var(--text-muted)`},children:e.qty})]}),(0,a.jsx)(`td`,{children:(0,a.jsx)(`span`,{className:`badge teal`,style:{fontSize:11},children:e.ward})}),(0,a.jsx)(`td`,{children:(0,a.jsx)(p,{status:e.status})}),(0,a.jsx)(`td`,{children:e.status===`pending`?(0,a.jsx)(`button`,{className:`action-btn primary`,children:`Dispense`}):(0,a.jsx)(`button`,{className:`action-btn outline`,children:`View`})})]},t))})]})})]}),(0,a.jsxs)(`div`,{className:`section-card`,children:[(0,a.jsxs)(`div`,{className:`section-header`,children:[(0,a.jsxs)(`div`,{children:[(0,a.jsx)(`div`,{className:`section-title`,children:`Alerts & Notifications`}),(0,a.jsx)(`div`,{className:`section-sub`,children:`Real-time system alerts`})]}),(0,a.jsxs)(`span`,{className:`badge danger`,children:[l.length,` Active`]})]}),(0,a.jsx)(`div`,{children:l.map((e,t)=>(0,a.jsxs)(`div`,{className:`alert-item`,children:[(0,a.jsx)(`span`,{className:`alert-dot ${e.type}`}),(0,a.jsxs)(`div`,{style:{flex:1},children:[(0,a.jsx)(`div`,{className:`alert-title`,children:e.title}),(0,a.jsx)(`div`,{className:`alert-desc`,children:e.desc})]}),(0,a.jsx)(`div`,{className:`alert-time`,children:e.time})]},t))})]})]}),(0,a.jsxs)(`div`,{className:`three-col`,children:[(0,a.jsxs)(`div`,{className:`section-card`,children:[(0,a.jsxs)(`div`,{className:`section-header`,children:[(0,a.jsxs)(`div`,{children:[(0,a.jsx)(`div`,{className:`section-title`,children:`Inventory Levels`}),(0,a.jsx)(`div`,{className:`section-sub`,children:`Top medications`})]}),(0,a.jsx)(`button`,{className:`action-btn outline`,style:{fontSize:11,padding:`4px 10px`},children:`View All`})]}),(0,a.jsx)(`div`,{className:`inventory-list`,children:c.map((e,t)=>(0,a.jsxs)(`div`,{className:`inv-item`,children:[(0,a.jsx)(`div`,{className:`inv-icon`,style:{background:e.bg},children:(0,a.jsx)(`span`,{style:{fontSize:16},children:`💊`})}),(0,a.jsxs)(`div`,{style:{flex:1,minWidth:0},children:[(0,a.jsx)(`div`,{className:`inv-name`,children:e.name}),(0,a.jsx)(`div`,{className:`inv-cat`,children:e.cat}),(0,a.jsx)(`div`,{style:{marginTop:6},children:(0,a.jsx)(`div`,{className:`inv-stock-bar-bg`,children:(0,a.jsx)(`div`,{className:`inv-stock-bar`,style:{width:`${e.stock}%`,background:e.stock<25?`#d14a4a`:e.stock<50?`#e07b00`:e.color}})})})]}),(0,a.jsxs)(`div`,{className:`inv-qty`,children:[e.stock,`%`]})]},t))})]}),(0,a.jsxs)(`div`,{className:`section-card`,children:[(0,a.jsx)(`div`,{className:`section-header`,children:(0,a.jsxs)(`div`,{children:[(0,a.jsx)(`div`,{className:`section-title`,children:`Quick Access Drugs`}),(0,a.jsx)(`div`,{className:`section-sub`,children:`High-frequency medications`})]})}),(0,a.jsx)(`div`,{className:`drug-grid`,children:d.map((e,t)=>(0,a.jsxs)(`div`,{className:`drug-card`,children:[(0,a.jsx)(`div`,{style:{fontSize:20,marginBottom:6},children:`💉`}),(0,a.jsx)(`div`,{className:`drug-card-name`,children:e.name}),(0,a.jsx)(`div`,{className:`drug-card-info`,children:e.info}),(0,a.jsx)(`div`,{className:`drug-card-price`,children:e.price})]},t))})]}),(0,a.jsxs)(`div`,{className:`section-card`,children:[(0,a.jsx)(`div`,{className:`section-header`,children:(0,a.jsxs)(`div`,{children:[(0,a.jsx)(`div`,{className:`section-title`,children:`Today's Schedule`}),(0,a.jsx)(`div`,{className:`section-sub`,children:`Ward distribution runs`})]})}),(0,a.jsx)(`div`,{className:`schedule-list`,children:u.map((e,t)=>(0,a.jsxs)(`div`,{className:`schedule-item`,children:[(0,a.jsx)(`div`,{className:`sch-bar`,style:{background:e.color}}),(0,a.jsxs)(`div`,{className:`sch-time`,children:[e.time,(0,a.jsx)(`span`,{children:e.period})]}),(0,a.jsxs)(`div`,{children:[(0,a.jsx)(`div`,{className:`sch-title`,children:e.title}),(0,a.jsx)(`div`,{className:`sch-sub`,children:e.sub})]})]},t))})]})]})]})]}),e&&(0,a.jsx)(`div`,{className:`modal-overlay`,onClick:()=>t(!1),children:(0,a.jsxs)(`div`,{className:`modal`,onClick:e=>e.stopPropagation(),children:[(0,a.jsx)(`button`,{className:`close-btn`,onClick:()=>t(!1),children:`✕`}),(0,a.jsx)(`div`,{className:`modal-title`,children:`New Prescription`}),(0,a.jsx)(`div`,{className:`modal-sub`,children:`Enter prescription details below`}),(0,a.jsxs)(`div`,{className:`form-row`,children:[(0,a.jsxs)(`div`,{className:`form-group`,children:[(0,a.jsx)(`label`,{className:`form-label`,children:`Patient Name`}),(0,a.jsx)(`input`,{className:`form-input`,placeholder:`Full name`})]}),(0,a.jsxs)(`div`,{className:`form-group`,children:[(0,a.jsx)(`label`,{className:`form-label`,children:`Patient ID`}),(0,a.jsx)(`input`,{className:`form-input`,placeholder:`MR-XXXXX`})]})]}),(0,a.jsxs)(`div`,{className:`form-row`,children:[(0,a.jsxs)(`div`,{className:`form-group`,children:[(0,a.jsx)(`label`,{className:`form-label`,children:`Medication`}),(0,a.jsx)(`input`,{className:`form-input`,placeholder:`Drug name & strength`})]}),(0,a.jsxs)(`div`,{className:`form-group`,children:[(0,a.jsx)(`label`,{className:`form-label`,children:`Quantity`}),(0,a.jsx)(`input`,{className:`form-input`,placeholder:`e.g. 30 tabs`})]})]}),(0,a.jsxs)(`div`,{className:`form-row`,children:[(0,a.jsxs)(`div`,{className:`form-group`,children:[(0,a.jsx)(`label`,{className:`form-label`,children:`Ward / Department`}),(0,a.jsx)(`input`,{className:`form-input`,placeholder:`Select ward`})]}),(0,a.jsxs)(`div`,{className:`form-group`,children:[(0,a.jsx)(`label`,{className:`form-label`,children:`Prescribing Doctor`}),(0,a.jsx)(`input`,{className:`form-input`,placeholder:`Dr. Name`})]})]}),(0,a.jsxs)(`div`,{className:`form-group`,children:[(0,a.jsx)(`label`,{className:`form-label`,children:`Dosage Instructions`}),(0,a.jsx)(`input`,{className:`form-input`,placeholder:`e.g. 1 tablet twice daily with food`})]}),(0,a.jsxs)(`div`,{className:`modal-footer`,children:[(0,a.jsx)(`button`,{className:`action-btn outline`,onClick:()=>t(!1),children:`Cancel`}),(0,a.jsx)(`button`,{className:`action-btn primary`,onClick:()=>t(!1),children:`Create Prescription`})]})]})})]})]})}export{h as default};