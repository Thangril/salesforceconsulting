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
       return `navbar navbar-expand-lg navbar-dark  ${this.isMobileToggle ? 'bg-dark' : 'purple-gradient' } `
   }
}