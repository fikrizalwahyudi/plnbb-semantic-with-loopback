import { Middleware } from "loopback-typescript-core";
import DataStore from 'nedb';
import path from 'path';
import multer from 'multer';

export class UploadMiddleware extends Middleware
{
	path: any = '/storage/doc';	
	protocol: any = 'post';

	db = new DataStore({ filename: path.resolve(process.cwd(), 'storage', 'doc', 'index.db'), autoload: true })

	upload = multer({
		//dest: path.relative(__dirname, path.resolve(process.cwd(), 'cache'))
		dest: path.resolve(process.cwd(), 'storage', 'doc')
	})

	onRequest = this.upload.single('file')

	/*onRequest(req: any, res: any, next: any): Promise<void> {
		throw new Error("Method not implemented.");
	}*/
}