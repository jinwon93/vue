<template>
    <!-- <div>gkgkgkgkgk</div> -->
    <div class="vuex">
            <h1>vuex ddd화면입니다</h1>
    </div>
</template>


<script>
import http from '../http'

export default {
    name:"vuex",
    components : {},
    methods :{},
    created() {
         console.log(http);
    },
};
</script>


<style scoped>
 .main{

    border:solid 5px red;
    padding: 100px;
}
</style>