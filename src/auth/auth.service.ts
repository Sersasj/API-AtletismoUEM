import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuthCreateDto, AuthDto } from './dto';
import * as argon from 'argon2';
import { ConfigService } from '@nestjs/config';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private config: ConfigService,
  ) {}

  async signup(dto: AuthCreateDto) {
    const hash = await argon.hash(dto.password);
    try {
      const athlete = await this.prisma.athlete.create({
        data: {
          email: dto.email,
          password: hash,
          name: dto.name,
        },
      });
      delete athlete.password;
      return athlete;
      //this.signToken(athlete.id, athlete.email);
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credentials taken');
        }
      }
      throw error;
    }
  }

  async signin(dto: AuthDto) {
    // find the athlete by email
    const athlete = await this.prisma.athlete.findUnique({
      where: {
        email: dto.email,
      },
    });
    // if athlete does not exist throw exception
    if (!athlete) throw new ForbiddenException('Credentials incorrect');

    // compare password
    const pwMatches = await argon.verify(athlete.password, dto.password);
    // if password incorrect throw exception
    if (!pwMatches) throw new ForbiddenException('Credentials incorrect');
    // delete password
    delete athlete.password;
    //this.signToken(athlete.id, athlete.email);
  }

  // async signToken(
  //   athleteId: number,
  //   email: string,
  // ): Promise<{ access_token: string }> {
  //   const payload = {
  //     sub: athleteId,
  //     email,
  //   };
  //   const secret = this.config.get('JWT_SECRET');

  //   const token = await this.jwt.signAsync(payload, {
  //     expiresIn: '600m',
  //     secret: secret,
  //   });

  //   return {
  //     access_token: token,
  //   };
  // }
}
