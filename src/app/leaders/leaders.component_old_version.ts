import { Component, OnInit } from '@angular/core';
import { CarouselModule,GrowlModule } from 'primeng/primeng';
import { Pipe, PipeTransform } from '@angular/core';
import {MyFilterPipe} from '../myfilter';

@Pipe({
    name: 'myfilter'
})

@Component({
  selector: 'app-leaders',
  templateUrl: './leaders.component.html',
  styleUrls: ['./leaders.component.css']
})
export class LeadersComponent implements OnInit {

	HiddenPE: boolean=true;
	HiddenSE: boolean=true;
	HiddenCS: boolean=true;
	items: any;
  candidateMasters: Array<any>;

  pipeFilter = '';
  changeFilterData:any[] = [];
  pipeFilterData:any[] =  [];
    
  jsonData = [
    {
      "bio": " ",
      "firstName": "Gene",
      "key": 0,
      "lastName": "Tangwiwat",
      "position": "Candidate Master Chair"
    },
    {   
      "bio": " ",
      "firstName": "Tanav",
      "key": 1,
      "lastName": "Suman",
      "position": "Candidate Master Chair"
    },
    {
      "bio": " ",
      "firstName": "Katrina",
      "key": 2,
      "lastName": "Salmon",
      "position": "Candidate Master"
    },
    {
      "bio": " ",
      "firstName": "Justin",
      "key": 3,
      "lastName": "Sun",
      "position": "Candidate Master (Fall)"
    },
    {
      "bio": " ",
      "firstName": "Bendy Yuan",
      "key": 4,
      "lastName": "Zhao",
      "position": "Candidate Master (Spring)"
    },
    {
      "bio": " ",
      "firstName": "Jessica",
      "key": 5,
      "lastName": "Guo",
      "position": "Community Service Chair"
    },
    {
      "bio": " ",
      "firstName": "Michael",
      "key": 6,
      "lastName": "Chen",
      "position": "Community Service"
    },
    {
      "bio": " ",
      "firstName": "Helen", //Huiwen in the pic name
      "key": 7,
      "lastName": "Chen",
      "position": "Community Service"
    },
    {
      "bio": " ",
      "firstName": "Brenda",
      "key": 8,
      "lastName": "Sulamdany",
      "position": "Community Service"
    },
    {
      "bio": " ",
      "firstName": "Raymond",
      "key": 9,
      "lastName": "Chen",
      "position": "Consulting Workshop Chair"
    },
    {
      "bio": " ",
      "firstName": "Devin",
      "key": 10,
      "lastName": "Chu",
      "position": "Consulting Workshop Vice Chair"
    },
    {
      "bio": " ",
      "firstName": "Harry",
      "key": 11,
      "lastName": "Wu",
      "position": "Consulting Workshop"
    },
    {
      "bio": " ",
      "firstName": "Shannon",
      "key": 12,
      "lastName": "Huang",
      "position": "IBD Workshop Chair (Fall)"
    },
    {
      "bio": "",
      "firstName": "Roger",
      "key": 13,
      "lastName": "Shui",
      "position": "IBD Workshop Chair (Fall)"
    },
    {
      "bio": " ",
      "firstName": "Shivam",
      "key": 14,
      "lastName": "Khandelwal",
      "position": "Marketing Chair"
    },
    {
      "bio": "",
      "firstName": "Kathleen",
      "key": 15,
      "lastName": "Flores",
      "position": "Marketing"
    },
    {
      "bio": " ",
      "firstName": "Sara",
      "key": 16,
      "lastName": "Shen",
      "position": "Marketing"
    },
    {
      "bio": " ",
      "firstName": "Justin",
      "key": 17,
      "lastName": "Chiu",
      "position": "Marketing"
    },
    {
      "bio": " ",
      "firstName": "Lorna",
      "key": 18,
      "lastName": "Louie",
      "position": "Mentoring Chair"
    },
    {
      "bio": " ",
      "firstName": "Raelynn",
      "key": 19,
      "lastName": "Li",
      "position": "Mentoring Vice-Chair"
    },
    {
      "bio": " ",
      "firstName": "Eric",
      "key": 20,
      "lastName": "Zhao",
      "position": "Mentoring"
    },
    {
      "bio": " ",
      "firstName": "Andrew",
      "key": 21,
      "lastName": "Tai",
      "position": "Mentoring"
    },
    {
      "bio": " ",
      "firstName": "Devangi",
      "key": 22,
      "lastName": "Pandey",
      "position": "Publications Chair"
    },
    {
      "bio": "",
      "firstName": "Megha",
      "key": 23,
      "lastName": "Purohit",
      "position": "Publications"
    },
    {
      "bio": "",
      "firstName": "Eric",
      "key": 24,
      "lastName": "Lu",
      "position": "Social Chair"
    },
    {
      "bio": " ",
      "firstName": "Sam",
      "key": 25,
      "lastName": "Wieder",
      "position": "Social"
    },
    {
      "bio": "",
      "firstName": "Suhav",
      "key": 26,
      "lastName": "Toteja",
      "position": "Social"
    },
    {
      "bio": " ",
      "firstName": "Angela",
      "key": 27,
      "lastName": "Zhan",
      "position": "Speaker Chair"
    },
    {
      "bio": " ",
      "firstName": "Nick",
      "key": 28,
      "lastName": "Wong",
      "position": "Speaker"
    },
    {
      "bio": "",
      "firstName": "Alison",
      "key": 29,
      "lastName": "Kim",
      "position": "Speaker"
    },
    {
      "bio": " ",
      "firstName": "Vandi", //Vandhitha in pic name
      "key": 30,
      "lastName": "Saireddy",
      "position": "Special Events Chair"
    },
    {
      "bio": "",
      "firstName": "Amber",
      "key": 31,
      "lastName": "Sun",
      "position": "Special Events"
    },
    {
      "bio": " ",
      "firstName": "Frank",
      "key": 32,
      "lastName": "Zhu",
      "position": "Special Events"
    },
    {
      "bio": " ",
      "firstName": "Nithin",
      "key": 33,
      "lastName": "Rajesh",
      "position": "Special Events"
    },
    {
      "bio": " ",
      "firstName": "Corbin",
      "key": 34,
      "lastName": "Ko",
      "position": "Technology Chair :)"
    },
    {
      "bio": " ",
      "firstName": "Shefei",
      "key": 35,
      "lastName": "Jiang",
      "position": "Technology :)"
    },
    {
      "bio": " ",
      "firstName": "Andrew",
      "key": 36,
      "lastName": "Shin",
      "position": "Technology :)"
    },
    {
      "bio": "",
      "firstName": "Dev",
      "key": 37,
      "lastName": "Dasondi",
      "position": "Tutoring Chair"
    },
    {
      "bio": "",
      "firstName": "Nick",
      "key": 38,
      "lastName": "Rosas",
      "position": "Tutoring"
    },
    {
      "bio": "",
      "firstName": "Sonya",
      "key": 39,
      "lastName": "Asdhir",
      "position": "Tutoring"
    },
    {
      "bio": " ",
      "firstName": "Audrey",
      "key": 40,
      "lastName": "Zang",
      "position": "VITA Chair"
    },
    {
      "bio": " ",
      "firstName": "Marina",
      "key": 41,
      "lastName": "Chang",
      "position": "VITA"
    },
    {
      "bio": " ",
      "firstName": "Sravya",
      "key": 42,
      "lastName": "Devulapalli",
      "position": "VITA"
    },
    {
      "bio": " ",
      "firstName": "Dhira",
      "key": 43,
      "lastName": "Venkatramani",
      "position": "VITA"
    },
    {
      "bio": " ",
      "firstName": "Catherine",
      "key": 44,
      "lastName": "Lee",
      "position": "Workshop Chair"
    },
    {
      "bio": "",
      "firstName": "Sam",
      "key": 45,
      "lastName": "Zhong",
      "position": "Workshop Chair"
    },
    {
      "bio": "",
      "firstName": "Jessica",
      "key": 46,
      "lastName": "Ahn",
      "position": "Workshop"
    },
    {
      "bio": "",
      "firstName": "Bruce",
      "key": 47,
      "lastName": "Liu",
      "position": "Workshop"
    },
    {
      "bio": "",
      "firstName": "Laura",
      "key": 48,
      "lastName": "Zhang",
      "position": "Women in BAP Chair"
    },
    {
      "bio": "",
      "firstName": "Lindsey",
      "key": 49,
      "lastName": "Baum",
      "position": "Women in BAP Chair"
    },
    {
      "bio": "",
      "firstName": "Josephine",
      "key": 50,
      "lastName": "Yeh",
      "position": "Women in BAP Vice Chair"
    },
    {
      "bio": "",
      "firstName": "Jo", //Jieying in pic name
      "key": 51,
      "lastName": "Tong",
      "position": "Women in BAP"
    },
    {
      "bio": "",
      "firstName": "Julia",
      "key": 52,
      "lastName": "Li",
      "position": "Women in BAP"
    }
  ];

  constructor() {
    this.pipeFilterData = this.jsonData;
  }
  ngOnInit() {
  }

}
