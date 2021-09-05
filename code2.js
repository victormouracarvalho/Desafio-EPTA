gdjs.Pause_32MenuCode = {};
gdjs.Pause_32MenuCode.GDExitObjects1= [];
gdjs.Pause_32MenuCode.GDExitObjects2= [];
gdjs.Pause_32MenuCode.GDStartObjects1= [];
gdjs.Pause_32MenuCode.GDStartObjects2= [];
gdjs.Pause_32MenuCode.GDPauseObjects1= [];
gdjs.Pause_32MenuCode.GDPauseObjects2= [];
gdjs.Pause_32MenuCode.GDPause_95ButtomObjects1= [];
gdjs.Pause_32MenuCode.GDPause_95ButtomObjects2= [];
gdjs.Pause_32MenuCode.GDPause_95background_95EPTAObjects1= [];
gdjs.Pause_32MenuCode.GDPause_95background_95EPTAObjects2= [];

gdjs.Pause_32MenuCode.conditionTrue_0 = {val:false};
gdjs.Pause_32MenuCode.condition0IsTrue_0 = {val:false};
gdjs.Pause_32MenuCode.condition1IsTrue_0 = {val:false};


gdjs.Pause_32MenuCode.mapOfGDgdjs_46Pause_9532MenuCode_46GDPause_9595ButtomObjects1Objects = Hashtable.newFrom({"Pause_Buttom": gdjs.Pause_32MenuCode.GDPause_95ButtomObjects1});gdjs.Pause_32MenuCode.eventsList0 = function(runtimeScene) {

{


gdjs.Pause_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Pause_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Pause_32MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene2", false);
}}

}


};gdjs.Pause_32MenuCode.mapOfGDgdjs_46Pause_9532MenuCode_46GDExitObjects1Objects = Hashtable.newFrom({"Exit": gdjs.Pause_32MenuCode.GDExitObjects1});gdjs.Pause_32MenuCode.mapOfGDgdjs_46Pause_9532MenuCode_46GDPause_9595ButtomObjects1Objects = Hashtable.newFrom({"Pause_Buttom": gdjs.Pause_32MenuCode.GDPause_95ButtomObjects1});gdjs.Pause_32MenuCode.mapOfGDgdjs_46Pause_9532MenuCode_46GDExitObjects1Objects = Hashtable.newFrom({"Exit": gdjs.Pause_32MenuCode.GDExitObjects1});gdjs.Pause_32MenuCode.eventsList1 = function(runtimeScene) {

{


gdjs.Pause_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Pause_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Pause_32MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Start Menu", false);
}}

}


};gdjs.Pause_32MenuCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Pause_Buttom"), gdjs.Pause_32MenuCode.GDPause_95ButtomObjects1);

gdjs.Pause_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Pause_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Pause_32MenuCode.mapOfGDgdjs_46Pause_9532MenuCode_46GDPause_9595ButtomObjects1Objects, runtimeScene, true, false);
}if (gdjs.Pause_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Pause_32MenuCode.GDPause_95ButtomObjects1 */
{for(var i = 0, len = gdjs.Pause_32MenuCode.GDPause_95ButtomObjects1.length ;i < len;++i) {
    gdjs.Pause_32MenuCode.GDPause_95ButtomObjects1[i].setAnimation(1);
}
}
{ //Subevents
gdjs.Pause_32MenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Exit"), gdjs.Pause_32MenuCode.GDExitObjects1);

gdjs.Pause_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Pause_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Pause_32MenuCode.mapOfGDgdjs_46Pause_9532MenuCode_46GDExitObjects1Objects, runtimeScene, true, true);
}if (gdjs.Pause_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Pause_32MenuCode.GDExitObjects1 */
{for(var i = 0, len = gdjs.Pause_32MenuCode.GDExitObjects1.length ;i < len;++i) {
    gdjs.Pause_32MenuCode.GDExitObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pause_Buttom"), gdjs.Pause_32MenuCode.GDPause_95ButtomObjects1);

gdjs.Pause_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Pause_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Pause_32MenuCode.mapOfGDgdjs_46Pause_9532MenuCode_46GDPause_9595ButtomObjects1Objects, runtimeScene, true, true);
}if (gdjs.Pause_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Pause_32MenuCode.GDPause_95ButtomObjects1 */
{for(var i = 0, len = gdjs.Pause_32MenuCode.GDPause_95ButtomObjects1.length ;i < len;++i) {
    gdjs.Pause_32MenuCode.GDPause_95ButtomObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Exit"), gdjs.Pause_32MenuCode.GDExitObjects1);

gdjs.Pause_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Pause_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Pause_32MenuCode.mapOfGDgdjs_46Pause_9532MenuCode_46GDExitObjects1Objects, runtimeScene, true, false);
}if (gdjs.Pause_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Pause_32MenuCode.GDExitObjects1 */
{for(var i = 0, len = gdjs.Pause_32MenuCode.GDExitObjects1.length ;i < len;++i) {
    gdjs.Pause_32MenuCode.GDExitObjects1[i].setAnimation(1);
}
}
{ //Subevents
gdjs.Pause_32MenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


{
}

}


};

gdjs.Pause_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Pause_32MenuCode.GDExitObjects1.length = 0;
gdjs.Pause_32MenuCode.GDExitObjects2.length = 0;
gdjs.Pause_32MenuCode.GDStartObjects1.length = 0;
gdjs.Pause_32MenuCode.GDStartObjects2.length = 0;
gdjs.Pause_32MenuCode.GDPauseObjects1.length = 0;
gdjs.Pause_32MenuCode.GDPauseObjects2.length = 0;
gdjs.Pause_32MenuCode.GDPause_95ButtomObjects1.length = 0;
gdjs.Pause_32MenuCode.GDPause_95ButtomObjects2.length = 0;
gdjs.Pause_32MenuCode.GDPause_95background_95EPTAObjects1.length = 0;
gdjs.Pause_32MenuCode.GDPause_95background_95EPTAObjects2.length = 0;

gdjs.Pause_32MenuCode.eventsList2(runtimeScene);
return;

}

gdjs['Pause_32MenuCode'] = gdjs.Pause_32MenuCode;
