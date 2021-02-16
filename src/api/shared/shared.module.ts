import { Global, Module } from '@nestjs/common';
import { ResponseService, ConfigService } from './services';
import { JwtAuthGuard, IsAdminGuard } from './guards';
import { JwtStrategy } from './strategies';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';

const services = [
    ConfigService, 
    ResponseService, 
    JwtAuthGuard, 
    JwtStrategy
];

@Global()
@Module({
    providers: [
        ...services,
    ],
    exports: [
        ...services,
        JwtModule,
    ],
    imports: [
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: {
              algorithm: 'HS256',
            }
        }),
    ],
    controllers: [],
    
})
export class SharedModule {}

