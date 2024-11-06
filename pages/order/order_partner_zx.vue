<template>
	<view class="warp">
		<view class="all_title_box">
			<view class="title">设备列表</view>
			<view class="time" @click="openPopup(popupData1)">
				<text class="t">筛选</text>
				<u-icon name="arrow-down" color="#999" size="16"></u-icon>
			</view>
		
		</view>
		<view class="list_box">
			
			<view class="album" @click="url('/pages/order/order_info?id=1');">
				<view class="album__avatar">
					<u-icon name="bell-fill" color="#fff" size="28"></u-icon>
				</view>
				<view class="album__content">
					<u--text
						text="系统通知"
						bold
						size="14"
					></u--text>
					<u--text
						margin="4px 0"
						color="#999999"
						text="今天 12:12"
						size="12"
					></u--text>
					<u--text
						margin="0 0 8px 0"
						size="13"
						:bold="true"
						text="您有一台车牌识别相机设备状态恢复正常"
					></u--text>
				</view>
			</view>
			
			<view class="album" @click="url('/pages/order/order_info?id=1');">
				<view class="album__avatar">
					<u-icon name="bell-fill" color="#fff" size="28"></u-icon>
				</view>
				<view class="album__content">
					<u--text
						text="系统通知"
						bold
						size="14"
					></u--text>
					<u--text
						margin="4px 0"
						color="#999999"
						text="今天 12:12"
						size="12"
					></u--text>
					<u--text
						margin="0 0 8px 0"
						size="13"
						:bold="false"
						text="您有一台车牌识别相机设备状态恢复正常"
					></u--text>
				</view>
			</view>
			
			<view class="album" @click="url('/pages/order/order_info?id=1');">
				<view class="album__avatar">
					<u-icon name="bell-fill" color="#fff" size="28"></u-icon>
				</view>
				<view class="album__content">
					<u--text
						text="系统通知"
						bold
						size="14"
					></u--text>
					<u--text
						margin="4px 0"
						color="#999999"
						text="今天 12:12"
						size="12"
					></u--text>
					<u--text
						margin="0 0 8px 0"
						size="13"
						:bold="false"
						text="您有一台车牌识别相机设备状态恢复正常"
					></u--text>
				</view>
			</view>
			
			<view class="album" @click="url('/pages/order/order_info?id=1');">
				<view class="album__avatar">
					<u-icon name="bell-fill" color="#fff" size="28"></u-icon>
				</view>
				<view class="album__content">
					<u--text
						text="系统通知"
						bold
						size="14"
					></u--text>
					<u--text
						margin="4px 0"
						color="#999999"
						text="今天 12:12"
						size="12"
					></u--text>
					<u--text
						margin="0 0 8px 0"
						size="13"
						:bold="false"
						text="您有一台车牌识别相机设备状态恢复正常"
					></u--text>
				</view>
			</view>
			
			<view class="album" @click="url('/pages/order/order_info?id=1');">
				<view class="album__avatar">
					<u-icon name="bell-fill" color="#fff" size="28"></u-icon>
				</view>
				<view class="album__content">
					<u--text
						text="系统通知"
						bold
						size="14"
					></u--text>
					<u--text
						margin="4px 0"
						color="#999999"
						text="今天 12:12"
						size="12"
					></u--text>
					<u--text
						margin="0 0 8px 0"
						size="13"
						:bold="false"
						text="您有一台车牌识别相机设备状态恢复正常"
					></u--text>
				</view>
			</view>
			
			<view class="album" @click="url('/pages/order/order_info?id=1');">
				<view class="album__avatar">
					<u-icon name="bell-fill" color="#fff" size="28"></u-icon>
				</view>
				<view class="album__content">
					<u--text
						text="系统通知"
						bold
						size="14"
					></u--text>
					<u--text
						margin="4px 0"
						color="#999999"
						text="今天 12:12"
						size="12"
					></u--text>
					<u--text
						margin="0 0 8px 0"
						size="13"
						:bold="false"
						text="您有一台车牌识别相机设备状态恢复正常"
					></u--text>
				</view>
			</view>
			
			<u-loadmore :status="status" @loadmore="getData"></u-loadmore>
		</view>
		
		<u-popup
			:safeAreaInsetBottom="true"
			:safeAreaInsetTop="true"
			:mode="popupData.mode"
			:show="show"
			:round="popupData.round"
			:overlay="popupData.overlay"
			:borderRadius="popupData.borderRadius"
			:closeable="popupData.closeable"
			:closeOnClickOverlay="popupData.closeOnClickOverlay"
			@close="close"
			@open="open"
		>
			<view
				class="warp"
				:style="{
					width: ['bottom', 'top'].includes(popupData.mode) ? '750rpx' : '200px',
					marginTop: ['left', 'right'].includes(popupData.mode) ? '480rpx' : '0',
				}"
			>
			
			
			

					<!-- 注意，如果需要兼容微信小程序，最好通过setRules方法设置rules规则 -->
					<u--form
						labelPosition="left"
						:model="model1"
						ref="form1"
					>
						<u-form-item
							label="客户姓名"
							prop="userInfo.name"
							labelWidth="80"
							borderBottom
							ref="item1"
						>
							<u--input
								v-model="model1"
								border="none"
								
								placeholder="姓名,只能为中文"
							></u--input>
						</u-form-item>
						
						<u-form-item
							label="订单状态"
							prop="checkboxValue1"
							borderBottom
							labelWidth="80"
							ref="item3"
						>
							<u-checkbox-group
								v-model="model1"
								shape="square"
								@change="change"
							>
								<u-checkbox
									:customStyle="{marginRight: '16px'}"
									v-for="(item, index) in checkboxList1"
									:key="index"
									:label="item.name"
									:name="item.name"
								>
								</u-checkbox>
							</u-checkbox-group>
						</u-form-item>
						<u-form-item
							label="订单时间"
							prop="userInfo.name"
							labelWidth="80"
							borderBottom
							ref="item1"
						>
							<u--input
								v-model="model1"
								border="none"
								placeholder="姓名,只能为中文"
							></u--input>
						</u-form-item>


				</u--form>
			
			
					<u-button
						type="primary"
						text="查询"
						customStyle="margin-top: 50px"
						@click="submit"
					></u-button>

			</view>
		</u-popup>
		

	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				popupData: {
					overlay: true,
					mode: 'bottom',
					borderRadius: '',
					closeable: true,
					closeOnClickOverlay: true
				},
				popupData1: {
					overlay: true,
					mode: 'bottom',
					round: 10,
					closeOnClickOverlay: true
				},
				car_number: "西校区公共停车场",
				columns: [
					['西校区公共停车场', '西校区职工停车场', '总校1停车场', '总校2停车场']
				],
				checkboxList1: [{
						name: '羽毛球',
						disabled: false
					},
					{
						name: '跑步',
						disabled: false
					},
					{
						name: '爬山',
						disabled: false
					}
				],
				photo: [{
					name: "西校区侧门车场入口1车道",
					urls: [
						"/static/coolc/u610.png"
					],
					label: "2021-11-11 15:05"
				},
				{
					name: "西校区侧门车场入口1车道",
					urls: [{
						src: "/static/coolc/u610.png"
					}],
					label: "2021-11-11 15:05"
				},
				{
					name: "西校区侧门车场入口1车道",
					urls: [{
						src: "/static/coolc/u610.png"
					}],
					label: "2021-11-11 15:05"
				},
				{
					name: "西校区侧门车场入口1车道",
					urls: [{
						src: "/static/coolc/u610.png"
					}],
					label: "2021-11-11 15:05"
				}]
			}
		},
		onLoad() {
			this.getData();
		},
		onReachBottom() {
			
			this.getData();
		},
		methods: {
			openPopup(popupData) {
				this.popupData = popupData
				uni.$u.sleep().then(() => {
					this.show = !this.show
				})
			},
			car_confirm(e) {
				this.show = false;
				this.car_number = e.value[0];
			},
			btnClick() {
				uni.showToast({
				    title: '开闸请求已发送',
					icon: 'none',
				    duration: 2000
				});
			},
			getData(){
				uni.showToast({
				    title: '开闸请求已发送',
					icon: 'none',
				    duration: 2000
				});
			},
			url(url) {
				uni.navigateTo({
					url: url
				});
			}
		}
	}
</script>

<style lang="scss">
	.warp {
		padding: 30rpx;
		background: #fff;
		border-top: 2rpx solid #f5f5f5;
	}
	

	.list_box {
		width: 100%;
		padding: 10rpx 0;
		border-top: 2rpx solid #eee;
	}
	.album {
		width: 750rpx;
		padding: 20rpx 30rpx;
		@include flex;
		align-items: flex-start;
	
		&__avatar {
			width: 90rpx;
			height: 90rpx;
			background-color: #3d7eff;
			border-radius: 50rpx;
			@include flex;
			justify-content: center;
			align-items: center;
		}
	
		&__content {
			margin-left: 20rpx;
			flex: 1;
			padding-bottom: 15rpx;
			border-bottom: 2rpx solid #ccc;
		}
	}
	
</style>
