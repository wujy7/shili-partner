<template>
	<view class="warp">
		<view class="u-page">
		
			<view class="u-demo-block">

				<view class="all_title_box">
					<view class="title">基本信息</view>
				</view>
				<view class="u-demo-block__content">
					<u--form
					labelPosition="left"
					:model="model1"
					ref="form1">
						<u-form-item
							label="姓名"
							prop="order.name"
							borderBottom
							ref="item1"
						>
							<u--input
								v-model="model.order.name"
								border="none"
								placeholder="客户姓名"
							></u--input>
						</u-form-item>
						<u-form-item
							label="电话"
							prop="order.phon"
							borderBottom
							ref="item1"
						>
							<u--input
								v-model="model.order.phon"
								border="none"
								placeholder="客户电话"
							></u--input>
						</u-form-item>
						<u-form-item
							label="地址"
							prop="order.address"
							borderBottom
							ref="item1"
						>
							<AddressPicker @change="change" :level="3">{{model.order.address}} </AddressPicker>
						</u-form-item>
						<u-form-item
							label="小区"
							prop="order.xiaoqu"
							borderBottom
							ref="item1"
						>
							<u--textarea
								placeholder="请输入小区全称"
								v-model="model.order.xiaoqu"
								count
							></u--textarea>
						</u-form-item>
						<u-form-item
							label="面积"
							prop="order.area"
							borderBottom
							ref="item1"
						>
							<u--input
								v-model="model.order.area"
								border="none"
								placeholder="㎡"
							></u--input>
						</u-form-item>
						
						<u-form-item
							label="社保"
							prop="order.shebao"
							borderBottom
							ref="item1"
						>
							<u-radio-group v-model="model.order.shebao">
								<u-radio
									:customStyle="{marginRight: '16px'}"
									v-for="(item, index) in model.onOff"
									:key="index"
									:label="item.name"
									:name="item.code"
								></u-radio>
							</u-radio-group>
						</u-form-item>
						
					
						<u-form-item
							label="社保金额"
							prop="order.shebaoNum"
							labelWidth="80"
							borderBottom
							ref="item1"
						>
							<u--input
								v-model="model.order.shebaoNum"
								border="none"
								placeholder="元"
							></u--input>
						</u-form-item>
						
						
						
						
						
						
						<u-form-item
							label="公积金"
							prop="order.gjj"
							labelWidth="60"
							borderBottom
							ref="item1"
						>
							<u-radio-group v-model="model.order.gjj">
								<u-radio
									:customStyle="{marginRight: '16px'}"
									v-for="(item, index) in model.onOff"
									:key="index"
									:label="item.name"
									:name="item.code"
								></u-radio>
							</u-radio-group>
						</u-form-item>
						
							
							
							
							
							
						<u-form-item
							label="公积金金额"
							prop="order.gjjNum"
							labelWidth="100"
							borderBottom
							ref="item1"
						>
							<u--input
								v-model="model.order.gjjNum"
								border="none"
								placeholder="元"
							></u--input>
						</u-form-item>
							
							
							
							
							
						<u-form-item
							label="学历"
							prop="order.xueli"
							borderBottom
							ref="item1"
						>
							<u-radio-group v-model="model.order.xueli">
								<u-radio
									:customStyle="{marginRight: '16px'}"
									v-for="(item, index) in model.xueli"
									:key="index"
									:label="item.name"
									:name="item.code"
								>
								</u-radio>
							</u-radio-group>
						</u-form-item>
							
							

							
						</u--form>
					
					<view class="all_title_box">
						<view class="title">征信情况</view>
					</view>
					<view class="u-demo-block__content">
						
						<view class="div-table fixed-thead">

							<view class="tbody">
								<view class="tr" v-for="(item,index) in table" :key="index">
									<view class="td w1">{{item.time}}</view>
									<view class="td w2">{{item.title}}</view>
									<view class="td w3">
										<u-button
											class="button-layout__item"
											text="删除"
											size="mini"
											type="warning"
										></u-button>
										
									</view>
								</view>
							</view>
						</view>
						
						<u-button
							text="添加征信记录"
							size="normal"
							type="warning"
							 @click="btnClick"
							plain
						></u-button>
					
					</view>
					
					<view class="all_title_box">
						<view class="title">签约信息</view>
					</view>
					<view class="u-demo-block__content">
					<u--form
					labelPosition="left"
					:model="model1"
					ref="form1">
					
						<u-form-item
							label="签约"
							prop="order.qianyue"
							borderBottom
							ref="item1"
						>
							<u-radio-group v-model="model.order.qianyue">
								<u-radio
									:customStyle="{marginRight: '16px'}"
									v-for="(item, index) in model.qianyue"
									:key="index"
									:label="item.name"
									:name="item.code"
								>
								</u-radio>
							</u-radio-group>
						</u-form-item>

						
					
						<u-form-item
							label="时间"
							prop="order.qianyueTime"
							borderBottom
							@click="showQianyueTime = true; hideKeyboard()"
							ref="item1"
						>
							<u--input
								v-model="model.order.qianyueTime"
								disabled
								disabledColor="#ffffff"
								placeholder="请选择签约时间"
								border="none"
							></u--input>
							<u-icon
								slot="right"
								name="arrow-right"
							></u-icon>
						</u-form-item>



						<u-form-item
							label="备注"
							prop="order.qianyueRemark"
							borderBottom
							ref="item3"
						>
							<u--textarea
								placeholder="签约备注信息"
								v-model="model.order.qianyueRemark"
								count
							></u--textarea>
						</u-form-item>

						

						
							
							

							
						</u--form>
					
					</view>
					

					
					<u-button
						type="primary"
						text="下一步"
						customStyle="margin-top: 50px"
						@click="submit"
					></u-button>
					<u-button
						type="error"
						text="重置"
						customStyle="margin-top: 10px"
						@click="reset"
					></u-button>
					
					
					<u-datetime-picker
						:show="showQianyueTime"
						:value="model.order.qianyueTime"
						mode="date"
						closeOnClickOverlay
						@confirm="qianyueTimeConfirm"
						@cancel="qianyueTimeClose"
						@close="qianyueTimeClose"
					></u-datetime-picker>




					<u-popup
					:show="show"
					:value="model.order.qianyueTime"
					mode="bottom"
					closeOnClickOverlay
					@confirm="open"
					@cancel="close"
					@close="close"
					

					>
						<view class="warp">
						
								<u--form
									labelPosition="left"
									:model="model1"
									ref="form1"
								>
									<u-form-item
										label="银行"
										prop="order.name"
										borderBottom
										ref="item1"
									>
										<u--input
											v-model="model.order.name"
											border="none"
											placeholder="贷款银行"
										></u--input>
									</u-form-item>
									<u-form-item
										label="金额"
										prop="order.name"
										borderBottom
										ref="item1"
									>
										<u--input
											v-model="model.order.name"
											border="none"
											placeholder="贷款金额"
										></u--input>
									</u-form-item>

							</u--form>
						
						
								<u-button
									type="primary"
									text="添加"
									customStyle="margin-top: 50px"
									@click="submit"
								></u-button>

						</view>
					</u-popup>
		
		
		
				</view>
			</view>
		</view>
		
		
	</view>
	
</template>

<script>
	import AddressPicker from "@/components/address-picker/AddressPicker.vue"
	export default {
		components:{
			AddressPicker
		},
		data() {
			return {
				model: {
					order: {
						name: '',
						phon: '',
						address: '请选择地址',
						xiaoqu: '',
						area: '',
						shebao: '1',
						shebaoNum: '',
						gjj: '1',
						gjjNum: '',
						xueli: '0',
						qianyue:'0',
						qianyueTime:''
					},
					address:'请选择地址',
					onOff: [{
							name: '有',
							code: '0',
							disabled: false
						},
						{
							name: '无',
							code: '1',
							disabled: false
						}
					],
					xueli: [{
							name: '全日制本科或以上',
							code: '0',
							disabled: false
						},
						{
							name: '其他',
							code: '1',
							disabled: false
						}
					],
					qianyue: [{
							name: '单签',
							code: '0',
							disabled: false
						},
						{
							name: '双签',
							code: '1',
							disabled: false
						}
					]
				},
				showQianyueTime:false,
				show: false,
				popupData: {
					overlay: true,
					mode: 'bottom',
					borderRadius: '',
					closeable: true,
					closeOnClickOverlay: true
				}
				

			}
		},
		onReady() {
			// 如果需要兼容微信小程序，并且校验规则中含有方法等，只能通过setRules方法设置规则
			
		},
		methods: {
			openPopup(popupData) {
				this.popupData = popupData
				uni.$u.sleep().then(() => {
					this.show = !this.show
				})
			},
			change(result) {
				 console.log(JSON.stringify(result.data));
				  this.model.order.address = ''; 
				  result.data.forEach( (item,index) =>{
					  if(index===0){
						   this.model.order.address += item.name
					  }else{
						  this.model.order.address += '-' +item.name  
					  }
				  }) ;
				  let arr =this.model.order.address.split('-');
				  console.log(arr)
			},
			
			
			
			qianyueTimeClose() {
				this.showQianyueTime = false
				this.$refs.form1.validateField('order.qianyueTime')
			},
			qianyueTimeConfirm(e) {
				this.showQianyueTime = false
				this.model.order.qianyueTime = uni.$u.timeFormat(e.value, 'yyyy-mm-dd')
				this.$refs.form1.validateField('order.qianyueTime')
			},
			hideKeyboard() {
				uni.hideKeyboard()
			},
			close() {
				this.show = false;
			},
			open() {
				// console.log('open');
			},
			btnClick() {
				this.show = true;
			}
		},

		
	}
</script>

<style lang="scss">
	.warp {
		width: 750rpx;
		padding: 30rpx;
		background: #fff;
		border-top: 2rpx solid #ededed;
	}
	.w1 {
		width: 45%;
		padding-left: 0rpx!important;
		padding-right: 0rpx!important;
	}
	.w2 {
		width: 30%;
		text-align: left;
	}
	.w3 {
		width: 25%;
		text-align: left;
	}
</style>
