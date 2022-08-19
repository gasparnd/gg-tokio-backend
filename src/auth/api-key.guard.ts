import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { Request } from 'express';
import { Observable } from 'rxjs';
import config from 'src/config';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  constructor(
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const { apiKey } = this.configService;
    const request = context.switchToHttp().getRequest<Request>();
    const authHeader = request.header('ApiKey');
    const isAuth = authHeader === apiKey;

    if (!isAuth) {
      throw new UnauthorizedException('Not Allow');
    }
    return true;
  }
}
