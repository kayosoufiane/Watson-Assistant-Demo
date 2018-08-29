import { NgModule } from '@angular/core';

import { AppComponent } from '@app/app.component';
import { CoreModule } from '@app/core';
import { LayoutModule } from '@app/layout';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CoreModule,
    LayoutModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
