import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable()
export class AlertService {
    constructor(private snackBar: MatSnackBar) { }

    success(message: string, action?: string, config?: MatSnackBarConfig<any>) {
        this.snackBar.open(message, action, config || {
            panelClass: ['style-success'],
            duration: 4000,
            horizontalPosition: 'right',
            verticalPosition: 'top'
        });
    }

    error(message: string, action?: string, config?: MatSnackBarConfig<any>) {
        this.snackBar.open(message, action, config || {
            panelClass: ['style-error'],
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top'
        });
    }

    waring(message: string, action?: string, config?: MatSnackBarConfig<any>) {
        this.snackBar.open(message, action, config || {
            panelClass: ['style-warning'],
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top'
        });
    }
}
