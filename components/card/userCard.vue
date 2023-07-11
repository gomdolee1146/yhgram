<template> 
 <div class="user__list">
	<div class="user__thumb">
		<img />
		<span class="user__thumb-cnt" v-if="userInfo.thumb.length > 1"> {{ userInfo.thumb.length }} </span>
		<!-- <span class="user__thumb-txt"></span> -->
	</div>
	<div class="user__info">
		<div class="user__row">
			<slot name="rowTop"></slot>
		</div>
		<div class="user__row">
			<slot name="rowBtm"></slot>
		</div>
	</div>
	<div class="user__badge"></div>
	<slot name="user__side"></slot>
 </div>
</template>

<script>
export default {
	name:'',
	components:{},
	layout:'default',  
	props:{
		userInfo: { type: Object, default: () => {} }
	},
	data(){
		return{
		}
	},
	methods:{
	}

}
</script>