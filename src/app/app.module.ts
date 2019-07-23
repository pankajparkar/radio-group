import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatTabsModule, MatToolbarModule, MatInputModule, MatFormFieldModule, MatListModule, MatRadioModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserAddressComponent } from './user-address/user-address.component';
import { ComboBoxComponent } from './combo-box/combo-box.component';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    UserAddressComponent,
    ComboBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTabsModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatListModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
