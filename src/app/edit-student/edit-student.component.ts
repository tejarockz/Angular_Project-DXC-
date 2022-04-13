import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/service/student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  Student:any

  constructor(private studentService:StudentService, private activeRoute: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    const Id = this.activeRoute.snapshot.paramMap.get("id");
    console.log('id:',Id);
    this.Student=this.studentService.getStudent(Id).subscribe(res=>{
      this.Student = res;
      console.log(this.Student)
    });
    console.log(this.Student);
  }
  saveStudent = () =>{
    this.Student=this.studentService.saveStudent(this.Student.StudentID,this.Student).subscribe((res)=>{
      // this.Student = res;
      // console.log(this.Student)
      this.router.navigate(['/home'])
    });
  }
}
