import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PipelinesComponent} from './pipelines/pipelines.component';
import {
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatGridListModule,
  MatToolbarModule,
  MatRadioModule,
} from '@angular/material';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';

import {AppRoutingModule} from './app-routing.module';
import {PipelineDetailComponent} from './pipeline-detail/pipeline-detail.component';
import {JsonEditorComponent} from './json-editor/json-editor.component';
import {PipelineCreateComponent} from './pipeline-create/pipeline-create.component';
import {PipelineCronjobComponent} from './pipeline-cronjob/pipeline-cronjob.component';
import {CronjobCreateDialogComponent} from './pipeline-cronjob/cronjob-create-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    PipelinesComponent,
    PipelineDetailComponent,
    JsonEditorComponent,
    PipelineCreateComponent,
    PipelineCronjobComponent,
    CronjobCreateDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatToolbarModule,
    MatRadioModule,
    MatDividerModule,
    MatCardModule,
    MatSnackBarModule,
    MatIconModule,
    FormsModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatDialogModule,

    HttpClientModule,
    AppRoutingModule,
  ],
  entryComponents: [CronjobCreateDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
