/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 10:8:15.76
*/
gx.evt.autoSkip=!1;gx.define("appmasterpage",!1,function(){this.ServerClass="appmasterpage";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.IsMasterPage=!0;this.hasEnterEvent=!1;this.skipOnEnter=!1;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){};this.e14012_client=function(){return this.executeServerEvent("ENTER_MPAGE",!0,null,!1,!1)};this.e15012_client=function(){return this.executeServerEvent("CANCEL_MPAGE",!0,null,!1,!1)};this.GXValidFnc=[];var n=this.GXValidFnc;this.GXCtrlIds=[2,5,8,10,13,15,17,19,21,22,25,27,29,31,42,47,50];this.GXLastCtrlId=50;n[2]={id:2,fld:"TABLE1",grid:0};n[5]={id:5,fld:"TABLE2",grid:0};n[8]={id:8,fld:"APPLICATIONHEADER",format:0,grid:0};n[10]={id:10,fld:"TABLE3",grid:0};n[13]={id:13,fld:"ENGLISH",format:0,grid:0};n[15]={id:15,fld:"PIPE",format:0,grid:0};n[17]={id:17,fld:"SPANISH",format:0,grid:0};n[19]={id:19,fld:"PIPE2",format:0,grid:0};n[21]={id:21,fld:"PORTUGUESE",format:0,grid:0};n[22]={id:22,fld:"TABLE4",grid:0};n[25]={id:25,fld:"FIRSTTEXT",format:0,grid:0};n[27]={id:27,fld:"SECONDTEXT",format:0,grid:0};n[29]={id:29,fld:"THIRDTEXT",format:0,grid:0};n[31]={id:31,fld:"FOURTHTEXT",format:0,grid:0};n[42]={id:42,fld:"TABLE6",grid:0};n[47]={id:47,fld:"TABLE7",grid:0};n[50]={id:50,fld:"TEXTBLOCK1",format:0,grid:0};this.Events={e14012_client:["ENTER_MPAGE",!0],e15012_client:["CANCEL_MPAGE",!0]};this.EvtParms.REFRESH_MPAGE=[[{ctrl:"FORM_MPAGE",prop:"Caption"}],[{ctrl:"WCRECENTLINKS_MPAGE"}]];this.EvtParms.START_MPAGE=[[],[{av:'gx.fn.getCtrlProperty("PIPE_MPAGE","Caption")',ctrl:"PIPE_MPAGE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("PIPE2_MPAGE","Caption")',ctrl:"PIPE2_MPAGE",prop:"Caption"}]];this.Initialize();this.setComponent({id:"WCRECENTLINKS",GXClass:null,Prefix:"MPW0034",lvl:1})});gx.wi(function(){gx.createMasterPage(appmasterpage)})