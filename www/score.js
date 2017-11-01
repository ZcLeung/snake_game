var person = {
		name:"",
		score:"",
		time:""
	};

	var player = new Array();

	function showrow(name,num,time){
		var tr = document.createElement("tr");
		var td1 = document.createElement("td");
		var span = document.createElement("span");
		var td2 = document.createElement("td");
		var td3 = document.createElement("td");
		var td4 = document.createElement("td");
		var delebtn = document.createElement("a");

		delebtn.className = "btn btn-warning";
		delebtn.innerHTML = "delete";
		delebtn.onclick = function(){
			var index;
			var delerow = this.parentNode.parentNode;
			game_list.removeChild(delerow);
			for(i=0;i<game_list.length;i++){
				if(game_list[i].name==this.parentNode.parentNode.firstChild.innerHTML)
					{index = i;}
			}
			player.splice(index,1);	
			saveLS();
			refreshList();		
		};

		span.innerHTML = name;
		td1.appendChild(span);
		td2.innerHTML = num;
		td3.innerHTML = time;
		td4.appendChild(delebtn);
		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		tr.appendChild(td4);
		game_list.appendChild(tr);
	}

	function delete_table(){
		var tr_list = document.querySelectorAll("#game_list tr");
		for(i=0;i<tr_list.length;i++){
			game_list.removeChild(tr_list[i]);
		}
	}
	
	function refreshList(){
		getLS();
		delete_table();
		if(player != null){
			for (i=0; i<player.length-1; i++){
		    	for(j=0; j<player.length-1-i;j++){
			        if(Number(player[j].score) < Number(player[j+1].score)){
			            var m = player[j];
			            player[j] = player[j+1];
			            player[j+1] = m;
			        }
		    	}	
			}
			player = player.slice(0,5);
			console.log(player);
			saveLS();
			for(var i=0; i<player.length; i++){
				showrow(player[i].name,player[i].score,player[i].time);
			}
		}
		addIconFont();
		
	}

	function addIconFont(){
		var $td1 = $('tbody>tr:nth-child(1)>td>span');
		var $td2 = $('tbody>tr:nth-child(2)>td>span');
		var $td3 = $('tbody>tr:nth-child(3)>td>span');
		var if1 = $('<i class="icon iconfont icon-tubiaozhizuomoban"></i>');
		var if2 = $('<i class="icon iconfont icon-2"></i>');
		var if3 = $('<i class="icon iconfont icon-3"></i>');
		$td1.before(if1);
		$td2.before(if2);
		$td3.before(if3);

	}

	/*window.onload = function(){
		refreshList();
	}*/
