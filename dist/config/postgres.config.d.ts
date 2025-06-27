import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
export declare const postgresConfig: {
    import: (typeof ConfigModule)[];
    inject: (typeof ConfigService)[];
    useFactory: (configService: ConfigService) => TypeOrmModuleOptions;
};
