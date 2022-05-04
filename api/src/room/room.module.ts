import { Module } from '@nestjs/common';
import { RoomService } from './room.service';
import { RoomResolver } from './room.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { AuthService } from 'src/auth/auth.service';
import { UserService } from 'src/user/user.service';
import { JwtModule } from '@nestjs/jwt';
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
  providers: [
    RoomResolver,
    RoomService,
    PrismaService,
    AuthService,
    UserService,
  ],
})
export class RoomModule {}
