import { Component, OnInit } from '@angular/core';
import { GithupService } from 'src/app/services/githup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detals',
  templateUrl: './detals.component.html',
  styleUrls: ['./detals.component.css']
})
export class DetalsComponent implements OnInit {



  view ;
  

  
  constructor( private fa: GithupService,private ro:Router) { 
    this.view = this.fa.viewData;
      if (this.view == undefined ) {
        this.ro.navigate(['/']);
    }
    }
back() {
  this.ro.navigate(['/']);
}
  
  ngOnInit() {
  }

}
