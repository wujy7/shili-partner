<template>
	<view class="warp">
		<u-swiper
			:list="list1"
			indicator
			height="368rpx"
			indicatorMode="dot"
			@click="click"
		></u-swiper>
		<u-notice-bar :text="text1" speed="40" color="#ff0000" bgColor="#ffffff"></u-notice-bar>
		<view class="car_park" @click="show = true;">
			{{car_number}}
			<u-icon name="arrow-down" color="#999" size="16"></u-icon>
		</view>
		<view class="lattice_box">
			<navigator url="/pages/order/order_partner_jzfq" class="item item_3" hover-class="none">
				<text class="title">家装分期</text>
				<text class="label">家装贷款小助手</text>
				<view class="icon_box">
					<u-icon name="grid-fill" color="#fff" size="32"></u-icon>
				</view>
			</navigator>
			<navigator url="/pages/order/order_partner_fqt" class="item item_4" hover-class="none">
				<text class="title">分期通</text>
				<text class="label">分期贷款更划算</text>
				<view class="icon_box">
					<u-icon name="file-text-fill" color="#fff" size="32"></u-icon>
				</view>
			</navigator>
			<navigator url="/pages/site/parking_log" class="item item_6" hover-class="none">
				<text class="title">大数据测评</text>
				<text class="label">二维码数据测评</text>
				<view class="icon_box">
					<u-icon name="file-text-fill" color="#fff" size="32"></u-icon>
				</view>
			</navigator>
		</view>
		
		<view class="all_title_box">
			<view class="title">业务排名</view>
		</view>
		<view class="div-table fixed-thead">
			<view class="thead">
				<view class="th">
					<view class="td w1">名称</view>
					<view class="td w2">业绩</view>
				</view>
			</view>
			<view class="tbody">
				<view class="tr" v-for="(item,index) in table" :key="index">
					<view class="td w1">{{item.time}}</view>
					<view class="td w2">{{item.title}}</view>
				</view>
			</view>
		</view>
		
		<u-picker
			:show="show"
			:columns="columns"
			:closeOnClickOverlay="true"
			@confirm="car_confirm"
			@cancel="show = false"
			@close="show = false"
		></u-picker>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list1: [
					'/static/coolc/banner_01.jpg',
					'/static/coolc/banner_02.jpg',
					'/static/coolc/banner_03.jpg',
				],
				text1: '今天凌晨系统将进行维护；',
				car_number: "家装分期",
				show: false,
				columns: [
					['家装分期', '分期通']
				],
				table: [{
						time: '李*新',
						title: '本周签单23笔，金额130000元'
					},
					{
						time: '张*良',
						title: '本周签单21笔，金额117000元'
					},
					{
						time: '颜*',
						title: '本周签单17笔，金额97000元'
					},
					{
						time: '张*',
						title: '本周签单15笔，金额94700元'
					},
					{
						time: '吴*',
						title: '本周签单14笔，金额94500元'
					},
					{
						time: '杨*荣',
						title: '本周签单14笔，金额90100元'
					},
					{
						time: '李*克',
						title: '本周签单13笔，金额85100元'
					},
					{
						time: '王*静',
						title: '本周签单12笔，金额83000元'
					},
					{
						time: '天*里',
						title: '本周签单11笔，金额70100元'
					},
					{
						time: '程*',
						title: '本周签单10笔，金额65000元'
					},
				]
			}
		},
		methods: {
			click(e) {
				let urls = '';
				if(e == 0) {
					urls = "";
				}
				if(e== 1) {
					urls = "/pages/site/price_details"
				}
				if(e== 2) {
					urls = "/pages/site/car_log"
				}
				
				//跳转页面
				uni.navigateTo({
					url: urls
				});
			},
			car_confirm(e) {
				this.show = false;
				this.car_number = e.value[0];
			}
		}
	}
</script>

<style lang="scss">
	.warp {
		width: 750rpx;
		padding: 0 30rpx 30rpx 30rpx;
		background: #fff;
	}
	
	.tbody {
		height: 500rpx;
		overflow-y: auto;
		overflow-x: hidden;
	}
	.w1 {
		width: 28%;
		padding-left: 0rpx!important;
		padding-right: 0rpx!important;
	}
	.w2 {
		width: 72%;
		text-align: left;
	}
</style>
