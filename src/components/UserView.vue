<template>
  <div class="font-sans">
    <div class="relative min-h-screen flex flex-col sm:justify-center items-center  ">
      <div class="relative sm:max-w-sm w-full">
        <div class="card bg-green-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
        <div class="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
        <div class="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
          <label for="" class="block mt-3 text-2xl text-gray-700 text-center font-semibold">
            Estás a punto de hacer tu lista de deseos, pero antes ...
          </label>
          <div class="mt-10 font-mono">
            <div>
              <label for="nombre">Nombre:</label>
              <input type="text" v-model="nombre" placeholder="Nombre:" required
                class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0">
            </div>
            <div>
              <label for="edad">Edad</label>
              <input type="text" v-model="edad" placeholder="Edad" required
                class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0">
            </div>
            <div>
              <label for="ciudad">Ciudad</label>
              <input type="text" v-model="ciudad" placeholder="Ciudad" required
                class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0">
            </div>
            <div>
              <div class="mb-4">
                <label for="pregunta">¿Te has portado bien este año?</label>
                <input type="text" v-model="ciudad" placeholder=" Respuesta" required
                class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0">
           
              </div>
              
  
              
            </div>
  
            <div class="mt-7">
              <button type="submit"
                class="bg-green-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                Entrar
              </button>
            </div>
  
            <div class="flex mt-7 items-center text-center">
              <hr class="border-gray-300 border-1 w-full rounded-md">
              <label class="block font-medium text-sm text-gray-600 w-full">
                Feliz Navidad
              </label>
              <hr class="border-gray-300 border-1 w-full rounded-md">
            </div>
            <div v-if="weather" class="grid  justify-items-center text-center">
              <img :src="imgUrl" :alt="weather.name" class="w-32 h-32">
              <h2>{{ weather.main.temp }}</h2>
              <p>{{ weather.name }},{{ weather.sys.country }}</p>
            </div>
  
          </div>
  
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserView',
  props: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
