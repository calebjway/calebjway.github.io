//Source http://slicker.me/javascript/yinyang.htm
function circle(x,y,radius,color) {
        context.fillStyle = color;
        context.beginPath();
        context.arc(x, y, radius, 0, 2 * Math.PI);
        context.fill();
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
        counter++;
        window.requestAnimationFrame(animate);
}

function circleTest(x,y,radius,color) {
        contextTest.fillStyle = color;
        contextTest.beginPath();
        contextTest.arc(x, y, radius, 0, 2 * Math.PI);
        contextTest.fill();
}
function animateTest() {
        //alert(counterTest);
        //alert(buttonClicked);

        buttonClicked =0;
        let Testx1=canvasTest.width/2+80*Math.sin(counterTest/Math.PI/4);
        let Testy1=canvasTest.height/2+80*Math.cos(counterTest/Math.PI/4);
        let Testx2=canvasTest.width/2+80*Math.sin(counterTest/Math.PI/4+Math.PI);
        let Testy2=canvasTest.height/2+80*Math.cos(counterTest/Math.PI/4+Math.PI);

        //var ChosenColor = document.getElementById("ColorPicker").value;

        //var rgbColor = ChosenColor.toRgbString();
        //alert(rgbColor);
        circleTest(Testx1,Testy1,80,userColor);
        circleTest(Testx1,Testy1,10,userColorIn);
        circleTest(Testx2,Testy2,80,userColorIn);
        circleTest(Testx2,Testy2,10,userColor);
        counterTest++;
        curFrame = window.requestAnimationFrame(animateTest);
}
