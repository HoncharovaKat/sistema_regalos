<template>
<div class="container">
  <div class="mt-8">
  <button @click="isAdmin = true, isFamily= false" type="button" class="font-mono text-4xl mr-4 border-4 border-white hover:border-b-red-500">
    Papá Noel
  </button>
  <span class="text-4xl">/</span>
  <button @click="isFamily = true, isAdmin=false" class="font-mono text-4xl ml-4 border-4 border-white hover:border-b-red-500">
    Familia
  </button>
</div>  
</div>
  
<AdminView v-if="isAdmin" @createProject="addProject" :allProjects="allProjects"></AdminView>
<UserView v-if="isFamily"/>
<catalogoFamily/>
  
</template>

<script>
import UserView from './components/UserView.vue'
import AdminView from './components/view/AdminView.vue'
import catalogoFamily from './components/catalogoFamily.vue'

import '@/assets/tailwind.css';

export default {
  name: 'App',
  components: {
    UserView,
    AdminView,  
    catalogoFamily  
  },
  data() {
    return {
      isAdmin: false,
      isFamily:false,
      allProjects: [],                      //array donde se agregan los objetos
    };
  },
  methods: {
    addProject(project) {                   //recibe el proyecto y lo agrega a la array o lista
      this.allProjects.push(project); 
      console.log(this.allProjects)
    },
  },
}
</script>

<style>
#app {
 
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}

</style>
