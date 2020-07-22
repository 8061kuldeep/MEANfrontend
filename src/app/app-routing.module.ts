import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListingComponent } from "./components/listing/listing.component";
import { SignupComponent } from "./components/signup/signup.component";
import { UpdateformComponent } from "./components/updateform/updateform.component";

const routes: Routes = [
  {
    path: "userDetails",
    component: ListingComponent,
  },
  {
    path: "signup",
    component: SignupComponent,
  },
  {
    path: "update/:id",
    component: UpdateformComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
