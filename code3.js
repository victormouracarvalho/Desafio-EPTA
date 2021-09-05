gdjs.Demonstra_231_227o_32EPTACode = {};
gdjs.Demonstra_231_227o_32EPTACode.GDEPTA_95Foto_95OriginalObjects1= [];
gdjs.Demonstra_231_227o_32EPTACode.GDEPTA_95Foto_95OriginalObjects2= [];
gdjs.Demonstra_231_227o_32EPTACode.GDEPTA_95Foto_95OriginalObjects3= [];
gdjs.Demonstra_231_227o_32EPTACode.GDNewObjectObjects1= [];
gdjs.Demonstra_231_227o_32EPTACode.GDNewObjectObjects2= [];
gdjs.Demonstra_231_227o_32EPTACode.GDNewObjectObjects3= [];
gdjs.Demonstra_231_227o_32EPTACode.GDNadaObjects1= [];
gdjs.Demonstra_231_227o_32EPTACode.GDNadaObjects2= [];
gdjs.Demonstra_231_227o_32EPTACode.GDNadaObjects3= [];
gdjs.Demonstra_231_227o_32EPTACode.GDEPTA_95Foto_95FogueteObjects1= [];
gdjs.Demonstra_231_227o_32EPTACode.GDEPTA_95Foto_95FogueteObjects2= [];
gdjs.Demonstra_231_227o_32EPTACode.GDEPTA_95Foto_95FogueteObjects3= [];
gdjs.Demonstra_231_227o_32EPTACode.GDContinueObjects1= [];
gdjs.Demonstra_231_227o_32EPTACode.GDContinueObjects2= [];
gdjs.Demonstra_231_227o_32EPTACode.GDContinueObjects3= [];

gdjs.Demonstra_231_227o_32EPTACode.conditionTrue_0 = {val:false};
gdjs.Demonstra_231_227o_32EPTACode.condition0IsTrue_0 = {val:false};
gdjs.Demonstra_231_227o_32EPTACode.condition1IsTrue_0 = {val:false};


gdjs.Demonstra_231_227o_32EPTACode.mapOfGDgdjs_46Demonstra_95231_95227o_9532EPTACode_46GDNadaObjects1Objects = Hashtable.newFrom({"Nada": gdjs.Demonstra_231_227o_32EPTACode.GDNadaObjects1});gdjs.Demonstra_231_227o_32EPTACode.eventsList0 = function(runtimeScene) {

{


gdjs.Demonstra_231_227o_32EPTACode.condition0IsTrue_0.val = false;
{
gdjs.Demonstra_231_227o_32EPTACode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Demonstra_231_227o_32EPTACode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Demonstração AEB", false);
}}

}


{


{
}

}


};gdjs.Demonstra_231_227o_32EPTACode.mapOfGDgdjs_46Demonstra_95231_95227o_9532EPTACode_46GDNadaObjects1Objects = Hashtable.newFrom({"Nada": gdjs.Demonstra_231_227o_32EPTACode.GDNadaObjects1});gdjs.Demonstra_231_227o_32EPTACode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Nada"), gdjs.Demonstra_231_227o_32EPTACode.GDNadaObjects1);

gdjs.Demonstra_231_227o_32EPTACode.condition0IsTrue_0.val = false;
{
gdjs.Demonstra_231_227o_32EPTACode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Demonstra_231_227o_32EPTACode.mapOfGDgdjs_46Demonstra_95231_95227o_9532EPTACode_46GDNadaObjects1Objects, runtimeScene, true, false);
}if (gdjs.Demonstra_231_227o_32EPTACode.condition0IsTrue_0.val) {
/* Reuse gdjs.Demonstra_231_227o_32EPTACode.GDNadaObjects1 */
{for(var i = 0, len = gdjs.Demonstra_231_227o_32EPTACode.GDNadaObjects1.length ;i < len;++i) {
    gdjs.Demonstra_231_227o_32EPTACode.GDNadaObjects1[i].setAnimation(1);
}
}
{ //Subevents
gdjs.Demonstra_231_227o_32EPTACode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Nada"), gdjs.Demonstra_231_227o_32EPTACode.GDNadaObjects1);

gdjs.Demonstra_231_227o_32EPTACode.condition0IsTrue_0.val = false;
{
gdjs.Demonstra_231_227o_32EPTACode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Demonstra_231_227o_32EPTACode.mapOfGDgdjs_46Demonstra_95231_95227o_9532EPTACode_46GDNadaObjects1Objects, runtimeScene, true, true);
}if (gdjs.Demonstra_231_227o_32EPTACode.condition0IsTrue_0.val) {
/* Reuse gdjs.Demonstra_231_227o_32EPTACode.GDNadaObjects1 */
{for(var i = 0, len = gdjs.Demonstra_231_227o_32EPTACode.GDNadaObjects1.length ;i < len;++i) {
    gdjs.Demonstra_231_227o_32EPTACode.GDNadaObjects1[i].setAnimation(0);
}
}}

}


{


{
}

}


};

gdjs.Demonstra_231_227o_32EPTACode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Demonstra_231_227o_32EPTACode.GDEPTA_95Foto_95OriginalObjects1.length = 0;
gdjs.Demonstra_231_227o_32EPTACode.GDEPTA_95Foto_95OriginalObjects2.length = 0;
gdjs.Demonstra_231_227o_32EPTACode.GDEPTA_95Foto_95OriginalObjects3.length = 0;
gdjs.Demonstra_231_227o_32EPTACode.GDNewObjectObjects1.length = 0;
gdjs.Demonstra_231_227o_32EPTACode.GDNewObjectObjects2.length = 0;
gdjs.Demonstra_231_227o_32EPTACode.GDNewObjectObjects3.length = 0;
gdjs.Demonstra_231_227o_32EPTACode.GDNadaObjects1.length = 0;
gdjs.Demonstra_231_227o_32EPTACode.GDNadaObjects2.length = 0;
gdjs.Demonstra_231_227o_32EPTACode.GDNadaObjects3.length = 0;
gdjs.Demonstra_231_227o_32EPTACode.GDEPTA_95Foto_95FogueteObjects1.length = 0;
gdjs.Demonstra_231_227o_32EPTACode.GDEPTA_95Foto_95FogueteObjects2.length = 0;
gdjs.Demonstra_231_227o_32EPTACode.GDEPTA_95Foto_95FogueteObjects3.length = 0;
gdjs.Demonstra_231_227o_32EPTACode.GDContinueObjects1.length = 0;
gdjs.Demonstra_231_227o_32EPTACode.GDContinueObjects2.length = 0;
gdjs.Demonstra_231_227o_32EPTACode.GDContinueObjects3.length = 0;

gdjs.Demonstra_231_227o_32EPTACode.eventsList1(runtimeScene);
return;

}

gdjs['Demonstra_231_227o_32EPTACode'] = gdjs.Demonstra_231_227o_32EPTACode;
