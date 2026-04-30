import React from 'react'
import { useForm } from 'react-hook-form'
import { useState, useEffect } from 'react';
import { format} from 'date-fns';
import axios from 'axios';

const Staff = () => {
  let { register, handleSubmit, formState: { errors } } = useForm();
  const date = new Date();

  const [Doctors, setDoctors] = useState("");
  const [Nurses, setNurses] = useState("");
  const [Paramedics, setParamedics] = useState("");
  const [Others, setOthers] = useState("");

  const [DATA, setDATA] = useState([])
  const [Record, setRecord] = useState([])
  const latest = DATA[DATA.length - 1];

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:5000/api/staff`, {
        Doctors,
        Nurses,
        Paramedics,
        Others,
      });
      setDATA([...DATA, response.data]);
      setRecord([...Record, response.data]);
      console.log(response.data);
    } catch (error) {
      console.error(error, "bhai, error staff.jsx file ma ha!");
    }
  }

  useEffect(() => {
    const power = async () => {
      try {
        await axios.get(`http://localhost:5000/api/staff`)
          .then(res => setDATA(res.data))
          .catch(err => console.log(err))

        await axios.get(`http://localhost:5000/api/record`)
          .then(res => setRecord(res.data))
          .catch(err => console.log(err))
      } catch (error) {
        console.error(error, "bhai, error staff.jsx file ma ha!");
      }
    }
    power()
  }, [])

  const deleteme = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/record/${id}`)
      setRecord(Record.filter(data => data._id !== id))
    }
    catch (error) {
      console.error(error, "bhai, error staff.jsx file ma ha!");
    }
  }

  return (
    <div>
      <section className="staff-mang">
        <h3 className='title text-center'>Staff Management</h3>
        <section className="details">
          <div className="box-dr">
            <h4><i className="fa-solid fa-user-doctor"></i>Doctors</h4>
            <h5>{latest?.Doctors}</h5>
          </div>
          <div className="box-dr">
            <h4><i className="fa-solid fa-user-nurse"></i>Nurses</h4>
            <h5>{latest?.Nurses}</h5>
          </div>
          <div className="box-dr">
            <h4><i className="fa-solid fa-briefcase-medical"></i>Paramedics</h4>
            <h5>{latest?.Paramedics}</h5>
          </div>
          <div className="box-dr">
            <h4><i className="fa-solid fa-staff-snake"></i>Others</h4>
            <h5>{latest?.Others}</h5>
          </div>
        </section>

        <section className='flex'>
          <div className='edit-staff'>
            <h3>Staff Statistics</h3>
            <h5>
              This information is for users and staff.
            </h5>
            <h4>
              Dated : {format(date, 'eeee,MMMM do,yyyy')}
            </h4>

            <div className="daba">
              <form onSubmit={handlesubmit}>
                <input type="number" placeholder='Number of Doctor'
                  onChange={(e) => setDoctors(e.target.value)}
                /><br />
                <input type="number" placeholder='Number of Nurses'
                  onChange={(e) => setNurses(e.target.value)}
                /><br />
                <input type="number" placeholder='Number of Paramedics'
                  onChange={(e) => setParamedics(e.target.value)}
                /><br />
                <input type="number" placeholder='Number of Others'
                  onChange={(e) => setOthers(e.target.value)}
                /><br />
                <button type='submit'>Submit</button>
              </form>

            </div>
          </div>


          <div className="staff-record">
            <h3>Staff Record</h3>
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Doctors</th>
                  <th>Nurses</th>
                  <th>Paramedics</th>
                  <th>Others</th>
                </tr>
              </thead>
              <tbody>

                {Record.map(data =>
                  <tr key={data._id}>
                    <td>{format(new Date(data.date) , 'eeee ,MMMM do')}</td>
                    <td>{data.Doctors}</td>
                    <td>{data.Nurses}</td>
                    <td>{data.Paramedics}</td>
                    <td>{data.Others}</td>
                    <td>
                      <button onClick={() => deleteme(data._id)}>
                        <i class="fa-solid fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                )}
              </tbody>

            </table>
          </div>
        </section>

      </section>
    </div>
  )
}

export default Staff
