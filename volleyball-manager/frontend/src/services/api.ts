import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api", // URL base del backend
});

export interface Jugador {
  id?: number;
  nombre: string;
  dorsal: number;
  experiencia: number;
  posicion: "colocador" | "ala" | "central" | "opuesto" | "libero";
}

// Obtener lista de jugadores
export const getJugadores = async (): Promise<Jugador[]> => {
  const response = await api.get<Jugador[]>("/jugadores");
  return response.data;
};

// Crear nuevo jugador
export const crearJugador = async (jugador: Jugador): Promise<Jugador> => {
  const response = await api.post<Jugador>("/jugadores", jugador);
  return response.data;
};
