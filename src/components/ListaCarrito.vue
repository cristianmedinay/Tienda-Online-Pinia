<template>
    <div>
        <h1 class="title">Productos en Vitrina</h1>
        <h3 class="subtitle">Agregar Productos al carrito</h3>
        <div class="columns is-multiline is-mobile">
            <div class="card" v-for="producto in getListaArticulos" :key="producto.id">
                <div class="card-image">
                    <figure class="image is-4by3">
                    <img :src="producto.main_image" >
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media">
                       
                        <div class="media-content">
                            <p class="title is-4">{{ producto.name }}</p>
                            <p class="subtitle is-6">@johnsmith</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { useArticulosStore } from '@/stores/ArticulosStore.js'
import { mapState } from 'pinia'


export default {

    
    computed:{
        ...mapState(useArticulosStore,['getListaArticulos'])
    },
}
</script>

<style lang="scss" scoped>

</style>