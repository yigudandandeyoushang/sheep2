<template>
	<div>
		<div class="app-searchBar">
			<input class="imp-search" type="text" name="">
		</div>
		<div class="app-content">
			<keep-alive>
				<router-view>
				</router-view>
			</keep-alive>
		</div>
		<div class="app-footer">
			<div>
				每日精选
			</div>
			<div>
				购物车
			</div>
			<div>
				我的
			</div>
		</div>
	</div>
</template>

<script>
export default{
	data(){
		return{
			
		}
	}
}
</script>
<style>
@import './assets/normalize.css'
</style>
<style>

.imp-search{
	width:30rem;
	height: 5.8rem;
	border-radius:5.0rem;
	padding-left: 2.8rem
}
</style>