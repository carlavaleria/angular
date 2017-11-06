import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';


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
    
    adicionarCurso(): void{
      const curso = {
        nome: this.nome,
        duracao: this.duracao
      };
      
        this.http.post
          ('http://localhost:8080/adicionarCursos', curso)
          .subscribe(
            data => {
              this.cursos = data;
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
    alterarCursos(id, nomeInput, duracaoInput){
        const curso = {
          id: id,
          nome: nomeInput,
          duracao: duracaoInput
        };
        this.http.put('http://localhost:8080/alterarCursos', curso)
        .subscribe(
            data => {
              this.cursos = data;
              console.log(data);
            }
          );

      }
  }
