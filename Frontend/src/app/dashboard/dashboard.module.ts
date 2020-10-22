import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DashboardProfileComponent } from './dashboard-profile/dashboard-profile.component';
import { DashboardSidebarComponent } from './dashboard-sidebar/dashboard-sidebar.component';
import { DashboardDisplayComponent } from './dashboard-display/dashboard-display.component';

const ROUTES = [
  { path: 'dashboard', component: DashboardDisplayComponent }
]

@NgModule({
  declarations: [
    DashboardProfileComponent,
    DashboardSidebarComponent,
    DashboardDisplayComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class DashboardModule { }
