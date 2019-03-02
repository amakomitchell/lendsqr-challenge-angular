import { Component, TemplateRef } from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
 
  modalRef: BsModalRef;

  constructor(private modalService: BsModalService) {}
  
  openModal(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
  }
}
