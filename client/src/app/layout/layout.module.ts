import { NgModule } from '@angular/core';

import { SharedModule, AntModule } from '@app/shared';
import { HeaderComponent } from './header/header.component';
import { SiderComponent } from './sider/sider.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout.component';
import { ContentComponent } from './content/content.component';

import { AssistantModule } from '@app/assistant';

@NgModule({
  imports: [
    SharedModule,
    AntModule,
    AssistantModule,
  ],
  declarations: [HeaderComponent, SiderComponent, FooterComponent, LayoutComponent, ContentComponent],
  exports: [LayoutComponent]
})
export class LayoutModule { }
