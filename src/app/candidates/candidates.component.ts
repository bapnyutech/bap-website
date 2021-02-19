import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css'],
  host: {
    '(window:resize)': 'checkButton($event)'
  }
})
export class CandidatesComponent implements OnInit {
  fullScreen: boolean;

  constructor(private router: Router) { 

  }

  ngOnInit() {
    if (window.innerWidth <= 768){
      this.fullScreen = false;
    }
    else{
      this.fullScreen = true;
    }
  }

  button1(){
    /*window.location.href = 'https://docs.google.com/document/d/1ZG40_IydsGMwl-4rAfAJJD6sNlupOcOisdgByxxFf0A/';*/
    window.open('https://docs.google.com/document/d/18L_iH9LG7z_Ty_a6S_7DVCPagryFYnV6p72Y6TQTF5g/');
  }

  button2(){
  	/*window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLScl7sgJQE5j5CY4SX_Q4ySDMz8dsTo_92g370kB_shTWp5Jyg/viewform';*/
    window.open('https://docs.google.com/forms/d/e/1FAIpQLScsHyQvNXJY1nBX_2z-Q5bZgnLQ4NZr9tiAiYVOHOUx1CU-EA/viewform');
  }

  button3(){
    window.open('http://bit.ly/BAPCWF2020');
  }

  fmp(){
    /*window.location.href = 'https://goo.gl/forms/Nft2PkKtiKZjh8Yo2';*/
    window.open('http://bit.ly/fmp2018application');
  }


  toLogin(){
  	this.router.navigateByUrl('/login');
  }

  checkButton(){
    if (window.innerWidth > 768){
      this.fullScreen = true;
    }
    else{
      this.fullScreen=false;
    }
  }
}
