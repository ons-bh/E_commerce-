import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsModule } from './products/products.module';
import { AuthentificationModule } from'./authentification/authentification.module';
import { AjoutcategorieComponent } from './Components/Categories/ajoutcategorie/ajoutcategorie.component';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';
import { ScategoriesModule } from './scategories/scategories.module';
import { CategoriesModule } from './categories/categories.module';
@NgModule({
  declarations: [
    AppComponent,
    AjoutcategorieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ProductsModule,
    AuthentificationModule,
    ShoppingCartModule,
    ScategoriesModule,
    CategoriesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
