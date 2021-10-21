import React from 'react';
import img1 from '../../Image/catagory1.jpg'
import img2 from '../../Image/catagory2.jpg'
import img3 from '../../Image/catagory3.jpg'
import img4 from '../../Image/catagory4.jpg'
const Shedule = () => {
    // shedule part 
    return (
        <div>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col">
                            <div className="card">
                            <img src={img1}className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">laboratory</h5>
                                
                            </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                            <img src={img2} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Nutrition</h5>
                                
                            </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                            <img src={img3} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">EMERGENCIES</h5>
                                
                            </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                            <img src={img4} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Dentitry</h5>
                                
                            </div>
                            </div>
                        </div>
                        </div>
                </div>
            );
};

export default Shedule;