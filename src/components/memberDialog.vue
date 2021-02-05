<template>
	<div id="memberDialog">
		<el-dialog :visible.sync="showMemder" :before-close="handleClose">
			<div class="left">
				<div class="center">
					<!-- <div class="imgBox">
						<img src="../assets/img/index/logo.jpg" alt="" />
					</div> -->
					<div class="describe-wrap">
						<div class="describe">
							{{message}}
						</div>
					</div>
					<!-- <div class="compant_more">
						<p><span>创始人</span><span>李想</span></p>
						<p><span>成立时间</span><span>2015</span></p>
						<p>
							<span>官网</span><a href="https://www.lixiang.com/" target="_blank">https://www.lixiang.com/</a>
						</p>
					</div> -->
				</div>
			</div>
			<div class="right">
				<img :src="url" alt="" />
			</div>
		</el-dialog>
	</div>
</template>
<script>
export default {
	name: 'memberDialog',
	props: ['showMemder',"message","url"],
	methods: {
		handleClose() {
			this.$emit('closeMember');
		},
	},
};
</script>
<style lang="scss" scoped>
#memberDialog {
	/deep/.el-dialog__wrapper {
		width: 100%;
		height: 100%;
		.el-dialog {
			width: 100%;
			height: 100%;
			margin: 0 !important;
			// position: relative;
			overflow:hidden;
			.el-dialog__header {
				height: 0;
				padding: 0;
				.el-dialog__headerbtn{
					background:#ccc;
				}
			}
			.el-dialog__body {
				width: 100%;
				height: 100%;
				padding: 0;
			}
			background: #ccc;
			.left {
				float: left;
				width: 50%;
				height: 100%;
				background: #4a90e2;
				position: relative;
				.center {
					height: auto;
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					.imgBox {
						width: 135px;
						height: 50px;
						img {
							width: 100%;
							height: 100%;
						}
					}
					.describe-wrap {
						// width: 70%;
						color: #fff;
						margin-top: 30px;
						font-size: 16px;
						line-height: 2;
						word-break: break-word;
					}
					.compant_more {
						margin-top: 20px;
						p {
							display: flex;
							margin-top: 20px;
							color: #fff;
							font-size: 14px;
							span:first-child {
								width: 80px;
							}
							a {
								color: white;
							}
						}
					}
				}
			}
			.right {
				float: right;
				width: 50%;
				height: 100%;
				background: blue;
				img {
					width: 100%;
					height: 100%;
				}
			}
		}
	}
}
</style>