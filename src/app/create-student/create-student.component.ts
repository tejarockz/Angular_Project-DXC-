import { Component, OnInit } from '@angular/core';
import { StudentModel } from 'src/model/student.model';
import { StudentService} from 'src/service/student.service';
import { citiesModel } from 'src/model/cities.model';
import { citiesService } from 'src/service/cities.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  // cities: string[] = [
  //   'Alabama',
  //   'Alaska',
  //   'Arizona',
  //   'Arkansas',
  //   'California',
  //   'Colorado',
  //   'Connecticut',
  //   'Delaware',
  //   'Florida',
  //   'Georgia',
  //   'Hawaii',
  //   'Idaho',
  //   'Illinois',
  //   'Indiana',
  //   'Iowa',
  //   'Kansas',
  //   'Kentucky',
  //   'Louisiana',
  //   'Maine',
  //   'Maryland',
  //   'Massachusetts',
  //   'Michigan',
  //   'Minnesota',
  //   'Mississippi',
  //   'Missouri',
  //   'Montana',
  //   'Nebraska',
  //   'Nevada',
  //   'New Hampshire',
  //   'New Jersey',
  //   'New Mexico',
  //   'New York',
  //   'North Carolina',
  //   'North Dakota',
  //   'Ohio',
  //   'Oklahoma',
  //   'Oregon',
  //   'Pennsylvania',
  //   'Rhode Island',
  //   'South Carolina',
  //   'South Dakota',
  //   'Tennessee',
  //   'Texas',
  //   'Utah',
  //   'Vermont',
  //   'Virginia',
  //   'Washington',
  //   'West Virginia',
  //   'Wisconsin',
  //   'Wyoming',
  // ];
  Student:any;
  cities : any

  constructor(private studentService:StudentService, private citiesService: citiesService) { }

  ngOnInit(): void {
    this.getcities();
    this.Student = new StudentModel()
    // this.cities = new citiesModel()
  }
  createStudent(): void {
    console.log(this.Student);

    this.studentService.createStudent(this.Student).subscribe(
      res=>{

      }, err=>{
        console.log(err)
      }
    );
  }
  getcities(): void {
    console.log(this.cities);
    this.citiesService.getcities().subscribe(
      res=>{
        this.cities = res;
        console.log(res)

      },err=>{
        console.log(err)
      }
    );
  }

}
