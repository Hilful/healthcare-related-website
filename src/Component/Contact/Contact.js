import React from 'react';
import './Contact.css'
const Contact = () => {
    return (
        <div>
            <div className="card-contact">
                <h2>CONTACT</h2>
                <p>Providing Total Health Care Solution</p>
            </div>
            <div className="hg-contactform">
            <form  action="contactForm.php" method="post">
                    <div className="col-sm-6 col-md-6 input">
                        <div className="hg-form-component hg-component--grey">
                            <input className="hg-input" type="text" id="name"/>
                            <label htmlFor="name">Name*</label>
                        </div>
                    </div>
                    <br />
                    <div className="col-sm-6 col-md-6 input">
                        <div className="hg-form-component hg-component--grey">
                            <input className="hg-input" type="text" id="phone"/>
                            <label htmlFor="phone">Phone*</label>
                        </div>
                    </div>
                    <br />
                    <div className="col-sm-6 col-md-6 input">
                        <div className="hg-form-component hg-component--grey">
                            <input className="hg-input" type="text" id="phone"/>
                            <label htmlFor="phone">address</label>
                        </div>
                    </div>
                    <br />
                    <div className="col-sm-6 col-md-6 input">
                        <div className="hg-form-component hg-component--grey">
                            <input className="hg-input" type="text" id="phone"/>
                            <label htmlFor="phone">email</label>
                        </div>
                    </div>
				</form>
                <br />
                <button className="btn btn-info">booking</button>
            </div>
               
        </div>
    );
};

export default Contact;