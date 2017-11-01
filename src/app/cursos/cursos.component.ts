import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
 


    nome:string = '';
    duracao:string= '';

  constructor(private http: HttpClient) { }
 
    ngOnInit(){

    }

    onSubmit(form){
      //console.log(this.nome);
      //console.log(this.nome);
      this.http.get
      ('http://localhost:8080/adicionarCursos/'+this.nome+'/'+this.duracao)
      .subscribe(
        data => {
          console.log(data);
        }
      );
    }
    
  
  }
