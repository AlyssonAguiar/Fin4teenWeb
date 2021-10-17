import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent{

  constructor(private formBuilder:FormBuilder) { }

  cadastroForm = this.formBuilder.group({
    primeiroNome:[''],
    sobrenome:[''],
    genero:[''],
    email: [''],
  })
  
  salvar(){
    console.log('Form data is', this.cadastroForm.value);
  }

}
