import React,{ useState } from 'react';
import Line from './ColoredLine';
import ReviewFrame from './ReviewFrame';

const ReviewPhone = () => {
    
    const [active,setActive] = useState("NoGo");

    return (
        <div className="" style={{fontFamily : "Kelly Slab", margin:"5%"}}>
            <h1 className="font-weight-bold">Review</h1>
            <Line color="blue"></Line>

            <div className="input-group mb-3">
                <input type="text" className="form-control form-rounded bg-dark text-white" placeholder="Search" id="mail" name="email" />
                <div className="input-group-append">
                    <button type="button" className="btn btn-primary" onClick = {() => setActive("Go")}>
                        <span className="glyphicon glyphicon-search"></span> Search
                    </button>
                </div>
            </div>

            <div className="container pt-3 pb-3">
                {active === "Go" && <ReviewFrame /> }
            </div>

            
        </div>
    )
}

export default ReviewPhone
