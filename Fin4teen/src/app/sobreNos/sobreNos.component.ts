import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobreNos',
  templateUrl: './sobreNos.component.html',
  styleUrls: ['./sobreNos.component.css']
})
export class SobreNosComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

  textoMobile = `Para nossa aplicação mobile utilizamos a linguagem Swift, nativo do iOS, para a construção
  de todo o aplicativo`;
  textoWeb = `Para nossa aplicação web optamos por utilizar a linguagem Angular 5 para manter
  nossos usuários cientes das nossas atualizações e propostas.`;
}
