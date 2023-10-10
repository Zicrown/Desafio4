import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  datosCard=[
    {
      id:1,
      titulo: 'Articulo 1',
      precio: Math.round(Math.random()*100),
      tipoEnvio: 'Express',
      imagen: 'https://m.media-amazon.com/images/I/81lL5QxvDPL._AC_UL320_.jpg'
    },
    {
      id:2,
      titulo: 'Articulo 2',
      precio: Math.round(Math.random()*100),
      tipoEnvio: 'Naval',
      imagen: 'https://m.media-amazon.com/images/I/71M5HhRgdeL._AC_UL320_.jpg'
    },
    {
      id:3,
      titulo: 'Articulo 3',
      precio: Math.round(Math.random()*100),
      tipoEnvio: 'Tierra',
      imagen: 'https://m.media-amazon.com/images/I/61N31efNYxL._AC_UL320_.jpg'
    },
    {
      id:4,
      titulo: 'Articulo 4',
      precio: Math.round(Math.random()*100),
      tipoEnvio: 'MRW',
      imagen: 'https://m.media-amazon.com/images/I/51-eyeH8+nL._AC_UL320_.jpg'
    },
    {
      id:5,
      titulo: 'Articulo 5',
      precio: Math.round(Math.random()*100),
      tipoEnvio: 'Vuelo',
      imagen: 'https://m.media-amazon.com/images/I/616NIy5Td7S._AC_UL320_.jpg'
    },
  ]
}
