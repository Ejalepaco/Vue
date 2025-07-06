<script lang="ts" setup>
import { ref, onMounted } from "vue";
import Swal from "sweetalert2";
import { getJugadores, crearJugador, type Jugador } from "../services/api";

const jugadores = ref<Jugador[]>([]);
const nuevoJugador = ref<Jugador>({
  nombre: "",
  dorsal: 0,
  experiencia: 0,
  posicion: "colocador",
});

const cargarJugadores = async () => {
  jugadores.value = await getJugadores();
};

const agregarJugador = async () => {
  if (
    !nuevoJugador.value.nombre ||
    nuevoJugador.value.dorsal <= 0 ||
    nuevoJugador.value.experiencia < 0
  ) {
    await Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Por favor, completa todos los campos correctamente",
    });
    return;
  }
  try {
    const creado = await crearJugador(nuevoJugador.value);
    jugadores.value.push(creado);
    await Swal.fire({
      icon: "success",
      title: "¡Jugador agregado!",
      showConfirmButton: false,
      timer: 1500,
    });
    // Reiniciar formulario
    nuevoJugador.value = {
      nombre: "",
      dorsal: 0,
      experiencia: 0,
      posicion: "colocador",
    };
  } catch (error) {
    await Swal.fire({
      icon: "error",
      title: "Error",
      text: "No se pudo agregar el jugador. Intenta de nuevo.",
    });
  }
};

onMounted(() => {
  cargarJugadores();
});
</script>

<template>
  <div class="container mt-4">
    <h2 class="mb-3">Lista de Jugadores</h2>
    <ul class="list-group mb-4">
      <li
        v-for="j in jugadores"
        :key="j.id"
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        <div>
          <strong>{{ j.nombre }}</strong> — Dorsal: {{ j.dorsal }} —
          Experiencia: {{ j.experiencia }} años — Posición:
          <span class="text-capitalize">{{ j.posicion }}</span>
        </div>
      </li>
    </ul>

    <h3 class="mb-3">Agregar Jugador</h3>
    <form @submit.prevent="agregarJugador" class="row g-3">
      <div class="col-md-4">
        <label for="nombre" class="form-label">Nombre</label>
        <input
          id="nombre"
          v-model="nuevoJugador.nombre"
          type="text"
          class="form-control"
          placeholder="Nombre"
          required
        />
      </div>

      <div class="col-md-2">
        <label for="dorsal" class="form-label">Dorsal</label>
        <input
          id="dorsal"
          v-model.number="nuevoJugador.dorsal"
          type="number"
          class="form-control"
          placeholder="Dorsal"
          min="1"
          required
        />
      </div>

      <div class="col-md-3">
        <label for="experiencia" class="form-label">Experiencia (años)</label>
        <input
          id="experiencia"
          v-model.number="nuevoJugador.experiencia"
          type="number"
          class="form-control"
          placeholder="Experiencia"
          min="0"
          required
        />
      </div>

      <div class="col-md-3">
        <label for="posicion" class="form-label">Posición</label>
        <select
          id="posicion"
          v-model="nuevoJugador.posicion"
          class="form-select"
          required
        >
          <option value="colocador">Colocador</option>
          <option value="ala">Ala</option>
          <option value="central">Central</option>
          <option value="opuesto">Opuesto</option>
          <option value="libero">Libero</option>
        </select>
      </div>

      <div class="col-12">
        <button type="submit" class="btn btn-primary">Agregar</button>
      </div>
    </form>
  </div>
</template>
