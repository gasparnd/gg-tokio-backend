import { PartialType } from '@nestjs/swagger';
import { CreateGeolocationInput } from './geolocation-create.input';

export class UpdateGeolocationInput extends PartialType(
  CreateGeolocationInput,
) {}
