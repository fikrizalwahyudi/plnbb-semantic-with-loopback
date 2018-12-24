import { Directive, ViewContainerRef, ComponentFactoryResolver, ElementRef } from '@angular/core';
import PDFObject = require('pdfobject')
import { environment } from '../../../environments/environment';

@Directive({
	selector: '[uiPdf]'
})
export class PdfDirective {
	
	constructor(
		private el:ElementRef,
		private viewContainerRef: ViewContainerRef,
		private componentFactoryResolver: ComponentFactoryResolver
	) { }

	ngOnInit() {
		//console.log(`${environment.apiUrl}/printPdf/5c17a1cbb351164d4d76daa8`)
		PDFObject.embed(`http://localhost:3000/pdf/si/5c17a1cbb351164d4d76daa8/preview`, this.el.nativeElement)
	}
}