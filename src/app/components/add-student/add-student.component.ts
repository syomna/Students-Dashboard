import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from 'src/app/models/student.model';
import { StudentsService } from 'src/app/services/students.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styles: [],
})
export class AddStudentComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private services: StudentsService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {}

  student: any;
  myForm: any;
  isFromEdit: boolean = false;
  buttonText: string = 'Submit';

  ngOnInit(): void {
    const currentPath = this.route.snapshot.url.join('/');
    if (currentPath === 'edit-student') {
      this.isFromEdit = true;
      this.buttonText = 'Update';
      this.student = this.services.getStudentData();
    }
    this.initializeForm();
  }

  initializeForm() {
    this.myForm = this.formBuilder.group({
      name: [this.student ? this.student.name : '', Validators.required],
      age: [this.student ? this.student.age : '', Validators.required],
      address: [this.student ? this.student.address : '', Validators.required],
      email: [
        this.student ? this.student.email : '',
        [Validators.required, Validators.email],
      ],
      grade: [this.student ? this.student.grade : '', Validators.required],
      country: [this.student ? this.student.country : '', Validators.required],
      description: [
        this.student ? this.student.description : '',
        Validators.required,
      ],
    });
  }

  submitForm() {
    if (this.myForm.valid) {
      const value = this.myForm.value;
      const student: Student = {
        name: value.name as string,
        age: parseInt(value.age as string),
        address: value.address as string,
        email: value.email as string,
        grade: value.grade as string,
        country: value.country as string,
        description: value.description as string,
      };

      if (this.isFromEdit) {
        this.services.UpdateStudent(this.student.id, student).subscribe({
          next: (message) => {
            this.toastr.success('Student Updated successfully', '');
            console.log(message);
          },
          error: (error) => {
            this.toastr.error('Error occurred. Please try again later', '');
            console.log(error);
          },
        });
      } else {
        this.services.AddStudent(student).subscribe({
          next: (message) => {
            this.toastr.success('Student added successfully', '');
            console.log(message);
            this.myForm.reset();
          },
          error: (error) => {
            this.toastr.error('Error occurred. Please try again later', '');
            console.log(error);
          },
        });
      }
    }
  }
}
