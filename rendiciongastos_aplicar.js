/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:54:30.77
*/
gx.evt.autoSkip=!1;gx.define("rendiciongastos_aplicar",!1,function(){var n,i,t;this.ServerClass="rendiciongastos_aplicar";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.A36CajaComprobanteId=gx.fn.getIntegerValue("CAJACOMPROBANTEID",".");this.A464CajaComprobanteImporte=gx.fn.getDecimalValue("CAJACOMPROBANTEIMPORTE",".",",");this.A2726CajaComprobanteSaldo=gx.fn.getDecimalValue("CAJACOMPROBANTESALDO",".",",");this.A2721CajaComprobanteEstado=gx.fn.getControlValue("CAJACOMPROBANTEESTADO");this.A37ComprobanteTipoId=gx.fn.getIntegerValue("COMPROBANTETIPOID",".");this.A460CajaComprobanteFecha=gx.fn.getDateValue("CAJACOMPROBANTEFECHA");this.A463CajaComprobanteObs=gx.fn.getControlValue("CAJACOMPROBANTEOBS");this.AV31OrdPgoId=gx.fn.getIntegerValue("vORDPGOID",".");this.AV33SaldoRendGastos=gx.fn.getDecimalValue("vSALDORENDGASTOS",".",",");this.A2721CajaComprobanteEstado=gx.fn.getControlValue("CAJACOMPROBANTEESTADO");this.A37ComprobanteTipoId=gx.fn.getIntegerValue("COMPROBANTETIPOID",".");this.A460CajaComprobanteFecha=gx.fn.getDateValue("CAJACOMPROBANTEFECHA");this.A463CajaComprobanteObs=gx.fn.getControlValue("CAJACOMPROBANTEOBS");this.AV31OrdPgoId=gx.fn.getIntegerValue("vORDPGOID",".")};this.Validv_Cajacomprobantefecha=function(){var n=gx.fn.currentGridRowImpl(21);return this.validCliEvt("Validv_Cajacomprobantefecha",21,function(){try{var n=gx.util.balloon.getNew("vCAJACOMPROBANTEFECHA");if(this.AnyError=0,!(new gx.date.gxdate("").compare(this.AV25CajaComprobanteFecha)==0||new gx.date.gxdate(this.AV25CajaComprobanteFecha).compare(gx.date.ymdtod(1753,01,01))>=0))try{n.setError("Campo Caja Comprobante Fecha fuera de rango");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Validv_Cajacomprobanteestado=function(){var n=gx.fn.currentGridRowImpl(21);return this.validCliEvt("Validv_Cajacomprobanteestado",21,function(){try{var n=gx.util.balloon.getNew("vCAJACOMPROBANTEESTADO");if(this.AnyError=0,!(this.AV30CajaComprobanteEstado=="PEN"||this.AV30CajaComprobanteEstado=="CON"||this.AV30CajaComprobanteEstado=="ANU"||this.AV30CajaComprobanteEstado=="REN"||this.AV30CajaComprobanteEstado=="AUT"||this.AV30CajaComprobanteEstado=="RZD"||this.AV30CajaComprobanteEstado=="ELI"))try{n.setError("Campo Caja Comprobante Estado fuera de rango");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e11le2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEPAGE",!1,null,!0,!0)};this.e12le2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!1,null,!0,!0)};this.e16le2_client=function(){return this.executeServerEvent("VAPLICARSALDO.CLICK",!0,arguments[0],!1,!1)};this.e17le2_client=function(){return this.executeServerEvent("VCAJACOMPROBANTEOBS.CLICK",!0,arguments[0],!1,!1)};this.e18le2_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e19le2_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,13,14,15,16,17,18,19,20,22,23,24,25,26,27,28,29,30,31,32,34,35,36,37,38];this.GXLastCtrlId=38;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",21,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"rendiciongastos_aplicar",[],!1,1,!1,!0,0,!1,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);i=this.GridContainer;i.addSingleLineEdit("Cajacomprobanteid",22,"vCAJACOMPROBANTEID","Comp. Id.","","CajaComprobanteId","int",0,"px",8,8,"right",null,[],"Cajacomprobanteid","CajaComprobanteId",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");i.addSingleLineEdit("Cajacomprobantefecha",23,"vCAJACOMPROBANTEFECHA","Fecha","","CajaComprobanteFecha","date",0,"px",8,8,"right",null,[],"Cajacomprobantefecha","CajaComprobanteFecha",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");i.addSingleLineEdit("Cajacomprobanteobs",24,"vCAJACOMPROBANTEOBS","Observaciones","","CajaComprobanteObs","svchar",0,"px",256,80,"left","e17le2_client",[],"Cajacomprobanteobs","CajaComprobanteObs",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");i.addSingleLineEdit("Comprobantetipoid",25,"vCOMPROBANTETIPOID","Tipo Comprobante","","ComprobanteTipoId","int",0,"px",4,4,"right",null,[],"Comprobantetipoid","ComprobanteTipoId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn");i.addSingleLineEdit("Cajacomprobanteimporte",26,"vCAJACOMPROBANTEIMPORTE","Importe","","CajaComprobanteImporte","decimal",0,"px",13,13,"right",null,[],"Cajacomprobanteimporte","CajaComprobanteImporte",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn");i.addSingleLineEdit("Cajacomprobantesaldo",27,"vCAJACOMPROBANTESALDO","Pendiente","","CajaComprobanteSaldo","decimal",0,"px",13,13,"right",null,[],"Cajacomprobantesaldo","CajaComprobanteSaldo",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn");i.addComboBox("Cajacomprobanteestado",28,"vCAJACOMPROBANTEESTADO","Estado","CajaComprobanteEstado","char",null,0,!1,!1,0,"px","WWColumn");i.addSingleLineEdit("Importeaplicar",29,"vIMPORTEAPLICAR","Aplicar","","ImporteAplicar","decimal",0,"px",13,13,"right",null,[],"Importeaplicar","ImporteAplicar",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn");i.addBitmap("&Aplicarsaldo","vAPLICARSALDO",30,0,"px",17,"px","e16le2_client","","","ActionBaseColorAttribute","WWActionColumn");this.GridContainer.emptyText="";this.setGrid(i);this.GRIDPAGINATIONBARContainer=gx.uc.getNew(this,33,22,"DVelop_DVPaginationBar","GRIDPAGINATIONBARContainer","Gridpaginationbar","GRIDPAGINATIONBAR");t=this.GRIDPAGINATIONBARContainer;t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("Class","Class","PaginationBar","str");t.setProp("ShowFirst","Showfirst",!1,"bool");t.setProp("ShowPrevious","Showprevious",!0,"bool");t.setProp("ShowNext","Shownext",!0,"bool");t.setProp("ShowLast","Showlast",!1,"bool");t.setProp("PagesToShow","Pagestoshow",5,"num");t.setProp("PagingButtonsPosition","Pagingbuttonsposition","Right","str");t.setProp("PagingCaptionPosition","Pagingcaptionposition","Left","str");t.setProp("EmptyGridClass","Emptygridclass","PaginationBarEmptyGrid","str");t.setProp("SelectedPage","Selectedpage","","char");t.setProp("RowsPerPageSelector","Rowsperpageselector",!0,"bool");t.setDynProp("RowsPerPageSelectedValue","Rowsperpageselectedvalue",10,"num");t.setProp("RowsPerPageOptions","Rowsperpageoptions","5:WWP_Rows5,10:WWP_Rows10,20:WWP_Rows20,50:WWP_Rows50","str");t.setProp("First","First","First","str");t.setProp("Previous","Previous","WWP_PagingPreviousCaption","str");t.setProp("Next","Next","WWP_PagingNextCaption","str");t.setProp("Last","Last","Last","str");t.setProp("Caption","Caption","Página <CURRENT_PAGE> de <TOTAL_PAGES>","str");t.setProp("EmptyGridCaption","Emptygridcaption","WWP_PagingEmptyGridCaption","str");t.setProp("RowsPerPageCaption","Rowsperpagecaption","WWP_PagingRowsPerPage","str");t.addV2CFunction("AV13GridCurrentPage","vGRIDCURRENTPAGE","SetCurrentPage");t.addC2VFunction(function(t){t.ParentObject.AV13GridCurrentPage=t.GetCurrentPage();n[37].c2v()});t.addV2CFunction("AV14GridPageCount","vGRIDPAGECOUNT","SetPageCount");t.addC2VFunction(function(n){n.ParentObject.AV14GridPageCount=n.GetPageCount();gx.fn.setControlValue("vGRIDPAGECOUNT",n.ParentObject.AV14GridPageCount)});t.setProp("RecordCount","Recordcount","","str");t.setProp("Page","Page","","str");t.setProp("Visible","Visible",!0,"bool");t.setC2ShowFunction(function(n){n.show()});t.addEventHandler("ChangePage",this.e11le2_client);t.addEventHandler("ChangeRowsPerPage",this.e12le2_client);this.setUserControl(t);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLEMAIN",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[9]={id:9,fld:"TEXTBLOCKTITLE",format:0,grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"",grid:0};n[15]={id:15,fld:"TABLECONTENT",grid:0};n[16]={id:16,fld:"",grid:0};n[17]={id:17,fld:"",grid:0};n[18]={id:18,fld:"GRIDTABLEWITHPAGINATIONBAR",grid:0};n[19]={id:19,fld:"",grid:0};n[20]={id:20,fld:"",grid:0};n[22]={id:22,lvl:2,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:0,isacc:0,grid:21,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCAJACOMPROBANTEID",gxz:"ZV24CajaComprobanteId",gxold:"OV24CajaComprobanteId",gxvar:"AV24CajaComprobanteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.AV24CajaComprobanteId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV24CajaComprobanteId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("vCAJACOMPROBANTEID",n||gx.fn.currentGridRowImpl(21),gx.O.AV24CajaComprobanteId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV24CajaComprobanteId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("vCAJACOMPROBANTEID",n||gx.fn.currentGridRowImpl(21),".")},nac:gx.falseFn};n[23]={id:23,lvl:2,type:"date",len:8,dec:0,sign:!1,ro:0,isacc:0,grid:21,gxgrid:this.GridContainer,fnc:this.Validv_Cajacomprobantefecha,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCAJACOMPROBANTEFECHA",gxz:"ZV25CajaComprobanteFecha",gxold:"OV25CajaComprobanteFecha",gxvar:"AV25CajaComprobanteFecha",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/99",dec:0},ucs:[],op:[23],ip:[23],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.AV25CajaComprobanteFecha=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.ZV25CajaComprobanteFecha=gx.fn.toDatetimeValue(n))},v2c:function(n){gx.fn.setGridControlValue("vCAJACOMPROBANTEFECHA",n||gx.fn.currentGridRowImpl(21),gx.O.AV25CajaComprobanteFecha,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV25CajaComprobanteFecha=gx.fn.toDatetimeValue(this.val(n)))},val:function(n){return gx.fn.getGridDateTimeValue("vCAJACOMPROBANTEFECHA",n||gx.fn.currentGridRowImpl(21))},nac:gx.falseFn};n[24]={id:24,lvl:2,type:"svchar",len:256,dec:0,sign:!1,ro:0,isacc:0,grid:21,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCAJACOMPROBANTEOBS",gxz:"ZV26CajaComprobanteObs",gxold:"OV26CajaComprobanteObs",gxvar:"AV26CajaComprobanteObs",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV26CajaComprobanteObs=n)},v2z:function(n){n!==undefined&&(gx.O.ZV26CajaComprobanteObs=n)},v2c:function(n){gx.fn.setGridControlValue("vCAJACOMPROBANTEOBS",n||gx.fn.currentGridRowImpl(21),gx.O.AV26CajaComprobanteObs,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV26CajaComprobanteObs=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vCAJACOMPROBANTEOBS",n||gx.fn.currentGridRowImpl(21))},nac:gx.falseFn,evt:"e17le2_client"};n[25]={id:25,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,isacc:0,grid:21,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCOMPROBANTETIPOID",gxz:"ZV27ComprobanteTipoId",gxold:"OV27ComprobanteTipoId",gxvar:"AV27ComprobanteTipoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.AV27ComprobanteTipoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV27ComprobanteTipoId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("vCOMPROBANTETIPOID",n||gx.fn.currentGridRowImpl(21),gx.O.AV27ComprobanteTipoId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV27ComprobanteTipoId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("vCOMPROBANTETIPOID",n||gx.fn.currentGridRowImpl(21),".")},nac:gx.falseFn};n[26]={id:26,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:0,isacc:0,grid:21,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCAJACOMPROBANTEIMPORTE",gxz:"ZV28CajaComprobanteImporte",gxold:"OV28CajaComprobanteImporte",gxvar:"AV28CajaComprobanteImporte",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.AV28CajaComprobanteImporte=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.ZV28CajaComprobanteImporte=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("vCAJACOMPROBANTEIMPORTE",n||gx.fn.currentGridRowImpl(21),gx.O.AV28CajaComprobanteImporte,2,",")},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV28CajaComprobanteImporte=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("vCAJACOMPROBANTEIMPORTE",n||gx.fn.currentGridRowImpl(21),".",",")},nac:gx.falseFn};n[27]={id:27,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:0,isacc:0,grid:21,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCAJACOMPROBANTESALDO",gxz:"ZV29CajaComprobanteSaldo",gxold:"OV29CajaComprobanteSaldo",gxvar:"AV29CajaComprobanteSaldo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.AV29CajaComprobanteSaldo=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.ZV29CajaComprobanteSaldo=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("vCAJACOMPROBANTESALDO",n||gx.fn.currentGridRowImpl(21),gx.O.AV29CajaComprobanteSaldo,2,",")},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV29CajaComprobanteSaldo=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("vCAJACOMPROBANTESALDO",n||gx.fn.currentGridRowImpl(21),".",",")},nac:gx.falseFn};n[28]={id:28,lvl:2,type:"char",len:3,dec:0,sign:!1,ro:0,isacc:0,grid:21,gxgrid:this.GridContainer,fnc:this.Validv_Cajacomprobanteestado,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCAJACOMPROBANTEESTADO",gxz:"ZV30CajaComprobanteEstado",gxold:"OV30CajaComprobanteEstado",gxvar:"AV30CajaComprobanteEstado",ucs:[],op:[28],ip:[28],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.AV30CajaComprobanteEstado=n)},v2z:function(n){n!==undefined&&(gx.O.ZV30CajaComprobanteEstado=n)},v2c:function(n){gx.fn.setGridComboBoxValue("vCAJACOMPROBANTEESTADO",n||gx.fn.currentGridRowImpl(21),gx.O.AV30CajaComprobanteEstado)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV30CajaComprobanteEstado=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vCAJACOMPROBANTEESTADO",n||gx.fn.currentGridRowImpl(21))},nac:gx.falseFn};n[29]={id:29,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:0,isacc:0,grid:21,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vIMPORTEAPLICAR",gxz:"ZV11ImporteAplicar",gxold:"OV11ImporteAplicar",gxvar:"AV11ImporteAplicar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.AV11ImporteAplicar=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.ZV11ImporteAplicar=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("vIMPORTEAPLICAR",n||gx.fn.currentGridRowImpl(21),gx.O.AV11ImporteAplicar,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV11ImporteAplicar=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("vIMPORTEAPLICAR",n||gx.fn.currentGridRowImpl(21),".",",")},nac:gx.falseFn};n[30]={id:30,lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:21,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vAPLICARSALDO",gxz:"ZV15AplicarSaldo",gxold:"OV15AplicarSaldo",gxvar:"AV15AplicarSaldo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.AV15AplicarSaldo=n)},v2z:function(n){n!==undefined&&(gx.O.ZV15AplicarSaldo=n)},v2c:function(n){gx.fn.setGridMultimediaValue("vAPLICARSALDO",n||gx.fn.currentGridRowImpl(21),gx.O.AV15AplicarSaldo,gx.O.AV38Aplicarsaldo_GXI)},c2v:function(n){gx.O.AV38Aplicarsaldo_GXI=this.val_GXI();this.val(n)!==undefined&&(gx.O.AV15AplicarSaldo=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vAPLICARSALDO",n||gx.fn.currentGridRowImpl(21))},val_GXI:function(n){return gx.fn.getGridControlValue("vAPLICARSALDO_GXI",n||gx.fn.currentGridRowImpl(21))},gxvar_GXI:"AV38Aplicarsaldo_GXI",nac:gx.falseFn,evt:"e16le2_client"};n[31]={id:31,fld:"",grid:0};n[32]={id:32,fld:"",grid:0};n[34]={id:34,fld:"",grid:0};n[35]={id:35,fld:"",grid:0};n[36]={id:36,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};n[37]={id:37,lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vGRIDCURRENTPAGE",gxz:"ZV13GridCurrentPage",gxold:"OV13GridCurrentPage",gxvar:"AV13GridCurrentPage",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV13GridCurrentPage=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV13GridCurrentPage=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("vGRIDCURRENTPAGE",gx.O.AV13GridCurrentPage,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV13GridCurrentPage=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vGRIDCURRENTPAGE",".")},nac:gx.falseFn};n[38]={id:38,lvl:0,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vSALDOSDOFAV",gxz:"ZV22SaldoSdoFav",gxold:"OV22SaldoSdoFav",gxvar:"AV22SaldoSdoFav",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV22SaldoSdoFav=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.ZV22SaldoSdoFav=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("vSALDOSDOFAV",gx.O.AV22SaldoSdoFav,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.AV22SaldoSdoFav=this.val())},val:function(){return gx.fn.getDecimalValue("vSALDOSDOFAV",".",",")},nac:gx.falseFn};this.declareDomainHdlr(38,function(){});this.ZV24CajaComprobanteId=0;this.OV24CajaComprobanteId=0;this.ZV25CajaComprobanteFecha=gx.date.nullDate();this.OV25CajaComprobanteFecha=gx.date.nullDate();this.ZV26CajaComprobanteObs="";this.OV26CajaComprobanteObs="";this.ZV27ComprobanteTipoId=0;this.OV27ComprobanteTipoId=0;this.ZV28CajaComprobanteImporte=0;this.OV28CajaComprobanteImporte=0;this.ZV29CajaComprobanteSaldo=0;this.OV29CajaComprobanteSaldo=0;this.ZV30CajaComprobanteEstado="";this.OV30CajaComprobanteEstado="";this.ZV11ImporteAplicar=0;this.OV11ImporteAplicar=0;this.ZV15AplicarSaldo="";this.OV15AplicarSaldo="";this.AV13GridCurrentPage=0;this.ZV13GridCurrentPage=0;this.OV13GridCurrentPage=0;this.AV22SaldoSdoFav=0;this.ZV22SaldoSdoFav=0;this.OV22SaldoSdoFav=0;this.AV13GridCurrentPage=0;this.AV22SaldoSdoFav=0;this.AV31OrdPgoId=0;this.AV33SaldoRendGastos=0;this.AV24CajaComprobanteId=0;this.AV25CajaComprobanteFecha=gx.date.nullDate();this.AV26CajaComprobanteObs="";this.AV27ComprobanteTipoId=0;this.AV28CajaComprobanteImporte=0;this.AV29CajaComprobanteSaldo=0;this.AV30CajaComprobanteEstado="";this.AV11ImporteAplicar=0;this.AV15AplicarSaldo="";this.A37ComprobanteTipoId=0;this.A2721CajaComprobanteEstado="";this.A460CajaComprobanteFecha=gx.date.nullDate();this.A463CajaComprobanteObs="";this.A464CajaComprobanteImporte=0;this.A36CajaComprobanteId=0;this.A2726CajaComprobanteSaldo=0;this.Events={e11le2_client:["GRIDPAGINATIONBAR.CHANGEPAGE",!0],e12le2_client:["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!0],e16le2_client:["VAPLICARSALDO.CLICK",!0],e17le2_client:["VCAJACOMPROBANTEOBS.CLICK",!0],e18le2_client:["ENTER",!0],e19le2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"A2726CajaComprobanteSaldo",fld:"CAJACOMPROBANTESALDO",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A2721CajaComprobanteEstado",fld:"CAJACOMPROBANTEESTADO",pic:""},{av:"A37ComprobanteTipoId",fld:"COMPROBANTETIPOID",pic:"ZZZ9"},{av:"A36CajaComprobanteId",fld:"CAJACOMPROBANTEID",pic:"ZZZZZZZ9"},{av:"A460CajaComprobanteFecha",fld:"CAJACOMPROBANTEFECHA",pic:""},{av:"A463CajaComprobanteObs",fld:"CAJACOMPROBANTEOBS",pic:""},{av:"A464CajaComprobanteImporte",fld:"CAJACOMPROBANTEIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"AV31OrdPgoId",fld:"vORDPGOID",pic:"ZZZZZZZZ9",hsh:!0},{av:"AV33SaldoRendGastos",fld:"vSALDORENDGASTOS",pic:"ZZ,ZZZ,ZZ9.99",hsh:!0}],[]];this.EvtParms.START=[[{av:"AV33SaldoRendGastos",fld:"vSALDORENDGASTOS",pic:"ZZ,ZZZ,ZZ9.99",hsh:!0}],[{av:'gx.fn.getCtrlProperty("vSALDOSDOFAV","Visible")',ctrl:"vSALDOSDOFAV",prop:"Visible"},{ctrl:"GRID",prop:"Rows"},{av:"AV13GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"},{av:"this.GRIDPAGINATIONBARContainer.Visible",ctrl:"vGRIDCURRENTPAGE",prop:"Visible"},{av:"AV14GridPageCount",fld:"vGRIDPAGECOUNT",pic:"ZZZZZZZZZ9"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"},{av:'gx.fn.getCtrlProperty("TEXTBLOCKTITLE","Caption")',ctrl:"TEXTBLOCKTITLE",prop:"Caption"}]];this.EvtParms["GRID.LOAD"]=[[{av:"A2726CajaComprobanteSaldo",fld:"CAJACOMPROBANTESALDO",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A2721CajaComprobanteEstado",fld:"CAJACOMPROBANTEESTADO",pic:""},{av:"A37ComprobanteTipoId",fld:"COMPROBANTETIPOID",pic:"ZZZ9"},{av:"A36CajaComprobanteId",fld:"CAJACOMPROBANTEID",pic:"ZZZZZZZ9"},{av:"A460CajaComprobanteFecha",fld:"CAJACOMPROBANTEFECHA",pic:""},{av:"A463CajaComprobanteObs",fld:"CAJACOMPROBANTEOBS",pic:""},{av:"A464CajaComprobanteImporte",fld:"CAJACOMPROBANTEIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"AV31OrdPgoId",fld:"vORDPGOID",pic:"ZZZZZZZZ9",hsh:!0}],[{av:"AV15AplicarSaldo",fld:"vAPLICARSALDO",pic:""},{av:'gx.fn.getCtrlProperty("vAPLICARSALDO","Tooltiptext")',ctrl:"vAPLICARSALDO",prop:"Tooltiptext"},{av:"AV24CajaComprobanteId",fld:"vCAJACOMPROBANTEID",pic:"ZZZZZZZ9"},{av:"AV25CajaComprobanteFecha",fld:"vCAJACOMPROBANTEFECHA",pic:""},{av:"AV26CajaComprobanteObs",fld:"vCAJACOMPROBANTEOBS",pic:""},{av:"AV28CajaComprobanteImporte",fld:"vCAJACOMPROBANTEIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"AV29CajaComprobanteSaldo",fld:"vCAJACOMPROBANTESALDO",pic:"ZZ,ZZZ,ZZ9.99"}]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"A2726CajaComprobanteSaldo",fld:"CAJACOMPROBANTESALDO",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A2721CajaComprobanteEstado",fld:"CAJACOMPROBANTEESTADO",pic:""},{av:"A37ComprobanteTipoId",fld:"COMPROBANTETIPOID",pic:"ZZZ9"},{av:"A36CajaComprobanteId",fld:"CAJACOMPROBANTEID",pic:"ZZZZZZZ9"},{av:"A460CajaComprobanteFecha",fld:"CAJACOMPROBANTEFECHA",pic:""},{av:"A463CajaComprobanteObs",fld:"CAJACOMPROBANTEOBS",pic:""},{av:"A464CajaComprobanteImporte",fld:"CAJACOMPROBANTEIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"AV31OrdPgoId",fld:"vORDPGOID",pic:"ZZZZZZZZ9",hsh:!0},{av:"AV33SaldoRendGastos",fld:"vSALDORENDGASTOS",pic:"ZZ,ZZZ,ZZ9.99",hsh:!0},{av:"this.GRIDPAGINATIONBARContainer.SelectedPage",ctrl:"GRIDPAGINATIONBAR",prop:"SelectedPage"},{av:"AV13GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"}],[{av:"AV13GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"}]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"A2726CajaComprobanteSaldo",fld:"CAJACOMPROBANTESALDO",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A2721CajaComprobanteEstado",fld:"CAJACOMPROBANTEESTADO",pic:""},{av:"A37ComprobanteTipoId",fld:"COMPROBANTETIPOID",pic:"ZZZ9"},{av:"A36CajaComprobanteId",fld:"CAJACOMPROBANTEID",pic:"ZZZZZZZ9"},{av:"A460CajaComprobanteFecha",fld:"CAJACOMPROBANTEFECHA",pic:""},{av:"A463CajaComprobanteObs",fld:"CAJACOMPROBANTEOBS",pic:""},{av:"A464CajaComprobanteImporte",fld:"CAJACOMPROBANTEIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"AV31OrdPgoId",fld:"vORDPGOID",pic:"ZZZZZZZZ9",hsh:!0},{av:"AV33SaldoRendGastos",fld:"vSALDORENDGASTOS",pic:"ZZ,ZZZ,ZZ9.99",hsh:!0},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}],[{ctrl:"GRID",prop:"Rows"},{av:"AV13GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"}]];this.EvtParms["VAPLICARSALDO.CLICK"]=[[{av:"AV11ImporteAplicar",fld:"vIMPORTEAPLICAR",pic:"ZZ,ZZZ,ZZ9.99"},{av:"AV29CajaComprobanteSaldo",fld:"vCAJACOMPROBANTESALDO",pic:"ZZ,ZZZ,ZZ9.99"},{av:"AV33SaldoRendGastos",fld:"vSALDORENDGASTOS",pic:"ZZ,ZZZ,ZZ9.99",hsh:!0},{av:"AV31OrdPgoId",fld:"vORDPGOID",pic:"ZZZZZZZZ9",hsh:!0},{av:"AV24CajaComprobanteId",fld:"vCAJACOMPROBANTEID",pic:"ZZZZZZZ9"}],[]];this.EvtParms["VCAJACOMPROBANTEOBS.CLICK"]=[[{av:"AV29CajaComprobanteSaldo",fld:"vCAJACOMPROBANTESALDO",pic:"ZZ,ZZZ,ZZ9.99"},{av:"AV33SaldoRendGastos",fld:"vSALDORENDGASTOS",pic:"ZZ,ZZZ,ZZ9.99",hsh:!0},{av:"AV31OrdPgoId",fld:"vORDPGOID",pic:"ZZZZZZZZ9",hsh:!0},{av:"AV24CajaComprobanteId",fld:"vCAJACOMPROBANTEID",pic:"ZZZZZZZ9"}],[]];this.EvtParms.VALIDV_CAJACOMPROBANTEFECHA=[[{av:"AV25CajaComprobanteFecha",fld:"vCAJACOMPROBANTEFECHA",pic:""}],[{av:"AV25CajaComprobanteFecha",fld:"vCAJACOMPROBANTEFECHA",pic:""}]];this.EvtParms.VALIDV_CAJACOMPROBANTEESTADO=[[{ctrl:"vCAJACOMPROBANTEESTADO"},{av:"AV30CajaComprobanteEstado",fld:"vCAJACOMPROBANTEESTADO",pic:""}],[{ctrl:"vCAJACOMPROBANTEESTADO"},{av:"AV30CajaComprobanteEstado",fld:"vCAJACOMPROBANTEESTADO",pic:""}]];this.setVCMap("A36CajaComprobanteId","CAJACOMPROBANTEID",0,"int",8,0);this.setVCMap("A464CajaComprobanteImporte","CAJACOMPROBANTEIMPORTE",0,"decimal",12,2);this.setVCMap("A2726CajaComprobanteSaldo","CAJACOMPROBANTESALDO",0,"decimal",12,2);this.setVCMap("A2721CajaComprobanteEstado","CAJACOMPROBANTEESTADO",0,"char",3,0);this.setVCMap("A37ComprobanteTipoId","COMPROBANTETIPOID",0,"int",4,0);this.setVCMap("A460CajaComprobanteFecha","CAJACOMPROBANTEFECHA",0,"date",8,0);this.setVCMap("A463CajaComprobanteObs","CAJACOMPROBANTEOBS",0,"svchar",256,0);this.setVCMap("AV31OrdPgoId","vORDPGOID",0,"int",9,0);this.setVCMap("AV33SaldoRendGastos","vSALDORENDGASTOS",0,"decimal",12,2);this.setVCMap("A2721CajaComprobanteEstado","CAJACOMPROBANTEESTADO",0,"char",3,0);this.setVCMap("A37ComprobanteTipoId","COMPROBANTETIPOID",0,"int",4,0);this.setVCMap("A460CajaComprobanteFecha","CAJACOMPROBANTEFECHA",0,"date",8,0);this.setVCMap("A463CajaComprobanteObs","CAJACOMPROBANTEOBS",0,"svchar",256,0);this.setVCMap("AV31OrdPgoId","vORDPGOID",0,"int",9,0);this.setVCMap("A2721CajaComprobanteEstado","CAJACOMPROBANTEESTADO",0,"char",3,0);this.setVCMap("A37ComprobanteTipoId","COMPROBANTETIPOID",0,"int",4,0);this.setVCMap("A460CajaComprobanteFecha","CAJACOMPROBANTEFECHA",0,"date",8,0);this.setVCMap("A463CajaComprobanteObs","CAJACOMPROBANTEOBS",0,"svchar",256,0);this.setVCMap("AV31OrdPgoId","vORDPGOID",0,"int",9,0);i.addRefreshingVar({rfrVar:"A2726CajaComprobanteSaldo"});i.addRefreshingVar({rfrVar:"A2721CajaComprobanteEstado"});i.addRefreshingVar({rfrVar:"A37ComprobanteTipoId"});i.addRefreshingVar({rfrVar:"A36CajaComprobanteId"});i.addRefreshingVar({rfrVar:"A460CajaComprobanteFecha"});i.addRefreshingVar({rfrVar:"A463CajaComprobanteObs"});i.addRefreshingVar({rfrVar:"A464CajaComprobanteImporte"});i.addRefreshingVar({rfrVar:"AV31OrdPgoId"});i.addRefreshingVar({rfrVar:"AV33SaldoRendGastos"});i.addRefreshingParm({rfrVar:"A2726CajaComprobanteSaldo"});i.addRefreshingParm({rfrVar:"A2721CajaComprobanteEstado"});i.addRefreshingParm({rfrVar:"A37ComprobanteTipoId"});i.addRefreshingParm({rfrVar:"A36CajaComprobanteId"});i.addRefreshingParm({rfrVar:"A460CajaComprobanteFecha"});i.addRefreshingParm({rfrVar:"A463CajaComprobanteObs"});i.addRefreshingParm({rfrVar:"A464CajaComprobanteImporte"});i.addRefreshingParm({rfrVar:"AV31OrdPgoId"});i.addRefreshingParm({rfrVar:"AV33SaldoRendGastos"});this.Initialize()});gx.wi(function(){gx.createParentObj(rendiciongastos_aplicar)})