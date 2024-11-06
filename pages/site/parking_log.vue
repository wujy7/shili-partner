<template>
	<view class="warp">
		<view class="top_sx_box">
			<view class="car_park" @click="show = true;">
				{{car_number}}
				<u-icon name="arrow-down" color="#999" size="16"></u-icon>
			</view>
			<view class="count_box">
				当前场内车辆：68
			</view>
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
		</view>
		<view class="all_title_box">
			<view class="title">停车记录</view>
			<view class="time" @click="month_show = true;">
				<text class="t">{{month}}</text>
				<u-icon name="arrow-down" color="#999" size="16"></u-icon>
			</view>
		</view>
		<view class="div-table fixed-thead">
			<view class="thead">
				<view class="th">
					<view class="td w0">时间</view>
					<view class="td w1">车牌</view>
					<view class="td w1">状态</view>
					<view class="td w2">时长</view>
				</view>
			</view>
			<view class="tbody">
				<view class="tr" v-for="(item,index) in table" :key="index" @click="url('/pages/site/parking_log_info?id=1');">
					<view class="td w0">{{item.time}}</view>
					<view class="td w1">{{item.car_pai}}</view>
					<view class="td w1">{{item.state}}</view>
					<view class="td w2">{{item.duration}}</view>
				</view>
			</view>
		</view>
		<view class="loadmore">
			<u-loadmore
				status="loading"
				:isDot="true"
			></u-loadmore>
		</view>
		
		<u-picker
			:show="show"
			:columns="columns"
			:closeOnClickOverlay="true"
			@confirm="car_confirm"
			@cancel="show = false"
			@close="show = false"
		></u-picker>
		<u-datetime-picker
			:show="month_show"
			:value="month"
			mode="date"
			:closeOnClickOverlay="true"
			@confirm="confirm"
			@cancel="month_show = false"
			@close="month_show = false"
		></u-datetime-picker>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				month_show: false,
				month: "2021-12-01",
				show: false,
				car_number: "西校区公共停车场",
				columns: [
					['西校区公共停车场', '西校区职工停车场', '总校1停车场', '总校2停车场']
				],
				table: [{
						time: '11-08 10:05',
						car_pai: '粤M12345',
						state: '场内',
						duration: '15分钟'
					},
					{
						time: '11-08 10:05',
						car_pai: '粤M12345',
						state: '已离场',
						duration: '15分钟'
					},
					{
						time: '11-08 10:05',
						car_pai: '粤M12345',
						state: '已离场',
						duration: '15分钟'
					},
					{
						time: '11-08 10:05',
						car_pai: '粤M12345',
						state: '场内',
						duration: '3.5小时'
					},
					{
						time: '11-08 10:05',
						car_pai: '粤M12345',
						state: '场内',
						duration: '15分钟'
					},
					{
						time: '11-08 10:05',
						car_pai: '粤M12345',
						state: '已离场',
						duration: '15分钟'
					},
					{
						time: '11-08 10:05',
						car_pai: '粤M12345',
						state: '已离场',
						duration: '15分钟'
					},
					{
						time: '11-08 10:05',
						car_pai: '粤M12345',
						state: '场内',
						duration: '3.5小时'
					},
					{
						time: '11-08 10:05',
						car_pai: '粤M12345',
						state: '场内',
						duration: '15分钟'
					},
					{
						time: '11-08 10:05',
						car_pai: '粤M12345',
						state: '场内',
						duration: '15分钟'
					},
					{
						time: '11-08 10:05',
						car_pai: '粤M12345',
						state: '已离场',
						duration: '15分钟'
					},
					{
						time: '11-08 10:05',
						car_pai: '粤M12345',
						state: '已离场',
						duration: '15分钟'
					},
					{
						time: '11-08 10:05',
						car_pai: '粤M12345',
						state: '场内',
						duration: '3.5小时'
					},
					{
						time: '11-08 10:05',
						car_pai: '粤M12345',
						state: '场内',
						duration: '15分钟'
					}
				]
			}
		},
		methods: {
			car_confirm(e) {
				this.show = false;
				this.car_number = e.value[0];
			},
			confirm(e) {
				this.month_show = false;
				console.log(e);
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
		width: 750rpx;
		background: #fff;
		padding: 30rpx;
	}
	.top_sx_box {
		width: 690rpx;
		@include flex;
		justify-content: space-between;
		align-items: center;
		
		.car_park {
			width: 380rpx!important;
		}
		.count_box {
			width: 290rpx;
			font-size: 28rpx;
			text-align: center;
			border: 2rpx solid #ededed;
			border-radius: 10rpx;
			padding: 16rpx 0rpx;
		}
	}
	.loadmore {
		padding-top: 20rpx;
	}
	.tbody {
		height: auto;
	}
	.w0 {
		width: 28%;
		padding-left: 0rpx!important;
		padding-right: 0rpx!important;
	}
	.w1 {
		width: 25%;
		padding-left: 0rpx!important;
		padding-right: 0rpx!important;
	}
	.w2 {
		width: 22%;
		padding-left: 0rpx!important;
		padding-right: 0rpx!important;
	}
</style>
