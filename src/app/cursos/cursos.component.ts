import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
 
  constructor(private http: HttpClient) { }
  
    ngOnInit(): void {
      this.http.get
      ('http://localhost:8080/cursos')
      .subscribe(
        data => {
          console.log(data);
        }
      );
    }
  
  }
