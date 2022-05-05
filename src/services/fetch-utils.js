import { client } from './client.js';

export async function getAlbums() {
  const response = await client
    .from('Albums')
    .select('*');
  
  return response.body;
}

export async function getAnimals() {
  const response = await client
    .from('Animals')
    .select('*');
    
  return response.body;
}

export async function getMovies() {
  const response = await client
    .from('Movies')
    .select('*');
      
  return response.body;
}

export async function getGames() {
  const response = await client
    .from('VideoGames')
    .select('*');
    
  return response.body;
}