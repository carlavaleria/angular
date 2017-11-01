import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso-listar',
  templateUrl: './curso-listar.component.html',
  styleUrls: ['./curso-listar.component.css']
})
export class CursoListarComponent implements OnInit {

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
