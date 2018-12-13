import { Middleware } from 'loopback-typescript-core/dist/middleware/base.middleware';
import { injectable, inject } from 'inversify';
import { ReactiveApp } from 'loopback-typescript-core';

var PDFDocument = require('pdfkit');
var fs = require('fs');

var doc = new PDFDocument();

@injectable()
export class PrintPdfMiddleware extends Middleware {
  @inject(ReactiveApp)
  ctx: ReactiveApp

  path = '/printPdf/:id';
  protocol = 'get';

  async onRequest(req: any, res: any, next: any) {
    let accountId = req.params.id

    res.send(accountId);

    var rataKiri = 120;

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

    doc.fontSize(12)
      .text('Nomor', rataKiri, 100)
      .text('Lampiran', rataKiri)
      .text('Perihal', rataKiri)
      ;

    doc.fontSize(12)
      .text(':', rataKiri + 60, 100)
      .text(':', rataKiri + 60)
      .text(':', rataKiri + 60)
      ;

    doc.fontSize(12)
      .text('xxxxxxxx', rataKiri + 70, 100)
      .text('-', rataKiri + 70)
      .text('Shipping Instruction \nLaycan xxxxxxxxxxxx \npadang bulang, medan', rataKiri + 70)
      ;

    doc.fontSize(12)
      .text('Berastagi, 15 Oktober 2018', rataKiri + 220, 100)
      .text(' ', rataKiri + 70)
      .text('Kepada : \nPT Sekar sari', rataKiri + 220)
      ;
    var isi = 'Sehubungan dengan  rencana pengapalan batu bara oleh PLN Batubara dan menunjuk konfirmasi dari PT xxxxx xxx dan PT xxxx xxx, mohon agar dapat dilakukan proses pengapalan batubara dengan informasi sebagai berikut:'
    doc.fontSize(12)
      .text('Dengan Hormat', rataKiri + 60, 200)
      .text(isi, { align: 'justify' })
      .text('', rataKiri + 60)
      ;

    var jarak = 160;
    var space = 300;
    doc.fontSize(12)
      .text('Shipper', rataKiri + 60, space)
      .text(':', rataKiri + jarak + 60, space)
      .text('1', rataKiri + jarak + 70, space)
      .text('chareter', rataKiri + 60).moveDown(-1)
      .text(':', rataKiri + jarak + 60).moveDown(-1)
      .text('xxxxxxxxx', rataKiri + jarak + 70).moveDown(0)
      .text('Consignee', rataKiri + 60).moveDown(-1)
      .text(':', rataKiri + jarak + 60).moveDown(-1)
      .text('xxxxxxxx', rataKiri + jarak + 70).moveDown(0)
      .text('Notify Address', rataKiri + 60).moveDown(-1)
      .text(':', rataKiri + jarak + 60).moveDown(-1)
      .text('xxxxxxxx', rataKiri + jarak + 70).moveDown(0)
      .text('Komoditi', rataKiri + 60).moveDown(-1)
      .text(':', rataKiri + jarak + 60).moveDown(-1)
      .text('xxxxxxxx', rataKiri + jarak + 70).moveDown(0)
      .text('Jumlah Barang', rataKiri + 60).moveDown(-1)
      .text(':', rataKiri + jarak + 60).moveDown(-1)
      .text('xxxxxxxx', rataKiri + jarak + 70).moveDown(0)
      .text('Nama Kapal/Tongkang', rataKiri + 60).moveDown(-1)
      .text(':', rataKiri + jarak + 60).moveDown(-1)
      .text('xxxxxxxx', rataKiri + jarak + 70).moveDown(0)
      .text('Pelabuhan Muat', rataKiri + 60).moveDown(-1)
      .text(':', rataKiri + jarak + 60).moveDown(-1)
      .text('xxxxxxxx', rataKiri + jarak + 70).moveDown(0)
      .text('Laycan', rataKiri + 60).moveDown(-1)
      .text(':', rataKiri + jarak + 60).moveDown(-1)
      .text('xxxxxxxx', rataKiri + jarak + 70).moveDown(0)
      .text('Pelabuhan Bongkar', rataKiri + 60).moveDown(-1)
      .text(':', rataKiri + jarak + 60).moveDown(-1)
      .text('xxxxxxxx', rataKiri + jarak + 70).moveDown(0)
      .text('Permintaan Bill of Lading', rataKiri + 60).moveDown(-1)
      .text(':', rataKiri + jarak + 60).moveDown(-1)
      .text('xxxxxxxx', rataKiri + jarak + 70).moveDown(0)
      .text('Permintaan Cargo Manifest', rataKiri + 60).moveDown(-1)
      .text(':', rataKiri + jarak + 60).moveDown(-1)
      .text('xxxxxxxx', rataKiri + jarak + 70).moveDown(0)
      .text('Permintaan COA,COW,DS', rataKiri + 60).moveDown(-1)
      .text(':', rataKiri + jarak + 60).moveDown(-1)
      .text('xxxxxxxx', rataKiri + jarak + 70).moveDown(0)
      .text('Permintaan SKAB', rataKiri + 60).moveDown(-1)
      .text(':', rataKiri + jarak + 60).moveDown(-1)
      .text('xxxxxxxx', rataKiri + jarak + 70).moveDown(1)
      .text('Demikian disampaikan atas perhatianya diucapkan terimakasih', rataKiri + 60).moveDown(2)
      .text('', rataKiri + jarak + 80)
      .text('Permintaan SKAB', { align: 'center' }).moveDown(4)
      .text('xxxxxxxxxx', { align: 'center' })

    // doc.fontSize(25)
    //   .text('Here is some vector graphics...', 100, 80);

    // // some vector graphics
    // doc.save()
    //   .moveTo(100, 150)
    //   .lineTo(100, 250)
    //   .lineTo(200, 250)
    //   .fill("#FF3300");

    // doc.circle(280, 200, 50)
    //   .fill("#6600FF");

    // // an SVG path
    // doc.scale(0.6)
    //   .translate(470, 130)
    //   .path('M 250,75 L 323,301 131,161 369,161 177,301 z')
    //   .fill('red', 'even-odd')
    //   .restore();

    // // and some justified text wrapped into columns
    // doc.text('And here is some wrapped text...', 100, 300)
    //   .font('Times-Roman', 13)
    //   .moveDown()
    //   .text('lorem', {
    //     width: 412,
    //     align: 'justify',
    //     indent: 30,
    //     columns: 2,
    //     height: 300,
    //     ellipsis: true
    //   });


    // doc.pipe(fs.createWriteStream('out.pdf'));
    // end and display the document in the iframe to the right
    doc.pipe(fs.createWriteStream('out.pdf'));
    doc.addPage();
    doc.end();
    
  }


}