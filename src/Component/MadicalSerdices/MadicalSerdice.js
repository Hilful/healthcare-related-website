import React from 'react';
import { Link } from 'react-router-dom';
import'./MadicalServices.css'
const MadicalSerdice = (props) => {
    const{name,img,description} =props.madical;
    return (
        <div>
			{/* api dainamic  */}
            	<div className="MadicalService">
					<img src={img} className="card-img-top" alt="..."/>
					<div className="card-body">
						<h5 className="card-title">{name}</h5>
						<p className="card-text">{description}</p>
                         <Link style={{ textDecoration: 'none',margin:'5px',color: 'black',background:'tomato' }}  to="/about us">read more</Link>
					</div>
					</div>
        </div>
    );
};

export default MadicalSerdice;