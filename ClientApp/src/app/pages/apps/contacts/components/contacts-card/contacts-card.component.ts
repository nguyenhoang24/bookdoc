import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from '../../interfaces/contact.interface';

@Component({
  selector: 'vex-contacts-card',
  templateUrl: './contacts-card.component.html',
  styleUrls: ['./contacts-card.component.scss']
})
export class ContactsCardComponent implements OnInit {

  @Input() contact: Contact;
  @Output() openContact = new EventEmitter<Contact['id']>();
  @Output() toggleStar = new EventEmitter<Contact['id']>();

  constructor() { }

  ngOnInit() {
  }

  emitToggleStar(event: MouseEvent, contactId: Contact['id']) {
    event.stopPropagation();
    this.toggleStar.emit(contactId);
  }
}
