include("vfs/root/products/ebi/sys/picture/OverallSituation/echarts.min.js");
include("vfs/root/products/ebi/sys/picture/OverallSituation/slimscroll.js");
include("vfs/root/products/ebi/sys/picture/OverallSituation/BigDataColor_V3_1.js");
// 默认皮肤
var SKIN = SKIN1;
include("vfs/root/products/ebi/sys/picture/OverallSituation/BigDataColor_V3_xiazuan.js");



//语言方案
// 获取cookie
function getCookie(cname)
{
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) 
    {
        var c = ca[i].trim();
        if (c.indexOf(name)==0){
            return c.substring(name.length,c.length);
        }
    }
    return "";
}
var language = getCookie('lang');

if( language == 'en' ){
    language = 'cn';
}else{
    language = 'cn';
}

// 语言(中文)
if (language == 'cn') {
    $('#GRID26 span')[0].innerText = '大数据运营-';
    $('#GRID26 span')[2].innerText = '集群资源概览';

    $('#GRID27 span')[0].innerText = '资源总览';
    $('#GRID28 span')[0].innerText = '存储';
    $('#GRID29 span')[0].innerText = 'CPU';
    $('#GRID30 span')[0].innerText = '内存';
    $('#GRID6 span')[0].innerText = '总量';
    $('#GRID7 span')[0].innerText = '总量';
    $('#GRID7 span')[2].innerText = '核';
    $('#GRID8 span')[0].innerText = '总量';
    $('#GRID5 span')[2].innerText = '使用率';
    $('#GRID9 span')[2].innerText = '使用率';
    $('#GRID10 span')[2].innerText = '使用率';
    $('#GRID31 span')[0].innerText = '用户';
    $('#GRID33 span')[0].innerText = '一级租户';

    $('#GRID34 span')[0].innerText = '服务健康状态';
    var pie_data_name = ['异常','未知','正常'];
    var abnormal_rate = '异常率';
    $('#GRID14 span')[0].innerText = '服务总数：';
    $('#GRID35 span')[0].innerText = '主机列表';
    $('#GRID17 span')[0].innerText = '编号';
    $('#GRID17 span')[1].innerText = '主机名称';
    $('#GRID17 span')[2].innerText = '健康状态';
    $('#GRID17 span')[3].innerText = '存储使用率';
    $('#GRID17 span')[4].innerText = 'CPU使用率';
    $('#GRID17 span')[5].innerText = '内存使用率';

   var line1_title = '一级租户-存储配额及使用';
   var line2_title = '一级租户-CPU配额及使用';
   var line3_title = '一级租户-内存配额及使用';
   var line_lend = ['租户配额','使用量','使用率'];
   $('#GRID22 span')[0].innerText = '单位：';
   $('#GRID23 span')[0].innerText = '单位：';
   $('#GRID24 span')[0].innerText = '单位：';
   $('#GRID24 span')[1].innerText = '核';

   var color_title = '换肤';
   var color_type1 = '经典科技蓝';
   var color_type2 = '淡雅浅棕';
   var data_of_page = '页面数据的日期为：';
   var today_date = '今天的日期为：';

   var noData = '暂无数据';

   $('#GRID36 span')[0].innerText = '华为技术有限公司';
   
}
// 语言(英文)
if (language == 'en') {
    $('#GRID26 span')[0].innerText = 'BigData -';
    $('#GRID26 span')[2].innerText = 'Cluster Resource Overview';

    $('#GRID27 span')[0].innerText = 'Resource';
    $('#GRID27 span')[1].innerText = 'Overview';
    $('#GRID28 span')[0].innerText = 'Storage';
    $('#GRID29 span')[0].innerText = 'CPU';
    $('#GRID30 span')[0].innerText = 'Memory';
    $('#GRID6 span')[0].innerText = 'Total';
    $('#GRID7 span')[0].innerText = 'Total';
    $('#GRID7 span')[2].innerText = 'cores';
    $('#GRID8 span')[0].innerText = 'Total';
    $('#GRID5 span')[2].innerText = 'Usage';
    $('#GRID9 span')[2].innerText = 'Usage';
    $('#GRID10 span')[2].innerText = 'Usage';
    $('#GRID31 span')[0].innerText = 'User';
    $('#GRID33 span')[0].innerText = 'Level-1 Tenant';

    $('#GRID34 span')[0].innerText = 'Service Health Status';
    var pie_data_name = ['Abnormal','Unknown','Normal'];
    var abnormal_rate = 'Abnormal rate';
    $('#GRID14 span')[0].innerText = 'Total service:';
    $('#GRID35 span')[0].innerText = 'Host list';
    $('#GRID17 span')[0].innerText = 'No.';
    $('#GRID17 span')[1].innerText = 'Host Name';
    $('#GRID17 span')[2].innerText = 'Health Status';
    $('#GRID17 span')[3].innerText = 'Storage Usage';
    $('#GRID17 span')[4].innerText = 'CPU Usage';
    $('#GRID17 span')[5].innerText = 'Memory Usage';

   var line1_title = 'Level-1 Tenant — Storage Quota and Use';
   var line2_title = 'Level-1 Tenant — CPU Quota and Use';
   var line3_title = 'Level-1 Tenant — Memory Quota and Use';
   var line_lend = ['Tenant quota','Usage amount','Usage rate'];
   $('#GRID22 span')[0].innerText = 'Unit:';
   $('#GRID23 span')[0].innerText = 'Unit:';
   $('#GRID24 span')[0].innerText = 'Unit:';
   $('#GRID24 span')[1].innerText = 'cores';

   var color_title = 'Skinning';
   var color_type1 = 'Classic technology blue';
   var color_type2 = 'Light and light brown';
   var data_of_page = 'The date of the page data is:';
   var today_date = "Today's date is:";

   var noData = 'No Data';

   $('#GRID36 span')[0].innerText = 'Huawei Technologies Co., Ltd.';
   $('#BottomLeftLine').css('left','8%');
   $('#BottomRightLine').css('left','55%');
}

//定时刷新
setTimeout(function(){
	_z('<#=srcrpt.id#>','drillpath=;hiddencalcparams=false');
},240000);

// ----------------------------------------  跳转  ------------------------------------
$('#HHH20').on('click',function(){
	_zn("BigData_cloud", 'drillpath=;', "HHHreport", 'false', '', '');
})

//存储使用百分比
var savePercent='<#=GRID4.D2#>';
var saveNum=180-savePercent*1.8;
//cpu使用百分比
var cpuPercent='<#=GRID4.F2#>';
var cpuNum=180-cpuPercent*1.8;
//内存使用百分比
var memoryPercent='<#=GRID4.H2#>';
var memoryNum=180-memoryPercent*1.8;
//颜色变量
var colors1;
if(savePercent<20){
	colors1=SKIN.low_color//#99CC00
}
if(savePercent>=20&&savePercent<60){
	colors1=SKIN.normal_color//#0099FF
}
if(savePercent>=60&&savePercent<80){
	colors1=SKIN.high_color//#FFCC00
}
if(savePercent>=80){
	colors1=SKIN.alarm_color//#E34548
}
var colors2;
if(cpuPercent<20){
	colors2=SKIN.low_color
}
if(cpuPercent>=20&&cpuPercent<60){
	colors2=SKIN.normal_color
}
if(cpuPercent>=60&&cpuPercent<80){
	colors2=SKIN.high_color
}
if(cpuPercent>=80){
	colors2=SKIN.alarm_color
}
var colors3;
if(memoryPercent<20){
	colors3=SKIN.low_color
}
if(memoryPercent>=20&&memoryPercent<60){
	colors3=SKIN.normal_color
}
if(memoryPercent>=60&&memoryPercent<80){
	colors3=SKIN.high_color
}
if(memoryPercent>=80){
	colors3=SKIN.alarm_color
}
   //-----------------------------------------------------------------------------------存储仪表盘-----------------------------------------------------------------------
var myChartsave = echarts.init(document.getElementById('HHH86'));
 
    optionsave = {
	title:{
            left:'10%',
            top:'30%',
            textStyle:{
                color:'#fff',
                fontSize:14
            }
        },
    series: [
    {
      name: '',
      type: "gauge",
      startAngle: 180,
      endAngle: 0,
      
      radius: '100%',
      center: ["50%", "80%"],
      axisLine: {
        lineStyle: {
          width: 5,
          color: [[1, '#074679']],
        }
      },
      axisTick: {show: false},
      axisLabel: {show: false,},
      splitLine: {show: false},
      pointer: {
        show: false
      },
      itemStyle: {
        color: '#fff'
      },
      detail: {
        show: false,
        color: '#fff'
      }
        
    },
    {
      name: '',
      type: "gauge",
      startAngle: 180,
      endAngle: saveNum,
      radius: '100%',
      center: ["50%", "80%"],
      axisLine: {
        lineStyle: {
          width: 5,
          color: [[1,colors1]],
        }
      },
      axisTick: {show: false},
      axisLabel: {show: false,},
      splitLine: {show: false},
      pointer: {
        show: false
      },
      itemStyle: {
        color: '#fff'
      },
      detail: {
        show: false,
        color: '#fff'
      }
      
    }
  ]
};
myChartsave.setOption(optionsave, true);
//-----------------------------------------------------------------------------------CPU仪表盘-----------------------------------------------------------------------
var myChartcpu = echarts.init(document.getElementById('HHH89'));
 
    optioncpu = {
	title:{
            left:'10%',
            top:'30%',
            textStyle:{
                color:'#fff',
                fontSize:14
            }
        },
    series: [
    {
      name: '',
      type: "gauge",
      startAngle: 180,
      endAngle: 0,
      radius: '100%',
      center: ["50%", "80%"],
      axisLine: {
        lineStyle: {
          width: 5,
          color: [[1, '#074679']],
        }
      },
      axisTick: {show: false},
      axisLabel: {show: false,},
      splitLine: {show: false},
      pointer: {
        show: false
      },
      itemStyle: {
        color: '#fff'
      },
      detail: {
        show: false,
        color: '#fff'
      }
        
    },
    {
      name: '',
      type: "gauge",
      startAngle: 180,
      endAngle: cpuNum,
      radius: '100%',
      center: ["50%", "80%"],
      axisLine: {
        lineStyle: {
          width: 5,
          color: [[1,colors2]],
        }
      },
      axisTick: {show: false},
      axisLabel: {show: false,},
      splitLine: {show: false},
      pointer: {
        show: false
      },
      itemStyle: {
        color: '#fff'
      },
      detail: {
        show: false,
        color: '#fff'
      }
      
    }
  ]
};
myChartcpu.setOption(optioncpu, true);
//-----------------------------------------------------------------------------------内存仪表盘-----------------------------------------------------------------------
var myChartram = echarts.init(document.getElementById('HHH92'));
 
    optionram = {
	title:{
            left:'10%',
            top:'30%',
            textStyle:{
                color:'#fff',
                fontSize:14
            }
        },
    series: [
    {
      name: '',
      type: "gauge",
      startAngle: 180,
      endAngle: 0,
      radius: '100%',
      center: ["50%", "80%"],
      axisLine: {
        lineStyle: {
          width: 5,
          color: [[1, '#074679']],
        }
      },
      axisTick: {show: false},
      axisLabel: {show: false,},
      splitLine: {show: false},
      pointer: {
        show: false
      },
      itemStyle: {
        color: '#fff'
      },
      detail: {
        show: false,
        color: '#fff'
      }
        
    },
    {
      name: '',
      type: "gauge",
      startAngle: 180,
      endAngle: memoryNum,
     radius: '100%',
      center: ["50%", "80%"],
      axisLine: {
        lineStyle: {
          width: 5,
          color: [[1,colors3]],
        }
      },
      axisTick: {show: false},
      axisLabel: {show: false,},
      splitLine: {show: false},
      pointer: {
        show: false
      },
      itemStyle: {
        color: '#fff'
      },
      detail: {
        show: false,
        color: '#fff'
      }
      
    }
  ]
};
myChartram.setOption(optionram, true);
//租户名字
var timearr=<#=GRID16.B2$#>
var nameArr=<#=GRID16.C2$#>
//存储使用
   var saveTol=<#=GRID16.D2$#>
   var saveUsed=<#=GRID16.E2$#>
   var saveUsage=<#=GRID16.F2$#>
   //CPU使用
   var cpuTol=<#=GRID16.D3$#>
   var cpuUsed=<#=GRID16.E3$#>
   var cpuUsage=<#=GRID16.F3$#>
   //内存使用
   var memoryTol=<#=GRID16.D4$#>
   var memoryUsed=<#=GRID16.E4$#>
   var memoryUsage=<#=GRID16.F4$#>
//-----------------------------------------------------------------------------------柱状图加折线图1------------------------------------------------------------------
var myChart = echarts.init(document.getElementById('HHH238'));
option = {
    title:{
            text:line1_title,
            left:10,
            top:10,
            textStyle:{
                color:SKIN.second_title,
                fontSize:14
            }
        },
    grid: {
        x: '5%',
        y: '22%',
        x2: '7%',
        y2: '16%',
        borderWidth: 0
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: { 
        y: '6%',
        right: '10%',
        textStyle: {
            color: SKIN.font_col2,
            fontSize: 12
        },
        data: [{name:line_lend[0],icon:'rect'},{name:line_lend[1],icon:'rect'},{name:line_lend[2]}],
        width: 30,
        height: 30,
        orient:''
    },
    calculable: true,
    xAxis: [
        {
            type: 'category',
            show: 'true',
            axisTick: {show: true},
            axisLabel:{              
                show:true,                
                inside:false,             
                rotate:0,               
                margin: 8,           
                color:SKIN.font_col2,        
            },
            splitLine:{               
                show:false,            
                lineStyle:{
                    color:SKIN.echarts_line_col,
                    width:1,
                    type: 'solid',
                    opacity: 0.1,
                },
            },
            axisLine:{
                show:false
            },
            axisTick:{
		        show: false
	        },
           data: nameArr
        }
    ],
    yAxis: [

    {
            type: 'value',
            min: 0,
            max: 100,
            interval: 20,
            axisLabel: {
		color: SKIN.font_col1,
                formatter: '{value}%'
            },
	    axisLine:{
		show: false
	    },
	    splitLine:{
		show: false
	    },
	    axisTick:{
		show: false
	    },
        },
        {
            type: 'value',
            nameTextStyle:{          
                color:"#fff",
                padding:[5,0,0,5],  
            },
            nameGap:15,   
            axisLine:{               
                show:false,
                lineStyle:{
                    color:'#0b214a',
                    width:1,
                    type:'solid',
                },
            },
            axisTick:{                  
                show:false,               
                inside:true,              
                length:3,                    
                lineStyle:{     
                    width:1,
                    type:'solid'
                },
            },
            axisLabel:{                
                show:true,                 
                inside:false,              
                rotate:0,                   
                margin: 8,               
                color: SKIN.font_col1,
            },
            splitLine:{               
                show: true,            
                lineStyle:{
                    color:SKIN.echarts_line_col,
                    width:1,
                    type: 'solid',
                    opacity: 0.6,
                },
            },
            splitArea:{              
                show:false,         
            },
        },
	    
    ],
    series: [       
       {
           name: line_lend[0],
           type: 'bar',
           yAxisIndex: 1,
           barWidth: '20%',
           itemStyle:{
             color: SKIN.store_fair_col
           },
           zlevel: 1,
           data: saveTol
        },
        {
            name: line_lend[1],
            type: 'bar',
            yAxisIndex: 1,
            barWidth: '20%',
            itemStyle:{
               color: SKIN.store_usage_col
            },
            zlevel: 1,
            data: saveUsed
        },
        {
            name: line_lend[2],
            type: 'line',
	   
            lineStyle:{
                color: SKIN.store_usage_rate_col
            },
            zlevel: 2,
            data: saveUsage
        } 
    ]
};
myChart.setOption(option);
//-----------------------------------------------------------------------------------柱状图加折线图2------------------------------------------------------------------
var myChart = echarts.init(document.getElementById('HHH282'));
option = {
    title:{
            text:line2_title,
            left:10,
            top:10,
            textStyle:{
                color:SKIN.second_title,
                fontSize:14
            }
        },
    grid: {
        x: '5%',
        y: '22%',
        x2: '7%',
        y2: '16%',
        borderWidth: 0
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: { 
        y: '6%',
        right: '10%',
        textStyle: {
            color:SKIN.font_col2,
            fontSize: 12
        },
        data: [{name:line_lend[0],icon:'rect'},{name:line_lend[1],icon:'rect'},{name:line_lend[2]}],
        width: 30,
        height: 30,
        orient:''
    },
    calculable: true,
    xAxis: [
        {
            type: 'category',
            show: 'true',
            axisTick: {show: true},
            axisLabel:{              
                show:true,                
                inside:false,             
                rotate:0,               
                margin: 8,           
                color:SKIN.font_col2,          
            },
            splitLine:{               
                show:false,            
                lineStyle:{
                    color:SKIN.echarts_line_col,
                    width:1,
                    type: 'solid',
                    opacity: 0.1,
                },
            },
            axisLine:{
                show:false
            },
            axisTick:{
		        show: false
	        },
           data: nameArr
        }
    ],
    yAxis: [

    {
            type: 'value',
            min: 0,
            max: 100,
            interval: 20,
            axisLabel: {
		color: SKIN.font_col1,
                formatter: '{value}%'
            },
	    axisLine:{
		show: false
	    },
	    splitLine:{
		show: false
	    },
	    axisTick:{
		show: false
	    },
        },
        {
            type: 'value',
            nameTextStyle:{          
                color:"#fff",
                padding:[5,0,0,5],  
            },
            nameGap:15,   
            axisLine:{               
                show:false,
                lineStyle:{
                    color:'#0b214a',
                    width:1,
                    type:'solid',
                },
            },
            axisTick:{                  
                show:false,               
                inside:true,              
                length:3,                    
                lineStyle:{
                    width:1,
                    type:'solid',
                },
            },
            axisLabel:{                
                show:true,                 
                inside:false,              
                rotate:0,                   
                margin: 8,               
                color: SKIN.font_col1,    
            },
            splitLine:{               
                show: true,            
                lineStyle:{
                    color:SKIN.echarts_line_col,
                    width:1,
                    type: 'solid',
                    opacity: 0.6,
                },
            },
            splitArea:{              
                show:false,         
            },
        },
	    
    ],
    series: [       
       {
           name: line_lend[0],
           type: 'bar',
           yAxisIndex: 1,
           barWidth: '20%',
           itemStyle:{
             color: SKIN.cpu_fair_col
           },
           zlevel: 1,
           data: cpuTol
        },
        {
            name: line_lend[1],
            type: 'bar',
            yAxisIndex: 1,
            barWidth: '20%',
            itemStyle:{
               color: SKIN.cpu_usage_col
            },
            zlevel: 1,
            data: cpuUsed
        },
        {
            name: line_lend[2],
            type: 'line',
	   
            lineStyle:{
                color: SKIN.cpu_usage_rate_col
            },
            zlevel: 2,
            data: cpuUsage
        } 
    ]
};
myChart.setOption(option);
//-----------------------------------------------------------------------------------柱状图加折线图3------------------------------------------------------------------
var myChart = echarts.init(document.getElementById('HHH240'));
option = {
    title:{
            text:line3_title,
            left:10,
            top:10,
            textStyle:{
                color:SKIN.second_title,
                fontSize:14
            }
        },
    grid: {
        x: '5%',
        y: '22%',
        x2: '7%',
        y2: '16%',
        borderWidth: 0
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: { 
        y: '6%',
        right: '10%',
        textStyle: {
            color: SKIN.font_col2,
            fontSize: 12
        },
        data: [{name:line_lend[0],icon:'rect'},{name:line_lend[1],icon:'rect'},{name:line_lend[2]}],
        width: 30,
        height: 30,
        orient:''
    },
    calculable: true,
    xAxis: [
        {
            type: 'category',
            show: 'true',
            axisTick: {show: true},
            axisLabel:{              
                show:true,                
                inside:false,             
                rotate:0,               
                margin: 8,           
                color:SKIN.font_col2,         
            },
            splitLine:{               
                show:false,            
                lineStyle:{
                    color:SKIN.echarts_line_col,
                    width:1,
                    type: 'solid',
                    opacity: 0.1,
                },
            },
            axisLine:{
                show:false
            },
            axisTick:{
		        show: false
	        },
           data: nameArr
        }
    ],
    yAxis: [

    {
            type: 'value',
            min: 0,
            max: 100,
            interval: 20,
            axisLabel: {
		color: SKIN.font_col1,
                formatter: '{value}%'
            },
	    axisLine:{
		show: false
	    },
	    splitLine:{
		show: false
	    },
	    axisTick:{
		show: false
	    },
        },
        {
            type: 'value',
            nameTextStyle:{          
                color:"#fff",
                padding:[5,0,0,5],  
            },
            nameGap:15,   
            axisLine:{               
                show:false,
                lineStyle:{
                    color:'#0b214a',
                    width:1,
                    type:'solid',
                },
            },
            axisTick:{                  
                show:false,               
                inside:true,              
                length:3,                    
                lineStyle:{
                    width:1,
                    type:'solid',
                },
            },
            axisLabel:{                
                show:true,                 
                inside:false,              
                rotate:0,                   
                margin: 8,               
                color: SKIN.font_col1,    
            },
            splitLine:{               
                show: true,            
                lineStyle:{
                    color:SKIN.echarts_line_col,
                    width:1,
                    type: 'solid',
                    opacity: 0.6,
                },
            },
            splitArea:{              
                show:false,         
            },
        },
	    
    ],
    series: [       
       {
           name: line_lend[0],
           type: 'bar',
           yAxisIndex: 1,
           barWidth: '20%',
           itemStyle:{
             color: SKIN.ram_fair_col
           },
           zlevel: 1,
           data: memoryTol
        },
        {
            name: line_lend[1],
            type: 'bar',
            yAxisIndex: 1,
            barWidth: '20%',
            itemStyle:{
               color: SKIN.ram_usage_col
            },
            zlevel: 1,
            data: memoryUsed
        },
        {
            name: line_lend[2],
            type: 'line',
	   
            lineStyle:{
                color: SKIN.ram_usage_rate_col
            },
            zlevel: 2,
            data: memoryUsage
        } 
    ]
};
myChart.setOption(option);
//暂无数据处理
if(nameArr.length==0){
	$('#HHH16').empty().html('<p style="color:'+SKIN.font_col1+';font-size:16px;text-align:center">'+noData+'</p>')
	$('#HHH17').empty().html('<p style="color:'+SKIN.font_col1+';font-size:16px;text-align:center">'+noData+'</p>')
	$('#HHH18').empty().html('<p style="color:'+SKIN.font_col1+';font-size:16px;text-align:center">'+noData+'</p>')
}

//-----------------------------------------------------------------------------------饼图1------------------------------------------------------------------
//取数据
//服务正常数量
var serNorNum='<#=GRID13.C2#>';
//服务异常数量
var serAbnNum='<#=GRID13.D2#>';
//服务未知数量
var serUnkNum='<#=GRID13.E2#>';
//服务异常率
var serAbnRatio='<#=GRID13.F2#>';
//主机正常数量
var phyNorNum='<#=GRID13.C3#>';
//主机异常数量
var phyAbnNum='<#=GRID13.D3#>';
//主机未知数量
var phyUnkNum='<#=GRID13.E3#>';
//主机异常率
var phyAbnRatio='<#=GRID13.F3#>';
var serviveArr=[];
serviceArr=[{
    value:serAbnNum,name:pie_data_name[0]
},{
    value:serUnkNum,name:pie_data_name[1]
},{
    value:serNorNum,name:pie_data_name[2]
}]
var physicalArr=[]
physicalArr=[{
    value:phyAbnNum,name:pie_data_name[0]
},{
    value:phyUnkNum,name:'pie_data_name[1]'
},{
    value:phyNorNum,name:'pie_data_name[2]'
}]

var cs = '#HHH66{position: relative;width:100%;height:100%;}';
cs += '.goods1{position: absolute;top: 35%;left: 35%;width: 30%;height: 30%;border-radius: 50%;z-index: 11;}';
cs += '.loaderImg1{position: absolute;top: -50%;left: 46%;width: 80%;height: 85%;}';
cs += '.toRotate1 { -webkit-animation: spin 3s linear infinite;animation: spin 3s linear infinite;}';
cs += '@-webkit-keyframes spin {0% {-webkit-transform: rotate(0deg);-ms-transform: rotate(0deg);transform: rotate(0deg);}100% {-webkit-transform: rotate(360deg);-ms-transform: rotate(360deg);transform: rotate(360deg);}}';
cs += '@keyframes spin {0%   {-webkit-transform: rotate(0deg);-ms-transform: rotate(0deg); transform: rotate(0deg);}100% {-webkit-transform: rotate(360deg);-ms-transform: rotate(360deg);transform: rotate(360deg);} }';

cs += '.dataDiv4{position: absolute;top: 31%;left: 35%;width: 30%;height: 30%;color:#fff;z-index: 11;}';
cs += '.dataDiv4  p{text-align:center;}';
cs += '.dataDiv4 .dataZh4{width: 100%;height: 7px;font-size: 18px;font-weight: bold;text-align: center;position: absolute;top: 5%;left: -8%;color:'+SKIN.second_title+'}';
cs += '.dataDiv4 .zhCount4{width: 100%;height: 15px;font-size: 12px;text-align: center;position: absolute;top: 48%;left: -8%;color:'+SKIN.second_title+'}';
addStyleSheet(cs);addStyleSheet(cs);

var a=10;
//$("#HHH51").css({"width":"100%","height":"100%"});
$("#HHH51").html('<div id="HHH66"></div>'+
    '<div class="goods1 toRotate1">'+
    '<img class="loaderImg1 " src="vfs/root/products/ebi/sys/picture/OverallSituation/'+SKIN.radar_pic+'" style="width:60%;height:100%;"></div>'+
    '<div class="dataDiv4">'+
    '<p class="dataZh4">'+serAbnRatio+'%'+'</p>'+
    '<p class="zhCount4">'+abnormal_rate+'</p></div>');

//饼图
var myChart = echarts.init(document.getElementById('HHH66'));
        option = {
    title : {      
        y: '5%',
        left: '13%',
	top:'80%',
        textStyle: {
            color: '#fff',
            fontSize: 16
        }
    },
    tooltip : {
        trigger: 'item',
        formatter: "{b} : {c}"
    },
    color: SKIN.radar_col1,
    grid: {
        x: '30%',
        y: '35%',
        x2: '30%',
        y2: '0%',
        borderWidth: 0,
	top:'20%'
    },
    series : [
        {
            type:'pie',
            radius : [55, 75],
            //roseType : 'radius',
            hoverAnimation: false,
            cursor: 'auto',
	    labelLine:{  
                normal:{  
                    length:5
                }  
            }, 
            label: {
                normal: {
                    formatter: '           {c|{c}}   \n{hr|}\n  {b|{b}}',
                    rich: {
                        a: {
                            color: '#999',
                            width: 50,
                            lineHeight: 22,
                        },
                        hr: {
                            borderColor: '#aaa',
                            width: '100%',
                            align: 'left',
                            borderWidth: 0.5,
                            height: 0
                        },
                        b: {
                            fontSize: 12,
                            lineHeight: 28,
			    color: SKIN.font_col2,
                        },
                        c: {
                            fontSize: 20,
                            lineHeight: 26,
			    fontWeight: 'bold',
                        },
                        per: {
                            color: '#eee',
                            backgroundColor: '#334455',
                            borderRadius: 2
                        }
                    }
                }
            },
            data:serviceArr
        }
    ]
};
        myChart.setOption(option);
//主机列表
function scroll1(id) {
    var element = document.getElementById(id);
    slimScroll(element, {
        'wrapperClass': 'wrapper',
        'scrollBarContainerClass': 'scrollBarContaine',
        'scrollBarClass': 'scrollBar'
    });
}
scroll1('HHH67');
$('#HHH67').find('.scrollBar').css('background','#00B8E6');
//暂无数据处理
var serviceTol='<#=GRID13.C4#>';
if(serviceTol==0){
	$('#HHH51').empty().html('<p style="color:'+SKIN.font_col1+';font-size:16px;text-align:center">'+noData+'</p>')
	$('#HHH75').remove()
}

//获取时间函数
function showtime(){
 	var date=new Date();
	var year=date.getFullYear();
	var month=date.getMonth()+1;
	var day=date.getDate();
	var hours=date.getHours();
	var minutes=date.getMinutes();
	var seconds=date.getSeconds();
        if(day==0){
        day=='日';
        }
        if(seconds<10){
		seconds="0"+seconds;
	}
	if (minutes<10) {
		minutes="0"+minutes;
	}
	if (hours<10) {
		hours="0"+hours;
	}
	var time=year+"-"+month+"-"+day+" "+hours+":"+minutes+":"+seconds;
	var o=document.getElementById("HHH136");
    o.innerHTML=time;
    o.style.fontSize='16px';
    o.style.color=SKIN.font_col1;
    setTimeout(showtime,1000)
   }
//showtime();

//列表
var circleName=<#=GRID17.B2$#>
if(circleName.length==0){
	$('#HHH67').empty().html('<p style="color:'+SKIN.font_col1+';font-size:16px;text-align:center">'+noData+'</p>')
}

/**
//换肤代码
var labels='<div id="div1" style="width:100px;height:30px;position: relative;box-sizing: border-box;left:100px;">'
      + '<img src="vfs/root/products/ebi/sys/picture/bigdata_V3/'+SKIN.time_alarm_pic+'" alt="" style="position:relative;left:13px;display:none" id="img1"/>'
      + '<img src="vfs/root/products/ebi/sys/picture/bigdata_V3/'+SKIN.change_color_pic+'"style="position:relative;left:26px;"alt=""id="img2"/>'
      + '<div id="dv2" style="width:150px;height:150px;position:absolute;background:'+SKIN.skin_bg_col+';z-index:100;left:-50px;top:30px;border:1px solid '+ SKIN.skin_border_col +';box-sizing: border-box;display:none">'
      + '<div>' 
      + '<span style="display:inline-block;line-height: 30px;vertical-align: top;background: '+ SKIN.skin_title_col +';color:#fff;padding: 0 5px">'+color_title+'</span>'
      + '<div class="kailong" style="width:0;height:0;border-top:15px solid transparent;border-bottom:15px solid transparent;border-left:15px solid '+ SKIN.skin_title_col +';display: inline-block;margin-left: 0px;"></div>'
      + '</div>'
      + '<div id="row1" style="height:50px;padding: 10px 0;position: relative;cursor: pointer;">'
      + '<span style="padding: 5px 15px;display: inline-block;vertical-align: top;color:'+SKIN.skin_border_col+'">'+color_type1+'</span><div style="width:25px;height:25px;background: #000066;position:absolute;right:20px;top:12px;"></div>'
      + '</div>'
      + '<div id="row2" style="height:50px;padding: 10px 0;position: relative;cursor: pointer;">'
      + '<span style="padding: 5px 15px;display: inline-block;vertical-align: top;color:'+SKIN.skin_border_col+'">'+color_type2+'</span><div style="width:25px;height:25px;background: #B27F3E;position:absolute;right:20px;top:12px;"></div>'
      + '</div>'
      + '</div>'
      + '</div>'
$('#HHH220').append(labels)

// 数据时间检测提醒
var today_time = $('#todaytime span').text();
var data_time = '<#=@BBQ#>'.slice(0,8);
if( today_time != data_time ){
    $('#img1').show();
    var tips_content = '';
    tips_content += '<div id="tips" style="width: 200px;height: auto;left: auto;right: 50px;top: 30px;color: white;border: 1px solid '+ SKIN.normal_color +';padding: 10px;position:absolute;display: none;z-index:100">';
    tips_content += '<p style="color:'+SKIN.font_col1+';margin:0px 5px;text-indent: 0;">'+data_of_page+'<span>'+ data_time +'</span></p>';
    tips_content += '<p style="color:'+SKIN.font_col1+';margin:0px 5px;text-indent: 0;">'+today_date+'<span>'+ today_time+'</span></p></div>';
    $('#HHH220').append(tips_content);
}
$('#HHH220').on('mouseenter','#img1',function(){
	$('#tips').show();
})
$('#HHH220').on('mouseleave','#img1',function(){
	$('#tips').hide();
})

//进入显示
$('#HHH220').on('mouseenter','#img2',function(){
	$('#dv2').fadeIn()
})
//离开隐藏
$('#HHH220').on('mouseleave','#dv2',function(){
	$('#dv2').fadeOut()
})
//点击蓝色
$('#HHH220').on('click','#row1',function(){
	//1.	改变上面那两个图片
	//$('#img1').attr('src','vfs/root/products/ebi/sys/picture/bigdata_V3/blue_alarm.png')
	//$('#img2').attr('src','vfs/root/products/ebi/sys/picture/bigdata_V3/blue_color.png')
	//2.换肤
	setCookie('SKIN1')
	_z('<#=srcrpt.id#>','drillpath=;hiddencalcparams=false');
})
//点击棕色
$('#HHH220').on('click','#row2',function(){
	//1.	改变上面那两个图片
	//$('#img1').attr('src','vfs/root/products/ebi/sys/picture/bigdata_V3/brown_alarm.png')
	//$('#img2').attr('src','vfs/root/products/ebi/sys/picture/bigdata_V3/brown_color.png')
	//2.换肤
	setCookie('SKIN2')
	//console.log(skin_style)
	_z('<#=srcrpt.id#>','drillpath=;hiddencalcparams=false');
	
})
var ss = getCookie('color')
*/
