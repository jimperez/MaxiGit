/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:46:4.21
*/
gx.evt.autoSkip=!1;gx.define("proveedoractividad",!1,function(){var n,r,t,i;this.ServerClass="proveedoractividad";this.PackageName="GeneXus.Programs";this.setObjectType("trn");this.anyGridBaseTable=!0;this.hasEnterEvent=!0;this.skipOnEnter=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV7ProveedorId=gx.fn.getIntegerValue("vPROVEEDORID",".");this.AV8ActividadId=gx.fn.getControlValue("vACTIVIDADID");this.Gx_mode=gx.fn.getControlValue("vMODE");this.AV10TrnContext=gx.fn.getControlValue("vTRNCONTEXT")};this.Valid_Proveedorid=function(){return this.validSrvEvt("Valid_Proveedorid",0).then(function(n){return n}.closure(this))};this.Valid_Actividadid=function(){return this.validSrvEvt("Valid_Actividadid",0).then(function(n){return n}.closure(this))};this.Valid_Proveedoractplancuentaoriid=function(){var n=gx.fn.currentGridRowImpl(44);return this.validSrvEvt("Valid_Proveedoractplancuentaoriid",44).then(function(n){try{this.sMode231=this.Gx_mode;this.Gx_mode=gx.fn.getGridRowMode(231,44);this.standaloneModal5F231();this.standaloneNotModal5F231()}finally{this.Gx_mode=this.sMode231}return n}.closure(this))};this.Valid_Proveedoractplancuentadestid=function(){var t=gx.fn.currentGridRowImpl(44),n;return gx.fn.currentGridRowImpl(44)===0?!0:(n=gx.util.balloon.getNew("PROVEEDORACTPLANCUENTADESTID",gx.fn.currentGridRowImpl(44)),gx.fn.gridDuplicateKey(47))?(n.setError(gx.text.format(gx.getMessage("GXM_1004"),"Plan Cuenta","","","","","","","","")),this.AnyError=gx.num.trunc(1,0),n.show()):this.validSrvEvt("Valid_Proveedoractplancuentadestid",44).then(function(n){try{this.sMode231=this.Gx_mode;this.Gx_mode=gx.fn.getGridRowMode(231,44)}finally{this.Gx_mode=this.sMode231}return n}.closure(this))};this.standaloneModal5F231=function(){try{this.Gx_mode!="INS"?gx.fn.setCtrlProperty("PROVEEDORACTPLANCUENTAORIID","Enabled",0):gx.fn.setCtrlProperty("PROVEEDORACTPLANCUENTAORIID","Enabled",1)}catch(n){}try{this.Gx_mode!="INS"?gx.fn.setCtrlProperty("PROVEEDORACTPLANCUENTADESTID","Enabled",0):gx.fn.setCtrlProperty("PROVEEDORACTPLANCUENTADESTID","Enabled",1)}catch(n){}};this.standaloneNotModal5F231=function(){try{gx.fn.setCtrlProperty("PROVEEDORACTIVIDADPLANCUENTA094","Enabled",0)}catch(n){}try{gx.fn.setCtrlProperty("PROVEEDORACTIVIDADPLANCUENTA095","Enabled",0)}catch(n){}};this.e125f2_client=function(){return this.executeServerEvent("AFTER TRN",!0,null,!1,!1)};this.e135f46_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e145f46_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,12,13,14,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,38,39,40,41,42,43,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67];this.GXLastCtrlId=67;this.Gridlevel_plancuentaContainer=new gx.grid.grid(this,231,"PlanCuenta",44,"Gridlevel_plancuenta","Gridlevel_plancuenta","Gridlevel_plancuentaContainer",this.CmpContext,this.IsMasterPage,"proveedoractividad",[311,312],!1,1,!1,!0,2,!1,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);r=this.Gridlevel_plancuentaContainer;r.addSingleLineEdit(311,45,"PROVEEDORACTPLANCUENTAORIID","Ide. Debe","","ProveedorActPlanCuentaOriId","int",0,"px",10,10,"right",null,[],311,"ProveedorActPlanCuentaOriId",!0,0,!1,!1,"AttributeRealWidth",1,"TrnColumn");r.addBitmap("prompt_311","PROMPT_311",66,0,"",0,"",null,"","","gx-prompt Image","");r.addSingleLineEdit(2569,46,"PROVEEDORACTPLANCUENTAORINOMBRE","Debe","","ProveedorActPlanCuentaOriNombre","svchar",0,"px",64,64,"left",null,[],2569,"ProveedorActPlanCuentaOriNombre",!0,0,!1,!1,"AttributeRealWidth",1,"TrnColumn");r.addSingleLineEdit(312,47,"PROVEEDORACTPLANCUENTADESTID","Ide. Haber","","ProveedorActPlanCuentaDestId","int",0,"px",10,10,"right",null,[],312,"ProveedorActPlanCuentaDestId",!0,0,!1,!1,"AttributeRealWidth",1,"TrnColumn");r.addBitmap("prompt_312","PROMPT_312",67,0,"",0,"",null,"","","gx-prompt Image","");r.addSingleLineEdit(2570,48,"PROVEEDORACTPLANCUENTADESTNOMBRE","Haber","","ProveedorActPlanCuentaDestNombre","svchar",0,"px",64,64,"left",null,[],2570,"ProveedorActPlanCuentaDestNombre",!0,0,!1,!1,"AttributeRealWidth",1,"TrnColumn");r.addSingleLineEdit(2658,49,"PROVEEDORACTIVIDADPLANCUENTA095","Plan Cuenta095","","ProveedorActividadPlanCuenta095","dtime",0,"px",14,14,"right",null,[],2658,"ProveedorActividadPlanCuenta095",!1,5,!1,!1,"AttributeRealWidthDateTime",1,"TrnColumn");r.addSingleLineEdit(2657,50,"PROVEEDORACTIVIDADPLANCUENTA094","Plan Cuenta094","","ProveedorActividadPlanCuenta094","char",0,"px",15,15,"left",null,[],2657,"ProveedorActividadPlanCuenta094",!1,0,!1,!1,"AttributeRealWidth",1,"TrnColumn");this.Gridlevel_plancuentaContainer.emptyText="";this.setGrid(r);this.DVPANEL_TABLEATTRIBUTESContainer=gx.uc.getNew(this,15,0,"BootstrapPanel","DVPANEL_TABLEATTRIBUTESContainer","Dvpanel_tableattributes","DVPANEL_TABLEATTRIBUTES");t=this.DVPANEL_TABLEATTRIBUTESContainer;t.setProp("Class","Class","","char");t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("Width","Width","100%","str");t.setProp("Height","Height","100","str");t.setProp("AutoWidth","Autowidth",!1,"bool");t.setProp("AutoHeight","Autoheight",!0,"bool");t.setProp("Cls","Cls","PanelFilled_BaseColor","str");t.setProp("ShowHeader","Showheader",!0,"bool");t.setProp("Title","Title","Información General","str");t.setProp("Collapsible","Collapsible",!1,"bool");t.setProp("Collapsed","Collapsed",!1,"bool");t.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");t.setProp("IconPosition","Iconposition","Right","str");t.setProp("AutoScroll","Autoscroll",!1,"bool");t.setProp("Visible","Visible",!0,"bool");t.setC2ShowFunction(function(n){n.show()});this.setUserControl(t);this.DVPANEL_PARCONTABLEContainer=gx.uc.getNew(this,36,22,"BootstrapPanel","DVPANEL_PARCONTABLEContainer","Dvpanel_parcontable","DVPANEL_PARCONTABLE");i=this.DVPANEL_PARCONTABLEContainer;i.setProp("Class","Class","","char");i.setProp("Enabled","Enabled",!0,"boolean");i.setProp("Width","Width","100%","str");i.setProp("Height","Height","100","str");i.setProp("AutoWidth","Autowidth",!1,"bool");i.setProp("AutoHeight","Autoheight",!0,"bool");i.setProp("Cls","Cls","PanelFilled_BaseColor","str");i.setProp("ShowHeader","Showheader",!0,"bool");i.setProp("Title","Title","Pares Contables","str");i.setProp("Collapsible","Collapsible",!0,"bool");i.setProp("Collapsed","Collapsed",!1,"bool");i.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");i.setProp("IconPosition","Iconposition","Right","str");i.setProp("AutoScroll","Autoscroll",!1,"bool");i.setProp("Visible","Visible",!0,"bool");i.setC2ShowFunction(function(n){n.show()});this.setUserControl(i);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLEMAIN",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"TABLECONTENT",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"",grid:0};n[17]={id:17,fld:"TABLEATTRIBUTES",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,fld:"",grid:0};n[20]={id:20,fld:"",grid:0};n[21]={id:21,fld:"",grid:0};n[22]={id:22,lvl:0,type:"int",len:15,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Proveedorid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.Gridlevel_plancuentaContainer],fld:"PROVEEDORID",gxz:"Z28ProveedorId",gxold:"O28ProveedorId",gxvar:"A28ProveedorId",ucs:[],op:[63,25],ip:[63,25,22],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A28ProveedorId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z28ProveedorId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("PROVEEDORID",gx.O.A28ProveedorId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A28ProveedorId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("PROVEEDORID",".")},nac:function(){return!(0==this.AV7ProveedorId)}};n[23]={id:23,fld:"",grid:0};n[24]={id:24,fld:"",grid:0};n[25]={id:25,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PROVEEDORNOMBRE",gxz:"Z354ProveedorNombre",gxold:"O354ProveedorNombre",gxvar:"A354ProveedorNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A354ProveedorNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z354ProveedorNombre=n)},v2c:function(){gx.fn.setControlValue("PROVEEDORNOMBRE",gx.O.A354ProveedorNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A354ProveedorNombre=this.val())},val:function(){return gx.fn.getControlValue("PROVEEDORNOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(25,function(){});n[26]={id:26,fld:"",grid:0};n[27]={id:27,fld:"",grid:0};n[28]={id:28,fld:"",grid:0};n[29]={id:29,fld:"",grid:0};n[30]={id:30,lvl:0,type:"char",len:6,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Actividadid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.Gridlevel_plancuentaContainer],fld:"ACTIVIDADID",gxz:"Z104ActividadId",gxold:"O104ActividadId",gxvar:"A104ActividadId",ucs:[],op:[33],ip:[33,30],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A104ActividadId=n)},v2z:function(n){n!==undefined&&(gx.O.Z104ActividadId=n)},v2c:function(){gx.fn.setControlValue("ACTIVIDADID",gx.O.A104ActividadId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A104ActividadId=this.val())},val:function(){return gx.fn.getControlValue("ACTIVIDADID")},nac:function(){return!(""==this.AV8ActividadId)}};n[31]={id:31,fld:"",grid:0};n[32]={id:32,fld:"",grid:0};n[33]={id:33,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ACTIVIDADNOMBRE",gxz:"Z2562ActividadNombre",gxold:"O2562ActividadNombre",gxvar:"A2562ActividadNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2562ActividadNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z2562ActividadNombre=n)},v2c:function(){gx.fn.setControlValue("ACTIVIDADNOMBRE",gx.O.A2562ActividadNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2562ActividadNombre=this.val())},val:function(){return gx.fn.getControlValue("ACTIVIDADNOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(33,function(){});n[34]={id:34,fld:"",grid:0};n[35]={id:35,fld:"",grid:0};n[38]={id:38,fld:"PARCONTABLE",grid:0};n[39]={id:39,fld:"",grid:0};n[40]={id:40,fld:"",grid:0};n[41]={id:41,fld:"TABLELEAFLEVEL_PLANCUENTA",grid:0};n[42]={id:42,fld:"",grid:0};n[43]={id:43,fld:"",grid:0};n[45]={id:45,lvl:231,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:0,isacc:1,grid:44,gxgrid:this.Gridlevel_plancuentaContainer,fnc:this.Valid_Proveedoractplancuentaoriid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PROVEEDORACTPLANCUENTAORIID",gxz:"Z311ProveedorActPlanCuentaOriId",gxold:"O311ProveedorActPlanCuentaOriId",gxvar:"A311ProveedorActPlanCuentaOriId",ucs:[],op:[46],ip:[46,45],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A311ProveedorActPlanCuentaOriId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z311ProveedorActPlanCuentaOriId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("PROVEEDORACTPLANCUENTAORIID",n||gx.fn.currentGridRowImpl(44),gx.O.A311ProveedorActPlanCuentaOriId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A311ProveedorActPlanCuentaOriId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("PROVEEDORACTPLANCUENTAORIID",n||gx.fn.currentGridRowImpl(44),".")},nac:gx.falseFn};n[46]={id:46,lvl:231,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:1,grid:44,gxgrid:this.Gridlevel_plancuentaContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PROVEEDORACTPLANCUENTAORINOMBRE",gxz:"Z2569ProveedorActPlanCuentaOriNombre",gxold:"O2569ProveedorActPlanCuentaOriNombre",gxvar:"A2569ProveedorActPlanCuentaOriNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A2569ProveedorActPlanCuentaOriNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z2569ProveedorActPlanCuentaOriNombre=n)},v2c:function(n){gx.fn.setGridControlValue("PROVEEDORACTPLANCUENTAORINOMBRE",n||gx.fn.currentGridRowImpl(44),gx.O.A2569ProveedorActPlanCuentaOriNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2569ProveedorActPlanCuentaOriNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("PROVEEDORACTPLANCUENTAORINOMBRE",n||gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};n[47]={id:47,lvl:231,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:0,isacc:1,grid:44,gxgrid:this.Gridlevel_plancuentaContainer,fnc:this.Valid_Proveedoractplancuentadestid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PROVEEDORACTPLANCUENTADESTID",gxz:"Z312ProveedorActPlanCuentaDestId",gxold:"O312ProveedorActPlanCuentaDestId",gxvar:"A312ProveedorActPlanCuentaDestId",ucs:[],op:[48],ip:[48,47],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A312ProveedorActPlanCuentaDestId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z312ProveedorActPlanCuentaDestId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("PROVEEDORACTPLANCUENTADESTID",n||gx.fn.currentGridRowImpl(44),gx.O.A312ProveedorActPlanCuentaDestId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A312ProveedorActPlanCuentaDestId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("PROVEEDORACTPLANCUENTADESTID",n||gx.fn.currentGridRowImpl(44),".")},nac:gx.falseFn};n[48]={id:48,lvl:231,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:1,grid:44,gxgrid:this.Gridlevel_plancuentaContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PROVEEDORACTPLANCUENTADESTNOMBRE",gxz:"Z2570ProveedorActPlanCuentaDestNombre",gxold:"O2570ProveedorActPlanCuentaDestNombre",gxvar:"A2570ProveedorActPlanCuentaDestNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A2570ProveedorActPlanCuentaDestNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z2570ProveedorActPlanCuentaDestNombre=n)},v2c:function(n){gx.fn.setGridControlValue("PROVEEDORACTPLANCUENTADESTNOMBRE",n||gx.fn.currentGridRowImpl(44),gx.O.A2570ProveedorActPlanCuentaDestNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2570ProveedorActPlanCuentaDestNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("PROVEEDORACTPLANCUENTADESTNOMBRE",n||gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};n[49]={id:49,lvl:231,type:"dtime",len:8,dec:5,sign:!1,ro:1,isacc:1,grid:44,gxgrid:this.Gridlevel_plancuentaContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PROVEEDORACTIVIDADPLANCUENTA095",gxz:"Z2658ProveedorActividadPlanCuenta095",gxold:"O2658ProveedorActividadPlanCuenta095",gxvar:"A2658ProveedorActividadPlanCuenta095",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2658ProveedorActividadPlanCuenta095=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z2658ProveedorActividadPlanCuenta095=gx.fn.toDatetimeValue(n))},v2c:function(n){gx.fn.setGridControlValue("PROVEEDORACTIVIDADPLANCUENTA095",n||gx.fn.currentGridRowImpl(44),gx.O.A2658ProveedorActividadPlanCuenta095,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2658ProveedorActividadPlanCuenta095=gx.fn.toDatetimeValue(this.val(n)))},val:function(n){return gx.fn.getGridDateTimeValue("PROVEEDORACTIVIDADPLANCUENTA095",n||gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};n[50]={id:50,lvl:231,type:"char",len:15,dec:0,sign:!1,ro:1,isacc:1,grid:44,gxgrid:this.Gridlevel_plancuentaContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PROVEEDORACTIVIDADPLANCUENTA094",gxz:"Z2657ProveedorActividadPlanCuenta094",gxold:"O2657ProveedorActividadPlanCuenta094",gxvar:"A2657ProveedorActividadPlanCuenta094",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A2657ProveedorActividadPlanCuenta094=n)},v2z:function(n){n!==undefined&&(gx.O.Z2657ProveedorActividadPlanCuenta094=n)},v2c:function(n){gx.fn.setGridControlValue("PROVEEDORACTIVIDADPLANCUENTA094",n||gx.fn.currentGridRowImpl(44),gx.O.A2657ProveedorActividadPlanCuenta094,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2657ProveedorActividadPlanCuenta094=this.val(n))},val:function(n){return gx.fn.getGridControlValue("PROVEEDORACTIVIDADPLANCUENTA094",n||gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};n[51]={id:51,fld:"",grid:0};n[52]={id:52,fld:"",grid:0};n[53]={id:53,fld:"",grid:0};n[54]={id:54,fld:"",grid:0};n[55]={id:55,fld:"BTNTRN_ENTER",grid:0,evt:"e135f46_client",std:"ENTER"};n[56]={id:56,fld:"",grid:0};n[57]={id:57,fld:"BTNTRN_CANCEL",grid:0,evt:"e145f46_client"};n[58]={id:58,fld:"",grid:0};n[59]={id:59,fld:"BTNTRN_DELETE",grid:0,evt:"e155f46_client",std:"DELETE"};n[60]={id:60,fld:"",grid:0};n[61]={id:61,fld:"",grid:0};n[62]={id:62,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};n[63]={id:63,lvl:0,type:"char",len:1,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PROVEEDORPERSONATIPO",gxz:"Z1544ProveedorPersonaTipo",gxold:"O1544ProveedorPersonaTipo",gxvar:"A1544ProveedorPersonaTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.A1544ProveedorPersonaTipo=n)},v2z:function(n){n!==undefined&&(gx.O.Z1544ProveedorPersonaTipo=n)},v2c:function(){gx.fn.setComboBoxValue("PROVEEDORPERSONATIPO",gx.O.A1544ProveedorPersonaTipo);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1544ProveedorPersonaTipo=this.val())},val:function(){return gx.fn.getControlValue("PROVEEDORPERSONATIPO")},nac:gx.falseFn};this.declareDomainHdlr(63,function(){});n[64]={id:64,fld:"PROMPT_28",grid:46};n[65]={id:65,fld:"PROMPT_104",grid:46};n[66]={id:66,fld:"PROMPT_311",grid:231};n[67]={id:67,fld:"PROMPT_312",grid:231};this.A28ProveedorId=0;this.Z28ProveedorId=0;this.O28ProveedorId=0;this.A354ProveedorNombre="";this.Z354ProveedorNombre="";this.O354ProveedorNombre="";this.A104ActividadId="";this.Z104ActividadId="";this.O104ActividadId="";this.A2562ActividadNombre="";this.Z2562ActividadNombre="";this.O2562ActividadNombre="";this.Z311ProveedorActPlanCuentaOriId=0;this.O311ProveedorActPlanCuentaOriId=0;this.Z2569ProveedorActPlanCuentaOriNombre="";this.O2569ProveedorActPlanCuentaOriNombre="";this.Z312ProveedorActPlanCuentaDestId=0;this.O312ProveedorActPlanCuentaDestId=0;this.Z2570ProveedorActPlanCuentaDestNombre="";this.O2570ProveedorActPlanCuentaDestNombre="";this.Z2658ProveedorActividadPlanCuenta095=gx.date.nullDate();this.O2658ProveedorActividadPlanCuenta095=gx.date.nullDate();this.Z2657ProveedorActividadPlanCuenta094="";this.O2657ProveedorActividadPlanCuenta094="";this.A1544ProveedorPersonaTipo="";this.Z1544ProveedorPersonaTipo="";this.O1544ProveedorPersonaTipo="";this.A311ProveedorActPlanCuentaOriId=0;this.A312ProveedorActPlanCuentaDestId=0;this.A2658ProveedorActividadPlanCuenta095=gx.date.nullDate();this.A2657ProveedorActividadPlanCuenta094="";this.A2569ProveedorActPlanCuentaOriNombre="";this.A2570ProveedorActPlanCuentaDestNombre="";this.AV9WWPContext={User:0,UsuNombre:"",System:"",Puesto:0,PuestoNombre:"",Rol:0,Ingreso:"",Opcion:"",EntidadId:0,EntidadNombre:"",SucursalId:0,SucursalNombre:"",ProvinciaId:0,ProvinciaNombre:"",UsuPwdMar:"",EmpleadoId:0};this.AV10TrnContext={CallerObject:"",CallerOnDelete:!1,CallerURL:"",TransactionName:"",Attributes:[]};this.AV7ProveedorId=0;this.AV8ActividadId="";this.AV11WebSession={};this.A28ProveedorId=0;this.A104ActividadId="";this.A354ProveedorNombre="";this.A1544ProveedorPersonaTipo="";this.A2562ActividadNombre="";this.Gx_mode="";this.Events={e125f2_client:["AFTER TRN",!0],e135f46_client:["ENTER",!0],e145f46_client:["CANCEL",!0]};this.EvtParms.ENTER=[[{postForm:!0},{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV7ProveedorId",fld:"vPROVEEDORID",pic:"ZZZZZZZZZZZZZZ9",hsh:!0},{av:"AV8ActividadId",fld:"vACTIVIDADID",pic:"",hsh:!0}],[]];this.EvtParms.REFRESH=[[{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV10TrnContext",fld:"vTRNCONTEXT",pic:"",hsh:!0},{av:"AV7ProveedorId",fld:"vPROVEEDORID",pic:"ZZZZZZZZZZZZZZ9",hsh:!0},{av:"AV8ActividadId",fld:"vACTIVIDADID",pic:"",hsh:!0}],[]];this.EvtParms.START=[[],[{av:"AV9WWPContext",fld:"vWWPCONTEXT",pic:""},{av:"AV10TrnContext",fld:"vTRNCONTEXT",pic:"",hsh:!0},{ctrl:"PROVEEDORPERSONATIPO"}]];this.EvtParms["AFTER TRN"]=[[{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV10TrnContext",fld:"vTRNCONTEXT",pic:"",hsh:!0}],[]];this.EvtParms.VALID_PROVEEDORID=[[{av:"A28ProveedorId",fld:"PROVEEDORID",pic:"ZZZZZZZZZZZZZZ9"},{av:"A354ProveedorNombre",fld:"PROVEEDORNOMBRE",pic:"@!"},{ctrl:"PROVEEDORPERSONATIPO"},{av:"A1544ProveedorPersonaTipo",fld:"PROVEEDORPERSONATIPO",pic:""}],[{av:"A354ProveedorNombre",fld:"PROVEEDORNOMBRE",pic:"@!"},{ctrl:"PROVEEDORPERSONATIPO"},{av:"A1544ProveedorPersonaTipo",fld:"PROVEEDORPERSONATIPO",pic:""}]];this.EvtParms.VALID_ACTIVIDADID=[[{av:"A104ActividadId",fld:"ACTIVIDADID",pic:""},{av:"A2562ActividadNombre",fld:"ACTIVIDADNOMBRE",pic:"@!"}],[{av:"A2562ActividadNombre",fld:"ACTIVIDADNOMBRE",pic:"@!"}]];this.EvtParms.VALID_PROVEEDORACTPLANCUENTAORIID=[[{av:"A311ProveedorActPlanCuentaOriId",fld:"PROVEEDORACTPLANCUENTAORIID",pic:"ZZZZZZZZZ9"},{av:"A2569ProveedorActPlanCuentaOriNombre",fld:"PROVEEDORACTPLANCUENTAORINOMBRE",pic:"@!"}],[{av:"A2569ProveedorActPlanCuentaOriNombre",fld:"PROVEEDORACTPLANCUENTAORINOMBRE",pic:"@!"}]];this.EvtParms.VALID_PROVEEDORACTPLANCUENTADESTID=[[{av:"A312ProveedorActPlanCuentaDestId",fld:"PROVEEDORACTPLANCUENTADESTID",pic:"ZZZZZZZZZ9"},{av:"A2570ProveedorActPlanCuentaDestNombre",fld:"PROVEEDORACTPLANCUENTADESTNOMBRE",pic:"@!"}],[{av:"A2570ProveedorActPlanCuentaDestNombre",fld:"PROVEEDORACTPLANCUENTADESTNOMBRE",pic:"@!"}]];this.setPrompt("PROMPT_28",[22]);this.setPrompt("PROMPT_104",[30]);this.setPrompt("PROMPT_311",[45]);this.setPrompt("PROMPT_312",[47]);this.EnterCtrl=["BTNTRN_ENTER"];this.setVCMap("AV7ProveedorId","vPROVEEDORID",0,"int",15,0);this.setVCMap("AV8ActividadId","vACTIVIDADID",0,"char",6,0);this.setVCMap("Gx_mode","vMODE",0,"char",3,0);this.setVCMap("AV10TrnContext","vTRNCONTEXT",0,"WWPBaseObjectsWWPTransactionContext",0,0);r.addPostingVar({rfrVar:"Gx_mode"});this.Initialize()});gx.wi(function(){gx.createParentObj(proveedoractividad)})