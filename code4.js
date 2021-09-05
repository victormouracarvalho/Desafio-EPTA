gdjs.Demonstra_231_227o_32AEBCode = {};
gdjs.Demonstra_231_227o_32AEBCode.GDNewObjectObjects1= [];
gdjs.Demonstra_231_227o_32AEBCode.GDNewObjectObjects2= [];
gdjs.Demonstra_231_227o_32AEBCode.GDAEBObjects1= [];
gdjs.Demonstra_231_227o_32AEBCode.GDAEBObjects2= [];
gdjs.Demonstra_231_227o_32AEBCode.GDStartObjects1= [];
gdjs.Demonstra_231_227o_32AEBCode.GDStartObjects2= [];
gdjs.Demonstra_231_227o_32AEBCode.GDNewObject2Objects1= [];
gdjs.Demonstra_231_227o_32AEBCode.GDNewObject2Objects2= [];

gdjs.Demonstra_231_227o_32AEBCode.conditionTrue_0 = {val:false};
gdjs.Demonstra_231_227o_32AEBCode.condition0IsTrue_0 = {val:false};
gdjs.Demonstra_231_227o_32AEBCode.condition1IsTrue_0 = {val:false};


gdjs.Demonstra_231_227o_32AEBCode.mapOfGDgdjs_46Demonstra_95231_95227o_9532AEBCode_46GDStartObjects1Objects = Hashtable.newFrom({"Start": gdjs.Demonstra_231_227o_32AEBCode.GDStartObjects1});gdjs.Demonstra_231_227o_32AEBCode.mapOfGDgdjs_46Demonstra_95231_95227o_9532AEBCode_46GDStartObjects1Objects = Hashtable.newFrom({"Start": gdjs.Demonstra_231_227o_32AEBCode.GDStartObjects1});gdjs.Demonstra_231_227o_32AEBCode.eventsList0 = function(runtimeScene) {

{


gdjs.Demonstra_231_227o_32AEBCode.condition0IsTrue_0.val = false;
{
gdjs.Demonstra_231_227o_32AEBCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Demonstra_231_227o_32AEBCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene2", false);
}}

}


};gdjs.Demonstra_231_227o_32AEBCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.Demonstra_231_227o_32AEBCode.GDStartObjects1);

gdjs.Demonstra_231_227o_32AEBCode.condition0IsTrue_0.val = false;
{
gdjs.Demonstra_231_227o_32AEBCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Demonstra_231_227o_32AEBCode.mapOfGDgdjs_46Demonstra_95231_95227o_9532AEBCode_46GDStartObjects1Objects, runtimeScene, true, true);
}if (gdjs.Demonstra_231_227o_32AEBCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Demonstra_231_227o_32AEBCode.GDStartObjects1 */
{for(var i = 0, len = gdjs.Demonstra_231_227o_32AEBCode.GDStartObjects1.length ;i < len;++i) {
    gdjs.Demonstra_231_227o_32AEBCode.GDStartObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.Demonstra_231_227o_32AEBCode.GDStartObjects1);

gdjs.Demonstra_231_227o_32AEBCode.condition0IsTrue_0.val = false;
{
gdjs.Demonstra_231_227o_32AEBCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Demonstra_231_227o_32AEBCode.mapOfGDgdjs_46Demonstra_95231_95227o_9532AEBCode_46GDStartObjects1Objects, runtimeScene, true, false);
}if (gdjs.Demonstra_231_227o_32AEBCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Demonstra_231_227o_32AEBCode.GDStartObjects1 */
{for(var i = 0, len = gdjs.Demonstra_231_227o_32AEBCode.GDStartObjects1.length ;i < len;++i) {
    gdjs.Demonstra_231_227o_32AEBCode.GDStartObjects1[i].setAnimation(1);
}
}
{ //Subevents
gdjs.Demonstra_231_227o_32AEBCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


{
}

}


};

gdjs.Demonstra_231_227o_32AEBCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Demonstra_231_227o_32AEBCode.GDNewObjectObjects1.length = 0;
gdjs.Demonstra_231_227o_32AEBCode.GDNewObjectObjects2.length = 0;
gdjs.Demonstra_231_227o_32AEBCode.GDAEBObjects1.length = 0;
gdjs.Demonstra_231_227o_32AEBCode.GDAEBObjects2.length = 0;
gdjs.Demonstra_231_227o_32AEBCode.GDStartObjects1.length = 0;
gdjs.Demonstra_231_227o_32AEBCode.GDStartObjects2.length = 0;
gdjs.Demonstra_231_227o_32AEBCode.GDNewObject2Objects1.length = 0;
gdjs.Demonstra_231_227o_32AEBCode.GDNewObject2Objects2.length = 0;

gdjs.Demonstra_231_227o_32AEBCode.eventsList1(runtimeScene);
return;

}

gdjs['Demonstra_231_227o_32AEBCode'] = gdjs.Demonstra_231_227o_32AEBCode;
