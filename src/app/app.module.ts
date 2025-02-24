import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { ProductCardComponent } from './components/products/product-card/product-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { CategoryNavComponent } from './components/category-nav/category-nav.component';
import { SectionHeaderComponent } from './components/section-header/section-header.component';
import { ProductsComponent } from './components/products/products.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoryNavigationComponent } from './components/category-navigation/category-navigation.component';
import { ImageCardComponent } from './components/image-card/image-card.component';
import { ImageGridComponent } from './components/image-grid/image-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,    
    ProductListComponent,
    ProductCardComponent,    
    FooterComponent,
    
    HeaderComponent,
    CategoryNavComponent,
    SectionHeaderComponent,
    ProductsComponent,
    CategoryNavigationComponent,
    ImageCardComponent,
    ImageGridComponent,
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
