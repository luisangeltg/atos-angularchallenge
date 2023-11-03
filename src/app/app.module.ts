import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ApiService } from './services/api-service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

//Components
import { AppComponent } from './app.component';
import { Error404PageComponent } from './components/shared/error404-page/error404-page.component';
import { ChallengeDescriptionComponent } from './components/challenge-description/challenge-description.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { MainComponent } from './components/main/main.component';
import { AlertWarningComponent } from './components/shared/alert-warning/alert-warning.component';

//Material Imports
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs'

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    Error404PageComponent,
    ChallengeDescriptionComponent,
    AlertWarningComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    //Material Imports
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatButtonModule,
    FormsModule,
    MatTabsModule
  ],
  providers: [
    ApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
