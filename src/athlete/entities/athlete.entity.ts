// model Athlete {
//     id       Int      @id @default(autoincrement())
//     createdAt DateTime @default(now())
//     updatedAt DateTime @updatedAt
//     name     String
//     email    String?   @unique
//     isAdmin  Boolean  @default(false)
//     password String?
//     results  Result[] // Relation to Result model
//     events   Event[]  // Relation to Event model
//   }
import { Event } from 'src/event/entities/event.entity';

export class Athlete {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  email: string;
  isAdmin: boolean;
  password: string;
  results: any[];
  events: Event[];
}
