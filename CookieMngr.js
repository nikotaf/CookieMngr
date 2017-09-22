function _dodoo(obj){
    if($("html").data("click-click")){
        clearInterval($("html").data("click-click"));
        $("html").data("click-click","");
        $("#click-click").css({
            "background-color":"#eee",
            "color":"black"
        }).text("Start clicking");
    }else{
    	$("html").data("click-click",setInterval(function(){
    		$("#bigCookie").trigger({type:"click",which:1});
    		if ($("#shimmers").children().length>0 && (
				$("#shimmers .shimmer").length>1 ||
				!!(($("#shimmers .shimmer").css("background-image")||"").search("goldCookie.png")+1) ||
				!!(($("#sectionMiddle #centerArea #menu .subsection").filter(function(){return !!(($(".title",this).text()||"").search("Special")+1);}).find(".listing").filter(function(){return !!(($(this).text()||"").search("Grandmatriarchs")+1);}).text()||"").search("appeased")+1)
			)){
    			setTimeout(function(){$("#shimmers .shimmer").each(function(){
					$(this).trigger({type:"click",which:1})},200);
				});
			}
    	}, 1));
    	$("#click-click").css({
    		"background-color":"red",
    		"color":"green"
    	}).text("Stop clicking");
    }
}
(function(){
    var script=document.createElement("SCRIPT");
    script.src='https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js';
    script.type='text/javascript';
    script.onload=function(){
    	var $=window.jQuery,maxBldng=[500,350,350,350,350,350,350,350,350,350,350,350,350,350,350];
        $("#topBar").css("z-index","1000000").append("<button onclick='_dodoo()' style='position:absolute;padding:5px;margin:0;top:0;right:100px;height:32px;cursor:pointer;' id='click-click'>Start clicking</button>");
        $("#topBar").append("<span style='position:absolute;padding:4px;margin:0;top:0;right:188px;height:20px;background-color:#eee;color:#000;border:2px #DDDDDD outset;'><input type='checkbox' id='dodoobuy' /><label for='dodoobuy'>auto buy?</label> (<label for='dodootop'>top</label><input type='checkbox' id='dodootop' />)</span>");
        $("#topBar").append("<span style='position:absolute;padding:4px;margin:0;top:0;right:329px;height:20px;background-color:#eee;color:#000;border:2px #DDDDDD outset;'><input type='checkbox' id='dodooupgoo' /><label for='dodooupgoo'>auto upgrade?</label></span>");
		$("#topBar").append("<button style='position:absolute;padding:5px;margin:0;top:0;right:444px;height:32px;background-color:#eee;color:#000;' onclick='Game.OpenSesame();'>OPEN SESAME</button>");
        setInterval(function(){
            chk=$("<input />").css({
        		"position":"absolute",
        		"width":"30px",
        		"height":"30px",
        		"top":"0",
        		"left":"0",
        		"padding":"0",
        		"margin":"0",
        		"z-index":1000000
        	}).attr("class","buyque").prop({"type":"checkbox","checked":false});
			checkall=$("<input />").css({
        		"position":"absolute",
        		"width":"20px",
        		"height":"20px",
        		"top":"29px",
        		"left":"0",
        		"padding":"0",
        		"margin":"0",
        		"z-index":1000000
        	}).attr("class","checkall").prop({"type":"checkbox","checked":false});
        	inp=$("<input />").css({
        		"position":"absolute",
        		"width":"30px",
        		"height":"20px",
        		"top":"0",
        		"left":"30px",
        		"padding":"0",
        		"margin":"0",
        		"z-index":1000000
        	}).attr({"class":"buyamnt","size":"3","value":"100"}).prop("type","text");
			fldwn=$("<input />").css({
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
        	    	}).val(maxBldng[i]);
				}
            	if(!$(".filldwn",this).length){
        	    	$(this).append(fldwn.clone()).find("input.filldwn").on("click",function(event){
            			event.stopPropagation();
						thsamnt=$(this).parent().find(".buyamnt").val();
						$("#products .product .buyamnt").each(function(){
							$(this).val(thsamnt);
						});
        	    	});
            	}
				if(!$(".checkall",this).length){
					$(this).append(checkall.clone()).find("input.checkall").on("click",function(event){
						event.stopPropagation();
						thschck=$(this).prop("checked");
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
                _=$("#products .product.unlocked.enabled").filter(function(){
                    return ($("input.buyque:checked",this).length === 1 && Number($("input.buyamnt",this).val())>0);
                }).filter(($("#dodootop:checked").length?":first":":last"));
				_source=Number($(".title.owned",_).text())||0;
				_target=Number($("input.buyamnt",_).val());
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
})();
