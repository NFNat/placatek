import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeaderComponent } from './header/header.component';
import { CocinasComponent } from './cocinas/cocinas.component';
import { PlacaresComponent } from './placares/placares.component';
import { BanhosComponent } from './banhos/banhos.component';
import { LivingComponent } from './living/living.component';
import { ComercialComponent } from './comercial/comercial.component';
import { CarpinteriaComponent } from './carpinteria/carpinteria.component';
import { ContactoComponent } from './contacto/contacto.component';
import { E404Component } from './e404/e404.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeaderComponent,
    CocinasComponent,
    PlacaresComponent,
    BanhosComponent,
    LivingComponent,
    ComercialComponent,
    CarpinteriaComponent,
    ContactoComponent,
    E404Component,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
