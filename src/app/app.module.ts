import { MatFormField } from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http"
import { MatInputModule} from "@angular/material/input"
import {MatFormFieldModule} from '@angular/material/form-field';
import {  MatButtonModule} from "@angular/material/button";
import { MatListModule} from "@angular/material/list";
import { MatIconModule} from "@angular/material/icon"




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewContactComponent } from './new-contact/new-contact.component';
import { ListContactsComponent } from './list-contacts/list-contacts.component';
import { EventEmitter } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    NewContactComponent,
    ListContactsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatListModule,
    MatIconModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
