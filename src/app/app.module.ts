import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListaFotosComponent } from './lista-fotos/lista-fotos.component';
import { DetalleFotoComponent } from './detalle-foto/detalle-foto.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaFotosComponent,
    DetalleFotoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
