<template>
	<div id="memberDialog" @click="handleClose">
		<el-dialog :visible.sync="showMemder" :before-close="handleClose">
			<div class="left">
				<div class="center">
					<div class="describe-wrap">
						<div class="describes">
							{{titlename}}
						</div>
					</div>
				</div>
			</div>
			<div class="right">
				<div class="bgcolor">
					<div class="center">
						<div class="describe-wrap">
							<div class="describe">
								{{message}}
							</div>
						</div>
					</div>
				</div>
			</div>
		</el-dialog>
	</div>
</template>
<script>
export default {
	name: 'memberDialog',
	props: ['showMemder',"message","url","titlename"],
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
			.left ,.right{
				float: left;
				width: 50%;
				height: 100%;
				background: rgb(32, 78, 139);
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
						.describes{
							font-size: 32px;
						}
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
				background: url("../assets/img/index/web3-z.png") no-repeat;
                background-size: 100% 100%;
				color:#000;
				.bgcolor{
					// width: 100%;
					// height: 100%;
					// background-color: rgba(255,255,255,0.7);
					.center {
						.describe-wrap {
							margin-top: 20px;
							.describe {
								color: #000;
								a {
									color: #000;
								}
							}
						}
					}
				}
			}
		}
	}
}
</style>