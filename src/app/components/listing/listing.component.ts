import { Component, OnInit } from "@angular/core";
import { MyserviceService } from "src/app/service/myservice.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-listing",
  templateUrl: "./listing.component.html",
  styleUrls: ["./listing.component.css"],
})
export class ListingComponent implements OnInit {
  userDetails: any;
  toUpdate: any;

  ngOnInit(): void {
    this.getUser();
  }
  constructor(
    private myservice: MyserviceService,

    private router: Router
  ) {
    this.getUser();
  }
  update(id) {
    this.router.navigateByUrl("update/" + id);
  }

  getUser() {
    this.myservice.getUsers().subscribe(
      (res) => {
        this.userDetails = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  delete(id) {
    this.myservice.deleteUser(id).subscribe(
      (res) => {
        console.log(res);
        this.getUser();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
