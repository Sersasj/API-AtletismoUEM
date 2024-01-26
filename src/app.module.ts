import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { EnvConfigModule } from './config/environment/env-config/env-config.module';
import { AuthModule } from './auth/auth.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AthleteModule } from './athlete/athlete.module';
import { EventModule } from './event/event.module';
import { PrismaModule } from './prisma/prisma.module';
import { ResultModule } from './result/result.module';

@Module({
  imports: [
    EnvConfigModule,
    AuthModule,
    PassportModule,
    JwtModule.register({}),
    AthleteModule,
    EventModule,
    PrismaModule,
    ResultModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
