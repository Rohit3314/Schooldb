import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private s3:StudentService) { }

  ngOnInit(): void {
  }
deletedata(deleteform: any)
{
  this.s3.deletestudent(deleteform.value).subscribe();
}

}
