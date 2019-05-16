import { CustomPreloadWithDelayStrattegyService } from './custom-preload-with-delay-strattegy.service.1';
import { AddressComponent } from './address/address.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PersonComponent } from "./person/person.component";
import { PageNotfoundComponent } from "./page-notfound/page-notfound.component";
import { ContactComponent } from "./contact/contact.component";
import { CompanyComponent } from "./company/company.component";

// import {PreloadAllModules} from '@angular/router'
//import { CustomPreloadStrattegyService } from './custom-preload-strattegy.service';
const routes: Routes = [
 
  { path: "", redirectTo: "", pathMatch: "full" },
 
  {
    path: "company",  loadChildren:"./company/company.module#CompanyModule",data:{preload:true, delay:false} 
    
  },
  { path: "person", loadChildren:"./person/person.module#PersonModule" ,data:{preload:true, delay:true}},
  { path: "address", loadChildren:"./address/address.module#AddressModule" },
  { path: "contact", component: ContactComponent },
  { path: "**", component: PageNotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, 
    {preloadingStrategy:CustomPreloadWithDelayStrattegyService})],
    providers:[CustomPreloadWithDelayStrattegyService],

  exports: [RouterModule]
})
export class AppRoutingModule {}
