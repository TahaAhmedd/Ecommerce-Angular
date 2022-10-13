import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { LogOutComponent } from './component/log-out/log-out.component';
import { LodearComponent } from './component/lodear/lodear.component';
import { LoadingInterceptor } from './services/Interceptor/loading.interceptor';
import { AuthInterceptor } from './services/Interceptor/auth.interceptor';
import { CartComponent } from './component/cart/cart.component';

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
    CartChildComponent,
    LogOutComponent,
    LodearComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    { 
      provide:HTTP_INTERCEPTORS,
      useClass:LoadingInterceptor,
      multi:true
    },
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
