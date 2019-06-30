import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'animales', loadChildren: './home/animales/animales.module#AnimalesPageModule' },
  { path: 'humano', loadChildren: './home/humano/humano.module#HumanoPageModule' },
  { path: 'materiales', loadChildren: './home/materiales/materiales.module#MaterialesPageModule' },
  { path: 'plantas', loadChildren: './home/plantas/plantas.module#PlantasPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
