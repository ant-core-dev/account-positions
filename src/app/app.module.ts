import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssetsComponent } from './components/assets/assets.component';
import { AssetListComponent } from './components/asset-list/asset-list.component';
import { AssetHeaderComponent } from './components/asset-header/asset-header.component';

@NgModule({
  declarations: [
    AppComponent,
    AssetsComponent,
    AssetListComponent,
    AssetHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
