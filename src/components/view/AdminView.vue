<template> 

<div class="container bg-marco bg-no-repeat bg-contain bg-100 bg-center mx-auto">
    <div class="mt-10 mb-8 block mt-3 text-2xl text-gray-700 text-center font-semibold">
      <h1>Agregar Regalos de Navidad</h1>
    </div>
    <div class="mr-20 mb-8">
      <div class=" flex flex-row justify-center gap-4  ">
        <div class="text-l text-center font-mono my-8">
          <label for="title" class="mr-2">Nombre</label>
          <input v-model="title" type="text"  name="title" class="border border-solid border-red-300 mt-4 w-32 rounded"  
            placeholder="Name" required><br>          
        </div>
  
        <div class="text-l text-center font-mono my-8">
          <label for="UrlImage" class="mr-2">Image URL</label>
          <input type="url" v-model="image" name="url" class="border border-solid border-red-300 mt-4 w-32 rounded"
            placeholder="https://example.com" pattern="https://.*" required><br>
        </div>
      </div>
  
      <div class="flex justify-center">
        <div class="text-l  font-mono my-8 px-8">
          <label for="description">Descripción</label><br>
          <textarea v-model="description"  type="text" id="input-description" name="description"
            class="border border-solid border-red-300 mt-4 w-80 rounded" placeholder="Description" required></textarea>
        </div>
      </div>
      <div class="flex justify-center">
      <button @click="guardar()" class="font-mono text-xl ml-4 border-4 border-white hover:border-b-red-500" type="button"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="red" class="w-10 h-10">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
</button>
    </div>
    </div>
   
</div>
<section class="overflow-hidden text-gray-700 bg-red-400">        
            <div class="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">

                <div class="flex flex-wrap -m-1 md:-m-2 bg-red-400" ><!-- div padre existente -->
                  <div class="flex flex-wrap w-1/4" v-for="project in allProjects" :key="project.image" >
                    <div class="w-full p-1 md:p-2"  >
                    <!--  div hijos que debo añadir las veces de la lista -->
                    <img :src=project.image class="w-48 "> 
                </div>
              </div>
            </div>
            </div>
    </section>


</template>
  
  <script>
  export default {
    name: "AdminView",
    props: [
        'allProjects'
    ],
   
 
  data() {
    return {
      title: "",
      image: "",
      description: "",
    };
  },
  methods: {
    guardar() {
      const project = {                           // creo el proyecto en una variable //crear el objeto//
        title: this.title,
        image: this.image,
        description: this.description,
      }
      console.log(project)

      this.$emit("createProject", project);    //emite y envia 1 proyecto  //recibe el objeto como parametro y crea un nuevo proyecto

      this.title = "",                       //eliminar el valor y poner el input en blanco 
      this.image = "",
      this.description = ""
    },
  },
}

</script>
    
  

 