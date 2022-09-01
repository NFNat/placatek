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
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';



const appRoutes: Routes = [
  { path:'home', component:HomeComponent},
  { path:'error', component:E404Component },
  { path:'',  redirectTo: 'home', pathMatch:'full' },
  { path:'contacto', component:ContactoComponent },

]


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
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
