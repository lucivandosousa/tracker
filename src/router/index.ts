import Tarefas from "@/views/Tarefas.vue"
import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router"

const rotas: RouteRecordRaw[] = [{
  path: "/",
  name: "Tarefas",
  component: Tarefas
}]

const roteador = createRouter({
  history: createWebHistory(),
  routes: rotas
})

export default roteador