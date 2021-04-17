import { Component, Input, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-criteria-group',
  templateUrl: './criteria-group.component.html',
  styleUrls: ['./criteria-group.component.scss']
})
export class CriteriaGroupComponent implements OnInit {
  @Input() firstInputType: string = 'text';
  @Input() secondInputType: string = 'text';
  @Input() firstInputLabel: string =  'Input';
  @Input() secondInputLabel: string = 'Input';
  
  public criteriaGroup: FormGroup;
  constructor(private form: FormBuilder) { 
    this.criteriaGroup = this.form.group({
      first: form.control(null,[Validators.required]) 
    })
  }

  ngOnInit(): void {
  }

}
