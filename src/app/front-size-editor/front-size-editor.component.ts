import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-front-size-editor',
  templateUrl: './front-size-editor.component.html',
  styleUrls: ['./front-size-editor.component.css']
})
export class FrontSizeEditorComponent implements OnInit {
  frontSize = 14;
  constructor() { }
  onchange(value){
    this.frontSize = value;
  }
  ngOnInit(): void {
  }

}
