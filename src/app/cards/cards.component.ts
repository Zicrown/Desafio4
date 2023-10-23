import { Component } from '@angular/core';
enum TipoEnvio {
  Express,
  MRW,
  Naval,
  Tierra,
  Vuelo,
}

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent {
  datosCard = [
    {
      id: 1,
      titulo: 'Articulo 1',
      precio: Math.round(Math.random() * 200),
      tipoEnvio: TipoEnvio[Math.floor(Math.random() * 5)],
      imagen:
        'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Karu/2021/June/Karu_LP_Nintendo2.png',
      comentario:
        'Enim ullamco ex culpa laboris voluptate ullamco dolore qui Lorem deserunt laboris amet.',
        comprado:false,
    },
    {
      id: 2,
      titulo: 'Articulo 2',
      precio: Math.round(Math.random() * 200),
      tipoEnvio: TipoEnvio[Math.floor(Math.random() * 5)],
      imagen:
        'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Karu/2021/June/Karu_LP_Oculus2.jpg',
      comentario:
        'Consequat deserunt sit quis aliquip aute occaecat non do occaecat ipsum ullamco sit.',
        comprado:false,
    },
    {
      id: 3,
      titulo: 'Articulo 3',
      precio: Math.round(Math.random() * 200),
      tipoEnvio: TipoEnvio[Math.floor(Math.random() * 5)],
      imagen:
        'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Karu/2021/June/Karu_LP_XBOX2.png',
      comentario:
        'Aute nulla dolore minim eiusmod in Lorem anim aute incididunt aliquip Lorem cillum.',
        comprado:false,
    },
    {
      id: 4,
      titulo: 'Articulo 4',
      precio: Math.round(Math.random() * 200),
      tipoEnvio: TipoEnvio[Math.floor(Math.random() * 5)],
      imagen:
        'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Karu/2021/June/Karu_LP_Laptop.png',
      comentario:
        'Enim ullamco ex culpa laboris voluptate ullamco dolore qui Lorem deserunt laboris amet.',
        comprado:false,
    },
    {
      id: 5,
      titulo: 'Articulo 5',
      precio: Math.round(Math.random() * 200),
      tipoEnvio: TipoEnvio[Math.floor(Math.random() * 5)],
      imagen:
        'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Karu/2021/June/Karu_LP_Playstation3.jpg',
      comentario:
        'Amet non esse adipisicing minim aliqua cillum laboris dolore.',
        comprado:false,
    },
    {
      id: 6,
      titulo: 'Articulo 6',
      precio: Math.round(Math.random() * 200),
      tipoEnvio: TipoEnvio[Math.floor(Math.random() * 5)],
      imagen:
        'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Karu/2021/June/Karu_LP_Game.png',
      comentario: 'Ad consectetur do velit esse culpa laboris incididunt.',
      comprado:false,
    },
    {
      id: 7,
      titulo: 'Articulo 7',
      precio: Math.round(Math.random() * 200),
      tipoEnvio: TipoEnvio[Math.floor(Math.random() * 5)],
      imagen:
        'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Karu/2021/June/Karu_Quad_Headset.jpg',
      comentario: 'Cupidatat consequat sint irure excepteur do minim nulla in.',
      comprado:false,
    },
    {
      id: 8,
      titulo: 'Articulo 8',
      precio: Math.round(Math.random() * 200),
      tipoEnvio: TipoEnvio[Math.floor(Math.random() * 5)],
      imagen:
        'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Karu/2021/June/Karu_Quad_Keyboard.jpg',
      comentario:
        'Sunt tempor consectetur anim qui anim nostrud voluptate elit.',
        comprado:false,
    },
    {
      id: 9,
      titulo: 'Articulo 9',
      precio: Math.round(Math.random() * 200),
      tipoEnvio: TipoEnvio[Math.floor(Math.random() * 5)],
      imagen:
        'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Karu/2021/June/Karu_Quad_Chair.jpg',
      comentario:
        'Excepteur amet in ea commodo incididunt ut amet excepteur aliqua.',
        comprado:false,
    },
    {
      id: 10,
      titulo: 'Articulo 10',
      precio: Math.round(Math.random() * 200),
      tipoEnvio: TipoEnvio[Math.floor(Math.random() * 5)],
      imagen:
        'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Karu/2021/June/Karu_Quad_Mouse.jpg',
      comentario: 'Ex irure eu id anim magna ut quis adipisicing.',
      comprado:false,
    },
  ];


  guardarDatos(id: number){
    this.datosCard[id-1].comprado=!this.datosCard[id-1].comprado
  }
}
