import { Injectable } from '@angular/core';
import IStandaloneCodeEditor = monaco.editor.IStandaloneCodeEditor;
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SandboxService {
  private editor$: BehaviorSubject<IStandaloneCodeEditor> = new BehaviorSubject<IStandaloneCodeEditor>(null);

  set editor(editor: IStandaloneCodeEditor) {
    this.editor$.next(editor);
  }

  get editor(): IStandaloneCodeEditor {
    return this.editor$.value;
  }

  get editorValue(): string {
    return this.editor$.value?.getValue();
  }
}
