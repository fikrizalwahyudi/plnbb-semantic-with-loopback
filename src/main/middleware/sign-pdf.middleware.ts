import { Middleware } from 'loopback-typescript-core/dist/middleware/base.middleware';
import { injectable, inject } from 'inversify';
import { ShippingInstructionDao } from '../models/shipping_instruction.model';
import fs from 'fs';
import { processPdf } from '../helpers/pdf.helper';

@injectable()
export class SignPdfMiddleware extends Middleware
{
	@inject(ShippingInstructionDao)
  siDao: ShippingInstructionDao

	path: any = '/pdf/si/:id/sign';	
	protocol: any = 'post';

	async onRequest(req: any, res: any, next: any) {
		let siId = req.params.id

    let shippingInstruction:any = await this.siDao.findById(siId, {include: ['transport', 'jetty', {'siRequest': {'shippingOrder': {'rencanaPasokan': {'mitraKesanggupan': ['mitra', 'tujuanPltu', 'referensiKontrak', 'jetty']}}}}]})

    shippingInstruction = JSON.parse(JSON.stringify(shippingInstruction))

    let mitraKesanggupan = shippingInstruction.siRequest.shippingOrder.rencanaPasokan.mitraKesanggupan
    
		let tujuanPltu = mitraKesanggupan['tujuanPltu']; 
		
		let outStream = fs.createWriteStream(`./storage/si/${siId}.pdf`)

		processPdf(shippingInstruction, mitraKesanggupan, tujuanPltu, outStream)

		res.send({success: true, pdfFile: `${siId}.pdf`})
	}
}