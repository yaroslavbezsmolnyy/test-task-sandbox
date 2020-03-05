import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { PipesModule } from '@pipes/pipes.module';

@NgModule({
  declarations: [],
  exports: [FormsModule, ReactiveFormsModule],
  imports: [CommonModule, SharedModule, FormsModule, ReactiveFormsModule, PipesModule]
})
export class AppFormsModule {}
