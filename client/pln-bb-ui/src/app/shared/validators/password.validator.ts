import { AbstractControl } from "@angular/forms";

export function passwordMatch(ac: AbstractControl) {
	if(!ac.get('password'))
		return null

	const password = ac.get('password').value;
	const passwordConf = ac.get('password2').value;
	//console.log('validating');
	//console.log(password)
	//console.log(passwordConf)
	if(!password)
		return null

	if(password !== passwordConf) {
		ac.get('password2').setErrors({unmatch: true});
	} else {
		return null;
	}
}