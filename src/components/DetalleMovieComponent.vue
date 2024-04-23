<template>
  <div>
    <div class="back-button-container">
      <button @click="goBack" class="back-button">Back</button>
    </div>
    <div class="movie-details-container">
      <div class="movie-details-content">
        <div class="movie-details-header" :style="{ backgroundImage: 'url(' + moviesDetail.Poster + ')' }">
          <h2>{{ moviesDetail.Title }}</h2>
        </div>
        <table class="table">
          <tbody>
            <tr>
              <td>Título:</td>
              <td>{{ moviesDetail.Title }}</td>
            </tr>
            <tr>
              <td>Año:</td>
              <td>{{ moviesDetail.Year }}</td>
            </tr>
            <tr>
              <td>Clasificación:</td>
              <td>{{ moviesDetail.Rated }}</td>
            </tr>
            <tr>
              <td>Director:</td>
              <td>{{ moviesDetail.Director }}</td>
            </tr>
            <tr>
              <td>Actores:</td>
              <td>{{ moviesDetail.Actors }}</td>
            </tr>
            <tr>
              <td>Argumento:</td>
              <td>{{ moviesDetail.Plot }}</td>
            </tr>
            <tr>
              <td>Premios:</td>
              <td>{{ moviesDetail.Awards }}</td>
            </tr>
            <tr>
              <td>Idioma:</td>
              <td>{{ moviesDetail.Language }}</td>
            </tr>
          </tbody>
        </table>
        <button @click="openEditModal" class="btn btn-primary">Editar</button>
        
        <!-- Modal edición -->
        <div class="modal" v-if="showEditModal">
          <div class="modal-content">
            <label for="editTitle">Título:</label>
            <input id="editTitle" v-model="editedMovie.Title" class="form-control">
            <input id="editTitle" v-model="editedMovie.Year" class="form-control">
            <input id="editTitle" v-model="editedMovie.Rated" class="form-control">
            <input id="editTitle" v-model="editedMovie.Director" class="form-control">
            <input id="editTitle" v-model="editedMovie.Actors" class="form-control">
            <input id="editTitle" v-model="editedMovie.Plot" class="form-control">
            <input id="editTitle" v-model="editedMovie.Awards" class="form-control">
            <input id="editTitle" v-model="editedMovie.Language" class="form-control">
            <button @click="updateMovie" class="btn btn-primary">Actualizar</button>
            <button @click="closeEditModal" class="btn btn-secondary">Cancelar</button>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    selectedMovie: Object
  },
  data() {
    return {
      moviesDetail: {},
      editedMovie: {},
      showEditModal: false
    };
  },
  async created() {
    this.getMovies();
  },
  methods: {
    getMovies() {
      this.moviesDetail = this.selectedMovie;
      this.editedMovie = { ...this.selectedMovie };
    },
    goBack() {
      location.href = 'movies';
    },
    openEditModal() {
      this.showEditModal = true;
    },
    closeEditModal() {
      this.showEditModal = false;
    },
    updateMovie() {
      console.log('Película actualizada:', this.editedMovie);
      this.closeEditModal();
    }
  }
};
</script>

<style scoped>
.movie-details-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.movie-details-content {
  max-width: 800px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
}

.movie-details-header {
  background-size: cover;
  background-position: center;
  height: 300px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 24px;
  font-weight: bold;
}

.movie-details-header h2 {
  text-align: center;
  margin: 0;
}

.table {
  width: 100%;
}

.table td {
  padding: 10px;
}

.table td:first-child {
  font-weight: bold;
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

.modal {
  display: block;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  border-radius: 5px;
}

.modal-content button{
  width: 20%;
  margin-right: auto;
  margin-left: auto;
  margin-top: 10px;
}
</style>