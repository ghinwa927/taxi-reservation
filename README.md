# Taxi Reservation API

A RESTful API for managing a taxi reservation system, built with **Node.js**, **Express.js**, **TypeScript**, **MongoDB**, and **Mongoose**.

This project provides CRUD operations for managing branches, clients, drivers, taxi cars, and reservations.

---

## 📌 Features

-  Manage taxi branches
-  Manage clients
-  Manage drivers
-  Manage taxi cars
-  Manage reservations
-  Full CRUD operations
-  MongoDB database integration
-  Error handling middleware
-  Built with TypeScript

---

## 🛠️ Technologies Used

- Node.js
- Express.js
- TypeScript
- MongoDB
- Mongoose
- dotenv
- Nodemon

---

## 📂 Project Structure

```text
taxi-reservation/
├── src/
│   ├── config/          # Database connection
│   │   └── db.ts
│   ├── controllers/     # Business logic
│   │   └── user.controller.ts
│   ├── models/          # Mongoose schemas
│   │   └── user.model.ts
│   ├── routes/          # API routes
│   │   └── user.routes.ts
│   ├── middlewares/     # Custom middlewares
│   │   ├── error.middleware.ts
│   ├── app.ts           # Express app setup
│   └── server.ts        # Server bootstrap
├── .env                 # Environment variables
├── tsconfig.json
├── package.json
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone git@github.com:RimDH/ts-crud-apis.git
```

### 2. Navigate to the project

```bash
cd taxi-reservation
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create a `.env` file

```env
PORT=3000
MONGO_URI=YOUR_MONGO_URI
```

### 5. Start MongoDB

Make sure your MongoDB server is running.

### 6. Run the project

Development mode:

```bash
npm run dev
```

Production mode:

```bash
npm run build
npm start
```

---

## 🌐 API Endpoints

### Branches

| Method | Endpoint |
|---------|----------|
| GET | `/api/branches` |
| GET | `/api/branches/:id` |
| POST | `/api/branches` |
| PUT | `/api/branches/:id` |
| DELETE | `/api/branches/:id` |

---

### Clients

| Method | Endpoint |
|---------|----------|
| GET | `/api/clients` |
| GET | `/api/clients/:id` |
| POST | `/api/clients` |
| PUT | `/api/clients/:id` |
| DELETE | `/api/clients/:id` |

---

### Drivers

| Method | Endpoint |
|---------|----------|
| GET | `/api/drivers` |
| GET | `/api/drivers/:id` |
| POST | `/api/drivers` |
| PUT | `/api/drivers/:id` |
| DELETE | `/api/drivers/:id` |

---

### Taxi Cars

| Method | Endpoint |
|---------|----------|
| GET | `/api/taxicars` |
| GET | `/api/taxicars/:id` |
| POST | `/api/taxicars` |
| PUT | `/api/taxicars/:id` |
| DELETE | `/api/taxicars/:id` |

---

### Reservations

| Method | Endpoint |
|---------|----------|
| GET | `/api/reservations` |
| GET | `/api/reservations/:id` |
| POST | `/api/reservations` |
| PUT | `/api/reservations/:id` |
| DELETE | `/api/reservations/:id` |

---

## 🧪 Testing

The API can be tested using:

- Postman

Example request for creating a branch:

```json
{
  "name": "Beirut Branch",
  "address": "Hamra",
  "phone": "70123456"
}
```

---

## Database Collections

The project uses MongoDB with the following collections:

- Branches
- Clients
- Drivers
- TaxiCars
- Reservations

Relationships are implemented using MongoDB ObjectId references.

---

## License

This project was developed for educational purposes.