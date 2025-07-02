"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postgresConfig = void 0;
const config_1 = require("@nestjs/config");
const grade_entity_1 = require("../grades/entities/grade.entity");
exports.postgresConfig = {
    import: [config_1.ConfigModule],
    inject: [config_1.ConfigService],
    useFactory: (configService) => ({
        type: 'postgres',
        host: configService.get("DB_HOST"),
        port: configService.get("DB_PORT"),
        username: configService.get("DB_USERNAME"),
        password: configService.get("DB_PASSWORD"),
        database: configService.get("DB_NAME"),
        entities: [grade_entity_1.GradeEntity],
        synchronize: true,
        logging: true
    })
};
//# sourceMappingURL=postgres.config.js.map