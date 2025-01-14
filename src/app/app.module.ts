import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common-component/header/header.component';
import { FooterComponent } from './common-component/footer/footer.component';
import { DevelopmentIntegrationComponent } from './home/development-integration/development-integration.component';
import { UiUxComponent } from './home/ui-ux/ui-ux.component';
import { ConnectComponent } from './home/connect/connect.component';
import { CardService } from './home/service/card.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DevelopmentIntegrationComponent,
    UiUxComponent,
    ConnectComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule
    
  ],
  
  providers: [
    CardService,
    provideHttpClient(withInterceptorsFromDi()) ,
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
function ProviceHttpClient(): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
  throw new Error('Function not implemented.');
}

