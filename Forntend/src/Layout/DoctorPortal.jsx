// import { useState } from "react";

// const patients = [
//   { id: 1, name: "Sarah Mitchell", age: 34, condition: "Hypertension", status: "stable", nextVisit: "Apr 28", avatar: "SM", blood: "A+", phone: "+1 (312) 555-0192" },
//   { id: 2, name: "James Okonkwo", age: 58, condition: "Type 2 Diabetes", status: "critical", nextVisit: "Apr 24", avatar: "JO", blood: "O-", phone: "+1 (773) 555-0841" },
//   { id: 3, name: "Emily Zhao", age: 27, condition: "Asthma", status: "stable", nextVisit: "May 3", avatar: "EZ", blood: "B+", phone: "+1 (312) 555-0374" },
//   { id: 4, name: "Robert Harmon", age: 65, condition: "Coronary Artery Disease", status: "monitoring", nextVisit: "Apr 25", avatar: "RH", blood: "AB+", phone: "+1 (708) 555-0628" },
//   { id: 5, name: "Priya Nair", age: 42, condition: "Hypothyroidism", status: "stable", nextVisit: "May 10", avatar: "PN", blood: "O+", phone: "+1 (847) 555-0213" },
//   { id: 6, name: "Thomas Brennan", age: 51, condition: "COPD", status: "monitoring", nextVisit: "Apr 26", avatar: "TB", blood: "A-", phone: "+1 (630) 555-0947" },
// ];

// const appointments = [
//   { time: "08:30", patient: "James Okonkwo", type: "Follow-up", duration: "30 min", urgent: true },
//   { time: "09:15", patient: "Emily Zhao", type: "Routine Check", duration: "20 min", urgent: false },
//   { time: "10:00", patient: "Robert Harmon", type: "ECG Review", duration: "45 min", urgent: false },
//   { time: "11:30", patient: "Priya Nair", type: "Lab Results", duration: "20 min", urgent: false },
//   { time: "14:00", patient: "Sarah Mitchell", type: "BP Monitoring", duration: "30 min", urgent: false },
//   { time: "15:30", patient: "Thomas Brennan", type: "Pulmonology", duration: "40 min", urgent: true },
// ];

// const vitals = [
//   { label: "Heart Rate", value: "72", unit: "bpm", trend: "stable" },
//   { label: "Blood Pressure", value: "118/78", unit: "mmHg", trend: "stable" },
//   { label: "O₂ Saturation", value: "98", unit: "%", trend: "up" },
//   { label: "Glucose", value: "96", unit: "mg/dL", trend: "down" },
// ];

// const statusColors = {
//   stable: { bg: "#e8f5e9", text: "#2e7d32", dot: "#43a047" },
//   critical: { bg: "#fdecea", text: "#c62828", dot: "#e53935" },
//   monitoring: { bg: "#fff8e1", text: "#f57f17", dot: "#ffa000" },
// };

// export default function DoctorPortal() {
//   const [activeTab, setActiveTab] = useState("dashboard");
//   const [selectedPatient, setSelectedPatient] = useState(null);
//   const [searchQuery, setSearchQuery] = useState("");

//   const filteredPatients = patients.filter(
//     (p) =>
//       p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       p.condition.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div style={{ display: "flex", height: "100vh", fontFamily: "'DM Sans', 'Segoe UI', sans-serif", background: "#f4f6fb", color: "#1a1d2e" }}>
//       {/* Sidebar */}
//       <aside style={{ width: 220, background: "#0f1b35", display: "flex", flexDirection: "column", padding: "24px 0", flexShrink: 0 }}>
//         <div style={{ padding: "0 20px 28px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
//           <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
//             <div style={{ width: 32, height: 32, background: "#3b82f6", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
//               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
//             </div>
//             <div>
//               <div style={{ color: "#fff", fontWeight: 600, fontSize: 14 }}>MediCore</div>
//               <div style={{ color: "#8899bb", fontSize: 11 }}>Portal v2.4</div>
//             </div>
//           </div>
//         </div>

//         <div style={{ padding: "20px 12px", flex: 1 }}>
//           {[
//             { id: "dashboard", label: "Dashboard", icon: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" },
//             { id: "patients", label: "Patients", icon: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" },
//             { id: "appointments", label: "Schedule", icon: "M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" },
//             { id: "records", label: "Records", icon: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8zM14 2v6h6M16 13H8M16 17H8M10 9H8" },
//           ].map((nav) => (
//             <button
//               key={nav.id}
//               onClick={() => setActiveTab(nav.id)}
//               style={{
//                 display: "flex", alignItems: "center", gap: 10, width: "100%",
//                 padding: "10px 12px", borderRadius: 8, border: "none", cursor: "pointer",
//                 background: activeTab === nav.id ? "rgba(59,130,246,0.18)" : "transparent",
//                 color: activeTab === nav.id ? "#60a5fa" : "#8899bb",
//                 fontSize: 13, fontWeight: activeTab === nav.id ? 500 : 400,
//                 marginBottom: 2, transition: "all 0.15s",
//               }}
//             >
//               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
//                 <path d={nav.icon} strokeLinecap="round" strokeLinejoin="round" />
//               </svg>
//               {nav.label}
//             </button>
//           ))}
//         </div>

//         <div style={{ padding: "16px 20px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
//           <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
//             <div style={{ width: 34, height: 34, background: "#1d4ed8", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 13, fontWeight: 600 }}>DR</div>
//             <div>
//               <div style={{ color: "#fff", fontSize: 13, fontWeight: 500 }}>Dr. Rachel Kim</div>
//               <div style={{ color: "#8899bb", fontSize: 11 }}>Cardiologist</div>
//             </div>
//           </div>
//         </div>
//       </aside>

//       {/* Main */}
//       <main style={{ flex: 1, overflow: "auto", display: "flex", flexDirection: "column" }}>
//         {/* Top bar */}
//         <header style={{ background: "#fff", padding: "16px 28px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #e8ecf4", flexShrink: 0 }}>
//           <div>
//             <div style={{ fontSize: 18, fontWeight: 600, color: "#0f1b35" }}>
//               {activeTab === "dashboard" && "Good morning, Dr. Kim"}
//               {activeTab === "patients" && "Patient Registry"}
//               {activeTab === "appointments" && "Today's Schedule"}
//               {activeTab === "records" && "Medical Records"}
//             </div>
//             <div style={{ fontSize: 13, color: "#8899bb", marginTop: 2 }}>Thursday, April 24 · 6 appointments today</div>
//           </div>
//           <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
//             <div style={{ position: "relative" }}>
//               <div style={{ width: 34, height: 34, background: "#f4f6fb", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", border: "1px solid #e8ecf4" }}>
//                 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5c6e8b" strokeWidth="2"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"/></svg>
//               </div>
//               <div style={{ position: "absolute", top: -3, right: -3, width: 10, height: 10, background: "#e53935", borderRadius: "50%", border: "2px solid #fff" }}></div>
//             </div>
//             <div style={{ width: 34, height: 34, background: "#1d4ed8", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 12, fontWeight: 600 }}>DR</div>
//           </div>
//         </header>

//         <div style={{ flex: 1, padding: 28, overflow: "auto" }}>

//           {/* DASHBOARD */}
//           {activeTab === "dashboard" && (
//             <div>
//               {/* Stats */}
//               <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 24 }}>
//                 {[
//                   { label: "Total Patients", value: "128", change: "+4 this month", icon: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8z", color: "#3b82f6", bg: "#eff6ff" },
//                   { label: "Today's Visits", value: "6", change: "2 urgent", icon: "M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01", color: "#8b5cf6", bg: "#f5f3ff" },
//                   { label: "Critical Cases", value: "2", change: "Needs attention", icon: "M22 12h-4l-3 9L9 3l-3 9H2", color: "#ef4444", bg: "#fef2f2" },
//                   { label: "Recovery Rate", value: "94%", change: "+2% this quarter", icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", color: "#10b981", bg: "#ecfdf5" },
//                 ].map((stat, i) => (
//                   <div key={i} style={{ background: "#fff", borderRadius: 12, padding: "18px 20px", border: "1px solid #e8ecf4" }}>
//                     <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
//                       <div>
//                         <div style={{ fontSize: 12, color: "#8899bb", marginBottom: 6 }}>{stat.label}</div>
//                         <div style={{ fontSize: 26, fontWeight: 700, color: "#0f1b35" }}>{stat.value}</div>
//                         <div style={{ fontSize: 11, color: "#8899bb", marginTop: 4 }}>{stat.change}</div>
//                       </div>
//                       <div style={{ width: 38, height: 38, background: stat.bg, borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center" }}>
//                         <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={stat.color} strokeWidth="2">
//                           <path d={stat.icon} strokeLinecap="round" strokeLinejoin="round" />
//                         </svg>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 20 }}>
//                 {/* Today's appointments */}
//                 <div style={{ background: "#fff", borderRadius: 12, border: "1px solid #e8ecf4", padding: "20px 24px" }}>
//                   <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
//                     <div style={{ fontSize: 15, fontWeight: 600, color: "#0f1b35" }}>Today's Appointments</div>
//                     <button onClick={() => setActiveTab("appointments")} style={{ fontSize: 12, color: "#3b82f6", background: "none", border: "none", cursor: "pointer" }}>View all →</button>
//                   </div>
//                   {appointments.slice(0, 5).map((apt, i) => (
//                     <div key={i} style={{ display: "flex", alignItems: "center", gap: 14, padding: "12px 0", borderBottom: i < 4 ? "1px solid #f0f2f8" : "none" }}>
//                       <div style={{ textAlign: "center", width: 48, flexShrink: 0 }}>
//                         <div style={{ fontSize: 13, fontWeight: 600, color: "#0f1b35" }}>{apt.time}</div>
//                         <div style={{ fontSize: 10, color: "#8899bb" }}>{apt.duration}</div>
//                       </div>
//                       <div style={{ width: 3, height: 36, background: apt.urgent ? "#ef4444" : "#e8ecf4", borderRadius: 2, flexShrink: 0 }}></div>
//                       <div style={{ flex: 1 }}>
//                         <div style={{ fontSize: 13, fontWeight: 500, color: "#0f1b35" }}>{apt.patient}</div>
//                         <div style={{ fontSize: 12, color: "#8899bb" }}>{apt.type}</div>
//                       </div>
//                       {apt.urgent && (
//                         <div style={{ fontSize: 10, background: "#fef2f2", color: "#ef4444", padding: "3px 8px", borderRadius: 20, fontWeight: 500 }}>URGENT</div>
//                       )}
//                     </div>
//                   ))}
//                 </div>

//                 {/* Critical patients */}
//                 <div style={{ background: "#fff", borderRadius: 12, border: "1px solid #e8ecf4", padding: "20px 24px" }}>
//                   <div style={{ fontSize: 15, fontWeight: 600, color: "#0f1b35", marginBottom: 18 }}>Requires Attention</div>
//                   {patients.filter(p => p.status !== "stable").map((p, i) => (
//                     <div key={i} style={{ padding: "14px 0", borderBottom: i < patients.filter(x => x.status !== "stable").length - 1 ? "1px solid #f0f2f8" : "none" }}>
//                       <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
//                         <div style={{ width: 32, height: 32, background: p.status === "critical" ? "#fef2f2" : "#fff8e1", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 600, color: p.status === "critical" ? "#ef4444" : "#f59e0b" }}>
//                           {p.avatar}
//                         </div>
//                         <div>
//                           <div style={{ fontSize: 13, fontWeight: 500, color: "#0f1b35" }}>{p.name}</div>
//                           <div style={{ fontSize: 11, color: "#8899bb" }}>{p.condition}</div>
//                         </div>
//                         <div style={{ marginLeft: "auto", width: 8, height: 8, borderRadius: "50%", background: statusColors[p.status].dot }}></div>
//                       </div>
//                       <div style={{ display: "flex", gap: 8 }}>
//                         <div style={{ fontSize: 11, color: "#8899bb" }}>Next visit: <span style={{ color: "#0f1b35", fontWeight: 500 }}>{p.nextVisit}</span></div>
//                         <div style={{ fontSize: 11, background: statusColors[p.status].bg, color: statusColors[p.status].text, padding: "2px 8px", borderRadius: 12 }}>{p.status}</div>
//                       </div>
//                     </div>
//                   ))}

//                   <div style={{ marginTop: 16, background: "#f4f6fb", borderRadius: 8, padding: 14 }}>
//                     <div style={{ fontSize: 12, color: "#8899bb", marginBottom: 8 }}>Latest Vitals — James Okonkwo</div>
//                     <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
//                       {vitals.map((v, i) => (
//                         <div key={i}>
//                           <div style={{ fontSize: 10, color: "#8899bb" }}>{v.label}</div>
//                           <div style={{ fontSize: 14, fontWeight: 600, color: "#0f1b35" }}>{v.value} <span style={{ fontSize: 10, fontWeight: 400, color: "#8899bb" }}>{v.unit}</span></div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* PATIENTS */}
//           {activeTab === "patients" && (
//             <div>
//               <div style={{ display: "flex", gap: 12, marginBottom: 20 }}>
//                 <div style={{ flex: 1, position: "relative" }}>
//                   <svg style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)" }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8899bb" strokeWidth="2">
//                     <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
//                   </svg>
//                   <input
//                     placeholder="Search by name or condition..."
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     style={{ width: "100%", padding: "10px 12px 10px 38px", border: "1px solid #e8ecf4", borderRadius: 9, fontSize: 13, background: "#fff", color: "#0f1b35", outline: "none", boxSizing: "border-box" }}
//                   />
//                 </div>
//                 <button style={{ padding: "10px 18px", background: "#1d4ed8", color: "#fff", border: "none", borderRadius: 9, fontSize: 13, fontWeight: 500, cursor: "pointer" }}>
//                   + Add Patient
//                 </button>
//               </div>

//               <div style={{ background: "#fff", borderRadius: 12, border: "1px solid #e8ecf4", overflow: "hidden" }}>
//                 <table style={{ width: "100%", borderCollapse: "collapse" }}>
//                   <thead>
//                     <tr style={{ background: "#f8f9fd" }}>
//                       {["Patient", "Age", "Condition", "Blood Type", "Status", "Next Visit", ""].map((h, i) => (
//                         <th key={i} style={{ padding: "12px 16px", textAlign: "left", fontSize: 11, fontWeight: 600, color: "#8899bb", textTransform: "uppercase", letterSpacing: "0.05em", borderBottom: "1px solid #e8ecf4" }}>{h}</th>
//                       ))}
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {filteredPatients.map((p, i) => (
//                       <tr key={p.id} style={{ borderBottom: i < filteredPatients.length - 1 ? "1px solid #f0f2f8" : "none", transition: "background 0.1s" }}
//                         onMouseEnter={e => e.currentTarget.style.background = "#fafbff"}
//                         onMouseLeave={e => e.currentTarget.style.background = ""}
//                       >
//                         <td style={{ padding: "14px 16px" }}>
//                           <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
//                             <div style={{ width: 34, height: 34, background: "#eff6ff", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 600, color: "#1d4ed8", flexShrink: 0 }}>{p.avatar}</div>
//                             <div>
//                               <div style={{ fontSize: 13, fontWeight: 500, color: "#0f1b35" }}>{p.name}</div>
//                               <div style={{ fontSize: 11, color: "#8899bb" }}>{p.phone}</div>
//                             </div>
//                           </div>
//                         </td>
//                         <td style={{ padding: "14px 16px", fontSize: 13, color: "#5c6e8b" }}>{p.age} yrs</td>
//                         <td style={{ padding: "14px 16px", fontSize: 13, color: "#0f1b35" }}>{p.condition}</td>
//                         <td style={{ padding: "14px 16px" }}>
//                           <span style={{ background: "#f4f6fb", color: "#5c6e8b", fontSize: 12, padding: "3px 8px", borderRadius: 6, fontWeight: 500 }}>{p.blood}</span>
//                         </td>
//                         <td style={{ padding: "14px 16px" }}>
//                           <span style={{ background: statusColors[p.status].bg, color: statusColors[p.status].text, fontSize: 11, padding: "4px 10px", borderRadius: 20, fontWeight: 500 }}>
//                             {p.status.charAt(0).toUpperCase() + p.status.slice(1)}
//                           </span>
//                         </td>
//                         <td style={{ padding: "14px 16px", fontSize: 13, color: "#5c6e8b" }}>{p.nextVisit}</td>
//                         <td style={{ padding: "14px 16px" }}>
//                           <button
//                             onClick={() => { setSelectedPatient(p); }}
//                             style={{ fontSize: 12, color: "#3b82f6", background: "none", border: "none", cursor: "pointer", fontWeight: 500 }}
//                           >View →</button>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           )}

//           {/* APPOINTMENTS */}
//           {activeTab === "appointments" && (
//             <div>
//               <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: 20 }}>
//                 <div style={{ background: "#fff", borderRadius: 12, border: "1px solid #e8ecf4", padding: "20px 24px" }}>
//                   <div style={{ fontSize: 15, fontWeight: 600, color: "#0f1b35", marginBottom: 20 }}>Thursday, April 24</div>
//                   {appointments.map((apt, i) => (
//                     <div key={i} style={{ display: "flex", gap: 16, marginBottom: 12 }}>
//                       <div style={{ width: 54, textAlign: "right", flexShrink: 0, paddingTop: 12 }}>
//                         <div style={{ fontSize: 13, fontWeight: 600, color: "#0f1b35" }}>{apt.time}</div>
//                       </div>
//                       <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0 }}>
//                         <div style={{ width: 10, height: 10, borderRadius: "50%", background: apt.urgent ? "#ef4444" : "#3b82f6", marginTop: 14, flexShrink: 0 }}></div>
//                         {i < appointments.length - 1 && <div style={{ width: 1, flex: 1, background: "#e8ecf4", minHeight: 24 }}></div>}
//                       </div>
//                       <div style={{ flex: 1, background: apt.urgent ? "#fef2f2" : "#f8f9fd", borderRadius: 10, padding: "12px 16px", marginBottom: 4, border: apt.urgent ? "1px solid #fecaca" : "1px solid #e8ecf4" }}>
//                         <div style={{ display: "flex", justifyContent: "space-between" }}>
//                           <div style={{ fontSize: 13, fontWeight: 500, color: "#0f1b35" }}>{apt.patient}</div>
//                           {apt.urgent && <div style={{ fontSize: 10, background: "#ef4444", color: "#fff", padding: "2px 8px", borderRadius: 20, fontWeight: 500 }}>URGENT</div>}
//                         </div>
//                         <div style={{ fontSize: 12, color: "#8899bb", marginTop: 2 }}>{apt.type} · {apt.duration}</div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 <div>
//                   <div style={{ background: "#fff", borderRadius: 12, border: "1px solid #e8ecf4", padding: "20px 24px", marginBottom: 16 }}>
//                     <div style={{ fontSize: 15, fontWeight: 600, color: "#0f1b35", marginBottom: 14 }}>Summary</div>
//                     {[
//                       { label: "Total today", value: "6" },
//                       { label: "Completed", value: "0" },
//                       { label: "Pending", value: "6" },
//                       { label: "Urgent", value: "2", alert: true },
//                     ].map((item, i) => (
//                       <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 0", borderBottom: i < 3 ? "1px solid #f0f2f8" : "none" }}>
//                         <div style={{ fontSize: 13, color: "#8899bb" }}>{item.label}</div>
//                         <div style={{ fontSize: 14, fontWeight: 600, color: item.alert ? "#ef4444" : "#0f1b35" }}>{item.value}</div>
//                       </div>
//                     ))}
//                   </div>

//                   <div style={{ background: "#0f1b35", borderRadius: 12, padding: "20px 24px" }}>
//                     <div style={{ fontSize: 14, fontWeight: 600, color: "#fff", marginBottom: 4 }}>Next Urgent</div>
//                     <div style={{ fontSize: 12, color: "#8899bb", marginBottom: 14 }}>James Okonkwo · 08:30</div>
//                     <div style={{ fontSize: 12, color: "#8899bb", marginBottom: 16 }}>Diabetic follow-up — blood sugar monitoring required. Patient reported dizziness yesterday.</div>
//                     <div style={{ display: "flex", gap: 8 }}>
//                       <button style={{ flex: 1, padding: "9px 0", background: "#3b82f6", color: "#fff", border: "none", borderRadius: 8, fontSize: 12, fontWeight: 500, cursor: "pointer" }}>Start Visit</button>
//                       <button style={{ padding: "9px 12px", background: "rgba(255,255,255,0.1)", color: "#fff", border: "none", borderRadius: 8, fontSize: 12, cursor: "pointer" }}>Notes</button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* RECORDS */}
//           {activeTab === "records" && (
//             <div style={{ background: "#fff", borderRadius: 12, border: "1px solid #e8ecf4", padding: "24px" }}>
//               <div style={{ fontSize: 15, fontWeight: 600, color: "#0f1b35", marginBottom: 20 }}>Recent Medical Records</div>
//               {patients.map((p, i) => (
//                 <div key={i} style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 0", borderBottom: i < patients.length - 1 ? "1px solid #f0f2f8" : "none" }}>
//                   <div style={{ width: 36, height: 36, background: "#eff6ff", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 600, color: "#1d4ed8" }}>{p.avatar}</div>
//                   <div style={{ flex: 1 }}>
//                     <div style={{ fontSize: 13, fontWeight: 500, color: "#0f1b35" }}>{p.name}</div>
//                     <div style={{ fontSize: 12, color: "#8899bb" }}>{p.condition} · Updated {p.nextVisit}</div>
//                   </div>
//                   <div style={{ display: "flex", gap: 8 }}>
//                     <button style={{ fontSize: 12, color: "#3b82f6", background: "#eff6ff", border: "none", borderRadius: 6, padding: "5px 12px", cursor: "pointer", fontWeight: 500 }}>View</button>
//                     <button style={{ fontSize: 12, color: "#5c6e8b", background: "#f4f6fb", border: "none", borderRadius: 6, padding: "5px 12px", cursor: "pointer" }}>Export</button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </main>

//       {/* Patient detail modal */}
//       {selectedPatient && (
//         <div style={{ position: "fixed", inset: 0, background: "rgba(15,27,53,0.5)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100 }}
//           onClick={() => setSelectedPatient(null)}>
//           <div style={{ background: "#fff", borderRadius: 14, width: 440, padding: 28, boxShadow: "0 20px 60px rgba(0,0,0,0.2)" }}
//             onClick={e => e.stopPropagation()}>
//             <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
//               <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
//                 <div style={{ width: 48, height: 48, background: "#eff6ff", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 600, color: "#1d4ed8" }}>{selectedPatient.avatar}</div>
//                 <div>
//                   <div style={{ fontSize: 16, fontWeight: 600, color: "#0f1b35" }}>{selectedPatient.name}</div>
//                   <div style={{ fontSize: 12, color: "#8899bb" }}>Patient ID #P00{selectedPatient.id}</div>
//                 </div>
//               </div>
//               <button onClick={() => setSelectedPatient(null)} style={{ background: "none", border: "none", cursor: "pointer", color: "#8899bb", fontSize: 20 }}>×</button>
//             </div>

//             <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 20 }}>
//               {[
//                 { label: "Age", value: `${selectedPatient.age} years` },
//                 { label: "Blood Type", value: selectedPatient.blood },
//                 { label: "Condition", value: selectedPatient.condition },
//                 { label: "Status", value: selectedPatient.status },
//                 { label: "Phone", value: selectedPatient.phone },
//                 { label: "Next Visit", value: selectedPatient.nextVisit },
//               ].map((item, i) => (
//                 <div key={i} style={{ background: "#f8f9fd", borderRadius: 8, padding: "10px 14px" }}>
//                   <div style={{ fontSize: 11, color: "#8899bb", marginBottom: 2 }}>{item.label}</div>
//                   <div style={{ fontSize: 13, fontWeight: 500, color: item.label === "Status" ? statusColors[selectedPatient.status].text : "#0f1b35" }}>{item.value}</div>
//                 </div>
//               ))}
//             </div>

//             <div style={{ display: "flex", gap: 10 }}>
//               <button style={{ flex: 1, padding: "10px 0", background: "#1d4ed8", color: "#fff", border: "none", borderRadius: 9, fontSize: 13, fontWeight: 500, cursor: "pointer" }}>Schedule Visit</button>
//               <button style={{ flex: 1, padding: "10px 0", background: "#f4f6fb", color: "#5c6e8b", border: "none", borderRadius: 9, fontSize: 13, cursor: "pointer" }}>View Records</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


import React, { useState } from "react";
// import "./medicalReport.css";
// import Doctor from "../Pages/Doctor";

const DoctorPortal = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    contact: "",
    reportTitle: "",
    date: "",
    doctor: "",
    details: "",
    findings: "",
    diagnosis: "",
    recommendations: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="report-container">

      {/* LEFT SIDE FORM */}
      <div className="form-section">
        <h2>Medical Report Maker</h2>

        <input name="name" placeholder="Patient Name" onChange={handleChange} />
        <input name="age" placeholder="Age" onChange={handleChange} />
        <input name="gender" placeholder="Gender" onChange={handleChange} />
        <input name="contact" placeholder="Contact" onChange={handleChange} />

        <input name="reportTitle" placeholder="Report Title" onChange={handleChange} />
        <input type="date" name="date" onChange={handleChange} />
        <input name="doctor" placeholder="Doctor Name" onChange={handleChange} />

        <textarea name="details" placeholder="Clinical Details" onChange={handleChange}></textarea>
        <textarea name="findings" placeholder="Findings" onChange={handleChange}></textarea>
        <textarea name="diagnosis" placeholder="Diagnosis" onChange={handleChange}></textarea>
        <textarea name="recommendations" placeholder="Recommendations" onChange={handleChange}></textarea>
        <textarea name="notes" placeholder="Doctor Notes" onChange={handleChange}></textarea>

        <button className="btn">Generate Report</button>
      </div>

      {/* RIGHT SIDE PREVIEW */}
      <div className="preview-section">
        <div className="report-paper">

          <h2 className="title">MEDICAL REPORT</h2>

          <div className="info-grid">
            <p><b>Name:</b> {formData.name}</p>
            <p><b>Age:</b> {formData.age}</p>
            <p><b>Gender:</b> {formData.gender}</p>
            <p><b>Contact:</b> {formData.contact}</p>
            <p><b>Date:</b> {formData.date}</p>
            <p><b>Doctor:</b> {formData.doctor}</p>
          </div>

          <div className="section">
            <h4>Clinical Details</h4>
            <p>{formData.details}</p>
          </div>

          <div className="section">
            <h4>Findings</h4>
            <p>{formData.findings}</p>
          </div>

          <div className="section">
            <h4>Diagnosis</h4>
            <p>{formData.diagnosis}</p>
          </div>

          <div className="section">
            <h4>Recommendations</h4>
            <p>{formData.recommendations}</p>
          </div>

          <div className="section">
            <h4>Doctor Notes</h4>
            <p>{formData.notes}</p>
          </div>

          <div className="signature">
            <p>________________________</p>
            <p>{formData.doctor}</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DoctorPortal