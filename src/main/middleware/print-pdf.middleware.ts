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

  dateFormat(x) {
    return x.getDate(x) + '/' + x.getMonth(x) + '/' + x.getFullYear();
  }

  async onRequest(req: any, res: any, next: any) {
    let accountId = req.params.id

    this.siDao.findOne({ where: { id: accountId }, include: [{ mitraKesanggupan: ['tujuanPltu', { referensiKontrak: 'mitra' }] }, 'jettyRel', 'transport'] }).then((si) => {
      var v = si;
      var y = v['mitraKesanggupan'];
      var mitraKesanggupan = JSON.parse(JSON.stringify(y)); //sengaja, karena keluarnya fungsi
      var z = mitraKesanggupan['tujuanPltu'];
      console.log(mitraKesanggupan['referensiKontrak']);

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

      doc.pipe(fs.createWriteStream('out.pdf'));

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
        .text(si['no'] + '/' + si['kode'] + '/' + si['tahun'], rataKiri + 70, 100 + pt)
        .text('-', rataKiri + 70)
        .text('Shipping Instruction \nLaycan ' + this.dateFormat(si['laycanStartDate']) + ' - ' + this.dateFormat(si['laycanEndDate']) + ' \ndi ' + ' ' + si['jettyRel']['name'] + ', ' + si['jettyRel']['address'] + ', ' + si['jettyRel']['city'] + ', ' + si['jettyRel']['province'])
        ;

      if (mitraKesanggupan['referensiKontrak']['jenis'] == 'CIF') {
        doc.fontSize(fontSize)
          .text('Jakarta , ' + this.dateFormat(si['tgl']), rataKiri + 260, 100 + pt)
          .text(' ', rataKiri + 70)
          .text('Kepada : \n- ' + si['transport']['name'], rataKiri + 260)
          ;
        tempMitra = si['transport']['name'];
      } else {
        doc.fontSize(fontSize)
          .text('Jakarta , ' + this.dateFormat(si['tgl']), rataKiri + 260, 100 + pt)
          .text(' ', rataKiri + 70)
          .text('Kepada : \n- ' + si['transport']['name'] + '\n- ' + mitraKesanggupan['referensiKontrak']['mitra']['name'], rataKiri + 260)
          ;
        tempMitra = si['transport']['name'] + ' dan ' + mitraKesanggupan['referensiKontrak']['mitra']['name'];
      }

      var isi = 'Sehubungan dengan  rencana pengapalan batubara oleh PLN Batubara dan menunjuk konfirmasi dari ' + si['transport']['name'] + ' , mohon agar dapat dilakukan proses pengapalan batubara dengan informasi sebagai berikut:'
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
        .text(mitraKesanggupan['referensiKontrak']['mitra']['name'] + " QQ PT PLN Batubara", rataKiri + jarak + 70, space)
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
        .text(mitraKesanggupan['jumlah'] + ' Ton atau sesuai Draught', rataKiri + jarak + 70).moveDown(0)
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
 
      doc.end();


      function intervalFunc() {
        // res.download('out.pdf')
      }
      setTimeout(intervalFunc, 500);
    },
      error => {
        console.log('terdapat Error: ' + error.message);
      });
  }
}