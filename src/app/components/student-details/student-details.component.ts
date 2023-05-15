import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/models/student.model';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styles: [],
})
export class StudentDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private services: StudentsService,
    private router: Router
  ) {}
  id: any;
  student: any;
  isLoading: Boolean = true;
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      console.log(this.id);
      this.services.GetStudentByID(this.id).subscribe({
        next: (data) => {
          this.student = data as Student;
          console.log(this.student);
          this.isLoading = false;
        },
        error: (error) => {
          console.log(error);
          this.isLoading = false;
        },
      });
    });
  }

  navigateToEditStudent() {
    this.services.setStudentData(this.student);
    this.router.navigate(['/edit-student'], {});
  }
}
