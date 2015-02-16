function AreaTable(index){
	var abstract = ("<li>名稱："+result.event_area[index].name+"</li>");
	abstract += ("<li>單位："+result.event_area[index].unit+"</li>");
	abstract += ("<li>說明："+result.event_area[index].text+"</li>");
	abstract += ("<li>獎勵："+result.event_area[index].reward+"</li>");
	abstract += ("<li>附註："+result.event_area[index].other+"</li>");
	abstract += ("<li>參考資料："+"<a href='"+result.event_area[index].from_w+"'>ロードラ攻略Wiki</a>"+"(GPL授權)、<a href='"+result.event_area[index].from_b+"'>iphonegamer攻略Blog</a>"+"</li>");

	var area_table = "<table><tr><th>名稱</th><th>難度</th><th>距離</th><th>體力</th><th>經驗</th><th>BOSS</th><th>特性</th><th>BOSS掉落</th><th>特殊怪與掉落</th><th>挑戰</th><th>其他</th></tr>";

	for (var i = 0; i < result.event_area[index].quest.length; i++) {
		area_table += "<tr>";
		area_table += ("<td>"+result.event_area[index].quest[i].name+"</td>");
		area_table += ("<td>"+result.event_area[index].quest[i].dif+"</td>");
		area_table += ("<td>"+result.event_area[index].quest[i].dis+"</td>");
		area_table += ("<td>"+result.event_area[index].quest[i].suta+"</td>");
		area_table += ("<td>"+result.event_area[index].quest[i].pp+"</td>");
		area_table += ("<td>"+result.event_area[index].quest[i].boss+"</td>");
		area_table += ("<td>"+result.event_area[index].quest[i].chara+"</td>");
		area_table += ("<td>"+result.event_area[index].quest[i].fall+"</td>");
		area_table += ("<td>"+result.event_area[index].quest[i].rare+"</td>");
		area_table += ("<td>"+result.event_area[index].quest[i].chal+"</td>");
		area_table += ("<td>"+result.event_area[index].quest[i].other+"</td>");
		area_table += "</tr>";
	};

	area_table += "</table>";
	area_table = area_table.replace(/ /g, "<br>");

	document.getElementById("abstract").innerHTML = abstract;
	document.getElementById("area_table").innerHTML = area_table;
}