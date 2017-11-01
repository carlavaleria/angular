import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
 
  
    cursos: any = []; 
    nome:string = '';
    duracao:string= '';
    camposlimpos: string = '';

    constructor(private http: HttpClient) { }
 
    ngOnInit(){
    return this.listarCursos();
    }
    
    adicionarCurso(form): void{
      this.http.get
      ('http://localhost:8080/adicionarCursos/'+this.nome+'/'+this.duracao)
      .subscribe(
        data => {

          this.cursos = data;
          console.log(data);
          this.nome = this.camposlimpos;
          this.duracao = this.camposlimpos;
        }
      );
    }

    listarCursos(): void{
      this.http.get
      ('http://localhost:8080/cursos')
      .subscribe(
        data => {
          this.cursos = (data);
        }
      );
    }

    deleteCurso(id): void{

      this.http.delete
      ('http://localhost:8080/deletarCursos/'+id)
      .subscribe(
        data => {
          this.cursos = (data);

        }
      );
    }
    
  
  }
