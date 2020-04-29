import React from 'react';
import './table.css';

export class ProductCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            checked:false
        }

    }
    
    toggleCheck(input){
        this.setState({
            checked:input
        });
    }

    
    
    render(){
        const {image,manufacturer,series,model,airFlow,powerMax, soundAtMaxSpeed, fanSweepDiameter} = this.props.data;

        return(
            <div className="col-3 justify-content-center">
                <table>
                    <tr>
                        <th>
                            <img className="table-img" src={image} alt="product"/>
                            <div>{manufacturer}</div>
                            <div>{series}</div>
                            <div>{model}</div>
                        </th>

                    </tr>
                    <tr>
                        <td>
                            <div>{airFlow} CFM</div>
                            <div>{powerMax} W at max speed</div>
                            <div>{soundAtMaxSpeed} dBA at max speed</div>
                            <div>{fanSweepDiameter}" fan sweep diameter</div>
                        </td>
                    </tr>
                    <tr>
                        <td>Company</td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox" checked={this.state.checked} onChange={()=>{
                                //this.props.checkEvent(!this.state.checked)
                                this.toggleCheck(!this.state.checked)}}/> Compare
                        </td>
                    </tr>
                </table>
            </div>
            

        );
    }
};

export default ProductCard;