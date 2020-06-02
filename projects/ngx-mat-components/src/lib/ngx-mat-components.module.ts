import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { NgxMatTableComponent } from './ngx-mat-table/ngx-mat-table.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { NgxMatExpansionComponent } from './ngx-mat-expansion/ngx-mat-expansion.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { NgxMatComponentsComponent } from '../public-api';
import { NgxMatReactiveFormComponent } from './ngx-mat-reactive-form/ngx-mat-reactive-form.component';

@NgModule({
  declarations: [NgxMatComponentsComponent, NgxMatExpansionComponent, NgxMatReactiveFormComponent, NgxMatTableComponent],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    ReactiveFormsModule
  ],
  exports: [
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    NgxMatComponentsComponent,
    NgxMatExpansionComponent,
    NgxMatReactiveFormComponent,
    NgxMatTableComponent,
    ReactiveFormsModule,
  ]
})
export class NgxMatComponentsModule { }
