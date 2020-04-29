import React from 'react';
import InputRange from 'react-input-range';
import {connect} from 'react-redux';

import './range-input.css';
 
class RangeInput extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      value: props.value,   //represents current 
      maxValue: props.maxValue,
      minValue: props.minValue
    };
  }

  inputChange(value){
    this.props.changeValue(value);
    this.setState({value});
  }
 
  render() {
    return (
        <div class="inline-form-group">
            <span className="input-container-left">
                <input class="range-input min" type="number" placeholder={this.state.value.min} onChange={minValue => this.setState({minValue})}/>
            </span>
            
                <InputRange
                maxValue={this.state.maxValue}
                minValue={this.state.minValue}
                value={this.state.value}
                onChange={value => this.inputChange(value)} />
            
            <span className="input-container-right ">
               <input class="range-input max" type="number" placeholder={this.state.value.max} onChange={maxValue => this.setState({maxValue})}/> 
            </span>
            
        </div>

    );
  }
}

const mapStateToProps = state => {
  return{
      searchFilter: state.product.searchFilter
  }
};

export default connect(mapStateToProps)(RangeInput);