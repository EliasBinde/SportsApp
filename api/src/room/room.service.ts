import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { Room } from 'src/graphql';
@Injectable()
export class RoomService {
  constructor(private prisma: PrismaService) {}
  findPublic({ searchString }: { searchString: string }) {
    const searchTags = searchString.split(' ').map((tag) => tag.toLowerCase());
    return this.prisma.room.findMany({
      where: {
        private: false,
        OR: [
          {
            name: {
              contains: searchString,
              mode: 'insensitive',
            },
          },
          {
            description: {
              contains: searchString,
              mode: 'insensitive',
            },
          },
          {
            tags: {
              hasSome: searchTags,
            },
          },
        ],
      },
    });
  }
  findOne(roomId: string) {
    //convert roomId to number
    const id: number = parseInt(roomId);
    return this.prisma.room.findUnique({
      where: {
        id: id,
      },
    });
  }
  async join(roomId: string, userId: string) {
    //convert roomId to number
    const id: number = parseInt(roomId);
    const uid: number = parseInt(userId);
    const res = await this.prisma.room.update({
      where: {
        id: id,
      },
      data: {
        activeUsers: { push: uid },
      },
    });
    return res;
  }
  async leave(roomId: string, userId: string) {
    //convert roomId to number
    const id: number = parseInt(roomId);
    const uid: number = parseInt(userId);
    const room = await this.prisma.room.findUnique({
      where: {
        id: id,
      },
    });
    return await this.prisma.room.update({
      where: {
        id: id,
      },
      data: {
        activeUsers: { set: room.activeUsers.filter((user) => user !== uid) },
      },
    });
  }

  create(createRoomInput: Prisma.RoomCreateInput) {
    return this.prisma.room.create({
      data: createRoomInput,
    });
  }
  async queueWorkout(room: Room, workoutId: string) {
    //convert workoutId to number
    const id: number = parseInt(workoutId);
    return await this.prisma.room.update({
      where: {
        id: room.id,
      },
      data: {
        activeWorkout: id,
      },
    });
  }
  async dequeueWorkout(room: Room) {
    return await this.prisma.room.update({
      where: {
        id: room.id,
      },
      data: {
        activeWorkout: null,
      },
    });
  }
  async startWorkout(room: Room) {
    const workout = await this.prisma.workout.findUnique({
      where: {
        id: room.activeWorkout,
      },
    });

    const firstExerciseId = workout.exerciseIds[0];
    room.activeExercise = firstExerciseId;
    room.activeExerciseProgress = 0;
    await this.prisma.room.update({
      where: {
        id: room.id,
      },
      data: room,
    });
    return room;
  }
  async nextExercise(room: Room) {
    const workout = await this.prisma.workout.findUnique({
      where: {
        id: room.activeWorkout,
      },
    });
    const currentExerciseIndex = workout.exerciseIds.indexOf(
      room.activeExercise,
    );
    const nextExerciseId = workout.exerciseIds[currentExerciseIndex + 1];
    room.activeExercise = nextExerciseId;
    room.activeExerciseProgress = 0;
    await this.prisma.room.update({
      where: {
        id: room.id,
      },
      data: room,
    });
    return room;
  }
}
