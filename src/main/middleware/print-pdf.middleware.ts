import { Middleware } from 'loopback-typescript-core/dist/middleware/base.middleware';
import { injectable, inject } from 'inversify';
import { ReactiveApp } from 'loopback-typescript-core';

@injectable()
export class PrintPdfMiddleware extends Middleware {
  @inject(ReactiveApp)
  ctx: ReactiveApp

  path = '/printPdf/:id';
  protocol = 'get';

  async onRequest(req: any, res: any, next: any) {
    let accountId = req.params.id

    var PDFDocument = require('pdfkit');
    var doc = new PDFDocument();
    var fs = require('fs');
    doc = new PDFDocument();

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
 
    res.download('out.pdf');
    doc.end();
    
  }
}