# echarts
echarts sample

## Issue
1.echarts重複使用需清除前一個實例
	```myChart.dispose()```
	
2.echarts提供Loading功能	
```myChart.showLoading()```
```myChart.hideLoading()```

3.echarts依照視窗大小動態調整圖	
```myChart.resize()```
如果有多組charts需調整需用以下方法
```setTimeout(function (){
    	    window.onresize = function () {
    	    	myChart1.resize();
    	    	myChart2.resize();    	    	
    	    }
    	},200)```

## reference
http://echarts.baidu.com/index.html

