/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:35:48.33
*/
gx.evt.autoSkip=!1;gx.define("presupuestovtaestadowc",!0,function(n){var t,r,i;this.ServerClass="presupuestovtaestadowc";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.setCmpContext(n);this.ReadonlyForm=!0;this.anyGridBaseTable=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV21Pgmname=gx.fn.getControlValue("vPGMNAME");this.AV7PreId=gx.fn.getIntegerValue("vPREID",".");this.AV7PreId=gx.fn.getIntegerValue("vPREID",".");this.AV21Pgmname=gx.fn.getControlValue("vPGMNAME")};this.e14ju2_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e15ju2_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,14,15,16,18,19,20,21,22,23,24,25,26,27];this.GXLastCtrlId=27;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",17,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"presupuestovtaestadowc",[],!1,1,!1,!0,0,!0,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);r=this.GridContainer;r.addSingleLineEdit(288,18,"PREESTADOID","Estado Id","","PreEstadoId","int",0,"px",2,2,"right",null,[],288,"PreEstadoId",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addComboBox(2328,19,"PREESTADOESTADO","Estado","PreEstadoEstado","char",null,0,!0,!1,0,"px","WWColumn");r.addSingleLineEdit(2329,20,"PREESTADOUSUARIO","Usuario","","PreEstadoUsuario","char",0,"px",15,15,"left",null,[],2329,"PreEstadoUsuario",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit("Personadenominacion",21,"vPERSONADENOMINACION","Denominación","","PersonaDenominacion","svchar",0,"px",64,64,"left",null,[],"Personadenominacion","PersonaDenominacion",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addSingleLineEdit(2330,22,"PREESTADOFECHAHORA","Fecha Hora","","PreEstadoFechaHora","dtime",0,"px",14,14,"right",null,[],2330,"PreEstadoFechaHora",!0,5,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(2331,23,"PREESTADOIP","IP","","PreEstadoIP","char",0,"px",15,15,"left",null,[],2331,"PreEstadoIP",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");this.GridContainer.emptyText="";this.setGrid(r);this.DVPANEL_TABLEHEADERContainer=gx.uc.getNew(this,12,0,"BootstrapPanel",this.CmpContext+"DVPANEL_TABLEHEADERContainer","Dvpanel_tableheader","DVPANEL_TABLEHEADER");i=this.DVPANEL_TABLEHEADERContainer;i.setProp("Class","Class","","char");i.setProp("Enabled","Enabled",!0,"boolean");i.setProp("Width","Width","100%","str");i.setProp("Height","Height","100","str");i.setProp("AutoWidth","Autowidth",!1,"bool");i.setProp("AutoHeight","Autoheight",!0,"bool");i.setProp("Cls","Cls","PanelFilled_BaseColor","str");i.setProp("ShowHeader","Showheader",!0,"bool");i.setProp("Title","Title","Opciones","str");i.setProp("Collapsible","Collapsible",!0,"bool");i.setProp("Collapsed","Collapsed",!1,"bool");i.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");i.setProp("IconPosition","Iconposition","Right","str");i.setProp("AutoScroll","Autoscroll",!1,"bool");i.setProp("Visible","Visible",!0,"bool");i.setC2ShowFunction(function(n){n.show()});this.setUserControl(i);t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"",grid:0};t[6]={id:6,fld:"UNNAMEDTABLE1",grid:0};t[7]={id:7,fld:"",grid:0};t[8]={id:8,fld:"",grid:0};t[10]={id:10,fld:"",grid:0};t[11]={id:11,fld:"",grid:0};t[14]={id:14,fld:"TABLEHEADER",grid:0};t[15]={id:15,fld:"",grid:0};t[16]={id:16,fld:"",grid:0};t[18]={id:18,lvl:2,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:1,isacc:0,grid:17,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREESTADOID",gxz:"Z288PreEstadoId",gxold:"O288PreEstadoId",gxvar:"A288PreEstadoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A288PreEstadoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z288PreEstadoId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("PREESTADOID",n||gx.fn.currentGridRowImpl(17),gx.O.A288PreEstadoId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A288PreEstadoId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("PREESTADOID",n||gx.fn.currentGridRowImpl(17),".")},nac:gx.falseFn};t[19]={id:19,lvl:2,type:"char",len:3,dec:0,sign:!1,ro:1,isacc:0,grid:17,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREESTADOESTADO",gxz:"Z2328PreEstadoEstado",gxold:"O2328PreEstadoEstado",gxvar:"A2328PreEstadoEstado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2328PreEstadoEstado=n)},v2z:function(n){n!==undefined&&(gx.O.Z2328PreEstadoEstado=n)},v2c:function(n){gx.fn.setGridComboBoxValue("PREESTADOESTADO",n||gx.fn.currentGridRowImpl(17),gx.O.A2328PreEstadoEstado);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2328PreEstadoEstado=this.val(n))},val:function(n){return gx.fn.getGridControlValue("PREESTADOESTADO",n||gx.fn.currentGridRowImpl(17))},nac:gx.falseFn};t[20]={id:20,lvl:2,type:"char",len:15,dec:0,sign:!1,ro:1,isacc:0,grid:17,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREESTADOUSUARIO",gxz:"Z2329PreEstadoUsuario",gxold:"O2329PreEstadoUsuario",gxvar:"A2329PreEstadoUsuario",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A2329PreEstadoUsuario=n)},v2z:function(n){n!==undefined&&(gx.O.Z2329PreEstadoUsuario=n)},v2c:function(n){gx.fn.setGridControlValue("PREESTADOUSUARIO",n||gx.fn.currentGridRowImpl(17),gx.O.A2329PreEstadoUsuario,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2329PreEstadoUsuario=this.val(n))},val:function(n){return gx.fn.getGridControlValue("PREESTADOUSUARIO",n||gx.fn.currentGridRowImpl(17))},nac:gx.falseFn};t[21]={id:21,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:17,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vPERSONADENOMINACION",gxz:"ZV14PersonaDenominacion",gxold:"OV14PersonaDenominacion",gxvar:"AV14PersonaDenominacion",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV14PersonaDenominacion=n)},v2z:function(n){n!==undefined&&(gx.O.ZV14PersonaDenominacion=n)},v2c:function(n){gx.fn.setGridControlValue("vPERSONADENOMINACION",n||gx.fn.currentGridRowImpl(17),gx.O.AV14PersonaDenominacion,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV14PersonaDenominacion=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vPERSONADENOMINACION",n||gx.fn.currentGridRowImpl(17))},nac:gx.falseFn};t[22]={id:22,lvl:2,type:"dtime",len:8,dec:5,sign:!1,ro:1,isacc:0,grid:17,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREESTADOFECHAHORA",gxz:"Z2330PreEstadoFechaHora",gxold:"O2330PreEstadoFechaHora",gxvar:"A2330PreEstadoFechaHora",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2330PreEstadoFechaHora=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z2330PreEstadoFechaHora=gx.fn.toDatetimeValue(n))},v2c:function(n){gx.fn.setGridControlValue("PREESTADOFECHAHORA",n||gx.fn.currentGridRowImpl(17),gx.O.A2330PreEstadoFechaHora,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2330PreEstadoFechaHora=gx.fn.toDatetimeValue(this.val(n)))},val:function(n){return gx.fn.getGridDateTimeValue("PREESTADOFECHAHORA",n||gx.fn.currentGridRowImpl(17))},nac:gx.falseFn};t[23]={id:23,lvl:2,type:"char",len:15,dec:0,sign:!1,pic:"999.999.999",ro:1,isacc:0,grid:17,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREESTADOIP",gxz:"Z2331PreEstadoIP",gxold:"O2331PreEstadoIP",gxvar:"A2331PreEstadoIP",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A2331PreEstadoIP=n)},v2z:function(n){n!==undefined&&(gx.O.Z2331PreEstadoIP=n)},v2c:function(n){gx.fn.setGridControlValue("PREESTADOIP",n||gx.fn.currentGridRowImpl(17),gx.O.A2331PreEstadoIP,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2331PreEstadoIP=this.val(n))},val:function(n){return gx.fn.getGridControlValue("PREESTADOIP",n||gx.fn.currentGridRowImpl(17))},nac:gx.falseFn};t[24]={id:24,fld:"",grid:0};t[25]={id:25,fld:"",grid:0};t[26]={id:26,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};t[27]={id:27,lvl:0,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREID",gxz:"Z89PreId",gxold:"O89PreId",gxvar:"A89PreId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A89PreId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z89PreId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("PREID",gx.O.A89PreId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A89PreId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("PREID",".")},nac:gx.falseFn};this.Z288PreEstadoId=0;this.O288PreEstadoId=0;this.Z2328PreEstadoEstado="";this.O2328PreEstadoEstado="";this.Z2329PreEstadoUsuario="";this.O2329PreEstadoUsuario="";this.ZV14PersonaDenominacion="";this.OV14PersonaDenominacion="";this.Z2330PreEstadoFechaHora=gx.date.nullDate();this.O2330PreEstadoFechaHora=gx.date.nullDate();this.Z2331PreEstadoIP="";this.O2331PreEstadoIP="";this.A89PreId=0;this.Z89PreId=0;this.O89PreId=0;this.A89PreId=0;this.AV7PreId=0;this.A288PreEstadoId=0;this.A2328PreEstadoEstado="";this.A2329PreEstadoUsuario="";this.AV14PersonaDenominacion="";this.A2330PreEstadoFechaHora=gx.date.nullDate();this.A2331PreEstadoIP="";this.AV21Pgmname="";this.Events={e14ju2_client:["ENTER",!0],e15ju2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV7PreId",fld:"vPREID",pic:"ZZZZZZZZ9"},{av:"sPrefix"},{ctrl:"GRID",prop:"Rows"},{av:"AV21Pgmname",fld:"vPGMNAME",pic:"",hsh:!0}],[]];this.EvtParms.START=[[{av:"AV21Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV7PreId",fld:"vPREID",pic:"ZZZZZZZZ9"}],[{ctrl:"GRID",prop:"Rows"},{av:'gx.fn.getCtrlProperty("PREID","Visible")',ctrl:"PREID",prop:"Visible"}]];this.EvtParms["GRID.LOAD"]=[[{av:"A2329PreEstadoUsuario",fld:"PREESTADOUSUARIO",pic:""}],[{av:"AV14PersonaDenominacion",fld:"vPERSONADENOMINACION",pic:"@!"}]];this.EvtParms.GRID_FIRSTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV7PreId",fld:"vPREID",pic:"ZZZZZZZZ9"},{av:"sPrefix"},{av:"AV21Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{ctrl:"GRID",prop:"Rows"}],[]];this.EvtParms.GRID_PREVPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV7PreId",fld:"vPREID",pic:"ZZZZZZZZ9"},{av:"sPrefix"},{av:"AV21Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{ctrl:"GRID",prop:"Rows"}],[]];this.EvtParms.GRID_NEXTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV7PreId",fld:"vPREID",pic:"ZZZZZZZZ9"},{av:"sPrefix"},{av:"AV21Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{ctrl:"GRID",prop:"Rows"}],[]];this.EvtParms.GRID_LASTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV7PreId",fld:"vPREID",pic:"ZZZZZZZZ9"},{av:"sPrefix"},{av:"AV21Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{ctrl:"GRID",prop:"Rows"}],[]];this.setVCMap("AV21Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV7PreId","vPREID",0,"int",9,0);this.setVCMap("AV7PreId","vPREID",0,"int",9,0);this.setVCMap("AV21Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV7PreId","vPREID",0,"int",9,0);this.setVCMap("AV21Pgmname","vPGMNAME",0,"char",129,0);r.addRefreshingVar({rfrVar:"AV7PreId"});r.addRefreshingVar({rfrVar:"AV21Pgmname"});r.addRefreshingParm({rfrVar:"AV7PreId"});r.addRefreshingParm({rfrVar:"AV21Pgmname"});this.Initialize()})