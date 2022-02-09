import React, {Component} from 'react';

//import logo from './../tech-insight-logo.jpg';


const headstyle = '';

class Header extends Component {
    render() {
        return (
            <div  style={{backgroundColor: "#aeaeae"}} className="jumbotron d-flex justify-content-center " style={{fontFamily : "Agency FB"}} >
                <h1 className = "display-4 font-weight-bold">TECH</h1>
                <h1 className = "display-4 font-weight-bold text-primary"> INSIGHTS</h1>
            </div>
        )
    }
}

// const Header = () => {
//     return (
//             <div  style={{backgroundColor: "#aeaeae"}} className="jumbotron d-flex justify-content-center " style={{fontFamily : "Agency FB"}} >
//                 <h1 className = "display-4 font-weight-bold">TECH</h1>
//                 <h1 className = "display-4 font-weight-bold text-primary"> INSIGHTS</h1>
//             </div>
//     )
// }


export default Header
