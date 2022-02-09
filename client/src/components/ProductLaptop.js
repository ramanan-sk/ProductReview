import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField, Popper } from '@material-ui/core';
import React, {Component} from 'react';
import Line from './ColoredLine';
import { connect } from 'react-redux';
import { getItems , getItems2} from '../actions/itemActions';
import PropTypes from 'prop-types';



class ProductLaptop extends Component {

    constructor(props) {
        super(props);
        this.state = {value: '',
                value2:''};
        this.ProductName= null;
        this.handleChange = this.handleChange.bind(this);
        this.handleChange2= this.handleChange2.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
      }
    
      handleChange(event) {
        this.setState({value2: event.target.value});
      }
      handleChange2(event) {
        //this.setState({value2: this.refs.ProductList.input.value});
      }
    
      handleSubmit(event) {
        this.setState({value: event.target.value});
        alert(this.state.value);
        alert(this.state.value2);
        //this.props.getItems();
        //this.props.getItems2(this.state.value2);
      }
    componentDidMount() {
        this.props.getItems();
    }

    render() {
        const { product } = this.props.item;
        const { product2 } = this.props.item;
        const PopperMy = function (props) {
            return <Popper {...props} style={styles.popper} placement="bottom-start" />;
        };
        const styles = (theme) => ({
            popper: {
               width: "fit-content"
            }
        });



        return (
            <div className="" style={{fontFamily : "Kelly Slab", margin: "5%"}}>
                <h1 className="font-weight-bold">Products - Laptop</h1>
                <Line color="blue"></Line>
                
                

                {/* <ComboBoxComponent id="comboelement" placeholder="Select a game" autofill={true} dataSource={this.ProductList} />
                 */}
                <form className="input-group mb-3" onSubmit={this.handleSubmit}>
                    {/* <label>
                    <input type="text" className="form-control form-rounded bg-dark text-white" value={this.state.value} onChange={this.handleChange} />
                    </label> */}
                    <div class="container" style={{width:"90%"}}>
                    <Autocomplete
                    
                    // PopperComponent={PopperMy}
                    //classes="form-control form-rounded bg-dark text-white"
                    fullWidth
                    id="combo-box-demo"
                    
                    options={product}
                    getOptionLabel={(option) => option.brand}
                    renderInput={(params) => <TextField  {...params}  label="Search"  variant="outlined" />}
                />
                </div>
                <div className="container text-center">
                    <input type="submit" className="btn btn-primary d-flex" value="Submit" />
                    
                </div>
                </form>

                {/* <div className="input-group mb-3">
                    <input name= "search" type="text" className="form-control form-rounded bg-dark text-white" placeholder="Search" value={this.state.value} onChange={this.handleChange}/>
                    <input name= "search2" type="text" className="form-control form-rounded bg-dark text-white" placeholder="Search" value={this.state.value2} onChange={this.handleChange2}/>
                    <div className="input-group-append">
                        <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>
                            <span className="glyphicon glyphicon-search" ></span> Search
                        </button>
                    </div>
                </div> */}
                    <h1 >{product.name}</h1>
                    <h1 >{product2.age}</h1>
                    <h1 >{product2.date}</h1>
                    
            </div>
        )
    }
}

ProductLaptop.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object,
    getItems2: PropTypes.func.isRequired,
    item2: PropTypes.object
}

const mapStateToProps = (state) => ({
    item: state.item,
    item2: state.item2
});

export default connect(mapStateToProps, { getItems, getItems2})(ProductLaptop);

