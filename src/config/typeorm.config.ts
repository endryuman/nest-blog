import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';

export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  useFactory: (ConfigService: ConfigService) => ({
    type: 'sqlite',
    database: ConfigService.get('DATABASE'),
    autoLoadEntities: true,
    synchronize: true,
    logging: true,
  }),
  inject: [ConfigService],
};
