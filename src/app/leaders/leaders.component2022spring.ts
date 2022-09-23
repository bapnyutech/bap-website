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
        "position": "Candidate Master "
    },
    {
        "bio": " ",
        "firstName": "Bendy",
        "key": 3,
        "lastName": "Yuan-Zhao",
        "position": "Candidate Master"
    },
    {
        "bio": " ",
        "firstName": "Jessica",
        "key": 4,
        "lastName": "Guo",
        "position": "Community Service Chair"
    },
    {
        "bio": " ",
        "firstName": "Peter",
        "key": 5,
        "lastName": "Shi",
        "position": "Community Service"
    },
    {
        "bio": " ",
        "firstName": "Helen",
        "key": 6,
        "lastName": "Chen",
        "position": "Community Service"
    },
    {
        "bio": " ",
        "firstName": "Caroline",
        "key": 7,
        "lastName": "Wang",
        "position": "Community Service"
    },
    {
        "bio": " ",
        "firstName": "Sarah",
        "key": 8,
        "lastName": "Qiu",
        "position": "Community Service"
    },
    {
        "bio": " ",
        "firstName": "Devin",
        "key": 9,
        "lastName": "Chu",
        "position": "Consulting Workshop Vice-Chair"
    },
    {
        "bio": " ",
        "firstName": "Sravya",
        "key": 10,
        "lastName": "Devulapalli",
        "position": "Consulting Workshop Vice-Chair"
    },
    {
        "bio": " ",
        "firstName": "Luke",
        "key": 11,
        "lastName": "Bernstein",
        "position": "Consulting Workshop"
    },
    {
        "bio": " ",
        "firstName": "Cherie",
        "key": 12,
        "lastName": "Ma",
        "position": "Consulting Workshop"
    },
    {
        "bio": " ",
        "firstName": "Jack",
        "key": 13,
        "lastName": "Wang",
        "position": "IBD Workshop Chair"
    },
    {
        "bio": " ",
        "firstName": "Yukai",
        "key": 14,
        "lastName": "Liu",
        "position": "IBD Workshop Chair"
    },
    {
        "bio": " ",
        "firstName": "Shivam",
        "key": 15,
        "lastName": "Khandelwal",
        "position": "Marketing Chair"
    },
    {
        "bio": " ",
        "firstName": "Julia",
        "key": 16,
        "lastName": "Wang",
        "position": "Marketing"
    },
    {
        "bio": " ",
        "firstName": "Maria",
        "key": 17,
        "lastName": "Miao",
        "position": "Marketing"
    },
    {
        "bio": " ",
        "firstName": "Catherine",
        "key": 18,
        "lastName": "Sze",
        "position": "Marketing"
    },
    {
        "bio": " ",
        "firstName": "Lorna",
        "key": 19,
        "lastName": "Louie",
        "position": "Mentoring Chair"
    },
    {
        "bio": " ",
        "firstName": "Raelynn",
        "key": 20,
        "lastName": "Li",
        "position": "Mentoring Vice-Chair"
    },
    {
        "bio": " ",
        "firstName": "Andy",
        "key": 21,
        "lastName": "Chen",
        "position": "Mentoring"
    },
    {
        "bio": " ",
        "firstName": "Ariel",
        "key": 22,
        "lastName": "Tsou",
        "position": "Mentoring"
    },
    {
        "bio": " ",
        "firstName": "Henry",
        "key": 23,
        "lastName": "Liu",
        "position": "Mentoring"
    },
    {
        "bio": " ",
        "firstName": "Andrew",
        "key": 24,
        "lastName": "Zhong",
        "position": "Mentoring"
    },
    {
        "bio": " ",
        "firstName": "Devangi",
        "key": 25,
        "lastName": "Pandey",
        "position": "Publications Chair"
    },
    {
        "bio": " ",
        "firstName": "Erica",
        "key": 26,
        "lastName": "Nie",
        "position": "Publications"
    },
    {
        "bio": " ",
        "firstName": "Yan",
        "key": 27,
        "lastName": "Luo",
        "position": "Publications"
    },
    {
        "bio": " ",
        "firstName": "Eric",
        "key": 28,
        "lastName": "Lu",
        "position": "Social Chair"
    },
    {
        "bio": " ",
        "firstName": "Silvester",
        "key": 29,
        "lastName": "Reinaldo",
        "position": "Social"
    },
    {
        "bio": " ",
        "firstName": "Kelley",
        "key": 30,
        "lastName": "Zhang",
        "position": "Social"
    },
    {
        "bio": " ",
        "firstName": "Robert",
        "key": 31,
        "lastName": "Eisenman",
        "position": "Social"
    },
    {
        "bio": " ",
        "firstName": "Angela",
        "key": 32,
        "lastName": "Zhan",
        "position": "Speaker Chair"
    },
    {
        "bio": " ",
        "firstName": "Moya",
        "key": 33,
        "lastName": "Liu",
        "position": "Speaker"
    },
    {
        "bio": " ",
        "firstName": "Kaya",
        "key": 34,
        "lastName": "Zhou",
        "position": "Speaker"
    },
    {
        "bio": " ",
        "firstName": "Vandhi",
        "key": 35,
        "lastName": "Saireddy",
        "position": "Special Events Chair"
    },
    {
        "bio": " ",
        "firstName": "Amber",
        "key": 36,
        "lastName": "Sun",
        "position": "Special Events"
    },
    {
        "bio": " ",
        "firstName": "Frank",
        "key": 37,
        "lastName": "Zhu",
        "position": "Special Events"
    },
    {
        "bio": " ",
        "firstName": "Alex",
        "key": 38,
        "lastName": "Zhu",
        "position": "Special Events"
    },
    {
        "bio": " ",
        "firstName": "Chloe",
        "key": 39,
        "lastName": "Wang",
        "position": "SWAT"
    },
    {
        "bio": " ",
        "firstName": "Ziho",
        "key": 40,
        "lastName": "Kim",
        "position": "SWAT"
    },
    {
        "bio": " ",
        "firstName": "Sanders",
        "key": 41,
        "lastName": "Zhang",
        "position": "SWAT"
    },
    {
        "bio": " ",
        "firstName": "Corbin",
        "key": 42,
        "lastName": "Ko",
        "position": "Technology Chair :)"
    },
    {
        "bio": " ",
        "firstName": "Shefei",
        "key": 43,
        "lastName": "Jiang",
        "position": "Technology :)"
    },
    {
        "bio": " ",
        "firstName": "Andrew",
        "key": 44,
        "lastName": "Shin",
        "position": "Technology :)"
    },
    {
        "bio": " ",
        "firstName": "Kevin",
        "key": 45,
        "lastName": "Wang",
        "position": "Technology :)"
    },
    {
        "bio": " ",
        "firstName": "Lucy",
        "key": 46,
        "lastName": "Yao",
        "position": "Technology :)"
    },
    {
        "bio": " ",
        "firstName": "Dev",
        "key": 47,
        "lastName": "Dasondi",
        "position": "Tutoring Chair"
    },
    {
        "bio": " ",
        "firstName": "Nicolas",
        "key": 48,
        "lastName": "Rosas",
        "position": "Tutoring Vice-Chair"
    },
    {
        "bio": " ",
        "firstName": "Shreya",
        "key": 49,
        "lastName": "Polkampally",
        "position": "Tutoring"
    },
    {
        "bio": " ",
        "firstName": "Marvin",
        "key": 50,
        "lastName": "Liu",
        "position": "Tutoring"
    },
    {
        "bio": " ",
        "firstName": "Sonya",
        "key": 51,
        "lastName": "Adshir",
        "position": "Tutoring"
    },
    {
        "bio": " ",
        "firstName": "Audrey",
        "key": 52,
        "lastName": "Zang",
        "position": "VITA Chair"
    },
    {
        "bio": " ",
        "firstName": "Marina",
        "key": 53,
        "lastName": "Chang",
        "position": "VITA Vice Chair"
    },
    {
        "bio": " ",
        "firstName": "Jai",
        "key": 54,
        "lastName": "Joshi",
        "position": "VITA"
    },
    {
        "bio": " ",
        "firstName": "Jeff",
        "key": 55,
        "lastName": "Su",
        "position": "VITA"
    },
    {
        "bio": " ",
        "firstName": "Dhira",
        "key": 56,
        "lastName": "Venkatramani",
        "position": "VITA"
    },
    {
        "bio": " ",
        "firstName": "Sam",
        "key": 57,
        "lastName": "Zhong",
        "position": "Workshop Co-Chair"
    },
    {
        "bio": " ",
        "firstName": "Justin",
        "key": 58,
        "lastName": "Chen",
        "position": "Workshop"
    },
    {
        "bio": " ",
        "firstName": "Lia",
        "key": 59,
        "lastName": "Feng",
        "position": "Workshop"
    },
    {
        "bio": " ",
        "firstName": "Bruce",
        "key": 60,
        "lastName": "Liu",
        "position": "Workshop"
    },
    {
        "bio": " ",
        "firstName": "Lindsey",
        "key": 61,
        "lastName": "Baum",
        "position": "Women in BAP Co-Chair"
    },
    {
        "bio": " ",
        "firstName": "Josephine",
        "key": 62,
        "lastName": "Yeh",
        "position": "Women in BAP Vice-Chair"
    },
    {
        "bio": " ",
        "firstName": "Ishita",
        "key": 63,
        "lastName": "Marda",
        "position": "Women in BAP"
    },
    {
        "bio": " ",
        "firstName": "Clea",
        "key": 64,
        "lastName": "Loci",
        "position": "Women in BAP"
    }
  ];

  constructor() {
    this.pipeFilterData = this.jsonData;
  }
  ngOnInit() {
  }

}
