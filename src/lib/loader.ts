export type TActor = {
    id: number;
    name: string;
    birth_year: number;
    death_year?: number;
    nationality: string;
    known_for: string[];
    awards: string[];
    biography: string;
    image: string;
  };
  
  export async function getActors(): Promise<TActor[]> {
    const response = await fetch("https://freetestapi.com/api/v1/actors");
    const data = response.json();
    return data;
  }
  