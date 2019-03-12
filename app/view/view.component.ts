import { Component, OnInit,AfterContentChecked } from '@angular/core';
import { DataService} from '../data.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit, AfterContentChecked {


viewres : any ={}
  constructor(private service:DataService) { }

  ngOnInit() {
   
  }


  ngAfterContentChecked() {
    this.viewres=this.service.result;
    console.log(this.viewres);
  }
}
