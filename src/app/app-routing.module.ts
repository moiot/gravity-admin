import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PipelinesComponent} from './pipelines/pipelines.component';
import {PipelineDetailComponent} from './pipeline-detail/pipeline-detail.component';
import {PipelineCreateComponent} from "./pipeline-create/pipeline-create.component";
import {ProcessListComponent} from "./process-list/process-list.component";

const routes: Routes = [
  {path: 'pipelines/create', component: PipelineCreateComponent},
  {path: 'pipelines/:id', component: PipelineDetailComponent},
  {path: 'pipelines', component: PipelinesComponent},
  {path: 'processes', component: ProcessListComponent},
  {path: '', redirectTo: '/pipelines', pathMatch: 'full'},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}
