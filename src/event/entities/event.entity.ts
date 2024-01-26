// model Event {
//     id       Int      @id @default(autoincrement())
//     name     String
//     athletes Athlete[] // Relation to Athlete model
//     results  Result[]  // Relation to Result model
//   }

import { Athlete } from 'src/athlete/entities/athlete.entity';
import { Result } from 'src/result/entities/result.entity';
export class Event {
  id: number;
  name: string;
  athletes: Athlete[];
  results: Result[];
}
