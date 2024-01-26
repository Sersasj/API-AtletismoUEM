import {
  Controller,
  Get,
  Inject,
  Post,
  UseGuards,
  Request,
} from '@nestjs/common';
import { IEnvironmentVariables } from './config/environment/environment.interface';
import { AuthService } from './auth/auth.service';

type Message = {
  message: string;
};

@Controller()
export class AppController {
  constructor(
    @Inject('IEnvironmentVariables')
    private readonly envConfigService: IEnvironmentVariables,
    private authService: AuthService,
  ) {}
  @Get()
  getHello(): Message {
    return { message: 'Hello World!' };
  }
}
