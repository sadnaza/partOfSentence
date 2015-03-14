/**
 * Created by SvirbutovichEV on 12.03.2015.
 */
var sent=document.getElementById('sent');

var startX,startY,endX,endY=0;
document.onmousedown=function(event){
    startX=event.clientX;
    startY=event.clientY;
};
var style=0;
var answer=[];
for (i=0;i<5;answer[i]=[],i++);

document.onmouseup=function(event){
    endX=event.clientX;
    endY=event.clientY;
    console.log("["+startX+";"+startY+"]  ["+endX+";"+endY+"]");
    var div=document.createElement('div');
    document.body.appendChild(div);
    div.style.left= startX+"px";
    div.style.top=startY-10+"px";
    div.style.width=(endX-startX)+"px";
    div.style.marginTop=30+"px";
    div.className=style;
    if (window.getSelection().toString().length!=0) {
        answer[nowClass].push(window.getSelection().toString());
    }
};

var nowClass=-1; /*счетчик для записи в массив ответов
                    0-одна прямая
                    1-двойная
                    2-пунктир
                    3-волна
                    4-штрихрунктир        */





var rightAnswer=[];
 for (i=0;i<5;rightAnswer[i]=[],i++);
    rightAnswer[0][0]="Дзейник";
    rightAnswer[0][1]="выказник";
    rightAnswer[0][2]="дапауненне";
    rightAnswer[0][3]="азначэнне";
    rightAnswer[0][4]="акаличнасць";

var StyleChecker1=document.getElementById("Style1");
StyleChecker1.onclick= function () {
    style='st1';
    nowClass=0;
};
var StyleChecker2=document.getElementById("Style2");
StyleChecker2.onclick= function () {
    style='st2';
    nowClass=1;
};
var StyleChecker3=document.getElementById("Style3");
StyleChecker3.onclick= function () {
    style='st3';
    nowClass=2;
};
var StyleChecker4=document.getElementById("Style4");
StyleChecker4.onclick= function () {
    style='st4';
    nowClass=3;
};
var StyleChecker5=document.getElementById("Style5");
StyleChecker5.onclick= function () {
    style='st5';
    nowClass=4;
};
var Checker=document.getElementById("Checker");
var rights=0;
Checker.onclick=function(){
   for (i=0;i<5;i++){
       console.log("Адказ: "+answer[i][0]+"; Дакладны адказ: "+rightAnswer[0][i]);
       if (answer[i][0]==rightAnswer[0][i]){rights++;}
   }
    console.log("Дакладных адказау: "+rights+" з 5");
    console.log(answer)
};