<template>
	<view class="warp">
		<view class="name">欢迎登录云停车管理平台</view>
		<u--form
			labelPosition="left"
			:model="userInfo"
			:rules="rules"
			ref="form1"
		>
			<u-form-item
				prop="userInfo.mobile"
				borderBottom
				ref="item1"
			>
				<u--input
					placeholder="手机号码"
					v-model="userInfo.mobile"
					border="none"
				></u--input>
			</u-form-item>
			<u-form-item
				prop="userInfo.mobile"
				borderBottom
				ref="item1"
			>
				<u--input
					placeholder="登录密码"
					v-model="userInfo.password"
					border="none"
					:password="true"
				></u--input>
			</u-form-item>
		</u--form>
		<view class="buttonBox">
			<u-button type="primary" text="立即登录"></u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userInfo: {
					mobile: '',
					password: ''
				}
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.warp {
		width: 750rpx;
		padding: 160rpx 70rpx 30rpx 70rpx;
		background: #fff;
		
		.name {
			width: 100%;
			text-align: center;
			font-size: 38rpx;
			color: #3366FF;
			padding-bottom: 80rpx;
		}
		
		.u-form-item {
			padding-bottom: 50rpx;
		}
		
		.buttonBox {
			width: 100%;
			padding-top: 30rpx;
			
			.u-button {
				width: 100%;
			}
		}
	}
</style>
