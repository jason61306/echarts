var myApp = angular.module('myApp', []).controller('getAppController', getAppController);

function getAppController($scope) {

	$scope.lineGraph = function () {
		var lineGraph = echarts.init(document.getElementById('lineGraph'))

		var option = {
			color: ['#A469B0', '#FEE572', '#FD7C6D', '#18A0AC'],
			grid: {
				left: '3%',
				right: '4%',
				bottom: '3%',
				containLabel: true
			},
			tooltip: {
				trigger: 'axis'
			},
			legend: {
				data: ['Jack', 'Linda', 'Jason', 'Jessica']
			},
			xAxis: {
				type: 'category',
				boundaryGap: false,
				data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
			},
			yAxis: {
				type: 'value'
			},
			series: [
				{
					name: 'Jack',
					type: 'line',
					data: [12, 13, 14, 15, 16]
				},
				{
					name: 'Linda',
					type: 'line',
					data: [22, 18, 19, 23, 29]
				},
				{
					name: 'Jason',
					type: 'line',
					data: [15, 22, 21, 15, 10]
				},
				{
					name: 'Jessica',
					type: 'line',
					data: [32, 32, 31, 4, 30]
				}
			]
		};
		lineGraph.setOption(option);
	};

	$scope.pieGraph1 = function () {
		var pieGraph1 = echarts.init(document.getElementById('pieGraph1'))

		var option = {
			color: ['#A469B0', '#FEE572', '#FD7C6D', '#18A0AC'],			
			tooltip: {
				trigger: 'item',
				formatter: "{b} : {c} ({d}%)"
			},
			legend: {
				data: ['Jack', 'Linda', 'Jason', 'Jessica']
			},
			series: [
				{
					type: 'pie',
					radius: '50%',
					center: ['50%', '50%'],
					data: [
						{ value: 335, name: 'Jack' },
						{ value: 310, name: 'Linda' },
						{ value: 234, name: 'Jason' },
						{ value: 135, name: 'Jessica' }
					]
				}
			]
		};
		pieGraph1.setOption(option);
	};

	$scope.pieGraph2 = function () {
		var pieGraph2 = echarts.init(document.getElementById('pieGraph2'))

		var option = {
			color: ['#A469B0', '#FEE572', '#FD7C6D', '#18A0AC'],			
			tooltip: {
				trigger: 'item',
				formatter: "{a} <br/>{b}: {c} ({d}%)"
			},
			legend: {
				data: ['Jack', 'Linda', 'Jason', 'Jessica']
			},
			series: [
				{
					type: 'pie',
					radius: ['50%', '70%'],
					avoidLabelOverlap: false,
					label: {
						normal: {
							show: false,
							position: 'center'
						},
						emphasis: {
							show: true,
							textStyle: {
								fontSize: '30',
								fontWeight: 'bold'
							}
						}
					},
					labelLine: {
						normal: {
							show: false
						}
					},
					data: [
						{ value: 335, name: 'Jack' },
						{ value: 310, name: 'Linda' },
						{ value: 234, name: 'Jason' },
						{ value: 135, name: 'Jessica' }
					]
				}
			]
		};
		pieGraph2.setOption(option);
	};

	$scope.pieGraph3 = function () {
		var pieGraph3 = echarts.init(document.getElementById('pieGraph3'))

		var option = {
			color: ['#A469B0', '#FEE572', '#FD7C6D', '#18A0AC'],			
			tooltip: {
				trigger: 'item',
				formatter: "{b} : {c} ({d}%)"
			},
			legend: {
				data: ['Jack', 'Linda', 'Jason', 'Jessica']
			},
			series: [
				{
					roseType : 'area',
					type: 'pie',
					radius: '50%',
					center: ['50%', '50%'],
					data: [
						{ value: 335, name: 'Jack' },
						{ value: 310, name: 'Linda' },
						{ value: 234, name: 'Jason' },
						{ value: 135, name: 'Jessica' }
					]
				}
			]
		};
		pieGraph3.setOption(option);
	};


	$scope.lineGraph();
	$scope.pieGraph1();
	$scope.pieGraph2();
	$scope.pieGraph3();
};