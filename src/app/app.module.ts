import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule  } from '@angular/common/http';
import { BoletimComponent } from './boletim/boletim.component';
import { AlunoComponent } from './aluno/aluno.component';
import { CursoComponent } from './curso/curso.component';
import { MatriculaComponent } from './matricula/matricula.component';
import { DisciplinaComponent } from './disciplina/disciplina.component';
import { DiscTurmaComponent } from './discTurma/discTurma.component';
import { ProfessorComponent } from './professor/professor.component';
import { TurmaComponent} from './turma/turma.component';

@NgModule({
   declarations: [
      AppComponent,
      UserComponent,
      LoginComponent,
      RegistrationComponent,
      NavComponent,
      BoletimComponent,
      AlunoComponent,
      CursoComponent,
      MatriculaComponent,
      DisciplinaComponent,
      DiscTurmaComponent,
      ProfessorComponent,
      TurmaComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      BsDropdownModule.forRoot(),
      TooltipModule.forRoot(),
      ModalModule.forRoot(),
      CommonModule,
      BrowserAnimationsModule,
      ToastrModule.forRoot(),
      HttpClientModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
