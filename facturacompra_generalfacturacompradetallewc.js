/*!   GeneXus C# 16_0_3-132732 on 8/23/2019 11:16:14.92
*/
gx.evt.autoSkip=!1;gx.define("facturacompra_generalfacturacompradetallewc",!0,function(n){var t,r,i;this.ServerClass="facturacompra_generalfacturacompradetallewc";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.setCmpContext(n);this.ReadonlyForm=!0;this.anyGridBaseTable=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV50Pgmname=gx.fn.getControlValue("vPGMNAME");this.AV7FacCpaId=gx.fn.getIntegerValue("vFACCPAID",".");this.AV7FacCpaId=gx.fn.getIntegerValue("vFACCPAID",".");this.AV50Pgmname=gx.fn.getControlValue("vPGMNAME")};this.Valid_Artid=function(){var n=gx.fn.currentGridRowImpl(15);return this.validCliEvt("Valid_Artid",15,function(){try{if(gx.fn.currentGridRowImpl(15)===0)return!0;var n=gx.util.balloon.getNew("ARTID",gx.fn.currentGridRowImpl(15));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Faccpalinpcicostoneto=function(){var n=gx.fn.currentGridRowImpl(15);return this.validCliEvt("Valid_Faccpalinpcicostoneto",15,function(){try{if(gx.fn.currentGridRowImpl(15)===0)return!0;var n=gx.util.balloon.getNew("FACCPALINPCICOSTONETO",gx.fn.currentGridRowImpl(15));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Faccpalinpcicostoiva=function(){var n=gx.fn.currentGridRowImpl(15);return this.validCliEvt("Valid_Faccpalinpcicostoiva",15,function(){try{if(gx.fn.currentGridRowImpl(15)===0)return!0;var n=gx.util.balloon.getNew("FACCPALINPCICOSTOIVA",gx.fn.currentGridRowImpl(15));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Faccpalincnt=function(){var n=gx.fn.currentGridRowImpl(15);return this.validCliEvt("Valid_Faccpalincnt",15,function(){try{if(gx.fn.currentGridRowImpl(15)===0)return!0;var n=gx.util.balloon.getNew("FACCPALINCNT",gx.fn.currentGridRowImpl(15));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e11l52_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEPAGE",!1,null,!0,!0)};this.e12l52_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!1,null,!0,!0)};this.e16l52_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e17l52_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,12,13,14,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,35,36,37,38];this.GXLastCtrlId=38;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",15,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"facturacompra_generalfacturacompradetallewc",[],!1,1,!1,!0,0,!1,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);r=this.GridContainer;r.addSingleLineEdit(78,16,"FACCPALINID","Ide.","","FacCpaLinId","int",0,"px",4,4,"right",null,[],78,"FacCpaLinId",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(8,17,"ARTID","Articulo","","ArtId","int",0,"px",9,9,"right",null,[],8,"ArtId",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(570,18,"FACCPALINDES","Descrip. artículo","","FacCpaLinDes","svchar",0,"px",64,64,"left",null,[],570,"FacCpaLinDes",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(16,19,"ARTNOM","Descripción","","ArtNom","svchar",0,"px",64,64,"left",null,[],16,"ArtNom",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(357,20,"ARTCODFABRICA","Cod Fabrica","","ArtCodFabrica","char",0,"px",20,20,"left",null,[],357,"ArtCodFabrica",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(569,21,"FACCPACODFABRICA","Cod Fabrica","","FacCpaCodFabrica","char",0,"px",20,20,"left",null,[],569,"FacCpaCodFabrica",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addSingleLineEdit(572,22,"FACCPALINIVAPOR","% IVA","","FacCpaLinIVAPor","decimal",0,"px",6,6,"right",null,[],572,"FacCpaLinIVAPor",!1,2,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(573,23,"FACCPALINPCICOSTONETO","$ Costo Neto","","FacCpaLinPciCostoNeto","decimal",0,"px",13,13,"right",null,[],573,"FacCpaLinPciCostoNeto",!1,2,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(574,24,"FACCPALINPCICOSTOIVA","$ Costo IVA","","FacCpaLinPciCostoIVA","decimal",0,"px",13,13,"right",null,[],574,"FacCpaLinPciCostoIVA",!1,2,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(575,25,"FACCPALINPCICOSTO","$ Costo","","FacCpaLinPciCosto","decimal",0,"px",13,13,"right",null,[],575,"FacCpaLinPciCosto",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(571,26,"FACCPALINCNT","Cantidad","","FacCpaLinCnt","int",0,"px",4,4,"right",null,[],571,"FacCpaLinCnt",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(576,27,"FACCPALINIMPNETO","Importe Neto de Línea","","FacCpaLinImpNeto","decimal",0,"px",13,13,"right",null,[],576,"FacCpaLinImpNeto",!1,2,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(577,28,"FACCPALINIMPIVA","Importe IVA de Línea","","FacCpaLinImpIVA","decimal",0,"px",13,13,"right",null,[],577,"FacCpaLinImpIVA",!1,2,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(578,29,"FACCPALINIMPORTE","Importe","","FacCpaLinImporte","decimal",0,"px",13,13,"right",null,[],578,"FacCpaLinImporte",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addComboBox(1991,30,"FACCPALINESTADO","Lin Estado","FacCpaLinEstado","char",null,0,!0,!1,0,"px","WWColumn hidden-xs");this.GridContainer.emptyText="";this.setGrid(r);this.GRIDPAGINATIONBARContainer=gx.uc.getNew(this,34,16,"DVelop_DVPaginationBar",this.CmpContext+"GRIDPAGINATIONBARContainer","Gridpaginationbar","GRIDPAGINATIONBAR");i=this.GRIDPAGINATIONBARContainer;i.setProp("Enabled","Enabled",!0,"boolean");i.setProp("Class","Class","PaginationBar","str");i.setProp("ShowFirst","Showfirst",!1,"bool");i.setProp("ShowPrevious","Showprevious",!0,"bool");i.setProp("ShowNext","Shownext",!0,"bool");i.setProp("ShowLast","Showlast",!1,"bool");i.setProp("PagesToShow","Pagestoshow",5,"num");i.setProp("PagingButtonsPosition","Pagingbuttonsposition","Right","str");i.setProp("PagingCaptionPosition","Pagingcaptionposition","Left","str");i.setProp("EmptyGridClass","Emptygridclass","PaginationBarEmptyGrid","str");i.setProp("SelectedPage","Selectedpage","","char");i.setProp("RowsPerPageSelector","Rowsperpageselector",!0,"bool");i.setDynProp("RowsPerPageSelectedValue","Rowsperpageselectedvalue",10,"num");i.setProp("RowsPerPageOptions","Rowsperpageoptions","5:WWP_Rows5,10:WWP_Rows10,20:WWP_Rows20,50:WWP_Rows50","str");i.setProp("First","First","First","str");i.setProp("Previous","Previous","WWP_PagingPreviousCaption","str");i.setProp("Next","Next","WWP_PagingNextCaption","str");i.setProp("Last","Last","Last","str");i.setProp("Caption","Caption","Página <CURRENT_PAGE> de <TOTAL_PAGES>","str");i.setProp("EmptyGridCaption","Emptygridcaption","WWP_PagingEmptyGridCaption","str");i.setProp("RowsPerPageCaption","Rowsperpagecaption","WWP_PagingRowsPerPage","str");i.addV2CFunction("AV41GridCurrentPage","vGRIDCURRENTPAGE","SetCurrentPage");i.addC2VFunction(function(n){n.ParentObject.AV41GridCurrentPage=n.GetCurrentPage();gx.fn.setControlValue("vGRIDCURRENTPAGE",n.ParentObject.AV41GridCurrentPage)});i.addV2CFunction("AV42GridPageCount","vGRIDPAGECOUNT","SetPageCount");i.addC2VFunction(function(n){n.ParentObject.AV42GridPageCount=n.GetPageCount();gx.fn.setControlValue("vGRIDPAGECOUNT",n.ParentObject.AV42GridPageCount)});i.setProp("RecordCount","Recordcount","","str");i.setProp("Page","Page","","str");i.setProp("Visible","Visible",!0,"bool");i.setC2ShowFunction(function(n){n.show()});i.addEventHandler("ChangePage",this.e11l52_client);i.addEventHandler("ChangeRowsPerPage",this.e12l52_client);this.setUserControl(i);t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"",grid:0};t[6]={id:6,fld:"TABLEGRIDHEADER",grid:0};t[7]={id:7,fld:"",grid:0};t[8]={id:8,fld:"",grid:0};t[10]={id:10,fld:"",grid:0};t[11]={id:11,fld:"",grid:0};t[12]={id:12,fld:"GRIDTABLEWITHPAGINATIONBAR",grid:0};t[13]={id:13,fld:"",grid:0};t[14]={id:14,fld:"",grid:0};t[16]={id:16,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:15,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACCPALINID",gxz:"Z78FacCpaLinId",gxold:"O78FacCpaLinId",gxvar:"A78FacCpaLinId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A78FacCpaLinId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z78FacCpaLinId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("FACCPALINID",n||gx.fn.currentGridRowImpl(15),gx.O.A78FacCpaLinId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A78FacCpaLinId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("FACCPALINID",n||gx.fn.currentGridRowImpl(15),".")},nac:gx.falseFn};t[17]={id:17,lvl:2,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,isacc:0,grid:15,gxgrid:this.GridContainer,fnc:this.Valid_Artid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTID",gxz:"Z8ArtId",gxold:"O8ArtId",gxvar:"A8ArtId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A8ArtId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z8ArtId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("ARTID",n||gx.fn.currentGridRowImpl(15),gx.O.A8ArtId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A8ArtId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("ARTID",n||gx.fn.currentGridRowImpl(15),".")},nac:gx.falseFn};t[18]={id:18,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:15,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACCPALINDES",gxz:"Z570FacCpaLinDes",gxold:"O570FacCpaLinDes",gxvar:"A570FacCpaLinDes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A570FacCpaLinDes=n)},v2z:function(n){n!==undefined&&(gx.O.Z570FacCpaLinDes=n)},v2c:function(n){gx.fn.setGridControlValue("FACCPALINDES",n||gx.fn.currentGridRowImpl(15),gx.O.A570FacCpaLinDes,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A570FacCpaLinDes=this.val(n))},val:function(n){return gx.fn.getGridControlValue("FACCPALINDES",n||gx.fn.currentGridRowImpl(15))},nac:gx.falseFn};t[19]={id:19,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:15,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTNOM",gxz:"Z16ArtNom",gxold:"O16ArtNom",gxvar:"A16ArtNom",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A16ArtNom=n)},v2z:function(n){n!==undefined&&(gx.O.Z16ArtNom=n)},v2c:function(n){gx.fn.setGridControlValue("ARTNOM",n||gx.fn.currentGridRowImpl(15),gx.O.A16ArtNom,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A16ArtNom=this.val(n))},val:function(n){return gx.fn.getGridControlValue("ARTNOM",n||gx.fn.currentGridRowImpl(15))},nac:gx.falseFn};t[20]={id:20,lvl:2,type:"char",len:20,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:15,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTCODFABRICA",gxz:"Z357ArtCodFabrica",gxold:"O357ArtCodFabrica",gxvar:"A357ArtCodFabrica",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A357ArtCodFabrica=n)},v2z:function(n){n!==undefined&&(gx.O.Z357ArtCodFabrica=n)},v2c:function(n){gx.fn.setGridControlValue("ARTCODFABRICA",n||gx.fn.currentGridRowImpl(15),gx.O.A357ArtCodFabrica,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A357ArtCodFabrica=this.val(n))},val:function(n){return gx.fn.getGridControlValue("ARTCODFABRICA",n||gx.fn.currentGridRowImpl(15))},nac:gx.falseFn};t[21]={id:21,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:15,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACCPACODFABRICA",gxz:"Z569FacCpaCodFabrica",gxold:"O569FacCpaCodFabrica",gxvar:"A569FacCpaCodFabrica",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A569FacCpaCodFabrica=n)},v2z:function(n){n!==undefined&&(gx.O.Z569FacCpaCodFabrica=n)},v2c:function(n){gx.fn.setGridControlValue("FACCPACODFABRICA",n||gx.fn.currentGridRowImpl(15),gx.O.A569FacCpaCodFabrica,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A569FacCpaCodFabrica=this.val(n))},val:function(n){return gx.fn.getGridControlValue("FACCPACODFABRICA",n||gx.fn.currentGridRowImpl(15))},nac:gx.falseFn};t[22]={id:22,lvl:2,type:"decimal",len:6,dec:2,sign:!1,pic:"999.99",ro:1,isacc:0,grid:15,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACCPALINIVAPOR",gxz:"Z572FacCpaLinIVAPor",gxold:"O572FacCpaLinIVAPor",gxvar:"A572FacCpaLinIVAPor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A572FacCpaLinIVAPor=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z572FacCpaLinIVAPor=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("FACCPALINIVAPOR",n||gx.fn.currentGridRowImpl(15),gx.O.A572FacCpaLinIVAPor,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A572FacCpaLinIVAPor=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("FACCPALINIVAPOR",n||gx.fn.currentGridRowImpl(15),".",",")},nac:gx.falseFn};t[23]={id:23,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:15,gxgrid:this.GridContainer,fnc:this.Valid_Faccpalinpcicostoneto,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACCPALINPCICOSTONETO",gxz:"Z573FacCpaLinPciCostoNeto",gxold:"O573FacCpaLinPciCostoNeto",gxvar:"A573FacCpaLinPciCostoNeto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A573FacCpaLinPciCostoNeto=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z573FacCpaLinPciCostoNeto=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("FACCPALINPCICOSTONETO",n||gx.fn.currentGridRowImpl(15),gx.O.A573FacCpaLinPciCostoNeto,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A573FacCpaLinPciCostoNeto=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("FACCPALINPCICOSTONETO",n||gx.fn.currentGridRowImpl(15),".",",")},nac:gx.falseFn};t[24]={id:24,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:15,gxgrid:this.GridContainer,fnc:this.Valid_Faccpalinpcicostoiva,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACCPALINPCICOSTOIVA",gxz:"Z574FacCpaLinPciCostoIVA",gxold:"O574FacCpaLinPciCostoIVA",gxvar:"A574FacCpaLinPciCostoIVA",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A574FacCpaLinPciCostoIVA=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z574FacCpaLinPciCostoIVA=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("FACCPALINPCICOSTOIVA",n||gx.fn.currentGridRowImpl(15),gx.O.A574FacCpaLinPciCostoIVA,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A574FacCpaLinPciCostoIVA=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("FACCPALINPCICOSTOIVA",n||gx.fn.currentGridRowImpl(15),".",",")},nac:gx.falseFn};t[25]={id:25,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:15,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACCPALINPCICOSTO",gxz:"Z575FacCpaLinPciCosto",gxold:"O575FacCpaLinPciCosto",gxvar:"A575FacCpaLinPciCosto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A575FacCpaLinPciCosto=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z575FacCpaLinPciCosto=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("FACCPALINPCICOSTO",n||gx.fn.currentGridRowImpl(15),gx.O.A575FacCpaLinPciCosto,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A575FacCpaLinPciCosto=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("FACCPALINPCICOSTO",n||gx.fn.currentGridRowImpl(15),".",",")},nac:gx.falseFn};t[26]={id:26,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:15,gxgrid:this.GridContainer,fnc:this.Valid_Faccpalincnt,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACCPALINCNT",gxz:"Z571FacCpaLinCnt",gxold:"O571FacCpaLinCnt",gxvar:"A571FacCpaLinCnt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A571FacCpaLinCnt=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z571FacCpaLinCnt=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("FACCPALINCNT",n||gx.fn.currentGridRowImpl(15),gx.O.A571FacCpaLinCnt,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A571FacCpaLinCnt=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("FACCPALINCNT",n||gx.fn.currentGridRowImpl(15),".")},nac:gx.falseFn};t[27]={id:27,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:15,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACCPALINIMPNETO",gxz:"Z576FacCpaLinImpNeto",gxold:"O576FacCpaLinImpNeto",gxvar:"A576FacCpaLinImpNeto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A576FacCpaLinImpNeto=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z576FacCpaLinImpNeto=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("FACCPALINIMPNETO",n||gx.fn.currentGridRowImpl(15),gx.O.A576FacCpaLinImpNeto,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A576FacCpaLinImpNeto=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("FACCPALINIMPNETO",n||gx.fn.currentGridRowImpl(15),".",",")},nac:gx.falseFn};t[28]={id:28,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:15,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACCPALINIMPIVA",gxz:"Z577FacCpaLinImpIVA",gxold:"O577FacCpaLinImpIVA",gxvar:"A577FacCpaLinImpIVA",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A577FacCpaLinImpIVA=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z577FacCpaLinImpIVA=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("FACCPALINIMPIVA",n||gx.fn.currentGridRowImpl(15),gx.O.A577FacCpaLinImpIVA,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A577FacCpaLinImpIVA=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("FACCPALINIMPIVA",n||gx.fn.currentGridRowImpl(15),".",",")},nac:gx.falseFn};t[29]={id:29,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:15,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACCPALINIMPORTE",gxz:"Z578FacCpaLinImporte",gxold:"O578FacCpaLinImporte",gxvar:"A578FacCpaLinImporte",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A578FacCpaLinImporte=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z578FacCpaLinImporte=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("FACCPALINIMPORTE",n||gx.fn.currentGridRowImpl(15),gx.O.A578FacCpaLinImporte,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A578FacCpaLinImporte=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("FACCPALINIMPORTE",n||gx.fn.currentGridRowImpl(15),".",",")},nac:gx.falseFn};t[30]={id:30,lvl:2,type:"char",len:3,dec:0,sign:!1,ro:1,isacc:0,grid:15,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACCPALINESTADO",gxz:"Z1991FacCpaLinEstado",gxold:"O1991FacCpaLinEstado",gxvar:"A1991FacCpaLinEstado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A1991FacCpaLinEstado=n)},v2z:function(n){n!==undefined&&(gx.O.Z1991FacCpaLinEstado=n)},v2c:function(n){gx.fn.setGridComboBoxValue("FACCPALINESTADO",n||gx.fn.currentGridRowImpl(15),gx.O.A1991FacCpaLinEstado);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1991FacCpaLinEstado=this.val(n))},val:function(n){return gx.fn.getGridControlValue("FACCPALINESTADO",n||gx.fn.currentGridRowImpl(15))},nac:gx.falseFn};t[31]={id:31,fld:"",grid:0};t[32]={id:32,fld:"",grid:0};t[33]={id:33,fld:"HTML_GRIDPAGINATIONBAR",grid:0};t[35]={id:35,fld:"",grid:0};t[36]={id:36,fld:"",grid:0};t[37]={id:37,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};t[38]={id:38,lvl:0,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACCPAID",gxz:"Z69FacCpaId",gxold:"O69FacCpaId",gxvar:"A69FacCpaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A69FacCpaId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z69FacCpaId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("FACCPAID",gx.O.A69FacCpaId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A69FacCpaId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("FACCPAID",".")},nac:gx.falseFn};this.Z78FacCpaLinId=0;this.O78FacCpaLinId=0;this.Z8ArtId=0;this.O8ArtId=0;this.Z570FacCpaLinDes="";this.O570FacCpaLinDes="";this.Z16ArtNom="";this.O16ArtNom="";this.Z357ArtCodFabrica="";this.O357ArtCodFabrica="";this.Z569FacCpaCodFabrica="";this.O569FacCpaCodFabrica="";this.Z572FacCpaLinIVAPor=0;this.O572FacCpaLinIVAPor=0;this.Z573FacCpaLinPciCostoNeto=0;this.O573FacCpaLinPciCostoNeto=0;this.Z574FacCpaLinPciCostoIVA=0;this.O574FacCpaLinPciCostoIVA=0;this.Z575FacCpaLinPciCosto=0;this.O575FacCpaLinPciCosto=0;this.Z571FacCpaLinCnt=0;this.O571FacCpaLinCnt=0;this.Z576FacCpaLinImpNeto=0;this.O576FacCpaLinImpNeto=0;this.Z577FacCpaLinImpIVA=0;this.O577FacCpaLinImpIVA=0;this.Z578FacCpaLinImporte=0;this.O578FacCpaLinImporte=0;this.Z1991FacCpaLinEstado="";this.O1991FacCpaLinEstado="";this.A69FacCpaId=0;this.Z69FacCpaId=0;this.O69FacCpaId=0;this.AV41GridCurrentPage=0;this.A69FacCpaId=0;this.AV7FacCpaId=0;this.A78FacCpaLinId=0;this.A8ArtId=0;this.A570FacCpaLinDes="";this.A16ArtNom="";this.A357ArtCodFabrica="";this.A569FacCpaCodFabrica="";this.A572FacCpaLinIVAPor=0;this.A573FacCpaLinPciCostoNeto=0;this.A574FacCpaLinPciCostoIVA=0;this.A575FacCpaLinPciCosto=0;this.A571FacCpaLinCnt=0;this.A576FacCpaLinImpNeto=0;this.A577FacCpaLinImpIVA=0;this.A578FacCpaLinImporte=0;this.A1991FacCpaLinEstado="";this.AV50Pgmname="";this.Events={e11l52_client:["GRIDPAGINATIONBAR.CHANGEPAGE",!0],e12l52_client:["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!0],e16l52_client:["ENTER",!0],e17l52_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV7FacCpaId",fld:"vFACCPAID",pic:"ZZZZZZZZ9"},{av:"sPrefix"},{ctrl:"GRID",prop:"Rows"},{av:"AV50Pgmname",fld:"vPGMNAME",pic:""}],[{av:"AV41GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"},{av:"AV42GridPageCount",fld:"vGRIDPAGECOUNT",pic:"ZZZZZZZZZ9"}]];this.EvtParms.START=[[{av:"AV50Pgmname",fld:"vPGMNAME",pic:""},{av:"AV7FacCpaId",fld:"vFACCPAID",pic:"ZZZZZZZZ9"}],[{ctrl:"GRID",prop:"Rows"},{av:'gx.fn.getCtrlProperty("FACCPAID","Visible")',ctrl:"FACCPAID",prop:"Visible"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV7FacCpaId",fld:"vFACCPAID",pic:"ZZZZZZZZ9"},{av:"AV50Pgmname",fld:"vPGMNAME",pic:""},{av:"sPrefix"},{av:"this.GRIDPAGINATIONBARContainer.SelectedPage",ctrl:"GRIDPAGINATIONBAR",prop:"SelectedPage"}],[]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV7FacCpaId",fld:"vFACCPAID",pic:"ZZZZZZZZ9"},{av:"AV50Pgmname",fld:"vPGMNAME",pic:""},{av:"sPrefix"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}],[{ctrl:"GRID",prop:"Rows"}]];this.EvtParms["GRID.LOAD"]=[[],[]];this.EvtParms.VALID_ARTID=[[],[]];this.EvtParms.VALID_FACCPALINPCICOSTONETO=[[],[]];this.EvtParms.VALID_FACCPALINPCICOSTOIVA=[[],[]];this.EvtParms.VALID_FACCPALINCNT=[[],[]];this.setVCMap("AV50Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV7FacCpaId","vFACCPAID",0,"int",9,0);this.setVCMap("AV7FacCpaId","vFACCPAID",0,"int",9,0);this.setVCMap("AV50Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV7FacCpaId","vFACCPAID",0,"int",9,0);this.setVCMap("AV50Pgmname","vPGMNAME",0,"char",129,0);r.addRefreshingVar({rfrVar:"AV7FacCpaId"});r.addRefreshingVar({rfrVar:"AV50Pgmname"});r.addRefreshingParm({rfrVar:"AV7FacCpaId"});r.addRefreshingParm({rfrVar:"AV50Pgmname"});this.Initialize()})