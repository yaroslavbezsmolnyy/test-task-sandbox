import { Component } from '@angular/core';
import { BASE_CONTENT, STORAGE_KEYS } from '@misc/constants';
import IEditorConstructionOptions = monaco.editor.IEditorConstructionOptions;
import IStandaloneCodeEditor = monaco.editor.IStandaloneCodeEditor;
import { SandboxService } from '@services/sandbox/sandbox.service';

@Component({
  selector: 'editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent {
  readonly editorOptions: IEditorConstructionOptions = {
    language: 'javascript',
    automaticLayout: true,
    theme: 'vs-dark',
    minimap: {
      enabled: false
    }
  };
  value: string = localStorage.getItem(STORAGE_KEYS.VALUE) || BASE_CONTENT;

  constructor(private sandboxService: SandboxService) {}

  onValueChanges(value: string): void {
    localStorage.setItem(STORAGE_KEYS.VALUE, value);
    localStorage.setItem(STORAGE_KEYS.STATE, JSON.stringify(this.sandboxService.editor.saveViewState()));
  }

  onInit(editor: IStandaloneCodeEditor) {
    editor.restoreViewState(JSON.parse(localStorage.getItem(STORAGE_KEYS.STATE)));
    editor.focus();
    this.sandboxService.editor = editor;
  }
}
