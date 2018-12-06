import { Middleware } from 'loopback-typescript-core/dist/middleware/base.middleware';
import { injectable, inject } from 'inversify';
import { ReactiveApp } from 'loopback-typescript-core';

@injectable()
export class CreateRoleMiddleware extends Middleware
{
	@inject(ReactiveApp)
	ctx:ReactiveApp

	path = '/middleware/roles/:accountId';	
	protocol = 'post';

	async onRequest(req: any, res: any, next: any) {
		let accountId = req.params.accountId
		let roleMappingDao = this.ctx.getDao('RoleMapping') as any
		
		let roles = req.body

		roleMappingDao.destroyAll({principalId:accountId}, (err) => {
			if(err) res.status(500).send(err)
			else {
				roleMappingDao.create(roles, (err2) => {
					if(err2) res.status(500).send(err2)
					else res.send({success:true})
				})
			}
		})
	}	
}