// model Event {
//     id       Int      @id @default(autoincrement())
//     name     String
//     athletes Athlete[] // Relation to Athlete model
//     results  Result[]  // Relation to Result model

import { IsNotEmpty, IsString } from 'class-validator';

export class CreateEventDto {
  @IsNotEmpty()
  @IsString()
  name: string;
}
