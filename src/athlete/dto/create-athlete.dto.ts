// create-athlete.dto.ts
import { IsString, IsNotEmpty, IsBoolean, IsOptional } from 'class-validator';

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
  resultsHistory?: any;
}
