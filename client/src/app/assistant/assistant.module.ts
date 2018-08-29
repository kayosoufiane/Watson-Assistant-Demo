import { NgModule } from '@angular/core';
import { SharedModule, AntModule } from '@app/shared';

import { AssistantComponent } from './assistant.component';
import { MessageListComponent } from './message-list/message-list.component';
import { MessageItemComponent } from './message-item/message-item.component';
import { MessageFormComponent } from './message-form/message-form.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    SharedModule,
    AntModule,
  ],
  declarations: [AssistantComponent, MessageListComponent, MessageItemComponent, MessageFormComponent, HeaderComponent],
  exports: [AssistantComponent]
})
export class AssistantModule { }
