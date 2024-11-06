<template>
	<view class="warp">
		<view class="div-table fixed-thead">
			<view class="tbody">
				<view class="tr">
					<view class="td w0">贷款类别</view>
					<view class="td w1">家装分期</view>
				</view>
				<view class="tr">
					<view class="td w0">订单状态</view>
					<view class="td w1">审批中</view>
				</view>
				<view class="tr">
					<view class="td w0">客户姓名</view>
					<view class="td w1">王刚</view>
				</view>
				<view class="tr">
					<view class="td w0">客户电话</view>
					<view class="td w1">18846868868</view>
				</view>
				
				<view class="tr">
					<view class="td w0">楼盘小区</view>
					<view class="td w1">杭州市富阳区东洲街道悦望名邸</view>
				</view>
				<view class="tr">
					<view class="td w0">面积</view>
					<view class="td w1">108㎡</view>
				</view>
				<view class="tr">
					<view class="td w0">装修情况</view>
					<view class="td w1">精装</view>
				</view>
				<view class="tr">
					<view class="td w0">社保</view>
					<view class="td w1">有社保，1500元/月</view>
				</view>
				<view class="tr">
					<view class="td w0">公积金</view>
					<view class="td w1">有公积金，3000元/月</view>
				</view>
				<view class="tr">
					<view class="td w0">学历</view>
					<view class="td w1">全日制本科</view>
				</view>
				<view class="tr">
					<view class="td w0">征信负债</view>
					<view class="td w1">
						

						<view class="tbody">
							<view class="tr">
								<view class="td w1">杭州银行</view>
								<view class="td w0">70万</view>
							</view>
						</view>
						<view class="tbody">
							<view class="tr">
								<view class="td w1">中信银行</view>
								<view class="td w0">100万</view>
							</view>
						</view>
						
					</view>
				</view>
				<view class="tr">
					<view class="td w0">签约</view>
					<view class="td w1">单签</view>
				</view>
				<view class="tr">
					<view class="td w0">预约时间</view>
					<view class="td w1">2024-10-24 10:00</view>
				</view>
				<view class="tr">
					<view class="td w0">注意事项</view>
					<view class="td w1">-</view>
				</view>
				<view class="tr">
					<view class="td w0">银行经理</view>
					<view class="td w1">杨利超</view>
				</view>
			</view>
		</view>
		
<!-- 		<view class="album">
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
		</view> -->
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
