function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
      console.log(magician);
    }
  }
  
  function make_great(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
    for (const magician of magicians) {
      greatMagicians.push(`the Great ${magician}`);
    }
    return greatMagicians;
  }
  
  // Original array of magician's names
  const magicianNames: string[] = ['David Copperfield', 'Harry Houdini', 'Penn Jillette', 'Teller'];
  
  // Creating a copy of the original array
  const originalMagicians: string[] = magicianNames.slice();
  
  // Calling the make_great function with a copy of the array to get a modified array
  const greatMagicians = make_great(originalMagicians);
  
  // Calling the show_magicians function with both arrays
  console.log("Original Magicians:");
  show_magicians(originalMagicians);
  
  console.log("\nGreat Magicians:");
  show_magicians(greatMagicians);
  