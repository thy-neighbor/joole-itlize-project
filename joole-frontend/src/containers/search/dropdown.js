import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export const Dropdown = (props) => {
    //props.values should be a list of objects that have the master product types(ex. mechanical)
    //let list=["Mechanical","Electronic","Stone Age", "Ice Age"];
    const list = props.options ? props.options : [{type:"Mechanical",parentType:null}];
    let productTypes=list.map((value,key) =>{
        if(value.parentType===null){
            return(<a class="dropdown-item" href="#" key={key}>{value.type}</a>);
        }
        return;
    }
        
        
    );

    console.log(productTypes);
        
    return(
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {list[0].type}
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {productTypes}
            </div>
        </div>
    );
    
};

export default Dropdown;

//{productTypes}
/**
                <a class="dropdown-item" href="#">Hello</a>
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a> 
 */