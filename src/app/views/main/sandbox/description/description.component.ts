import { Component, OnInit } from '@angular/core';
import { EXAMPLE_PARAMS } from '@misc/constants';

@Component({
  selector: 'description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {
  readonly EXAMPLE_PARAMS = EXAMPLE_PARAMS;

  constructor() {}

  ngOnInit() {}
}
