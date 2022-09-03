import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  declarations: [],
  exports: [MatFormFieldModule, MatButtonModule, MatCardModule, MatInputModule, MatToolbarModule],
})
export class MaterialModule {}
