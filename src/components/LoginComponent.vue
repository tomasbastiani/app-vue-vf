<template>
  <div class="login-container">
    <div class="login-box">
      <h2 class="login-title">Iniciar Sesión</h2>
      <form @submit.prevent="login" class="mt-5">
        <div class="form-group">
          <label for="username">Usuario:</label>
          <input id="username" v-model="username" class="form-control" required>
        </div>
        
        <div class="form-group">
          <label for="password">Contraseña:</label>
          <input id="password" v-model="password" type="password" class="form-control" required>
        </div>
  
        <button type="submit" class="btn btn-primary btn-block mt-3">Iniciar Sesión</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login() {
      this.$router.push('/movies');
      console.log('Iniciando sesión con usuario:', this.username, 'y contraseña:', this.password)
    }
  }
}
</script>

<style scoped>
.login-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-box {
  max-width: 400px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.login-title {
  text-align: center;
  margin-top: 0;
  margin-bottom: 20px;
}
</style>