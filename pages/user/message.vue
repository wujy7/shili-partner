<template>
	<view class="warp">
		<u-tabs :list="list" @click="click"></u-tabs>
		<view class="list_box">
			
			<view class="album">
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
						text="您有一台车牌识别相机设备状态恢复正常，车道：总校职工停车场入口车道，恢复时间：2021-11-05 12:00:05"
					></u--text>
				</view>
			</view>
			
			<view class="album">
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
						text="您有一台车牌识别相机设备状态恢复正常，车道：总校职工停车场入口车道，恢复时间：2021-11-05 12:00:05"
					></u--text>
				</view>
			</view>
			
			<view class="album">
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
						text="您有一台车牌识别相机设备状态恢复正常，车道：总校职工停车场入口车道，恢复时间：2021-11-05 12:00:05"
					></u--text>
				</view>
			</view>
			
			<view class="album">
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
						text="您有一台车牌识别相机设备状态恢复正常，车道：总校职工停车场入口车道，恢复时间：2021-11-05 12:00:05"
					></u--text>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
					name: "全部"
				},
				{
					name: "未读"
				},
				{
					name: "已读"
				}]
			}
		},
		methods: {
			click() {
				
			}
		}
	}
</script>

<style lang="scss">
	.warp {
		background: #fff;
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
