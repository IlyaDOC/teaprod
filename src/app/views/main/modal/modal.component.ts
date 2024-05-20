import {Component, ElementRef, inject, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {PopupService} from "../../../shared/services/modal.service";
import {Subscription} from "rxjs";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'modal-component',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {
  @ViewChild('popup')
  popupElement!: TemplateRef<ElementRef>;
  private subscription: Subscription | null = null;
  private modalService: NgbModal = inject(NgbModal);
  private popupService: PopupService = inject(PopupService);

  ngOnInit(): void {
    this.subscription = this.popupService.observable.subscribe((): void => {
      this.modalService.open(this.popupElement);
    })
  };


  ngOnDestroy() {
    this.subscription?.unsubscribe();
    this.modalService.dismissAll(this.popupElement);
  };

}
