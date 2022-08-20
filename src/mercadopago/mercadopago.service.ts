import { Injectable } from '@nestjs/common';

@Injectable()
export class MercadopagoService {
  get() {
    return 'Hello Mercado Pago!';
  }
}
