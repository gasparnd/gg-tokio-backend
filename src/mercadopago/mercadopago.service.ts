import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const mercadopago = require('mercadopago');
import config from 'src/config';
import { MPCheckoutInput } from './inputs/mp-checkout-input';

@Injectable()
export class MercadopagoService {
  constructor(
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {}
  get() {
    return 'Hello Mercado Pago!';
  }

  async chekout(payload: MPCheckoutInput) {
    const preferences = {
      ...payload,
      back_urls: {
        success: 'https://gasparnd.vercel.app/',
      },
    };
    try {
      mercadopago.configure({
        access_token: this.configService.mercadopago.accessToken,
      });

      const mpRes = await mercadopago.preferences.create(preferences);

      if (mpRes) {
        return mpRes.body.init_point;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
