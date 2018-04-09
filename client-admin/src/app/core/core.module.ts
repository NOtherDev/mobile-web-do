import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { PageNotFoundComponent, UnauthorizedComponent } from './components';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        RouterModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
    ],
    declarations: [
        PageNotFoundComponent,
        UnauthorizedComponent
    ],
    exports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        RouterModule,
        PageNotFoundComponent,
        UnauthorizedComponent
    ],
})
export class CoreModule {
}
