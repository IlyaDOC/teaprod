"use strict";(self.webpackChunkproject=self.webpackChunkproject||[]).push([[189],{7189:(q,s,c)=>{c.r(s),c.d(s,{ProductsModule:()=>A});var n=c(6895),i=c(646),p=c(3900),l=c(8505),t=c(8256),d=c(1100),m=c(3763);function g(e,r){1&e&&(t.TgZ(0,"h2",6),t._uU(1,"\u041d\u0430\u0448\u0438 \u0447\u0430\u0439\u043d\u044b\u0435 \u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u0438"),t.qZA())}function h(e,r){1&e&&(t.TgZ(0,"div",7),t._uU(1,"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"),t.qZA())}function f(e,r){if(1&e&&(t.TgZ(0,"div",6),t._uU(1),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.hij('\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u043f\u043e\u0438\u0441\u043a\u0430 \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443: "',o.searchQuery,'"')}}const v=function(e){return["/products",e]};function Z(e,r){if(1&e&&(t.TgZ(0,"div",10)(1,"div",11)(2,"div",12),t._UZ(3,"img",13),t.qZA(),t.TgZ(4,"div",14)(5,"h5",15),t._uU(6),t.qZA(),t.TgZ(7,"a",16),t._uU(8,"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"),t.qZA()()()()),2&e){const o=r.$implicit;t.xp6(3),t.s9C("src",o.image,t.LSH),t.xp6(3),t.Oqu(o.title),t.xp6(1),t.Q6J("routerLink",t.VKq(3,v,o.id))}}function y(e,r){if(1&e&&(t.TgZ(0,"div",8),t.YNc(1,Z,9,5,"div",9),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.Q6J("ngForOf",o.productItems)}}function C(e,r){1&e&&(t.TgZ(0,"div",17),t._UZ(1,"div",18),t.qZA())}const P=function(e){return{product:e}},x=[{path:"",component:(()=>{class e{constructor(o,u){this.productRequestService=o,this.searchService=u,this.isLoading=!1,this.productItems=[],this.searchQuery=""}ngOnInit(){this.isLoading=!0,this.productItems$=this.searchService.search$.pipe((0,p.w)(o=>this.productRequestService.getProducts(o)),(0,l.b)(()=>{this.isLoading=!1})).subscribe(o=>{this.productItems=o}),this.searchQuery$=this.searchService.search$.subscribe(o=>{this.searchQuery=o})}ngOnDestroy(){this.productItems$.unsubscribe(),this.searchQuery$.unsubscribe()}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(d.J),t.Y36(m.o))},e.\u0275cmp=t.Xpm({type:e,selectors:[["products-component"]],decls:7,vars:5,consts:[["class","main-title-collection text-center mb-5",4,"ngIf"],["class","main-title-collection text-center",4,"ngIf"],[1,"container"],[1,"main-products","mb-5"],["class","row row-cols-lg-3 row-cols-md-2 row-cols-1 g-3",4,"ngIf"],["class","loader-wrapper",4,"ngIf"],[1,"main-title-collection","text-center","mb-5"],[1,"main-title-collection","text-center"],[1,"row","row-cols-lg-3","row-cols-md-2","row-cols-1","g-3"],["class","col",4,"ngFor","ngForOf"],[1,"col"],[1,"card"],[1,"product_image"],["alt","...",1,"card-img-top",3,"src"],[1,"card-body"],[1,"card-title"],["href","#",1,"btn","btn-outline-primary",3,"routerLink"],[1,"loader-wrapper"],[1,"loader"]],template:function(o,u){1&o&&(t.YNc(0,g,2,0,"h2",0),t.YNc(1,h,2,0,"div",1),t.YNc(2,f,2,1,"div",0),t.TgZ(3,"div",2)(4,"div",3),t.YNc(5,y,2,1,"div",4),t.qZA()(),t.YNc(6,C,2,0,"div",5)),2&o&&(t.Q6J("ngIf",u.productItems.length>0&&0===u.searchQuery.length),t.xp6(1),t.Q6J("ngIf",0===u.productItems.length),t.xp6(1),t.Q6J("ngIf",u.productItems.length>0&&u.searchQuery.length>0),t.xp6(3),t.Q6J("ngIf",u.productItems.length>0),t.xp6(1),t.Q6J("ngIf",u.isLoading))},dependencies:[n.sg,n.O5,i.yS],styles:[".loader-wrapper[_ngcontent-%COMP%]{width:100%;height:100%;position:fixed;top:0;left:0;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.5)}.loader[_ngcontent-%COMP%]{border:10px solid white;border-top:10px solid #0d6efd;border-radius:50%;width:70px;height:70px;animation:spin 1s linear infinite}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}"]}),e})()},{path:":id",component:(()=>{class e{constructor(o,u,b){this.activatedRoute=o,this.productsRequestService=u,this.router=b,this.productItem={description:"",id:0,image:"",price:0,title:""}}ngOnInit(){this.activatedRoute.params.subscribe(o=>{o.id&&this.productsRequestService.getProduct(+o.id).subscribe({next:u=>{this.productItem=u},error:u=>{console.log(u),this.router.navigate(["/"])}})})}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(i.gz),t.Y36(d.J),t.Y36(i.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-product-card"]],decls:16,vars:7,consts:[[1,"container"],[1,"main-products"],[1,""],[1,"col"],[1,"card"],[1,"product_image","text-center"],["alt","...",1,"card-img-top","w-50",3,"src"],[1,"card-body"],[1,"card-title"],[1,"my-3"],["href","#","routerLink","/order",1,"btn","btn-outline-primary",3,"queryParams"]],template:function(o,u){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),t._UZ(6,"img",6),t.qZA(),t.TgZ(7,"div",7)(8,"h4",8),t._uU(9),t.qZA(),t.TgZ(10,"div"),t._uU(11),t.qZA(),t.TgZ(12,"h5",9),t._uU(13),t.qZA(),t.TgZ(14,"a",10),t._uU(15,"\u0412 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"),t.qZA()()()()()()()),2&o&&(t.xp6(6),t.s9C("src",u.productItem.image,t.LSH),t.xp6(3),t.Oqu(u.productItem.title),t.xp6(2),t.Oqu(u.productItem.description),t.xp6(2),t.hij("\u0426\u0435\u043d\u0430: ",u.productItem.price," \u0440\u0443\u0431/\u043a\u0433"),t.xp6(1),t.Q6J("queryParams",t.VKq(5,P,u.productItem.title)))},dependencies:[i.yS]}),e})()}];let a=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[i.Bz.forChild(x),i.Bz]}),e})();var T=c(4466);let A=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[n.ez,a,T.m,a]}),e})()}}]);