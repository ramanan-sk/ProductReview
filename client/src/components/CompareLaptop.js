import { ComboBoxComponent } from '@syncfusion/ej2-react-dropdowns';
import React, {Component} from 'react';
import Line from './ColoredLine';
import { connect } from 'react-redux';
import { getItems } from '../actions/itemActions';
import PropTypes from 'prop-types';
import Rating from '@material-ui/lab/Rating';

class CompareLaptop extends Component {

    constructor(props) {
        super(props);
        this.state = {value: '',value2: '', show: false,prod_name:'',prod_name2:''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
      handleChange2(event) {
        this.setState({value2: event.target.value});
      }
    
      handleSubmit(event) {
        this.setState({show: true});
        this.setState({prod_name: this.state.value});
        this.setState({prod_name2: this.state.value2});
      }

      componentDidMount(){
          this.props.getItems();
      }
    

    render() {
        const { product } = this.props.item;
        let specs_show = this.state.show ? "block" : "none" ;
        
    return (
        <div className="" style={{fontFamily : "Kelly Slab", margin: "5%"}}>
            <h1 className="font-weight-bold">Comparator</h1>
            <Line color="blue"></Line>
            {/* <ComboBoxComponent id="comboelement" placeholder="Select a game" autofill={true} dataSource={this.product_list} /> */}
            
            <div className="input-group mb-3">
                    <input name= "search" type="text" className="form-control form-rounded bg-dark text-white" placeholder="Search" value={this.state.value} onChange={this.handleChange}/>
                    <p className="input-group-append text-default m-2">vs</p>
                    <input name= "search2" type="text" className="form-control form-rounded bg-dark text-white" placeholder="Search" value={this.state.value2} onChange={this.handleChange2}/>
                    <div className="input-group-append">
                        <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>
                            <span className="glyphicon glyphicon-search" ></span> Search
                        </button>
                    </div>
                </div>
                <div className="text-default d-flex  " style={{borderRadius:"20px"}}>
                    <h1 className="col-sm-2"></h1>
                    {product.filter(product => product.brand == this.state.prod_name ).map(item => ( <h3 className="col-sm-5">{item.brand}</h3> ))}
                    {product.filter(product => product.brand == this.state.prod_name2 ).map(item => ( <h3 className="col-sm-5">{item.brand}</h3> ))}         
                </div>
            <div id="productSpecsArea" style ={{ display: specs_show }} >
            <div className="container bg-dark" style={{borderRadius:"20px"}}>
                    <table class="table table-dark table-striped table-hover ">
                        <tbody>
                            <tr className="d-flex">
                                <td className="col-sm-2">Rating</td>
                                {product.filter(product => product.brand == this.state.prod_name && product.rating == 5).map(item => ( <td className="col-sm-5"><Rating name="half-rating" value={5} readOnly precision={0.5} /></td> ))}
                                {product.filter(product => product.brand == this.state.prod_name && product.rating == 4).map(item => ( <td className="col-sm-5"><Rating name="half-rating" value={4} readOnly precision={0.5} /></td> ))}
                                {product.filter(product => product.brand == this.state.prod_name && product.rating == 3).map(item => ( <td className="col-sm-5"><Rating name="half-rating" value={3} readOnly precision={0.5} /></td> ))}
                                {product.filter(product => product.brand == this.state.prod_name && product.rating == 2).map(item => ( <td className="col-sm-5"><Rating name="half-rating" value={2} readOnly precision={0.5} /></td> ))}
                                {product.filter(product => product.brand == this.state.prod_name && product.rating == 1).map(item => ( <td className="col-sm-5"><Rating name="half-rating" value={1} readOnly precision={0.5} /></td> ))}
                                {product.filter(product => product.brand == this.state.prod_name2 && product.rating == 5).map(item => ( <td className="col-sm-5"><Rating name="half-rating" value={5} readOnly precision={0.5} /></td> ))}
                                {product.filter(product => product.brand == this.state.prod_name2 && product.rating == 4).map(item => ( <td className="col-sm-5"><Rating name="half-rating" value={4} readOnly precision={0.5} /></td> ))}
                                {product.filter(product => product.brand == this.state.prod_name2 && product.rating == 3).map(item => ( <td className="col-sm-5"><Rating name="half-rating" value={3} readOnly precision={0.5} /></td> ))}
                                {product.filter(product => product.brand == this.state.prod_name2 && product.rating == 2).map(item => ( <td className="col-sm-5"><Rating name="half-rating" value={2} readOnly precision={0.5} /></td> ))}
                                {product.filter(product => product.brand == this.state.prod_name2 && product.rating == 1).map(item => ( <td className="col-sm-5"><Rating name="half-rating" value={1} readOnly precision={0.5} /></td> ))}
                            </tr>
                        </tbody>
                    </table>
            </div>
                <div className="container bg-dark " style={{borderRadius:"20px"}}>
                    <h4 className="text-white pt-3">General</h4>
                    <table class="table table-dark table-striped table-hover ">
                        <tbody>
                        
                            <tr className="d-flex">
                                <td className="col-sm-2">Brand</td>
                                {product.filter(product => product.brand == this.state.prod_name ).map(item => ( <td className="col-sm-5">{item.brand}</td> ))}
                                {product.filter(product => product.brand == this.state.prod_name2 ).map(item => ( <td className="col-sm-5">{item.brand}</td> ))}
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-2">Model</td>
                                {product.filter(product => product.brand == this.state.prod_name ).map(item => ( <td className="col-sm-5">{item.model}</td> ))}
                                {product.filter(product => product.brand == this.state.prod_name2 ).map(item => ( <td className="col-sm-5">{item.model}</td> ))}
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-2">Launced</td>
                                {product.filter(product => product.brand == this.state.prod_name ).map(item => ( <td className="col-sm-5">{item.launced}</td> ))}
                                {product.filter(product => product.brand == this.state.prod_name2 ).map(item => ( <td className="col-sm-5">{item.launced}</td> ))}
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-2">Dimensions</td>
                                {product.filter(product => product.brand == this.state.prod_name ).map(item => ( <td className="col-sm-5">{item.dimensions}</td> ))}
                                {product.filter(product => product.brand == this.state.prod_name2 ).map(item => ( <td className="col-sm-5">{item.dimensions}</td> ))}
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-2">Battery</td>
                                {product.filter(product => product.brand == this.state.prod_name ).map(item => ( <td className="col-sm-5">{item.battery}</td> ))}
                                {product.filter(product => product.brand == this.state.prod_name2 ).map(item => ( <td className="col-sm-5">{item.battery}</td> ))}
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-2">Wireless Charging</td>
                                {product.filter(product => product.brand == this.state.prod_name ).map(item => ( <td className="col-sm-5">{item.wireless_chargeing}</td> ))}
                                {product.filter(product => product.brand == this.state.prod_name2 ).map(item => ( <td className="col-sm-5">{item.wireless_chargeing}</td> ))}
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-2">Colours</td>
                                {product.filter(product => product.brand == this.state.prod_name ).map(item => ( <td className="col-sm-5">{item.color}</td> ))}
                                {product.filter(product => product.brand == this.state.prod_name2 ).map(item => ( <td className="col-sm-5">{item.color}</td> ))}
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="container bg-dark" style={{borderRadius:"20px"}}>
                    <h4 className="text-white pt-2">Camera</h4>
                    <table class="table table-dark table-striped table-hover ">
                        <tbody>
                            <tr className="d-flex">
                                <td className="col-sm-2">Rear Camera</td>
                                {product.filter(product => product.brand == this.state.prod_name ).map(item => ( <td className="col-sm-5">{item.rear_camera}</td> ))}
                                {product.filter(product => product.brand == this.state.prod_name2 ).map(item => ( <td className="col-sm-5">{item.rear_camera}</td> ))}
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-2">Rear Flash</td>
                                {product.filter(product => product.brand == this.state.prod_name ).map(item => ( <td className="col-sm-5">{item.rear_flash}</td> ))}
                                {product.filter(product => product.brand == this.state.prod_name2 ).map(item => ( <td className="col-sm-5">{item.rear_flash}</td> ))}
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-2">Rear AutoFocus</td>
                                {product.filter(product => product.brand == this.state.prod_name ).map(item => ( <td className="col-sm-5">{item.rear_autofocus}</td> ))}
                                {product.filter(product => product.brand == this.state.prod_name2 ).map(item => ( <td className="col-sm-5">{item.rear_autofocus}</td> ))}
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-2">Front Camera</td>
                                {product.filter(product => product.brand == this.state.prod_name ).map(item => ( <td className="col-sm-5">{item.front_camera}</td> ))}
                                {product.filter(product => product.brand == this.state.prod_name2 ).map(item => ( <td className="col-sm-5">{item.front_camera}</td> ))}
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-2">Front AutoFocus</td>
                                {product.filter(product => product.brand == this.state.prod_name ).map(item => ( <td className="col-sm-5">{item.front_autofocus}</td> ))}
                                {product.filter(product => product.brand == this.state.prod_name2 ).map(item => ( <td className="col-sm-5">{item.front_autofocus}</td> ))}
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-2">Front Flash</td>
                                {product.filter(product => product.brand == this.state.prod_name ).map(item => ( <td className="col-sm-5">{item.front_flash}</td> ))}
                                {product.filter(product => product.brand == this.state.prod_name2 ).map(item => ( <td className="col-sm-5">{item.front_flash}</td> ))}
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-2">Pop-up Camera</td>
                                {product.filter(product => product.brand == this.state.prod_name ).map(item => ( <td className="col-sm-5">{item.popup_camera}</td> ))}
                                {product.filter(product => product.brand == this.state.prod_name2 ).map(item => ( <td className="col-sm-5">{item.popup_camera}</td> ))}
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="container bg-dark" style={{borderRadius:"20px"}}>
                    <h4 className="text-white pt-2">Hardware</h4>
                    <table class="table table-dark table-striped table-hover ">
                        <tbody>
                            <tr className="d-flex">
                                <td className="col-sm-2">Processor</td>
                                {product.filter(product => product.brand == this.state.prod_name ).map(item => ( <td className="col-sm-5">{item.processor}</td> ))}
                                {product.filter(product => product.brand == this.state.prod_name2 ).map(item => ( <td className="col-sm-5">{item.processor}</td> ))}
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-2">Processor Model</td>
                                {product.filter(product => product.brand == this.state.prod_name ).map(item => ( <td className="col-sm-5">{item.processor_model}</td> ))}
                                {product.filter(product => product.brand == this.state.prod_name2 ).map(item => ( <td className="col-sm-5">{item.processor_model}</td> ))}
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-2">RAM</td>
                                {product.filter(product => product.brand == this.state.prod_name ).map(item => ( <td className="col-sm-5">{item.ram}</td> ))}
                                {product.filter(product => product.brand == this.state.prod_name2 ).map(item => ( <td className="col-sm-5">{item.ram}</td> ))}
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-2">Internal Storage</td>
                                {product.filter(product => product.brand == this.state.prod_name ).map(item => ( <td className="col-sm-5">{item.internal_storage}</td> ))}
                                {product.filter(product => product.brand == this.state.prod_name2 ).map(item => ( <td className="col-sm-5">{item.internal_storage}</td> ))}
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-2">Expandable Storage</td>
                                {product.filter(product => product.brand == this.state.prod_name ).map(item => ( <td className="col-sm-5">{item.expandable}</td> ))}
                                {product.filter(product => product.brand == this.state.prod_name2 ).map(item => ( <td className="col-sm-5">{item.expandable}</td> ))}
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="container bg-dark" style={{borderRadius:"20px"}}>
                    <h4 className="text-white pt-2">Software</h4>
                    <table class="table table-dark table-striped table-hover ">
                        <tbody>
                            <tr className="d-flex">
                                <td className="col-sm-2">Operating System</td>
                                {product.filter(product => product.brand == this.state.prod_name ).map(item => ( <td className="col-sm-5">{item.os}</td> ))}
                                {product.filter(product => product.brand == this.state.prod_name2 ).map(item => ( <td className="col-sm-5">{item.os}</td> ))}
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-2">Skin</td>
                                {product.filter(product => product.brand == this.state.prod_name ).map(item => ( <td className="col-sm-5">{item.skin}</td> ))}
                                {product.filter(product => product.brand == this.state.prod_name2 ).map(item => ( <td className="col-sm-5">{item.skin}</td> ))}
                            </tr>
                        </tbody>
                    </table>
                </div>


                <div className="container bg-dark" style={{borderRadius:"20px"}}>
                    <h4 className="text-white pt-2">Connectivity</h4>
                    <table class="table table-dark table-striped table-hover ">
                        <tbody>
                            <tr className="d-flex">
                                <td className="col-sm-2">WiFi</td>
                                {product.filter(product => product.brand == this.state.prod_name ).map(item => ( <td className="col-sm-5">{item.wifi}</td> ))}
                                {product.filter(product => product.brand == this.state.prod_name2 ).map(item => ( <td className="col-sm-5">{item.wifi}</td> ))}
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-2">GPS</td>
                                {product.filter(product => product.brand == this.state.prod_name ).map(item => ( <td className="col-sm-5">{item.gps}</td> ))}
                                {product.filter(product => product.brand == this.state.prod_name2 ).map(item => ( <td className="col-sm-5">{item.gps}</td> ))}
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-2">Bluetooth</td>
                                {product.filter(product => product.brand == this.state.prod_name ).map(item => ( <td className="col-sm-5">{item.bluetooth}</td> ))}
                                {product.filter(product => product.brand == this.state.prod_name2 ).map(item => ( <td className="col-sm-5">{item.bluetooth}</td> ))}
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-2">NFC</td>
                                {product.filter(product => product.brand == this.state.prod_name ).map(item => ( <td className="col-sm-5">{item.nfc}</td> ))}
                                {product.filter(product => product.brand == this.state.prod_name2 ).map(item => ( <td className="col-sm-5">{item.nfc}</td> ))}
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-2">USB</td>
                                {product.filter(product => product.brand == this.state.prod_name ).map(item => ( <td className="col-sm-5">{item.usb}</td> ))}
                                {product.filter(product => product.brand == this.state.prod_name2 ).map(item => ( <td className="col-sm-5">{item.usb}</td> ))}
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-2">Sim Slot</td>
                                {product.filter(product => product.brand == this.state.prod_name ).map(item => ( <td className="col-sm-5">{item.sim_slot}</td> ))}
                                {product.filter(product => product.brand == this.state.prod_name2 ).map(item => ( <td className="col-sm-5">{item.sim_slot}</td> ))}
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-2">Sim 1</td>
                                {product.filter(product => product.brand == this.state.prod_name ).map(item => ( <td className="col-sm-5">{item.sim1}</td> ))}
                                {product.filter(product => product.brand == this.state.prod_name2 ).map(item => ( <td className="col-sm-5">{item.sim1}</td> ))}
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-2">Sim 2</td>
                                {product.filter(product => product.brand == this.state.prod_name ).map(item => ( <td className="col-sm-5">{item.sim2}</td> ))}
                                {product.filter(product => product.brand == this.state.prod_name2 ).map(item => ( <td className="col-sm-5">{item.sim2}</td> ))}
                            </tr>
                        
                        </tbody>
                    </table>
                </div>

                <div className="container bg-dark" style={{borderRadius:"20px"}}>
                    <h4 className="text-white pt-2">Sensors</h4>
                    <table class="table table-dark table-striped table-hover ">
                        <tbody>
                            <tr className="d-flex">
                                <td className="col-sm-2">Face Unlock</td>
                                {product.filter(product => product.brand == this.state.prod_name ).map(item => ( <td className="col-sm-5">{item.face_unlock}</td> ))}
                                {product.filter(product => product.brand == this.state.prod_name2 ).map(item => ( <td className="col-sm-5">{item.face_unlock}</td> ))}
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-2">Fingerprint Sensor</td>
                                {product.filter(product => product.brand == this.state.prod_name ).map(item => ( <td className="col-sm-5">{item.fingerprint}</td> ))}
                                {product.filter(product => product.brand == this.state.prod_name2 ).map(item => ( <td className="col-sm-5">{item.fingerprint}</td> ))}
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-2">In-Disply FingerPrint Sensor</td>
                                {product.filter(product => product.brand == this.state.prod_name ).map(item => ( <td className="col-sm-5">{item.indisplay}</td> ))}
                                {product.filter(product => product.brand == this.state.prod_name2 ).map(item => ( <td className="col-sm-5">{item.indisplay}</td> ))}
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-2">Compass</td>
                                {product.filter(product => product.brand == this.state.prod_name ).map(item => ( <td className="col-sm-5">{item.compass}</td> ))}
                                {product.filter(product => product.brand == this.state.prod_name2 ).map(item => ( <td className="col-sm-5">{item.compass}</td> ))}
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-2">Proximity Sensor</td>
                                {product.filter(product => product.brand == this.state.prod_name ).map(item => ( <td className="col-sm-5">{item.proximity}</td> ))}
                                {product.filter(product => product.brand == this.state.prod_name2 ).map(item => ( <td className="col-sm-5">{item.proximity}</td> ))}
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-2">Accelerometer</td>
                                {product.filter(product => product.brand == this.state.prod_name ).map(item => ( <td className="col-sm-5">{item.accelerometer}</td> ))}
                                {product.filter(product => product.brand == this.state.prod_name2 ).map(item => ( <td className="col-sm-5">{item.accelerometer}</td> ))}
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-2">Ambient light sensor</td>
                                {product.filter(product => product.brand == this.state.prod_name ).map(item => ( <td className="col-sm-5">{item.light_sensor}</td> ))}
                                {product.filter(product => product.brand == this.state.prod_name2 ).map(item => ( <td className="col-sm-5">{item.light_sensor}</td> ))}
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-2">Gyroscope</td>
                                {product.filter(product => product.brand == this.state.prod_name ).map(item => ( <td className="col-sm-5">{item.gyroscope}</td> ))}
                                {product.filter(product => product.brand == this.state.prod_name2 ).map(item => ( <td className="col-sm-5">{item.gyroscope}</td> ))}
                            </tr>
                        
                        </tbody>
                    </table>
                </div>
                
                <div className="container bg-dark" style={{borderRadius:"20px"}}>
                    <table class="table table-dark table-striped table-hover ">
                        <tbody>
                            <tr className="d-flex">
                                <td className="col-sm-2">Cost</td>
                                {product.filter(product => product.brand == this.state.prod_name ).map(item => ( <td className="col-sm-5">{item.cost}</td> ))}
                                {product.filter(product => product.brand == this.state.prod_name2 ).map(item => ( <td className="col-sm-5">{item.cost}</td> ))}
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-2">Shopping</td>
                                {product.filter(product => product.brand == this.state.prod_name ).map(item => ( <td className="col-sm-5"><a href={item.amazon}>Amazon</a></td> ))}
                                {product.filter(product => product.brand == this.state.prod_name2 ).map(item => ( <td className="col-sm-5"><a href={item.amazon}>Amazon</a></td> ))}
                            </tr>
                        </tbody>
                    </table>
                </div>
        </div>
        </div>
    )
    }
}

CompareLaptop.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object
}

const mapStateToProps = (state) => ({
    item: state.item
});

export default connect(mapStateToProps, { getItems })(CompareLaptop);