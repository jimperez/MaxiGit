/*!   GeneXus C# 16_0_5-135614 on 10/11/2019 18:41:23.3
*/
gx.evt.autoSkip=!1;gx.define("promptpresupuestovta",!1,function(){var n,t,i;this.ServerClass="promptpresupuestovta";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.anyGridBaseTable=!0;this.hasEnterEvent=!0;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV7InOutPreId=gx.fn.getIntegerValue("vINOUTPREID",".");this.AV8InOutPreFecha=gx.fn.getDateValue("vINOUTPREFECHA")};this.Validv_Prefecha=function(){return this.validCliEvt("Validv_Prefecha",0,function(){try{var n=gx.util.balloon.getNew("vPREFECHA");if(this.AnyError=0,!(new gx.date.gxdate("").compare(this.AV66PreFecha)==0||new gx.date.gxdate(this.AV66PreFecha).compare(gx.date.ymdtod(1753,01,01))>=0))try{n.setError("Campo Pre Fecha fuera de rango");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Preentidadid=function(){var n=gx.fn.currentGridRowImpl(31);return this.validCliEvt("Valid_Preentidadid",31,function(){try{if(gx.fn.currentGridRowImpl(31)===0)return!0;var n=gx.util.balloon.getNew("PREENTIDADID",gx.fn.currentGridRowImpl(31));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Presucursalid=function(){var n=gx.fn.currentGridRowImpl(31);return this.validCliEvt("Valid_Presucursalid",31,function(){try{if(gx.fn.currentGridRowImpl(31)===0)return!0;var n=gx.util.balloon.getNew("PRESUCURSALID",gx.fn.currentGridRowImpl(31));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e14kp2_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e15kp2_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,11,12,13,14,17,18,19,21,22,23,26,27,28,29,30,32,33,34,35,36,37,38,39,40,41,42,43,44,45];this.GXLastCtrlId=45;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",31,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"promptpresupuestovta",[],!1,1,!1,!0,0,!0,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);t=this.GridContainer;t.addBitmap("&Select","vSELECT",32,0,"px",17,"px","e14kp2_client","","","SelectAttribute ActionBaseColorAttribute","WWActionColumn");t.addSingleLineEdit(89,33,"PREID","Nº Pre.","","PreId","int",0,"px",9,9,"right",null,[],89,"PreId",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");t.addSingleLineEdit(90,34,"PREENTIDADID","Empresa","","PreEntidadId","int",0,"px",2,2,"right",null,[],90,"PreEntidadId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");t.addSingleLineEdit(1318,35,"PREENTIDADNOMBRE","Empresa","","PreEntidadNombre","svchar",0,"px",64,64,"left",null,[],1318,"PreEntidadNombre",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn");t.addSingleLineEdit(91,36,"PRESUCURSALID","Ide.","","PreSucursalId","int",0,"px",4,4,"right",null,[],91,"PreSucursalId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");t.addSingleLineEdit(1319,37,"PRESUCURSALNOMBRE","Sucursal","","PreSucursalNombre","svchar",0,"px",64,64,"left",null,[],1319,"PreSucursalNombre",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn");t.addSingleLineEdit(93,38,"PREFECHA","Fecha","","PreFecha","date",0,"px",8,8,"right",null,[],93,"PreFecha",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");t.addSingleLineEdit(53,39,"CLIENTEID","Cuil/Cuit","","ClienteId","int",0,"px",15,15,"right",null,[],53,"ClienteId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");t.addSingleLineEdit(645,40,"PRECLINOM","Cliente","","PreCliNom","svchar",0,"px",64,64,"left",null,[],645,"PreCliNom",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");t.addComboBox(92,41,"PREESTADO","Estado","PreEstado","char",null,0,!0,!1,0,"px","WWColumn hidden-xs");this.GridContainer.emptyText="";this.setGrid(t);this.DVPANEL_TABLEHEADERContainer=gx.uc.getNew(this,9,0,"BootstrapPanel","DVPANEL_TABLEHEADERContainer","Dvpanel_tableheader","DVPANEL_TABLEHEADER");i=this.DVPANEL_TABLEHEADERContainer;i.setProp("Class","Class","","char");i.setProp("Enabled","Enabled",!0,"boolean");i.setProp("Width","Width","100%","str");i.setProp("Height","Height","100","str");i.setProp("AutoWidth","Autowidth",!1,"bool");i.setProp("AutoHeight","Autoheight",!0,"bool");i.setProp("Cls","Cls","PanelFilled_BaseColor","str");i.setProp("ShowHeader","Showheader",!0,"bool");i.setProp("Title","Title","Opciones","str");i.setProp("Collapsible","Collapsible",!0,"bool");i.setProp("Collapsed","Collapsed",!1,"bool");i.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");i.setProp("IconPosition","Iconposition","Right","str");i.setProp("AutoScroll","Autoscroll",!1,"bool");i.setProp("Visible","Visible",!0,"bool");i.setC2ShowFunction(function(n){n.show()});this.setUserControl(i);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLEMAIN",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[11]={id:11,fld:"TABLEHEADER",grid:0};n[12]={id:12,fld:"",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"TABLEFILTERS",grid:0};n[17]={id:17,fld:"",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,lvl:0,type:"int",len:15,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vCLIENTEID",gxz:"ZV67ClienteId",gxold:"OV67ClienteId",gxvar:"AV67ClienteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV67ClienteId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV67ClienteId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("vCLIENTEID",gx.O.AV67ClienteId,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV67ClienteId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vCLIENTEID",".")},nac:gx.falseFn};n[21]={id:21,fld:"",grid:0};n[22]={id:22,fld:"",grid:0};n[23]={id:23,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vPRECLINOM",gxz:"ZV68PreCliNom",gxold:"OV68PreCliNom",gxvar:"AV68PreCliNom",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV68PreCliNom=n)},v2z:function(n){n!==undefined&&(gx.O.ZV68PreCliNom=n)},v2c:function(){gx.fn.setControlValue("vPRECLINOM",gx.O.AV68PreCliNom,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV68PreCliNom=this.val())},val:function(){return gx.fn.getControlValue("vPRECLINOM")},nac:gx.falseFn};n[26]={id:26,fld:"",grid:0};n[27]={id:27,fld:"",grid:0};n[28]={id:28,lvl:0,type:"date",len:8,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Prefecha,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vPREFECHA",gxz:"ZV66PreFecha",gxold:"OV66PreFecha",gxvar:"AV66PreFecha",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/99",dec:0},ucs:[],op:[28],ip:[28],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV66PreFecha=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.ZV66PreFecha=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("vPREFECHA",gx.O.AV66PreFecha,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV66PreFecha=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getControlValue("vPREFECHA")},nac:gx.falseFn};n[29]={id:29,fld:"",grid:0};n[30]={id:30,fld:"",grid:0};n[32]={id:32,lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:31,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vSELECT",gxz:"ZV11Select",gxold:"OV11Select",gxvar:"AV11Select",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.AV11Select=n)},v2z:function(n){n!==undefined&&(gx.O.ZV11Select=n)},v2c:function(n){gx.fn.setGridMultimediaValue("vSELECT",n||gx.fn.currentGridRowImpl(31),gx.O.AV11Select,gx.O.AV83Select_GXI)},c2v:function(n){gx.O.AV83Select_GXI=this.val_GXI();this.val(n)!==undefined&&(gx.O.AV11Select=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vSELECT",n||gx.fn.currentGridRowImpl(31))},val_GXI:function(n){return gx.fn.getGridControlValue("vSELECT_GXI",n||gx.fn.currentGridRowImpl(31))},gxvar_GXI:"AV83Select_GXI",nac:gx.falseFn,evt:"e14kp2_client",std:"ENTER"};n[33]={id:33,lvl:2,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,isacc:0,grid:31,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREID",gxz:"Z89PreId",gxold:"O89PreId",gxvar:"A89PreId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A89PreId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z89PreId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("PREID",n||gx.fn.currentGridRowImpl(31),gx.O.A89PreId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A89PreId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("PREID",n||gx.fn.currentGridRowImpl(31),".")},nac:gx.falseFn};n[34]={id:34,lvl:2,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:1,isacc:0,grid:31,gxgrid:this.GridContainer,fnc:this.Valid_Preentidadid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREENTIDADID",gxz:"Z90PreEntidadId",gxold:"O90PreEntidadId",gxvar:"A90PreEntidadId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A90PreEntidadId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z90PreEntidadId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("PREENTIDADID",n||gx.fn.currentGridRowImpl(31),gx.O.A90PreEntidadId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A90PreEntidadId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("PREENTIDADID",n||gx.fn.currentGridRowImpl(31),".")},nac:gx.falseFn};n[35]={id:35,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:31,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREENTIDADNOMBRE",gxz:"Z1318PreEntidadNombre",gxold:"O1318PreEntidadNombre",gxvar:"A1318PreEntidadNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A1318PreEntidadNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z1318PreEntidadNombre=n)},v2c:function(n){gx.fn.setGridControlValue("PREENTIDADNOMBRE",n||gx.fn.currentGridRowImpl(31),gx.O.A1318PreEntidadNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1318PreEntidadNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("PREENTIDADNOMBRE",n||gx.fn.currentGridRowImpl(31))},nac:gx.falseFn};n[36]={id:36,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:31,gxgrid:this.GridContainer,fnc:this.Valid_Presucursalid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PRESUCURSALID",gxz:"Z91PreSucursalId",gxold:"O91PreSucursalId",gxvar:"A91PreSucursalId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A91PreSucursalId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z91PreSucursalId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("PRESUCURSALID",n||gx.fn.currentGridRowImpl(31),gx.O.A91PreSucursalId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A91PreSucursalId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("PRESUCURSALID",n||gx.fn.currentGridRowImpl(31),".")},nac:gx.falseFn};n[37]={id:37,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:31,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PRESUCURSALNOMBRE",gxz:"Z1319PreSucursalNombre",gxold:"O1319PreSucursalNombre",gxvar:"A1319PreSucursalNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A1319PreSucursalNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z1319PreSucursalNombre=n)},v2c:function(n){gx.fn.setGridControlValue("PRESUCURSALNOMBRE",n||gx.fn.currentGridRowImpl(31),gx.O.A1319PreSucursalNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1319PreSucursalNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("PRESUCURSALNOMBRE",n||gx.fn.currentGridRowImpl(31))},nac:gx.falseFn};n[38]={id:38,lvl:2,type:"date",len:8,dec:0,sign:!1,ro:1,isacc:0,grid:31,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREFECHA",gxz:"Z93PreFecha",gxold:"O93PreFecha",gxvar:"A93PreFecha",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/99",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A93PreFecha=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z93PreFecha=gx.fn.toDatetimeValue(n))},v2c:function(n){gx.fn.setGridControlValue("PREFECHA",n||gx.fn.currentGridRowImpl(31),gx.O.A93PreFecha,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A93PreFecha=gx.fn.toDatetimeValue(this.val(n)))},val:function(n){return gx.fn.getGridDateTimeValue("PREFECHA",n||gx.fn.currentGridRowImpl(31))},nac:gx.falseFn};n[39]={id:39,lvl:2,type:"int",len:15,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZZ9",ro:1,isacc:0,grid:31,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CLIENTEID",gxz:"Z53ClienteId",gxold:"O53ClienteId",gxvar:"A53ClienteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A53ClienteId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z53ClienteId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("CLIENTEID",n||gx.fn.currentGridRowImpl(31),gx.O.A53ClienteId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A53ClienteId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("CLIENTEID",n||gx.fn.currentGridRowImpl(31),".")},nac:gx.falseFn};n[40]={id:40,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:31,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PRECLINOM",gxz:"Z645PreCliNom",gxold:"O645PreCliNom",gxvar:"A645PreCliNom",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A645PreCliNom=n)},v2z:function(n){n!==undefined&&(gx.O.Z645PreCliNom=n)},v2c:function(n){gx.fn.setGridControlValue("PRECLINOM",n||gx.fn.currentGridRowImpl(31),gx.O.A645PreCliNom,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A645PreCliNom=this.val(n))},val:function(n){return gx.fn.getGridControlValue("PRECLINOM",n||gx.fn.currentGridRowImpl(31))},nac:gx.falseFn};n[41]={id:41,lvl:2,type:"char",len:3,dec:0,sign:!1,ro:1,isacc:0,grid:31,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREESTADO",gxz:"Z92PreEstado",gxold:"O92PreEstado",gxvar:"A92PreEstado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A92PreEstado=n)},v2z:function(n){n!==undefined&&(gx.O.Z92PreEstado=n)},v2c:function(n){gx.fn.setGridComboBoxValue("PREESTADO",n||gx.fn.currentGridRowImpl(31),gx.O.A92PreEstado);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A92PreEstado=this.val(n))},val:function(n){return gx.fn.getGridControlValue("PREESTADO",n||gx.fn.currentGridRowImpl(31))},nac:gx.falseFn};n[42]={id:42,fld:"",grid:0};n[43]={id:43,fld:"",grid:0};n[44]={id:44,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};n[45]={id:45,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV9OrderedBy",gxold:"OV9OrderedBy",gxvar:"AV9OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV9OrderedBy=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV9OrderedBy=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV9OrderedBy,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV9OrderedBy=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",".")},nac:gx.falseFn};this.AV67ClienteId=0;this.ZV67ClienteId=0;this.OV67ClienteId=0;this.AV68PreCliNom="";this.ZV68PreCliNom="";this.OV68PreCliNom="";this.AV66PreFecha=gx.date.nullDate();this.ZV66PreFecha=gx.date.nullDate();this.OV66PreFecha=gx.date.nullDate();this.ZV11Select="";this.OV11Select="";this.Z89PreId=0;this.O89PreId=0;this.Z90PreEntidadId=0;this.O90PreEntidadId=0;this.Z1318PreEntidadNombre="";this.O1318PreEntidadNombre="";this.Z91PreSucursalId=0;this.O91PreSucursalId=0;this.Z1319PreSucursalNombre="";this.O1319PreSucursalNombre="";this.Z93PreFecha=gx.date.nullDate();this.O93PreFecha=gx.date.nullDate();this.Z53ClienteId=0;this.O53ClienteId=0;this.Z645PreCliNom="";this.O645PreCliNom="";this.Z92PreEstado="";this.O92PreEstado="";this.AV9OrderedBy=0;this.ZV9OrderedBy=0;this.OV9OrderedBy=0;this.AV67ClienteId=0;this.AV68PreCliNom="";this.AV66PreFecha=gx.date.nullDate();this.AV9OrderedBy=0;this.AV7InOutPreId=0;this.AV8InOutPreFecha=gx.date.nullDate();this.AV11Select="";this.A89PreId=0;this.A90PreEntidadId=0;this.A1318PreEntidadNombre="";this.A91PreSucursalId=0;this.A1319PreSucursalNombre="";this.A93PreFecha=gx.date.nullDate();this.A53ClienteId=0;this.A645PreCliNom="";this.A92PreEstado="";this.Events={e14kp2_client:["ENTER",!0],e15kp2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV67ClienteId",fld:"vCLIENTEID",pic:"ZZZZZZZZZZZZZZ9"},{av:"AV68PreCliNom",fld:"vPRECLINOM",pic:"@!"},{av:"AV66PreFecha",fld:"vPREFECHA",pic:""},{av:"AV9OrderedBy",fld:"vORDEREDBY",pic:"ZZZ9"}],[]];this.EvtParms.START=[[{av:"AV9OrderedBy",fld:"vORDEREDBY",pic:"ZZZ9"}],[{ctrl:"GRID",prop:"Rows"},{ctrl:"FORM",prop:"Caption"},{av:'gx.fn.getCtrlProperty("vORDEREDBY","Visible")',ctrl:"vORDEREDBY",prop:"Visible"},{av:"AV9OrderedBy",fld:"vORDEREDBY",pic:"ZZZ9"}]];this.EvtParms["GRID.LOAD"]=[[],[{av:"AV11Select",fld:"vSELECT",pic:""},{av:'gx.fn.getCtrlProperty("vSELECT","Tooltiptext")',ctrl:"vSELECT",prop:"Tooltiptext"}]];this.EvtParms.ENTER=[[{av:"A89PreId",fld:"PREID",pic:"ZZZZZZZZ9",hsh:!0},{av:"A93PreFecha",fld:"PREFECHA",pic:"",hsh:!0}],[{av:"AV7InOutPreId",fld:"vINOUTPREID",pic:"ZZZZZZZZ9"},{av:"AV8InOutPreFecha",fld:"vINOUTPREFECHA",pic:""}]];this.EvtParms.GRID_FIRSTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV67ClienteId",fld:"vCLIENTEID",pic:"ZZZZZZZZZZZZZZ9"},{av:"AV68PreCliNom",fld:"vPRECLINOM",pic:"@!"},{av:"AV66PreFecha",fld:"vPREFECHA",pic:""},{av:"AV9OrderedBy",fld:"vORDEREDBY",pic:"ZZZ9"}],[]];this.EvtParms.GRID_PREVPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV67ClienteId",fld:"vCLIENTEID",pic:"ZZZZZZZZZZZZZZ9"},{av:"AV68PreCliNom",fld:"vPRECLINOM",pic:"@!"},{av:"AV66PreFecha",fld:"vPREFECHA",pic:""},{av:"AV9OrderedBy",fld:"vORDEREDBY",pic:"ZZZ9"}],[]];this.EvtParms.GRID_NEXTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV67ClienteId",fld:"vCLIENTEID",pic:"ZZZZZZZZZZZZZZ9"},{av:"AV68PreCliNom",fld:"vPRECLINOM",pic:"@!"},{av:"AV66PreFecha",fld:"vPREFECHA",pic:""},{av:"AV9OrderedBy",fld:"vORDEREDBY",pic:"ZZZ9"}],[]];this.EvtParms.GRID_LASTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV67ClienteId",fld:"vCLIENTEID",pic:"ZZZZZZZZZZZZZZ9"},{av:"AV68PreCliNom",fld:"vPRECLINOM",pic:"@!"},{av:"AV66PreFecha",fld:"vPREFECHA",pic:""},{av:"AV9OrderedBy",fld:"vORDEREDBY",pic:"ZZZ9"}],[]];this.EvtParms.VALIDV_PREFECHA=[[],[]];this.EvtParms.VALID_PREENTIDADID=[[],[]];this.EvtParms.VALID_PRESUCURSALID=[[],[]];this.EnterCtrl=["vSELECT"];this.setVCMap("AV7InOutPreId","vINOUTPREID",0,"int",9,0);this.setVCMap("AV8InOutPreFecha","vINOUTPREFECHA",0,"date",8,0);t.addRefreshingVar(this.GXValidFnc[19]);t.addRefreshingVar(this.GXValidFnc[23]);t.addRefreshingVar(this.GXValidFnc[28]);t.addRefreshingVar(this.GXValidFnc[45]);t.addRefreshingParm(this.GXValidFnc[19]);t.addRefreshingParm(this.GXValidFnc[23]);t.addRefreshingParm(this.GXValidFnc[28]);t.addRefreshingParm(this.GXValidFnc[45]);this.Initialize()});gx.wi(function(){gx.createParentObj(promptpresupuestovta)})