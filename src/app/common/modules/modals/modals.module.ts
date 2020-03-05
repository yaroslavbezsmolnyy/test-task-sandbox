import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@shared/material/material.module';
import { AppFormsModule } from '@app/common/modules/forms/forms.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [],
  entryComponents: [],
  imports: [CommonModule, MaterialModule, AppFormsModule, SharedModule]
})
export class ModalsModule {}
