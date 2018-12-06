import { Middleware } from 'loopback-typescript-core/dist/middleware/base.middleware';
import { injectable, inject } from 'inversify';
import { ReactiveApp } from 'loopback-typescript-core';

@injectable()
export class DeleteRoleMiddleware extends Middleware
{
	@inject(ReactiveApp)
	ctx:ReactiveApp

	path = '/middleware/roles/:accountId';	
	protocol = 'delete';
	
	async onRequest(req: any, res: any, next: any) {
		let accountId = req.params.accountId
		let roleMappingDao = this.ctx.getDao('RoleMapping') as any

		roleMappingDao.destroyAll({principalId: accountId}, (err, info) => {
			if(err) res.status(500).send('cannot delete roles')
			else res.send({success:true})
		})
	}
}