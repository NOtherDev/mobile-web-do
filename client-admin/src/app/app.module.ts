import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule, ENVIRONMENT_TOKEN, EnvironmentProvider, NotificationsService } from './core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

import { SessionsModule } from './sessions/sessions.module';

@NgModule({
    imports: [
        BrowserModule,
        CoreModule,
        SessionsModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        EnvironmentProvider,
        NotificationsService,
        {
            provide: ENVIRONMENT_TOKEN,
            useValue: environment
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
