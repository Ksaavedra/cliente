import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TabMenuModule } from 'primeng/tabmenu';
import { ButtonModule } from 'primeng/button';
import { MegaMenuModule } from 'primeng/megamenu';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { InvestidorComponent } from './investidor/investidor.component';
import { LoginComponent } from './login/login.component';
import { SobreComponent } from './sobre/sobre.component';
import { StartupComponent } from './startup/startup.component';
import { InvestirComponent } from './investidor/investir/investir.component';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressBarModule } from 'primeng/progressbar';
import { CadastrarComponent } from './startup/cadastrarStartup/cadastrar.component';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [	
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    InvestidorComponent,
    LoginComponent,
    SobreComponent,
    StartupComponent,
    InvestirComponent,
    CadastrarComponent

   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    TabMenuModule,
    CardModule,
    MenubarModule,
    ButtonModule,
    InputTextModule,
    MegaMenuModule,
    ProgressBarModule,
    DialogModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
