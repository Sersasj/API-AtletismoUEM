// create-athlete.dto.ts
import { IsString, IsNotEmpty, IsBoolean, IsOptional } from 'class-validator';
import { Event } from '@/event/entities/event.entity';

export class CreateAthleteDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsBoolean()
  isAdmin: boolean;

  @IsOptional()
  @IsString()
  password?: string;

  @IsOptional()
  events?: Event[];
}
