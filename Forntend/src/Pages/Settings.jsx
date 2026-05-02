import React from 'react'
import Logo from '../assets/white-logo.png'
import Frame from '../assets/Frame.png'
import { useState } from 'react'
import Footer from '../Components/Footer'

const Settings = () => {
  const [schedule, setSchedule] = useState({
    monday: true,
    tuesday: true,
    wednesday: true,
    thursday: true,
    friday: true,
    saturday: false,
    sunday: false,
  })
  const handleToggle = (day) => {
    setSchedule(prev => ({
      ...prev,
      [day]: !prev[day]
    }))
  }
  const days = [
    { key: 'monday', label: 'Monday' },
    { key: 'tuesday', label: 'Tuesday' },
    { key: 'wednesday', label: 'Wednesday' },
    { key: 'thursday', label: 'Thursday' },
    { key: 'friday', label: 'Friday' },
    { key: 'saturday', label: 'Saturday' },
    { key: 'sunday', label: 'Sunday' },
  ]

  return (
    <div className='seting'>
      <header className='setting-header'>
        <img src={Logo} alt="logo"/>
        <h3>Settings</h3>
      </header>
      <main className='setting'>
        <section className="setting1">
          <img src={Frame} alt="frame"/>
          <div>
            <h3>
              Dr. Moeez Ali
            </h3>
            <h4>Cardiology . <span>ALLIED HOSPITAL</span></h4>
            <section>
              <h5>Verified</h5>
              <h5>12+ Experiance</h5>
              <h5>Telehealth</h5>
              <h5>Accepting Patients</h5>
            </section>
          </div>
        </section>
        <section className="setting2 setting-all">
          <h4 className="setting-title"> Personal Information</h4>
          <div className='setting-row'>
            <div className='setting-flex'>
              <label htmlFor="fullName">Full Name</label>
              <input id='fullName' name='fullName' type="text" placeholder='Name' />
              <label htmlFor="email">Email</label>
              <input id='email' type="text" placeholder='dr@allied.gmail.com' />
            </div>
            <div className='setting-flex'>
              <label htmlFor="frr">Full Name</label>
              <input id='frr' type="text" placeholder='Name' />
              <label htmlFor="pn">Phone Number</label>
              <input id='pn' type="text" placeholder='+92 123456789' />
            </div>
          </div>
        </section>
        {/* section 2222222 */}
        <section className="setting2 setting-all">
          <h4 className="setting-title"> Professional Details</h4>
          <div className='setting-row'>
            <div className='setting-flex'>
              <label htmlFor="spec">Specialization</label>
              <input id='spec' type="text" placeholder='Cardiology' />
              <label htmlFor="yoe">Year of Experiance</label>
              <input id='yoe' type="text" placeholder='12 year' />
              <label htmlFor="dep">Department</label>
              <input id='dep' type="text" placeholder='Cardiology & Vascular Medicine' />
            </div>
            <div className='setting-flex'>
              <label htmlFor="ss">Sub-Speciality</label>
              <input id='ss' type="text" placeholder='Interventional Cardiology' />
              <label htmlFor="npi">NPI number</label>
              <input id='npi' type="text" placeholder='123456789' />
              <label htmlFor="hospi">Hopital / Clinic</label>
              <input id='hospi' type="text" placeholder='Allied Hospital' />
            </div>
          </div>
          <div className="setting-flex">
            <label htmlFor="bio">Professional Bio</label>
            <textarea name="bio" id='bio' rows={2}>I do </textarea>
          </div>
        </section>
        {/* consulting */}
        <section className="setting2 setting-all">
          <h4 className="setting-title"> Consulting Settings</h4>
          <div className='setting-row'>
            <div className='setting-flex'>
              <label htmlFor="fee">Consulting Fee (RS)</label>
              <input id='fee' type="text" placeholder='800' />
              {/* togg */}
              <section className='toggle'>
                <label className="switch" htmlFor='lol'>
                  <input id='lol' type="checkbox" />
                  <span className="slider"></span>
                </label>
                <div>
                  <h5>Telehealth Available</h5>
                  <p>Accept video consultations</p>
                </div>
              </section>
            </div>
            <div className='setting-flex'>
              <label htmlFor="rs">Follow-up-fee (RS)</label>
              <input id='rs' type="text" placeholder='500' />
              <section className='toggle'>
                <label className="switch" htmlFor='pop'>
                  <input id='pop' type="checkbox" defaultChecked="checked" />
                  <span className="slider"></span>
                </label>
                <div>
                  <h5>Accepting New Patients</h5>
                  <p>Show as available on portal</p>
                </div>
              </section>
            </div>
          </div>
        </section>
        {/* schedule */}
        <section className="setting2 setting-all schedule">
          <h4 className="setting-title"> Weekly Schedule</h4>

          {days.map(({ key, label }) => (
            <div className='toggle afki' key={key}>

              <h4>{label}</h4>

                <label className="switch abki">
                  <input
                    type="checkbox"
                    checked={schedule[key]}
                    onChange={() => handleToggle(key)}
                    aria-label={`${label} availability`}
                  />
                  <span className="slider"></span>
                </label>

                {
                  !schedule[key] ? (
                    <div className='not-found'>Not Available</div>
                  ) : (
                    <div className='time'>

                      <label htmlFor={`${key}-start`} className='pakistan'>
                        <input
                          type="text"
                          id={`${key}-start`}
                          name={`${key}-start`}
                          defaultValue="9:00 AM"
                        />
                        <i className="fa-regular fa-clock"></i>
                      </label>

                      <span>to</span>

                      <label htmlFor={`${key}-end`} className='pakistan'>
                        <input
                          type="text"
                          id={`${key}-end`}
                          name={`${key}-end`}
                          defaultValue="5:00 PM"
                        />
                        <i className="fa-regular fa-clock"></i>
                      </label>
                    </div>
                  )
                }

            </div>
          ))}
        </section>
        {/* end */}
        <section className="setting2 setting-all">
          <h4 className="setting-title"> Online Presence</h4>
          <div className='setting-row'>
            <div className='setting-flex'>
              <label htmlFor="lp">Linkedin Profile</label>
              <input id='lp' type="text" placeholder='linkedin.com/in/dr-moeezali' />
            </div>
            <div className='setting-flex'>
              <label htmlFor="ih">Instagram Handle</label>
              <input id='ih' type="text" placeholder='@handle' />
            </div>
          </div>
        </section>
        <section className="save-cancel">
          <button className='cancel'>Cancel</button>
          <button className='save'>Save</button>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Settings
