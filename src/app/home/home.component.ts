import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/service/student.service';
// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'city','phone','actions'];
  // dataSource = ELEMENT_DATA;
  dataSource : any;

  constructor(private studentService:StudentService, private router: Router){ }

  ngOnInit(): void {
    this.getStudents();
  };
  getStudents=()=>{
    this.studentService.getStudents().subscribe(res=>{
    this.dataSource=res;
  });
};
  editStudent(id: any):void {
    this.router.navigate(['/editstudent',id])
  }
  deleteStudent(id: any):void {
    if(confirm('Do you want to delete?')){
      this.studentService.deleteStudent(id).subscribe(res=>{
        // this.dataSource=res;
        this.getStudents()
      },(err)=>{
        console.log(err);
        alert('Failed to delete')
      });
    }
  }

}
