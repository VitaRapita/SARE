import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpResponse,
  HttpRequest
} from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { AuthenticationService } from "../../authentication/services/authentication.service";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    private authenticationService: AuthenticationService,
    private snackBar: MatSnackBar
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // add a custom header
    if (this.authenticationService.getToken()) {
      request = request.clone({
        setHeaders: {
          Authorization: `Token ${this.authenticationService.getToken()}`
        }
      });
    }

    return next.handle(request).pipe(
      tap(
        (event: HttpEvent<any>) => {
          this.onSuccess(event);
        },
        (error: any) => {
          this.onError(error);
        }
      )
    );
  }

  onSuccess(event: any) {
    if (event instanceof HttpResponse) {
      // Intercepting HTTP responses
    }
  }

  onError(error: any) {
    if (error.status === 401) {
      this.authenticationService.logOut();
    }

    this.snackBar.open(error.message, "Close", {
      duration: 3000,
      panelClass: ["snackbar-color"],
      verticalPosition: "bottom"
    });
  }
}
