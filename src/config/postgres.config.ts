import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { GradeEntity } from "src/grades/entities/grade.entity";


export const postgresConfig = {
    import: [ConfigModule],
    inject: [ConfigService],
    useFactory: (configService: ConfigService): TypeOrmModuleOptions => ({
        type: 'postgres',
        host: configService.get<string>("DB_HOST"),
        port: configService.get<number>("DB_PORT"),
        username: configService.get<string>("DB_USERNAME"),
        password: configService.get<string>("DB_PASSWORD"),
        database: configService.get<string>("DB_NAME"),
        entities: [GradeEntity],
        synchronize: true,
        logging: true

    })

}