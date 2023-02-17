// JavaScript Document
var alertnum=0;
setTimeout("toolshow()",4000);

var zj= "  <div class=\"flagBox_c\" style=\"width:100%;height:100%;position:relative; z-index:99999;\">"
+ "        <div class=\"close_swt\" id=\"aclose\" style=\"position:absolute;right:5px;top:5px;cursor:pointer;\"> <i style=\"float:right;width:23px;height:23px;margin-left:12px;\"><img src=\"/swt/image/aclose.png\" alt=\"\" style=\"float:left\"></i><span style=\"color:#fff;font:14px/22px Arial;\">close</span> </div>"
+ "        <div class=\"center_n\" id=\"center_n\" style=\"position: absolute;width:300px;text-align:center; top:20%; left:50%; margin-Left:-150px;\">"
//+ "          <img src=\"/swt/wx.jpg\" style=\"width:110px; height:110px;\" alt=\"\"><p style=\"font:16px/22px Arial;width:100%;text-align:center;color:#fff;\"> 关注官方微信,获取最新优惠资讯</P>"
+ "   <img src=\"/swt/image/acenter_wx1.png\" >      <!--<p style=\"font:24px/45px Microsoft Arial;width:100%;text-align:center;color:#fff;\" id=\"atext\">sức khỏe có vấn đề ?</p>-->"
+ "            <p style=\"font:16px/40px Arial;width:100%;text-align:center;color:#fff;\">Bác sỹ đang yêu cầu được chat với bạn</p>"
+ "        </div>"
+ "        <div class=\"center_b\" style=\"width:100%;position:absolute;top:40%;left:0;\">"
//+ "            <div style=\"font:22px/48px Arial;color:#fff;text-align:center\">trong vòng một phút bác sỹ trả lời bạn</div>"
+ "            <div style=\"text-align:center;\"><a style=\"display:inline-block;overflow: hidden;width:120px;height:30px;border:1px solid #cac5b2;border-radius:5px;color:#FFF;background:#f00;font:20px/30px Microsoft Arial\" href=\"/swt/?e=centent&amp;p=centent\">đồng ý</a><a class='close_swt' style=\"display:inline-block;overflow: hidden;width:120px;height:30px;margin-left:15px;margin-top:10px;border:1px solid #cac5b2;border-radius:5px;color:#FFF;background:#206d67;font:20px/30px Microsoft Arial\" href=\"#\" >từ chối</a></div>"
+ "            <div style=\"text-align:center;\"></div>"
+ "        </div>"
+ "    </div>" ; 
document.write('<style type="text/css">.swt-db { display: block;fontFamily:Arial }.float_container { display: none; position: fixed; width: 100%; left: 0; bottom: 0; z-index:99999;  background-color:#206d67;background-image:linear-gradient(#abe5ef, #deceb7);background-image:-webkit-gradient(linear,left top,left bottom, color-stop(0% #abe5ef),color-stop(100%,#deceb7);)background-image:-webkit-linear-gradient(top,#abe5ef，#deceb7);background-image:-moz-linear-gradient(top,#abe5ef,#deceb7);background-image:-ms-linear-gradient(top,#abe5ef,#deceb7);background-image:-o-linear-gradient(top,#abe5ef,#deceb7);}.cf { zoom: 1; }.cf:before, .cf:after { display: block; content: ""; }.cf:after { clear: both; }.shadow { z-index: 1999; display:none; position: fixed; width: 100%; height: 100%; top: 0; left: 0; background-color: rgba(0,0,0,.7); }.float_container .title1a { background: #206d67; font-size: 15px; line-height: 40px; text-align:center; color: #fff; }.float_container .title1a a{ text-align:center; color:#fff;}.float_container .title1a a.tel { display: block; width: 50px; height: 40px;  position: absolute; cursor:pointer; right:0px; top:0px; background: url(/swt/image/tel.png) center center no-repeat; background-size: 40px; }.float_container .title1a span { display: inline-block; zoom:1; width: 50px; height: 40px; margin-top: -40px; margin-left: 2%; background: url(/images/tel.png) center center no-repeat; background-size: 40px; }.float_container .title1a .close_swt{ position: absolute; cursor:pointer; z-index: 3; right:0px; top: 0px; }.float_container dl { display: none; margin: 0; padding: 0; }.float_container dt { display: inline-block; width: 14%; float: left; margin: 34px 0 0 8px; text-align: center; }.float_container dt img { max-width: 100%; border: 0; border-radius: 50%; vertical-align: middle; -ms-interpolation-mode: bicubic; }.float_container dd { margin: 0; display: inline-block; position: relative; width: 68%; float: left; margin-top: 15px; }.float_container .time { font-size: 12px; line-height: 1.6; color: #6c6761; text-align: center; width: 100%; margin: 0; height: 1.6em; }.float_container .box { font:16px Arial,arial; text-align:left; color: #000; position: relative; margin-left: 5%; padding: 10px; border: 1px solid #7ebbe4; border-top-color: #b2daf0; border-radius: 12px; box-shadow: 0 3px 0 #3ea0dd, inset 0 1px 1px #fff;background-color:#c6e5fa;background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #c6e5fa), color-stop(100%, #a6d7f7));background-image: -webkit-linear-gradient(top, #c6e5fa, #a6d7f7);background-image: -moz-linear-gradient(top, #c6e5fa, #a6d7f7);background-image: -ms-linear-gradient(top, #c6e5fa, #a6d7f7);background-image: -o-linear-gradient(top, #c6e5fa, #a6d7f7);background-image: linear-gradient(top, #c6e5fa, #a6d7f7); }.float_container .box img { width: 22px; vertical-align: bottom; display:inline-block;}.float_container .box:before,.float_container .box:after { position: absolute; content: ""; }.float_container .box:before { width: 18px; height: 13px; top: -1px; left: -9px; /*background: url(/images/arrow.png) 0 0 no-repeat;*/ background-size: 18px; }.float_container .box:after { width: 40px; height: 26px; bottom: -4px; right: -7px;/* background: url(/swt/image/wave.png) 0 0 no-repeat;*/ background-size: 40px; }.float_container .btns { margin-top: 25px; padding: 10px 0; border-top: 1px solid #c7c7c0; border-bottom: 1px solid #979185; background-color: #eaebed; }.float_container .btns a { display: inline-block; width: 39%; height: 2em; float: left; margin: 0 5%; border: 1px solid #a6a5a1; border-radius: 12px; background-color: #206d67; box-shadow: 0 2px 2px #d1d1d3; font-size: 16px; color: #fff; line-height: 2; text-align: center; text-decoration: none; transition: all .3s linear 0s; }.float_container .btns a:hover { border-color: #959490; background-color: #5a5a5a; }@media screen and (max-width: 320px) {.float_container .title1a { font-size: 18px; background-size: 32px; }.float_container dd { width: 73%; }.float_container .box { font-size: 13px; }.float_container .box a{ color:#000 !important;}.float_container .btns a { border-radius: 10px; font-size: 15px; }}</style>');
var _fSwtHtm = '<div id="toopl" class="shadow">'+zj+'</div><div id="footTool" class="float_container cf"><div class="title1a"><a href="tel:02432878720">Điện thoại tư vấn：02432878720</a><a class="close_swt tel" ></a></div><dl id="tools2" class="cf swt-db">' +
'<a href="javascript:void(0)" onclick="openZoosUrl(\'chatwin\',\'&amp;e=%e5%ba%95%e9%83%a8%e5%92%a8%e8%af%a2\');LR_HideInvite();return false;" target="_blank"><dt><img src="/swt/image/ys.jpg"></dt><dd>' +
'<div class="box"><img src="/swt/image/smile.gif" alt="smile">&nbsp; <span style=" color:#000;">ưu đãi tháng 8 ở Đông Phương，<br/>1:ưu đãi 30% phí làm kiểm tra<br/>2:ưu đãi điều trị cho bệnh nhân có hoàn cảnh kh</div></dd></a></dl><dl id="tools3" class="cf swt-db">' +
'<div class="btns cf"><a href="tel:02432878720">Điện thoại tư vấn</a><a href="javascript:void(0)" onclick="openZoosUrl(\'chatwin\',\'&amp;e=%e5%ba%95%e9%83%a8%e5%92%a8%e8%af%a2\');LR_HideInvite();return false;" target="_blank" style="background-color:#206d67;">tư vấn trực tuyến</a></dl></div></div>';
document.write(_fSwtHtm);
//对话窗口右上角关闭按钮关闭效果
$(".close_swt").click(function(){
		$("#footTool").slideUp();
		$("#toopl").slideUp();
		if(alertnum<2){
			setTimeout("toolshow()",45000);
		}
	});
		var footTool = document.getElementById("footTool");
		var toopl = document.getElementById("toopl");
		var tools2 = document.getElementById("tools2");
		var tools3 = document.getElementById("tools3");
		function toolshow() {	
				footTool.style.display = "block";
				toopl.style.display = "block";
		//		setTimeout(toolshow2, 5000);
				alertnum++;
		}			
		function toolshow2() { tools2.style.display = "block"; 
        setTimeout(toolshow3, 1000);
		}
		function toolshow3() { tools3.style.display = "block";}
		function toolclose() {
			footTool.style.display = "none";
			toopl.style.display = "none";
		
		}