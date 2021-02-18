import { NgModule } from '@angular/core';

import { MessagePageComponent } from './message-page.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [MessagePageComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule, MatCardModule, MatMenuModule],
  exports: [MessagePageComponent]
})
export class MessagePageModule {}
