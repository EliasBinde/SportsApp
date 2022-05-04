import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
const secret = `${process.env.JWT_SECRET}`;
const expires = `${process.env.JWT_EPIRATION}`;

@Module({
  imports: [
    PassportModule,
    UserModule,
    JwtModule.register({
      signOptions: {
        expiresIn: expires,
      },
      secret: secret,
    }),
  ],
  providers: [AuthService, AuthResolver, LocalStrategy, JwtStrategy],
})
export class AuthModule {}
