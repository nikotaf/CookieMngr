(function(){
	var script=document.createElement("SCRIPT");
	script.src='https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js';
	script.type='text/javascript';
	script.onload=function(){
		var $=window.jQuery;
		$("#topBar").append("<span style='position:absolute;padding:4px;margin:0;top:0;right:188px;height:20px;background-color:#eee;color:#000;border:2px #DDDDDD outset;'><input type='checkbox' id='dodoobuy' /><label for='dodoobuy'>auto buy?</label> (<label for='dodootop'>top</label><input type='checkbox' id='dodootop' />)</span>");
		$("#topBar").append("<span style='position:absolute;padding:4px;margin:0;top:0;right:329px;height:20px;background-color:#eee;color:#000;border:2px #DDDDDD outset;'><input type='checkbox' id='dodooupgoo' /><label for='dodooupgoo'>auto upgrade?</label></span>");
	$("#topBar").append("<button style='position:absolute;padding:5px;margin:0;top:0;right:444px;height:32px;background-color:#eee;color:#000;' onclick='if(confirm(\"This will grant you a shadow cheating achievment. Continue?\"))Game.OpenSesame();'>OPEN SESAME</button>");
		setInterval(function(){
		var chk=$("<input />").css({
				"position":"absolute",
				"width":"30px",
				"height":"30px",
				"top":"0",
				"left":"0",
				"padding":"0",
				"margin":"0",
				"z-index":1000000
			}).attr("class","buyque").prop({"type":"checkbox","checked":false});
			var checkall=$("<input />").css({
				"position":"absolute",
				"width":"20px",
				"height":"20px",
				"top":"29px",
				"left":"0",
				"padding":"0",
				"margin":"0",
				"z-index":1000000
			}).attr("class","checkall").prop({"type":"checkbox","checked":false});
			var inp=$("<input />").css({
				"position":"absolute",
				"width":"30px",
				"height":"20px",
				"top":"0",
				"left":"30px",
				"padding":"0",
				"margin":"0",
				"z-index":1000000
			}).attr({"class":"buyamnt","size":"3","value":"100"}).prop("type","text");
			var fldwn=$("<input />").css({
				"position":"absolute",
				"width":"20px",
				"height":"20px",
				"top":"0",
				"left":"62px",
				"padding":"0",
				"margin":"0",
				"z-index":1000000,
				"font-size":"14px"
			}).attr({"class":"filldwn","value":"•"}).prop("type","button");
			$("#products .product").each(function(i){
				if(!$(".buyque",this).length){
					$(this).append(chk.clone()).find("input.buyque").on("click",function(event){
						event.stopPropagation();
					});
				}
				if(!$(".buyamnt",this).length){
					$(this).append(inp.clone()).find("input.buyamnt").on("click",function(event){
						event.stopPropagation();
					}).on("keypress",function(event){
						return event.charCode>=48 && event.charCode<=57;
					}).val((i==0?100:100));
				}
				if(!$(".filldwn",this).length){
					$(this).append(fldwn.clone()).find("input.filldwn").on("click",function(event){
						event.stopPropagation();
						var thsamnt=$(this).parent().find(".buyamnt").val();
						$("#products .product .buyamnt").each(function(){
							$(this).val(thsamnt);
						});
					});
				}
				if(!$(".checkall",this).length){
					$(this).append(checkall.clone()).find("input.checkall").on("click",function(event){
						event.stopPropagation();
						var thschck=$(this).prop("checked");
						$("#products .product .buyque").each(function(){
							$(this).prop("checked",thschck);
						});
					});
				}
			});
		},1000);
		setInterval(function(){
			if($("#dodooupgoo:checked").length>0 && $("#upgrades .upgrade.enabled").length>0)
				$("#upgrades .upgrade.enabled:eq(0)").trigger({type:"click",which:1});
			if($("#storeBulkBuy.selected").length>0 && $("#dodoobuy:checked").length>0 && $("#products .product.unlocked.enabled").length>0){
				var _=$("#products .product.unlocked.enabled").filter(function(){
					return ($("input.buyque:checked",this).length === 1 && Number($("input.buyamnt",this).val())>0);
				}).filter(($("#dodootop:checked").length?":first":":last"));
				var _source=Number($(".title.owned",_).text())||0;
				var _target=Number($("input.buyamnt",_).val());
				if(_target>_source){
					$(_).trigger({type:"click",which:1});
				}
				if(_target<=_source){
					$("input.buyque:checked",_).prop("checked",false);
				}
			}
		$("#products .product.unlocked").each(function(){
			_=$(this);
				_source=Number($(".title.owned",_).text())||0;
				_target=Number($("input.buyamnt",_).val());
				if(_target<=_source){
					$("input.buyque",_).prop("checked",false);
				}
		});
		},500);
	};
	document.getElementsByTagName("head")[0].appendChild(script);
	setInterval(function() {document.getElementById("bigCookie").click()}, 1);
})();
})();
