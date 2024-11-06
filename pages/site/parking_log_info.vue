<template>
	<view class="warp">
		<view class="div-table fixed-thead">
			<view class="tbody">
				<view class="tr">
					<view class="td w0">车牌号码</view>
					<view class="td w1">粤M888888</view>
				</view>
				<view class="tr">
					<view class="td w0">车辆类型</view>
					<view class="td w1">固定车辆</view>
				</view>
				
				<view class="tr">
					<view class="td w0">有效期</view>
					<view class="td w1">2021-12-31 剩余49天</view>
				</view>
				<view class="tr">
					<view class="td w0">车场</view>
					<view class="td w1">西校区职工停车场</view>
				</view>
				<view class="tr">
					<view class="td w0">入场时间</view>
					<view class="td w1">2021-11-10 19:05</view>
				</view>
				<view class="tr">
					<view class="td w0">入场车道</view>
					<view class="td w1">西校区侧门车场入口1车道</view>
				</view>
				<view class="tr">
					<view class="td w0">出场时间</view>
					<view class="td w1">-</view>
				</view>
				<view class="tr">
					<view class="td w0">出场车道</view>
					<view class="td w1">-</view>
				</view>
				<view class="tr">
					<view class="td w0">停车时长</view>
					<view class="td w1">10分钟</view>
				</view>
				<view class="tr">
					<view class="td w0">收费金额</view>
					<view class="td w1">-</view>
				</view>
			</view>
		</view>
		
		<view class="album">
			<view class="album__its" v-for="(item,index) in photo" :key="index">
				<view class="type">{{item.type}}:</view>
				<view class="album__its__content">
					<u-album 
						:urls="item.urls"
						singleSize="330rpx"
						singleMode="aspectFill"
						:previewFullImage="true"
					></u-album>
				</view>
				<u--text
					:text="item.name"
					margin="0 0 3px 0"
					size="14"
				></u--text>
				<view class="time_box">
					<text class="time">{{item.label}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				photo: [{
					type: "入场图片",
					name: "西校区侧门车场入口1车道",
					urls: [
						"/static/coolc/u610.png"
					],
					label: "2021-11-11 15:05"
				},
				{
					type: "出场图片",
					name: "西校区侧门车场入口1车道",
					urls: [{
						src: "/static/coolc/u610.png"
					}],
					label: "2021-11-11 15:05"
				}]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.warp {
		width: 750rpx;
		padding: 30rpx;
		background: #fff;
		border-top: 2rpx solid #ededed;
	}
	.tbody {
		height: auto;
	}
	.w0 {
		width: 30%;
		text-align: right;
		font-size: 30rpx!important;
	}
	.w1 {
		width: 70%;
		text-align: left;
		font-size: 30rpx!important;
	}
	.album {
		@include flex;
		flex-wrap: wrap;
		align-items: flex-start;
		justify-content: space-between;
		padding-top: 30rpx;
		
		&__its {
			width: 330rpx;
			
			.type {
				width: 100%;
				font-size: 30rpx;
				padding-bottom: 20rpx;
				color: #999;
			}
			.time_box {
				@include flex;
				justify-content: start;
				align-items: center;
				padding-bottom: 16rpx;
				
				.time {
					font-size: 26rpx;
					color: #999;
					padding-right: 14rpx;
				}
			}
			&__content {
				flex: 1;
				margin-bottom: 10rpx;
				
				.u-album {
					border-radius: 10rpx;
					overflow: hidden;
				}
			}
		}
	}
</style>
