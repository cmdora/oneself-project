<template>
  <div id="allmap"></div>
</template>
<script>
  // import BMap from 'BMap'
  export default {
    name:'',
    data(){
      return {

      }
    },
    mounted() {
      this.dt();
    },
    methods: {
      dt () {
       //  var map = new BMap.Map("allmap");
  	    // map.centerAndZoom(new BMap.Point(123.949921,47.351318), 15);
  	    // //创建小狐狸
  	    // var pt = new BMap.Point(123.949921,47.351318);
  	    // var my = new BMap.Icon("http://lbsyun.baidu.com/jsdemo/img/fox.gif", new BMap.Size(300,157));
  	    // var marker2 = new BMap.Marker(pt,{icon:my});
  	    // map.addOverlay(marker2);
  	    // map.addControl(new BMap.MapTypeControl());
  	    // map.setCurrentCity("齐齐哈尔");
  	    // map.enableScrollWheelZoom(true);

	    // 第二个地图

	    // var map = new BMap.Map('allmap');
     //    map.centerAndZoom(new BMap.Point(116.404269,39.916042), 12);

     //    var  mapStyle ={
     //      features: ["road", "building","water","land"],//隐藏地图上的poi
     //      style : "dark"  //设置地图风格为高端黑
     //    }
     //    map.setMapStyle(mapStyle);

     //    function checkhHtml5()
     //    {
     //      if (typeof(Worker) === "undefined")
     //      {
     //        if(navigator.userAgent.indexOf("MSIE 9.0")<=0)
     //        {
     //          alert("定制个性地图示例：IE9以下不兼容，推荐使用百度浏览器、chrome、firefox、safari、IE10");
     //        }

     //      }
     //    }
     //    checkhHtml5();

     // 百度地图API功能
        var map = new BMap.Map("allmap");
        var point = new BMap.Point(116.404, 39.915);
        map.centerAndZoom(point, 15);
        // 编写自定义函数,创建标注
        function addMarker(point){
          var myIcon = new BMap.Icon("http://www.yantiansf.cn/mapImage/1.gif", new BMap.Size(35, 24));
          var marker = new BMap.Marker(point, {icon: myIcon});
          map.addOverlay(marker);
        }
        // 随机向地图添加25个标注
        var bounds = map.getBounds();
        var sw = bounds.getSouthWest();
        var ne = bounds.getNorthEast();
        var lngSpan = Math.abs(sw.lng - ne.lng);
        var latSpan = Math.abs(ne.lat - sw.lat);
        for (var i = 0; i < 25; i ++) {
          var point = new BMap.Point(sw.lng + lngSpan * (Math.random() * 0.7), ne.lat - latSpan * (Math.random() * 0.7));
          addMarker(point);
        }
      }
    }
  }
</script>
<style>
  #allmap{
    height: 400px;
  }
</style>