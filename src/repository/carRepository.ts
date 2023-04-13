import prisma from "../config/database.js";

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

async function createCar(model: string, licensePlate: string, year: number, color: string) {
  return prisma.cars.create({
    data: {
      'model': model,
      'licensePlate': licensePlate,
      'year': year,
      'color': color
    }
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