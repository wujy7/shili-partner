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
			<navigator url="" class="item item_1" hover-class="none">
				<view class="lines">
					<text class="title">今日收益</text>
					<text class="price">￥238.00</text>
				</view>
				<view class="lines">
					<text class="titles">入场/出场</text>
					<text class="nums">99 / 102</text>
				</view>
			</navigator>
			<navigator url="" class="item item_2" hover-class="none">
				<view class="lines">
					<text class="title">昨日收益</text>
					<text class="price">￥458.00</text>
				</view>
				<view class="lines">
					<text class="titles">入场/出场</text>
					<text class="nums">99 / 102</text>
				</view>
			</navigator>
			<navigator url="/pages/site/facility" class="item item_3" hover-class="none">
				<text class="title">设备信息</text>
				<text class="label">手机一键开闸</text>
				<view class="icon_box">
					<u-icon name="grid-fill" color="#fff" size="32"></u-icon>
				</view>
			</navigator>
			<navigator url="/pages/site/parking_log" class="item item_4" hover-class="none">
				<text class="title">停车记录</text>
				<text class="label">车辆出入记录</text>
				<view class="icon_box">
					<u-icon name="file-text-fill" color="#fff" size="32"></u-icon>
				</view>
			</navigator>
		</view>
		
		<view class="all_title_box">
			<view class="title">车场动态</view>
		</view>
		<view class="div-table fixed-thead">
			<view class="thead">
				<view class="th">
					<view class="td w1">时间</view>
					<view class="td w2">事件</view>
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
				text1: '总校区职工停车场出口车道车牌识别相机设备疑似离线，请您尽快处理；',
				car_number: "西校区公共停车场",
				show: false,
				columns: [
					['西校区公共停车场', '西校区职工停车场', '总校1停车场', '总校2停车场']
				],
				table: [{
						time: '刚刚',
						title: '总校公共停车场: 粤M12345 入场'
					},
					{
						time: '59分钟前',
						title: '西校区公共停车场: 粤M12346 入场'
					},
					{
						time: '今天 07:55',
						title: '总校公共停车场: 粤M12345 入场'
					},
					{
						time: '今天 07:54',
						title: '总校公共停车场: 粤M12345 入场'
					},
					{
						time: '昨天 23:30',
						title: '总校公共停车场: 粤M12345 入场'
					},
					{
						time: '11-08 10:05',
						title: '总校公共停车场: 粤M12345 入场'
					},
					{
						time: '11-08 10:00',
						title: '总校公共停车场: 粤M12345 入场'
					},
					{
						time: '11-08 10:05',
						title: '总校公共停车场: 粤M12345 入场'
					},
					{
						time: '11-08 10:00',
						title: '总校公共停车场: 粤M12345 入场'
					},
					{
						time: '11-08 10:05',
						title: '总校公共停车场: 粤M12345 入场'
					},
					{
						time: '11-08 10:00',
						title: '总校公共停车场: 粤M12345 入场'
					}
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
