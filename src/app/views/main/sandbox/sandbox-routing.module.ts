import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SandboxComponent } from '@app/views/main/sandbox/sandbox.component';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: SandboxComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
@NgModule({
  declarations: [],
  imports: [CommonModule]
})
export class SandboxRoutingModule {}
