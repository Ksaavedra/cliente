import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SobreComponent } from './sobre/sobre.component';
import { CadastrarComponent } from './startup/cadastrarStartup/cadastrar.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
//import { InvestirComponent } from './investidor/investir/investir.component';

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
//  { path: 'investir', component: InvestirComponent },
  { path: 'startup', component: CadastrarComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'login', component: LoginComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
