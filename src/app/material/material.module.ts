import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from "@angular/core";
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatChipsModule } from "@angular/material/chips";
import { MatOptionModule, MatNativeDateModule } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatTabsModule } from "@angular/material/tabs";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatBadgeModule } from '@angular/material/badge';

@NgModule({
  imports: [
    BrowserAnimationsModule, MatIconModule,
    MatProgressSpinnerModule, MatDatepickerModule,
    MatCardModule, MatButtonModule, MatOptionModule,
    MatSelectModule, MatAutocompleteModule,
    MatCheckboxModule, MatSortModule, MatTableModule,
    MatFormFieldModule, MatButtonToggleModule,
    MatChipsModule, MatTabsModule, MatRadioModule,
    MatDialogModule, MatInputModule, MatTooltipModule,
    MatSidenavModule, MatToolbarModule, MatListModule,
    MatExpansionModule, MatProgressBarModule, MatPaginatorModule, MatNativeDateModule,
    MatMenuModule, MatBadgeModule,
  ],
  exports: [
    BrowserAnimationsModule,
    DragDropModule,
    MatIconModule,
    MatProgressSpinnerModule, MatDatepickerModule,
    MatOptionModule, MatSelectModule,
    MatAutocompleteModule,
    MatTooltipModule,
    MatCardModule, MatSortModule, MatTableModule,
    MatButtonModule, MatTabsModule, MatButtonToggleModule,
    MatChipsModule, MatCheckboxModule, MatRadioModule,
    MatFormFieldModule, MatDialogModule, MatInputModule,
    MatSidenavModule, MatToolbarModule, MatListModule,
    MatExpansionModule, MatProgressBarModule, MatPaginatorModule,
    MatNativeDateModule,
    MatMenuModule, MatBadgeModule,
  ]
})
export class MaterialModule { }