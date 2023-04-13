import prisma from "../config/database.js";
import { Car } from "../protocols/cars.js";

async function getCars() {
  return prisma.cars.findMany();
}

async function getCar(id: number) {
  const data = await prisma.cars.findUnique({
    where: {
      id,
    },
  })
  return data;
}

async function getCarWithLicensePlate(licensePlate: string) {
  const data = await prisma.cars.findUnique({
    where: {
      licensePlate,
    },
  })
  return data;
}

async function createCar(car: Car) {
  return prisma.cars.create({
    data: car
  })
}

async function deleteCar(id: number) {
 await prisma.cars.delete({
    where: {
      id,
    },
  })
}

const carRepository = {
  getCar,
  getCarWithLicensePlate,
  getCars,
  createCar,
  deleteCar,
}

export default carRepository;