import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatExpansionModule } from '@angular/material/expansion';
import { HomeComponent } from './components/core/home/home.component';
import { AuthorComponent } from './components/core/author/author.component';
import { AbouthComponent } from './components/core/abouth/abouth.component';
import { LigaComponent } from './components/liga/liga.component';
import { TimComponent } from './components/tim/tim.component';
import { NacionalnostComponent } from './components/nacionalnost/nacionalnost.component';
import { IgracComponent } from './components/igrac/igrac.component';
import {  HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NacionalnostDialogComponent } from './components/dialogs/nacionalnost-dialog/nacionalnost-dialog.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog'
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { LigaDialogComponent } from './components/dialogs/liga-dialog/liga-dialog.component';
import { TimDialogComponent } from './components/dialogs/tim-dialog/tim-dialog.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthorComponent,
    AbouthComponent,
    LigaComponent,
    TimComponent,
    NacionalnostComponent,
    IgracComponent,
    NacionalnostDialogComponent,
    LigaDialogComponent,
    TimDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatExpansionModule,
    MatTableModule,
    HttpClientModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
