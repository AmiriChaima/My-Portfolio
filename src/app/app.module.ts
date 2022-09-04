import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { ProjectComponent } from './project/project.component';
import { ContactComponent } from './contact/contact.component';

import { Form, FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AboutComponent,
    SkillsComponent,
    EducationComponent,
    ProjectComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
 
    
    
  
    RouterModule.forRoot([
      {path:'', component:AboutComponent },
      {path:'about', component:AboutComponent },
      {path:'skills', component:SkillsComponent },
      {path:'education', component:EducationComponent },
      {path:'project', component:ProjectComponent },
      {path:'contact', component:ContactComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
