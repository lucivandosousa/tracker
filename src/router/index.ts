import Projetos from "@/views/Projetos.vue"
import Formulario from "@/views/Projetos/Formulario.vue"
import Tarefas from "@/views/Tarefas.vue"
import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router"

const rotas: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Tarefas",
    component: Tarefas  
  },
  {
    path: "/projetos",
    name: "Projetos",
    component: Projetos
  },
  {
    path: "/projetos/novo",
    name: "Novo Projeto",
    component: Formulario
  },
  {
    path: "/projetos/:id",
    name: "Editar Projeto",
    component: Formulario
  }
]

const roteador = createRouter({
  history: createWebHistory(),
  routes: rotas
})

export default roteador