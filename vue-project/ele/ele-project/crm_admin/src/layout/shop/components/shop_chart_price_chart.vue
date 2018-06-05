<template>
	<div id="main" style="width: 100%;height: 300px;"></div>
</template>

<script type="ecmascript-6">
import echarts from 'echarts'
export default {
	data () {
		return {

		}
	},
	created () {
		setTimeout(() => {
			this.chartEve()
		})
	},
	methods: {
		chartEve () {
			// 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('main'));

      // 指定图表的配置项和数据
      var option = {
			    tooltip : {
			        formatter: "{a} <br/>{b} : {c}%"
			    },
			    series: [
			        {
			            name: '业务指标',
			            type: 'gauge',
			            startAngle: 180,
	                	endAngle: 0,
	                	max: 58.5,
	                	splitNumber: 1,
	                	axisLine: {            // 坐标轴线
		                    lineStyle: {     // 属性lineStyle控制线条样式
		                        color: [[0.7, '#ff726b'], [0.71, '#fff'] ,[1, '#4aceff']],
		                        width: 50,
		                        shadowColor : '#fff', //默认透明
		                        shadowBlur: 20
		                    }
		                },
		                axisLabel: {
		                  distance: 15
		                },
		                axisTick: {
		                	length: 0,
		                	lineStyle: {
		                		color: 'auto'
		                	},
		                	show: false
		                },
		                splitLine: {
		                	length: 0,
		                	lineStyle: {
		                		color: 'auto'
		                	}
		                },
		                detail : {
			                shadowBlur: 5,
			                offsetCenter: [0, '40%'],       // x, y，单位px
			                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
			                    fontWeight: '400',
			                    color: '#000',
			                    fontSize: 22
			                }
			            },
			            title: {
			                offsetCenter: [0, '62%'],       // x, y，单位px\
			                textStyle: {
			                	color: '#ccc',
			                	fontSize: 14
			                }
			            },
			            pointer: {
			            	width: 8,
			            	length: 40
			            },
				        data: [{value: 50, name: '金额目标/万元'}]
			        }
			    ]
			};

			setInterval(function () {
			    // option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
			    myChart.setOption(option, true);
			},2000);
		}
	}
}
</script>

<style scoped>
	
</style>