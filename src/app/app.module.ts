import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { HttpClientModule } from '@angular/common/http';
import { CursoListarComponent } from './curso-listar/curso-listar.component';

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    CursoListarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
