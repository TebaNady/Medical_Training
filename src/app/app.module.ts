import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
@NgModule({
  declarations: [
    RegisterComponent,
  ],
  imports: [
    ReactiveFormsModule,
  ],
  providers: [],
})
export class AppModule { }
