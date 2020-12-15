<template>
<div class="email_address_item">
<!--html code-->
	<div class="pre_fix_content">
		<input 
			type="text" 
			class="pre_fix" 
			:style="{width:width+'px'}" 
			:value="preFixContent" 
			@input="handleInput" 
			@blur="handleInsert">
		<div 
			class="hidden_content" 
			ref="hiddenContent">
			{{preFixContent}}
		</div>
	</div>
	<div class="content_box">
		<input 
			type="text"  
			v-show="isEdit" 
			class="address_input" 
			ref="contentInput" 
			v-model="localAddress" 
			@blur="handlleConfirmEdit">
		<div 
			class="address_text" 
			v-show="!isEdit" 
			@dblclick="handleDbclick">
			{{localAddress}}
			<span 
				class="icon"  
				@click="handleDelete">
					<icon/>
			</span>
		</div>
	</div>
</div>
</template>

<script>
import Icon from './icon.vue'
export default {
name:'EmailAddressItem',
components:{
	Icon
},
props:{
	address:{
		type:String,
		default:''
	},
	id:{
		type:Number,
		default:0
	}

},
data(){
	return{
		localAddress:'',
		preFixContent:'',
		isEdit:false,
		width:5
	}
},
methods: {
	handlleConfirmEdit(){
		this.isEdit=false
		this.$emit('update',this.localAddress,this.id)
	},
	handleDelete(){
		this.$emit('delete',this.id)
	},
	handleInput(e){
		if(/^[\u4e00-\u9fa5]+$/.test(e.target.value)){
			alert('不支持汉字')
			return
		}
		this.preFixContent=e.target.value
	},
	handleInsert(){
		if(/^[\u4e00-\u9fa5]+$/.test(this.preFixContent)){
			alert('不支持汉字')
			return
		}
		if(this.preFixContent){
			this.$emit('insert',this.preFixContent,this.id)
		}
		this.preFixContent=''
	},
	handleDbclick(){
		this.isEdit=true
		this.$nextTick(()=>{
			this.$refs.contentInput.focus()
		})
	}
},
mounted () {
	this.inputDom=this.$refs.hiddenContent
},
watch:{
	address:{
		handler(){
			this.localAddress=this.address
		},
		immediate:true
	},
	preFixContent(val){
		if(!val){
		this.$nextTick(()=>{
			this.width=5
		})
			return
		}
		this.$nextTick(()=>{

			this.width=this.inputDom.offsetWidth
		})

	}
}
}
</script>

<style scoped lang="less">
.email_address_item {
	display: flex;
	padding-left: 10px;
	.pre_fix_content{
		position: relative;
		height: 30px;
		padding-right: 4px;
		display: flex;
		font-size: 12px;
		align-items: center;
		.hidden_content{
			position: absolute;
			z-index: -1;
			visibility: hidden;
		}
	}
	.pre_fix{
		outline: none;
		background: none;
		border: none;

	}
	.content_box{
		height: 30px;
		display: flex;
		align-items: center;
		.address_text{
			position: relative;
			padding:2px 25px 2px 15px;
			border:1px solid #C2D4E3;
			border-radius: 17px;
			background-color: #e8f0f7;
			font-size: 14px;
			.icon{
				position: absolute;
				right: 5px;
				top:2px;
			}
		}
		.address_input{  
			height: 30px; 
			padding: 0 15px;
			font-size: 14px;
			outline:none;  
			border:none;
			border: 1px solid #dddddd;
			border-radius: 17px;
		}
	}
}

</style>
