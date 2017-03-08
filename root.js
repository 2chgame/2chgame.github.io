$(function()
{
	function load_js(path)
	{
		var js = document.createElement("script");
		js.type = "text/javascript";
		js.src = 'htt' + 'ps://2chgame.github.io/' + path;
		js.charset = "UTF-8";
		document.body.appendChild(js);
	}

	function load_jss(paths)
	{
		for (var i in paths)
		{
			load_js(paths[i]);
		}
	}
	if (typeof HK_INITIALIZED != "undefined")
	{
		return;
	}
	
	HK_INITIALIZED = true; 
	DEBUG = false;
	LOCAL_HOST = true;

	//load_jss(['base64.js', 'rawinflate.js', 'rawdeflate.js', 'engine.js', 'core.js', 'game.js', 'hk.js', 'md5.min.js']);
	load_jss(['base64.js', 'md5.min.js']);
	
	alert("2chgame initialized!\n\nДобро пожаловать, снова.")
	/*		
	$(document.documentElement).append('<link href="http://localhost:8080/2chgame/game.css" rel="stylesheet" media="all">
			<div style="position: fixed; left: 10px; top: 10px; width: 1000px; z-index: 1000; background: #000; padding: 5px;" id="wars_root">
				<canvas id="main" width="1000" height="600"></canvas>
			<div>
				<a href="#" class="panelButton" id="wars_hide" style="float: left;" title="Скрыть окно">
					<img src="http://localhost:8080/2chgame/images/hide.gif" style="margin-top: 7px;"></a>
				<a href="#" class="panelButton" id="wars_refresh" style="float: left;" title="Обновить тред">
					<img src="http://localhost:8080/2chgame/images/refresh.gif" style="margin-top: 7px;"></a>
				<a href="#" class="panelButton" id="wars_replay" style="float: left;" title="Показать еще раз">
					<img src="http://localhost:8080/2chgame/images/replay.gif" style="margin-top: 7px;"></a>
				<a href="#" class="panelButton" id="wars_map" style="float: left;" title="Карта">
					<img src="http://localhost:8080/2chgame/images/map.gif" style="margin-top: 7px;"></a>
				<div id="hk_info_panel"></div>
				<div id="hk_main_panel"></div>
			</div>
			</div>
			<div style="position: fixed; left: 10px; top: 10px; width: 32px; height: 32px; z-index: 1000; background: #000; padding: 5px; cursor: pointer;" id="wars_show">
			<img src="http://localhost:8080/2chgame/images/show.png"></div>');
	
	
	//LOCAL 
	//$(document.documentElement).append('<link href="http://localhost:8080/2chgame/game.css" rel="stylesheet" media="all"><div style="position: fixed; left: 10px; top: 10px; width: 1000px; z-index: 1000; background: #000; padding: 5px;" id="wars_root"><canvas id="main" width="700" height="500"></canvas><div><a href="#" class="panelButton" id="wars_hide" style="float: left;" title="Скрыть окно"><img src="http://localhost:8080/2chgame/images/hide.gif" style="margin-top: 7px;"></a><a href="#" class="panelButton" id="wars_refresh" style="float: left;" title="Обновить тред"><img src="http://localhost:8080/2chgame/images/refresh.gif" style="margin-top: 7px;"></a><a href="#" class="panelButton" id="wars_replay" style="float: left;" title="Показать еще раз"><img src="http://localhost:8080/2chgame/images/replay.gif" style="margin-top: 7px;"></a><a href="#" class="panelButton" id="wars_map" style="float: left;" title="Карта"><img src="http://localhost:8080/2chgame/images/map.gif" style="margin-top: 7px;"></a><div id="hk_info_panel"></div><div id="hk_main_panel"></div></div></div><div style="position: fixed; left: 10px; top: 10px; width: 32px; height: 32px; z-index: 1000; background: #000; padding: 5px; cursor: pointer;" id="wars_show"><img src="http://localhost:8080/2chgame/images/show.png"></div>');
			
	
	$('#wars_show').hide();
		
	$('#wars_hide').click(function()
	{
		$('#wars_root').hide();
		$('#wars_show').show();
						
		return false;
	});
	
	$('#wars_show').click(function()
	{
		$('#wars_root').show();
		$('#wars_show').hide();
		
		return false;
	});
	
	/*
	$('#wars_refresh').click(function()
	{
		updateThread();
		
		return false;
	});
	
	$('#wars_replay').click(function()
	{
		world.replay();
		
		return false;
	});
	
	$('#wars_map').click(function()
	{
		world.switchMiniMap();
		
		return false;
	});


	setInterval(function()
	{
		updateThread();
	}, 30000);
	*/
});