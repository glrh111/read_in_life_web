import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MdButtonModule,
  MdCheckboxModule,
  MdToolbarModule,
  MdIconModule,
  MdInputModule,
  MdDialogModule,
  MdChipsModule,
  MdMenuModule,
  MdTabsModule,
  MdAutocompleteModule,
  MdCheckbox
} from '@angular/material';
import 'hammerjs';


@NgModule({
  imports: [
    CommonModule,

    MdButtonModule,
    MdCheckboxModule,
    MdToolbarModule,
    MdIconModule,
    MdInputModule,
    MdDialogModule,
    MdChipsModule,
    MdMenuModule,
    MdTabsModule
  ],
  declarations: [],
  exports: [
    MdButtonModule,
    MdCheckboxModule,
    MdToolbarModule,
    MdIconModule,
    MdInputModule,
    MdDialogModule,
    MdChipsModule,
    MdMenuModule,
    MdTabsModule,
    MdAutocompleteModule,
    MdCheckbox
  ]
})
export class MaterialUiModule { }
