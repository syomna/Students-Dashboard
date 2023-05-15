import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Student } from 'src/app/models/student.model';
import { StudentsService } from 'src/app/services/students.service';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styles: [],
})
export class StudentsComponent {
  constructor(
    private dialog: MatDialog,
    private services: StudentsService,
    private toastr: ToastrService,
    private router: Router
  ) {}
  @Input({ required: true }) students: Student[] = [];

  navigateToEditStudent(student: any) {
    this.services.setStudentData(student);
    this.router.navigate(['/edit-student'], {});
  }

  studentId: any;
  openDialog(id: any): void {
    console.log(`id is ${id}`);
    this.studentId = id;
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      console.log(`result: ${result}`);
      if (result) {
        console.log('delete');
        this.services.DeleteStudent(this.studentId as Number).subscribe({
          next: (data) => {
            this.toastr.success('Student deleted successfully');
            console.log('success');
            setTimeout(() => {
              window.location.reload();
            }, 500);
          },
          error: (error) => {
            this.toastr.success('Error occurred. Please try again later');
            console.log(error);
          },
        });
      }
    });
  }
}
