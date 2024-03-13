import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { GifsComponent } from './core/components/gifs/gifs.component';
import { UserModule } from './user/user.module';
import { SearchComponent } from './core/components/search/search.component';
import { SafePipe } from './pipes/safe.pipe';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        GifsComponent,
        SearchComponent,
        SafePipe,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        UserModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
