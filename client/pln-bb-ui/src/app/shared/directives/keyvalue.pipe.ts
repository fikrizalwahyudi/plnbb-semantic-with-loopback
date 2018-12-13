import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'keyvalue', pure: false })
export class KeyValuePipe implements PipeTransform {
	transform(value: any, args: any[] = null): any {
		if (!value)
			return []

		//return Object.keys(value)//.map(key => value[key]);
		let keys = Object.keys(value)

		return keys.map(key => {
			return {
				key: key,
				value: value[key]
			}
		})
	}
}