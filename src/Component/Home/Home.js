import React, { useEffect, useState } from 'react';
import workImg from '../../Image/appointment.jpg'
import work from '../../Image/teamslider1.jpg'
import './Home.css'
import MadicalSerdice from '../MadicalSerdices/MadicalSerdice';
const Home = () => {
	const [madical,setMadical] = useState([]);
    const madicals =madical.slice(0,6);
    
    useEffect(()=>{
      // fake api
        fetch('/MedicalService.json')
        .then(res=>res.json())
        .then(data=>setMadical(data))

    },[])
    return (

        <div>
			{/* banner section  */}
            <div className="card card-home">
                <div className="card-body">
                    <h1>Dr.Golam Kibria</h1>
                    <p>Welcome to Dr.Golam Kibria's dental care!</p>
                    <button className="booking-button">Book Appointment</button>
                    <button className="Special-Offers-button">Get Special Offers</button>
                </div>
            </div>
			<div className="row ">
				<div className="col">
                    <div className="card home-body">
					{
                         madicals.map(madical => <MadicalSerdice key={madical.id} madical={madical}/>)
                     }
					</div> 
				</div>
			</div>
			<div className="work">
				<img src={work} alt="" />
				
				<div className="work-detils">
					<h1>DR.Mahmudullah Riad</h1>
					<p>We’re glad you hand over your health concerns to our skilled hands. We'll make sure to deliver the best possible healthcare to all our patients! Of course, we always complement our main services with a customer service oriented approach.</p>
					<br />
					<h4>BOOK AN APPOINTMENT</h4>
					<button className="btn btn-warning">MAKE AN APPOINTMENT</button>
				</div>
			</div>
			{/* schedule section  */}
            <div className="appointmentSection" id="appointment">
				<div className="container container-full">
					<div className="row gutter-0">
						<div className="col-sm-4 col-md-4">
							<div className="appointment__box bg--light">
								<h3 className="appointment__title appointment__title--pb-20"><span>WORKING</span> HOURS</h3>
								<p className="appointment__subtitle appointment__subtitle--pb-20">Appointment time might vary according to emergency cases!!</p>
								<ul className="programList">
									<li className="programList__item">
										Monday - Thursday: <span>10:00 am - 2:00 pm</span>
									</li>
									<li className="programList__item">
										Friday: <span>12:00 am - 3:00 pm</span>
									</li>
									<li className="programList__item">
										Saturday: <span>13:00 am - 3:00 pm</span>
									</li>
									<li className="programList__item">
										Sunday: <span>10:00 am - 2:00 pm</span>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-sm-4 col-md-4">
							<div className="appointment__bgImgWrapper">
								<div className="appointment__bgImg">
                                    <img src={workImg} alt="" />
                                </div>
							</div>
						</div>
					</div>
				</div>
			</div>
        </div>
    );
};

export default Home;