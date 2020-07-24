import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatInputModule, MatIconModule, MatButtonModule],
  exports: [MatInputModule, MatIconModule, MatButtonModule],
})
export class MaterialModule {}
