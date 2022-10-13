import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CartComponent } from './component/cart/cart.component';
import { FormAddComponent } from './component/form-add/form-add.component';
import { LogOutComponent } from './component/log-out/log-out.component';
import { LoginformComponent } from './component/loginform/loginform.component';
import { MainComponent } from './component/main/main.component';
import { ProductComponent } from './component/product/product.component';
import { ShoppingCartComponent } from './component/shopping-cart/shopping-cart.component';
import { AuthGurdGuard } from './services/Auth/auth-gurd.guard';

const routes: Routes = [
  {path:"",redirectTo:'/main',pathMatch:"full"},
  {path:"main",component:MainComponent},
  {path:"shoping",component:ShoppingCartComponent,canActivate:[AuthGurdGuard]},
  {path:"login/:path",component:LoginformComponent},
  {path:"register",component:FormAddComponent},
  {path:"logout",component:LogOutComponent},
  {path:"cart",component:CartComponent,canActivate:[AuthGurdGuard]},
  {path:"**",component:MainComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
