export type CarEntity = {
    id: number
    model: string;
    licensePlate: string;
    year: number;
    color: string;
  };
  
  export type Car = Omit<CarEntity, "id">;
  