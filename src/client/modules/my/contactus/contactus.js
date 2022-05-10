import {LightningElement} from 'lwc'
import CONTACT_US from '../../../data/contactusData'
export default class Contactus extends LightningElement{
    formData={}

    contactUs = CONTACT_US

    formHandler(event){
        const {name, value} = event.target
        this.formData[name] = value
      
    }
    sendEmail(){
        console.log(this.formData)
    }
}