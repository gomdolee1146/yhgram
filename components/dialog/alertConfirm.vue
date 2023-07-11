<template>
	<div class="confirm">
		<div class="g_modal"></div>
		<div class="confirm__wrap">
			<div class="confirm__title" v-if="confirm.title">{{ confirm.title }}</div>
			<div class="confirm__cont">
				<div>{{ confirm.desc }}</div>
			</div>
			<div class="confirm__btn">
				<button class="confirm__btn-cancel" v-if="confirm.cancelTxt">{{ confirm.cancelTxt }}</button>
				<button class="confirm__btn-done" v-if="confirm.doneTxt">{{ confirm.doneTxt }}</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'alertConfirm',
	data() {
		return {

		}
	},
	props: {
		confirm: { type: Object, default: () => {} }
	},
	methods: {
		
	}

}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/components/dialog/confirm.scss';
</style>