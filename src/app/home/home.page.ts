import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  estado = 0;
  resultado='';
  numeros=[];
  solu=''

  constructor() {}
  numero(num){
    this.numeros.push(num);
    if(this.estado==0){
      this.estado = 1;
      this.resultado=num;
      console.log(this.numeros)
    

    }else{
      this.resultado+=num;
      console.log(this.numeros)
   

    }
  }
  operacion(ope){
    this.numeros.push(ope)
    this.resultado+=ope;
    

  }
  result(){
    this.solu=eval(this.numeros.join(''))
    
    this.resultado+="="+this.solu;
    
    this.estado=0;
  }
  reset(){
    this.numeros=[]
    this.solu=""
    this.resultado="0"
  }
}
