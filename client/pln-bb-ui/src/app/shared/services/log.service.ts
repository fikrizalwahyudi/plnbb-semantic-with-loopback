import { Injectable } from '@angular/core';
import { createLogger, INFO, stdSerializers } from 'browser-bunyan';
import { ConsoleFormattedStream } from '@browser-bunyan/console-formatted-stream';

@Injectable()
export class LogService {
  private _logger:any

  constructor() { 
    this._logger = createLogger({
      name: 'iam-angular',
      streams: [
        {
          level: INFO, // or use the string 'info'
          stream: new ConsoleFormattedStream()
        }
      ],
      serializers: stdSerializers,
      src: true
    })
  }

  get logger() { return this._logger }
}
