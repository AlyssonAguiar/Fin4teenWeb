import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent{

  constructor(
    private formBuilder:FormBuilder,
    ) { }

  

  cadastroForm = this.formBuilder.group({
    primeiroNome:['', [Validators.required ,Validators.minLength(3), Validators.maxLength(28)]],
    sobrenome:['', [Validators.required, Validators.minLength(3), Validators.maxLength(70)]],
    genero:['', Validators.required],
    email: ['', [Validators.required, Validators.email, Validators.minLength(8),Validators.maxLength(70)]],
  })
  
  

  onSubmit(){
    console.log(this.cadastroForm.value),
    this.cadastroForm.reset();
    (error: any) => alert('erro') 
  }

  getGenero(){
    return
  }

}
