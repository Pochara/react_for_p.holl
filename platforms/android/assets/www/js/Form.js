import React from 'react';
import {Accordion} from 'react-bootstrap';
import {Panel} from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { ButtonToolbar } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import {Glyphicon} from 'react-bootstrap';
require("bootstrap/dist/css/bootstrap.css");
require("../css/css.css");
import {showToast} form '../plugins/com.test.coolplugin/www/js/CoolPlugin.js';

export default class Form extends React.Component{
	constructor(){
        super();
        this.state={
          show:false,
          text:''
        };
    }
    render() {
		
    	 //Check Modal Function
        var checkModal=()=> {
          if(this.state.show){
            this.setState({show: false});
          }else{
            this.setState({show: true});
          }
        }
        //Set Value to Textbox Function
        var setText=(event)=>{
            this.setState({text: event.target.value});
        }
        //Use Array to Collect All Value on Input Button
        var Array1= ["Hello1","Hello2","Hello3"];
        var Array2= ["Hello3","Hello4","Hello5","Hello6","Hello7",];
        var Array3= ["Hello8","Hello9","Hello10"];
        var Array4= ["Hello11","Hello12","Hello13"];
        var Array5= ["Hello14","Hello15","Hello16"];
        var Array6= ["Hello17","Hello18","Hello19"];
        //Return Textbox
        var getValue=(value)=>{
        		return(
        			<input type="button" onClick={setText} value={value}/>
       			);
        };
		
		return(
			<ButtonToolbar>
                    <input onClick={showToast} type="text" value={this.state.text}></input>
                    
                </ButtonToolbar>
			);
		}
	
	
}