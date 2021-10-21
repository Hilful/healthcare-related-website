//footer section
import React from 'react';

import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className="row footer-body">
                <div className="col-sm-3">
                    <div className="card card-footer">
                        <div className="card-body">
                        <h5 className="card-title">WHO WE ARE</h5>
                            <p className="card-text">About us </p>
                            <p className="card-text">Awards & Achievements </p>
                            <p className="card-text">Board of Directors </p>
                            <p className="card-text">Clinics & Hospitals </p>
                            <p className="card-text">Our History </p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card card-footer">
                        <div className="card-body">
                            <h5 className="card-title">MEDICAL SERVICES</h5>
                            <p className="card-text">Cancer Care </p>
                            <p className="card-text">Heart Care </p>
                            <p className="card-text">Orthopedic Care </p>
                            <p className="card-text">Women's Health </p>
                            <p className="card-text">Emergency Services </p>
                            <p className="card-text">Urgent Care</p>
                            
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card card-footer">
                        <div className="card-body">
                            <h5 className="card-title">PATIENTS & VISITORS</h5>
                            <p className="card-text">Advance Care Planning</p>
                            <p className="card-text">Billing and Insurance</p>
                            <p className="card-text">Medical Records Request</p>
                            <p className="card-text">Pharmacy</p>
                            <p className="card-text">Patient Education</p>
                            <p className="card-text">Web Nursery</p>
                            
                        </div>
                    </div>
                </div>
                {/* //SUBSCRIBE part */}
                <div className="col-sm-3">
                    <div className="card card-footer">
                        <div className="card-body">
                            <h5 className="card-title">SUBSCRIBE US</h5>
                            <p className="card-text">We sincerely believe that visiting a dentist shouldn't be a frightening or stressful experience! We provide an equally comfortable. </p>
                            <div id="mc_embed_signup_scroll3">
							<input type="email" value="" name="EMAIL" className="email newsletter__input" id="mce-EMAIL3" placeholder="Your E-mail Address"/>
							<button type="submit" name="submit" id="mc-embedded-subscribe3" className="button newsletter__button">Add</button>
						</div>
                            
                        </div>
                    </div>
                </div>
                <hr />
                <h5>© 2021 uhlbd.com | All rights reserved.</h5>   
            </div> 
              
        </div>
        
    );
};

export default Footer;