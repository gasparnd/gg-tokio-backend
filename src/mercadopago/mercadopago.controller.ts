import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ApiKeyGuard } from 'src/auth/api-key.guard';
import { MPCheckoutInput } from './dto/inputs';
import { MercadopagoService } from './mercadopago.service';

@ApiTags('mercadopago')
@UseGuards(ApiKeyGuard)
@Controller('mp')
export class MercadopagoController {
  constructor(private mpServices: MercadopagoService) {}

  @Get()
  get() {
    const message = this.mpServices.get();
    return { message };
  }

  @Post('checkout')
  async checkoutPayment(@Body() payload: MPCheckoutInput) {
    const checkout = await this.mpServices.chekout(payload);

    return { message: 'Order generated', paymentLink: checkout };
  }
}
