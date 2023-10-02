<template>
    <div>
        <h1>Computed</h1>
        <input type="text" name="" v-model="message">
        <input type="number"  v-model="subtotal">
        <h3>{{ message }}</h3>

        <p>{{ reverse }}</p>
        <p>{{ totalVat }} {{ vat }}</p>
    </div>
</template>

<script>
import { ref,computed} from 'vue';


export default {
    name: 'ComputedExamp',

    setup(){
        const vat = 21
        let subtotal=ref(10);
        let totalVat=ref(0);      
        totalVat = computed(()=> (vat*subtotal.value)/100)

        let message= ref('')
        const reverse = computed(()=>message.value.split('').reverse().join(''))
        return {message, reverse, totalVat, vat, subtotal }
    }

  /*   data() {
        return {
            message:''
        };
    },
    props: {},

    components: {},

    created() {},

    mounted() {},

    methods: {},

    computed: {
        reverse(){
            return this.message.split('').reverse().join('')
        }
    },
 */

};
</script>

<style scoped lang="scss">
* {
    margin: 0;
}
</style>
