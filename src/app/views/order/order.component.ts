import {Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Subscription, tap} from "rxjs";
import {ProductsRequestService} from "../../shared/services/products-request.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'order-component',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnDestroy {
  @ViewChild('form', {static: true}) formElement!: ElementRef;
  @ViewChild('formContainer', {static: true}) formContainerElement!: ElementRef;
  @ViewChild('actionButton', {static: true}) actionButtonElement!: ElementRef;

  constructor(private fb: FormBuilder,
              private productRequestService: ProductsRequestService,
              private renderer: Renderer2,
              private activatedRoute: ActivatedRoute
  ) {
  }

  public orderSuccess: boolean = true;
  private subscriptionOrder: Subscription | null = null;
  private subscription: Subscription | null = null;
  public showMessage: boolean = false;

  checkoutForm: FormGroup = this.fb.group({
    firstName: ['Илья', [Validators.required, Validators.pattern('^[а-яА-Яa-zA-Z]+$')]],
    lastName: ['Столяр', [Validators.required, Validators.pattern('^[а-яА-Яa-zA-Z]+$')]],
    phone: ['+79999999999', [Validators.required, Validators.pattern('^(\\+?\\d{11})$')]],
    country: ['Россия', Validators.required],
    zip: ['000000', Validators.required],
    product: ['', Validators.required],
    address: ['аваыв', [Validators.required, Validators.pattern('^[a-zA-Zа-яА-Я0-9\s\/-]+$')]],
    comment: ['']

  });

  get firstName() {
    return this.checkoutForm.get('firstName');
  };

  get lastName() {
    return this.checkoutForm.get('lastName');
  };

  get phone() {
    return this.checkoutForm.get('phone');
  };

  get country() {
    return this.checkoutForm.get('country');
  };

  get zip() {
    return this.checkoutForm.get('zip');
  };

  get product() {
    return this.checkoutForm.get('product');
  }

  get address() {
    return this.checkoutForm.get('address');
  };

  get comment() {
    return this.checkoutForm.get('comment');
  }

  removeForm() {
    this.renderer.removeChild(this.formContainerElement.nativeElement, this.formElement.nativeElement);
  }


  createOrder() {
    if (this.firstName && this.lastName && this.phone && this.country && this.zip && this.product && this.address) {

      this.subscriptionOrder = this.productRequestService.createOrder({
        name: this.firstName.value,
        last_name: this.lastName.value,
        phone: this.phone.value,
        country: this.country.value,
        zip: this.zip.value,
        product: this.product.value,
        address: this.address.value,
        comment: this.comment?.value,
      })
        .pipe(
          tap(()=> {
            this.actionButtonElement.nativeElement.setAttribute('disable', 'true');
          })
        )
        .subscribe((response: { success: boolean, message?: string }): void => {
          if (response.success) {
            this.actionButtonElement.nativeElement.setAttribute('disable', 'false');
            this.removeForm();
            this.orderSuccess = true;
            this.showMessage = true;
          } else {
            this.orderSuccess = false;
          }
        })
    }
  };


  ngOnInit(): void {
    this.checkoutForm.get('product')?.disable();
    this.subscription = this.activatedRoute.queryParams.subscribe((params: Params): void => {
      if (params['product']) {
        this.product?.patchValue(params['product']);
      }
    });
  }

  ngOnDestroy() {
    this.subscriptionOrder?.unsubscribe();
    this.subscription?.unsubscribe();
  }


}
