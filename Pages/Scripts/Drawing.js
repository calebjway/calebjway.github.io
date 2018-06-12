//Source http://slicker.me/javascript/yinyang.htm
function circle(x,y,radius,color) {
        context.fillStyle = color;
        context.beginPath();
        context.arc(x, y, radius, 0, 2 * Math.PI);
        context.fill();
}
function circleTest(x,y,radius,color) {
        contextTest.fillStyle = color;
        contextTest.beginPath();
        contextTest.arc(x, y, radius, 0, 2 * Math.PI);
        contextTest.fill();
}

function animate() {
        let x1=canvas.width/2+80*Math.sin(counter/Math.PI/4);
        let y1=canvas.height/2+80*Math.cos(counter/Math.PI/4);
        let x2=canvas.width/2+80*Math.sin(counter/Math.PI/4+Math.PI);
        let y2=canvas.height/2+80*Math.cos(counter/Math.PI/4+Math.PI);

        circle(x1,y1,80,'rgb(255,255,255)');
        circle(x2,y2,80, 'rgb(0,0,0)');
        circle(x2,y2,10,'rgb(255,255,255)');
        circle(x1,y1,10,'rgb(0,0,0)');
        window.requestAnimationFrame(animate);
}
function animateTest() {
        let Testx1=canvasTest.width/2+80*Math.sin(counterTest/Math.PI/4);
        let Testy1=canvasTest.height/2+80*Math.cos(counterTest/Math.PI/4);
        let Testx2=canvasTest.width/2+80*Math.sin(counterTest/Math.PI/4+Math.PI);
        let Testy2=canvasTest.height/2+80*Math.cos(counterTest/Math.PI/4+Math.PI);

        var redColor = document.getElementById("RedAmount").value;

        circleTest(Testx1,Testy1,80,'rgb(255,0,0)');
        circleTest(Testx1,Testy1,10,'rgb(0,0,255)');
        circleTest(Testx2,Testy2,80,'rgb(0,0,255)');
        circleTest(Testx2,Testy2,10,'rgb(255,0,0)');
        counterTest++;
        window.requestAnimationFrame(animateTest);
}
