import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { BoletimComponent } from './boletim/boletim.component';
import {AlunoComponent} from './aluno/aluno.component';
import {CursoComponent} from './curso/curso.component';
import {DisciplinaComponent} from './disciplina/disciplina.component';
import {MatriculaComponent} from './matricula/matricula.component';
import {DiscTurmaComponent} from './discTurma/discTurma.component';
import {ProfessorComponent} from './professor/professor.component';




const routes: Routes = [
  {path: 'aluno', component: AlunoComponent},
  {path: 'curso', component: CursoComponent},
  {path: 'professor', component: ProfessorComponent},
  {path: 'disciplina', component: DisciplinaComponent},
  {path: 'discTurma', component: DiscTurmaComponent},
  {path: 'matricula', component:MatriculaComponent },
  {path: 'user', component: UserComponent, children: [
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'boletim', component: BoletimComponent}
 
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
