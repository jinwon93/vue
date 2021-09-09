<template>
    <h1 class="mt-4">Vue3 기초 익히기</h1>
        
</template>

<script>
import {useCount} from '@/composables/count';
//todoLIst index main vue
export default {
    setup(){
        const {count} =useCount();
        return{
            count
        }
    }    
}
</script>


<style>

</style>