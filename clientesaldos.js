/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:51:59.11
*/
gx.evt.autoSkip=!1;gx.define("clientesaldos",!1,function(){var n,i,t;this.ServerClass="clientesaldos";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.anyGridBaseTable=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){};this.Valid_Clienteid=function(){var n=gx.fn.currentGridRowImpl(31);return this.validCliEvt("Valid_Clienteid",31,function(){try{if(gx.fn.currentGridRowImpl(31)===0)return!0;var n=gx.util.balloon.getNew("CLIENTEID",gx.fn.currentGridRowImpl(31));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Clientetipo=function(){var n=gx.fn.currentGridRowImpl(31);return this.validCliEvt("Valid_Clientetipo",31,function(){try{if(gx.fn.currentGridRowImpl(31)===0)return!0;var n=gx.util.balloon.getNew("CLIENTETIPO",gx.fn.currentGridRowImpl(31));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e137i2_client=function(){return this.clearMessages(),this.call("recibo_paso01.aspx",[this.A53ClienteId]),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e147i2_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e157i2_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,29,30,32,33,34,35,36,37,38,39];this.GXLastCtrlId=39;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",31,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"clientesaldos",[],!1,1,!0,!0,0,!0,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);i=this.GridContainer;i.addBitmap("&Vercuotas","vVERCUOTAS",32,0,"px",17,"px","e137i2_client","","","ActionBaseColorAttribute","WWActionColumn");i.addSingleLineEdit(53,33,"CLIENTEID","Cuil/Cuit","","ClienteId","int",0,"px",15,15,"right",null,[],53,"ClienteId",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");i.addSingleLineEdit(3010,34,"CLIENTECUENTAID","Nº Cta.","","ClienteCuentaId","int",0,"px",8,8,"right",null,[],3010,"ClienteCuentaId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn");i.addComboBox(1158,35,"CLIENTETIPO","Tipo","ClienteTipo","char",null,0,!1,!1,0,"px","WWColumn");i.addSingleLineEdit(1156,36,"CLIENTEDENOMINACION","Cliente","","ClienteDenominacion","svchar",0,"px",64,64,"left",null,[],1156,"ClienteDenominacion",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");i.addSingleLineEdit(1935,37,"CLIENTENRODOCUMENTO","Documento","","ClienteNroDocumento","int",0,"px",8,8,"right",null,[],1935,"ClienteNroDocumento",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");i.addComboBox(1157,38,"CLIENTEESTADO","Estado","ClienteEstado","char",null,0,!1,!1,0,"px","WWColumn");i.addSingleLineEdit(513,39,"CLIENTEDOMICILIO","Domicilio","","ClienteDomicilio","svchar",0,"px",256,80,"left",null,[],513,"ClienteDomicilio",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");this.GridContainer.emptyText="";this.setGrid(i);this.DVPANEL_TABLEHEADERContainer=gx.uc.getNew(this,9,0,"BootstrapPanel","DVPANEL_TABLEHEADERContainer","Dvpanel_tableheader","DVPANEL_TABLEHEADER");t=this.DVPANEL_TABLEHEADERContainer;t.setProp("Class","Class","","char");t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("Width","Width","100%","str");t.setProp("Height","Height","100","str");t.setProp("AutoWidth","Autowidth",!1,"bool");t.setProp("AutoHeight","Autoheight",!0,"bool");t.setProp("Cls","Cls","PanelFilled_BaseColor","str");t.setProp("ShowHeader","Showheader",!0,"bool");t.setDynProp("Title","Title","Opciones","str");t.setProp("Collapsible","Collapsible",!0,"bool");t.setProp("Collapsed","Collapsed",!1,"bool");t.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");t.setProp("IconPosition","Iconposition","Right","str");t.setProp("AutoScroll","Autoscroll",!1,"bool");t.setProp("Visible","Visible",!0,"bool");t.setC2ShowFunction(function(n){n.show()});this.setUserControl(t);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLEMAIN",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[11]={id:11,fld:"TABLEHEADER",grid:0};n[12]={id:12,fld:"",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"",grid:0};n[15]={id:15,fld:"",grid:0};n[16]={id:16,lvl:0,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vCLIENTENRODOCUMENTO",gxz:"ZV11ClienteNroDocumento",gxold:"OV11ClienteNroDocumento",gxvar:"AV11ClienteNroDocumento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV11ClienteNroDocumento=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV11ClienteNroDocumento=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("vCLIENTENRODOCUMENTO",gx.O.AV11ClienteNroDocumento,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV11ClienteNroDocumento=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vCLIENTENRODOCUMENTO",".")},nac:gx.falseFn};n[17]={id:17,fld:"",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,fld:"",grid:0};n[20]={id:20,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vCLIENTEDENOMINACION",gxz:"ZV9ClienteDenominacion",gxold:"OV9ClienteDenominacion",gxvar:"AV9ClienteDenominacion",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV9ClienteDenominacion=n)},v2z:function(n){n!==undefined&&(gx.O.ZV9ClienteDenominacion=n)},v2c:function(){gx.fn.setControlValue("vCLIENTEDENOMINACION",gx.O.AV9ClienteDenominacion,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV9ClienteDenominacion=this.val())},val:function(){return gx.fn.getControlValue("vCLIENTEDENOMINACION")},nac:gx.falseFn};n[21]={id:21,fld:"",grid:0};n[22]={id:22,fld:"",grid:0};n[23]={id:23,fld:"",grid:0};n[24]={id:24,fld:"",grid:0};n[25]={id:25,lvl:0,type:"int",len:15,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vCLIENTEID",gxz:"ZV10ClienteId",gxold:"OV10ClienteId",gxvar:"AV10ClienteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV10ClienteId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV10ClienteId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("vCLIENTEID",gx.O.AV10ClienteId,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV10ClienteId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vCLIENTEID",".")},nac:gx.falseFn};n[26]={id:26,fld:"",grid:0};n[27]={id:27,fld:"",grid:0};n[29]={id:29,fld:"",grid:0};n[30]={id:30,fld:"",grid:0};n[32]={id:32,lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:31,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vVERCUOTAS",gxz:"ZV21VerCuotas",gxold:"OV21VerCuotas",gxvar:"AV21VerCuotas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.AV21VerCuotas=n)},v2z:function(n){n!==undefined&&(gx.O.ZV21VerCuotas=n)},v2c:function(n){gx.fn.setGridMultimediaValue("vVERCUOTAS",n||gx.fn.currentGridRowImpl(31),gx.O.AV21VerCuotas,gx.O.AV29Vercuotas_GXI)},c2v:function(n){gx.O.AV29Vercuotas_GXI=this.val_GXI();this.val(n)!==undefined&&(gx.O.AV21VerCuotas=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vVERCUOTAS",n||gx.fn.currentGridRowImpl(31))},val_GXI:function(n){return gx.fn.getGridControlValue("vVERCUOTAS_GXI",n||gx.fn.currentGridRowImpl(31))},gxvar_GXI:"AV29Vercuotas_GXI",nac:gx.falseFn,evt:"e137i2_client"};n[33]={id:33,lvl:2,type:"int",len:15,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZZ9",ro:1,isacc:0,grid:31,gxgrid:this.GridContainer,fnc:this.Valid_Clienteid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CLIENTEID",gxz:"Z53ClienteId",gxold:"O53ClienteId",gxvar:"A53ClienteId",ucs:[],op:[39,37,34,35,36,38],ip:[39,37,34,36,38,35,33],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A53ClienteId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z53ClienteId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("CLIENTEID",n||gx.fn.currentGridRowImpl(31),gx.O.A53ClienteId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A53ClienteId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("CLIENTEID",n||gx.fn.currentGridRowImpl(31),".")},nac:gx.falseFn};n[34]={id:34,lvl:2,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:31,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CLIENTECUENTAID",gxz:"Z3010ClienteCuentaId",gxold:"O3010ClienteCuentaId",gxvar:"A3010ClienteCuentaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A3010ClienteCuentaId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3010ClienteCuentaId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("CLIENTECUENTAID",n||gx.fn.currentGridRowImpl(31),gx.O.A3010ClienteCuentaId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3010ClienteCuentaId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("CLIENTECUENTAID",n||gx.fn.currentGridRowImpl(31),".")},nac:gx.falseFn};n[35]={id:35,lvl:2,type:"char",len:1,dec:0,sign:!1,ro:1,isacc:0,grid:31,gxgrid:this.GridContainer,fnc:this.Valid_Clientetipo,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CLIENTETIPO",gxz:"Z1158ClienteTipo",gxold:"O1158ClienteTipo",gxvar:"A1158ClienteTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A1158ClienteTipo=n)},v2z:function(n){n!==undefined&&(gx.O.Z1158ClienteTipo=n)},v2c:function(n){gx.fn.setGridComboBoxValue("CLIENTETIPO",n||gx.fn.currentGridRowImpl(31),gx.O.A1158ClienteTipo);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1158ClienteTipo=this.val(n))},val:function(n){return gx.fn.getGridControlValue("CLIENTETIPO",n||gx.fn.currentGridRowImpl(31))},nac:gx.falseFn};n[36]={id:36,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:31,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CLIENTEDENOMINACION",gxz:"Z1156ClienteDenominacion",gxold:"O1156ClienteDenominacion",gxvar:"A1156ClienteDenominacion",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A1156ClienteDenominacion=n)},v2z:function(n){n!==undefined&&(gx.O.Z1156ClienteDenominacion=n)},v2c:function(n){gx.fn.setGridControlValue("CLIENTEDENOMINACION",n||gx.fn.currentGridRowImpl(31),gx.O.A1156ClienteDenominacion,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1156ClienteDenominacion=this.val(n))},val:function(n){return gx.fn.getGridControlValue("CLIENTEDENOMINACION",n||gx.fn.currentGridRowImpl(31))},nac:gx.falseFn};n[37]={id:37,lvl:2,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:31,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CLIENTENRODOCUMENTO",gxz:"Z1935ClienteNroDocumento",gxold:"O1935ClienteNroDocumento",gxvar:"A1935ClienteNroDocumento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A1935ClienteNroDocumento=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z1935ClienteNroDocumento=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("CLIENTENRODOCUMENTO",n||gx.fn.currentGridRowImpl(31),gx.O.A1935ClienteNroDocumento,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1935ClienteNroDocumento=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("CLIENTENRODOCUMENTO",n||gx.fn.currentGridRowImpl(31),".")},nac:gx.falseFn};n[38]={id:38,lvl:2,type:"char",len:3,dec:0,sign:!1,ro:1,isacc:0,grid:31,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CLIENTEESTADO",gxz:"Z1157ClienteEstado",gxold:"O1157ClienteEstado",gxvar:"A1157ClienteEstado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A1157ClienteEstado=n)},v2z:function(n){n!==undefined&&(gx.O.Z1157ClienteEstado=n)},v2c:function(n){gx.fn.setGridComboBoxValue("CLIENTEESTADO",n||gx.fn.currentGridRowImpl(31),gx.O.A1157ClienteEstado);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1157ClienteEstado=this.val(n))},val:function(n){return gx.fn.getGridControlValue("CLIENTEESTADO",n||gx.fn.currentGridRowImpl(31))},nac:gx.falseFn};n[39]={id:39,lvl:2,type:"svchar",len:256,dec:0,sign:!1,ro:1,isacc:0,grid:31,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CLIENTEDOMICILIO",gxz:"Z513ClienteDomicilio",gxold:"O513ClienteDomicilio",gxvar:"A513ClienteDomicilio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A513ClienteDomicilio=n)},v2z:function(n){n!==undefined&&(gx.O.Z513ClienteDomicilio=n)},v2c:function(n){gx.fn.setGridControlValue("CLIENTEDOMICILIO",n||gx.fn.currentGridRowImpl(31),gx.O.A513ClienteDomicilio,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A513ClienteDomicilio=this.val(n))},val:function(n){return gx.fn.getGridControlValue("CLIENTEDOMICILIO",n||gx.fn.currentGridRowImpl(31))},nac:gx.falseFn};this.AV11ClienteNroDocumento=0;this.ZV11ClienteNroDocumento=0;this.OV11ClienteNroDocumento=0;this.AV9ClienteDenominacion="";this.ZV9ClienteDenominacion="";this.OV9ClienteDenominacion="";this.AV10ClienteId=0;this.ZV10ClienteId=0;this.OV10ClienteId=0;this.ZV21VerCuotas="";this.OV21VerCuotas="";this.Z53ClienteId=0;this.O53ClienteId=0;this.Z3010ClienteCuentaId=0;this.O3010ClienteCuentaId=0;this.Z1158ClienteTipo="";this.O1158ClienteTipo="";this.Z1156ClienteDenominacion="";this.O1156ClienteDenominacion="";this.Z1935ClienteNroDocumento=0;this.O1935ClienteNroDocumento=0;this.Z1157ClienteEstado="";this.O1157ClienteEstado="";this.Z513ClienteDomicilio="";this.O513ClienteDomicilio="";this.AV11ClienteNroDocumento=0;this.AV9ClienteDenominacion="";this.AV10ClienteId=0;this.AV21VerCuotas="";this.A53ClienteId=0;this.A3010ClienteCuentaId=0;this.A1158ClienteTipo="";this.A1156ClienteDenominacion="";this.A1935ClienteNroDocumento=0;this.A1157ClienteEstado="";this.A513ClienteDomicilio="";this.Events={e147i2_client:["ENTER",!0],e157i2_client:["CANCEL",!0],e137i2_client:["VVERCUOTAS.CLICK",!1]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV11ClienteNroDocumento",fld:"vCLIENTENRODOCUMENTO",pic:"ZZZZZZZ9"},{av:"AV9ClienteDenominacion",fld:"vCLIENTEDENOMINACION",pic:"@!"},{av:"AV10ClienteId",fld:"vCLIENTEID",pic:"ZZZZZZZZZZZZZZ9"}],[]];this.EvtParms.START=[[{av:"AV11ClienteNroDocumento",fld:"vCLIENTENRODOCUMENTO",pic:"ZZZZZZZ9"}],[{av:"this.DVPANEL_TABLEHEADERContainer.Title",ctrl:"DVPANEL_TABLEHEADER",prop:"Title"},{ctrl:"GRID",prop:"Rows"}]];this.EvtParms["GRID.LOAD"]=[[],[{av:"AV21VerCuotas",fld:"vVERCUOTAS",pic:""},{av:'gx.fn.getCtrlProperty("vVERCUOTAS","Tooltiptext")',ctrl:"vVERCUOTAS",prop:"Tooltiptext"}]];this.EvtParms["VVERCUOTAS.CLICK"]=[[{av:"A53ClienteId",fld:"CLIENTEID",pic:"ZZZZZZZZZZZZZZ9",hsh:!0}],[]];this.EvtParms.GRID_FIRSTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV11ClienteNroDocumento",fld:"vCLIENTENRODOCUMENTO",pic:"ZZZZZZZ9"},{av:"AV9ClienteDenominacion",fld:"vCLIENTEDENOMINACION",pic:"@!"},{av:"AV10ClienteId",fld:"vCLIENTEID",pic:"ZZZZZZZZZZZZZZ9"}],[]];this.EvtParms.GRID_PREVPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV11ClienteNroDocumento",fld:"vCLIENTENRODOCUMENTO",pic:"ZZZZZZZ9"},{av:"AV9ClienteDenominacion",fld:"vCLIENTEDENOMINACION",pic:"@!"},{av:"AV10ClienteId",fld:"vCLIENTEID",pic:"ZZZZZZZZZZZZZZ9"}],[]];this.EvtParms.GRID_NEXTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV11ClienteNroDocumento",fld:"vCLIENTENRODOCUMENTO",pic:"ZZZZZZZ9"},{av:"AV9ClienteDenominacion",fld:"vCLIENTEDENOMINACION",pic:"@!"},{av:"AV10ClienteId",fld:"vCLIENTEID",pic:"ZZZZZZZZZZZZZZ9"}],[]];this.EvtParms.GRID_LASTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV11ClienteNroDocumento",fld:"vCLIENTENRODOCUMENTO",pic:"ZZZZZZZ9"},{av:"AV9ClienteDenominacion",fld:"vCLIENTEDENOMINACION",pic:"@!"},{av:"AV10ClienteId",fld:"vCLIENTEID",pic:"ZZZZZZZZZZZZZZ9"}],[]];this.EvtParms.VALID_CLIENTEID=[[{av:"A513ClienteDomicilio",fld:"CLIENTEDOMICILIO",pic:""},{av:"A1935ClienteNroDocumento",fld:"CLIENTENRODOCUMENTO",pic:"ZZZZZZZ9"},{av:"A3010ClienteCuentaId",fld:"CLIENTECUENTAID",pic:"ZZZZZZZ9"},{av:"A1156ClienteDenominacion",fld:"CLIENTEDENOMINACION",pic:"@!"},{ctrl:"CLIENTEESTADO"},{av:"A1157ClienteEstado",fld:"CLIENTEESTADO",pic:""},{ctrl:"CLIENTETIPO"},{av:"A1158ClienteTipo",fld:"CLIENTETIPO",pic:""},{av:"A53ClienteId",fld:"CLIENTEID",pic:"ZZZZZZZZZZZZZZ9",hsh:!0}],[{av:"A513ClienteDomicilio",fld:"CLIENTEDOMICILIO",pic:""},{av:"A1935ClienteNroDocumento",fld:"CLIENTENRODOCUMENTO",pic:"ZZZZZZZ9"},{av:"A3010ClienteCuentaId",fld:"CLIENTECUENTAID",pic:"ZZZZZZZ9"},{ctrl:"CLIENTETIPO"},{av:"A1158ClienteTipo",fld:"CLIENTETIPO",pic:""},{av:"A1156ClienteDenominacion",fld:"CLIENTEDENOMINACION",pic:"@!"},{ctrl:"CLIENTEESTADO"},{av:"A1157ClienteEstado",fld:"CLIENTEESTADO",pic:""}]];this.EvtParms.VALID_CLIENTETIPO=[[],[]];i.addRefreshingVar(this.GXValidFnc[16]);i.addRefreshingVar(this.GXValidFnc[20]);i.addRefreshingVar(this.GXValidFnc[25]);i.addRefreshingParm(this.GXValidFnc[16]);i.addRefreshingParm(this.GXValidFnc[20]);i.addRefreshingParm(this.GXValidFnc[25]);this.Initialize()});gx.wi(function(){gx.createParentObj(clientesaldos)})