<template>
	<view>
		<view class="warp_user">
			<view class="top_user_box">
				<image src="/static/coolc/desk.jpg"></image>
				<view class="user_info">
					<view class="username">杨启超</view>
				</view>
			</view>
		</view>
		<u-cell-group :border="false">
			<u-cell icon="phone" style="margin:10rpx 0;" @click="navi('/pages/user/mobile');" :isLink="true" title="手机号码"></u-cell>
			<u-cell icon="lock-open" style="margin:10rpx 0;" @click="navi('/pages/user/password');" :isLink="true" title="修改密码"></u-cell>
		</u-cell-group>
		<view class="b">
			<u-button text="退出登录"></u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			navi(url) {
				uni.navigateTo({
					url: url
				});
			}
		}
	}
</script>

<style lang="scss">
	.warp_user {
		width: 750rpx;
		padding: 30rpx 30rpx 60rpx 30rpx;
		background: linear-gradient(180deg, rgba(61, 126, 255, 1) 0%, rgba(61, 126, 255, 1) 40%, rgba(255, 255, 255, 1) 100%);
	}
	.top_user_box {
		width: 100%;
		text-align: center;
		padding-bottom: 50rpx;
		
		image {
			width: 100rpx;
			height: 100rpx;
			border-radius: 100rpx;
			border: 6rpx solid #fff;
		}
		.user_info {
			width: 100%;
			clear: both;
			
			.username {
				font-size: 34rpx;
				color: #fff;
				padding-bottom: 10rpx;
			}
		}
	}
	.b {
		width: 750rpx;
		padding: 30rpx;
		
		.u-button {
			width: 100%;
		}
	}
	.cell-hover-class {
		background-color: rgb(235, 237, 238);
	}
</style>
