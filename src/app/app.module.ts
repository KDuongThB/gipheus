import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { PostComponent } from './core/components/post/post.component';
import { UserModule } from './user/user.module';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        PostComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        UserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
