import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ApiKeyGuard } from 'src/auth/api-key.guard';
import { MongoIdPipe } from 'src/common/mongo-id.pipe';
import { GeolocationService } from './geolocation.service';
import {
  CreateGeolocationInput,
  UpdateGeolocationInput,
} from './inputs/geolocation-create-input';

@ApiTags('geolocation')
@UseGuards(ApiKeyGuard)
@Controller('geolocation')
export class GeolocationController {
  constructor(private geolocationService: GeolocationService) {}

  @Get()
  async getRegions() {
    const regions = await this.geolocationService.getRegions();

    return { message: 'Regions listed', regions };
  }

  @Get('/:id')
  async getOne(@Param('id') id: MongoIdPipe) {
    const region = await this.geolocationService.getOne(id);

    return { message: 'Region listed', region };
  }

  @Post()
  async createRegion(@Body() payload: CreateGeolocationInput) {
    const region = await this.geolocationService.createRegion(payload);

    return { message: 'Region created', region };
  }

  @Patch('/:id')
  async updateRegion(
    @Param('id') id: MongoIdPipe,
    @Body() payload: UpdateGeolocationInput,
  ) {
    const region = await this.geolocationService.updateRegion(id, payload);

    return { message: 'Region updated', region };
  }

  @Patch('/checkIn/:id')
  async setCheckIn(
    @Param('id') id: MongoIdPipe,
    @Body() payload: UpdateGeolocationInput,
  ) {
    const region = await this.geolocationService.setCheckIn(id, payload);

    return { message: 'Region created', region };
  }

  @Patch('/checkOut/:id')
  async setCheckOut(
    @Param('id') id: MongoIdPipe,
    @Body() payload: UpdateGeolocationInput,
  ) {
    const region = await this.geolocationService.setCheckOut(id, payload);

    return { message: 'Region check-out seted', region };
  }

  @Delete('/:id')
  async removeRegion(@Param('id') id: MongoIdPipe) {
    const res = await this.geolocationService.removeRegion(id);

    return { message: res };
  }
}
