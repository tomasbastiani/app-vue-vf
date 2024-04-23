<template>
  <section v-if="!mostrar_detalle">
    <div class="back-button-container">
      <button @click="goBack" class="back-button">Back</button>
    </div>
    <h1 class="page-title">Listado de Películas</h1>
    <div class="movie-details" @click="detalle()">
      <h2>{{ movie.Title }}</h2>
      <div class="card">
        <img :src="movie.Poster" class="card-img-top" alt="Poster de la película">
      </div>
    </div>
  </section>
  <DetalleMovieComponent v-if="mostrar_detalle" :selectedMovie="selectedMovie" @ocultarDetalle="ocultarDetalle"></DetalleMovieComponent>
</template>
  
<script>
import DetalleMovieComponent from "@/components/DetalleMovieComponent.vue";
export default {
  components: {
    DetalleMovieComponent
  },
  data() {
    return {
      movie: {},
      mostrar_detalle: false,
      selectedMovie: {}
    };
  },
  created() {
    this.fetchMovie();
  },
  methods: {
    async fetchMovie() {
      try {
        const response = await fetch('https://www.omdbapi.com/?i=tt3896198&apikey=a2c5d1a5');
        const data = await response.json();
        this.movie = data;
      } catch (error) {
        console.error('Error al obtener la película:', error);
      }
    },
    detalle() {
      this.mostrar_detalle = true;
      this.selectedMovie = this.movie;
      console.log('Mostrando detalle de la película', this.selectedMovie);
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    },
    goBack(){
      location.href = '/';
    }
  }
};
</script>
  
<style scoped>
.page-title {
  text-align: center;
}

.movie-details {
  padding: 20px;
  margin: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 200px;
  transition: box-shadow 0.3s;
}

.movie-details:hover {
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
}

h2{
  font-size: 25px;
}

.card-img-top {
  width: 100%;
  height: auto;
  max-width: 200px;
}

.back-button-container {
  align-self: flex-start;
  margin-top: 20px;
  margin-left: 20px;
}

.back-button {
  display: flex;
  align-items: center;
  padding: 5px 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.back-button i {
  margin-right: 5px;
}

.back-button:hover {
  background-color: #0056b3;
}
</style>