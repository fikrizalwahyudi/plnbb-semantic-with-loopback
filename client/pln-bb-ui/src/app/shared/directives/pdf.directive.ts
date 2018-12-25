import { Directive, ViewContainerRef, ComponentFactoryResolver, ElementRef, Input } from '@angular/core';
import PDFObject = require('pdfobject')
import { environment } from '../../../environments/environment';

@Directive({
	selector: '[uiPdf]'
})
export class PdfDirective {
	
	@Input() siId
	@Input() url

	constructor(
		private el:ElementRef,
		private viewContainerRef: ViewContainerRef,
		private componentFactoryResolver: ComponentFactoryResolver
	) { }

	ngOnInit() {
		//console.log(`${environment.apiUrl}/printPdf/5c17a1cbb351164d4d76daa8`)
		//PDFObject.embed(`http://localhost:3000/pdf/si/5c17a1cbb351164d4d76daa8/preview`, this.el.nativeElement)		

		this.reload()
	}

	reload(siId?, url?) {
		if(siId)
			this.siId = siId
		
		if(url)
			this.url = url

		if(this.siId)
			PDFObject.embed(`${environment.apiUrl}/pdf/si/${this.siId}/preview`, this.el.nativeElement)
		else if(this.url)
			PDFObject.embed(this.url, this.el.nativeElement)
		else
			PDFObject.embed(`${environment.apiUrl}/api/documents/default/download/blank.pdf`, this.el.nativeElement)	
	}
}