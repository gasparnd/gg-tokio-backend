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
    console.log(
      '🚀 ~ file: mercadopago.service.ts:18 ~ MercadopagoService ~ chekout ~ payload',
      payload,
    );
    const preferences = {
      ...payload,
      marketplace_fee: 5,
      back_urls: {
        success: 'https://gasparnd.vercel.app/',
      },
    };
    console.log(
      '🚀 ~ file: mercadopago.service.ts:23 ~ MercadopagoService ~ chekout ~ preferences',
      preferences,
    );
    try {
      mercadopago.configure({
        access_token: this.configService.mercadopago.accessToken,
      });

      const mpRes = await mercadopago.preferences.create(preferences);

      if (mpRes) {
        console.log(
          '🚀 ~ file: mercadopago.service.ts:33 ~ MercadopagoService ~ chekout ~ mpRes',
          mpRes,
        );
        return mpRes.body.init_point;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
