import {defineStore} from 'pinia'
//
//STATE
export const useArticulosStore = defineStore('articulosStore',{
    state:()=>({
        listaArticulos:[],
        deporte:[],
        informatica:[],
        
    }),
    getters:{
        getListaArticulos(state){
            return state.listaArticulos
        },
        countDeporte(state){        
            return state.listaArticulos
        }
    },
    actions:{
        addItem(producto){
            this.listaArticulos.push(producto)
        }
    }

})