import { Middleware } from 'loopback-typescript-core/dist/middleware/base.middleware';
import { injectable, inject } from 'inversify';
import { ReactiveApp } from 'loopback-typescript-core';
import { ShippingInstructionDao } from '../models/shipping_instruction.model';

@injectable()
export class PrintPdfMiddleware extends Middleware {
  @inject(ReactiveApp)
  ctx: ReactiveApp
  @inject(ShippingInstructionDao)
  siDao: ShippingInstructionDao

  path = '/printPdf/:id';
  protocol = 'get';

  dateFormat(x){
    return x.getDate(x) + '/' + x.getMonth(x) + '/' + x.getFullYear(); 
  }

  async onRequest(req: any, res: any, next: any) {
    let accountId = req.params.id

    this.siDao.findOne({ where: { id: accountId }, include: [{ mitraKesanggupan:'tujuanPltu'}, 'jettyRel', 'transport'] }).then((si) => {
      var v = si;
      var x = v['mitraKesanggupan'];
      var y = JSON.stringify(x);
      var z = JSON.parse(y)['tujuanPltu'];
      // console.log(v);
      // console.log(x);
      console.log(z);

      var PDFDocument = require('pdfkit');
      var doc = new PDFDocument();
      var fs = require('fs');
      doc.pipe(fs.createWriteStream('out.pdf'));

      var rataKiri = 120;
      var fontSize = 11;

      doc.circle(rataKiri, 40, 25);
      doc.fontSize(22)
        .text('PT PLN BATUBARA', rataKiri + 30, 20)
        .moveDown()
        .fontSize(10)
        .text('Jalan Warung Buncit Raya no.10 Keluarahan Kalibata', rataKiri + 30, 45)
        .moveDown()
        .text('Kecamatan Pancoran, Jakarta Selatan 12740', rataKiri + 30, 60)
        ;

      doc.save()
        .moveTo(30, 85)
        .lineTo(590, 85)
        .lineTo(590, 87)
        .lineTo(30, 87)
        .fill("#000000");

      doc.save()
        .moveTo(30, 88)
        .lineTo(590, 88)
        .lineTo(590, 91)
        .lineTo(30, 91)
        .fill("#000000");

      doc.fontSize(fontSize)
        .text('Nomor', rataKiri, 100)
        .text('Lampiran', rataKiri)
        .text('Perihal', rataKiri)
        ;

      doc.fontSize(fontSize)
        .text(':', rataKiri + 60, 100)
        .text(':', rataKiri + 60)
        .text(':', rataKiri + 60)
        ;

      doc.fontSize(fontSize)
        .text(si['no'] + '/' + si['kode'] + '/' + si['tahun'], rataKiri + 70, 100)
        .text('-', rataKiri + 70)
        .text('Shipping Instruction \nLaycan ' + this.dateFormat(si['laycanStartDate']) + ' - ' + this.dateFormat(si['laycanEndDate']) + ' \n' + this.dateFormat(si['laycanStartDate']), rataKiri + 70)
        ;

      doc.fontSize(fontSize)
        .text(si['jettyRel']['city'] + ', ' + this.dateFormat(si['tgl']), rataKiri + 260, 100)
        .text(' ', rataKiri + 70)
        .text('Kepada : \n' + si['transport']['name'], rataKiri + 260)
        ;
      var isi = 'Sehubungan dengan  rencana pengapalan batu bara oleh PLN Batubara dan menunjuk konfirmasi dari ' + si['transport']['name']+' , mohon agar dapat dilakukan proses pengapalan batubara dengan informasi sebagai berikut:'
      doc.fontSize(fontSize)
        .text('Dengan Hormat', rataKiri + 60, 200)
        .text(isi, { align: 'justify' })
        .text('', rataKiri + 60)
        ;

      var jarak = 160;
      var space = 300;
      doc.fontSize(fontSize)
        .text('Shipper', rataKiri + 60, space)
        .text(':', rataKiri + jarak + 60, space)
        .text(si['transport']['name']+" QQ PT PLN Batubara", rataKiri + jarak + 70, space)
        .text('chareter', rataKiri + 60).moveDown(-1)
        .text(':', rataKiri + jarak + 60).moveDown(-1)
        .text('PT PLN Batubara', rataKiri + jarak + 70).moveDown(0)
        .text('Consignee', rataKiri + 60).moveDown(-1)
        .text(':', rataKiri + jarak + 60).moveDown(-1)
        .text(z['name'], rataKiri + jarak + 70).moveDown(0)
        .text('Notify Address', rataKiri + 60).moveDown(-1)
        .text(':', rataKiri + jarak + 60).moveDown(-1)
        .text(z['address'], rataKiri + jarak + 70).moveDown(0)
        .text('Komoditi', rataKiri + 60).moveDown(-1)
        .text(':', rataKiri + jarak + 60).moveDown(-1)
        .text('Steam Coal', rataKiri + jarak + 70).moveDown(0)
        .text('Jumlah Barang', rataKiri + 60).moveDown(-1)
        .text(':', rataKiri + jarak + 60).moveDown(-1)
        .text('7500 Ton atau sesuai Draught', rataKiri + jarak + 70).moveDown(0)
        .text('Nama Kapal/Tongkang', rataKiri + 60).moveDown(-1)
        .text(':', rataKiri + jarak + 60).moveDown(-1)
        .text(si['namaTransport'], rataKiri + jarak + 70).moveDown(0)
        .text('Pelabuhan Muat', rataKiri + 60).moveDown(-1)
        .text(':', rataKiri + jarak + 60).moveDown(-1)
        .text(si['jettyRel']['name'], rataKiri + jarak + 70).moveDown(0)
        .text('Laycan', rataKiri + 60).moveDown(-1)
        .text(':', rataKiri + jarak + 60).moveDown(-1)
        .text(this.dateFormat(si['laycanStartDate']) + ' - ' + this.dateFormat(si['laycanEndDate']), rataKiri + jarak + 70).moveDown(0)
        .text('Pelabuhan Bongkar', rataKiri + 60).moveDown(-1)
        .text(':', rataKiri + jarak + 60).moveDown(-1)
        .text(si['mitraKesanggupan']['tujuanPltu']['name'], rataKiri + jarak + 70).moveDown(0)
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


      // doc.pipe(fs.createWriteStream('out.pdf'));
      // doc.addPage();
      // doc.end();


      // doc.pipe(fs.createWriteStream(res));
      doc.end();


      function intervalFunc() {
        res.download('out.pdf')
      }

      setTimeout(intervalFunc, 500);
    },
      error => {
        console.log('terdapat Error: ' + error.message);
      });

  }


}


// let accountId = req.params.id

// var PDFDocument = require('pdfkit');
// var doc = new PDFDocument();
// var fs = require('fs');
// doc = new PDFDocument();
// doc.moveTo(300, 75)
// .lineTo(373, 301)
// .lineTo(181, 161)
// .lineTo(419, 161)
// .lineTo(227, 301)
// .fill('red', 'even-odd');

// var loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in...';

// doc.y = 320;
// doc.fillColor('black')
// doc.text(loremIpsum, {
//   paragraphGap: 10,
//   indent: 20,
//   align: 'justify',
//   columns: 2
// });

// doc.pipe(fs.createWriteStream('out.pdf'));
// res.download('out.pdf');
// doc.end();