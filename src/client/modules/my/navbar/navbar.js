import {LightningElement} from 'lwc'
import NAV_DATA from '../../../data/navBarData.js'
export default class Navbar extends LightningElement{
    navList = NAV_DATA

   isMobileToggle= false

   get openMobileNav(){
       return `collapse navbar-collapse ${this.isMobileToggle && 'show'}`
   }
   toggleMobileMenu(){
       this.isMobileToggle = !this.isMobileToggle
   }

   get navMobileDesign(){
       return `fixed-top navbar navbar-expand-lg navbar-dark  ${this.isMobileToggle ? 'bg-dark' : 'purple-gradient' } `
   }

   navSelection(event){
       event.preventDefault()   
       console.log(event.target.name)    
       const name = event.target.name.toLowerCase().replace(/\s+/g,'')
       let tagName = `my-${name}`       
       const elem = document.querySelector(tagName) 
       elem.scrollIntoView()

      
   }
}