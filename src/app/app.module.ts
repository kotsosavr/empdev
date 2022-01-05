import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterLink, RouterModule } from '@angular/router';
import { DevComponentComponent } from './dev-component/dev-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MaterialEmployeeComponent } from './material-employee/material-employee.component';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { DefaultcompComponent } from './defaultcomp/defaultcomp.component';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DevEditComponent } from './dev-edit/dev-edit.component';

const appRoutes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'Employees', component: MaterialEmployeeComponent },
  { path: 'Employees/:id', component: EmployeeEditComponent },
  { path: 'Devices', component: DevComponentComponent },
  { path: 'Devices/:serial', component: DevEditComponent },
  { path: 'home', component: DefaultcompComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    DevComponentComponent,
    MaterialEmployeeComponent,
    EmployeeEditComponent,
    DefaultcompComponent,
    DevEditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    HttpClientModule,
    MatTableModule,
    MatListModule,
    RouterModule.forRoot(appRoutes),
    MatCardModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [MatSidenavModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
