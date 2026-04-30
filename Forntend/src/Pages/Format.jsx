import React, { useRef, useState } from 'react'
import whitelogo from '../assets/white-logo.png'
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
const Format = () => {
    const reportRef = useRef();
    const [pdfname, setpdfname] = useState(false);
    const [aslname, setaslname] = useState('Allied');

    const downloadPDF = async () => {
        const element = reportRef.current;

        const canvas = await html2canvas(element, { scale: 2 });
        const imgData = canvas.toDataURL("image/png");

        const pdf = new jsPDF("p", "mm", "a4");

        const imgWidth = 210;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
        pdf.save(aslname + ".pdf");
    };
    return (
        <div>
            {
                pdfname &&
                (
                    <div className='pdf-name'>
                        <input type="text" placeholder='Pdf name' onChange={(e) => setaslname(e.target.value)} defaultValue={aslname} />
                        <button onClick={downloadPDF} className='pdf-ok'><i className="fa-solid fa-download"></i>Download</button>
                        <i onClick={() => setpdfname(!pdfname)} className="fa-solid fa-xmark"></i>
                    </div>
                )
            }
            <section className='sab-to-uta'>
                <h3>Medical Report</h3>
                <div>
                    <button className='preview uni'><i className="fa-regular fa-eye"></i>Preview</button>
                    <button onClick={() => setpdfname(!pdfname)} className='pdf uni'><i className="fa-solid fa-download"></i>Download pdf</button>
                    <button className='share uni'><i className="fa-solid fa-share-nodes"></i>Share to Patient</button>
                </div>
            </section>
            <div className='bg-white ek-masla'>
                <section className="report-left sanjha">
                    <form action="">
                        <h4>1. Patient Details</h4>
                        <div className='hojaim'>
                            <div>
                                <h5>Patient Name</h5>
                                <input type="text" placeholder='Patient Name' />
                            </div>
                            <div>
                                <h5>Patient Id</h5>
                                <input type="text" placeholder='Patient Id' />
                            </div>
                        </div>
                        <div className='hojaim'>
                            <div className='hojaim-new'>
                                <h5>Age / Gender</h5>
                                <div>
                                    <input type="text" placeholder='Age' />
                                    <select name="" id="">
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <h5>Contact</h5>
                                <input type="text" placeholder='Contact' />
                            </div>
                        </div>
                        {/* comment */}
                        <h4>2. Report Information</h4>
                        <div className='hojaim'>
                            <div>
                                <h5>Report Title</h5>
                                <input type="text" placeholder='Report title' />
                            </div>
                            <div>
                                <h5>Report Date</h5>
                                <input type="date" placeholder='Patient Id' />
                            </div>
                        </div>
                        <div className='hojaim'>
                            <div>
                                <h5>Referring Physician (optional)</h5>
                                <input type="text" placeholder='Physician' />
                            </div>
                        </div>
                        <h4>3. Clinical Details</h4>
                        <div className='hojaim'>
                            <input type="text" placeholder='Clinical Details' />
                        </div>
                        <h4>4. Finding</h4>
                        <div className='hojaim'>
                            <div>
                                <h5>Blood Pressure</h5>
                                <input type="text" placeholder='Blood Pressure' />
                            </div>
                            <div>
                                <h5>Heart Rate</h5>
                                <input type="text" placeholder='Heart Rate' />
                            </div>
                        </div>
                        <div className='hojaim'>
                            <div>
                                <h5>Temprature</h5>
                                <input type="text" placeholder='Tempreture (f)' />
                            </div>
                            <div>
                                <h5>Oxygen Saturation</h5>
                                <input type="text" placeholder='Oxygen Saturation' />
                            </div>
                        </div>
                        <div className='hojaim'>
                            <div>
                                <h5>BMI</h5>
                                <input type="text" placeholder='BMI' />
                            </div>
                            <div>
                                <h5>Respiratory Rate</h5>
                                <input type="text" placeholder='Respiratory rate' />
                            </div>
                        </div>
                        <h4>5. Diagnosis</h4>
                        <div className='hojaim'>
                            <input type="text" placeholder='Diagnosis' />
                        </div>
                        <h4>6. Prescription</h4>
                        <div className='hojaim'>
                            <div>
                                <h5>Blood Pressure</h5>
                                <input type="text" placeholder='Blood Pressure' />
                            </div>
                            <div>
                                <h5>Heart Rate</h5>
                                <input type="text" placeholder='Heart Rate' />
                            </div>
                        </div>
                        <div className='hojaim'>
                            <div>
                                <h5>Temprature</h5>
                                <input type="text" placeholder='Tempreture (f)' />
                            </div>
                            <div>
                                <h5>Oxygen Saturation</h5>
                                <input type="text" placeholder='Oxygen Saturation' />
                            </div>
                        </div>
                        <div className='hojaim'>
                            <div>
                                <h5>BMI</h5>
                                <input type="text" placeholder='BMI' />
                            </div>
                            <div>
                                <h5>Respiratory Rate</h5>
                                <input type="text" placeholder='Respiratory rate' />
                            </div>
                        </div>
                        <h4>7. Doctor Notes</h4>
                        <div className='hojaim'>
                            <input type="text" placeholder='Details' />
                        </div>
                        <h4>SIGNATURE</h4>
                        <div className='hojaim'>
                            <input type="text" placeholder='Signature' defaultValue={"Moeez ALi"} />
                        </div>
                        <article className="cautions">
                            <i className="fa-solid fa-circle-exclamation"></i>
                            All fields are required
                        </article>
                    </form>
                </section>
                <section className="report-right sanjha" ref={reportRef}>
                        <div className="format-header">
                            <div className='format-logo'>
                                <img src={whitelogo} alt="" width={100} />
                                <h4>Allied Hospital <br />
                                    <span>Multi Speciality Hospital</span>
                                </h4>
                            </div>
                            <div className="format-contacts">
                                <h4><i class="fa-solid fa-phone"></i> +92 3474236282</h4>
                                <h4><i class="fa-solid fa-location-arrow"></i> Gojra, Faisalbad, Pakistan</h4>
                                <h4><i class="fa-solid fa-at"></i> moeez7697@gmail.com</h4>
                                <h4><i class="fa-solid fa-globe"></i> moeez614.github.io/yt/</h4>
                            </div>
                        </div>
                        <div className="format-main">
                            <h3>Medical Report</h3>
                            <section className='format-one-section'>
                                <div className="format-one">
                                    <div>
                                        <h5>Name</h5>
                                        <h4>:John Doe</h4>
                                    </div>
                                    <div>
                                        <h5>Patient Id</h5>
                                        <h4>:33302-653887-5</h4>
                                    </div>
                                    <div>
                                        <h5>Age/Gender</h5>
                                        <h4>:21/Male</h4>
                                    </div>
                                    <div>
                                        <h5>Contact</h5>
                                        <h4>:+923474236282</h4>
                                    </div>
                                </div>
                                <div className="format-one">
                                    <div>
                                        <h5>Title</h5>
                                        <h4>:Bwaseer</h4>
                                    </div>
                                    <div>
                                        <h5>Report date</h5>
                                        <h4>:01/01/2023</h4>
                                    </div>
                                    <div>
                                        <h5>Referring Physician</h5>
                                        <h4>:Dr. Chothoo</h4>
                                    </div>
                                </div>
                            </section>
                            <h4 className='format-blue'>Clinical Details:</h4>
                            <h5 className="format-black">Bas ki karya frr, ki likha ma..</h5>
                            <p className="format-grey"></p>
                            <h4 className="format-blue">Finding</h4>
                            <nav className='format-black'>
                                <ul className='format-nav'>
                                    <li>Blood pressure : <span>120/80 mmhg</span></li>
                                    <li>Heart rate : <span>102bpm</span></li>
                                    <li>Temperature : <span>98.6 F</span></li>
                                    <li>oxygen saturation : <span>97%</span></li>
                                    <li>BMI : <span>22.5</span></li>
                                    <li>Respiratory rate : <span>16/min</span></li>
                                </ul>
                            </nav>
                            <p className="format-grey"></p>
                            <h4 className='format-blue'>Diagnosis:</h4>
                            <h5 className="format-black">Bas ki karya frr, ki likha ma..</h5>
                            <p className="format-grey"></p>
                            <h4 className='format-blue'>Prescription:</h4>
                            <nav className='format-black'>
                                <ul className='format-nav'>
                                    <li>Blood pressure : <span>120/80 mmhg</span></li>
                                    <li>Heart rate : <span>102bpm</span></li>
                                    <li>Temperature : <span>98.6 F</span></li>
                                    <li>oxygen saturation : <span>97%</span></li>
                                    <li>BMI : <span>22.5</span></li>
                                    <li>Respiratory rate : <span>16/min</span></li>
                                </ul>
                            </nav>
                            <p className="format-grey"></p>
                            <h4 className='format-blue'>Doctor Notes:</h4>
                            <h5 className="format-black">Bas ki karya frr, ki likha ma..</h5>
                            <div className="format-footer">
                                <h4 className='format-sign'>
                                    Moeez Ali
                                </h4>
                                <div>
                                    <article>
                                        <h4 className='pai-jan'>Moeez Ali</h4>
                                        <h4 className='format-black'>MBBS</h4>
                                        <h4 className='format-black'>Reg No. 123456</h4>
                                    </article>
                                    <img src={whitelogo} alt="" width={100} />
                                </div>
                            </div>
                        </div>
                </section>
            </div>
        </div>
    )
}

export default Format
