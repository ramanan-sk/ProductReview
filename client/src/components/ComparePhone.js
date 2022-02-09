import React,{ useState } from 'react';
import Line from './ColoredLine';
import CompareFrame from './CompareFrame';

const ComparePhone = () => {

    const [active,setActive] = useState("NoGo");
    
    return (
        
        <div className="" style={{fontFamily : "Kelly Slab", margin:"5%"}}>

            <h1 className="font-weight-bold">Review</h1>
            <Line color="blue"></Line>

            <div className="input-group mb-3">
                <input type="text" className="form-control form-rounded bg-dark text-white" placeholder="Select" id="mail" name="email" />
                <p className="input-group-append text-default m-2">vs</p>
                <input type="text" className="form-control form-rounded bg-dark text-white" placeholder="Select" id="mail" name="email" />
                <div className="input-group-append">
                    <button type="button" className="btn btn-primary" onClick = {() => setActive("Go")}  >Go</button>
                </div>
            </div>

            <div className="">
                {active === "Go" && <CompareFrame /> }
            </div>

        </div>
    )
}

export default ComparePhone
