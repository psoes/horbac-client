import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { concatMap, tap } from 'rxjs/operators';
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatDialog } from "@angular/material/dialog";

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor( private _snackBar: MatSnackBar){}
  
  
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return  next.handle(request).pipe(tap(
      event => {
          if(event instanceof HttpResponse){
            this._snackBar.open('success', "Request success",
            {
              duration: 2000,
              //panelClass: ['warn-snackbar']
              //'mat-primary' to 'mat-accent' or 'mat-warn'
              panelClass: ['mat-toolbar', 'mat-primary']
            });
          } else ''
      },      
      err => {
        this._snackBar.open('danger', "Something went wrong with the request, please try again.",
        {
          duration: 2000,
          //panelClass: ['warn-snackbar']
          //'mat-primary' to 'mat-accent' or 'mat-warn'
          panelClass: ['mat-toolbar', 'mat-warn']
        });
      })
    )
  }
}