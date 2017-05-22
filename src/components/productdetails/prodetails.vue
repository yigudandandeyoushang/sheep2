<template>
	<div>
		<div class="content">
			<div class="title"></div>
			<img src="" alt="">
			<span>RMB:32/斤</span>
			<span>生产地:内蒙古-锡林浩特</span>
			<div></div>
			<p class="Origin">1111111</p>
			<img src="">
			<p></p>
			<img src="">
			<div>
				<ul>
					<li>产品品牌</li>
					<li>产品名称</li>
					<li>包装规格</li>
					<li>产品类型</li>
					<li>生产日期</li>
				</ul>
				<ul>
					<li>唐人</li>
					<li>羊肉</li>
					<li>200克</li>
					<li>内类产品</li>
					<li>12月</li>
				</ul>
			</div>
			<p>温情提示:建议-18°C下冷藏储藏</p>
			<p>生产地址</p>
			<p>电话</p>
			<p>时间</p>
		</div>
	</div>
</template>
<script>
export default{
	props:{
		//['commodityList']
	},
	data(){
		return{
			datailShow:false,
			commodityList:[]
			//console.log(this.commodityList)
		}
	},
	mounted(){
		//console.log(commodityList[0])
	},
	methods:{
	}
}
</script>
<style scoped>
.content{
	position: absolute;
	top:0;
	left: 0;
}
</style>