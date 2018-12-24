import { Middleware } from 'loopback-typescript-core/dist/middleware/base.middleware';
import { injectable, inject } from 'inversify';
import { ReactiveApp } from 'loopback-typescript-core';
import { ShippingInstructionDao } from '../models/shipping_instruction.model';
import { MitraDao } from '../models/mitra.model';
import { MitraKesanggupanDao } from '../models/mitra_kesanggupan.model';
import { PlnRencanaPasokanDao } from '../models/pln_rencana_pasokan.model';
import { MitraShippingOrderDao } from '../models/mitra_shipping_order.model';
import { MitraShippingInstructionRequestDao } from '../models/mitra_shipping_instruction_request.model';
import { processPdf } from '../helpers/pdf.helper';

@injectable()
export class PrintPdfMiddleware extends Middleware {
  @inject(ReactiveApp)
  ctx: ReactiveApp
  
  @inject(ShippingInstructionDao)
  siDao: ShippingInstructionDao

  @inject(MitraDao)
  mitraDao: MitraDao

  @inject(MitraKesanggupanDao)
  mitraKesanggupanDao:MitraKesanggupanDao

  @inject(PlnRencanaPasokanDao)
  plnRencanaPasokanDao:PlnRencanaPasokanDao

  @inject(MitraShippingOrderDao)
  mitraShippingOrderDao:MitraShippingOrderDao

  @inject(MitraShippingInstructionRequestDao)
  mitraShippingInstructionRequestDao:MitraShippingInstructionRequestDao

  path = '/pdf/si/:id/preview';
  protocol = 'get';

  async onRequest(req: any, res: any, next: any) {
    let siId = req.params.id

    let shippingInstruction:any = await this.siDao.findById(siId, {include: ['transport', 'jetty', {'siRequest': {'shippingOrder': {'rencanaPasokan': {'mitraKesanggupan': ['mitra', 'tujuanPltu', 'referensiKontrak', 'jetty']}}}}]})

    shippingInstruction = JSON.parse(JSON.stringify(shippingInstruction))

    let mitraKesanggupan = shippingInstruction.siRequest.shippingOrder.rencanaPasokan.mitraKesanggupan
    
    let tujuanPltu = mitraKesanggupan['tujuanPltu'];    

    res.setHeader('Content-type', 'application/pdf');

    processPdf(shippingInstruction, mitraKesanggupan, tujuanPltu, res)
  }
}