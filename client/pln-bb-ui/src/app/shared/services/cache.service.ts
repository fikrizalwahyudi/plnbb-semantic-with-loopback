import { Injectable } from '@angular/core';
import Barn = require('barn')

@Injectable()
export class CacheService {

	mitra = [{
		id: 1,
		name: 'Mitra #01',
		alias: 'MT01',
		alamat: 'Jakarta Selatan',
		siup: '123456789A'
	}, {
		id: 2,
		name: 'Mitra #02',
		alias: 'MT02',
		alamat: 'Jakarta Utara',
		siup: '123456789B'
	}, {
		id: 3,
		name: 'Mitra #03',
		alias: 'MT03',
		alamat: 'Jakarta Barat',
		siup: '123456789C'
	}, {
		id: 4,
		name: 'Mitra #04',
		alias: 'MT04',
		alamat: 'Jakarta Timur',
		siup: '123456789D'
	}]

	users = [{
		id: 1,
		name: 'User Mitra 1',
		username: 'mitra1plnbb',
		password: 'password',
		email: 'mitra1plnbb@gmail.com',
		role: ['mitra'],
		entity: this.mitra[0]
	}, {
		id: 2,
		name: 'User Mitra 2',
		username: 'mitra2plnbb',
		password: 'password',
		email: 'mitra2plnbb@gmail.com',
		role: ['transport'],
		entity: this.mitra[1]
	}, {
		id: 3,
		name: 'User Mitra 3',
		username: 'mitra3plnbb',
		password: 'password',
		email: 'mitra3plnbb@gmail.com',
		role: ['mitra', 'transport'],
		entity: this.mitra[2]
	}, {
		id: 4,
		name: 'User PLN BB',
		username: 'plnbb',
		password: 'password',
		email: 'plnbb@plnbb.pln.co.id',
		role: ['plnbb']
	}, {
		id: 5,
		name: 'Admin',
		username: 'admin',
		password: 'password',
		email: 'admin@plnbb.pln.co.id',
		role: ['admin']
	}]

	pltu = [{
		id: 1,
		name: 'ADIPALA'
	}, {
		id: 2,
		name: 'INDRAMAYU'
	}, {
		id: 3,
		name: 'LABUAN'
	}, {
		id: 4,
		name: 'LONTAR'
	}]

	tambang = [{
		id: 1,
		name: 'KARYAMAJU JAYA SENTOSA, PT',
		sertifikat: '1/Bb/03/2012',
		jenis: 'IUP',
		lokasi: 'KUTAI BARAT',
		tanggalBerlaku: '10 Agustus 2012',
		tanggalHabis: '10 Agustus 2019'
	}, {
		id: 2,
		name: 'SUMBER DAYA ENERGI, PT',
		sertifikat: '2/Bb/03/2012',
		jenis: 'IUP',
		lokasi: 'OGAN KOMERING ILIR',
		tanggalBerlaku: '10 Agustus 2012',
		tanggalHabis: '10 Agustus 2019'
	}, {
		id: 3,
		name: 'DELAPAN INTI POWER, PT',
		sertifikat: '3/Bb/03/2012',
		jenis: 'IUP',
		lokasi: 'OGAN KOMERING ILIR',
		tanggalBerlaku: '10 Agustus 2012',
		tanggalHabis: '10 Agustus 2019'
	}, {
		id: 4,
		name: 'INDONESIA MULTI ENERGI, PT',
		sertifikat: '4/Bb/03/2012',
		jenis: 'IUP',
		lokasi: 'BATANGHARI',
		tanggalBerlaku: '10 Agustus 2012',
		tanggalHabis: '10 Agustus 2019'
	}]

	noSi = 1

	private barn = new Barn(localStorage)

	constructor() { 
		console.log('initiate cache...')
	}

	get db() { return this.barn }

	get currentUser() { return this.barn.get('user') }

}