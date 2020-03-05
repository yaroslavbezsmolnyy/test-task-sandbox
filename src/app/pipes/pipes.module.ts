import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PathParsePipe } from '@pipes/path-parse/path-parse.pipe';

@NgModule({
  declarations: [PathParsePipe],
  exports: [PathParsePipe],
  imports: [CommonModule],
  providers: [PathParsePipe]
})
export class PipesModule {}
