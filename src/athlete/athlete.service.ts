import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAthleteDto } from './dto/create-athlete.dto';
import { UpdateAthleteDto } from './dto/update-athlete.dto';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class AthleteService {
  constructor(private prisma: PrismaService) {}

  async create(createAthleteDto: CreateAthleteDto) {
    const athlete = await this.prisma.athlete.create({
      data: {
        email: createAthleteDto.email,
        name: createAthleteDto.name,
        isAdmin: createAthleteDto.isAdmin,
        password: createAthleteDto.password,
        resultsHistory: createAthleteDto.resultsHistory,
      },
    });
    return athlete;
  }

  async findAll() {
    const athletes = await this.prisma.athlete.findMany();
    return athletes;
  }

  async findOne(id: number) {
    const athlete = await this.prisma.athlete.findUnique({
      where: { id },
    });

    if (!athlete) {
      throw new NotFoundException(`Athlete with ID ${id} not found`);
    }

    return athlete;
  }

  async update(id: number, updateAthleteDto: UpdateAthleteDto) {
    const athlete = await this.prisma.athlete.update({
      where: { id },
      data: {
        email: updateAthleteDto.email,
        name: updateAthleteDto.name,
        isAdmin: updateAthleteDto.isAdmin,
        password: updateAthleteDto.password,
        resultsHistory: updateAthleteDto.resultsHistory,
      },
    });

    if (!athlete) {
      throw new NotFoundException(`Athlete with ID ${id} not found`);
    }

    return athlete;
  }

  async remove(id: number) {
    const athlete = await this.prisma.athlete.delete({
      where: { id },
    });

    if (!athlete) {
      throw new NotFoundException(`Athlete with ID ${id} not found`);
    }

    return athlete;
  }
}
