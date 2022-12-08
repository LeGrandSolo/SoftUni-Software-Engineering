import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { RecentListComponent } from './recent-list/recent-list.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ThemeContentComponent } from './theme-content/theme-content.component';


@NgModule({
  declarations: [AppComponent, ThemeListComponent, RecentListComponent, MainComponent, HomeComponent, NotFoundComponent, ThemeContentComponent,],
  imports: [BrowserModule, AppRoutingModule, CoreModule, HttpClientModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
