import { ComboBoxComponent } from '@syncfusion/ej2-react-dropdowns';
import React, {Component} from 'react';
import Line from './ColoredLine';
import { connect } from 'react-redux';
import { getItems } from '../actions/itemActions';
import PropTypes from 'prop-types';
import {Carousel} from 'react-bootstrap';
import Rating from '@material-ui/lab/Rating';
import slide1 from './../images/oneplus_nord_first_impressions_top_box_1595677674074.jpg';
import slide2 from './../images/oneplus_nord_first_impressions_cover_1595676316002.jpg';
import slide3 from './../images/oneplus_nord_review_gaming_1595677350689.jpg';
import slide4 from './../images/oneplus_nord_review_logo_1595676543128.jpg';
import slide5 from './../images/oneplus_nord_review_oos_1595677033849.jpg';
import slide6 from './../images/img_20200718_134526_1595674093828-1200x900.jpg';
import slide7 from './../images/img_20200718_134530_1595673998200-1200x900.jpg';
import slide8 from './../images/img_20200718_135827_bokeh_1595674257351-1200x900.jpg';


class ReviewLaptop extends Component {

    constructor(props) {
        super(props);
        this.state = {value: '', show: false,prod_name:''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    componentDidMount(){
        this.props.getItems();
    }
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        this.setState({show: true});
        this.setState({prod_name: this.state.value});
      }
    

    render() {
        const { product } = this.props.item;
        let specs_show = this.state.show ? "block" : "none" ;
        
    return (
        <div className="" style={{fontFamily : "Kelly Slab", margin: "5%"}}>
            <h1 className="font-weight-bold">Product Review</h1>
            <Line color="blue"></Line>
            {/* <ComboBoxComponent id="comboelement" placeholder="Select a game" autofill={true} dataSource={this.product_list} /> */}
            
            <div className="input-group mb-3">
                    <input name= "search" type="text" className="form-control form-rounded bg-dark text-white" placeholder="Search" value={this.state.value} onChange={this.handleChange}/>
                    <div className="input-group-append">
                        <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>
                            <span className="glyphicon glyphicon-search" ></span> Search
                        </button>
                    </div>
            </div>
            
            <div id="productSpecsArea" style ={{ display: specs_show }} >
            
            {product.filter(product => product.brand == this.state.prod_name ).map(item => ( <h1>{item.brand}</h1> ))}
            <div className="container bg-dark" style={{borderRadius:"20px"}}>
                    <table class="table table-dark table-striped table-hover ">
                        <tbody>
                            <tr className="d-flex">
                                <td className="col-sm-4">Rating</td>
                                {product.filter(product => product.brand == this.state.prod_name && product.rating == 5).map(item => ( <td className="col-sm-8"><Rating name="half-rating" value={5} readOnly precision={0.5} /></td> ))}
                                {product.filter(product => product.brand == this.state.prod_name && product.rating == 4).map(item => ( <td className="col-sm-8"><Rating name="half-rating" value={4} readOnly precision={0.5} /></td> ))}
                                {product.filter(product => product.brand == this.state.prod_name && product.rating == 3).map(item => ( <td className="col-sm-8"><Rating name="half-rating" value={3} readOnly precision={0.5} /></td> ))}
                                {product.filter(product => product.brand == this.state.prod_name && product.rating == 2).map(item => ( <td className="col-sm-8"><Rating name="half-rating" value={2} readOnly precision={0.5} /></td> ))}
                                {product.filter(product => product.brand == this.state.prod_name && product.rating == 1).map(item => ( <td className="col-sm-8"><Rating name="half-rating" value={1} readOnly precision={0.5} /></td> ))}
                            </tr>
                        </tbody>
                    </table>
            </div>
            {product.filter(product => product.brand == this.state.prod_name ).map(item => ( <p>{item.review}</p> ))}
                    
               <p></p>

               <h1 style={{textIndent:"0"}}>Gallery</h1>
                <div className="container" >
                    <Carousel style={{height:"20px"}}>
                        <Carousel.Item interval={1000}>
                            <img className="d-block w-100" src={slide1} alt="First slide" />
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                            <img className="d-block w-100" src={slide2} alt="First slide" />
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                            <img className="d-block w-100" src={slide3} alt="First slide" />
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                            <img className="d-block w-100" src={slide4} alt="First slide" />
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                            <img className="d-block w-100" src={slide5} alt="First slide" />
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                            <img className="d-block w-100" src={slide6} alt="First slide" />
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                            <img className="d-block w-100" src={slide7} alt="First slide" />
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                            <img className="d-block w-100" src={slide8} alt="First slide" />
                        </Carousel.Item>
                    </Carousel>
                </div>

            </div>
        </div>
    )
    }
}

ReviewLaptop.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object
}

const mapStateToProps = (state) => ({
    item: state.item
});

export default connect(mapStateToProps, { getItems })(ReviewLaptop);