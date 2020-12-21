<template>
<div class="email_address">
	<email-address-item
		v-for="(item,index) in list"
		:address="item"
		:key="index"
		:id="index"
		:ref="`item_${index}`"
		@insert="handleInsert"
		@delete="handleDelete"
		@update="handleUpdate"
		@input="handleInput"
		v-on="$listeners"
	/>
	<div class="post_fix_content">
		<input 
			type="text" 
			class="post_fix"
			:style="{width:width+'px'}" 
			:value="postFixContent"
			@input="handleInputPostFix"
			@blur="handleInsertTailOfList">
		<div 
			class="hidden_content" 
			ref="hiddenContent">
			{{postFixContent}}
		</div>
</div>
</div>
</template>

<script>
import EmailAddressItem from './email_address_item.vue'
export default {
name:'EmailAddress',
components:{
	EmailAddressItem
},
props:{
	value:{
		type:Array,
		default(){
			return []
		}
	}
},
model: {
	event: 'update:value'
},
data(){
	return{
		list:[],
		width:5,
		postFixContent:''
	}
},
mounted () {
	this.inputDom=this.$refs.hiddenContent
},
methods: {
	handleUpdate(data,index){
		if(this.$listeners.onBlur){
			let flag=	this.$listeners.onBlur(data,index,this.list)
			if(!flag){
				this.$nextTick(()=>{
					this.$refs[`item_${index}`][0].localAddress=this.list[index]
				})
					return
			}
		}
		let arr=[]
		arr[index]=data
		this.list=Object.assign([],this.list,arr)
		this.$emit('update:value',this.list)
	},
	handleInsert(data,index){
		if(this.$listeners.onBlur){
			let flag=	this.$listeners.onBlur(data,index,this.list)
			if(!flag){
				this.$nextTick(()=>{
					this.$refs[`item_${index}`][0].preFixContent=''
				})
					return
			}
		}
		this.list.splice(index,0,data)
		this.$emit('update:value',this.list)
	},
	handleDelete(index){
		this.list.splice(index,1)
		this.$emit('update:value',this.list)
	},
	handleInput(data){
		this.$emit('onInput',data,this.list)
	},
	handleInputPostFix(e){
		this.postFixContent=e.target.value
	},
	handleInsertTailOfList(){
		if(this.postFixContent){
			if(this.$listeners.onBlur){
				let flag=	this.$listeners.onBlur(this.postFixContent,this.list.length,this.list)
				if(!flag){
					this.postFixContent=''
					return
				}
			}
			this.list.push(this.postFixContent)
			this.$emit('update:value',this.list)
		}
		this.postFixContent=''
	},
},
watch:{
	postFixContent(val){
		if(!val){
		this.$nextTick(()=>{
			this.width=5
		})
			return
		}
		this.$nextTick(()=>{
			this.width=this.inputDom.offsetWidth
		})
	},
	value:{
		handler(val){
			this.list=Object.assign([],this.value,val)
		},
		immediate:true
	}
}
}
</script>

<style scoped lang="less">
.email_address {
	/* less */
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	.post_fix_content{
		position: relative;
		height: 30px;
		padding-left: 10px;
		display: flex;
		font-size: 12px;
		align-items: center;
		.post_fix{
		outline: none;
		background: none;
		border: none;
	}
		.hidden_content{
			position: absolute;
			z-index: -1;
			visibility: hidden;
		}
	}

}

</style>
