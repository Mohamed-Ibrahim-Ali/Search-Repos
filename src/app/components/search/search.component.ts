import { Component, OnInit } from '@angular/core';
import { GithupService } from 'src/app/services/githup.service';
import { Router } from '@angular/router';
declare var $:any;
import "jquery";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  Data :any[] ;
  term : string ;

  constructor( private fs: GithupService ,private ps:Router) {
    this.fs.getdata().subscribe( da => this.Data = da.items);
   }
   view(x) {
    for (let i=0; i < this.Data.length ; i++) {
      if (this.Data[i].id === x) {
        this.fs.viewData = this.Data[i];
      }
    }
    this.ps.navigate(['/details']);
  }

  ngOnInit() {
    $(".up").click(function () {

      $("html, body").animate({scrollTop : 0} , 1000);

    });

    $(window).scroll(function () {

      if ($(this).scrollTop()>= 200) {

        $(".up").show();

      } else {

        $(".up").hide();
      }
    });  
  }

}
