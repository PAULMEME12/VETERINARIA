import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  products:any=[];
  responsiveOptions:any;
  ngOnInit(){
    this.cargarListas();
  }
  cargarListas(){
    this.products = [
      {
        name: 'Dog chow adultosraza pequeña y mini 8 kg',
        image: '/assets/imagenes/DOG-CHOW-ADULTO-RPM-8-KG-removebg.png',
        price: '39.99',
      },
      {
        name: 'Proplan gato adulto de 3 kg',
        image: '/assets/imagenes/PRO-GATO-ADT-3-KG-removebg.png',
        price: '40.99',
      },
      {
        name: 'Kong Classic',
        image: '/assets/imagenes/kong-classic--removebg.png',
        price: '15.57',
      },
      {
        name: 'Rimax arenero semicubierto con pala, color gris',
        image:
          '/assets/imagenes/rimax-arenero-semicubierto-con-pala-color-gris-removebg.png',
        price: '23.50',
      },
    ];
    this.responsiveOptions = [
      {
          breakpoint: '1199px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '991px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }
}
