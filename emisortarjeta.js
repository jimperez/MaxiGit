/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:42:43.41
*/
gx.evt.autoSkip=!1;gx.define("emisortarjeta",!1,function(){var n,t;this.ServerClass="emisortarjeta";this.PackageName="GeneXus.Programs";this.setObjectType("trn");this.hasEnterEvent=!0;this.skipOnEnter=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV7EmisorTrjId=gx.fn.getIntegerValue("vEMISORTRJID",".");this.AV18Pgmdesc=gx.fn.getControlValue("vPGMDESC");this.AV11Insert_BancoId=gx.fn.getIntegerValue("vINSERT_BANCOID",".");this.Gx_BScreen=gx.fn.getIntegerValue("vGXBSCREEN",".");this.AV19Pgmname=gx.fn.getControlValue("vPGMNAME");this.Gx_mode=gx.fn.getControlValue("vMODE");this.AV9TrnContext=gx.fn.getControlValue("vTRNCONTEXT")};this.Valid_Emisortrjid=function(){return this.validCliEvt("Valid_Emisortrjid",0,function(){try{var n=gx.util.balloon.getNew("EMISORTRJID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Emisortrjnombre=function(){return this.validCliEvt("Valid_Emisortrjnombre",0,function(){try{var n=gx.util.balloon.getNew("EMISORTRJNOMBRE");if(this.AnyError=0,""==this.A1030EmisorTrjNombre)try{n.setError("Error! Debe ingresar un Nombre de Emisor.");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Bancoid=function(){return this.validSrvEvt("Valid_Bancoid",0).then(function(n){return n}.closure(this))};this.Valid_Emisortrjestado=function(){return this.validCliEvt("Valid_Emisortrjestado",0,function(){try{var n=gx.util.balloon.getNew("EMISORTRJESTADO");if(this.AnyError=0,!(this.A1031EmisorTrjEstado=="ACT"||this.A1031EmisorTrjEstado=="INA"||""==this.A1031EmisorTrjEstado))try{n.setError("Campo Emisor Estado fuera de rango");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Bancopersonacuit=function(){return this.validCliEvt("Valid_Bancopersonacuit",0,function(){try{var n=gx.util.balloon.getNew("BANCOPERSONACUIT");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e121w2_client=function(){return this.executeServerEvent("AFTER TRN",!0,null,!1,!1)};this.e131w83_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e141w83_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,12,13,14,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58];this.GXLastCtrlId=58;this.DVPANEL_TABLEATTRIBUTESContainer=gx.uc.getNew(this,15,0,"BootstrapPanel","DVPANEL_TABLEATTRIBUTESContainer","Dvpanel_tableattributes","DVPANEL_TABLEATTRIBUTES");t=this.DVPANEL_TABLEATTRIBUTESContainer;t.setProp("Class","Class","","char");t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("Width","Width","100%","str");t.setProp("Height","Height","100","str");t.setProp("AutoWidth","Autowidth",!1,"bool");t.setProp("AutoHeight","Autoheight",!0,"bool");t.setProp("Cls","Cls","PanelFilled_BaseColor","str");t.setProp("ShowHeader","Showheader",!0,"bool");t.setProp("Title","Title","Información General","str");t.setProp("Collapsible","Collapsible",!1,"bool");t.setProp("Collapsed","Collapsed",!1,"bool");t.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");t.setProp("IconPosition","Iconposition","Right","str");t.setProp("AutoScroll","Autoscroll",!1,"bool");t.setProp("Visible","Visible",!0,"bool");t.setC2ShowFunction(function(n){n.show()});this.setUserControl(t);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLEMAIN",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"TABLECONTENT",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"",grid:0};n[17]={id:17,fld:"TABLEATTRIBUTES",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,fld:"",grid:0};n[20]={id:20,fld:"",grid:0};n[21]={id:21,fld:"",grid:0};n[22]={id:22,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Emisortrjid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"EMISORTRJID",gxz:"Z97EmisorTrjId",gxold:"O97EmisorTrjId",gxvar:"A97EmisorTrjId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A97EmisorTrjId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z97EmisorTrjId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("EMISORTRJID",gx.O.A97EmisorTrjId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A97EmisorTrjId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("EMISORTRJID",".")},nac:gx.falseFn};this.declareDomainHdlr(22,function(){});n[23]={id:23,fld:"",grid:0};n[24]={id:24,fld:"",grid:0};n[25]={id:25,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Emisortrjnombre,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"EMISORTRJNOMBRE",gxz:"Z1030EmisorTrjNombre",gxold:"O1030EmisorTrjNombre",gxvar:"A1030EmisorTrjNombre",ucs:[],op:[25],ip:[25],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1030EmisorTrjNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z1030EmisorTrjNombre=n)},v2c:function(){gx.fn.setControlValue("EMISORTRJNOMBRE",gx.O.A1030EmisorTrjNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1030EmisorTrjNombre=this.val())},val:function(){return gx.fn.getControlValue("EMISORTRJNOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(25,function(){});n[26]={id:26,fld:"",grid:0};n[27]={id:27,fld:"",grid:0};n[28]={id:28,fld:"",grid:0};n[29]={id:29,fld:"",grid:0};n[30]={id:30,lvl:0,type:"int",len:3,dec:0,sign:!1,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Bancoid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"BANCOID",gxz:"Z29BancoId",gxold:"O29BancoId",gxvar:"A29BancoId",ucs:[],op:[52,51,53,33],ip:[52,53,33,51,30],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A29BancoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z29BancoId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("BANCOID",gx.O.A29BancoId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A29BancoId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("BANCOID",".")},nac:function(){return this.Gx_mode=="INS"&&!(0==this.AV11Insert_BancoId)}};n[31]={id:31,fld:"",grid:0};n[32]={id:32,fld:"",grid:0};n[33]={id:33,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"BANCONOMBRE",gxz:"Z432BancoNombre",gxold:"O432BancoNombre",gxvar:"A432BancoNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A432BancoNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z432BancoNombre=n)},v2c:function(){gx.fn.setControlValue("BANCONOMBRE",gx.O.A432BancoNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A432BancoNombre=this.val())},val:function(){return gx.fn.getControlValue("BANCONOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(33,function(){});n[34]={id:34,fld:"",grid:0};n[35]={id:35,fld:"",grid:0};n[36]={id:36,fld:"",grid:0};n[37]={id:37,fld:"",grid:0};n[38]={id:38,lvl:0,type:"char",len:3,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Emisortrjestado,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"EMISORTRJESTADO",gxz:"Z1031EmisorTrjEstado",gxold:"O1031EmisorTrjEstado",gxvar:"A1031EmisorTrjEstado",ucs:[],op:[38],ip:[38],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.A1031EmisorTrjEstado=n)},v2z:function(n){n!==undefined&&(gx.O.Z1031EmisorTrjEstado=n)},v2c:function(){gx.fn.setComboBoxValue("EMISORTRJESTADO",gx.O.A1031EmisorTrjEstado);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1031EmisorTrjEstado=this.val())},val:function(){return gx.fn.getControlValue("EMISORTRJESTADO")},nac:gx.falseFn};this.declareDomainHdlr(38,function(){});n[39]={id:39,fld:"",grid:0};n[40]={id:40,fld:"",grid:0};n[41]={id:41,fld:"",grid:0};n[42]={id:42,fld:"",grid:0};n[43]={id:43,fld:"BTNTRN_ENTER",grid:0,evt:"e131w83_client",std:"ENTER"};n[44]={id:44,fld:"",grid:0};n[45]={id:45,fld:"BTNTRN_CANCEL",grid:0,evt:"e141w83_client"};n[46]={id:46,fld:"",grid:0};n[47]={id:47,fld:"BTNTRN_DELETE",grid:0,evt:"e151w83_client",std:"DELETE"};n[48]={id:48,fld:"",grid:0};n[49]={id:49,fld:"",grid:0};n[50]={id:50,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};n[51]={id:51,lvl:0,type:"int",len:15,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Bancopersonacuit,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"BANCOPERSONACUIT",gxz:"Z30BancoPersonaCuit",gxold:"O30BancoPersonaCuit",gxvar:"A30BancoPersonaCuit",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A30BancoPersonaCuit=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z30BancoPersonaCuit=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("BANCOPERSONACUIT",gx.O.A30BancoPersonaCuit,0)},c2v:function(){this.val()!==undefined&&(gx.O.A30BancoPersonaCuit=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("BANCOPERSONACUIT",".")},nac:gx.falseFn};n[52]={id:52,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"BANCOPERSONANOMBRE",gxz:"Z1089BancoPersonaNombre",gxold:"O1089BancoPersonaNombre",gxvar:"A1089BancoPersonaNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1089BancoPersonaNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z1089BancoPersonaNombre=n)},v2c:function(){gx.fn.setControlValue("BANCOPERSONANOMBRE",gx.O.A1089BancoPersonaNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1089BancoPersonaNombre=this.val())},val:function(){return gx.fn.getControlValue("BANCOPERSONANOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(52,function(){});n[53]={id:53,lvl:0,type:"char",len:3,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"BANCOESTADO",gxz:"Z1042BancoEstado",gxold:"O1042BancoEstado",gxvar:"A1042BancoEstado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.A1042BancoEstado=n)},v2z:function(n){n!==undefined&&(gx.O.Z1042BancoEstado=n)},v2c:function(){gx.fn.setComboBoxValue("BANCOESTADO",gx.O.A1042BancoEstado);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1042BancoEstado=this.val())},val:function(){return gx.fn.getControlValue("BANCOESTADO")},nac:gx.falseFn};this.declareDomainHdlr(53,function(){});n[54]={id:54,lvl:0,type:"char",len:15,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"EMISORTRJ094",gxz:"Z1032EmisorTrj094",gxold:"O1032EmisorTrj094",gxvar:"A1032EmisorTrj094",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1032EmisorTrj094=n)},v2z:function(n){n!==undefined&&(gx.O.Z1032EmisorTrj094=n)},v2c:function(){gx.fn.setControlValue("EMISORTRJ094",gx.O.A1032EmisorTrj094,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1032EmisorTrj094=this.val())},val:function(){return gx.fn.getControlValue("EMISORTRJ094")},nac:gx.falseFn};this.declareDomainHdlr(54,function(){});n[55]={id:55,lvl:0,type:"dtime",len:8,dec:5,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"EMISORTRJ095",gxz:"Z1033EmisorTrj095",gxold:"O1033EmisorTrj095",gxvar:"A1033EmisorTrj095",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1033EmisorTrj095=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z1033EmisorTrj095=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("EMISORTRJ095",gx.O.A1033EmisorTrj095,0)},c2v:function(){this.val()!==undefined&&(gx.O.A1033EmisorTrj095=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getDateTimeValue("EMISORTRJ095")},nac:gx.falseFn};n[56]={id:56,lvl:0,type:"char",len:15,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"EMISORTRJ097",gxz:"Z1034EmisorTrj097",gxold:"O1034EmisorTrj097",gxvar:"A1034EmisorTrj097",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1034EmisorTrj097=n)},v2z:function(n){n!==undefined&&(gx.O.Z1034EmisorTrj097=n)},v2c:function(){gx.fn.setControlValue("EMISORTRJ097",gx.O.A1034EmisorTrj097,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1034EmisorTrj097=this.val())},val:function(){return gx.fn.getControlValue("EMISORTRJ097")},nac:gx.falseFn};this.declareDomainHdlr(56,function(){});n[57]={id:57,lvl:0,type:"dtime",len:8,dec:5,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"EMISORTRJ098",gxz:"Z1035EmisorTrj098",gxold:"O1035EmisorTrj098",gxvar:"A1035EmisorTrj098",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1035EmisorTrj098=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z1035EmisorTrj098=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("EMISORTRJ098",gx.O.A1035EmisorTrj098,0)},c2v:function(){this.val()!==undefined&&(gx.O.A1035EmisorTrj098=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getDateTimeValue("EMISORTRJ098")},nac:gx.falseFn};n[58]={id:58,fld:"PROMPT_29",grid:83};this.A97EmisorTrjId=0;this.Z97EmisorTrjId=0;this.O97EmisorTrjId=0;this.A1030EmisorTrjNombre="";this.Z1030EmisorTrjNombre="";this.O1030EmisorTrjNombre="";this.A29BancoId=0;this.Z29BancoId=0;this.O29BancoId=0;this.A432BancoNombre="";this.Z432BancoNombre="";this.O432BancoNombre="";this.A1031EmisorTrjEstado="";this.Z1031EmisorTrjEstado="";this.O1031EmisorTrjEstado="";this.A30BancoPersonaCuit=0;this.Z30BancoPersonaCuit=0;this.O30BancoPersonaCuit=0;this.A1089BancoPersonaNombre="";this.Z1089BancoPersonaNombre="";this.O1089BancoPersonaNombre="";this.A1042BancoEstado="";this.Z1042BancoEstado="";this.O1042BancoEstado="";this.A1032EmisorTrj094="";this.Z1032EmisorTrj094="";this.O1032EmisorTrj094="";this.A1033EmisorTrj095=gx.date.nullDate();this.Z1033EmisorTrj095=gx.date.nullDate();this.O1033EmisorTrj095=gx.date.nullDate();this.A1034EmisorTrj097="";this.Z1034EmisorTrj097="";this.O1034EmisorTrj097="";this.A1035EmisorTrj098=gx.date.nullDate();this.Z1035EmisorTrj098=gx.date.nullDate();this.O1035EmisorTrj098=gx.date.nullDate();this.AV8WWPContext={User:0,UsuNombre:"",System:"",Puesto:0,PuestoNombre:"",Rol:0,Ingreso:"",Opcion:"",EntidadId:0,EntidadNombre:"",SucursalId:0,SucursalNombre:"",ProvinciaId:0,ProvinciaNombre:"",UsuPwdMar:"",EmpleadoId:0};this.AV9TrnContext={CallerObject:"",CallerOnDelete:!1,CallerURL:"",TransactionName:"",Attributes:[]};this.AV20GXV1=0;this.AV11Insert_BancoId=0;this.AV12TrnContextAtt={AttributeName:"",AttributeValue:""};this.AV7EmisorTrjId=0;this.AV10WebSession={};this.A97EmisorTrjId=0;this.A29BancoId=0;this.A1033EmisorTrj095=gx.date.nullDate();this.A1032EmisorTrj094="";this.A1035EmisorTrj098=gx.date.nullDate();this.A1034EmisorTrj097="";this.AV19Pgmname="";this.AV18Pgmdesc="";this.Gx_BScreen=0;this.A1030EmisorTrjNombre="";this.A432BancoNombre="";this.A30BancoPersonaCuit=0;this.A1089BancoPersonaNombre="";this.A1042BancoEstado="";this.A1031EmisorTrjEstado="";this.Gx_mode="";this.Events={e121w2_client:["AFTER TRN",!0],e131w83_client:["ENTER",!0],e141w83_client:["CANCEL",!0]};this.EvtParms.ENTER=[[{postForm:!0},{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV7EmisorTrjId",fld:"vEMISORTRJID",pic:"ZZZ9",hsh:!0}],[]];this.EvtParms.REFRESH=[[{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV9TrnContext",fld:"vTRNCONTEXT",pic:"",hsh:!0},{av:"AV7EmisorTrjId",fld:"vEMISORTRJID",pic:"ZZZ9",hsh:!0}],[]];this.EvtParms.START=[[{av:"AV19Pgmname",fld:"vPGMNAME",pic:""},{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0}],[{av:"AV8WWPContext",fld:"vWWPCONTEXT",pic:""},{av:"AV9TrnContext",fld:"vTRNCONTEXT",pic:"",hsh:!0},{av:"AV20GXV1",fld:"vGXV1",pic:"99999999"},{av:"AV12TrnContextAtt",fld:"vTRNCONTEXTATT",pic:""},{av:"AV11Insert_BancoId",fld:"vINSERT_BANCOID",pic:"ZZ9"},{av:'gx.fn.getCtrlProperty("BANCOPERSONACUIT","Visible")',ctrl:"BANCOPERSONACUIT",prop:"Visible"},{av:'gx.fn.getCtrlProperty("BANCOPERSONANOMBRE","Visible")',ctrl:"BANCOPERSONANOMBRE",prop:"Visible"},{ctrl:"BANCOESTADO"},{av:'gx.fn.getCtrlProperty("EMISORTRJ094","Visible")',ctrl:"EMISORTRJ094",prop:"Visible"},{av:'gx.fn.getCtrlProperty("EMISORTRJ095","Visible")',ctrl:"EMISORTRJ095",prop:"Visible"},{av:'gx.fn.getCtrlProperty("EMISORTRJ097","Visible")',ctrl:"EMISORTRJ097",prop:"Visible"},{av:'gx.fn.getCtrlProperty("EMISORTRJ098","Visible")',ctrl:"EMISORTRJ098",prop:"Visible"}]];this.EvtParms["AFTER TRN"]=[[{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV9TrnContext",fld:"vTRNCONTEXT",pic:"",hsh:!0}],[]];this.EvtParms.VALID_EMISORTRJID=[[],[]];this.EvtParms.VALID_EMISORTRJNOMBRE=[[{av:"A1030EmisorTrjNombre",fld:"EMISORTRJNOMBRE",pic:"@!"}],[{av:"A1030EmisorTrjNombre",fld:"EMISORTRJNOMBRE",pic:"@!"}]];this.EvtParms.VALID_BANCOID=[[{av:"A29BancoId",fld:"BANCOID",pic:"ZZ9"},{av:"A30BancoPersonaCuit",fld:"BANCOPERSONACUIT",pic:"ZZZZZZZZZZZZZZ9"},{av:"A432BancoNombre",fld:"BANCONOMBRE",pic:"@!"},{ctrl:"BANCOESTADO"},{av:"A1042BancoEstado",fld:"BANCOESTADO",pic:"@!"},{av:"A1089BancoPersonaNombre",fld:"BANCOPERSONANOMBRE",pic:"@!"}],[{av:"A432BancoNombre",fld:"BANCONOMBRE",pic:"@!"},{ctrl:"BANCOESTADO"},{av:"A1042BancoEstado",fld:"BANCOESTADO",pic:"@!"},{av:"A30BancoPersonaCuit",fld:"BANCOPERSONACUIT",pic:"ZZZZZZZZZZZZZZ9"},{av:"A1089BancoPersonaNombre",fld:"BANCOPERSONANOMBRE",pic:"@!"}]];this.EvtParms.VALID_EMISORTRJESTADO=[[{ctrl:"EMISORTRJESTADO"},{av:"A1031EmisorTrjEstado",fld:"EMISORTRJESTADO",pic:"@!"}],[{ctrl:"EMISORTRJESTADO"},{av:"A1031EmisorTrjEstado",fld:"EMISORTRJESTADO",pic:"@!"}]];this.EvtParms.VALID_BANCOPERSONACUIT=[[],[]];this.setPrompt("PROMPT_29",[30]);this.EnterCtrl=["BTNTRN_ENTER"];this.setVCMap("AV7EmisorTrjId","vEMISORTRJID",0,"int",4,0);this.setVCMap("AV18Pgmdesc","vPGMDESC",0,"char",30,0);this.setVCMap("AV11Insert_BancoId","vINSERT_BANCOID",0,"int",3,0);this.setVCMap("Gx_BScreen","vGXBSCREEN",0,"int",1,0);this.setVCMap("AV19Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("Gx_mode","vMODE",0,"char",3,0);this.setVCMap("AV9TrnContext","vTRNCONTEXT",0,"WWPBaseObjectsWWPTransactionContext",0,0);this.Initialize()});gx.wi(function(){gx.createParentObj(emisortarjeta)})