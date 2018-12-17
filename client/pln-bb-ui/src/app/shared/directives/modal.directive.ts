import { Directive, ViewContainerRef, ComponentFactoryResolver, ElementRef } from '@angular/core';

@Directive({
  selector: '[uiModal]',
})
export class ModalDirective {
	
	currentComponent
	
	constructor(
		private el:ElementRef,
		private viewContainerRef: ViewContainerRef,
		private componentFactoryResolver: ComponentFactoryResolver
	) { }

	ngOnInit() {
		
	}
	
	open(component) {
		//this.currentComponent = component

		let componentFactory = this.componentFactoryResolver.resolveComponentFactory(component)

		this.viewContainerRef.clear()

		let componentRef = this.viewContainerRef.createComponent(componentFactory)
	}

	close() {

	}
}