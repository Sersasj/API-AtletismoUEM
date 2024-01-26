# API AtletismoUEM

This repository contains the backend code for the upcoming Track and Field website of the State University of Maringá. It's built with NestJS, utilizes Prisma as an ORM, and PostgreSQL for data storage.

## Features

- **Athlete Management:** Handle athlete data including personal information and event participation records.
- **Event Management:** Create, update, and manage track and field events.
- **Results Recording:** Record and retrieve athletes' performance in various events.

## Technologies Used

- **NestJS:** A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.
- **Prisma:** Next-generation ORM for Node.js used for easier database management.
- **PostgreSQL:** Robust RDBMS offering advanced data management capabilities.

## Database Schema

The application uses four main tables: `Athlete`, `Event`, `Result`, `AthleteToEvent`. The relationships between these tables are depicted in the schema diagram below.
![Captura de tela 2024-01-26 172341](https://github.com/Sersasj/API-AtletismoUEM/assets/32242350/9cd8ba6c-30ba-4e93-ae8e-ef2573f15f30)


## Getting Started

### Prerequisites

Ensure you have Node.js installed on your machine. If not download it [here](https://nodejs.org/%29).

### Installation

1. Clone this repository:

   ```sh
   git clone [2](https://github.com/Sersasj/API-AtletismoUEM.git)
   ```

2. Navigate to the project directory:

   ```sh
   cd API-Atletismo
   ```

3. Install dependencies:

   ```sh
   npm install
   ```

4. Start the development server:
   ```sh
   npm run start:dev
   ```
