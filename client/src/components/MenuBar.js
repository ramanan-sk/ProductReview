import React, { Component } from 'react';
import { Nav,Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link,BrowserRouter as Router,Route } from 'react-router-dom';
import Home from './HomePage';
import ProductPhone from './ProductPhone';
import ProductLaptop from './ProductLaptop';
import ReviewPhone from './ReviewPhone';
import ReviewLaptop from './ReviewLaptop';
import ComparePhone from './ComparePhone';
import CompareLaptop from './CompareLaptop';

class MenuBar extends Component {
    constructor ( props ) {
        super( props )
        this.state = {
            Home: true,
            ProductPhone: false,
            ProductLaptop: false,
            ReviewPhone: false,
            ReviewLaptop: false,
            ComparePhone: false,
            CompareLaptop: false
        }          
    }

  render () {
    return (
        <div>
                <Router>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className = "font-weight-bolder text-info">
                <Navbar.Brand href="#home"><h1 className="navText my-auto">
                  <span  className="navbar-brand d-flex pt-2" style={{fontFamily : "Agency FB"}} >
                        <h3 className = "font-weight-bolder">TECH</h3>
                        <h3 className = "font-weight-bolder text-primary"> INSIGHTS</h3>
                    </span></h1>
                  </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="" style={{fontFamily : "Kelly Slab"}}>
                        <h4><Nav.Link className="mr-5"><Link to='/Home'><span   ></span><span className="text-white">Home</span></Link></Nav.Link></h4>
                        <h4 className = "text-white"><Nav.Link className="mr-5 "><Link to='/ProductPhone'><span className="fa fa-th-list"></span><span className="text-white">Product</span></Link></Nav.Link></h4>
                        {/* <h4><Nav.Link className="mr-5 "><Link to='/ProductLaptop'><span className="fa fa-play-circle"></span>ProductLaptop</Link></Nav.Link></h4> */}
                        <h4><Nav.Link className="mr-5 " ><Link to='/ComparePhone'><span className="fa fa-book"></span><span className="text-white"> Compare</span></Link></Nav.Link></h4>
                        {/* <h4><Nav.Link className="mr-5 " ><Link to='/CompareLaptop'><span className="fa fa-music"></span>CompareLaptop</Link></Nav.Link></h4> */}
                        <h4><Nav.Link className="mr-5 " ><Link to='/ReviewPhone'><span className="fa fa-users"></span><span className="text-white">Review</span></Link></Nav.Link></h4>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Route exact path="/Home" component={Home}></Route>
            <Route exact path="/ProductPhone" component={ProductPhone}></Route>
            {/* <Route exact path="/ProductLaptop" component={ProductLaptop}></Route> */}
            <Route exact path="/ComparePhone" component={CompareLaptop}></Route>
            {/* <Route exact path="/CompareLaptop" component={CompareLaptop}></Route> */}
            <Route exact path="/ReviewPhone" component={ReviewLaptop}></Route>
            </Router>
    </div>
    )
  };
}
export default MenuBar;