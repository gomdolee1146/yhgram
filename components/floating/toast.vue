<template> 
    <div class="toast">
        {{ toast }}
    </div>
</template>

<script>
export default {
    name:'',
    components:{},
    layout:'default',  
    props:{
        toast: { type: String, default: '' },
    },
    data(){
        return{
        }
    },
    methods:{
        // 토스트 fadeOut
        onCls() {}

    },
    mounted() {
        // 토스트가 여러번 올라오는 상황에서 중복 토스트 처리하기
    }
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/components/floating/toast.scss';
</style>
