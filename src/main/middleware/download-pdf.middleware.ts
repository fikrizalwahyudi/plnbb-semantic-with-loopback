import { Middleware } from 'loopback-typescript-core/dist/middleware/base.middleware';
import { injectable, inject } from 'inversify';
import { ShippingInstructionDao } from '../models/shipping_instruction.model';
import fs from 'fs';
import { processPdf } from '../helpers/pdf.helper';

@injectable()
export class DownloadPdfMiddleware extends Middleware
{
	@inject(ShippingInstructionDao)
  siDao: ShippingInstructionDao

	path: any = '/pdf/si/:id/download';	
	protocol: any = 'get';

	async onRequest(req: any, res: any, next: any) {
		let siId = req.params.id

    res.download(`./storage/si/${siId}.pdf`)
	}
}