/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:35:28.75
*/
gx.evt.autoSkip=!1;gx.define("facturavtadetallewc",!0,function(n){var t,i;this.ServerClass="facturavtadetallewc";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.setCmpContext(n);this.ReadonlyForm=!0;this.anyGridBaseTable=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV122Pgmname=gx.fn.getControlValue("vPGMNAME");this.AV7FacVtaId=gx.fn.getIntegerValue("vFACVTAID",".");this.AV7FacVtaId=gx.fn.getIntegerValue("vFACVTAID",".");this.AV122Pgmname=gx.fn.getControlValue("vPGMNAME")};this.e14kw2_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e15kw2_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27];this.GXLastCtrlId=27;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",12,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"facturavtadetallewc",[],!1,1,!1,!0,0,!0,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);i=this.GridContainer;i.addSingleLineEdit(222,13,"FACVTADETID","Nº","","FacVtaDetId","int",0,"px",4,4,"right",null,[],222,"FacVtaDetId",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(8,14,"ARTID","Ide.","","ArtId","int",0,"px",9,9,"right",null,[],8,"ArtId",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(1762,15,"FACVTADETDESCRIPCION","Descripción","","FacVtaDetDescripcion","svchar",0,"px",64,64,"left",null,[],1762,"FacVtaDetDescripcion",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");i.addSingleLineEdit(1765,16,"FACVTADETIVAPOR","Ali","","FacVtaDetIVAPor","decimal",0,"px",6,6,"right",null,[],1765,"FacVtaDetIVAPor",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(1764,17,"FACVTADETUNINETO","Neto U","","FacVtaDetUniNeto","decimal",0,"px",13,13,"right",null,[],1764,"FacVtaDetUniNeto",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(1766,18,"FACVTADETUNIIVA","IVA U","","FacVtaDetUniIVA","decimal",0,"px",13,13,"right",null,[],1766,"FacVtaDetUniIVA",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(1767,19,"FACVTADETUNIIMP","Precio","","FacVtaDetUniImp","decimal",0,"px",13,13,"right",null,[],1767,"FacVtaDetUniImp",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(1763,20,"FACVTADETCANTIDAD","Cantidad","","FacVtaDetCantidad","int",0,"px",8,8,"right",null,[],1763,"FacVtaDetCantidad",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(1807,21,"FACVTADETFINALNETO","Neto","","FacVtaDetFinalNeto","decimal",0,"px",13,13,"right",null,[],1807,"FacVtaDetFinalNeto",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn");i.addSingleLineEdit(1808,22,"FACVTADETFINALIVA","IVA","","FacVtaDetFinalIVA","decimal",0,"px",13,13,"right",null,[],1808,"FacVtaDetFinalIVA",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn");i.addSingleLineEdit(1809,23,"FACVTADETFINALIMPORTE","Importe","","FacVtaDetFinalImporte","decimal",0,"px",13,13,"right",null,[],1809,"FacVtaDetFinalImporte",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn");this.GridContainer.emptyText="";this.setGrid(i);t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"",grid:0};t[6]={id:6,fld:"TABLEGRIDHEADER",grid:0};t[7]={id:7,fld:"",grid:0};t[8]={id:8,fld:"",grid:0};t[10]={id:10,fld:"",grid:0};t[11]={id:11,fld:"",grid:0};t[13]={id:13,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:12,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTADETID",gxz:"Z222FacVtaDetId",gxold:"O222FacVtaDetId",gxvar:"A222FacVtaDetId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A222FacVtaDetId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z222FacVtaDetId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("FACVTADETID",n||gx.fn.currentGridRowImpl(12),gx.O.A222FacVtaDetId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A222FacVtaDetId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("FACVTADETID",n||gx.fn.currentGridRowImpl(12),".")},nac:gx.falseFn};t[14]={id:14,lvl:2,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,isacc:0,grid:12,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTID",gxz:"Z8ArtId",gxold:"O8ArtId",gxvar:"A8ArtId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A8ArtId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z8ArtId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("ARTID",n||gx.fn.currentGridRowImpl(12),gx.O.A8ArtId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A8ArtId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("ARTID",n||gx.fn.currentGridRowImpl(12),".")},nac:gx.falseFn};t[15]={id:15,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:12,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTADETDESCRIPCION",gxz:"Z1762FacVtaDetDescripcion",gxold:"O1762FacVtaDetDescripcion",gxvar:"A1762FacVtaDetDescripcion",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A1762FacVtaDetDescripcion=n)},v2z:function(n){n!==undefined&&(gx.O.Z1762FacVtaDetDescripcion=n)},v2c:function(n){gx.fn.setGridControlValue("FACVTADETDESCRIPCION",n||gx.fn.currentGridRowImpl(12),gx.O.A1762FacVtaDetDescripcion,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1762FacVtaDetDescripcion=this.val(n))},val:function(n){return gx.fn.getGridControlValue("FACVTADETDESCRIPCION",n||gx.fn.currentGridRowImpl(12))},nac:gx.falseFn};t[16]={id:16,lvl:2,type:"decimal",len:6,dec:2,sign:!1,pic:"999.99",ro:1,isacc:0,grid:12,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTADETIVAPOR",gxz:"Z1765FacVtaDetIVAPor",gxold:"O1765FacVtaDetIVAPor",gxvar:"A1765FacVtaDetIVAPor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A1765FacVtaDetIVAPor=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z1765FacVtaDetIVAPor=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("FACVTADETIVAPOR",n||gx.fn.currentGridRowImpl(12),gx.O.A1765FacVtaDetIVAPor,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1765FacVtaDetIVAPor=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("FACVTADETIVAPOR",n||gx.fn.currentGridRowImpl(12),".",",")},nac:gx.falseFn};t[17]={id:17,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:12,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTADETUNINETO",gxz:"Z1764FacVtaDetUniNeto",gxold:"O1764FacVtaDetUniNeto",gxvar:"A1764FacVtaDetUniNeto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A1764FacVtaDetUniNeto=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z1764FacVtaDetUniNeto=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("FACVTADETUNINETO",n||gx.fn.currentGridRowImpl(12),gx.O.A1764FacVtaDetUniNeto,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1764FacVtaDetUniNeto=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("FACVTADETUNINETO",n||gx.fn.currentGridRowImpl(12),".",",")},nac:gx.falseFn};t[18]={id:18,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:12,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTADETUNIIVA",gxz:"Z1766FacVtaDetUniIVA",gxold:"O1766FacVtaDetUniIVA",gxvar:"A1766FacVtaDetUniIVA",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A1766FacVtaDetUniIVA=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z1766FacVtaDetUniIVA=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("FACVTADETUNIIVA",n||gx.fn.currentGridRowImpl(12),gx.O.A1766FacVtaDetUniIVA,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1766FacVtaDetUniIVA=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("FACVTADETUNIIVA",n||gx.fn.currentGridRowImpl(12),".",",")},nac:gx.falseFn};t[19]={id:19,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:12,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTADETUNIIMP",gxz:"Z1767FacVtaDetUniImp",gxold:"O1767FacVtaDetUniImp",gxvar:"A1767FacVtaDetUniImp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A1767FacVtaDetUniImp=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z1767FacVtaDetUniImp=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("FACVTADETUNIIMP",n||gx.fn.currentGridRowImpl(12),gx.O.A1767FacVtaDetUniImp,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1767FacVtaDetUniImp=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("FACVTADETUNIIMP",n||gx.fn.currentGridRowImpl(12),".",",")},nac:gx.falseFn};t[20]={id:20,lvl:2,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:12,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTADETCANTIDAD",gxz:"Z1763FacVtaDetCantidad",gxold:"O1763FacVtaDetCantidad",gxvar:"A1763FacVtaDetCantidad",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A1763FacVtaDetCantidad=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z1763FacVtaDetCantidad=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("FACVTADETCANTIDAD",n||gx.fn.currentGridRowImpl(12),gx.O.A1763FacVtaDetCantidad,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1763FacVtaDetCantidad=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("FACVTADETCANTIDAD",n||gx.fn.currentGridRowImpl(12),".")},nac:gx.falseFn};t[21]={id:21,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:12,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTADETFINALNETO",gxz:"Z1807FacVtaDetFinalNeto",gxold:"O1807FacVtaDetFinalNeto",gxvar:"A1807FacVtaDetFinalNeto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A1807FacVtaDetFinalNeto=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z1807FacVtaDetFinalNeto=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("FACVTADETFINALNETO",n||gx.fn.currentGridRowImpl(12),gx.O.A1807FacVtaDetFinalNeto,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1807FacVtaDetFinalNeto=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("FACVTADETFINALNETO",n||gx.fn.currentGridRowImpl(12),".",",")},nac:gx.falseFn};t[22]={id:22,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:12,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTADETFINALIVA",gxz:"Z1808FacVtaDetFinalIVA",gxold:"O1808FacVtaDetFinalIVA",gxvar:"A1808FacVtaDetFinalIVA",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A1808FacVtaDetFinalIVA=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z1808FacVtaDetFinalIVA=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("FACVTADETFINALIVA",n||gx.fn.currentGridRowImpl(12),gx.O.A1808FacVtaDetFinalIVA,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1808FacVtaDetFinalIVA=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("FACVTADETFINALIVA",n||gx.fn.currentGridRowImpl(12),".",",")},nac:gx.falseFn};t[23]={id:23,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:12,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTADETFINALIMPORTE",gxz:"Z1809FacVtaDetFinalImporte",gxold:"O1809FacVtaDetFinalImporte",gxvar:"A1809FacVtaDetFinalImporte",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A1809FacVtaDetFinalImporte=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z1809FacVtaDetFinalImporte=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("FACVTADETFINALIMPORTE",n||gx.fn.currentGridRowImpl(12),gx.O.A1809FacVtaDetFinalImporte,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1809FacVtaDetFinalImporte=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("FACVTADETFINALIMPORTE",n||gx.fn.currentGridRowImpl(12),".",",")},nac:gx.falseFn};t[24]={id:24,fld:"",grid:0};t[25]={id:25,fld:"",grid:0};t[26]={id:26,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};t[27]={id:27,lvl:0,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTAID",gxz:"Z218FacVtaId",gxold:"O218FacVtaId",gxvar:"A218FacVtaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A218FacVtaId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z218FacVtaId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("FACVTAID",gx.O.A218FacVtaId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A218FacVtaId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("FACVTAID",".")},nac:gx.falseFn};this.Z222FacVtaDetId=0;this.O222FacVtaDetId=0;this.Z8ArtId=0;this.O8ArtId=0;this.Z1762FacVtaDetDescripcion="";this.O1762FacVtaDetDescripcion="";this.Z1765FacVtaDetIVAPor=0;this.O1765FacVtaDetIVAPor=0;this.Z1764FacVtaDetUniNeto=0;this.O1764FacVtaDetUniNeto=0;this.Z1766FacVtaDetUniIVA=0;this.O1766FacVtaDetUniIVA=0;this.Z1767FacVtaDetUniImp=0;this.O1767FacVtaDetUniImp=0;this.Z1763FacVtaDetCantidad=0;this.O1763FacVtaDetCantidad=0;this.Z1807FacVtaDetFinalNeto=0;this.O1807FacVtaDetFinalNeto=0;this.Z1808FacVtaDetFinalIVA=0;this.O1808FacVtaDetFinalIVA=0;this.Z1809FacVtaDetFinalImporte=0;this.O1809FacVtaDetFinalImporte=0;this.A218FacVtaId=0;this.Z218FacVtaId=0;this.O218FacVtaId=0;this.A218FacVtaId=0;this.AV7FacVtaId=0;this.A222FacVtaDetId=0;this.A8ArtId=0;this.A1762FacVtaDetDescripcion="";this.A1765FacVtaDetIVAPor=0;this.A1764FacVtaDetUniNeto=0;this.A1766FacVtaDetUniIVA=0;this.A1767FacVtaDetUniImp=0;this.A1763FacVtaDetCantidad=0;this.A1807FacVtaDetFinalNeto=0;this.A1808FacVtaDetFinalIVA=0;this.A1809FacVtaDetFinalImporte=0;this.AV122Pgmname="";this.Events={e14kw2_client:["ENTER",!0],e15kw2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV7FacVtaId",fld:"vFACVTAID",pic:"ZZZZZZZZ9"},{av:"sPrefix"},{ctrl:"GRID",prop:"Rows"},{av:"AV122Pgmname",fld:"vPGMNAME",pic:"",hsh:!0}],[]];this.EvtParms.START=[[{av:"AV122Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV7FacVtaId",fld:"vFACVTAID",pic:"ZZZZZZZZ9"}],[{ctrl:"GRID",prop:"Rows"},{av:'gx.fn.getCtrlProperty("FACVTAID","Visible")',ctrl:"FACVTAID",prop:"Visible"}]];this.EvtParms["GRID.LOAD"]=[[],[]];this.EvtParms.GRID_FIRSTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV7FacVtaId",fld:"vFACVTAID",pic:"ZZZZZZZZ9"},{av:"sPrefix"},{av:"AV122Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{ctrl:"GRID",prop:"Rows"}],[]];this.EvtParms.GRID_PREVPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV7FacVtaId",fld:"vFACVTAID",pic:"ZZZZZZZZ9"},{av:"sPrefix"},{av:"AV122Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{ctrl:"GRID",prop:"Rows"}],[]];this.EvtParms.GRID_NEXTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV7FacVtaId",fld:"vFACVTAID",pic:"ZZZZZZZZ9"},{av:"sPrefix"},{av:"AV122Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{ctrl:"GRID",prop:"Rows"}],[]];this.EvtParms.GRID_LASTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV7FacVtaId",fld:"vFACVTAID",pic:"ZZZZZZZZ9"},{av:"sPrefix"},{av:"AV122Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{ctrl:"GRID",prop:"Rows"}],[]];this.setVCMap("AV122Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV7FacVtaId","vFACVTAID",0,"int",9,0);this.setVCMap("AV7FacVtaId","vFACVTAID",0,"int",9,0);this.setVCMap("AV122Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV7FacVtaId","vFACVTAID",0,"int",9,0);this.setVCMap("AV122Pgmname","vPGMNAME",0,"char",129,0);i.addRefreshingVar({rfrVar:"AV7FacVtaId"});i.addRefreshingVar({rfrVar:"AV122Pgmname"});i.addRefreshingParm({rfrVar:"AV7FacVtaId"});i.addRefreshingParm({rfrVar:"AV122Pgmname"});this.Initialize()})