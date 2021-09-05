gdjs.Start_32MenuCode = {};
gdjs.Start_32MenuCode.GDEPTAObjects1= [];
gdjs.Start_32MenuCode.GDEPTAObjects2= [];
gdjs.Start_32MenuCode.GDStartObjects1= [];
gdjs.Start_32MenuCode.GDStartObjects2= [];
gdjs.Start_32MenuCode.GDNadaObjects1= [];
gdjs.Start_32MenuCode.GDNadaObjects2= [];
gdjs.Start_32MenuCode.GDExitObjects1= [];
gdjs.Start_32MenuCode.GDExitObjects2= [];
gdjs.Start_32MenuCode.GDFundoObjects1= [];
gdjs.Start_32MenuCode.GDFundoObjects2= [];
gdjs.Start_32MenuCode.GDLogoObjects1= [];
gdjs.Start_32MenuCode.GDLogoObjects2= [];
gdjs.Start_32MenuCode.GDEPTA_95LogoObjects1= [];
gdjs.Start_32MenuCode.GDEPTA_95LogoObjects2= [];
gdjs.Start_32MenuCode.GDEPTA_95FUNDoObjects1= [];
gdjs.Start_32MenuCode.GDEPTA_95FUNDoObjects2= [];
gdjs.Start_32MenuCode.GDEPTA_95Logo_95PixelartObjects1= [];
gdjs.Start_32MenuCode.GDEPTA_95Logo_95PixelartObjects2= [];

gdjs.Start_32MenuCode.conditionTrue_0 = {val:false};
gdjs.Start_32MenuCode.condition0IsTrue_0 = {val:false};
gdjs.Start_32MenuCode.condition1IsTrue_0 = {val:false};


gdjs.Start_32MenuCode.mapOfGDgdjs_46Start_9532MenuCode_46GDStartObjects1Objects = Hashtable.newFrom({"Start": gdjs.Start_32MenuCode.GDStartObjects1});gdjs.Start_32MenuCode.eventsList0 = function(runtimeScene) {

{


gdjs.Start_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Start_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Start_32MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene2", false);
}}

}


};gdjs.Start_32MenuCode.mapOfGDgdjs_46Start_9532MenuCode_46GDNadaObjects1Objects = Hashtable.newFrom({"Nada": gdjs.Start_32MenuCode.GDNadaObjects1});gdjs.Start_32MenuCode.mapOfGDgdjs_46Start_9532MenuCode_46GDExitObjects1Objects = Hashtable.newFrom({"Exit": gdjs.Start_32MenuCode.GDExitObjects1});gdjs.Start_32MenuCode.eventsList1 = function(runtimeScene) {

{


gdjs.Start_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Start_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Start_32MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


};gdjs.Start_32MenuCode.mapOfGDgdjs_46Start_9532MenuCode_46GDStartObjects1Objects = Hashtable.newFrom({"Start": gdjs.Start_32MenuCode.GDStartObjects1});gdjs.Start_32MenuCode.mapOfGDgdjs_46Start_9532MenuCode_46GDNadaObjects1Objects = Hashtable.newFrom({"Nada": gdjs.Start_32MenuCode.GDNadaObjects1});gdjs.Start_32MenuCode.mapOfGDgdjs_46Start_9532MenuCode_46GDExitObjects1Objects = Hashtable.newFrom({"Exit": gdjs.Start_32MenuCode.GDExitObjects1});gdjs.Start_32MenuCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.Start_32MenuCode.GDStartObjects1);

gdjs.Start_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Start_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Start_32MenuCode.mapOfGDgdjs_46Start_9532MenuCode_46GDStartObjects1Objects, runtimeScene, true, false);
}if (gdjs.Start_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Start_32MenuCode.GDStartObjects1 */
{for(var i = 0, len = gdjs.Start_32MenuCode.GDStartObjects1.length ;i < len;++i) {
    gdjs.Start_32MenuCode.GDStartObjects1[i].setAnimation(1);
}
}
{ //Subevents
gdjs.Start_32MenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Nada"), gdjs.Start_32MenuCode.GDNadaObjects1);

gdjs.Start_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Start_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Start_32MenuCode.mapOfGDgdjs_46Start_9532MenuCode_46GDNadaObjects1Objects, runtimeScene, true, false);
}if (gdjs.Start_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Start_32MenuCode.GDNadaObjects1 */
{for(var i = 0, len = gdjs.Start_32MenuCode.GDNadaObjects1.length ;i < len;++i) {
    gdjs.Start_32MenuCode.GDNadaObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Exit"), gdjs.Start_32MenuCode.GDExitObjects1);

gdjs.Start_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Start_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Start_32MenuCode.mapOfGDgdjs_46Start_9532MenuCode_46GDExitObjects1Objects, runtimeScene, true, false);
}if (gdjs.Start_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Start_32MenuCode.GDExitObjects1 */
{for(var i = 0, len = gdjs.Start_32MenuCode.GDExitObjects1.length ;i < len;++i) {
    gdjs.Start_32MenuCode.GDExitObjects1[i].setAnimation(1);
}
}
{ //Subevents
gdjs.Start_32MenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.Start_32MenuCode.GDStartObjects1);

gdjs.Start_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Start_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Start_32MenuCode.mapOfGDgdjs_46Start_9532MenuCode_46GDStartObjects1Objects, runtimeScene, true, true);
}if (gdjs.Start_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Start_32MenuCode.GDStartObjects1 */
{for(var i = 0, len = gdjs.Start_32MenuCode.GDStartObjects1.length ;i < len;++i) {
    gdjs.Start_32MenuCode.GDStartObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Nada"), gdjs.Start_32MenuCode.GDNadaObjects1);

gdjs.Start_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Start_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Start_32MenuCode.mapOfGDgdjs_46Start_9532MenuCode_46GDNadaObjects1Objects, runtimeScene, true, true);
}if (gdjs.Start_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Start_32MenuCode.GDNadaObjects1 */
{for(var i = 0, len = gdjs.Start_32MenuCode.GDNadaObjects1.length ;i < len;++i) {
    gdjs.Start_32MenuCode.GDNadaObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Exit"), gdjs.Start_32MenuCode.GDExitObjects1);

gdjs.Start_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Start_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Start_32MenuCode.mapOfGDgdjs_46Start_9532MenuCode_46GDExitObjects1Objects, runtimeScene, true, true);
}if (gdjs.Start_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Start_32MenuCode.GDExitObjects1 */
{for(var i = 0, len = gdjs.Start_32MenuCode.GDExitObjects1.length ;i < len;++i) {
    gdjs.Start_32MenuCode.GDExitObjects1[i].setAnimation(0);
}
}}

}


};

gdjs.Start_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Start_32MenuCode.GDEPTAObjects1.length = 0;
gdjs.Start_32MenuCode.GDEPTAObjects2.length = 0;
gdjs.Start_32MenuCode.GDStartObjects1.length = 0;
gdjs.Start_32MenuCode.GDStartObjects2.length = 0;
gdjs.Start_32MenuCode.GDNadaObjects1.length = 0;
gdjs.Start_32MenuCode.GDNadaObjects2.length = 0;
gdjs.Start_32MenuCode.GDExitObjects1.length = 0;
gdjs.Start_32MenuCode.GDExitObjects2.length = 0;
gdjs.Start_32MenuCode.GDFundoObjects1.length = 0;
gdjs.Start_32MenuCode.GDFundoObjects2.length = 0;
gdjs.Start_32MenuCode.GDLogoObjects1.length = 0;
gdjs.Start_32MenuCode.GDLogoObjects2.length = 0;
gdjs.Start_32MenuCode.GDEPTA_95LogoObjects1.length = 0;
gdjs.Start_32MenuCode.GDEPTA_95LogoObjects2.length = 0;
gdjs.Start_32MenuCode.GDEPTA_95FUNDoObjects1.length = 0;
gdjs.Start_32MenuCode.GDEPTA_95FUNDoObjects2.length = 0;
gdjs.Start_32MenuCode.GDEPTA_95Logo_95PixelartObjects1.length = 0;
gdjs.Start_32MenuCode.GDEPTA_95Logo_95PixelartObjects2.length = 0;

gdjs.Start_32MenuCode.eventsList2(runtimeScene);
return;

}

gdjs['Start_32MenuCode'] = gdjs.Start_32MenuCode;
