import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ReactiveFormsModule } from "@angular/forms";
import { SignupComponent } from "./components/signup/signup.component";
import { ListingComponent } from './components/listing/listing.component';
import { UpdateformComponent } from './components/updateform/updateform.component';
@NgModule({
  declarations: [AppComponent, SignupComponent, ListingComponent, UpdateformComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
