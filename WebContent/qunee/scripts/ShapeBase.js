//圆
function createNodes_Circle(evt, graph, xy, info) {
    var shape = graph.createShapeNode(null, xy.x, xy.y);
    var r = 50;
    var x = 0;
    var y = 0;
    var c = r * Math.tan(Math.PI / 8);
    var d = r * Math.sin(Math.PI / 4);

    shape.moveTo(x + r, y);
    shape.quadTo(x + r, y + c, x + d, y + d);
    shape.quadTo(x + c, y + r, x, y + r);
    shape.quadTo(x - c, y + r, x - d, y + d);
    shape.quadTo(x - r, y + c, x - r, y);
    shape.quadTo(x - r, y - c, x - d, y - d);
    shape.quadTo(x - c, y - r, x, y - r);
    shape.quadTo(x + c, y - r, x + d, y - d);
    shape.quadTo(x + r, y - c, x + r, y);
    shape.set("Chart","Circle");
    shape.setStyle(Q.Styles.SHAPE_FILL_COLOR, "#fff");
}
//半圆
function createNodes_Semicircle(evt, graph, xy, info) {
    var shape = graph.createShapeNode(null, xy.x, xy.y);
    var r = 50;
    var x = 0;
    var y = 0;
    var c = r * Math.tan(Math.PI / 8);
    var d = r * Math.sin(Math.PI / 4);

    shape.moveTo(x, y - r);
    shape.quadTo(x + c, y - r, x + d, y - d);
    shape.quadTo(x + r, y - c, x + r, y);
    shape.quadTo(x + r, y + c, x + d, y + d);
    shape.quadTo(x + c, y + r, x, y + r);
    shape.closePath();
    shape.set("Chart","Semicircle");
    shape.setStyle(Q.Styles.SHAPE_FILL_COLOR, "#fff");
}
//矩形
function createNodes_Rectangle(evt, graph, xy, info) {
    var shape = graph.createShapeNode(null, xy.x, xy.y);
    shape.moveTo(-50, 50);
    shape.lineTo(50, 50);
    shape.lineTo(50, -50);
    shape.lineTo(-50, -50);
    shape.closePath();
    shape.set("Chart","Rectangle");
    shape.setStyle(Q.Styles.SHAPE_FILL_COLOR, "#fff");
}
//三角形
function createNodes_Triangle(evt, graph, xy, info) {
    var shape = graph.createShapeNode(null, xy.x, xy.y);
    shape.moveTo(-50, 50);
    shape.lineTo(50, 0);
    shape.lineTo(-50, -50);
    shape.closePath();
    shape.set("Chart","Triangle");
    shape.setStyle(Q.Styles.SHAPE_FILL_COLOR, "#fff");
}
//菱形
function createNodes_Rhombus(evt, graph, xy, info) {
    var shape = graph.createShapeNode(null, xy.x, xy.y);
    shape.moveTo(0, 50);
    shape.lineTo(50, 0);
    shape.lineTo(0, -50);
    shape.lineTo(-50, 0);
    shape.closePath();
    shape.set("Chart","Rhombus");
    shape.setStyle(Q.Styles.SHAPE_FILL_COLOR, "#fff");
}
//平行四边形
function createNodes_Parallelogram(evt, graph, xy, info) {
    var shape = graph.createShapeNode(null, xy.x, xy.y);
    shape.moveTo(-25, -50);
    shape.lineTo(75, -50);
    shape.lineTo(25, 50);
    shape.lineTo(-75, 50);
    shape.closePath();
    shape.set("Chart","Parallelogram");
    shape.setStyle(Q.Styles.SHAPE_FILL_COLOR, "#fff");
}
//梯形
function createNodes_Trapezoid(evt, graph, xy, info) {
    var shape = graph.createShapeNode(null, xy.x, xy.y);
    shape.moveTo(-25, -50);
    shape.lineTo(25, -50);
    shape.lineTo(50, 50);
    shape.lineTo(-50, 50);
    shape.closePath();
    shape.set("Chart","Trapezoid");
    shape.setStyle(Q.Styles.SHAPE_FILL_COLOR, "#fff");
}
//五边形
function createNodes_Pentagon(evt, graph, xy, info) {
    var shape = graph.createShapeNode(null, xy.x, xy.y);
    var ab = 100 * Math.cos(2 * Math.PI / 360 * 54);
    var ad = ab / 2;
    var df = ad / Math.tan(2 * Math.PI / 360 * 72);
    var cd = 100 - df;
    var ce = ab * Math.cos(2 * Math.PI / 360 * 54);
    var ed = cd - ce;
    var be = ab * Math.sin(2 * Math.PI / 360 * 54);
    var od = 50 - df;
    shape.moveTo(ad, od);
    shape.lineTo(be, -1 * ed + od);
    shape.lineTo(0, -50);
    shape.lineTo(-1 * be, -1 * ed + od);
    shape.lineTo(-1 * ad, od);
    shape.closePath();
    shape.set("Chart","Pentagon");
    shape.setStyle(Q.Styles.SHAPE_FILL_COLOR, "#fff");
}
//六边形
function createNodes_Hexagon(evt, graph, xy, info) {
    var shape = graph.createShapeNode(null, xy.x, xy.y);
    var ab = Math.sqrt(50 * 50 - 25 * 25);
    shape.moveTo(25, ab);
    shape.lineTo(50, 0);
    shape.lineTo(25, -ab);
    shape.lineTo(-25, -ab);
    shape.lineTo(-50, 0);
    shape.lineTo(-25, ab);
    shape.closePath();
    shape.set("Chart","Hexagon");
    shape.setStyle(Q.Styles.SHAPE_FILL_COLOR, "#fff");
}
//十字形
function createNodes_Cross(evt, graph, xy, info) {
    var shape = graph.createShapeNode(null, xy.x, xy.y);
    shape.moveTo(-15, -50);
    shape.lineTo(15, -50);
    shape.lineTo(15, -15);
    shape.lineTo(50, -15);
    shape.lineTo(50, 15);
    shape.lineTo(15, 15);
    shape.lineTo(15, 50);
    shape.lineTo(-15, 50);
    shape.lineTo(-15, 15);
    shape.lineTo(-50, 15);
    shape.lineTo(-50, -15);
    shape.lineTo(-15, -15);
    shape.closePath();
    shape.set("Chart","Cross");
    shape.setStyle(Q.Styles.SHAPE_FILL_COLOR, "#fff");
}
//弧线
function createNodes_Arc(evt, graph, xy, info) {
    var shape = graph.createShapeNode(null, xy.x, xy.y);

    shape.moveTo(-50, 0);
    shape.curveTo(-25, -50, 25, -50, 50, 0);
    shape.set("Chart","Arc");
    shape.setStyle(Q.Styles.SHAPE_FILL_COLOR, "rgba(0,0,0,0)");
}
//箭头1
function createNodes_Arrow1(evt, graph, xy, info) {
    var shape = graph.createShapeNode(null, xy.x, xy.y);
    shape.moveTo(-50, -50);
    shape.lineTo(50, 0);
    shape.lineTo(-50, 50);
    shape.lineTo(-25, 0);
    shape.closePath();
    shape.set("Chart","Arrow1");
    shape.setStyle(Q.Styles.SHAPE_FILL_COLOR, "#fff");
}
//箭头2
function createNodes_Arrow2(evt, graph, xy, info) {
    var shape = graph.createShapeNode(null, xy.x, xy.y);
    shape.moveTo(-20, -50);
    shape.lineTo(50, 0);
    shape.lineTo(-20, 50);
    shape.lineTo(-10, 15);
    shape.lineTo(-50, 15);
    shape.lineTo(-50, -15);
    shape.lineTo(-10, -15);
    shape.closePath();
    shape.set("Chart","Arrow2");
    shape.setStyle(Q.Styles.SHAPE_FILL_COLOR, "#fff");
}
//箭头3
function createNodes_Arrow3(evt, graph, xy, info) {
	var shape = graph.createShapeNode(null, xy.x, xy.y);
	shape.moveTo(-30,0);
	shape.lineTo(20,0);
	shape.lineTo(15,-5);
	shape.lineTo(30,0);
	shape.lineTo(15,5);
	shape.lineTo(20,0);
	// 创建label
	var r = 20;
	var c = r * Math.tan(Math.PI / 8);
	var d = r * Math.sin(Math.PI / 4);
	var label = new Q.LabelUI();  
    label.rotate = 0;
    label.position = {x:r+d,y:0};
    label.anchorPosition = Q.Position.RIGHT_BOTTOM;
    label.data = "箭头";
    shape.addUI(label);
	shape.set("Chart","Arrow3");
    shape.setStyle(Q.Styles.SHAPE_FILL_COLOR, "#fff");
}
// 标识
function createNodes_Flag(evt, graph, xy, info){
	var shape = graph.createShapeNode(null, xy.x, xy.y);
	shape.moveTo(30,0);
	shape.lineTo(0,0);
	shape.moveTo(0,0);
	shape.lineTo(-30,40);
	shape.lineTo(-30,30);
	shape.lineTo(-35,45);
	shape.lineTo(-20,40);
	shape.lineTo(-30,40);
	// 创建label
	var r = 20;
	var c = r * Math.tan(Math.PI / 8);
	var d = r * Math.sin(Math.PI / 4);
	var label = new Q.LabelUI();  
    label.rotate = 0;
    label.position = {x:2*d,y:0};
    label.anchorPosition = Q.Position.RIGHT_TOP;
    label.data = "标识";
    shape.addUI(label);
	shape.set("Chart","Flag");
    shape.setStyle(Q.Styles.SHAPE_FILL_COLOR, "#fff");
}
// 水平线
function createNodes_AcrossLine(evt, graph, xy, info){
    var shape = graph.createShapeNode(null, xy.x, xy.y);
    shape.moveTo(-60, 0);
    shape.lineTo(60, 0);
    // 创建label
	var label = new Q.LabelUI();  
    label.rotate = 0;
    label.position = {x:20,y:0};
    label.anchorPosition = Q.Position.RIGHT_BOTTOM;
    label.data = "AB";
    shape.addUI(label);
    shape.set("Chart","AcrossLine");
    shape.setStyle(Q.Styles.SHAPE_FILL_COLOR, "#fff");
}
//垂直线  没有字
function createNodes_VerticalLine(evt, graph, xy, info){
    var shape = graph.createShapeNode(null, xy.x, xy.y);
    shape.moveTo(0, -60);
    shape.lineTo(0, 60);
    shape.set("Chart","VerticalLine");
    shape.setStyle(Q.Styles.SHAPE_FILL_COLOR, "#fff");
}

//垂直线  顶部
function createNodes_VerticalLineT(evt, graph, xy, info){
    var shape = graph.createShapeNode(null, xy.x, xy.y);
    shape.moveTo(0, -60);
    shape.lineTo(0, 60);
    // 创建label
	var label = new Q.LabelUI();  
    label.rotate = -Math.PI/2;
    label.position = {x:-12,y:0};
    label.anchorPosition = Q.Position.CENTER_TOP;
    label.data = "AB";
    shape.addUI(label);
    shape.set("Chart","VerticalLineT");
    shape.setStyle(Q.Styles.SHAPE_FILL_COLOR, "#fff");
}

//垂直线  底部
function createNodes_VerticalLineB(evt, graph, xy, info){
    var shape = graph.createShapeNode(null, xy.x, xy.y);
    shape.moveTo(0, 60);
    shape.lineTo(0, -60);
    // 创建label
	var label = new Q.LabelUI();  
    label.rotate = Math.PI/2;
    label.position = {x:0,y:0};
    label.anchorPosition = Q.Position.CENTER_TOP;
    label.data = "AB";
    shape.addUI(label);
    shape.set("Chart","VerticalLineB");
    shape.setStyle(Q.Styles.SHAPE_FILL_COLOR, "#fff");
}

//u字形
function createNodes_UPicture(evt, graph, xy, info){
	var shape = graph.createShapeNode(null, xy.x, xy.y);
	shape.moveTo(-35, -20);
	shape.lineTo(15, -20);
	var r = 20;
	var x = 15;
	var y = 0;
	var c = r * Math.tan(Math.PI / 8);
	var d = r * Math.sin(Math.PI / 4);
	shape.moveTo(x, y - r);
	shape.quadTo(x + c, y - r, x + d, y - d);
	shape.quadTo(x + r, y - c, x + r, y);
	shape.quadTo(x + r, y + c, x + d, y + d);
	shape.quadTo(x + c, y + r, x, y + r);
	shape.moveTo(15, 20);
	shape.lineTo(-35, 20);
	shape.set("Chart","UPicture");
    shape.setStyle(Q.Styles.SHAPE_FILL_COLOR, "rgba(0,0,0,0)");
}
