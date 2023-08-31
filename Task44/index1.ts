function order_sandwich(...items: string[]): void {
    console.log("Sandwich ordered with the following items:");
    for (const item of items) {
      console.log(`- ${item}`);
    }
    console.log("\n");
  }
  
  // Calling the function with different numbers of arguments
  order_sandwich('Ham', 'Cheese');
  order_sandwich('Turkey', 'Lettuce', 'Tomato', 'Mayonnaise');
  order_sandwich('Tuna', 'Onion', 'Pickles');
   