import { NgModule } from '@angular/core';
import {
  MatAutocompleteModule,
  MatButtonModule, MatCardModule,
  MatChipsModule, MatDialogModule,
  MatDividerModule, MatExpansionModule,
  MatIconModule,
  MatProgressSpinnerModule
} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatTreeModule} from '@angular/material/tree';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';


const modules = [
  MatButtonModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatDividerModule,
  MatInputModule,
  MatAutocompleteModule,
  MatProgressSpinnerModule,
  MatChipsModule,
  MatListModule,
  MatTreeModule,
  MatSelectModule,
  MatSnackBarModule,
  MatDialogModule,
  MatExpansionModule,
  MatCardModule
];

@NgModule({
  declarations: [],
  imports: modules,
  exports: modules,
})
export class MaterialModule { }
