import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { FavouriteComponent } from './favourite/favourite.component';

const routes: Routes = [
  { path: 'main-page', component: MainPageComponent },
  { path: 'item-detail/:itemId', component: ItemDetailComponent },
  { path: 'list', component: ListComponent},
  { path: 'favourite', component: FavouriteComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: MainPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
