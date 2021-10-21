import React from 'react';
    
const Services = (props) => {
    const{name,img,description} =props.madical;
    return (
        <div>
            {/* servis section  */}
            <div className="MadicalService">
					<img src={img} className="card-img-top" alt="..."/>
					<div className="card-body">
						<h5 className="card-title">{name}</h5>
						<p className="card-text">{description}</p>
                         
					</div>
					</div>
        </div>
    );
};

export default Services;