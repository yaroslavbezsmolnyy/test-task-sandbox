import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { LoaderComponent } from './loader/loader.component';

// Components

@NgModule({
  declarations: [LoaderComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule,
    MonacoEditorModule.forRoot({
      baseUrl: 'assets',
      defaultOptions: { scrollBeyondLastLine: false }
    })
  ],
  exports: [MaterialModule, ReactiveFormsModule, RouterModule, MonacoEditorModule, LoaderComponent]
})
export class SharedModule {}
