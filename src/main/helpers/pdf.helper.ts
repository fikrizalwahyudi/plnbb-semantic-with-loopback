
export function dateFormat(x) {
	if(!(x instanceof Date))
		x = new Date(x)

	return x.getDate(x) + '/' + x.getMonth(x) + '/' + x.getFullYear();
}

export function parseNo(no) {
	let tmp = no + ''
	if(tmp.length == 1)
		return `00${tmp}`
	else if(tmp.length == 2)
		return `0${tmp}`
	else
		return tmp
}

export function processPdf(shippingInstruction, mitraKesanggupan, tujuanPltu, outStream) {
	var PDFDocument = require('pdfkit');
	var doc = new PDFDocument();
	var fs = require('fs');
	var telp = "Telp: (021) 29122118; (021) 29122182";
	var fax = "Fax: (021) 22792183";
	var web = "Website: www.plnbatubara.co.id";

	var rataKiri = 120;
	var fontSize = 11;
	var pt = 10;
	var tempMitra;

	//res.setHeader('Content-type', 'application/pdf');

	doc.pipe(outStream)

	doc.image('client/pln-bb-ui/src/assets/1450433146.png', rataKiri - 16, 20, { width: 45 });
	doc.image('client/pln-bb-ui/src/assets/pln.png', rataKiri + 370, 20, { width: 45 });
	doc.font("Helvetica-Bold")
		.fontSize(22)
		.text('PT PLN BATUBARA', rataKiri + 33, 20 + pt)
		.moveDown()
		.font('Helvetica')
		.fontSize(9)
		.text('Jalan Warung Buncit Raya no.10 Keluarahan Kalibata', rataKiri + 33, 45 + pt)
		.moveDown()
		.text('Kecamatan Pancoran, Jakarta Selatan 12740', rataKiri + 33, 55 + pt)
		;

	doc.fontSize(8).moveDown(0.9)
		.text(telp, rataKiri - 35).moveDown(-1)
		.text(fax, rataKiri + 150).moveDown(-1)
		.text(web, rataKiri + 290).moveDown()

	doc.save()
		.moveTo(30, 85 + pt)
		.lineTo(590, 85 + pt)
		.lineTo(590, 87 + pt)
		.lineTo(30, 87 + pt)
		.fill("#000000");

	doc.save()
		.moveTo(30, 88 + pt)
		.lineTo(590, 88 + pt)
		.lineTo(590, 91 + pt)
		.lineTo(30, 91 + pt)
		.fill("#000000");

	doc.fontSize(fontSize)
		.text('Nomor', rataKiri, 100 + pt)
		.text('Lampiran', rataKiri)
		.text('Perihal', rataKiri)
		;

	doc.fontSize(fontSize)
		.text(':', rataKiri + 60, 100 + pt)
		.text(':', rataKiri + 60)
		.text(':', rataKiri + 60)
		;

	doc.fontSize(fontSize)
		.text(parseNo(shippingInstruction['no']) + '/' + shippingInstruction['noRedaksi'] + '/' + shippingInstruction['noTahun'], rataKiri + 70, 100 + pt)
		.text('-', rataKiri + 70)
		.text('Shipping Instruction \nLaycan ' + dateFormat(shippingInstruction['laycanStartDate']) + ' - ' + dateFormat(shippingInstruction['laycanEndDate']) + ' \ndi ' + ' ' + shippingInstruction['jetty']['name'] + ', ' + shippingInstruction['jetty']['address'] + ', ' + shippingInstruction['jetty']['city'] + ', ' + shippingInstruction['jetty']['province'])
		;

	if (mitraKesanggupan['tipe'] == 'cif') {
		doc.fontSize(fontSize)
			.text('Jakarta , ' + dateFormat(shippingInstruction['tglSurat']), rataKiri + 260, 100 + pt)
			.text(' ', rataKiri + 70)
			.text('Kepada : \n- ' + shippingInstruction['transport']['name'], rataKiri + 260)
			;
		tempMitra = shippingInstruction['transport']['name'];
	} else {
		doc.fontSize(fontSize)
			.text('Jakarta , ' + dateFormat(shippingInstruction['tglSurat']), rataKiri + 260, 100 + pt)
			.text(' ', rataKiri + 70)
			.text('Kepada : \n- ' + shippingInstruction['transport']['name'] + '\n- ' + mitraKesanggupan['mitra']['name'], rataKiri + 260)
			;
		tempMitra = shippingInstruction['transport']['name'] + ' dan ' + mitraKesanggupan['mitra']['name'];
	}

	var isi = 'Sehubungan dengan  rencana pengapalan batubara oleh PLN Batubara dan menunjuk konfirmasi dari ' + shippingInstruction['transport']['name'] + ' , mohon agar dapat dilakukan proses pengapalan batubara dengan informasi sebagai berikut:'
	doc.fontSize(fontSize)
		.text('Dengan Hormat', rataKiri + 60, 200 + pt)
		.text(isi, { align: 'justify' })
		.text('', rataKiri + 60)
		;

	var jarak = 160;
	var space = 260 + pt;
	doc.fontSize(fontSize)
		.text('Shipper', rataKiri + 60, space)
		.text(':', rataKiri + jarak + 60, space)
		.text(mitraKesanggupan['mitra']['name'] + " QQ PT PLN Batubara", rataKiri + jarak + 70, space)
		.text('chareter', rataKiri + 60).moveDown(-1)
		.text(':', rataKiri + jarak + 60).moveDown(-1)
		.text('PT PLN Batubara', rataKiri + jarak + 70).moveDown(0)
		.text('Consignee', rataKiri + 60).moveDown(-1)
		.text(':', rataKiri + jarak + 60).moveDown(-1)
		.text(tujuanPltu['name'], rataKiri + jarak + 70).moveDown(0)
		.text('Notify Address', rataKiri + 60).moveDown(-1)
		.text(':', rataKiri + jarak + 60).moveDown(-1)
		.text(tujuanPltu['address'], rataKiri + jarak + 70).moveDown(0)
		.text('Komoditi', rataKiri + 60).moveDown(-1)
		.text(':', rataKiri + jarak + 60).moveDown(-1)
		.text('Steam Coal', rataKiri + jarak + 70).moveDown(0)
		.text('Jumlah Barang', rataKiri + 60).moveDown(-1)
		.text(':', rataKiri + jarak + 60).moveDown(-1)
		.text(mitraKesanggupan['jumlah'] + ' Ton atau sesuai Draught', rataKiri + jarak + 70).moveDown(0)
		.text('Nama Kapal/Tongkang', rataKiri + 60).moveDown(-1)
		.text(':', rataKiri + jarak + 60).moveDown(-1)
		.text(shippingInstruction['namaTransport'], rataKiri + jarak + 70).moveDown(0)
		.text('Pelabuhan Muat', rataKiri + 60).moveDown(-1)
		.text(':', rataKiri + jarak + 60).moveDown(-1)
		.text(shippingInstruction['jetty']['name'], rataKiri + jarak + 70).moveDown(0)
		.text('Laycan', rataKiri + 60).moveDown(-1)
		.text(':', rataKiri + jarak + 60).moveDown(-1)
		.text(dateFormat(shippingInstruction['laycanStartDate']) + ' - ' + dateFormat(shippingInstruction['laycanEndDate']), rataKiri + jarak + 70).moveDown(0)
		.text('Pelabuhan Bongkar', rataKiri + 60).moveDown(-1)
		.text(':', rataKiri + jarak + 60).moveDown(-1)
		.text(tujuanPltu['name'], rataKiri + jarak + 70).moveDown(0)
		.text('Permintaan Bill of Lading', rataKiri + 60).moveDown(-1)
		.text(':', rataKiri + jarak + 60).moveDown(-1)
		.text('Asli 3 rangkap, copy non negotiable 3 rangkap', rataKiri + jarak + 70).moveDown(0)
		.text('Permintaan Cargo Manifest', rataKiri + 60).moveDown(-1)
		.text(':', rataKiri + jarak + 60).moveDown(-1)
		.text('Asli 3 rangkap, copy non negotiable 3 rangkap', rataKiri + jarak + 70).moveDown(0)
		.text('Permintaan COA,COW,DS', rataKiri + 60).moveDown(-1)
		.text(':', rataKiri + jarak + 60).moveDown(-1)
		.text('Asli 1 rangkap, copy 3 rangkap', rataKiri + jarak + 70).moveDown(0)
		.text('Permintaan SKAB', rataKiri + 60).moveDown(-1)
		.text(':', rataKiri + jarak + 60).moveDown(-1)
		.text('Asli 1 rangkap, copy 3 rangkap', rataKiri + jarak + 70).moveDown(1)
		.text('Demikian disampaikan atas perhatianya diucapkan terimakasih', rataKiri + 60).moveDown(2)
		.text('', rataKiri + jarak + 80)
		.text('DIREKTUR OPERASI', { align: 'center' }).moveDown(4)
		.text('DJOKO MARTONO', { align: 'center' })

	doc.end();
}