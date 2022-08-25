import {
  Controller,
  Get,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';
import { ApiKeyGuard } from './auth/api-key.guard';
import { Public } from './auth/public.decorator';
import { Express } from 'express';
import fs from 'fs';

@UseGuards(ApiKeyGuard)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Public()
  @Post('uploadVideo')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
  }

  @Public()
  @Get('users-mock')
  getUsers() {
    const users = [
      {
        id: 1,
        name: 'Gaspar',
        lastName: 'Dolcemascolo',
        image: 'https://avatars.githubusercontent.com/u/36377522?v=4',
        post: 'https://unsplash.com/es/fotos/GzxWYcgj0xY',
      },
      {
        id: 2,
        name: 'Ross',
        lastName: 'Geller',
        image:
          'https://www.cinemascomics.com/wp-content/uploads/2019/09/friends-ross-geller-david-schwimmer.jpg',
        post: 'https://www.lavanguardia.com/files/content_image_mobile_filter/uploads/2020/11/24/5fc646b149668.png',
      },
      {
        id: 3,
        name: 'Monica',
        lastName: 'Geller',
        image:
          'https://pbs.twimg.com/profile_images/1491471803893444608/t2bkDjvr_400x400.jpg',
        post: 'https://qph.cf2.quoracdn.net/main-qimg-2df274e64ec2ab04b958b07ec9fbb0b1-lq',
      },
      {
        id: 4,
        name: 'Joey',
        lastName: 'Tribbiani',
        image:
          'https://elcomercio.pe/resizer/QC4RX4CPqXWNEMMkh0ghhIX1oEE=/980x0/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/KDRVQTMII5ER5F3ZSXKUVSDZPY.jpg',
        post: 'https://img.buzzfeed.com/store-an-image-prod-us-east-1/PrcoNLbF3l.png',
      },
      {
        id: 5,
        name: 'Chandler',
        lastName: 'Bing',
        image:
          'https://i.pinimg.com/originals/7f/3a/8d/7f3a8d5db6a8f9d9dbd52c430bbc1f2b.jpg',
        post: 'https://therockle.com/wp-content/uploads/2019/09/Chandler-Friends-Funniest-Quotes.jpg',
      },
      {
        id: 6,
        name: 'Phoebe',
        lastName: 'Buffay',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWZTgKHvn005qhGQE9_phkxn4Pk5hb3wA4ug&usqp=CAU',
        post: 'https://indiehoy.com/wp-content/uploads/2022/06/friends-.jpg',
      },
    ];

    return { message: 'Users mock listed', users };
  }
}
