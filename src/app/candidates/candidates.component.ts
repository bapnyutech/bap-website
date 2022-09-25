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
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSd6G4XeYxa9TQhJgIofDc3nZtR2UxvuhXYY-NLTy2HYbMLATw/formResponse');
  }

  button2(){
  	/*window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLScl7sgJQE5j5CY4SX_Q4ySDMz8dsTo_92g370kB_shTWp5Jyg/viewform';*/
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSfAhaiQe7NoZ9yGvxpNGivzpHWPyjqJIdvmfq6LSQHPfyEjlQ/viewform'); 
  }

  button3(){
    window.open('https://bit.ly/BAPConsulting');
  }

  interest(){
    /*window.location.href = 'https://goo.gl/forms/Nft2PkKtiKZjh8Yo2';*/
    /*window.open('https://bit.ly/f21bapapp');*/
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
