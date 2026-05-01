import { useState, useRef } from "react";

const SPECIALIZATIONS = [
  "Cardiology", "Dermatology", "Endocrinology", "Gastroenterology",
  "General Practice", "Neurology", "Oncology", "Orthopedics",
  "Pediatrics", "Psychiatry", "Pulmonology", "Radiology",
  "Rheumatology", "Surgery", "Urology"
];

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const palette = {
  blue: { main: "#1565C0", light: "#E3F2FD", mid: "#1976D2", soft: "#BBDEFB", text: "#0D47A1" },
  green: { main: "#2E7D32", light: "#E8F5E9", mid: "#388E3C", soft: "#C8E6C9", text: "#1B5E20" },
};

const styles = {
  page: {
    minHeight: "100vh",
    background: "#F8FFFE",
    fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
    padding: "0",
  },
  header: {
    background: "linear-gradient(135deg, #1565C0 0%, #2E7D32 100%)",
    padding: "0 40px",
    height: "64px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "sticky",
    top: 0,
    zIndex: 100,
    boxShadow: "0 2px 12px rgba(21,101,192,0.18)",
  },
  headerLogo: {
    display: "flex", alignItems: "center", gap: "10px",
    color: "#fff", fontWeight: 700, fontSize: "20px", letterSpacing: "-0.3px",
  },
  headerRight: { display: "flex", alignItems: "center", gap: "14px" },
  headerBadge: {
    background: "rgba(255,255,255,0.15)", borderRadius: "20px",
    padding: "4px 14px", color: "#fff", fontSize: "13px", fontWeight: 500,
  },
  main: { maxWidth: "960px", margin: "0 auto", padding: "36px 24px 60px" },
  heroCard: {
    background: "#fff",
    borderRadius: "20px",
    border: "1px solid #E3F2FD",
    padding: "32px 36px",
    marginBottom: "24px",
    display: "flex",
    alignItems: "center",
    gap: "32px",
    boxShadow: "0 4px 24px rgba(21,101,192,0.06)",
  },
  avatarWrap: { position: "relative", flexShrink: 0 },
  avatar: {
    width: "100px", height: "100px", borderRadius: "50%",
    background: "linear-gradient(135deg, #1565C0 0%, #2E7D32 100%)",
    display: "flex", alignItems: "center", justifyContent: "center",
    fontSize: "36px", color: "#fff", fontWeight: 700,
    border: "4px solid #fff",
    boxShadow: "0 0 0 3px #BBDEFB",
    overflow: "hidden",
  },
  avatarEdit: {
    position: "absolute", bottom: "2px", right: "2px",
    width: "28px", height: "28px", borderRadius: "50%",
    background: "#1565C0", color: "#fff",
    border: "2px solid #fff", display: "flex",
    alignItems: "center", justifyContent: "center",
    cursor: "pointer", fontSize: "13px",
  },
  heroInfo: { flex: 1 },
  heroName: { fontSize: "24px", fontWeight: 700, color: "#0D47A1", margin: "0 0 4px" },
  heroSub: { fontSize: "14px", color: "#388E3C", fontWeight: 600, margin: "0 0 10px" },
  heroBadges: { display: "flex", gap: "8px", flexWrap: "wrap" },
  badge: {
    padding: "4px 12px", borderRadius: "20px",
    fontSize: "12px", fontWeight: 600,
  },
  statusBadge: {
    background: "#E8F5E9", color: "#2E7D32",
  },
  expBadge: {
    background: "#E3F2FD", color: "#1565C0",
  },
  section: {
    background: "#fff", borderRadius: "16px",
    border: "1px solid #E8F5E9",
    padding: "28px 32px", marginBottom: "20px",
    boxShadow: "0 2px 12px rgba(46,125,50,0.04)",
  },
  sectionTitle: {
    fontSize: "15px", fontWeight: 700, color: "#1565C0",
    margin: "0 0 20px", display: "flex", alignItems: "center", gap: "8px",
    borderBottom: "2px solid #E3F2FD", paddingBottom: "12px",
  },
  dot: {
    width: "8px", height: "8px", borderRadius: "50%",
    background: "linear-gradient(135deg, #1565C0, #2E7D32)",
    flexShrink: 0,
  },
  grid2: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "18px" },
  grid3: { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "18px" },
  fieldGroup: { display: "flex", flexDirection: "column", gap: "6px" },
  label: { fontSize: "12px", fontWeight: 600, color: "#388E3C", textTransform: "uppercase", letterSpacing: "0.4px" },
  input: {
    padding: "10px 14px", borderRadius: "10px",
    border: "1.5px solid #C8E6C9",
    fontSize: "14px", color: "#1a2e1a",
    outline: "none", background: "#fff",
    transition: "border-color 0.2s, box-shadow 0.2s",
    fontFamily: "inherit",
  },
  select: {
    padding: "10px 14px", borderRadius: "10px",
    border: "1.5px solid #C8E6C9",
    fontSize: "14px", color: "#1a2e1a",
    outline: "none", background: "#fff",
    fontFamily: "inherit", appearance: "none",
    cursor: "pointer",
  },
  textarea: {
    padding: "10px 14px", borderRadius: "10px",
    border: "1.5px solid #C8E6C9",
    fontSize: "14px", color: "#1a2e1a",
    outline: "none", background: "#fff",
    fontFamily: "inherit", resize: "vertical", minHeight: "90px",
  },
  toggle: {
    position: "relative", width: "44px", height: "24px",
    borderRadius: "12px", cursor: "pointer",
    transition: "background 0.25s",
    flexShrink: 0,
  },
  toggleKnob: {
    position: "absolute", top: "3px",
    width: "18px", height: "18px",
    borderRadius: "50%", background: "#fff",
    transition: "left 0.25s",
    boxShadow: "0 1px 4px rgba(0,0,0,0.15)",
  },
  dayRow: {
    display: "flex", alignItems: "center",
    gap: "16px", padding: "10px 0",
    borderBottom: "1px solid #F1F8F1",
  },
  dayLabel: { width: "100px", fontSize: "14px", fontWeight: 500, color: "#333" },
  timeRange: { display: "flex", alignItems: "center", gap: "10px", flex: 1 },
  timeInput: {
    padding: "7px 10px", borderRadius: "8px",
    border: "1.5px solid #C8E6C9",
    fontSize: "13px", color: "#1a2e1a",
    outline: "none", background: "#fff",
    fontFamily: "inherit",
  },
  timeSep: { fontSize: "13px", color: "#888" },
  footer: {
    display: "flex", justifyContent: "flex-end",
    gap: "12px", paddingTop: "8px",
  },
  btnOutline: {
    padding: "11px 28px", borderRadius: "10px",
    border: "1.5px solid #1565C0", color: "#1565C0",
    background: "#fff", fontSize: "14px", fontWeight: 600,
    cursor: "pointer", fontFamily: "inherit",
    transition: "background 0.18s",
  },
  btnPrimary: {
    padding: "11px 32px", borderRadius: "10px",
    background: "linear-gradient(135deg, #1565C0 0%, #2E7D32 100%)",
    color: "#fff", border: "none",
    fontSize: "14px", fontWeight: 700,
    cursor: "pointer", fontFamily: "inherit",
    boxShadow: "0 4px 14px rgba(21,101,192,0.25)",
    transition: "opacity 0.18s, transform 0.12s",
  },
  successToast: {
    position: "fixed", top: "80px", right: "28px",
    background: "#2E7D32", color: "#fff",
    padding: "14px 24px", borderRadius: "12px",
    fontSize: "14px", fontWeight: 600,
    boxShadow: "0 8px 24px rgba(46,125,50,0.25)",
    zIndex: 999, display: "flex", alignItems: "center", gap: "8px",
    animation: "slideIn 0.3s ease",
  },
};

const Icon = ({ d, size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d={d} />
  </svg>
);

const Toggle = ({ checked, onChange }) => (
  <div
    onClick={() => onChange(!checked)}
    style={{ ...styles.toggle, background: checked ? "#1565C0" : "#CBD5E0" }}
  >
    <div style={{ ...styles.toggleKnob, left: checked ? "23px" : "3px" }} />
  </div>
);

const InputField = ({ label, type = "text", value, onChange, placeholder, span = 1 }) => {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ ...styles.fieldGroup, gridColumn: span > 1 ? `span ${span}` : undefined }}>
      <label style={styles.label}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        style={{
          ...styles.input,
          borderColor: focused ? "#1565C0" : "#C8E6C9",
          boxShadow: focused ? "0 0 0 3px rgba(21,101,192,0.12)" : "none",
        }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </div>
  );
};

const SelectField = ({ label, value, onChange, options }) => {
  const [focused, setFocused] = useState(false);
  return (
    <div style={styles.fieldGroup}>
      <label style={styles.label}>{label}</label>
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        style={{
          ...styles.select,
          borderColor: focused ? "#1565C0" : "#C8E6C9",
          boxShadow: focused ? "0 0 0 3px rgba(21,101,192,0.12)" : "none",
        }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      >
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
};

const TextAreaField = ({ label, value, onChange, placeholder, span = 1 }) => {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ ...styles.fieldGroup, gridColumn: span > 1 ? `span ${span}` : undefined }}>
      <label style={styles.label}>{label}</label>
      <textarea
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        style={{
          ...styles.textarea,
          borderColor: focused ? "#1565C0" : "#C8E6C9",
          boxShadow: focused ? "0 0 0 3px rgba(21,101,192,0.12)" : "none",
        }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </div>
  );
};

export default function DoctorProfileEdit() {
  const [profile, setProfile] = useState({
    firstName: "Dr. Sarah",
    lastName: "Mitchell",
    email: "s.mitchell@medicorp.org",
    phone: "+1 (312) 555-0192",
    specialization: "Cardiology",
    subSpecialty: "Interventional Cardiology",
    licenseNo: "IL-MED-2018-04821",
    npi: "1234567890",
    experience: "12",
    hospital: "Northwestern Memorial Hospital",
    department: "Cardiology & Vascular Medicine",
    address: "251 E Huron St, Chicago, IL 60611",
    bio: "Board-certified cardiologist specializing in interventional procedures and preventive heart care. Over 12 years of clinical experience managing complex cardiac conditions.",
    consultFee: "350",
    followUpFee: "180",
    telehealth: true,
    acceptNew: true,
    instagram: "",
    linkedin: "linkedin.com/in/dr-mitchell",
  });

  const [schedule, setSchedule] = useState({
    Monday:    { active: true,  from: "09:00", to: "17:00" },
    Tuesday:   { active: true,  from: "09:00", to: "17:00" },
    Wednesday: { active: true,  from: "10:00", to: "18:00" },
    Thursday:  { active: true,  from: "09:00", to: "17:00" },
    Friday:    { active: true,  from: "09:00", to: "15:00" },
    Saturday:  { active: false, from: "10:00", to: "13:00" },
    Sunday:    { active: false, from: "10:00", to: "13:00" },
  });

  const [saved, setSaved] = useState(false);
  const fileRef = useRef();

  const set = (key) => (val) => setProfile(p => ({ ...p, [key]: val }));
  const setDay = (day, key) => (val) => setSchedule(s => ({ ...s, [day]: { ...s[day], [key]: val } }));

  const initials = `${profile.firstName[0] || "D"}${profile.lastName[0] || "M"}`;

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div style={styles.page}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; }
        input:focus, select:focus, textarea:focus { outline: none; }
        @keyframes slideIn { from { opacity: 0; transform: translateX(20px); } to { opacity: 1; transform: translateX(0); } }
        .btn-primary:hover { opacity: 0.88; transform: translateY(-1px); }
        .btn-outline:hover { background: #E3F2FD !important; }
      `}</style>

      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerLogo}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <rect width="28" height="28" rx="8" fill="rgba(255,255,255,0.18)" />
            <path d="M14 6v16M6 14h16" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
          MediCore Portal
        </div>
        <div style={styles.headerRight}>
          <span style={styles.headerBadge}>Edit Profile</span>
          <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "13px", fontWeight: 700 }}>
            {initials}
          </div>
        </div>
      </header>

      <main style={styles.main}>

        {/* Hero Card */}
        <div style={styles.heroCard}>
          <div style={styles.avatarWrap}>
            <div style={styles.avatar}>{initials}</div>
            <div style={styles.avatarEdit} onClick={() => fileRef.current.click()}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
              </svg>
            </div>
            <input ref={fileRef} type="file" accept="image/*" style={{ display: "none" }} />
          </div>
          <div style={styles.heroInfo}>
            <h1 style={styles.heroName}>{profile.firstName} {profile.lastName}</h1>
            <p style={styles.heroSub}>{profile.specialization} · {profile.hospital}</p>
            <div style={styles.heroBadges}>
              <span style={{ ...styles.badge, ...styles.statusBadge }}>✓ Verified</span>
              <span style={{ ...styles.badge, ...styles.expBadge }}>{profile.experience} yrs experience</span>
              {profile.telehealth && <span style={{ ...styles.badge, background: "#E8F5E9", color: "#2E7D32" }}>Telehealth</span>}
              {profile.acceptNew && <span style={{ ...styles.badge, background: "#FFF8E1", color: "#F57F17" }}>Accepting Patients</span>}
            </div>
          </div>
        </div>

        {/* Personal Info */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}><span style={styles.dot} />Personal Information</h2>
          <div style={styles.grid2}>
            <InputField label="First Name" value={profile.firstName} onChange={set("firstName")} placeholder="Dr. Sarah" />
            <InputField label="Last Name" value={profile.lastName} onChange={set("lastName")} placeholder="Mitchell" />
            <InputField label="Email Address" type="email" value={profile.email} onChange={set("email")} placeholder="doctor@hospital.org" />
            <InputField label="Phone Number" type="tel" value={profile.phone} onChange={set("phone")} placeholder="+1 (000) 000-0000" />
          </div>
        </div>

        {/* Professional Info */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}><span style={styles.dot} />Professional Details</h2>
          <div style={styles.grid2}>
            <SelectField label="Specialization" value={profile.specialization} onChange={set("specialization")} options={SPECIALIZATIONS} />
            <InputField label="Sub-Specialty" value={profile.subSpecialty} onChange={set("subSpecialty")} placeholder="e.g. Interventional Cardiology" />
            <InputField label="License Number" value={profile.licenseNo} onChange={set("licenseNo")} placeholder="State-MED-YYYY-XXXXX" />
            <InputField label="NPI Number" value={profile.npi} onChange={set("npi")} placeholder="10-digit NPI" />
            <InputField label="Years of Experience" type="number" value={profile.experience} onChange={set("experience")} placeholder="e.g. 12" />
            <InputField label="Hospital / Clinic" value={profile.hospital} onChange={set("hospital")} placeholder="Hospital name" />
            <InputField label="Department" value={profile.department} onChange={set("department")} placeholder="e.g. Cardiology & Vascular" />
            <InputField label="Office Address" value={profile.address} onChange={set("address")} placeholder="Street, City, State" />
          </div>
          <div style={{ marginTop: "18px" }}>
            <TextAreaField label="Professional Bio" value={profile.bio} onChange={set("bio")} placeholder="A brief summary of your expertise, experience and patient philosophy..." span={2} />
          </div>
        </div>

        {/* Fees & Settings */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}><span style={styles.dot} />Consultation Settings</h2>
          <div style={styles.grid3}>
            <InputField label="Consultation Fee ($)" type="number" value={profile.consultFee} onChange={set("consultFee")} placeholder="350" />
            <InputField label="Follow-up Fee ($)" type="number" value={profile.followUpFee} onChange={set("followUpFee")} placeholder="180" />
            <div />
          </div>
          <div style={{ display: "flex", gap: "32px", marginTop: "20px", flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <Toggle checked={profile.telehealth} onChange={set("telehealth")} />
              <div>
                <div style={{ fontSize: "14px", fontWeight: 600, color: "#222" }}>Telehealth Available</div>
                <div style={{ fontSize: "12px", color: "#888" }}>Accept video consultations</div>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <Toggle checked={profile.acceptNew} onChange={set("acceptNew")} />
              <div>
                <div style={{ fontSize: "14px", fontWeight: 600, color: "#222" }}>Accepting New Patients</div>
                <div style={{ fontSize: "12px", color: "#888" }}>Show as available on portal</div>
              </div>
            </div>
          </div>
        </div>

        {/* Schedule */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}><span style={styles.dot} />Weekly Schedule</h2>
          {DAYS.map((day, i) => (
            <div key={day} style={{ ...styles.dayRow, borderBottom: i === DAYS.length - 1 ? "none" : "1px solid #F1F8F1" }}>
              <span style={styles.dayLabel}>{day}</span>
              <Toggle checked={schedule[day].active} onChange={(v) => setDay(day, "active")(v)} />
              {schedule[day].active ? (
                <div style={styles.timeRange}>
                  <input
                    type="time"
                    value={schedule[day].from}
                    onChange={e => setDay(day, "from")(e.target.value)}
                    style={styles.timeInput}
                  />
                  <span style={styles.timeSep}>to</span>
                  <input
                    type="time"
                    value={schedule[day].to}
                    onChange={e => setDay(day, "to")(e.target.value)}
                    style={styles.timeInput}
                  />
                </div>
              ) : (
                <span style={{ fontSize: "13px", color: "#aaa", marginLeft: "8px" }}>Not available</span>
              )}
            </div>
          ))}
        </div>

        {/* Social / Online */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}><span style={styles.dot} />Online Presence</h2>
          <div style={styles.grid2}>
            <InputField label="LinkedIn Profile" value={profile.linkedin} onChange={set("linkedin")} placeholder="linkedin.com/in/your-name" />
            <InputField label="Instagram Handle" value={profile.instagram} onChange={set("instagram")} placeholder="@handle" />
          </div>
        </div>

        {/* Actions */}
        <div style={styles.footer}>
          <button className="btn-outline" style={styles.btnOutline}>Discard Changes</button>
          <button className="btn-primary" style={styles.btnPrimary} onClick={handleSave}>
            Save Profile
          </button>
        </div>
      </main>

      {/* Toast */}
      {saved && (
        <div style={styles.successToast}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M20 6L9 17l-5-5" />
          </svg>
          Profile updated successfully!
        </div>
      )}
    </div>
  );
}
