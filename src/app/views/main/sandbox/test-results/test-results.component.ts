import { Component } from '@angular/core';
import { SandboxApiService } from '@services/api/sandbox/sandboxApi.service';
import { AggregatedResult } from '@jest/test-result';
import { SandboxService } from '@services/sandbox/sandbox.service';

export enum TestStatus {
  passed = 'passed',
  failed = 'failed'
}

@Component({
  selector: 'test-results',
  templateUrl: './test-results.component.html',
  styleUrls: ['./test-results.component.scss']
})
export class TestResultsComponent {
  readonly TestStatus: typeof TestStatus = TestStatus;
  results: AggregatedResult;

  constructor(private sandboxService: SandboxService, private sandboxApiService: SandboxApiService) {}

  click() {
    this.sandboxApiService
      .runBaseTests({ testWork: this.sandboxService.editorValue })
      .subscribe((aggregatedResult: AggregatedResult) => {
        this.results = aggregatedResult;
      });
  }
}
