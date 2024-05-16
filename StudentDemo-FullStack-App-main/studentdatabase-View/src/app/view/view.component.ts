import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private s4:StudentService) {this.viewstudent(); }
  stud!:any;
  
  ngOnInit(): void {
  }
   viewstudent()
   {
    this.s4.viewstudent1().subscribe(
      (resp) => { this.stud=resp; }
      );
   }
}
