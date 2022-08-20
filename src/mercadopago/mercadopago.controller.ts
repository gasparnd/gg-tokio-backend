import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ApiKeyGuard } from 'src/auth/api-key.guard';
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
}
