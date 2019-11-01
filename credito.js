/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:45:26.53
*/
gx.evt.autoSkip=!1;gx.define("credito",!1,function(){var n,i,t;this.ServerClass="credito";this.PackageName="GeneXus.Programs";this.setObjectType("trn");this.anyGridBaseTable=!0;this.hasEnterEvent=!0;this.skipOnEnter=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV7CreditoId=gx.fn.getIntegerValue("vCREDITOID",".");this.AV18Pgmdesc=gx.fn.getControlValue("vPGMDESC");this.Gx_BScreen=gx.fn.getIntegerValue("vGXBSCREEN",".");this.Gx_mode=gx.fn.getControlValue("vMODE");this.AV9TrnContext=gx.fn.getControlValue("vTRNCONTEXT")};this.Valid_Creditoid=function(){return this.validCliEvt("Valid_Creditoid",0,function(){try{var n=gx.util.balloon.getNew("CREDITOID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Creditodescripcion=function(){return this.validCliEvt("Valid_Creditodescripcion",0,function(){try{var n=gx.util.balloon.getNew("CREDITODESCRIPCION");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Creditoentrega=function(){return this.validCliEvt("Valid_Creditoentrega",0,function(){try{var n=gx.util.balloon.getNew("CREDITOENTREGA");if(this.AnyError=0,!(this.A2610CreditoEntrega=="S"||this.A2610CreditoEntrega=="N"||""==this.A2610CreditoEntrega))try{n.setError("Campo Entrega fuera de rango");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Creditoperunidad=function(){return this.validCliEvt("Valid_Creditoperunidad",0,function(){try{var n=gx.util.balloon.getNew("CREDITOPERUNIDAD");if(this.AnyError=0,!(this.A2683CreditoPerUnidad=="MEN"||this.A2683CreditoPerUnidad=="QUI"||this.A2683CreditoPerUnidad=="SEM"||this.A2683CreditoPerUnidad=="DIA"||""==this.A2683CreditoPerUnidad))try{n.setError("Campo Periodo Unidad fuera de rango");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Creditoestado=function(){return this.validCliEvt("Valid_Creditoestado",0,function(){try{var n=gx.util.balloon.getNew("CREDITOESTADO");if(this.AnyError=0,!(this.A2141CreditoEstado=="ACT"||this.A2141CreditoEstado=="INA"||""==this.A2141CreditoEstado))try{n.setError("Campo Credito Estado fuera de rango");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Creditocuota=function(){var n=gx.fn.currentGridRowImpl(50);return this.validCliEvt("Valid_Creditocuota",50,function(){try{if(gx.fn.currentGridRowImpl(50)===0)return!0;var n=gx.util.balloon.getNew("CREDITOCUOTA",gx.fn.currentGridRowImpl(50));this.AnyError=0;this.sMode193=this.Gx_mode;this.Gx_mode=gx.fn.getGridRowMode(193,50);this.standaloneModal4I193();this.standaloneNotModal4I193();gx.fn.gridDuplicateKey(51)&&(n.setError(gx.text.format(gx.getMessage("GXM_1004"),"Cuota","","","","","","","","")),this.AnyError=gx.num.trunc(1,0))}catch(t){}try{return(this.Gx_mode=this.sMode193,n==null)?!0:n.show()}catch(t){}return!0})};this.Valid_Planid=function(){var n=gx.fn.currentGridRowImpl(50);return this.validSrvEvt("Valid_Planid",50).then(function(n){try{this.sMode193=this.Gx_mode;this.Gx_mode=gx.fn.getGridRowMode(193,50)}finally{this.Gx_mode=this.sMode193}return n}.closure(this))};this.Valid_Plannombre=function(){var n=gx.fn.currentGridRowImpl(50);return this.validCliEvt("Valid_Plannombre",50,function(){try{if(gx.fn.currentGridRowImpl(50)===0)return!0;var n=gx.util.balloon.getNew("PLANNOMBRE",gx.fn.currentGridRowImpl(50));this.AnyError=0;this.sMode193=this.Gx_mode;this.Gx_mode=gx.fn.getGridRowMode(193,50)}catch(t){}try{return(this.Gx_mode=this.sMode193,n==null)?!0:n.show()}catch(t){}return!0})};this.Valid_Plancuota=function(){var n=gx.fn.currentGridRowImpl(50);return this.validCliEvt("Valid_Plancuota",50,function(){try{if(gx.fn.currentGridRowImpl(50)===0)return!0;var n=gx.util.balloon.getNew("PLANCUOTA",gx.fn.currentGridRowImpl(50));this.AnyError=0;this.sMode193=this.Gx_mode;this.Gx_mode=gx.fn.getGridRowMode(193,50)}catch(t){}try{return(this.Gx_mode=this.sMode193,n==null)?!0:n.show()}catch(t){}return!0})};this.Valid_Creditocuotadesde=function(){var n=gx.fn.currentGridRowImpl(50);return this.validCliEvt("Valid_Creditocuotadesde",50,function(){try{if(gx.fn.currentGridRowImpl(50)===0)return!0;var n=gx.util.balloon.getNew("CREDITOCUOTADESDE",gx.fn.currentGridRowImpl(50));if(this.AnyError=0,this.sMode193=this.Gx_mode,this.Gx_mode=gx.fn.getGridRowMode(193,50),!(new gx.date.gxdate("").compare(this.A2139CreditoCuotaDesde)==0||new gx.date.gxdate(this.A2139CreditoCuotaDesde).compare(gx.date.ymdtod(1753,01,01))>=0))try{n.setError("Campo Desde fuera de rango");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return(this.Gx_mode=this.sMode193,n==null)?!0:n.show()}catch(t){}return!0})};this.Valid_Creditocuotahasta=function(){var n=gx.fn.currentGridRowImpl(50);return this.validCliEvt("Valid_Creditocuotahasta",50,function(){try{if(gx.fn.currentGridRowImpl(50)===0)return!0;var n=gx.util.balloon.getNew("CREDITOCUOTAHASTA",gx.fn.currentGridRowImpl(50));if(this.AnyError=0,this.sMode193=this.Gx_mode,this.Gx_mode=gx.fn.getGridRowMode(193,50),!(new gx.date.gxdate("").compare(this.A2140CreditoCuotaHasta)==0||new gx.date.gxdate(this.A2140CreditoCuotaHasta).compare(gx.date.ymdtod(1753,01,01))>=0))try{n.setError("Campo Hasta fuera de rango");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return(this.Gx_mode=this.sMode193,n==null)?!0:n.show()}catch(t){}return!0})};this.Valid_Creditocuotacosto=function(){var n=gx.fn.currentGridRowImpl(50);return this.validCliEvt("Valid_Creditocuotacosto",50,function(){try{if(gx.fn.currentGridRowImpl(50)===0)return!0;var n=gx.util.balloon.getNew("CREDITOCUOTACOSTO",gx.fn.currentGridRowImpl(50));this.AnyError=0;this.sMode193=this.Gx_mode;this.Gx_mode=gx.fn.getGridRowMode(193,50);try{this.A2136CreditoCuotaNombre=gx.text.trim(this.A2137CreditoDescripcion)+" - "+gx.text.trim(this.A1040PlanNombre)+" % "+gx.text.trim(gx.num.str(this.A2138CreditoCuotaCosto,6,2))+" Desde: "+gx.date.dtoc(this.A2139CreditoCuotaDesde,"DMY","/")+" Hasta: "+gx.date.dtoc(this.A2140CreditoCuotaHasta,"DMY","/")}catch(t){}}catch(t){}try{return(this.Gx_mode=this.sMode193,n==null)?!0:n.show()}catch(t){}return!0})};this.Valid_Creditocuotagenerafecha=function(){var n=gx.fn.currentGridRowImpl(50);return this.validCliEvt("Valid_Creditocuotagenerafecha",50,function(){try{if(gx.fn.currentGridRowImpl(50)===0)return!0;var n=gx.util.balloon.getNew("CREDITOCUOTAGENERAFECHA",gx.fn.currentGridRowImpl(50));if(this.AnyError=0,this.sMode193=this.Gx_mode,this.Gx_mode=gx.fn.getGridRowMode(193,50),!(this.A2690CreditoCuotaGeneraFecha=="S"||this.A2690CreditoCuotaGeneraFecha=="N"||""==this.A2690CreditoCuotaGeneraFecha))try{n.setError("Campo Genera Fecha fuera de rango");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return(this.Gx_mode=this.sMode193,n==null)?!0:n.show()}catch(t){}return!0})};this.standaloneModal4I193=function(){try{this.Gx_mode=="INS"&&""==this.A2690CreditoCuotaGeneraFecha&&this.Gx_BScreen==0&&(this.A2690CreditoCuotaGeneraFecha="N")}catch(n){}try{this.Gx_mode!="INS"?gx.fn.setCtrlProperty("CREDITOCUOTA","Enabled",0):gx.fn.setCtrlProperty("CREDITOCUOTA","Enabled",1)}catch(n){}};this.standaloneNotModal4I193=function(){try{gx.fn.setCtrlProperty("PLANCUOTA","Enabled",0)}catch(n){}try{gx.fn.setCtrlProperty("CREDITOCUOTANOMBRE","Enabled",0)}catch(n){}try{gx.fn.setCtrlProperty("CREDITOCUOTANOMBREABREV","Enabled",0)}catch(n){}};this.e124i2_client=function(){return this.executeServerEvent("AFTER TRN",!0,null,!1,!1)};this.e134i192_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e144i192_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,12,13,14,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70];this.GXLastCtrlId=70;this.Gridlevel_cuotaContainer=new gx.grid.grid(this,193,"Cuota",50,"Gridlevel_cuota","Gridlevel_cuota","Gridlevel_cuotaContainer",this.CmpContext,this.IsMasterPage,"credito",[267],!1,1,!1,!0,1,!1,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);i=this.Gridlevel_cuotaContainer;i.addSingleLineEdit(267,51,"CREDITOCUOTA","Nº Cuota","","CreditoCuota","int",0,"px",4,4,"right",null,[],267,"CreditoCuota",!0,0,!1,!1,"AttributeRealWidth",1,"TrnColumn");i.addSingleLineEdit(119,52,"PLANID","Ide. Plan","","PlanId","int",0,"px",4,4,"right",null,[],119,"PlanId",!0,0,!1,!1,"AttributeRealWidth",1,"TrnColumn");i.addBitmap("prompt_119","PROMPT_119",70,0,"",0,"",null,"","","gx-prompt Image","");i.addSingleLineEdit(1040,53,"PLANNOMBRE","Plan Nombre","","PlanNombre","svchar",0,"px",64,64,"left",null,[],1040,"PlanNombre",!0,0,!1,!1,"AttributeRealWidth",1,"TrnColumn");i.addSingleLineEdit(2114,54,"PLANCUOTA","Cuota","","PlanCuota","int",0,"px",4,4,"right",null,[],2114,"PlanCuota",!1,0,!1,!1,"AttributeRealWidth",1,"TrnColumn");i.addSingleLineEdit(2139,55,"CREDITOCUOTADESDE","Desde","Fecha ...","CreditoCuotaDesde","date",0,"px",10,10,"right",null,[],2139,"CreditoCuotaDesde",!0,0,!1,!1,"AttributeRealWidthDate",1,"TrnColumn");i.addSingleLineEdit(2140,56,"CREDITOCUOTAHASTA","Hasta","Fecha ...","CreditoCuotaHasta","date",0,"px",10,10,"right",null,[],2140,"CreditoCuotaHasta",!0,0,!1,!1,"AttributeRealWidthDate",1,"TrnColumn");i.addSingleLineEdit(2138,57,"CREDITOCUOTACOSTO","Porcentaje","","CreditoCuotaCosto","decimal",0,"px",6,6,"right",null,[],2138,"CreditoCuotaCosto",!0,2,!1,!1,"AttributeRealWidth",1,"TrnColumn");i.addComboBox(2690,58,"CREDITOCUOTAGENERAFECHA","Gen. Fecha","CreditoCuotaGeneraFecha","char",null,0,!0,!1,0,"px","TrnColumn");i.addSingleLineEdit(2136,59,"CREDITOCUOTANOMBRE","Plan","","CreditoCuotaNombre","char",0,"px",100,80,"left",null,[],2136,"CreditoCuotaNombre",!1,0,!1,!1,"AttributeRealWidth",1,"TrnColumn");i.addSingleLineEdit(2324,60,"CREDITOCUOTANOMBREABREV","Plan","","CreditoCuotaNombreAbrev","char",0,"px",100,80,"left",null,[],2324,"CreditoCuotaNombreAbrev",!1,0,!1,!1,"AttributeRealWidth",1,"TrnColumn");this.Gridlevel_cuotaContainer.emptyText="";this.setGrid(i);this.DVPANEL_TABLEATTRIBUTESContainer=gx.uc.getNew(this,15,0,"BootstrapPanel","DVPANEL_TABLEATTRIBUTESContainer","Dvpanel_tableattributes","DVPANEL_TABLEATTRIBUTES");t=this.DVPANEL_TABLEATTRIBUTESContainer;t.setProp("Class","Class","","char");t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("Width","Width","100%","str");t.setProp("Height","Height","100","str");t.setProp("AutoWidth","Autowidth",!1,"bool");t.setProp("AutoHeight","Autoheight",!0,"bool");t.setProp("Cls","Cls","PanelFilled_BaseColor","str");t.setProp("ShowHeader","Showheader",!0,"bool");t.setProp("Title","Title","Información General","str");t.setProp("Collapsible","Collapsible",!1,"bool");t.setProp("Collapsed","Collapsed",!1,"bool");t.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");t.setProp("IconPosition","Iconposition","Right","str");t.setProp("AutoScroll","Autoscroll",!1,"bool");t.setProp("Visible","Visible",!0,"bool");t.setC2ShowFunction(function(n){n.show()});this.setUserControl(t);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLEMAIN",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"TABLECONTENT",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"",grid:0};n[17]={id:17,fld:"TABLEATTRIBUTES",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,fld:"",grid:0};n[20]={id:20,fld:"",grid:0};n[21]={id:21,fld:"",grid:0};n[22]={id:22,lvl:0,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Creditoid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.Gridlevel_cuotaContainer],fld:"CREDITOID",gxz:"Z266CreditoId",gxold:"O266CreditoId",gxvar:"A266CreditoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A266CreditoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z266CreditoId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("CREDITOID",gx.O.A266CreditoId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A266CreditoId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("CREDITOID",".")},nac:gx.falseFn};this.declareDomainHdlr(22,function(){});n[23]={id:23,fld:"",grid:0};n[24]={id:24,fld:"",grid:0};n[25]={id:25,fld:"",grid:0};n[26]={id:26,lvl:0,type:"char",len:30,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Creditodescripcion,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CREDITODESCRIPCION",gxz:"Z2137CreditoDescripcion",gxold:"O2137CreditoDescripcion",gxvar:"A2137CreditoDescripcion",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2137CreditoDescripcion=n)},v2z:function(n){n!==undefined&&(gx.O.Z2137CreditoDescripcion=n)},v2c:function(){gx.fn.setControlValue("CREDITODESCRIPCION",gx.O.A2137CreditoDescripcion,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2137CreditoDescripcion=this.val())},val:function(){return gx.fn.getControlValue("CREDITODESCRIPCION")},nac:gx.falseFn};this.declareDomainHdlr(26,function(){});n[27]={id:27,fld:"",grid:0};n[28]={id:28,fld:"",grid:0};n[29]={id:29,fld:"",grid:0};n[30]={id:30,fld:"",grid:0};n[31]={id:31,lvl:0,type:"char",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Creditoentrega,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CREDITOENTREGA",gxz:"Z2610CreditoEntrega",gxold:"O2610CreditoEntrega",gxvar:"A2610CreditoEntrega",ucs:[],op:[31],ip:[31],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.A2610CreditoEntrega=n)},v2z:function(n){n!==undefined&&(gx.O.Z2610CreditoEntrega=n)},v2c:function(){gx.fn.setComboBoxValue("CREDITOENTREGA",gx.O.A2610CreditoEntrega);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2610CreditoEntrega=this.val())},val:function(){return gx.fn.getControlValue("CREDITOENTREGA")},nac:gx.falseFn};this.declareDomainHdlr(31,function(){});n[32]={id:32,fld:"",grid:0};n[33]={id:33,fld:"",grid:0};n[34]={id:34,fld:"",grid:0};n[35]={id:35,lvl:0,type:"char",len:3,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Creditoperunidad,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CREDITOPERUNIDAD",gxz:"Z2683CreditoPerUnidad",gxold:"O2683CreditoPerUnidad",gxvar:"A2683CreditoPerUnidad",ucs:[],op:[35],ip:[35],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.A2683CreditoPerUnidad=n)},v2z:function(n){n!==undefined&&(gx.O.Z2683CreditoPerUnidad=n)},v2c:function(){gx.fn.setComboBoxValue("CREDITOPERUNIDAD",gx.O.A2683CreditoPerUnidad);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2683CreditoPerUnidad=this.val())},val:function(){return gx.fn.getControlValue("CREDITOPERUNIDAD")},nac:gx.falseFn};this.declareDomainHdlr(35,function(){});n[36]={id:36,fld:"",grid:0};n[37]={id:37,fld:"",grid:0};n[38]={id:38,fld:"",grid:0};n[39]={id:39,fld:"",grid:0};n[40]={id:40,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CREDITOPERVALOR",gxz:"Z2684CreditoPerValor",gxold:"O2684CreditoPerValor",gxvar:"A2684CreditoPerValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2684CreditoPerValor=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z2684CreditoPerValor=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("CREDITOPERVALOR",gx.O.A2684CreditoPerValor,0)},c2v:function(){this.val()!==undefined&&(gx.O.A2684CreditoPerValor=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("CREDITOPERVALOR",".")},nac:gx.falseFn};n[41]={id:41,fld:"",grid:0};n[42]={id:42,fld:"",grid:0};n[43]={id:43,fld:"",grid:0};n[44]={id:44,lvl:0,type:"char",len:3,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Creditoestado,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CREDITOESTADO",gxz:"Z2141CreditoEstado",gxold:"O2141CreditoEstado",gxvar:"A2141CreditoEstado",ucs:[],op:[44],ip:[44],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.A2141CreditoEstado=n)},v2z:function(n){n!==undefined&&(gx.O.Z2141CreditoEstado=n)},v2c:function(){gx.fn.setComboBoxValue("CREDITOESTADO",gx.O.A2141CreditoEstado);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2141CreditoEstado=this.val())},val:function(){return gx.fn.getControlValue("CREDITOESTADO")},nac:gx.falseFn};this.declareDomainHdlr(44,function(){});n[45]={id:45,fld:"",grid:0};n[46]={id:46,fld:"",grid:0};n[47]={id:47,fld:"TABLELEAFLEVEL_CUOTA",grid:0};n[48]={id:48,fld:"",grid:0};n[49]={id:49,fld:"",grid:0};n[51]={id:51,lvl:193,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,isacc:1,grid:50,gxgrid:this.Gridlevel_cuotaContainer,fnc:this.Valid_Creditocuota,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CREDITOCUOTA",gxz:"Z267CreditoCuota",gxold:"O267CreditoCuota",gxvar:"A267CreditoCuota",ucs:[],op:[58],ip:[58],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A267CreditoCuota=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z267CreditoCuota=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("CREDITOCUOTA",n||gx.fn.currentGridRowImpl(50),gx.O.A267CreditoCuota,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A267CreditoCuota=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("CREDITOCUOTA",n||gx.fn.currentGridRowImpl(50),".")},nac:gx.falseFn};n[52]={id:52,lvl:193,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,isacc:1,grid:50,gxgrid:this.Gridlevel_cuotaContainer,fnc:this.Valid_Planid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PLANID",gxz:"Z119PlanId",gxold:"O119PlanId",gxvar:"A119PlanId",ucs:[],op:[51,60,54,53],ip:[51,60,54,53,26,52],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A119PlanId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z119PlanId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("PLANID",n||gx.fn.currentGridRowImpl(50),gx.O.A119PlanId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A119PlanId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("PLANID",n||gx.fn.currentGridRowImpl(50),".")},nac:gx.falseFn};n[53]={id:53,lvl:193,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:1,grid:50,gxgrid:this.Gridlevel_cuotaContainer,fnc:this.Valid_Plannombre,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PLANNOMBRE",gxz:"Z1040PlanNombre",gxold:"O1040PlanNombre",gxvar:"A1040PlanNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A1040PlanNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z1040PlanNombre=n)},v2c:function(n){gx.fn.setGridControlValue("PLANNOMBRE",n||gx.fn.currentGridRowImpl(50),gx.O.A1040PlanNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1040PlanNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("PLANNOMBRE",n||gx.fn.currentGridRowImpl(50))},nac:gx.falseFn};n[54]={id:54,lvl:193,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:1,grid:50,gxgrid:this.Gridlevel_cuotaContainer,fnc:this.Valid_Plancuota,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PLANCUOTA",gxz:"Z2114PlanCuota",gxold:"O2114PlanCuota",gxvar:"A2114PlanCuota",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A2114PlanCuota=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z2114PlanCuota=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("PLANCUOTA",n||gx.fn.currentGridRowImpl(50),gx.O.A2114PlanCuota,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2114PlanCuota=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("PLANCUOTA",n||gx.fn.currentGridRowImpl(50),".")},nac:gx.falseFn};n[55]={id:55,lvl:193,type:"date",len:10,dec:0,sign:!1,ro:0,isacc:1,grid:50,gxgrid:this.Gridlevel_cuotaContainer,fnc:this.Valid_Creditocuotadesde,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CREDITOCUOTADESDE",gxz:"Z2139CreditoCuotaDesde",gxold:"O2139CreditoCuotaDesde",gxvar:"A2139CreditoCuotaDesde",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[55],ip:[55],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2139CreditoCuotaDesde=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z2139CreditoCuotaDesde=gx.fn.toDatetimeValue(n))},v2c:function(n){gx.fn.setGridControlValue("CREDITOCUOTADESDE",n||gx.fn.currentGridRowImpl(50),gx.O.A2139CreditoCuotaDesde,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2139CreditoCuotaDesde=gx.fn.toDatetimeValue(this.val(n)))},val:function(n){return gx.fn.getGridDateTimeValue("CREDITOCUOTADESDE",n||gx.fn.currentGridRowImpl(50))},nac:gx.falseFn};n[56]={id:56,lvl:193,type:"date",len:10,dec:0,sign:!1,ro:0,isacc:1,grid:50,gxgrid:this.Gridlevel_cuotaContainer,fnc:this.Valid_Creditocuotahasta,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CREDITOCUOTAHASTA",gxz:"Z2140CreditoCuotaHasta",gxold:"O2140CreditoCuotaHasta",gxvar:"A2140CreditoCuotaHasta",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[56],ip:[56],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2140CreditoCuotaHasta=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z2140CreditoCuotaHasta=gx.fn.toDatetimeValue(n))},v2c:function(n){gx.fn.setGridControlValue("CREDITOCUOTAHASTA",n||gx.fn.currentGridRowImpl(50),gx.O.A2140CreditoCuotaHasta,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2140CreditoCuotaHasta=gx.fn.toDatetimeValue(this.val(n)))},val:function(n){return gx.fn.getGridDateTimeValue("CREDITOCUOTAHASTA",n||gx.fn.currentGridRowImpl(50))},nac:gx.falseFn};n[57]={id:57,lvl:193,type:"decimal",len:6,dec:2,sign:!1,pic:"ZZ9.99",ro:0,isacc:1,grid:50,gxgrid:this.Gridlevel_cuotaContainer,fnc:this.Valid_Creditocuotacosto,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CREDITOCUOTACOSTO",gxz:"Z2138CreditoCuotaCosto",gxold:"O2138CreditoCuotaCosto",gxvar:"A2138CreditoCuotaCosto",ucs:[],op:[59],ip:[59,56,55,57,53,26],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2138CreditoCuotaCosto=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2138CreditoCuotaCosto=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("CREDITOCUOTACOSTO",n||gx.fn.currentGridRowImpl(50),gx.O.A2138CreditoCuotaCosto,2,",")},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2138CreditoCuotaCosto=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("CREDITOCUOTACOSTO",n||gx.fn.currentGridRowImpl(50),".",",")},nac:gx.falseFn};n[58]={id:58,lvl:193,type:"char",len:1,dec:0,sign:!1,ro:0,isacc:1,grid:50,gxgrid:this.Gridlevel_cuotaContainer,fnc:this.Valid_Creditocuotagenerafecha,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CREDITOCUOTAGENERAFECHA",gxz:"Z2690CreditoCuotaGeneraFecha",gxold:"O2690CreditoCuotaGeneraFecha",gxvar:"A2690CreditoCuotaGeneraFecha",ucs:[],op:[58],ip:[58],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2690CreditoCuotaGeneraFecha=n)},v2z:function(n){n!==undefined&&(gx.O.Z2690CreditoCuotaGeneraFecha=n)},v2c:function(n){gx.fn.setGridComboBoxValue("CREDITOCUOTAGENERAFECHA",n||gx.fn.currentGridRowImpl(50),gx.O.A2690CreditoCuotaGeneraFecha);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2690CreditoCuotaGeneraFecha=this.val(n))},val:function(n){return gx.fn.getGridControlValue("CREDITOCUOTAGENERAFECHA",n||gx.fn.currentGridRowImpl(50))},nac:gx.falseFn};n[59]={id:59,lvl:193,type:"char",len:100,dec:0,sign:!1,pic:"@!",ro:1,isacc:1,grid:50,gxgrid:this.Gridlevel_cuotaContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CREDITOCUOTANOMBRE",gxz:"Z2136CreditoCuotaNombre",gxold:"O2136CreditoCuotaNombre",gxvar:"A2136CreditoCuotaNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A2136CreditoCuotaNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z2136CreditoCuotaNombre=n)},v2c:function(n){gx.fn.setGridControlValue("CREDITOCUOTANOMBRE",n||gx.fn.currentGridRowImpl(50),gx.O.A2136CreditoCuotaNombre,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2136CreditoCuotaNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("CREDITOCUOTANOMBRE",n||gx.fn.currentGridRowImpl(50))},nac:gx.falseFn};n[60]={id:60,lvl:193,type:"char",len:100,dec:0,sign:!1,pic:"@!",ro:1,isacc:1,grid:50,gxgrid:this.Gridlevel_cuotaContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CREDITOCUOTANOMBREABREV",gxz:"Z2324CreditoCuotaNombreAbrev",gxold:"O2324CreditoCuotaNombreAbrev",gxvar:"A2324CreditoCuotaNombreAbrev",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A2324CreditoCuotaNombreAbrev=n)},v2z:function(n){n!==undefined&&(gx.O.Z2324CreditoCuotaNombreAbrev=n)},v2c:function(n){gx.fn.setGridControlValue("CREDITOCUOTANOMBREABREV",n||gx.fn.currentGridRowImpl(50),gx.O.A2324CreditoCuotaNombreAbrev,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2324CreditoCuotaNombreAbrev=this.val(n))},val:function(n){return gx.fn.getGridControlValue("CREDITOCUOTANOMBREABREV",n||gx.fn.currentGridRowImpl(50))},nac:gx.falseFn};n[61]={id:61,fld:"",grid:0};n[62]={id:62,fld:"",grid:0};n[63]={id:63,fld:"",grid:0};n[64]={id:64,fld:"",grid:0};n[65]={id:65,fld:"BTNTRN_ENTER",grid:0,evt:"e134i192_client",std:"ENTER"};n[66]={id:66,fld:"",grid:0};n[67]={id:67,fld:"BTNTRN_CANCEL",grid:0,evt:"e144i192_client"};n[68]={id:68,fld:"",grid:0};n[69]={id:69,fld:"BTNTRN_DELETE",grid:0,evt:"e154i192_client",std:"DELETE"};n[70]={id:70,fld:"PROMPT_119",grid:193};this.A266CreditoId=0;this.Z266CreditoId=0;this.O266CreditoId=0;this.A2137CreditoDescripcion="";this.Z2137CreditoDescripcion="";this.O2137CreditoDescripcion="";this.A2610CreditoEntrega="";this.Z2610CreditoEntrega="";this.O2610CreditoEntrega="";this.A2683CreditoPerUnidad="";this.Z2683CreditoPerUnidad="";this.O2683CreditoPerUnidad="";this.A2684CreditoPerValor=0;this.Z2684CreditoPerValor=0;this.O2684CreditoPerValor=0;this.A2141CreditoEstado="";this.Z2141CreditoEstado="";this.O2141CreditoEstado="";this.Z267CreditoCuota=0;this.O267CreditoCuota=0;this.Z119PlanId=0;this.O119PlanId=0;this.Z1040PlanNombre="";this.O1040PlanNombre="";this.Z2114PlanCuota=0;this.O2114PlanCuota=0;this.Z2139CreditoCuotaDesde=gx.date.nullDate();this.O2139CreditoCuotaDesde=gx.date.nullDate();this.Z2140CreditoCuotaHasta=gx.date.nullDate();this.O2140CreditoCuotaHasta=gx.date.nullDate();this.Z2138CreditoCuotaCosto=0;this.O2138CreditoCuotaCosto=0;this.Z2690CreditoCuotaGeneraFecha="";this.O2690CreditoCuotaGeneraFecha="";this.Z2136CreditoCuotaNombre="";this.O2136CreditoCuotaNombre="";this.Z2324CreditoCuotaNombreAbrev="";this.O2324CreditoCuotaNombreAbrev="";this.A267CreditoCuota=0;this.A2690CreditoCuotaGeneraFecha="";this.A2136CreditoCuotaNombre="";this.A2324CreditoCuotaNombreAbrev="";this.A119PlanId=0;this.A1040PlanNombre="";this.A2114PlanCuota=0;this.A2139CreditoCuotaDesde=gx.date.nullDate();this.A2140CreditoCuotaHasta=gx.date.nullDate();this.A2138CreditoCuotaCosto=0;this.AV8WWPContext={User:0,UsuNombre:"",System:"",Puesto:0,PuestoNombre:"",Rol:0,Ingreso:"",Opcion:"",EntidadId:0,EntidadNombre:"",SucursalId:0,SucursalNombre:"",ProvinciaId:0,ProvinciaNombre:"",UsuPwdMar:"",EmpleadoId:0};this.AV9TrnContext={CallerObject:"",CallerOnDelete:!1,CallerURL:"",TransactionName:"",Attributes:[]};this.AV7CreditoId=0;this.AV10WebSession={};this.A266CreditoId=0;this.AV18Pgmdesc="";this.Gx_BScreen=0;this.A2137CreditoDescripcion="";this.A2610CreditoEntrega="";this.A2683CreditoPerUnidad="";this.A2684CreditoPerValor=0;this.A2141CreditoEstado="";this.Gx_mode="";this.Events={e124i2_client:["AFTER TRN",!0],e134i192_client:["ENTER",!0],e144i192_client:["CANCEL",!0]};this.EvtParms.ENTER=[[{postForm:!0},{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV7CreditoId",fld:"vCREDITOID",pic:"ZZZZZZZ9",hsh:!0}],[]];this.EvtParms.REFRESH=[[{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV9TrnContext",fld:"vTRNCONTEXT",pic:"",hsh:!0},{av:"AV7CreditoId",fld:"vCREDITOID",pic:"ZZZZZZZ9",hsh:!0}],[]];this.EvtParms.START=[[],[{av:"AV8WWPContext",fld:"vWWPCONTEXT",pic:""},{av:"AV9TrnContext",fld:"vTRNCONTEXT",pic:"",hsh:!0}]];this.EvtParms["AFTER TRN"]=[[{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV9TrnContext",fld:"vTRNCONTEXT",pic:"",hsh:!0}],[]];this.EvtParms.VALID_CREDITOID=[[],[]];this.EvtParms.VALID_CREDITODESCRIPCION=[[],[]];this.EvtParms.VALID_CREDITOENTREGA=[[{ctrl:"CREDITOENTREGA"},{av:"A2610CreditoEntrega",fld:"CREDITOENTREGA",pic:""}],[{ctrl:"CREDITOENTREGA"},{av:"A2610CreditoEntrega",fld:"CREDITOENTREGA",pic:""}]];this.EvtParms.VALID_CREDITOPERUNIDAD=[[{ctrl:"CREDITOPERUNIDAD"},{av:"A2683CreditoPerUnidad",fld:"CREDITOPERUNIDAD",pic:""}],[{ctrl:"CREDITOPERUNIDAD"},{av:"A2683CreditoPerUnidad",fld:"CREDITOPERUNIDAD",pic:""}]];this.EvtParms.VALID_CREDITOESTADO=[[{ctrl:"CREDITOESTADO"},{av:"A2141CreditoEstado",fld:"CREDITOESTADO",pic:"@!"}],[{ctrl:"CREDITOESTADO"},{av:"A2141CreditoEstado",fld:"CREDITOESTADO",pic:"@!"}]];this.EvtParms.VALID_CREDITOCUOTA=[[{ctrl:"CREDITOCUOTAGENERAFECHA"},{av:"A2690CreditoCuotaGeneraFecha",fld:"CREDITOCUOTAGENERAFECHA",pic:""}],[{ctrl:"CREDITOCUOTAGENERAFECHA"},{av:"A2690CreditoCuotaGeneraFecha",fld:"CREDITOCUOTAGENERAFECHA",pic:""}]];this.EvtParms.VALID_PLANID=[[{av:"A119PlanId",fld:"PLANID",pic:"ZZZ9"},{av:"A2137CreditoDescripcion",fld:"CREDITODESCRIPCION",pic:"@!"},{av:"A1040PlanNombre",fld:"PLANNOMBRE",pic:"@!"},{av:"A2114PlanCuota",fld:"PLANCUOTA",pic:"ZZZ9"},{av:"A2324CreditoCuotaNombreAbrev",fld:"CREDITOCUOTANOMBREABREV",pic:"@!"},{av:"A267CreditoCuota",fld:"CREDITOCUOTA",pic:"ZZZ9"}],[{av:"A1040PlanNombre",fld:"PLANNOMBRE",pic:"@!"},{av:"A2114PlanCuota",fld:"PLANCUOTA",pic:"ZZZ9"},{av:"A2324CreditoCuotaNombreAbrev",fld:"CREDITOCUOTANOMBREABREV",pic:"@!"},{av:"A267CreditoCuota",fld:"CREDITOCUOTA",pic:"ZZZ9"}]];this.EvtParms.VALID_PLANNOMBRE=[[],[]];this.EvtParms.VALID_PLANCUOTA=[[],[]];this.EvtParms.VALID_CREDITOCUOTADESDE=[[{av:"A2139CreditoCuotaDesde",fld:"CREDITOCUOTADESDE",pic:""}],[{av:"A2139CreditoCuotaDesde",fld:"CREDITOCUOTADESDE",pic:""}]];this.EvtParms.VALID_CREDITOCUOTAHASTA=[[{av:"A2140CreditoCuotaHasta",fld:"CREDITOCUOTAHASTA",pic:""}],[{av:"A2140CreditoCuotaHasta",fld:"CREDITOCUOTAHASTA",pic:""}]];this.EvtParms.VALID_CREDITOCUOTACOSTO=[[{av:"A2136CreditoCuotaNombre",fld:"CREDITOCUOTANOMBRE",pic:"@!"},{av:"A2140CreditoCuotaHasta",fld:"CREDITOCUOTAHASTA",pic:""},{av:"A2139CreditoCuotaDesde",fld:"CREDITOCUOTADESDE",pic:""},{av:"A2138CreditoCuotaCosto",fld:"CREDITOCUOTACOSTO",pic:"ZZ9.99"},{av:"A1040PlanNombre",fld:"PLANNOMBRE",pic:"@!"},{av:"A2137CreditoDescripcion",fld:"CREDITODESCRIPCION",pic:"@!"}],[{av:"A2136CreditoCuotaNombre",fld:"CREDITOCUOTANOMBRE",pic:"@!"}]];this.EvtParms.VALID_CREDITOCUOTAGENERAFECHA=[[{ctrl:"CREDITOCUOTAGENERAFECHA"},{av:"A2690CreditoCuotaGeneraFecha",fld:"CREDITOCUOTAGENERAFECHA",pic:""}],[{ctrl:"CREDITOCUOTAGENERAFECHA"},{av:"A2690CreditoCuotaGeneraFecha",fld:"CREDITOCUOTAGENERAFECHA",pic:""}]];this.setPrompt("PROMPT_119",[52]);this.EnterCtrl=["BTNTRN_ENTER"];this.setVCMap("AV7CreditoId","vCREDITOID",0,"int",8,0);this.setVCMap("AV18Pgmdesc","vPGMDESC",0,"char",30,0);this.setVCMap("Gx_BScreen","vGXBSCREEN",0,"int",1,0);this.setVCMap("Gx_mode","vMODE",0,"char",3,0);this.setVCMap("AV9TrnContext","vTRNCONTEXT",0,"WWPBaseObjectsWWPTransactionContext",0,0);i.addPostingVar({rfrVar:"Gx_BScreen"});i.addPostingVar({rfrVar:"Gx_mode"});this.Initialize()});gx.wi(function(){gx.createParentObj(credito)})