import React from 'react'
import Logo from '../assets/white-logo.png'
import Frame from '../assets/Frame.png'

const Settings = () => {
  return (
    <div className='seting'>
      <header className='setting-header'>
        <img src={Logo} alt="logo" loading='lazy' />
        <h3>Settings</h3>
      </header>
      <main className='setting'>
        <section className="setting1">
          <img src={Frame} alt="frame" loading='lazy' />
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
              <label htmlFor="">Full Name</label>
              <input type="text" placeholder='Name' />
              <label htmlFor="">Email</label>
              <input type="text" placeholder='dr@allied.gmail.com' />
            </div>
            <div className='setting-flex'>
              <label htmlFor="">Full Name</label>
              <input type="text" placeholder='Name' />
              <label htmlFor="">Phone Number</label>
              <input type="text" placeholder='+92 123456789' />
            </div>
          </div>
        </section>
        {/* section 2222222 */}
        <section className="setting2 setting-all">
          <h4 className="setting-title"> Professional Details</h4>
          <div className='setting-row'>
            <div className='setting-flex'>
              <label htmlFor="">Specialization</label>
              <input type="text" placeholder='Cardiology' />
              <label htmlFor="">Year of Experiance</label>
              <input type="text" placeholder='12 year' />
              <label htmlFor="">Department</label>
              <input type="text" placeholder='Cardiology & Vascular Medicine' />
            </div>
            <div className='setting-flex'>
              <label htmlFor="">Sub-Speciality</label>
              <input type="text" placeholder='Interventional Cardiology' />
              <label htmlFor="">NPI number</label>
              <input type="text" placeholder='123456789' />
              <label htmlFor="">Hopital / Clinic</label>
              <input type="text" placeholder='Allied Hospital' />
            </div>
          </div>
          <div className="setting-flex">
            <label htmlFor="">Professional Bio</label>
            <textarea rows={2}>I do </textarea>
          </div>
        </section>
        {/* consulting */}
        <section className="setting2 setting-all">
          <h4 className="setting-title"> Consulting Settings</h4>
          <div className='setting-row'>
            <div className='setting-flex'>
              <label htmlFor="">Consulting Fee (RS)</label>
              <input type="text" placeholder='800' />
              {/* togg */}
            </div>
            <div className='setting-flex'>
              <label htmlFor="">Follow-up-fee (RS)</label>
              <input type="text" placeholder='500' />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Settings
