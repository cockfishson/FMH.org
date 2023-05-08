var width_screen = window.innerWidth;
var padding = {top:20, right:40, bottom:0, left:0},
w = Math.floor(width_screen/2.5)  - padding.left - padding.right,
h = w,
r = Math.min(w, h)/2,
rotation = 0,
oldrotation = 0,
picked = 100000,
oldpick = [],
color = d3.scale.category20();

var data = [
        {"label":"Shakhtar Donetsk",  "value":1,  "question":"Legendar Ukranian club that have been competitor in Europe for past decade, can you bring them to European trophy?"}, 
        {"label":"DAC 1904",  "value":1,  "question":"Slovak football team, based in Dunajská Streda."}, 
        {"label":"Paris FC",  "value":1,  "question":"Can you finaly prove that's PFC is the biggest club atleast in Paris?"}, 
        {"label":"Cercle Brugge",  "value":1,  "question":"This club haven't won a single trophy since 1985. Can you end this?"}, 
        {"label":"Aris Thessaloniki",  "value":1,  "question":"Team with remarkeable perfofmance at home"}, 
        {"label":"Santa Clara",  "value":1,  "question":"You look like Benfica copycat, prove me wrong."}, 
        {"label":"Schalke 04",  "value":1,  "question":"Dominate in the Rhurh darby and prove those Dortmund fans that you are biggest club in Germany"}, 
        {"label":"Young Boys",  "value":1,  "question":"I refuse to make Benjamin Mendy joke"}, 
        {"label":"Dynamo Dresden",  "value":1,  "question":"Make Eastern Germany great again"}, 
        {"label":"Bate", "value":1, "question":"Barcelona of Belarus, assert your dominance in home country and win some European trophies"}, 
        {"label":"Petrolul 52", "value":1, "question":"First ever winner of Romanian league. Plan is simple make them great again"}, 
        {"label":"Elche", "value":1, "question":"Weakest club in La Liga right now, avoid relegation and maybe even win something"}, 
        {"label":"FC Andora", "value":1, "question":"It's only here cause Gerrard Pique ownes them"}, 
        {"label":"Parma", "value":1, "question":"Just interesting Italian club, nothing really interesting about them"}, 
        {"label":"Krumkachy", "value":1, "question":"Belarusian club of the people. Can you overcome everything and win Champions league"}, 
        {"label":"Stoke City", "value":1, "question":"Plan is simple. Just earn your place in EPL once again"}, 
        {"label":"Venezia", "value":1, "question":"Coldest kits and the biggest club in the Itali"}, 
        {"label":"Rostov", "value":1, "question":"Known for remarkable run in UEL in 2017. Can you clame this trophey?"}, 
        {"label":"Wolves", "value":1, "question":"Stragling club in EPL. Can you make the voices stop?"}, 
        {"label":"Burnley", "value":1, "question":"Just enjoy your time ther. Optional challenge: Brexit challenge, sign only people from British Islands"}, 
        {"label":"Charlotte", "value":1, "question":"I added only because of Maqwell video"}, 
        {"label":"Kristiansund", "value":1, "question":"Just cool club in Norway"}, 
        {"label":"Hammarby", "value":1, "question":"It's only here cause Zlatan ownes them"}, 
        {"label":"Legia Warsaw", "value":1, "question":"Biggest clun in Poland with best supporters"}, 
        {"label":"Salford", "value":1, "question":"This club is owned by many formar legends of English football bring them to glory"},
        {"label":"Groningen", "value":1, "question":"Club that raised many legends as Luis Suarez, bring them to glore"}, 
        {"label":"Dynamo Minsk", "value":1, "question":"If Bate is a Barcelona of Belarus, Then Dynamo is a Real Madrid of Belarus"}, 
        {"label":"Besektas", "value":1, "question":"Hey, Amigo, come to Besektas"},
        {"label":"Aberdeen", "value":1, "question":"Bring them to the same level Fergie did"}, 
        {"label":"1860 Munchen", "value":1, "question":"Biggest club in Germany"}
];


var svg = d3.select('#chart')
.append("svg")
.data([data])
.attr("width",  w + padding.left + padding.right)
.attr("height", h + padding.top + padding.bottom);

var container = svg.append("g")
.attr("class", "chartholder")
.attr("transform", "translate(" + (w/2 + padding.left) + "," + (h/2 + padding.top) + ")");

var vis = container
.append("g");

var pie = d3.layout.pie().sort(null).value(function(d){return 1;});

var arc = d3.svg.arc().outerRadius(r);

var arcs = vis.selectAll("g.slice")
.data(pie)
.enter()
.append("g")
.attr("class", "slice");


arcs.append("path")
.attr("fill", function(d, i){ return color(i); })
.attr("d", function (d) { return arc(d); });


arcs.append("text").attr("transform", function(d){
    d.innerRadius = 0;
    d.outerRadius = r;
    d.angle = (d.startAngle + d.endAngle)/2;
    return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")translate(" + (d.outerRadius -10) +")";
})
.attr("text-anchor", "end")
.text( function(d, i) {
    return data[i].label;
});

container.on("click", spin);


function spin(d){

container.on("click", null);

console.log("OldPick: " + oldpick.length, "Data length: " + data.length);
if(oldpick.length == data.length){SPIN
    console.log("done");
    container.on("click", null);
    return;
}

var  ps       = 360/data.length,
     pieslice = Math.round(1440/data.length),
     rng      = Math.floor((Math.random() * 1440) + 360);
    
rotation = (Math.round(rng / ps) * ps);

picked = Math.round(data.length - (rotation % 360)/ps);
picked = picked >= data.length ? (picked % data.length) : picked;


if(oldpick.indexOf(picked) !== -1){
    d3.select(this).call(spin);
    return;
} else {
    oldpick.push(picked);
}

rotation += 90 - Math.round(ps/2);

vis.transition()
    .duration(3000)
    .attrTween("transform", rotTween)
    .each("end", function(){

        d3.select(".slice:nth-child(" + (picked + 1) + ") path")
            .attr("fill", "#111");

        d3.select("#question h1")
            .text(data[picked].question);

        oldrotation = rotation;
    
        container.on("click", spin);
    });
}

svg.append("g")
.attr("transform", "translate(" + (w + padding.left + padding.right) + "," + ((h/2)+padding.top) + ")")
.append("path")
.attr("d", "M-" + (r*.15) + ",0L0," + (r*.05) + "L0,-" + (r*.05) + "Z")
.style({"fill":"black"});

container.append("circle")
.attr("cx", 0)
.attr("cy", 0)
.attr("r", 60)
.style({"fill":"white","cursor":"pointer"});

container.append("text")
.attr("x", 0)
.attr("y", 15)
.attr("text-anchor", "middle")
.text("SPIN")
.style({"font-weight":"bold", "font-size":"30px"});


function rotTween(to) {
var i = d3.interpolate(oldrotation % 360, rotation);
return function(t) {
return "rotate(" + i(t) + ")";
};
}


function getRandomNumbers(){
var array = new Uint16Array(1000);
var scale = d3.scale.linear().range([360, 1440]).domain([0, 100000]);

if(window.hasOwnProperty("crypto") && typeof window.crypto.getRandomValues === "function"){
    window.crypto.getRandomValues(array);
    console.log("works");
} else {
    for(var i=0; i < 1000; i++){
        array[i] = Math.floor(Math.random() * 100000) + 1;
    }
}

return array;
}
function check(){
    if (window.innerWidth <= 768) {
        document.querySelector(".main_thing").innerHTML = "<h1>Sorry this feature isn't supported on mobile devices</h1>";
    }
}