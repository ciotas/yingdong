<template>
	<div id="team">
		<tab-nav class="tabNav"> </tab-nav>
		<div class="col-swipe-container">
			<div class="col-swipe-wrapper" ref="colSwipeWrapper">
				<footer-box class="footerBox"> </footer-box>
			</div>
		</div>
	</div>
</template>
<script>
import tabNav from '../components/tabNav';
import footerBox from "../components/footerBox";
export default {
	name: 'contact',
	components: { tabNav, footerBox },
	data() {
		return {
			top: 0,
			timer: null,
		};
	},
	methods: {
		closeMember() {
			this.showMemder = false;
		},
		showDialog(msg, url) {
			this.message = msg;
			this.url = url;
			this.showMemder = true;
		},
		scroll(e) {
			let direction = e.wheelDelta || -e.detail;
			if (direction > 0) {
				if (this.top !== 0) {
					this.top = this.top - 1;
					this.$refs.colSwipeWrapper.style.top =
						'-' + this.toPercent(this.top);
				}
			} else if (direction < 0) {
				if (this.top !== 3) {
					this.top = this.top + 1;
					this.$refs.colSwipeWrapper.style.top =
						'-' + this.toPercent(this.top);
				}
			}
		},
		handleScroll(e) {
			if (this.timer) clearTimeout(this.timer);
			let callNow = !this.timer;
			this.timer = setTimeout(() => {
				this.timer = null;
			}, 300);
			if (callNow) this.scroll(e);
		},
		toPercent(point) {
			var str = Number(point * 100).toFixed(0);
			str += '%';
			return str;
		},
	},
};
</script>
<style scoped lang="scss">
#team {
	width: 100%;
	height: 100%;
	min-width: 1150px;
	position: relative;
	.tabNav {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 10;
	}
	.col-swipe-container {
		width: 100%;
		height: 100%;
		position: relative;
		overflow: hidden;
		.col-swipe-wrapper {
			width: 100%;
			height: 100%;
			position: absolute;
			top: 0;
			left: 0;
			transition: all 0.5s;
			.floorBox {
				width: 100%;
				height: 100%;
				background-color: transparent;
				overflow: hidden;
				position: relative;
				.bg {
					position: absolute;
					top: -10%;
					left: -10%;
					width: 120%;
					height: 120%;
					z-index: -2;
					img {
						width: 100%;
						height: 100%;
					}
					// background-repeat: no-repeat;
					// background-size: cover;
					// background-position: 50% 50%;
					// transform: scale(1.2, 1.2);
					transition: all 2s linear;
					// background: transparent 50% 50%/120% 120% no-repeat;
					// transition: all 2s linear;
				}
				&.floorBox1 {
					.floorInner {
						width: 100%;
						height: 100%;
						padding: 260px 0 0 0;
						box-sizing: border-box;
						font-family: HYQiHei-AZEJF, HYQiHei;
						color: #ffffff;
						letter-spacing: 15px;
						cursor: pointer;
						.title {
							font-size: 48px;
							font-weight: bolder;
							line-height: 150px;
							text-align: center;
							transform: translateY(50px);
							opacity: 0;
							transition: all 0;
							margin: 70px auto 0;
						}
						.floatBox {
							width: 80%;
							overflow: hidden;
							margin:0 auto;
							.left {
								float: left;
								width: 30%;
							}
							.center{
								width: 30%;
								float: left;
								margin:0 5%;
							}
							.right {
								float: right;
								width: 30%;
							}
						}
						.brife {
							width: 100%;
							margin-top: 50px;
							text-align: center;
							font-size: 48px;
							line-height: 60px;
							transform: translateY(50px);
							opacity: 0;
							transition: all 0;
						}
					}
				}
				&.floorBox2 {
					.title {
						width: 80%;
						margin: 30px auto;
						font-size: 40px;
						font-weight: bolder;
						line-height: 50px;
						text-align: center;
						transform: translateY(50px);
						color: #000;
					}
					.floorInner {
						width: 50%;
						height: 70%;
						position: absolute;
						top: 60%;
						left: 50%;
						transform: translate(-50%, -50%);
						/*background: #ccc;*/
						.left {
							float: left;
							width: 30%;
							height: 49%;
							position: relative;
							/*box-shadow: #1e1e29 0.3;*/
							box-shadow: 5px 5px 10px #888;
							img {
								width: 100%;
								height: 100%;
							}
							p {
								position: absolute;
								bottom: 10%;
								left: 10%;
								color: white;
								font-size: 32px;
							}
						}
						.center{
							margin:0 5%;
						}
						.top{
							margin-bottom:2%;
						}
					}
				}
				&.floorBox3 {
					.floorInner {
						width: 100%;
						height: 100%;
						padding: 150px 0 0 0;
						box-sizing: border-box;
						font-family: HYQiHei-AZEJF, HYQiHei;
						color: #ffffff;
						letter-spacing: 15px;
						cursor: pointer;
						.title {
							width: 50%;
							margin: 0 auto;
							font-size: 90px;
							font-weight: bolder;
							line-height: 150px;
							text-align: center;
							transform: translateY(50px);
							opacity: 0;
							transition: all 0;
						}
						.brife {
							width: 50%;
							margin: 50px auto 0;
							font-size: 32px;
							line-height: 60px;
							transform: translateY(50px);
							opacity: 0;
							transition: all 0;
						}
					}
				}
				// &.floorBox3 {
				// 	background: white;
				// 	.jupaiBox {
				// 		width: 100%;
				// 		height: 100%;
				// 		.top {
				// 			height: 160px;
				// 			padding: 60px 0 0;
				// 			text-align: center;
				// 			.title {
				// 				height: 90px;
				// 				line-height: 90px;
				// 				font-size: 0;
				// 				img {
				// 					display: inline-block;
				// 					width: 200px;
				// 					height: 48px;
				// 					padding-right: 20px;
				// 					border-right: 1px solid #a1a1b9;
				// 					vertical-align: middle;
				// 				}
				// 				span {
				// 					display: inline-block;
				// 					margin-left: 20px;
				// 					vertical-align: middle;
				// 					font-size: 48px;
				// 					font-family: HYQiHei-GEW, HYQiHei;
				// 					color: #1e1e29;
				// 				}
				// 			}
				// 			.brife {
				// 				line-height: 50px;
				// 				font-family: HYQiHei-FZS, HYQiHei;
				// 				font-size: 18px;
				// 				color: #aaaaaa;
				// 				letter-spacing: 10px;
				// 			}
				// 		}
				// 		.middle {
				// 			width: 1320px;
				// 			height: 500px;
				// 			margin: 0 auto;
				// 			/deep/.row-swiperBox {
				// 				width: 100%;
				// 				height: 100%;
				// 				.el-carousel {
				// 					width: 100%;
				// 					height: 100%;
				// 					.el-carousel__container {
				// 						width: 100%;
				// 						height: calc(100% - 40px);
				// 						.el-carousel__item {
				// 							width: 100%;
				// 							height: 100%;
				// 							img {
				// 								width: 100%;
				// 								height: 100%;
				// 							}
				// 						}
				// 					}
				// 					.el-carousel__indicators {
				// 						width: 650px;
				// 						text-align: center;
				// 						position: absolute;
				// 						bottom: 0;
				// 						left: 50%;
				// 						z-index: 100;
				// 						.el-carousel__indicator {
				// 							button {
				// 								width: 200px;
				// 								height: 8px;
				// 								background: #a1a1b9;
				// 								border-radius: 5px;
				// 								opacity: 0.4;
				// 							}
				// 							&.is-active {
				// 								button {
				// 									background: #fc5e40;
				// 								}
				// 							}
				// 						}
				// 					}
				// 				}
				// 			}
				// 		}
				// 		.bottom {
				// 			text-align: center;
				// 			line-height: 30px;
				// 			margin-top: 0px;
				// 			font-size: 14px;
				// 			font-family: HYQiHei-FZS, HYQiHei;
				// 			font-weight: normal;
				// 			color: #aaaaaa;
				// 		}
				// 	}
				// }
				// &.floorBox4 {
				// 	/deep/.investments {
				// 		width: 80%;
				// 		height: 70%;
				// 		margin: 150px auto 0;
				// 		// background: red;
				// 		.el-carousel {
				// 			width: 100%;
				// 			height: 100%;
				// 			.el-carousel__container {
				// 				width: 100%;
				// 				// height: 100%;
				// 				height: calc(100% - 40px);
				// 				.el-carousel__item {
				// 					.imgBox {
				// 						width: 100%;
				// 						height: 100%;
				// 						position: absolute;
				// 						top: 0;
				// 						left: 0;
				// 						z-index: 0;
				// 						img {
				// 							width: 100%;
				// 							height: 100%;
				// 						}
				// 					}
				// 					p {
				// 						position: absolute;
				// 						top: 0;
				// 						left: 0;
				// 						z-index: 1;
				// 						width: 100%;
				// 						height: 100%;
				// 						line-height: 700%;
				// 						text-align: center;
				// 						color: white;
				// 						font-size: 80px;
				// 					}
				// 				}
				// 			}
				// 		}
				// 	}

				// 	.jujuBox {
				// 		width: 750px;
				// 		height: 100%;
				// 		padding: 60px 0 0;
				// 		box-sizing: border-box;
				// 		margin: 0 auto;
				// 		.top {
				// 			height: 160px;
				// 			text-align: center;
				// 			font-family: HYQiHei-GEW, HYQiHei;
				// 			font-weight: normal;
				// 			color: #ffffff;
				// 			.title {
				// 				font-size: 48px;
				// 				line-height: 90px;
				// 				span {
				// 					letter-spacing: 9px;
				// 				}
				// 			}
				// 			.brife {
				// 				line-height: 50px;
				// 				font-size: 18px;
				// 				color: rgba(255, 255, 255, 0.5);
				// 				letter-spacing: 10px;
				// 			}
				// 		}
				// 		.bottom {
				// 			.left {
				// 				float: left;
				// 				width: 350px;
				// 				height: 600px;
				// 				img {
				// 					width: 100%;
				// 					height: 100%;
				// 				}
				// 			}
				// 			.right {
				// 				float: left;
				// 				padding: 150px 0 0 140px;
				// 				p {
				// 					width: 240px;
				// 					height: 50px;
				// 					text-align: center;
				// 					line-height: 50px;
				// 					margin-bottom: 30px;
				// 					background: #1e1e29;
				// 					border-radius: 25px;
				// 					font-size: 18px;
				// 					font-family: HYQiHei-GZS, HYQiHei;
				// 					color: #ffffff;
				// 					letter-spacing: 1px;
				// 					box-shadow: 0px 2px 8px 0px
				// 						rgba(0, 0, 0, 0.25);
				// 					cursor: pointer;
				// 					&.ios {
				// 						margin-bottom: 60px;
				// 					}
				// 					&.jujuCreator {
				// 						background: linear-gradient(
				// 							90deg,
				// 							#fe543a 0%,
				// 							#f88857 100%
				// 						);
				// 						a {
				// 							color: #ffffff;
				// 						}
				// 					}
				// 				}
				// 			}
				// 		}
				// 	}
				// 	// .bg {
				// 	//   background-image: url("../assets/img/index/bg3.png");
				// 	// }
				// }
				// &.floorBox5 {
				// 	/deep/.box {
				// 		width: 100%;
				// 		height: 100%;
				// 		padding: 60px 0 0;
				// 		box-sizing: border-box;
				// 		.el-carousel {
				// 			width: 100%;
				// 			height: 100%;
				// 			.el-carousel__container {
				// 				width: 100%;
				// 				height: 100%;
				// 				// height: calc(100% - 40px);
				// 				.el-carousel__item {
				// 					width: 100%;
				// 					height: 100%;
				// 					.contentBox {
				// 						width: 100%;
				// 						height: 100%;
				// 						div {
				// 							display: inline-block;
				// 							width: 50%;
				// 							height: 100%;
				// 						}
				// 						.left {
				// 							background: red;
				// 						}
				// 						.right {
				// 							background: blue;
				// 						}
				// 					}
				// 				}
				// 				.el-carousel__item:nth-child(2n) {
				// 					background-color: #99a9bf;
				// 				}
				// 				.el-carousel__item:nth-child(2n + 1) {
				// 					background-color: #d3dce6;
				// 				}
				// 			}
				// 			.el-carousel__indicators {
				// 				width: 650px;
				// 				text-align: center;
				// 				position: absolute;
				// 				bottom: 0;
				// 				left: 50%;
				// 				z-index: 100;
				// 				// background: red;
				// 				.el-carousel__indicator {
				// 					button {
				// 						width: 200px;
				// 						height: 8px;
				// 						background: #a1a1b9;
				// 						border-radius: 5px;
				// 						opacity: 0.4;
				// 					}
				// 					&.is-active {
				// 						button {
				// 							background: #fc5e40;
				// 						}
				// 					}
				// 				}
				// 			}
				// 		}
				// 	}
				// }
				&.floorBox6 {
					.floorInner {
						position: absolute;
						top: 50%;
						left: 50%;
						width: 50%;
						height: auto;
						transform: translate(-50%, -80%);
						.tip {
							p {
								line-height: 36px;
								text-align: center;
								font-size: 18px;
								color: white;
							}
						}
						.btnGroups {
							text-align: center;
							margin-top: 50px;
							p {
								display: inline-block;
								width: 116px;
								padding: 10px 20px;
								margin-right: 50px;
								background: transparent;
								border: 1px solid #fff;
								cursor: pointer;
								color: #fff;
								font-size: 16px;
								text-align: center;
								&:last-child {
									margin-right: 0;
								}
							}
						}
					}
					.webFooter {
						position: absolute;
						bottom: 0;
						left: 0;
						width: 100%;
						.tip {
							text-align: center;
							padding: 30px 0;
							color: hsla(0, 0%, 100%, 0.6);
						}
					}
				}
				&.active {
					.floorInner {
						.title {
							opacity: 1;
							transform: translateY(0);
							transition: all 1.5s 1s;
						}
						.brife {
							opacity: 1;
							transform: translateY(0);
							transition: all 1.5s 1.5s;
						}
					}
					.bg {
						top: 0;
						left: 0;
						width: 100%;
						height: 100%;
						// transform: scale(1, 1);
						transition: all 10s linear;
					}
					// &.bg {
					//   background-size: 100% 100%;
					//   transition: all 10s linear;
					// }
				}
			}
		}
	}
}
@media screen and (max-width: 1400px) {
	#team {
		.col-swipe-container {
			.col-swipe-wrapper {
				.floorBox {
					&.floorBox1{
						.floorInner {
							padding: 10% 0 0 0;

							.title {
								width: 80%;
								font-size: 45px;
								font-weight: initial;
								line-height: 80px;
							}
							.brife {
								width: 80%;
								margin: 30px auto 0;
								font-size: 45px;
							}
						}
					}
					&.active {
						.floorInner {
							.title {
								opacity: 1;
								transform: translateY(0);
								transition: all 1.5s 1s;
							}

							.brife {
								opacity: 1;
								transform: translateY(0);
								transition: all 1.5s 1.5s;
							}
						}

						.bg {
							top: 0;
							left: 0;
							width: 100%;
							height: 100%;
							// transform: scale(1, 1);
							transition: all 10s linear;
						}

						// &.bg {
						//   background-size: 100% 100%;
						//   transition: all 10s linear;
						// }
					}
				}
			}
		}
	}
}
// @media (max-height: 568px) {
//   #index {
//     .col-swipe-container {
//       .col-swipe-wrapper {
//         .floorBox {
//           &.floorBox2 {
//             .jupaiBox {
//               .top {
//                 height: 90px;
//                 .title {
//                   height: 60px;
//                   line-height: 60px;
//                 }
//                 .brife {
//                   line-height: 30px;
//                 }
//               }
//               .middle {
//                 width: 990px;
//                 height: 375px;
//               }
//               .bottom {
//                 margin-top: 0px;
//               }
//             }
//           }
//           &.floorBox3 {
//             .jujuBox {
//               .top {
//                 height: 100px;
//                 .title {
//                   line-height: 70px;
//                 }
//                 .brife {
//                   line-height: 30px;
//                 }
//               }
//               .bottom {
//                 .left {
//                   width: 300px;
//                   height: 400px;
//                 }
//                 .right {
//                   padding: 100px 0 0 120px;
//                 }
//               }
//             }
//           }
//           &.floorBox4 {
//             .partnersBox {
//               header {
//                 height: 80px;
//                 line-height: 80px;
//               }
//               dl {
//                 margin-bottom: 10px;
//               }
//             }
//             .footerNav {
//               height: 150px;
//               opacity: 0;
//               transition: all 0.5s;
//               .relatedAgreement {
//                 height: 30px;
//                 display: inline;
//                 div {
//                   p {
//                     height: 30px;
//                     line-height: 30px;
//                   }
//                 }
//               }
//               .aboutBox {
//                 margin-top: 20px;
//               }
//               .tip {
//                 margin-top: 20px;
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// }
// @media (min-height: 568px) {
//   #index {
//     .col-swipe-container {
//       .col-swipe-wrapper {
//         .floorBox {
//           &.floorBox2 {
//             .jupaiBox {
//               .top {
//                 height: 90px;
//                 .title {
//                   height: 60px;
//                   line-height: 60px;
//                 }
//                 .brife {
//                   line-height: 30px;
//                 }
//               }
//               .middle {
//                 width: 990px;
//                 height: 375px;
//               }
//               .bottom {
//                 margin-top: 0px;
//               }
//             }
//           }
//           &.floorBox3 {
//             .jujuBox {
//               .top {
//                 height: 100px;
//                 .title {
//                   line-height: 70px;
//                 }
//                 .brife {
//                   line-height: 30px;
//                 }
//               }
//               .bottom {
//                 .left {
//                   width: 300px;
//                   height: 400px;
//                 }
//                 .right {
//                   padding: 100px 0 0 120px;
//                 }
//               }
//             }
//           }
//           &.floorBox4 {
//             .partnersBox {
//               header {
//                 height: 80px;
//                 line-height: 80px;
//               }
//               dl {
//                 margin-bottom: 10px;
//               }
//             }
//             .footerNav {
//               height: 150px;
//               opacity: 1;
//               transition: all 0.5s;
//               .relatedAgreement {
//                 height: 25px;
//                 div {
//                   p {
//                     height: 25px;

//                     line-height: 25px;
//                   }
//                 }
//               }
//               .aboutBox {
//                 margin-top: 10px;
//               }
//               .tip {
//                 margin-top: 10px;
//                 &.tip2 {
//                   margin: 5px 0 10px;
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// }
// @media (min-height: 668px) {
//   #index {
//     .col-swipe-container {
//       .col-swipe-wrapper {
//         .floorBox {
//           &.floorBox2 {
//             .jupaiBox {
//               .top {
//                 height: 160px;
//                 .title {
//                   height: 90px;
//                   line-height: 90px;
//                 }
//                 .brife {
//                   line-height: 50px;
//                 }
//               }
//               .bottom {
//                 margin-top: 20px;
//               }
//             }
//           }
//           &.floorBox3 {
//             .jujuBox {
//               .top {
//                 height: 160px;
//                 .title {
//                   line-height: 90px;
//                 }
//                 .brife {
//                   line-height: 50px;
//                 }
//               }
//             }
//           }
//           &.floorBox4 {
//             .partnersBox {
//               header {
//                 height: 120px;
//                 line-height: 120px;
//               }
//               dl {
//                 margin-bottom: 30px;
//               }
//             }
//             .footerNav {
//               height: 190px;
//               .relatedAgreement {
//                 height: 30px;
//                 div {
//                   p {
//                     height: 30px;
//                     line-height: 30px;
//                   }
//                 }
//               }
//               .aboutBox {
//                 margin-top: 20px;
//               }
//               .tip {
//                 margin-top: 20px;
//                 &.tip2 {
//                   margin: 10px 0 20px;
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// }
// @media (min-height: 768px) {
//   #index {
//     .col-swipe-container {
//       .col-swipe-wrapper {
//         .floorBox {
//           &.floorBox2 {
//             .jupaiBox {
//               .middle {
//                 width: 1320px;
//                 height: 500px;
//               }
//               .bottom {
//                 margin-top: 0px;
//               }
//             }
//           }
//           &.floorBox3 {
//             .jujuBox {
//               .bottom {
//                 .left {
//                   width: 350px;
//                   height: 500px;
//                 }
//                 .right {
//                   padding: 150px 0 0 140px;
//                 }
//               }
//             }
//           }
//           &.floorBox4 {
//             .partnersBox {
//               header {
//                 height: 160px;
//                 line-height: 120px;
//               }
//             }
//             .footerNav {
//               height: 250px;
//               .relatedAgreement {
//                 height: 60px;
//                 div {
//                   p {
//                     height: 60px;
//                     line-height: 60px;
//                   }
//                 }
//               }
//               .aboutBox {
//                 margin-top: 30px;
//               }
//               .tip {
//                 margin-top: 30px;
//                 &.tip2 {
//                   margin: 10px 0 30px;
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// }
// @media (min-height: 868px) {
//   #index {
//     .col-swipe-container {
//       .col-swipe-wrapper {
//         .floorBox {
//           &.floorBox3 {
//             .jujuBox {
//               .bottom {
//                 .left {
//                   width: 350px;
//                   height: 600px;
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// }
</style>