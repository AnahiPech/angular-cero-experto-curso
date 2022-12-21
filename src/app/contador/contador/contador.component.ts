import {Component} from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
    <h1>{{ titulo }}</h1>

<button (click)=" numero = numero + 1;">+ 1</button>

<span>{{numero}}</span>

<button (click)=" numero = numero - 1;">- 1</button>
<p></p>
<button (click)="sumar();">+ 1</button>

<span>{{numero2}}</span>

<button (click)=" restar();">- 1</button>
<p></p>
<button (click)="acumular(+1);">+ 1</button>

<span>{{numero3}}</span>

<button (click)=" acumular(-1);">- 1</button>

<p></p>
<h3>La base es:<strong>{{base}}</strong></h3>
<button (click)="acumular2(base);">+{{base}}</button>

<span>{{numero4}}</span>


<button (click)=" acumular2(-base);">-{{base}}</button>
    
    
    `

})

export class ContadorComponent{

    titulo: string = 'Contador App';
    numero: number = 10;
    numero2: number = 1;
    numero3: number = 0;
    numero4: number = 0;
  
    base: number = 5;

    sumar(){

        this.numero2 += 1;
      }
    
      restar(){
    
        this.numero2 -= 1;
      }
    
      acumular(valor:number){
    
        this.numero3 += valor;
      }
    
      acumular2(valor:number){
    
        this.numero4 += valor;
      }
}