import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { Public } from './util/decorators';
import { LoginType } from '@prisma/client';
import { AuthService } from './auth/auth.service';
import { loginCryptoConstants } from './auth/jwtConstants';
import * as crypto from 'crypto';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService,
  ) {}

  @Public()
  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Public()
  @Post('login')
  login(
    @Body()
    loginDto: {
      loginType: LoginType;
      loginId: string;
      loginPw?: string;
    },
  ) {
    return this.authService.login(
      loginDto.loginType,
      loginDto.loginId,
      loginDto.loginPw,
    );
  }

  @Public()
  @Get('testpw/:password')
  testPassword(
    @Param('password') password
  ):string {
    return crypto
    .createHmac('sha512', loginCryptoConstants.secret)
    .update(password)
    .digest('base64');
  }
}
