function create_car(manufacturer: string, model: string, ...kwargs: any[]): Record<string, any> {
    const car: Record<string, any> = {
      manufacturer: manufacturer,
      model: model
    };
  
    for (let i = 0; i < kwargs.length; i += 2) {
      const key = kwargs[i];
      const value = kwargs[i + 1];
      car[key] = value;
    }
  
    return car;
  }
  
  // Calling the function with required information and additional name-value pairs
  const carInfo = create_car('Toyota', 'Corolla', 'color', 'blue', 'year', 2022);
  
  // Printing the returned object
  console.log(carInfo);
  