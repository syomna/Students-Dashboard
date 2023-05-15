import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  constructor(private http: HttpClient) {}

  private studentData: any;

  setStudentData(data: any): void {
    this.studentData = data;
  }

  getStudentData(): any {
    return this.studentData;
  }

  private Base_Url = 'http://localhost:3000/students';

  GetAllStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.Base_Url);
  }

  AddStudent(student: Student) {
    return this.http.post(this.Base_Url, student);
  }

  DeleteStudent(id: Number) {
    return this.http.delete(`${this.Base_Url}/${id}`);
  }

  UpdateStudent(id: Number, student: Student) {
    return this.http.put(`${this.Base_Url}/${id}`, student);
  }

  GetStudentByID(id: Number) {
    return this.http.get(`${this.Base_Url}/${id}`);
  }
}
