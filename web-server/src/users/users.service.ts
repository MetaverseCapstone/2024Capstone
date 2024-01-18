import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/global/prisma.service';
import * as crypto from 'crypto';
import { loginCryptoConstants } from 'src/auth/jwtConstants';
import { LoginType } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  create(createUserDto: CreateUserDto) {
    let cryptoPw = undefined;
    if (createUserDto.loginPw) {
      cryptoPw = crypto
        .createHmac('sha512', loginCryptoConstants.secret)
        .update(createUserDto.loginPw)
        .digest('base64');
    }
    return this.prisma.user.create({
      data: {
        ...createUserDto,
        loginPw: cryptoPw,
      },
    });
  }

  findByLocal(loginType: LoginType, loginId: string, loginPw: string) {
    return this.prisma.user.findFirst({
      where: {
        loginId,
        loginPw: crypto
          .createHmac('sha512', loginCryptoConstants.secret)
          .update(loginPw)
          .digest('base64'),
        // loginType,
      },
    });
  }
}
