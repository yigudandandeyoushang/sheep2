<template>
	<div>
		<ul class="commodity">
			<li @click="getConten" v-if="!datailShow" v-for="clist in commodityList">
				<p class="commodity-title text-center">{{ clist.com_title }}</p>
				<div class="commodity-pic clearfix">
					<img class="pull-left" :src="clist.pic_contenUrl" alt="">
					<img class="pull-right" :src="clist.pic_introUrl" alt="">
				</div>
				<p class="commodity-feature clearfix">
					<i v-for="trait in clist.com_trait">{{ trait }}</i>
				</p>
			</li>
		</ul>
		<proDetail :commodityList="commodityList" else="datailShow" v-show="datailShow"></proDetail>
	</div>
</template>

<script>
import proDetail from 'components/productdetails/prodetails.vue'
export default{
	created(){
		this.$http.get('api/getChanpinList')
		.then((res)=>{
			//console.log(res.data[0].pic_contenUrl)
			this.commodityList = res.data
			console.log(this.commodityList)
		},(err)=>{
			console.log(err)
		})
	},
	data () {
		return{
			commodityList:[],
			datailShow:false
		}
	},
	methods:{
		getConten(){
			this.datailShow = true
		}
	},
	components:{
		proDetail
	}
}
</script>

<style scoped>
.commodity{
	padding: 0.4rem;
}
.commodity li{
	background: #fff;
	border-radius: 1.0rem;
	padding: 0.6rem;
	margin-bottom: 0.8rem;
}
.commodity-title{
	font-size: 3.2rem;

}
.commodity-feature i{
	margin-left: 0.3rem;
	float: right;
	height: 1.5rem;
	font-size: 1.8rem;
	line-height: 1.8rem;
	color: #aaa;
	border: 0.1rem solid #aaa;
	border-radius: 2.6rem;
	padding: 0.3rem 1.2rem;
}
.pull-left{
	width:70%;
}
.pull-right{
	width: 30%;
}
</style>