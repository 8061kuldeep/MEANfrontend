import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MyserviceService } from "src/app/service/myservice.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  constructor(
    private builder: FormBuilder,
    private myservice: MyserviceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signupForm = this.builder.group({
      email: ["", [Validators.required]],
      username: ["", [Validators.required]],
      address: ["", [Validators.required]],
      mobno: ["", [Validators.required]],
    });
  }

  submit() {
    console.log(this.signupForm.value);
    this.myservice.storeUsers(this.signupForm.value).subscribe((res) => {
      console.log(res);
      this.router.navigate(["userDetails"]);
    }),
      (err) => {
        console.log(err);
      };
    this.signupForm.reset();
  }
}
