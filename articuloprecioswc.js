/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:36:45.56
*/
gx.evt.autoSkip=!1;gx.define("articuloprecioswc",!0,function(n){this.ServerClass="articuloprecioswc";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.setCmpContext(n);this.ReadonlyForm=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.A8ArtId=gx.fn.getIntegerValue("ARTID",".")};this.e13852_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e14852_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,10,11];this.GXLastCtrlId=11;t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"",grid:0};t[6]={id:6,fld:"UNNAMEDTABLE1",grid:0};t[7]={id:7,fld:"",grid:0};t[8]={id:8,fld:"",grid:0};t[10]={id:10,fld:"",grid:0};t[11]={id:11,fld:"",grid:0};this.A8ArtId=0;this.Events={e13852_client:["ENTER",!0],e14852_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"A8ArtId",fld:"ARTID",pic:"ZZZZZZZZ9"}],[]];this.EvtParms.START=[[{av:"A8ArtId",fld:"ARTID",pic:"ZZZZZZZZ9"},{av:"AV17Pgmname",fld:"vPGMNAME",pic:""}],[{ctrl:"WCARTICULOARTICULOLISTAWC"},{ctrl:"WCARTICULOARTICULOLISTACOMPRASWC"}]];this.EvtParms.LOAD=[[],[]];this.setVCMap("A8ArtId","ARTID",0,"int",9,0);this.Initialize();this.setComponent({id:"WCARTICULOARTICULOLISTAWC",GXClass:null,Prefix:"W0009",lvl:1});this.setComponent({id:"WCARTICULOARTICULOLISTACOMPRASWC",GXClass:null,Prefix:"W0012",lvl:1})})