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
      precio: 300,
      tipoEnvio: TipoEnvio[0],
      imagen:
        'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Karu/2021/June/Karu_LP_Nintendo2.png',
      comentario:
        'Enim ullamco ex culpa laboris voluptate ullamco dolore qui Lorem deserunt laboris amet.',
    },
    {
      id: 2,
      titulo: 'Articulo 2',
      precio: 250,
      tipoEnvio: TipoEnvio[1],
      imagen:
        'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Karu/2021/June/Karu_LP_Oculus2.jpg',
      comentario:
        'Consequat deserunt sit quis aliquip aute occaecat non do occaecat ipsum ullamco sit.',
    },
    {
      id: 3,
      titulo: 'Articulo 3',
      precio: 400,
      tipoEnvio: TipoEnvio[2],
      imagen:
        'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Karu/2021/June/Karu_LP_XBOX2.png',
      comentario:
        'Aute nulla dolore minim eiusmod in Lorem anim aute incididunt aliquip Lorem cillum.',
    },
    {
      id: 4,
      titulo: 'Articulo 4',
      precio: 200,
      tipoEnvio: TipoEnvio[3],
      imagen:
        'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Karu/2021/June/Karu_LP_Laptop.png',
      comentario:
        'Enim ullamco ex culpa laboris voluptate ullamco dolore qui Lorem deserunt laboris amet.',
    },
    {
      id: 5,
      titulo: 'Articulo 5',
      precio: 500,
      tipoEnvio: TipoEnvio[4],
      imagen:
        'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Karu/2021/June/Karu_LP_Playstation3.jpg',
      comentario:
        'Amet non esse adipisicing minim aliqua cillum laboris dolore.',
    },
    {
      id: 6,
      titulo: 'Articulo 6',
      precio: 60,
      tipoEnvio: TipoEnvio[0],
      imagen:
        'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Karu/2021/June/Karu_LP_Game.png',
      comentario: 'Ad consectetur do velit esse culpa laboris incididunt.',
    },
    {
      id: 7,
      titulo: 'Articulo 7',
      precio: 100,
      tipoEnvio: TipoEnvio[1],
      imagen:
        'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Karu/2021/June/Karu_Quad_Headset.jpg',
      comentario: 'Cupidatat consequat sint irure excepteur do minim nulla in.',
    },
    {
      id: 8,
      titulo: 'Articulo 8',
      precio: 80,
      tipoEnvio: TipoEnvio[2],
      imagen:
        'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Karu/2021/June/Karu_Quad_Keyboard.jpg',
      comentario:
        'Sunt tempor consectetur anim qui anim nostrud voluptate elit.',
    },
    {
      id: 9,
      titulo: 'Articulo 9',
      precio: 120,
      tipoEnvio: TipoEnvio[3],
      imagen:
        'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Karu/2021/June/Karu_Quad_Chair.jpg',
      comentario:
        'Excepteur amet in ea commodo incididunt ut amet excepteur aliqua.',
    },
    {
      id: 10,
      titulo: 'Articulo 10',
      precio: 40,
      tipoEnvio: TipoEnvio[4],
      imagen:
        'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Karu/2021/June/Karu_Quad_Mouse.jpg',
      comentario: 'Ex irure eu id anim magna ut quis adipisicing.',
    },
  ];

  

}
