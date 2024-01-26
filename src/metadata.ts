/* eslint-disable */
export default async () => {
  const t = {};
  return {
    '@nestjs/swagger': {
      models: [
        [
          import('./auth/dto/auth.dto'),
          {
            AuthDto: {
              email: { required: true, type: () => String },
              password: { required: true, type: () => String },
              name: { required: true, type: () => String },
            },
          },
        ],
        [import('./athlete/dto/create-athlete.dto'), { CreateAthleteDto: {} }],
        [import('./athlete/dto/update-athlete.dto'), { UpdateAthleteDto: {} }],
        [import('./event/dto/create-event.dto'), { CreateEventDto: {} }],
        [import('./event/dto/update-event.dto'), { UpdateEventDto: {} }],
        [import('./athlete/entities/athlete.entity'), { Athlete: {} }],
        [import('./event/entities/event.entity'), { Event: {} }],
        [
          import('./auth/dto/auth-create.dto'),
          {
            AuthCreateDto: {
              email: { required: true, type: () => String },
              password: { required: true, type: () => String },
              name: { required: true, type: () => String },
            },
          },
        ],
      ],
      controllers: [
        [
          import('./app.controller'),
          { AppController: { getHello: { type: Object } } },
        ],
        [
          import('./auth/auth.controller'),
          { AuthController: { login: {}, signin: {} } },
        ],
        [
          import('./athlete/athlete.controller'),
          {
            AthleteController: {
              create: { type: String },
              findAll: { type: String },
              findOne: { type: String },
              update: { type: String },
              remove: { type: String },
            },
          },
        ],
        [
          import('./event/event.controller'),
          {
            EventController: {
              create: { type: String },
              findAll: { type: String },
              findOne: { type: String },
              update: { type: String },
              remove: { type: String },
            },
          },
        ],
      ],
    },
  };
};
