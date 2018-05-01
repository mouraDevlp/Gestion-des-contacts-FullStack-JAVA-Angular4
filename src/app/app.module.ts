import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
import { HttpModule } from '@angular/http';
import { ContactsService } from '../services/contact.service';
import { NewContactComponent } from './new-contact/new-contact.component';
import { NouveauContactComponent } from './nouveau-contact/nouveau-contact.component';
import { EditComponent } from './edit/edit.component';


const  appRoutes : Routes = [
  {path : 'about', component:AboutComponent},
  {path : 'contacts', component: ContactsComponent},
  {path : 'new-contact', component: NewContactComponent},
  {path : 'editContact/:id', component: EditComponent},
  //{path : 'new-contact', component: NouveauContactComponent},
  //{path : 'nouveau-contact', component: NouveauContactComponent},
  {path : '', redirectTo: '/about', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    AboutComponent,
    NewContactComponent,
    NouveauContactComponent,
    EditComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FormsModule
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
