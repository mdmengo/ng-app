import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DropdownDirective } from './dropdown-directive/dropdown.directive';

@NgModule({
  declarations: [
    DropdownDirective
  ],
  imports: [
    NgbModule.forRoot()
  ],
  exports: [
    CommonModule,
    NgbModule,
    DropdownDirective
  ]
})
export class SharedModule {}