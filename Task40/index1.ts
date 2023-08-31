function make_album(artist: string, title: string, tracks?: number): Record<string, any> {
    const album: Record<string, any> = {
      artist: artist,
      title: title
    };
  
    if (tracks !== undefined) {
      album.tracks = tracks;
    }
  
    return album;
  }
  
  // Creating album objects using the make_album function
  const album1 = make_album('Artist 1', 'Album Title 1');
  const album2 = make_album('Artist 2', 'Album Title 2', 12);
  const album3 = make_album('Artist 3', 'Album Title 3', 8);
  
  // Printing the album objects
  console.log(album1);
  console.log(album2);
  console.log(album3);
  