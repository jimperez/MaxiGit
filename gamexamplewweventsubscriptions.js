/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 12:20:32.54
*/
gx.evt.autoSkip=!1;gx.define("gamexamplewweventsubscriptions",!1,function(){var n,t;this.ServerClass="gamexamplewweventsubscriptions";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){};this.Validv_Status=function(){var n=gx.fn.currentGridRowImpl(23);return this.validCliEvt("Validv_Status",23,function(){try{var n=gx.util.balloon.getNew("vSTATUS");if(this.AnyError=0,!(this.AV17Status=="u"||this.AV17Status=="s"))try{n.setError("Campo Status fuera de rango");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Validv_Event=function(){var n=gx.fn.currentGridRowImpl(23);return this.validCliEvt("Validv_Event",23,function(){try{var n=gx.util.balloon.getNew("vEVENT");if(this.AnyError=0,!(this.AV10Event=="user-update"||this.AV10Event=="user-insert"||this.AV10Event=="user-delete"||this.AV10Event=="user-updateroles"||this.AV10Event=="user-getcustominfo"||this.AV10Event=="user-savecustominfo"||this.AV10Event=="role-insert"||this.AV10Event=="role-update"||this.AV10Event=="role-delete"||this.AV10Event=="repository-login"||this.AV10Event=="repository-logout"||this.AV10Event=="application-checkprmfail"||this.AV10Event=="externalauthentication-response"))try{n.setError("Campo Event fuera de rango");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e11tp1_client=function(){return this.clearMessages(),this.call("gamexampleeventsubscriptionentry.aspx",["INS",""]),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e14tp2_client=function(){return this.clearMessages(),this.call("gamexampleeventsubscriptionentry.aspx",["DSP",this.AV14Id]),this.refreshOutputs([{av:"AV14Id",fld:"vID",pic:""}]),gx.$.Deferred().resolve()};this.e15tp2_client=function(){return this.clearMessages(),this.call("gamexampleeventsubscriptionentry.aspx",["UPD",this.AV14Id]),this.refreshOutputs([{av:"AV14Id",fld:"vID",pic:""}]),gx.$.Deferred().resolve()};this.e16tp2_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e17tp2_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,21,22,24,25,26,27,28,29,30,31,32,33,34,35];this.GXLastCtrlId=35;this.GridwwContainer=new gx.grid.grid(this,2,"WbpLvl2",23,"Gridww","Gridww","GridwwContainer",this.CmpContext,this.IsMasterPage,"gamexamplewweventsubscriptions",[],!1,1,!1,!0,10,!0,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);t=this.GridwwContainer;t.addSingleLineEdit("Description",24,"vDESCRIPTION","Event Description","","Description","char",0,"px",254,80,"left","e14tp2_client",[],"Description","Description",!0,0,!1,!1,"Attribute SmallLink",1,"WWColumn");t.addComboBox("Status",25,"vSTATUS","Status","Status","char",null,0,!0,!1,0,"px","WWColumn WWOptionalColumn");t.addComboBox("Event",26,"vEVENT","Entity","Event","char",null,0,!0,!1,0,"px","WWColumn WWSecondaryColumn");t.addSingleLineEdit("Filename",27,"vFILENAME","File Name","","FileName","char",0,"px",254,80,"left",null,[],"Filename","FileName",!0,0,!1,!1,"Attribute",1,"WWColumn WWSecondaryColumn");t.addSingleLineEdit("Classname",28,"vCLASSNAME","ClassName","","ClassName","char",0,"px",60,60,"left",null,[],"Classname","ClassName",!0,0,!1,!1,"Attribute",1,"WWColumn WWOptionalColumn");t.addSingleLineEdit("Methodname",29,"vMETHODNAME","Method Name","","MethodName","char",0,"px",60,60,"left",null,[],"Methodname","MethodName",!0,0,!1,!1,"Attribute",1,"WWColumn WWOptionalColumn");t.addSingleLineEdit("Btnupd",30,"vBTNUPD","","","BtnUpd","char",0,"px",20,20,"left","e15tp2_client",[],"Btnupd","BtnUpd",!0,0,!1,!1,"TextActionAttribute TextLikeLink",1,"WWTextActionColumn");t.addSingleLineEdit("Id",31,"vID","GUID","","Id","char",0,"px",40,40,"left",null,[],"Id","Id",!1,0,!1,!1,"Attribute",1,"");this.GridwwContainer.emptyText="";this.setGrid(t);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"MAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLETOP",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[9]={id:9,fld:"TITLE",format:0,grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,lvl:0,type:"svchar",len:100,dec:60,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vSEARCH",gxz:"ZV66Search",gxold:"OV66Search",gxvar:"AV66Search",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV66Search=n)},v2z:function(n){n!==undefined&&(gx.O.ZV66Search=n)},v2c:function(){gx.fn.setControlValue("vSEARCH",gx.O.AV66Search,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.AV66Search=this.val())},val:function(){return gx.fn.getControlValue("vSEARCH")},nac:gx.falseFn};this.declareDomainHdlr(12,function(){});n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"ADDNEW",grid:0,evt:"e11tp1_client"};n[15]={id:15,fld:"",grid:0};n[16]={id:16,fld:"GRIDCELL",grid:0};n[17]={id:17,fld:"TABLE1",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,fld:"",grid:0};n[21]={id:21,fld:"",grid:0};n[22]={id:22,fld:"",grid:0};n[24]={id:24,lvl:2,type:"char",len:254,dec:0,sign:!1,ro:0,isacc:0,grid:23,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDESCRIPTION",gxz:"ZV8Description",gxold:"OV8Description",gxvar:"AV8Description",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV8Description=n)},v2z:function(n){n!==undefined&&(gx.O.ZV8Description=n)},v2c:function(n){gx.fn.setGridControlValue("vDESCRIPTION",n||gx.fn.currentGridRowImpl(23),gx.O.AV8Description,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV8Description=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vDESCRIPTION",n||gx.fn.currentGridRowImpl(23))},nac:gx.falseFn,evt:"e14tp2_client"};n[25]={id:25,lvl:2,type:"char",len:1,dec:0,sign:!1,ro:0,isacc:0,grid:23,gxgrid:this.GridwwContainer,fnc:this.Validv_Status,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vSTATUS",gxz:"ZV17Status",gxold:"OV17Status",gxvar:"AV17Status",ucs:[],op:[25],ip:[25],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.AV17Status=n)},v2z:function(n){n!==undefined&&(gx.O.ZV17Status=n)},v2c:function(n){gx.fn.setGridComboBoxValue("vSTATUS",n||gx.fn.currentGridRowImpl(23),gx.O.AV17Status);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV17Status=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vSTATUS",n||gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};n[26]={id:26,lvl:2,type:"char",len:60,dec:0,sign:!1,ro:0,isacc:0,grid:23,gxgrid:this.GridwwContainer,fnc:this.Validv_Event,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vEVENT",gxz:"ZV10Event",gxold:"OV10Event",gxvar:"AV10Event",ucs:[],op:[26],ip:[26],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.AV10Event=n)},v2z:function(n){n!==undefined&&(gx.O.ZV10Event=n)},v2c:function(n){gx.fn.setGridComboBoxValue("vEVENT",n||gx.fn.currentGridRowImpl(23),gx.O.AV10Event);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV10Event=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vEVENT",n||gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};n[27]={id:27,lvl:2,type:"char",len:254,dec:0,sign:!1,ro:0,isacc:0,grid:23,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vFILENAME",gxz:"ZV13FileName",gxold:"OV13FileName",gxvar:"AV13FileName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV13FileName=n)},v2z:function(n){n!==undefined&&(gx.O.ZV13FileName=n)},v2c:function(n){gx.fn.setGridControlValue("vFILENAME",n||gx.fn.currentGridRowImpl(23),gx.O.AV13FileName,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV13FileName=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vFILENAME",n||gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};n[28]={id:28,lvl:2,type:"char",len:60,dec:0,sign:!1,ro:0,isacc:0,grid:23,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCLASSNAME",gxz:"ZV6ClassName",gxold:"OV6ClassName",gxvar:"AV6ClassName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV6ClassName=n)},v2z:function(n){n!==undefined&&(gx.O.ZV6ClassName=n)},v2c:function(n){gx.fn.setGridControlValue("vCLASSNAME",n||gx.fn.currentGridRowImpl(23),gx.O.AV6ClassName,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV6ClassName=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vCLASSNAME",n||gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};n[29]={id:29,lvl:2,type:"char",len:60,dec:0,sign:!1,ro:0,isacc:0,grid:23,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vMETHODNAME",gxz:"ZV15MethodName",gxold:"OV15MethodName",gxvar:"AV15MethodName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV15MethodName=n)},v2z:function(n){n!==undefined&&(gx.O.ZV15MethodName=n)},v2c:function(n){gx.fn.setGridControlValue("vMETHODNAME",n||gx.fn.currentGridRowImpl(23),gx.O.AV15MethodName,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV15MethodName=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vMETHODNAME",n||gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};n[30]={id:30,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:0,isacc:0,grid:23,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vBTNUPD",gxz:"ZV5BtnUpd",gxold:"OV5BtnUpd",gxvar:"AV5BtnUpd",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV5BtnUpd=n)},v2z:function(n){n!==undefined&&(gx.O.ZV5BtnUpd=n)},v2c:function(n){gx.fn.setGridControlValue("vBTNUPD",n||gx.fn.currentGridRowImpl(23),gx.O.AV5BtnUpd,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV5BtnUpd=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vBTNUPD",n||gx.fn.currentGridRowImpl(23))},nac:gx.falseFn,evt:"e15tp2_client"};n[31]={id:31,lvl:2,type:"char",len:40,dec:0,sign:!1,ro:0,isacc:0,grid:23,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vID",gxz:"ZV14Id",gxold:"OV14Id",gxvar:"AV14Id",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.AV14Id=n)},v2z:function(n){n!==undefined&&(gx.O.ZV14Id=n)},v2c:function(n){gx.fn.setGridControlValue("vID",n||gx.fn.currentGridRowImpl(23),gx.O.AV14Id,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV14Id=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vID",n||gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};n[32]={id:32,fld:"",grid:0};n[33]={id:33,fld:"",grid:0};n[34]={id:34,fld:"",grid:0};n[35]={id:35,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCURRENTPAGE",gxz:"ZV7CurrentPage",gxold:"OV7CurrentPage",gxvar:"AV7CurrentPage",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV7CurrentPage=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV7CurrentPage=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("vCURRENTPAGE",gx.O.AV7CurrentPage,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV7CurrentPage=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vCURRENTPAGE",".")},nac:gx.falseFn};this.AV66Search="";this.ZV66Search="";this.OV66Search="";this.ZV8Description="";this.OV8Description="";this.ZV17Status="";this.OV17Status="";this.ZV10Event="";this.OV10Event="";this.ZV13FileName="";this.OV13FileName="";this.ZV6ClassName="";this.OV6ClassName="";this.ZV15MethodName="";this.OV15MethodName="";this.ZV5BtnUpd="";this.OV5BtnUpd="";this.ZV14Id="";this.OV14Id="";this.AV7CurrentPage=0;this.ZV7CurrentPage=0;this.OV7CurrentPage=0;this.AV66Search="";this.AV7CurrentPage=0;this.AV8Description="";this.AV17Status="";this.AV10Event="";this.AV13FileName="";this.AV6ClassName="";this.AV15MethodName="";this.AV5BtnUpd="";this.AV14Id="";this.Events={e16tp2_client:["ENTER",!0],e17tp2_client:["CANCEL",!0],e11tp1_client:["'ADDNEW'",!1],e14tp2_client:["VDESCRIPTION.CLICK",!1],e15tp2_client:["VBTNUPD.CLICK",!1]};this.EvtParms.REFRESH=[[{av:"GRIDWW_nFirstRecordOnPage"},{av:"GRIDWW_nEOF"},{ctrl:"GRIDWW",prop:"Rows"}],[]];this.EvtParms.START=[[],[{av:"AV7CurrentPage",fld:"vCURRENTPAGE",pic:"ZZZ9"},{av:'gx.fn.getCtrlProperty("vCURRENTPAGE","Visible")',ctrl:"vCURRENTPAGE",prop:"Visible"}]];this.EvtParms["GRIDWW.LOAD"]=[[],[{av:"AV5BtnUpd",fld:"vBTNUPD",pic:""},{av:"AV14Id",fld:"vID",pic:""},{av:"AV8Description",fld:"vDESCRIPTION",pic:""},{ctrl:"vSTATUS"},{av:"AV17Status",fld:"vSTATUS",pic:""},{ctrl:"vEVENT"},{av:"AV10Event",fld:"vEVENT",pic:""},{av:"AV13FileName",fld:"vFILENAME",pic:""},{av:"AV6ClassName",fld:"vCLASSNAME",pic:""},{av:"AV15MethodName",fld:"vMETHODNAME",pic:""}]];this.EvtParms["'ADDNEW'"]=[[],[]];this.EvtParms["VDESCRIPTION.CLICK"]=[[{av:"AV14Id",fld:"vID",pic:""}],[{av:"AV14Id",fld:"vID",pic:""}]];this.EvtParms["VBTNUPD.CLICK"]=[[{av:"AV14Id",fld:"vID",pic:""}],[{av:"AV14Id",fld:"vID",pic:""}]];this.EvtParms.GRIDWW_FIRSTPAGE=[[{av:"GRIDWW_nFirstRecordOnPage"},{av:"GRIDWW_nEOF"},{ctrl:"GRIDWW",prop:"Rows"}],[]];this.EvtParms.GRIDWW_PREVPAGE=[[{av:"GRIDWW_nFirstRecordOnPage"},{av:"GRIDWW_nEOF"},{ctrl:"GRIDWW",prop:"Rows"}],[]];this.EvtParms.GRIDWW_NEXTPAGE=[[{av:"GRIDWW_nFirstRecordOnPage"},{av:"GRIDWW_nEOF"},{ctrl:"GRIDWW",prop:"Rows"}],[]];this.EvtParms.GRIDWW_LASTPAGE=[[{av:"GRIDWW_nFirstRecordOnPage"},{av:"GRIDWW_nEOF"},{ctrl:"GRIDWW",prop:"Rows"}],[]];this.EvtParms.VALIDV_STATUS=[[{ctrl:"vSTATUS"},{av:"AV17Status",fld:"vSTATUS",pic:""}],[{ctrl:"vSTATUS"},{av:"AV17Status",fld:"vSTATUS",pic:""}]];this.EvtParms.VALIDV_EVENT=[[{ctrl:"vEVENT"},{av:"AV10Event",fld:"vEVENT",pic:""}],[{ctrl:"vEVENT"},{av:"AV10Event",fld:"vEVENT",pic:""}]];this.Initialize()});gx.wi(function(){gx.createParentObj(gamexamplewweventsubscriptions)})