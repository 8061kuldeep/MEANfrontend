import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { MyserviceService } from "src/app/service/myservice.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-updateform",
  templateUrl: "./updateform.component.html",
  styleUrls: ["./updateform.component.css"],
})
export class UpdateformComponent implements OnInit {
  updateForm: FormGroup;
  toUpdate: any;
  id: any;
  constructor(
    private builder: FormBuilder,
    private myservice: MyserviceService,
    private activate: ActivatedRoute,
    private router: Router
  ) {}
  update() {
    console.log("update");
    this.myservice.updateUser(this.id, this.updateForm.value).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
    this.router.navigate(["userDetails"]);
  }
  ngOnInit(): void {
    this.updateForm = this.builder.group({
      username: ["", [Validators.required]],
      email: ["", [Validators.required]],
      address: ["", [Validators.required]],
      mobno: ["", [Validators.required]],
    });
    this.gettoupdate();
  }
  gettoupdate() {
    this.id = this.activate.snapshot.params["id"];
    console.log(this.id);
    this.myservice.getToUpdate(this.id).subscribe(
      (res) => {
        this.toUpdate = res;
        this.updateForm = this.builder.group({
          username: [this.toUpdate.username, [Validators.required]],
          email: [this.toUpdate.email, [Validators.required]],
          address: [this.toUpdate.address, [Validators.required]],
          mobno: [this.toUpdate.mobno, [Validators.required]],
        });
        console.log(this.toUpdate.username);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
