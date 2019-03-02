import { Component, OnInit, TemplateRef } from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-product-list-items',
  templateUrl: './product-list-items.component.html',
  styleUrls: ['./product-list-items.component.css']
})
export class ProductListItemsComponent implements OnInit {

	rows: any[] = [
		{
			id: 1,
			name: 'Medical',
			amount: '₦92,000.00',
			tenor: '2 years',
			// status: 1,
		}, {
			id: 11,
			name: 'Student',
			amount: '₦25,000.00',
			tenor: '1 month',
			// status: 0,
		}, {
			id: 21,
			name: 'Emergency',
			amount: '₦250,000.00',
			tenor: '7 days',
			// status: 1,
		}, {
			id: 91,
			name: 'Mortgage',
			amount: '₦50,000.00',
			tenor: '12 months',
			// status: 0,
		}
	];

	modalRef: BsModalRef;

  constructor(private modalService: BsModalService) {}
  
  openModal(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
  }

	ngOnInit() {}

}