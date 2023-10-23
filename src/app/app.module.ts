import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import {MatCardModule} from '@angular/material/card';
import { CardsComponent } from './cards/cards.component';
import { DescripcionComponent } from './descripcion/descripcion.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    DescripcionComponent,
    HeaderComponent,
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdbCarouselModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
