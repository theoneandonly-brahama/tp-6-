import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ContactComponent } from './contact/contact.component';
import { ListproduitsComponent } from './listproduits/listproduits.component';
import { ErrorComponent } from './error/error.component';
const routes: Routes = [

{path:'accueil', component:AccueilComponent},
{path:'produits', component:ListproduitsComponent},
{path:'contact', component:ContactComponent},
{path:'', redirectTo:'accueil', pathMatch:'full'},
{path:'**', component:ErrorComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
