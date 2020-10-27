import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DashboardProfileComponent } from './dashboard-profile/dashboard-profile.component';
import { DashboardSidebarComponent } from './dashboard-sidebar/dashboard-sidebar.component';
import { DashboardDisplayComponent } from './dashboard-display/dashboard-display.component';
import { DashBooksComponent } from './pages/dash-books/dash-books.component';
import { DashOverviewComponent } from './pages/dash-overview/dash-overview.component';
import { DashCoursesComponent } from './pages/dash-courses/dash-courses.component';

const ROUTES = [
  {
    path: '',
    component: DashboardDisplayComponent,
    children: [
      { path: 'dash-overview', component: DashOverviewComponent },
      { path: 'dash-courses', component: DashCoursesComponent },
      { path: 'dash-books', component: DashBooksComponent },
      { path: '', redirectTo: 'dash-overview', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  declarations: [
    DashboardProfileComponent,
    DashboardSidebarComponent,
    DashboardDisplayComponent,
    DashOverviewComponent,
    DashCoursesComponent,
    DashBooksComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class DashboardModule { }
