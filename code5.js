gdjs.Game_32OverCode = {};
gdjs.Game_32OverCode.GDEPTA_95Foto_95OriginalObjects1= [];
gdjs.Game_32OverCode.GDEPTA_95Foto_95OriginalObjects2= [];
gdjs.Game_32OverCode.GDEPTA_95Foto_95OriginalObjects3= [];
gdjs.Game_32OverCode.GDContinueObjects1= [];
gdjs.Game_32OverCode.GDContinueObjects2= [];
gdjs.Game_32OverCode.GDContinueObjects3= [];
gdjs.Game_32OverCode.GDExitObjects1= [];
gdjs.Game_32OverCode.GDExitObjects2= [];
gdjs.Game_32OverCode.GDExitObjects3= [];
gdjs.Game_32OverCode.GDNadaObjects1= [];
gdjs.Game_32OverCode.GDNadaObjects2= [];
gdjs.Game_32OverCode.GDNadaObjects3= [];
gdjs.Game_32OverCode.GDNewObjectObjects1= [];
gdjs.Game_32OverCode.GDNewObjectObjects2= [];
gdjs.Game_32OverCode.GDNewObjectObjects3= [];

gdjs.Game_32OverCode.conditionTrue_0 = {val:false};
gdjs.Game_32OverCode.condition0IsTrue_0 = {val:false};
gdjs.Game_32OverCode.condition1IsTrue_0 = {val:false};


gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDNadaObjects1Objects = Hashtable.newFrom({"Nada": gdjs.Game_32OverCode.GDNadaObjects1});gdjs.Game_32OverCode.eventsList0 = function(runtimeScene) {

{


gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene2", false);
}}

}


{


{
}

}


};gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDNadaObjects1Objects = Hashtable.newFrom({"Nada": gdjs.Game_32OverCode.GDNadaObjects1});gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDExitObjects1Objects = Hashtable.newFrom({"Exit": gdjs.Game_32OverCode.GDExitObjects1});gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDExitObjects1Objects = Hashtable.newFrom({"Exit": gdjs.Game_32OverCode.GDExitObjects1});gdjs.Game_32OverCode.eventsList1 = function(runtimeScene) {

{


gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Start Menu", false);
}}

}


};gdjs.Game_32OverCode.eventsList2 = function(runtimeScene) {

{


{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Nada"), gdjs.Game_32OverCode.GDNadaObjects1);

gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDNadaObjects1Objects, runtimeScene, true, false);
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Game_32OverCode.GDNadaObjects1 */
{for(var i = 0, len = gdjs.Game_32OverCode.GDNadaObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDNadaObjects1[i].setAnimation(1);
}
}
{ //Subevents
gdjs.Game_32OverCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Nada"), gdjs.Game_32OverCode.GDNadaObjects1);

gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDNadaObjects1Objects, runtimeScene, true, true);
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
}

}


{


gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "UC3CKCR-game-over-a.mp3", 0, false, 5, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Exit"), gdjs.Game_32OverCode.GDExitObjects1);

gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDExitObjects1Objects, runtimeScene, true, true);
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Game_32OverCode.GDExitObjects1 */
{for(var i = 0, len = gdjs.Game_32OverCode.GDExitObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDExitObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Exit"), gdjs.Game_32OverCode.GDExitObjects1);

gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDExitObjects1Objects, runtimeScene, true, false);
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Game_32OverCode.GDExitObjects1 */
{for(var i = 0, len = gdjs.Game_32OverCode.GDExitObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDExitObjects1[i].setAnimation(1);
}
}
{ //Subevents
gdjs.Game_32OverCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


{
}

}


};

gdjs.Game_32OverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32OverCode.GDEPTA_95Foto_95OriginalObjects1.length = 0;
gdjs.Game_32OverCode.GDEPTA_95Foto_95OriginalObjects2.length = 0;
gdjs.Game_32OverCode.GDEPTA_95Foto_95OriginalObjects3.length = 0;
gdjs.Game_32OverCode.GDContinueObjects1.length = 0;
gdjs.Game_32OverCode.GDContinueObjects2.length = 0;
gdjs.Game_32OverCode.GDContinueObjects3.length = 0;
gdjs.Game_32OverCode.GDExitObjects1.length = 0;
gdjs.Game_32OverCode.GDExitObjects2.length = 0;
gdjs.Game_32OverCode.GDExitObjects3.length = 0;
gdjs.Game_32OverCode.GDNadaObjects1.length = 0;
gdjs.Game_32OverCode.GDNadaObjects2.length = 0;
gdjs.Game_32OverCode.GDNadaObjects3.length = 0;
gdjs.Game_32OverCode.GDNewObjectObjects1.length = 0;
gdjs.Game_32OverCode.GDNewObjectObjects2.length = 0;
gdjs.Game_32OverCode.GDNewObjectObjects3.length = 0;

gdjs.Game_32OverCode.eventsList2(runtimeScene);
return;

}

gdjs['Game_32OverCode'] = gdjs.Game_32OverCode;
