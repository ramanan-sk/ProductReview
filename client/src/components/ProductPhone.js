import { ComboBoxComponent } from '@syncfusion/ej2-react-dropdowns';
import Rating from '@material-ui/lab/Rating';
import React, {Component} from 'react';
import Line from './ColoredLine';
import { connect } from 'react-redux';
import { getItems } from '../actions/itemActions';
import PropTypes from 'prop-types';

class ProductPhone extends Component {

    constructor(props) {
        super(props);
        this.state = {value: '', show: false,prod_name:''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        this.props.getItems(this.state.value);
        this.setState({show: true});
        this.setState({prod_name: this.state.value});
      }
    

    render() {
        const { product } = this.props.item;
        let specs_show = this.state.show ? "block" : "none" ;
        
    return (
        <div className="" style={{fontFamily : "Kelly Slab", margin: "5%"}}>
            <h1 className="font-weight-bold">Product Finder</h1>
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
               <div className="container bg-dark " style={{borderRadius:"20px"}}>
                    <h4 className="text-white pt-3">General</h4>
                    <table class="table table-dark table-striped table-hover ">
                        <tbody>
                        
                            <tr className="d-flex">
                                <td className="col-sm-4">Brand</td>
                                {product.filter(product => product.brand == this.state.prod_name ).map(item => ( <td className="col-sm-8">{item.brand}</td> ))}
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-4">Model</td>
                                {product.filter(product => product.brand == this.state.prod_name ).map(item => ( <td className="col-sm-8">{item.model}</td> ))}
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-4">Launced</td>
                                {product.filter(product => product.brand == this.state.prod_name ).map(item => ( <td className="col-sm-8">{item.launced}</td> ))}
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-4">Dimensions</td>
                                {product.filter(product => product.brand == this.state.prod_name ).map(item => ( <td className="col-sm-8">{item.dimensions}</td> ))}
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-4">Battery</td>
                                {product.filter(product => product.brand == this.state.prod_name ).map(item => ( <td className="col-sm-8">{item.battery}</td> ))}
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-4">Wireless Charging</td>
                                {product.filter(product => product.brand == this.state.prod_name ).map(item => ( <td className="col-sm-8">{item.wireless_chargeing}</td> ))}
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-4">Colours</td>
                                {product.filter(product => product.brand == this.state.prod_name ).map(item => ( <td className="col-sm-8">{item.color}</td> ))}
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="container bg-dark" style={{borderRadius:"20px"}}>
                    <h4 className="text-white pt-2">Camera</h4>
                    <table class="table table-dark table-striped table-hover ">
                        <tbody>
                            <tr className="d-flex">
                                <td className="col-sm-4">Rear Camera</td>
                                {product.filter(product => product.brand == this.state.prod_name ).map(item => ( <td className="col-sm-8">{item.rear_camera}</td> ))}
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-4">Rear Flash</td>
                                {product.filter(product => product.brand == this.state.prod_name ).map(item => ( <td className="col-sm-8">{item.rear_flash}</td> ))}
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-4">Rear AutoFocus</td>
                                {product.filter(product => product.brand == this.state.prod_name ).map(item => ( <td className="col-sm-8">{item.rear_autofocus}</td> ))}
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-4">Front Camera</td>
                                {product.filter(product => product.brand == this.state.prod_name ).map(item => ( <td className="col-sm-8">{item.front_camera}</td> ))}
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-4">Front AutoFocus</td>
                                {product.filter(product => product.brand == this.state.prod_name ).map(item => ( <td className="col-sm-8">{item.front_autofocus}</td> ))}
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-4">Front Flash</td>
                                {product.filter(product => product.brand == this.state.prod_name ).map(item => ( <td className="col-sm-8">{item.front_flash}</td> ))}
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-4">Pop-up Camera</td>
                                {product.filter(product => product.brand == this.state.prod_name ).map(item => ( <td className="col-sm-8">{item.popup_camera}</td> ))}
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="container bg-dark" style={{borderRadius:"20px"}}>
                    <h4 className="text-white pt-2">Hardware</h4>
                    <table class="table table-dark table-striped table-hover ">
                        <tbody>
                            <tr className="d-flex">
                                <td className="col-sm-4">Processor</td>
                                {product.filter(product => product.brand == this.state.prod_name ).map(item => ( <td className="col-sm-8">{item.processor}</td> ))}
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-4">Processor Model</td>
                                {product.filter(product => product.brand == this.state.prod_name ).map(item => ( <td className="col-sm-8">{item.processor_model}</td> ))}
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-4">RAM</td>
                                {product.filter(product => product.brand == this.state.prod_name ).map(item => ( <td className="col-sm-8">{item.ram}</td> ))}
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-4">Internal Storage</td>
                                {product.filter(product => product.brand == this.state.prod_name ).map(item => ( <td className="col-sm-8">{item.internal_storage}</td> ))}
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-4">Expandable Storage</td>
                                {product.filter(product => product.brand == this.state.prod_name ).map(item => ( <td className="col-sm-8">{item.expandable}</td> ))}
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="container bg-dark" style={{borderRadius:"20px"}}>
                    <h4 className="text-white pt-2">Software</h4>
                    <table class="table table-dark table-striped table-hover ">
                        <tbody>
                            <tr className="d-flex">
                                <td className="col-sm-4">Operating System</td>
                                {product.filter(product => product.brand == this.state.prod_name ).map(item => ( <td className="col-sm-8">{item.os}</td> ))}
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-4">Skin</td>
                                {product.filter(product => product.brand == this.state.prod_name ).map(item => ( <td className="col-sm-8">{item.skin}</td> ))}
                            </tr>
                        </tbody>
                    </table>
                </div>


                <div className="container bg-dark" style={{borderRadius:"20px"}}>
                    <h4 className="text-white pt-2">Connectivity</h4>
                    <table class="table table-dark table-striped table-hover ">
                        <tbody>
                            <tr className="d-flex">
                                <td className="col-sm-4">WiFi</td>
                                {product.filter(product => product.brand == this.state.prod_name ).map(item => ( <td className="col-sm-8">{item.wifi}</td> ))}
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-4">GPS</td>
                                {product.filter(product => product.brand == this.state.prod_name ).map(item => ( <td className="col-sm-8">{item.gps}</td> ))}
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-4">Bluetooth</td>
                                {product.filter(product => product.brand == this.state.prod_name ).map(item => ( <td className="col-sm-8">{item.bluetooth}</td> ))}
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-4">NFC</td>
                                {product.filter(product => product.brand == this.state.prod_name ).map(item => ( <td className="col-sm-8">{item.nfc}</td> ))}
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-4">USB</td>
                                {product.filter(product => product.brand == this.state.prod_name ).map(item => ( <td className="col-sm-8">{item.usb}</td> ))}
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-4">Sim Slot</td>
                                {product.filter(product => product.brand == this.state.prod_name ).map(item => ( <td className="col-sm-8">{item.sim_slot}</td> ))}
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-4">Sim 1</td>
                                {product.filter(product => product.brand == this.state.prod_name ).map(item => ( <td className="col-sm-8">{item.sim1}</td> ))}
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-4">Sim 2</td>
                                {product.filter(product => product.brand == this.state.prod_name ).map(item => ( <td className="col-sm-8">{item.sim2}</td> ))}
                            </tr>
                        
                        </tbody>
                    </table>
                </div>

                <div className="container bg-dark" style={{borderRadius:"20px"}}>
                    <h4 className="text-white pt-2">Sensors</h4>
                    <table class="table table-dark table-striped table-hover ">
                        <tbody>
                            <tr className="d-flex">
                                <td className="col-sm-4">Face Unlock</td>
                                {product.filter(product => product.brand == this.state.prod_name ).map(item => ( <td className="col-sm-8">{item.face_unlock}</td> ))}
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-4">Fingerprint Sensor</td>
                                {product.filter(product => product.brand == this.state.prod_name ).map(item => ( <td className="col-sm-8">{item.fingerprint}</td> ))}
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-4">In-Disply FingerPrint Sensor</td>
                                {product.filter(product => product.brand == this.state.prod_name ).map(item => ( <td className="col-sm-8">{item.indisplay}</td> ))}
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-4">Compass</td>
                                {product.filter(product => product.brand == this.state.prod_name ).map(item => ( <td className="col-sm-8">{item.compass}</td> ))}
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-4">Proximity Sensor</td>
                                {product.filter(product => product.brand == this.state.prod_name ).map(item => ( <td className="col-sm-8">{item.proximity}</td> ))}
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-4">Accelerometer</td>
                                {product.filter(product => product.brand == this.state.prod_name ).map(item => ( <td className="col-sm-8">{item.accelerometer}</td> ))}
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-4">Ambient light sensor</td>
                                {product.filter(product => product.brand == this.state.prod_name ).map(item => ( <td className="col-sm-8">{item.light_sensor}</td> ))}
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-4">Gyroscope</td>
                                {product.filter(product => product.brand == this.state.prod_name ).map(item => ( <td className="col-sm-8">{item.gyroscope}</td> ))}
                            </tr>
                        
                        </tbody>
                    </table>
                </div>
                <div className="container bg-dark" style={{borderRadius:"20px"}}>
                    <table class="table table-dark table-striped table-hover ">
                        <tbody>
                            <tr className="d-flex">
                                <td className="col-sm-4">Cost</td>
                                {product.filter(product => product.brand == this.state.prod_name ).map(item => ( <td className="col-sm-8">{item.cost}</td> ))}
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-4">Shopping</td>
                                {product.filter(product => product.brand == this.state.prod_name ).map(item => ( <td className="col-sm-8"><a href={item.amazon}>Amazon</a></td> ))}
                            </tr>
                        </tbody>
                    </table>
                </div>
        </div>
        </div>
    )
    }
}

ProductPhone.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object
}

const mapStateToProps = (state) => ({
    item: state.item
});

export default connect(mapStateToProps, { getItems })(ProductPhone);