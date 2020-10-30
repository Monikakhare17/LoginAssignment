<template>
    <div>
        Hello {{name}}
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    name:'dashboard',
    props:[
        'name'
    ],
    computed:{
        ...mapGetters({
            fullname: 'getUserFullname'
        })
    }
}
</script>