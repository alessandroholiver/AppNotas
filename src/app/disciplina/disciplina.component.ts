import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DisciplinaService } from 'src/app/_service/disciplina.service';
import { ProfessorService } from 'src/app/_service/professor.service';
import { TurmaService } from 'src/app/_service/turma.service';
import { Router } from '@angular/router';
import { Disciplina } from '../_models/Disciplina';
import { Professor } from '../_models/Professor';
import { Turma } from '../_models/Turma';

@Component({
  selector: 'app-disciplina',
  templateUrl: './disciplina.component.html',
  styleUrls: ['./disciplina.component.css']
})
export class DisciplinaComponent implements OnInit {

  registerForm: FormGroup;
  disciplina: Disciplina;
  professores: Professor[];
  turmas:Turma[];


  constructor(public fb: FormBuilder, private toastr: ToastrService, private disciplinaService: DisciplinaService,private professorService:ProfessorService, public router: Router, private turmaService:TurmaService)
  {
  
  }
 

  ngOnInit() {
    this.validation();
    this.listarProfessor();
    this.listarTurma();
  }
  validation(){
    this.registerForm = this.fb.group({
      ProfessorId: ['', Validators.required],
      Descricao: ['', Validators.required],
      TurmaId: ['', Validators.required]
      
    });
  }
  listarProfessor()  {
    this.professorService.listaProfessor().subscribe(dados => this.professores =dados);
  }

  listarTurma()  {
    this.turmaService.listaTurma().subscribe(dados => this.turmas =dados);
  }
  cadastrarDisciplina(){
    if (this.registerForm.valid){
      this.disciplina = Object.assign( this.registerForm.value);
      this.disciplinaService.register(this.disciplina).subscribe(
        () => {
          this.router.navigate(['/disciplina']);
          this.toastr.success('Cadastro realizado com sucesso');
        }, error => {
          const erro = error.error;
          erro.foreach(err => {
            switch (err.code){
              case 'DuplicateUserName':
                this.toastr.error('Cadastro Duplicado');
                break;
              default:
                this.toastr.error(`Erro no cadastro ! ${err.code}`);
                break;
            }
          });
        }
      );
    }
  }


}
