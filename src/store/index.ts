import type IProjetos from "@/interfaces/IProjetos";
import type { InjectionKey } from "vue";
import { createStore, Store } from "vuex";

interface Estado {
  projetos: IProjetos[]
}

export const key: InjectionKey<Store<Estado>> = Symbol()

export const store = createStore<Estado>({
  state: {
    projetos: []
  },
  mutations: {
    "ADICIONA_PROJETO"(state: any, nomeDoProjeto: string) {
      const projeto = {
        id: new Date().toISOString(),
        nome: nomeDoProjeto
      } as IProjetos
      state.projetos.push(projeto)
    },
    "ALTERA_PROJETO"(state: any, projeto: IProjetos) {
      const index = state.projetos.findIndex((proj: any) => proj.id == projeto.id)
      state.projetos[index] = projeto
    },
    "EXCLUIR_PROJETO"(state: any, idProjeto: string) {
      state.projetos = state.projetos.filter((proj: any) => proj.id != idProjeto)
    }
  }
})