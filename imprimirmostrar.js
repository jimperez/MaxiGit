/*!   GeneXus C# 16_0_5-135614 on 10/27/2019 11:23:6.54
*/
gx.evt.autoSkip=!1;gx.define("imprimirmostrar",!1,function(){this.ServerClass="imprimirmostrar";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV5ObjID=gx.fn.getControlValue("vOBJID")};this.e13782_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e14782_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var n=this.GXValidFnc;this.GXLastCtrlId=0;this.AV5ObjID="";this.Events={e13782_client:["ENTER",!0],e14782_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"AV5ObjID",fld:"vOBJID",pic:"",hsh:!0}],[]];this.EvtParms.START=[[{av:"AV5ObjID",fld:"vOBJID",pic:"",hsh:!0}],[{ctrl:"IMPRIMIR",prop:"Source"}]];this.setVCMap("AV5ObjID","vOBJID",0,"char",50,0);this.Initialize()});gx.wi(function(){gx.createParentObj(imprimirmostrar)})