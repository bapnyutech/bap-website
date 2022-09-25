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
        "firstName": "Andy",
        "key": 0,
        "lastName": "Chen",
        "position": "Candidate Master Chair"
    },
    {
        "bio": " ",
        "firstName": "Sarah",
        "key": 1,
        "lastName": "Qiu",
        "position": "Candidate Master Chair"
    },
    {
        "bio": " ",
        "firstName": "Chloe",
        "key": 2,
        "lastName": "Wang",
        "position": "Candidate Master "
    },
    {
        "bio": " ",
        "firstName": "Sameer",
        "key": 3,
        "lastName": "Paila",
        "position": "Candidate Master "
    },
    {
        "bio": " ",
        "firstName": "Caroline",
        "key": 4,
        "lastName": "Wang",
        "position": "Community Service Chair"
    },
    {
        "bio": " ",
        "firstName": "Harry",
        "key": 5,
        "lastName": "Xu",
        "position": "Community Service "
    },
    {
        "bio": " ",
        "firstName": "Rishab",
        "key": 6,
        "lastName": "Gosalia",
        "position": "Community Service "
    },
    {
        "bio": " ",
        "firstName": "Cherie",
        "key": 7,
        "lastName": "Ma",
        "position": "Consulting Workshop Chair"
    },
    {
        "bio": " ",
        "firstName": "James",
        "key": 8,
        "lastName": "Luo",
        "position": "Consulting Workshop "
    },
    {
        "bio": " ",
        "firstName": "Luke",
        "key": 9,
        "lastName": "Bernstein",
        "position": "Consulting Workshop "
    },
    {
        "bio": " ",
        "firstName": "Brian",
        "key": 10,
        "lastName": "Xu",
        "position": "IBD Workshop Chair"
    },
    {
        "bio": " ",
        "firstName": "David",
        "key": 11,
        "lastName": "Huang",
        "position": "IBD Workshop Chair"
    },
    {
        "bio": " ",
        "firstName": "Julia",
        "key": 12,
        "lastName": "Wang",
        "position": "Marketing Chair"
    },
    {
        "bio": " ",
        "firstName": "Kaipo",
        "key": 13,
        "lastName": "Tsai",
        "position": "Marketing "
    },
    {
        "bio": " ",
        "firstName": "Maria",
        "key": 14,
        "lastName": "Miao",
        "position": "Marketing "
    },
    {
        "bio": " ",
        "firstName": "Henry",
        "key": 15,
        "lastName": "Liu",
        "position": "Mentoring Chair"
    },
    {
        "bio": " ",
        "firstName": "Andrew",
        "key": 16,
        "lastName": "Tai",
        "position": "Mentoring Vice-Chair"
    },
    {
        "bio": " ",
        "firstName": "Shannon",
        "key": 17,
        "lastName": "Huang",
        "position": "Mentoring"
    },
    {
        "bio": " ",
        "firstName": "Manda",
        "key": 18,
        "lastName": "You",
        "position": "Mentoring "
    },
    {
        "bio": " ",
        "firstName": "Andrew",
        "key": 19,
        "lastName": "Zhong",
        "position": "Mentoring "
    },
    {
        "bio": " ",
        "firstName": "Catherine",
        "key": 20,
        "lastName": "Sze",
        "position": "Publications Chair"
    },
    {
        "bio": " ",
        "firstName": "Sam",
        "key": 21,
        "lastName": "Wieder",
        "position": "Social Chair"
    },
    {
        "bio": " ",
        "firstName": "Chahat",
        "key": 22,
        "lastName": "Mittal",
        "position": "Social "
    },
    {
        "bio": " ",
        "firstName": "Erica",
        "key": 23,
        "lastName": "Nie",
        "position": "Social "
    },
    {
        "bio": " ",
        "firstName": "Rishi",
        "key": 24,
        "lastName": "Kulkami",
        "position": "Social "
    },
    {
        "bio": " ",
        "firstName": "Eric",
        "key": 25,
        "lastName": "Zhao",
        "position": "Speaker Chair"
    },
    {
        "bio": " ",
        "firstName": "Kaya",
        "key": 26,
        "lastName": "Zhou",
        "position": "Speaker "
    },
    {
        "bio": " ",
        "firstName": "Tiffany",
        "key": 27,
        "lastName": "Wang",
        "position": "Speaker "
    },
    {
        "bio": " ",
        "firstName": "Rhoshini",
        "key": 28,
        "lastName": "Raghuraman",
        "position": "Special Events Chair"
    },
    {
        "bio": " ",
        "firstName": "Rachel",
        "key": 29,
        "lastName": "Yeung",
        "position": "Special Events"
    },
    {
        "bio": " ",
        "firstName": "Moya",
        "key": 30,
        "lastName": "Liu",
        "position": "Special Events"
    },
    {
        "bio": " ",
        "firstName": "Andrew",
        "key": 31,
        "lastName": "Shin",
        "position": "Technology Chair :)"
    },
    {
        "bio": " ",
        "firstName": "Adam",
        "key": 32,
        "lastName": "Choe",
        "position": "Technology :)"
    },
    {
        "bio": " ",
        "firstName": "Carol",
        "key": 33,
        "lastName": "Tsao",
        "position": "Technology :)"
    },
    {
        "bio": " ",
        "firstName": "Mary",
        "key": 34,
        "lastName": "Chen",
        "position": "Tutoring Chair"
    },
    {
        "bio": " ",
        "firstName": "Shreya",
        "key": 35,
        "lastName": "Polkampally",
        "position": "Tutoring "
    },
    {
        "bio": " ",
        "firstName": "Valentine",
        "key": 36,
        "lastName": "Vlasov",
        "position": "Tutoring "
    },
    {
        "bio": " ",
        "firstName": "Marina",
        "key": 37,
        "lastName": "Chang",
        "position": "VITA Chair"
    },
    {
        "bio": " ",
        "firstName": "Jeff",
        "key": 38,
        "lastName": "Su",
        "position": "VITA "
    },
    {
        "bio": " ",
        "firstName": "Jai",
        "key": 39,
        "lastName": "Joshi",
        "position": "VITA "
    },
    {
        "bio": " ",
        "firstName": "Ishita",
        "key": 40,
        "lastName": "Marda",
        "position": "Women in BAP Chair"
    },
    {
        "bio": " ",
        "firstName": "Stephanie",
        "key": 41,
        "lastName": "Li",
        "position": "Women in BAP "
    },
    {
        "bio": " ",
        "firstName": "Yan",
        "key": 42,
        "lastName": "Luo",
        "position": "Women in BAP "
    },
    {
        "bio": " ",
        "firstName": "Lia",
        "key": 43,
        "lastName": "Feng",
        "position": "Workshop Chair"
    },
    {
        "bio": " ",
        "firstName": "Justin",
        "key": 44,
        "lastName": "Chen",
        "position": "Workshop "
    },
    {
        "bio": " ",
        "firstName": "Kelley",
        "key": 45,
        "lastName": "Zhang",
        "position": "Workshop "
    },
    {
        "bio": " ",
        "firstName": "Lucy",
        "key": 46,
        "lastName": "Yao",
        "position": "Workshop "
    }
  ];

  constructor() {
    this.pipeFilterData = this.jsonData;
  }
  ngOnInit() {
  }

}
