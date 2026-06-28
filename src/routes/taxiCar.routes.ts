import { Router } from "express";
import {
  createTaxiCar,
  getTaxiCars,
  getTaxiCarById,
  updateTaxiCar,
  deleteTaxiCar,
} from "../controllers/taxiCar.controller";

const router = Router();

router.post("/", createTaxiCar);
router.get("/", getTaxiCars);
router.get("/:id", getTaxiCarById);
router.put("/:id", updateTaxiCar);
router.delete("/:id", deleteTaxiCar);

export default router;