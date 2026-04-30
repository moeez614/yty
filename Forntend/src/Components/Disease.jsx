import React from 'react'
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useForm } from 'react-hook-form';
import { format } from 'date-fns'
import axios from 'axios';
import { useState, useEffect } from 'react';

ChartJS.register(ArcElement, Tooltip, Legend);
const Disease = () => {
    const date = new Date();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [Covid19, setCovid19] = useState("");
    const [Dengue, setDengue] = useState("");
    const [Malaria, setMalaria] = useState("");
    const [Typhoid, setTyphoid] = useState("");
    const [Hepatitis, setHepatitis] = useState("");
    const [Influenza, setInfluenza] = useState("");
    const [Phnemonia, setPhnemonia] = useState("");
    const [Chikenpox, setChikenpox] = useState("");

    const [Update, setUpdate] = useState([]);
    const latest = Update[Update.length - 1];
    const [Record, setRecord] = useState([]);

    const data = {
        labels: ["Covid 19", "Dengue", "Malaria", "Typhoid", "Hepatitis", "Influenza", "Phnemonia", "Chikenpox"],
        datasets: [
            {
                label: "Patients",
                data: [latest?.Covid19, latest?.Dengue, latest?.Malaria, latest?.Typhoid, latest?.Hepatitis, latest?.Influenza, latest?.Phnemonia, latest?.Chikenpox],
                backgroundColor: [
                    "rgb(255, 99, 132)",
                    "rgb(54, 162, 235)",
                    "rgb(255, 206, 86)",
                    "rgb(75, 192, 192)",
                    "rgb(153, 102, 255)",
                    "rgb(255, 159, 64)",
                    "rgb(89, 6, 244)",
                    "rgb(247, 25, 236)"
                ],
                borderWidth: 1,
            }
        ]
    }

    const handlesubmit = async (e) => {
        try {
            const response = await axios.post(`http://localhost:5000/api/disease`, {
                Covid19,
                Dengue,
                Malaria,
                Typhoid,
                Hepatitis,
                Influenza,
                Phnemonia,
                Chikenpox
            })
            console.table(response.data);

            setUpdate([...Update, response.data]);
            setRecord([...Record, response.data]);
        }
        catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        const process = async () => {
            await axios.get(`http://localhost:5000/api/diseaserecord`)
                .then(res => setRecord(res.data))
                .catch(err => console.log(err))
            
            await axios.get(`http://localhost:5000/api/diseaserecord`)
                .then(res => setUpdate(res.data))
                .catch(err => console.log(err))
        }
        process();
    }, [])

    const deleteme = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/diseasedelete/${id}`)
            setRecord(Record.filter(data => data._id !== id))
        }
        catch (error) {
            console.error(error)
        }
    }

    return (
        <div className='disease' >
            <h4 className='title text-center'>Patients & Visitors</h4>
            <h4 className='date'>Dated : {format(date, "eeee,MMMM do, yyyy")}</h4>
            <section className='flex'>
                <div className="in-patient">
                    <table>
                        <tbody>
                            <tr>
                                <td>Number of covid 19 patientsin 24 hours</td>
                                <td>{latest?.Covid19}</td>
                            </tr><tr>
                                <td>Number of Dengue patients in 24 hours</td>
                                <td>{latest?.Dengue}</td>
                            </tr>
                            <tr>
                                <td>Number of Malaria patients in 24 hours</td>
                                <td>{latest?.Malaria}</td>
                            </tr>
                            <tr>
                                <td>Number of Typhoid patients in 24 hours</td>
                                <td>{latest?.Typhoid}</td>
                            </tr>
                            <tr>
                                <td>Number of Hepatitis patients in 24 hours</td>
                                <td>{latest?.Hepatitis}</td>
                            </tr>
                            <tr>
                                <td>Number of Influenza patients in 24 hours</td>
                                <td>{latest?.Influenza}</td>
                            </tr>
                            <tr>
                                <td>Number of Pneumonia patients in 24 hours</td>
                                <td>{latest?.Phnemonia}</td>
                            </tr>
                            <tr>
                                <td>Number of Chickenpox patients in 24 hours</td>
                                <td>{latest?.Chikenpox}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* pie chart */}
                <div style={{ width: "300px", margin: "auto" }}>
                    <Pie data={data} />
                </div>
            </section>

            <section className="input-patient-surva">
                <h4 className='title text-center'>Input Patients</h4>
                <form onSubmit={() => handlesubmit()}>
                    <input type="number" placeholder='Number of Covid 19'
                        onChange={(e) => setCovid19(e.target.value)}
                    />
                    <input type="number" placeholder='Number of Dengue'
                        onChange={(e) => setDengue(e.target.value)}
                    />
                    <input type="number" placeholder='Number of Malaria'
                        onChange={(e) => setMalaria(e.target.value)}
                    />
                    <input type="number" placeholder='Number of Typhoid'
                        onChange={(e) => setTyphoid(e.target.value)}
                    />
                    <input type="number" placeholder='Number of Hepatitis'
                        onChange={(e) => setHepatitis(e.target.value)}
                    />
                    <input type="number" placeholder='Number of Influenza'
                        onChange={(e) => setInfluenza(e.target.value)}
                    />
                    <input type="number" placeholder='Number of Pneumonia'
                        onChange={(e) => setPhnemonia(e.target.value)}
                    />
                    <input type="number" placeholder='Number of Chickenpox'
                        onChange={(e) => setChikenpox(e.target.value)}
                    />
                    <button type="submit">Submit</button>
                </form>
            </section>

            <div className="staff-record">
                <h3>Staff Record</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Covid 19</th>
                            <th>Dengue</th>
                            <th>Malaria</th>
                            <th>Typhoid</th>
                            <th>Hepatitis</th>
                            <th>Influenza</th>
                            <th>Pneumonia</th>
                            <th>Chickenpox</th>

                        </tr>
                    </thead>
                    <tbody>

                        {Record.map(data =>
                            <tr key={data._id}>
                                <td>{format(new Date(data.date), 'eeee ,MMMM do')}</td>
                                <td>{data.Covid19}</td>
                                <td>{data.Dengue}</td>
                                <td>{data.Malaria}</td>
                                <td>{data.Typhoid}</td>
                                <td>{data.Hepatitis}</td>
                                <td>{data.Influenza}</td>
                                <td>{data.Phnemonia}</td>
                                <td>{data.Chikenpox}</td>

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
        </div >
    )
}

export default Disease
