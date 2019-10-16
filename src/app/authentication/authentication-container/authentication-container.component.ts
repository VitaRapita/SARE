import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { MustMatch } from "./custom-validators";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";
import { AutoUnsubscribe } from "ngx-auto-unsubscribe";
import { AuthenticationService } from "../services/authentication.service";

@AutoUnsubscribe()
@Component({
  selector: "bb-login-container",
  animations: [
    trigger("flip", [
      state(
        "initial",
        style({
          transform: "rotateY(0deg) translate3d(0, 0, 0) scale(1)"
        })
      ),
      state(
        "final",
        style({
          transform: "rotateY(180deg) translate3d(0, 0, 0) scale(1)"
        })
      ),
      transition("initial=>final", animate("500ms")),
      transition("final=>initial", animate("500ms"))
    ])
  ],
  templateUrl: "./authentication-container.component.html",
  styleUrls: ["./authentication-container.component.scss"]
})
export class AuthenticationContainerComponent implements OnInit, OnDestroy {
  currentState = "initial";
  loginForm: FormGroup;
  registerForm: FormGroup;
  error = "";

  configurations = {
    page_backgroung: "#746c62",
    body_backgroung: "#ffffff",
    top_menu: "#e6ded2",
    button_color: "#78b532",
    languages: ["EN", "NL"]
  };

  constructor(
    // private authService: AuthenticationService,
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthenticationService
  ) {
    this.loginForm = this.fb.group({
      email: [
        "",
        [
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
        ]
      ],
      password: ["", [Validators.required, Validators.minLength(8)]]
    });

    this.registerForm = this.fb.group(
      {
        id: ["", [Validators.required]],
        name: "",
        email: [
          "",
          [
            Validators.required,
            Validators.pattern(
              "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
            )
          ]
        ],
        password: [null, [Validators.required, Validators.minLength(8)]],
        confirmPassword: [null, [Validators.required]]
      },
      { validator: MustMatch("password", "confirmPassword") }
    );
  }

  ngOnInit() {}

  toggle() {
    this.currentState = this.currentState === "initial" ? "final" : "initial";
  }

  authentication() {
    // this.authService.authentication(this.loginForm.value).subscribe(
    //   (data: any) => {
    //     localStorage.setItem('token', data.token);
    //     localStorage.setItem('user', JSON.stringify(data.user));
    //     localStorage.setItem(
    //       'configurations',
    //       JSON.stringify(this.configurations)
    //     );
    //     this.router.navigate(['/overview']);
    //   },
    //   () => {
    //     this.error = `Authentication is failed. Please check your username and password`;
    //   }
    // );
    this.router.navigate(["/admin"]);
  }

  ngOnDestroy() {}
}
