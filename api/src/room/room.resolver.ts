import { UseGuards } from '@nestjs/common';
import { Context, Mutation, Query, Subscription } from '@nestjs/graphql';
import { Args, Resolver } from '@nestjs/graphql';
import { Prisma, Room } from '@prisma/client';
import { PubSub } from 'graphql-subscriptions';
import { RoomCreateInput } from 'src/@generated/prisma-nestjs-graphql/room/room-create.input';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RoomService } from './room.service';

const pubSub = new PubSub();

@Resolver('Room')
export class RoomResolver {
  constructor(private readonly roomService: RoomService) {}
  @Query('findRooms')
  findAll(
    @Args('searchString')
    searchString?: string,
  ) {
    return this.roomService.findPublic({ searchString });
  }
  @Subscription('room')
  async subscribe(@Args('roomId') roomId: string, @Context() ctx) {
    ctx;
    return pubSub.asyncIterator(roomId);
  }

  //Join room mutation
  @Mutation('joinRoom')
  @UseGuards(JwtAuthGuard)
  async join(@Args('roomId') roomId: string, @Context() ctx) {
    console.log(ctx.req.user);
    const room: Room = await this.roomService.findOne(roomId);
    if (room.owner === ctx.req.user.userId) {
      return {
        error: 'You cannot join your own room',
      };
    }
    if (room.activeUsers.includes(ctx.req.user.userId)) {
      console.log('You are already in this room');
      return {
        error: 'You are already in this room',
      };
    }
    const updated = await this.roomService.join(roomId, ctx.req.user.userId);
    console.log(updated.activeUsers);
    pubSub.publish(roomId, {
      room: updated,
    });
    return updated;
  }

  //Leave room mutation
  @Mutation('leaveRoom')
  @UseGuards(JwtAuthGuard)
  async leave(@Args('roomId') roomId: string, @Context() ctx) {
    const room: Room = await this.roomService.findOne(roomId);
    if (!room.activeUsers.includes(ctx.req.user.userId)) {
      return {
        error: 'You are not in this room',
      };
    }
    const updated = this.roomService.leave(roomId, ctx.req.user.userId);
    pubSub.publish(roomId, {
      room: updated,
    });
  }

  @Mutation('createRoom')
  @UseGuards(JwtAuthGuard)
  async create(
    @Args('input')
    createRoomInput: RoomCreateInput,
    @Context() ctx,
  ) {
    const room: Prisma.RoomCreateInput = {
      owner: ctx.req.user.username,
      ...createRoomInput,
    };
    const created = await this.roomService.create(room);
    return created;
  }

  //queue workout mutation
  @Mutation('queueWorkout')
  @UseGuards(JwtAuthGuard)
  async queueWorkout(
    @Args('roomId')
    roomId: string,
    @Args('workoutId')
    workoutId: string,
    @Context() ctx,
  ) {
    const room: Room = await this.roomService.findOne(roomId);
    if (!room.activeUsers.includes(ctx.req.user.userId)) {
      return {
        error: 'You are not in this room',
      };
    }
    if (
      !room.mods.includes(ctx.req.user.userId) ||
      !room.owner === ctx.req.user.userId
    ) {
      return {
        error: 'You are not allowed to queue workouts',
      };
    }
    const updated = await this.roomService.queueWorkout(room, workoutId);
    pubSub.publish(roomId, {
      room: updated,
    });
    return updated;
  }
  //dequeue workout mutation
  @Mutation('dequeueWorkout')
  @UseGuards(JwtAuthGuard)
  async dequeueWorkout(
    @Args('roomId')
    roomId: string,
    @Context() ctx,
  ) {
    const room: Room = await this.roomService.findOne(roomId);
    if (!room.activeUsers.includes(ctx.req.user.userId)) {
      return {
        error: 'You are not in this room',
      };
    }
    if (
      !room.mods.includes(ctx.req.user.userId) ||
      !room.owner === ctx.req.user.userId
    ) {
      return {
        error: 'You are not allowed to dequeue workouts',
      };
    }
    const updated = await this.roomService.dequeueWorkout(room);
    pubSub.publish(roomId, {
      room: updated,
    });
    return updated;
  }
  //start workout mutation
  @Mutation('startWorkout')
  @UseGuards(JwtAuthGuard)
  async startWorkout(
    @Args('roomId')
    roomId: string,
    @Context() ctx,
  ) {
    const room: Room = await this.roomService.findOne(roomId);
    if (!room.activeUsers.includes(ctx.req.user.userId)) {
      return {
        error: 'You are not in this room',
      };
    }
    if (
      !room.mods.includes(ctx.req.user.userId) ||
      !room.owner === ctx.req.user.userId
    ) {
      return {
        error: 'You are not allowed to start workouts',
      };
    }
    const updated = await this.roomService.startWorkout(room);
    pubSub.publish(roomId, {
      room: updated,
    });
    return updated;
  }
  //next exercise mutation
  @Mutation('nextExercise')
  @UseGuards(JwtAuthGuard)
  async nextExercise(
    @Args('roomId')
    roomId: string,
    @Context() ctx,
  ) {
    const room: Room = await this.roomService.findOne(roomId);
    if (!room.activeUsers.includes(ctx.req.user.userId)) {
      return {
        error: 'You are not in this room',
      };
    }
    if (
      !room.mods.includes(ctx.req.user.userId) ||
      !room.owner === ctx.req.user.userId
    ) {
      return {
        error: 'You are not allowed to next exercises',
      };
    }
    const updated = await this.roomService.nextExercise(room);
    pubSub.publish(roomId, {
      room: updated,
    });
    return updated;
  }
  //setExerciseProgress mutation
  @Mutation('setExerciseProgress')
  @UseGuards(JwtAuthGuard)
  async setExerciseProgress(
    @Args('roomId')
    roomId: string,
    @Args('progress')
    progress: number,
    @Context() ctx,
  ) {}
}
