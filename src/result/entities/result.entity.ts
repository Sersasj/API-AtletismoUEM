// model Result {
//   id       Int      @id @default(autoincrement())
//   result   Float
//   athlete  Athlete  @relation(fields: [athleteId], references: [id])
//   athleteId Int
//   event    Event    @relation(fields: [eventId], references: [id])
//   eventId  Int
// }

export class Result {
  id: number;
  result: number;
  athleteId: number;
  eventId: number;
}
