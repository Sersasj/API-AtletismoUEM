import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { EnvConfigModule } from '@/config/environment/env-config/env-config.module';
import { EnvConfigService } from '@/config/environment/env-config/env-config.service';

@Global()
@Module({
  imports: [EnvConfigModule.forRoot(), PrismaModule],
  providers: [
    PrismaService,
    { provide: 'IEnvironmentVariables', useClass: EnvConfigService },
  ],
  exports: [PrismaService],
})
export class PrismaModule {}
