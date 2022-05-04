import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from 'src/auth/auth.service';
const secret = `${process.env.JWT_SECRET}`;
const expires = `${process.env.JWT_EPIRATION}`;
@Module({
  imports: [
    JwtModule.register({
      signOptions: {
        expiresIn: expires,
      },
      secret: secret,
    }),
  ],
  providers: [UserResolver, UserService, PrismaService, AuthService],
  exports: [UserService],
})
export class UserModule {}
