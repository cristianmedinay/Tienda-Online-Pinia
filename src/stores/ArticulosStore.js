import {defineStore} from 'pinia'

//STATE
export const useArticulosStore = defineStore('articulosStore',{
    state:()=>({
        listaArticulos:[]
    }),
    getters:{
        getListaArticulos(state){
            return state.listaArticulos
        }
    },
    actions:{
        addItem(producto){
            this.listaArticulos.push(producto)
        }
    }

})