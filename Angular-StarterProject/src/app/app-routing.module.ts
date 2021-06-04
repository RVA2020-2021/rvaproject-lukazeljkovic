import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AbouthComponent } from './components/core/abouth/abouth.component';
import { AuthorComponent } from './components/core/author/author.component';
import { HomeComponent } from './components/core/home/home.component';
import { IgracComponent } from './components/igrac/igrac.component';
import { LigaComponent } from './components/liga/liga.component';
import { NacionalnostComponent } from './components/nacionalnost/nacionalnost.component';
import { TimComponent } from './components/tim/tim.component';


const routes: Routes = [

  {path:'liga', component: LigaComponent},
  {path: 'tim', component: TimComponent},
  {path: 'nacionalnost',component: NacionalnostComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about',component:AbouthComponent},
  {path: 'author',component:AuthorComponent},
  {path:'',redirectTo:'/home',pathMatch : 'full'}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
