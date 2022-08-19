import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Geolocation } from './geolocation.schema';
import { UpdateGeolocationInput } from './inputs/geolocation-create-input';

@Injectable()
export class GeolocationService {
  constructor(
    @InjectModel(Geolocation.name) private geolocationModel: Model<Geolocation>,
  ) {}

  async getRegions() {
    const regions = await this.geolocationModel.find().exec();

    if (regions) {
      return regions;
    }
  }

  async getOne(id: any) {
    const region = await this.geolocationModel.findById(id).exec();

    if (region) {
      return region;
    }
  }

  async createRegion(payload) {
    const newRegion = new this.geolocationModel(payload);
    return newRegion.save();
  }

  async updateRegion(id, payload: UpdateGeolocationInput) {
    const region = await this.geolocationModel.findByIdAndUpdate(
      id,
      { $set: payload },
      { new: true },
    );
    if (!region) {
      throw new NotFoundException('This region not exist');
    }

    return region;
  }

  async setCheckIn(id, payload: UpdateGeolocationInput) {
    console.log(
      '🚀 ~ file: geolocation.service.ts ~ line 48 ~ GeolocationService ~ setCheckIn ~ payload',
      payload,
    );
    const region = await this.geolocationModel.findByIdAndUpdate(
      id,
      { $set: payload },
      { new: true },
    );
    if (!region) {
      throw new NotFoundException('This region not exist');
    }

    return region;
  }

  async setCheckOut(id, payload: UpdateGeolocationInput) {
    const region = await this.geolocationModel.findByIdAndUpdate(
      id,
      { $set: payload },
      { new: true },
    );
    if (!region) {
      throw new NotFoundException('This region not exist');
    }

    return region;
  }

  async removeRegion(id: any) {
    const regions = await this.geolocationModel.findByIdAndDelete(id);

    if (regions) {
      return 'Region deleted';
    }
  }
}
