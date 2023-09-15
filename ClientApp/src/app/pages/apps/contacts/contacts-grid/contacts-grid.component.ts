import { Component, OnInit } from '@angular/core';
import { Link } from '../../../../../@vex/interfaces/link.interface';
import { scaleIn400ms } from '../../../../../@vex/animations/scale-in.animation';
import { fadeInRight400ms } from '../../../../../@vex/animations/fade-in-right.animation';
import { ContactsEditComponent } from '../components/contacts-edit/contacts-edit.component';
import { MatDialog } from '@angular/material/dialog';
import { Contact } from '../interfaces/contact.interface';
import { contactsData } from '../../../../../static-data/contacts';
import { trackById } from '../../../../../@vex/utils/track-by';
import { stagger40ms } from '../../../../../@vex/animations/stagger.animation';
import { fadeInUp400ms } from '../../../../../@vex/animations/fade-in-up.animation';
import { scaleFadeIn400ms } from '../../../../../@vex/animations/scale-fade-in.animation';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'vex-contacts-grid',
  templateUrl: './contacts-grid.component.html',
  styleUrls: ['./contacts-grid.component.scss'],
  animations: [
    scaleIn400ms,
    fadeInRight400ms,
    stagger40ms,
    fadeInUp400ms,
    scaleFadeIn400ms
  ]
})
export class ContactsGridComponent implements OnInit {

  contacts = contactsData;
  filteredContacts$ = this.route.paramMap.pipe(
    map(paramMap => paramMap.get('activeCategory')),
    map(activeCategory => {
      switch (activeCategory) {
        case 'all': {
          return contactsData;
        }

        case 'starred': {
          return contactsData.filter(c => c.starred);
        }

        default: {
          return [];
        }
      }
    })
  );

  links: Link[] = [
    {
      label: 'All Contacts',
      route: '../all'
    },
    {
      label: 'Frequently Contacted',
      route: '../frequent'
    },
    {
      label: 'Starred',
      route: '../starred'
    }
  ];

  trackById = trackById;

  constructor(private dialog: MatDialog,
              private route: ActivatedRoute) { }

  ngOnInit() {}

  openContact(id?: Contact['id']) {
    this.dialog.open(ContactsEditComponent, {
      data: id || null,
      width: '600px'
    });
  }

  toggleStar(id: Contact['id']) {
    const contact = contactsData.find(c => c.id === id);

    if (contact) {
      contact.starred = !contact.starred;
    }
  }
}
