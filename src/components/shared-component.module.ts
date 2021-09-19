import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MainContentComponent } from './main-content/main-content.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdvertisingComponent } from './advertising/advertising.component';
import { CustomProductListComponent } from './custom-product-list/custom-product-list.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    MainContentComponent,
    SidebarComponent,
    AdvertisingComponent,
    CustomProductListComponent,
    ProductListComponent,
  ],
  imports: [CommonModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    MainContentComponent,
    SidebarComponent,
    AdvertisingComponent,
    ProductListComponent,
    CustomProductListComponent,
  ],
})
export class SharedComponentModule {}
