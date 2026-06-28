import express from "express";

import branchRoutes from "./routes/branch.routes";
import clientRoutes from "./routes/client.routes";
import driverRoutes from "./routes/driver.routes";
import taxiCarRoutes from "./routes/taxiCar.routes";
import reservationRoutes from "./routes/reservation.routes";

import { errorHandler } from "./middlewares/error.middleware";
import { notFound } from "./middlewares/notFound.middleware";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Taxi Reservation API is Running",
  });
});

app.use("/api/branches", branchRoutes);
app.use("/api/clients", clientRoutes);
app.use("/api/drivers", driverRoutes);
app.use("/api/taxicars", taxiCarRoutes);
app.use("/api/reservations", reservationRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;