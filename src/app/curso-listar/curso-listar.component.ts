import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-curso-listar',
  templateUrl: './curso-listar.component.html',
  styleUrls: ['./curso-listar.component.css']
})
export class CursoListarComponent implements OnInit {
  id:number;
  cursos: any = [];

  
  constructor(private http: HttpClient) { }
  
    ngOnInit() {
     return this.listarCursos();
    }

    listarCursos(): void{
      this.http.get
      ('http://localhost:8080/cursos')
      .subscribe(
        data => {
          console.log(data);
          this.cursos = (data);
        }
      );
    }

    deleteCurso(id): void{
      this.http.get
      ('http://localhost:8080/cursos/'+id)
      .subscribe(
        data => {
         console.log(data);
          //this.cursos = (data);
        }
      );
    }

    
    
}
