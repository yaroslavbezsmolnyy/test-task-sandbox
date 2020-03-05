import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SandboxComponent } from './sandbox.component';
import { SandboxRoutingModule } from '@views/main/sandbox/sandbox-routing.module';
import { SharedModule } from '@shared/shared.module';
import { EditorComponent } from './editor/editor.component';
import { TestResultsComponent } from './test-results/test-results.component';
import { DescriptionComponent } from './description/description.component';
import { AppFormsModule } from '@app/common/modules/forms/forms.module';

@NgModule({
  declarations: [SandboxComponent, EditorComponent, TestResultsComponent, DescriptionComponent],
  imports: [CommonModule, SharedModule, SandboxRoutingModule, AppFormsModule]
})
export class SandboxModule {}
