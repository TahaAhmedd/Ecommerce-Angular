import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavparComponent } from './component/navpar/navpar.component';
import { MainComponent } from './component/main/main.component';
import { ProductComponent } from './component/product/product.component';
import { FooterComponent } from './component/footer/footer.component';
import { FormAddComponent } from './component/form-add/form-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginformComponent } from './component/loginform/loginform.component';
import { ShoppingCartComponent } from './component/shopping-cart/shopping-cart.component';
import { CartChildComponent } from './component/cart-child/cart-child.component';

@NgModule({
  declarations: [
    AppComponent,
    NavparComponent,
    MainComponent,
    ProductComponent,
    FooterComponent,
    FormAddComponent,
    LoginformComponent,
    ShoppingCartComponent,
    CartChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
