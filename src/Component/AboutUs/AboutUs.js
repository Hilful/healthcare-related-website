import React, { useEffect,useState } from 'react';

import Services from '../Services/Services';

const AboutUs = () => {
    const [madical,setMadical] = useState([]);
    const madicals =madical.slice(0,8);
    
    useEffect(()=>{
      // fake api
        fetch('/Services.json')
        .then(res=>res.json())
        .then(data=>setMadical(data))

    },[])
    return (
        <div>
            <div className="row ">
				<div className="col">
                <div><h1>our Services</h1></div>
                    <div className="card home-body">
                       
					
                    {
                         madicals.map(madical => <Services key={madical.id} madical={madical}/>)
                     }
					</div> 
				</div>
			</div>
        </div>
    );
};

export default AboutUs;