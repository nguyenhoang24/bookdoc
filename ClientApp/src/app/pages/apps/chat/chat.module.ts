import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatBadgeModule } from '@angular/material/badge';
import { MatRippleModule } from '@angular/material/core';
import { ChatConversationComponent } from './chat-conversation/chat-conversation.component';
import { ChatEmptyComponent } from './chat-empty/chat-empty.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatMenuModule } from '@angular/material/menu';
import { ScrollbarModule } from '../../../../@vex/components/scrollbar/scrollbar.module';


@NgModule({
  declarations: [ChatComponent, ChatConversationComponent, ChatEmptyComponent],
  imports: [
    CommonModule,
    ChatRoutingModule,
    MatSidenavModule,
    MatBadgeModule,

    MatRippleModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    ScrollingModule,
    MatMenuModule,
    ScrollbarModule
  ]
})
export class ChatModule {
}
