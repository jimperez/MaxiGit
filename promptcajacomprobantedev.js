/*!   GeneXus C# 16_0_5-135614 on 10/27/2019 11:24:10.42
*/
gx.evt.autoSkip=!1;gx.define("promptcajacomprobantedev",!1,function(){var n,i,r,t;this.ServerClass="promptcajacomprobantedev";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.anyGridBaseTable=!0;this.hasEnterEvent=!0;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV7InOutCajaComprobanteId=gx.fn.getIntegerValue("vINOUTCAJACOMPROBANTEID",".")};this.Validv_Cajacomprobantefecha=function(){return this.validCliEvt("Validv_Cajacomprobantefecha",0,function(){try{var n=gx.util.balloon.getNew("vCAJACOMPROBANTEFECHA");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Validv_Cajacomprobantefecha_to=function(){return this.validCliEvt("Validv_Cajacomprobantefecha_to",0,function(){try{var n=gx.util.balloon.getNew("vCAJACOMPROBANTEFECHA_TO");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Cajacomprobanteid=function(){var n=gx.fn.currentGridRowImpl(37);return this.validCliEvt("Valid_Cajacomprobanteid",37,function(){try{if(gx.fn.currentGridRowImpl(37)===0)return!0;var n=gx.util.balloon.getNew("CAJACOMPROBANTEID",gx.fn.currentGridRowImpl(37));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Comprobantetipoid=function(){var n=gx.fn.currentGridRowImpl(37);return this.validCliEvt("Valid_Comprobantetipoid",37,function(){try{if(gx.fn.currentGridRowImpl(37)===0)return!0;var n=gx.util.balloon.getNew("COMPROBANTETIPOID",gx.fn.currentGridRowImpl(37));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Cajafisicaentidadid=function(){var n=gx.fn.currentGridRowImpl(37);return this.validCliEvt("Valid_Cajafisicaentidadid",37,function(){try{if(gx.fn.currentGridRowImpl(37)===0)return!0;var n=gx.util.balloon.getNew("CAJAFISICAENTIDADID",gx.fn.currentGridRowImpl(37));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Cajafisicasucursalid=function(){var n=gx.fn.currentGridRowImpl(37);return this.validCliEvt("Valid_Cajafisicasucursalid",37,function(){try{if(gx.fn.currentGridRowImpl(37)===0)return!0;var n=gx.util.balloon.getNew("CAJAFISICASUCURSALID",gx.fn.currentGridRowImpl(37));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Cajafisicaid=function(){var n=gx.fn.currentGridRowImpl(37);return this.validCliEvt("Valid_Cajafisicaid",37,function(){try{if(gx.fn.currentGridRowImpl(37)===0)return!0;var n=gx.util.balloon.getNew("CAJAFISICAID",gx.fn.currentGridRowImpl(37));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Cajaid=function(){var n=gx.fn.currentGridRowImpl(37);return this.validCliEvt("Valid_Cajaid",37,function(){try{if(gx.fn.currentGridRowImpl(37)===0)return!0;var n=gx.util.balloon.getNew("CAJAID",gx.fn.currentGridRowImpl(37));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Cajacomprobanteimporte=function(){var n=gx.fn.currentGridRowImpl(37);return this.validCliEvt("Valid_Cajacomprobanteimporte",37,function(){try{if(gx.fn.currentGridRowImpl(37)===0)return!0;var n=gx.util.balloon.getNew("CAJACOMPROBANTEIMPORTE",gx.fn.currentGridRowImpl(37));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Cajacomprobantesaldo=function(){var n=gx.fn.currentGridRowImpl(37);return this.validCliEvt("Valid_Cajacomprobantesaldo",37,function(){try{if(gx.fn.currentGridRowImpl(37)===0)return!0;var n=gx.util.balloon.getNew("CAJACOMPROBANTESALDO",gx.fn.currentGridRowImpl(37));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e11mj2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEPAGE",!1,null,!0,!0)};this.e12mj2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!1,null,!0,!0)};this.e16mj2_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e17mj2_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,11,12,13,14,15,16,17,18,19,20,21,22,25,26,28,30,31,32,33,34,35,36,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58];this.GXLastCtrlId=58;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",37,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"promptcajacomprobantedev",[],!1,1,!1,!0,0,!1,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);i=this.GridContainer;i.addBitmap("&Select","vSELECT",38,0,"px",17,"px","e16mj2_client","","","SelectAttribute ActionBaseColorAttribute","WWActionColumn");i.addSingleLineEdit(36,39,"CAJACOMPROBANTEID","Nº Int.","","CajaComprobanteId","int",0,"px",8,8,"right",null,[],36,"CajaComprobanteId",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(1150,40,"CAJAFISICASUCURSALNOMBRE","Sucursal","","CajaFisicaSucursalNombre","svchar",0,"px",64,64,"left",null,[],1150,"CajaFisicaSucursalNombre",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(460,41,"CAJACOMPROBANTEFECHA","Fecha","","CajaComprobanteFecha","date",0,"px",8,8,"right",null,[],460,"CajaComprobanteFecha",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addComboBox(461,42,"CAJACOMPROBANTEMOV","Tipo","CajaComprobanteMov","char",null,0,!0,!1,0,"px","WWColumn");i.addSingleLineEdit(37,43,"COMPROBANTETIPOID","Ide.","","ComprobanteTipoId","int",0,"px",4,4,"right",null,[],37,"ComprobanteTipoId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(462,44,"COMPROBANTETIPONOMBRE","Tipo Comp.","","ComprobanteTipoNombre","svchar",0,"px",64,64,"left",null,[],462,"ComprobanteTipoNombre",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(1537,45,"COMPROBANTETIPOINTERNO","Tipo Int.","","ComprobanteTipoInterno","char",0,"px",3,3,"left",null,[],1537,"ComprobanteTipoInterno",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(463,46,"CAJACOMPROBANTEOBS","Observaciones","","CajaComprobanteObs","svchar",0,"px",256,80,"left",null,[],463,"CajaComprobanteObs",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(31,47,"CAJAFISICAENTIDADID","Ide.","","CajaFisicaEntidadId","int",0,"px",2,2,"right",null,[],31,"CajaFisicaEntidadId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(32,48,"CAJAFISICASUCURSALID","Ide.","","CajaFisicaSucursalId","int",0,"px",4,4,"right",null,[],32,"CajaFisicaSucursalId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(33,49,"CAJAFISICAID","Ide.","","CajaFisicaId","int",0,"px",4,4,"right",null,[],33,"CajaFisicaId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(34,50,"CAJAID","Nº Arq.","","CajaId","int",0,"px",9,9,"right",null,[],34,"CajaId",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(443,51,"CAJAFISICANOMBRE","Caja Fisica","","CajaFisicaNombre","svchar",0,"px",64,64,"left",null,[],443,"CajaFisicaNombre",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(439,52,"CAJACIERREFECHA","Fec. Cierr.","Fecha ...","CajaCierreFecha","date",0,"px",10,10,"right",null,[],439,"CajaCierreFecha",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addComboBox(2721,53,"CAJACOMPROBANTEESTADO","Estado","CajaComprobanteEstado","char",null,0,!0,!1,0,"px","WWColumn hidden-xs");i.addSingleLineEdit(2105,54,"CAJACOMPROBANTECANTIDAD","Comprobante Cantidad","","CajaComprobanteCantidad","int",0,"px",4,4,"right",null,[],2105,"CajaComprobanteCantidad",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(464,55,"CAJACOMPROBANTEIMPORTE","Importe","","CajaComprobanteImporte","decimal",0,"px",13,13,"right",null,[],464,"CajaComprobanteImporte",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(2726,56,"CAJACOMPROBANTESALDO","A rendir","","CajaComprobanteSaldo","decimal",0,"px",13,13,"right",null,[],2726,"CajaComprobanteSaldo",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");this.GridContainer.emptyText="";this.setGrid(i);this.DVPANEL_TABLEHEADERContainer=gx.uc.getNew(this,9,0,"BootstrapPanel","DVPANEL_TABLEHEADERContainer","Dvpanel_tableheader","DVPANEL_TABLEHEADER");r=this.DVPANEL_TABLEHEADERContainer;r.setProp("Class","Class","","char");r.setProp("Enabled","Enabled",!0,"boolean");r.setProp("Width","Width","100%","str");r.setProp("Height","Height","100","str");r.setProp("AutoWidth","Autowidth",!1,"bool");r.setProp("AutoHeight","Autoheight",!0,"bool");r.setProp("Cls","Cls","PanelFilled_BaseColor","str");r.setProp("ShowHeader","Showheader",!0,"bool");r.setProp("Title","Title","Opciones","str");r.setProp("Collapsible","Collapsible",!0,"bool");r.setProp("Collapsed","Collapsed",!1,"bool");r.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");r.setProp("IconPosition","Iconposition","Right","str");r.setProp("AutoScroll","Autoscroll",!1,"bool");r.setProp("Visible","Visible",!0,"bool");r.setProp("Gx Control Type","Gxcontroltype","","int");r.setC2ShowFunction(function(n){n.show()});this.setUserControl(r);this.GRIDPAGINATIONBARContainer=gx.uc.getNew(this,59,26,"DVelop_DVPaginationBar","GRIDPAGINATIONBARContainer","Gridpaginationbar","GRIDPAGINATIONBAR");t=this.GRIDPAGINATIONBARContainer;t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("Class","Class","PaginationBar","str");t.setProp("ShowFirst","Showfirst",!1,"bool");t.setProp("ShowPrevious","Showprevious",!0,"bool");t.setProp("ShowNext","Shownext",!0,"bool");t.setProp("ShowLast","Showlast",!1,"bool");t.setProp("PagesToShow","Pagestoshow",5,"num");t.setProp("PagingButtonsPosition","Pagingbuttonsposition","Right","str");t.setProp("PagingCaptionPosition","Pagingcaptionposition","Left","str");t.setProp("EmptyGridClass","Emptygridclass","PaginationBarEmptyGrid","str");t.setProp("SelectedPage","Selectedpage","","char");t.setProp("RowsPerPageSelector","Rowsperpageselector",!0,"bool");t.setDynProp("RowsPerPageSelectedValue","Rowsperpageselectedvalue",10,"num");t.setProp("RowsPerPageOptions","Rowsperpageoptions","5:WWP_Rows5,10:WWP_Rows10,20:WWP_Rows20,50:WWP_Rows50","str");t.setProp("First","First","First","str");t.setProp("Previous","Previous","WWP_PagingPreviousCaption","str");t.setProp("Next","Next","WWP_PagingNextCaption","str");t.setProp("Last","Last","Last","str");t.setProp("Caption","Caption","Página <CURRENT_PAGE> de <TOTAL_PAGES>","str");t.setProp("EmptyGridCaption","Emptygridcaption","WWP_PagingEmptyGridCaption","str");t.setProp("RowsPerPageCaption","Rowsperpagecaption","WWP_PagingRowsPerPage","str");t.addV2CFunction("AV14GridCurrentPage","vGRIDCURRENTPAGE","SetCurrentPage");t.addC2VFunction(function(n){n.ParentObject.AV14GridCurrentPage=n.GetCurrentPage();gx.fn.setControlValue("vGRIDCURRENTPAGE",n.ParentObject.AV14GridCurrentPage)});t.addV2CFunction("AV15GridPageCount","vGRIDPAGECOUNT","SetPageCount");t.addC2VFunction(function(n){n.ParentObject.AV15GridPageCount=n.GetPageCount();gx.fn.setControlValue("vGRIDPAGECOUNT",n.ParentObject.AV15GridPageCount)});t.setProp("RecordCount","Recordcount","","str");t.setProp("Page","Page","","str");t.setProp("Visible","Visible",!0,"bool");t.setProp("Gx Control Type","Gxcontroltype","","int");t.setC2ShowFunction(function(n){n.show()});t.addEventHandler("ChangePage",this.e11mj2_client);t.addEventHandler("ChangeRowsPerPage",this.e12mj2_client);this.setUserControl(t);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLEMAIN",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[11]={id:11,fld:"TABLEHEADER",grid:0};n[12]={id:12,fld:"",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"TABLEFILTERS",grid:0};n[15]={id:15,fld:"",grid:0};n[16]={id:16,fld:"",grid:0};n[17]={id:17,fld:"TABLESPLITTEDFILTERTEXTCAJACOMPROBANTEFECHA",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,fld:"",grid:0};n[20]={id:20,fld:"FILTERTEXTCAJACOMPROBANTEFECHA",format:0,grid:0};n[21]={id:21,fld:"",grid:0};n[22]={id:22,fld:"TABLEMERGEDCAJACOMPROBANTEFECHA",grid:0};n[25]={id:25,fld:"",grid:0};n[26]={id:26,lvl:0,type:"date",len:8,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Cajacomprobantefecha,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vCAJACOMPROBANTEFECHA",gxz:"ZV10CajaComprobanteFecha",gxold:"OV10CajaComprobanteFecha",gxvar:"AV10CajaComprobanteFecha",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/99",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV10CajaComprobanteFecha=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.ZV10CajaComprobanteFecha=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("vCAJACOMPROBANTEFECHA",gx.O.AV10CajaComprobanteFecha,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV10CajaComprobanteFecha=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getControlValue("vCAJACOMPROBANTEFECHA")},nac:gx.falseFn};n[28]={id:28,fld:"CAJACOMPROBANTEFECHA_RANGEMIDDLETEXT",format:0,grid:0};n[30]={id:30,fld:"",grid:0};n[31]={id:31,lvl:0,type:"date",len:8,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Cajacomprobantefecha_to,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vCAJACOMPROBANTEFECHA_TO",gxz:"ZV11CajaComprobanteFecha_To",gxold:"OV11CajaComprobanteFecha_To",gxvar:"AV11CajaComprobanteFecha_To",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/99",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV11CajaComprobanteFecha_To=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.ZV11CajaComprobanteFecha_To=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("vCAJACOMPROBANTEFECHA_TO",gx.O.AV11CajaComprobanteFecha_To,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV11CajaComprobanteFecha_To=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getControlValue("vCAJACOMPROBANTEFECHA_TO")},nac:gx.falseFn};n[32]={id:32,fld:"",grid:0};n[33]={id:33,fld:"",grid:0};n[34]={id:34,fld:"GRIDTABLEWITHPAGINATIONBAR",grid:0};n[35]={id:35,fld:"",grid:0};n[36]={id:36,fld:"",grid:0};n[38]={id:38,lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vSELECT",gxz:"ZV16Select",gxold:"OV16Select",gxvar:"AV16Select",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.AV16Select=n)},v2z:function(n){n!==undefined&&(gx.O.ZV16Select=n)},v2c:function(n){gx.fn.setGridMultimediaValue("vSELECT",n||gx.fn.currentGridRowImpl(37),gx.O.AV16Select,gx.O.AV26Select_GXI)},c2v:function(n){gx.O.AV26Select_GXI=this.val_GXI();this.val(n)!==undefined&&(gx.O.AV16Select=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vSELECT",n||gx.fn.currentGridRowImpl(37))},val_GXI:function(n){return gx.fn.getGridControlValue("vSELECT_GXI",n||gx.fn.currentGridRowImpl(37))},gxvar_GXI:"AV26Select_GXI",nac:gx.falseFn,evt:"e16mj2_client",std:"ENTER"};n[39]={id:39,lvl:2,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:this.Valid_Cajacomprobanteid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CAJACOMPROBANTEID",gxz:"Z36CajaComprobanteId",gxold:"O36CajaComprobanteId",gxvar:"A36CajaComprobanteId",ucs:[],op:[31,26,56,55,54,44,45,40,52,51],ip:[54,44,45,40,52,51,31,26,56,55,39,43,50,49,48,47],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A36CajaComprobanteId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z36CajaComprobanteId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("CAJACOMPROBANTEID",n||gx.fn.currentGridRowImpl(37),gx.O.A36CajaComprobanteId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A36CajaComprobanteId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("CAJACOMPROBANTEID",n||gx.fn.currentGridRowImpl(37),".")},nac:gx.falseFn};n[40]={id:40,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CAJAFISICASUCURSALNOMBRE",gxz:"Z1150CajaFisicaSucursalNombre",gxold:"O1150CajaFisicaSucursalNombre",gxvar:"A1150CajaFisicaSucursalNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A1150CajaFisicaSucursalNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z1150CajaFisicaSucursalNombre=n)},v2c:function(n){gx.fn.setGridControlValue("CAJAFISICASUCURSALNOMBRE",n||gx.fn.currentGridRowImpl(37),gx.O.A1150CajaFisicaSucursalNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1150CajaFisicaSucursalNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("CAJAFISICASUCURSALNOMBRE",n||gx.fn.currentGridRowImpl(37))},nac:gx.falseFn};n[41]={id:41,lvl:2,type:"date",len:8,dec:0,sign:!1,ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CAJACOMPROBANTEFECHA",gxz:"Z460CajaComprobanteFecha",gxold:"O460CajaComprobanteFecha",gxvar:"A460CajaComprobanteFecha",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/99",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A460CajaComprobanteFecha=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z460CajaComprobanteFecha=gx.fn.toDatetimeValue(n))},v2c:function(n){gx.fn.setGridControlValue("CAJACOMPROBANTEFECHA",n||gx.fn.currentGridRowImpl(37),gx.O.A460CajaComprobanteFecha,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A460CajaComprobanteFecha=gx.fn.toDatetimeValue(this.val(n)))},val:function(n){return gx.fn.getGridDateTimeValue("CAJACOMPROBANTEFECHA",n||gx.fn.currentGridRowImpl(37))},nac:gx.falseFn};n[42]={id:42,lvl:2,type:"char",len:3,dec:0,sign:!1,ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CAJACOMPROBANTEMOV",gxz:"Z461CajaComprobanteMov",gxold:"O461CajaComprobanteMov",gxvar:"A461CajaComprobanteMov",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A461CajaComprobanteMov=n)},v2z:function(n){n!==undefined&&(gx.O.Z461CajaComprobanteMov=n)},v2c:function(n){gx.fn.setGridComboBoxValue("CAJACOMPROBANTEMOV",n||gx.fn.currentGridRowImpl(37),gx.O.A461CajaComprobanteMov);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A461CajaComprobanteMov=this.val(n))},val:function(n){return gx.fn.getGridControlValue("CAJACOMPROBANTEMOV",n||gx.fn.currentGridRowImpl(37))},nac:gx.falseFn};n[43]={id:43,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:this.Valid_Comprobantetipoid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"COMPROBANTETIPOID",gxz:"Z37ComprobanteTipoId",gxold:"O37ComprobanteTipoId",gxvar:"A37ComprobanteTipoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A37ComprobanteTipoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z37ComprobanteTipoId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("COMPROBANTETIPOID",n||gx.fn.currentGridRowImpl(37),gx.O.A37ComprobanteTipoId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A37ComprobanteTipoId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("COMPROBANTETIPOID",n||gx.fn.currentGridRowImpl(37),".")},nac:gx.falseFn};n[44]={id:44,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"COMPROBANTETIPONOMBRE",gxz:"Z462ComprobanteTipoNombre",gxold:"O462ComprobanteTipoNombre",gxvar:"A462ComprobanteTipoNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A462ComprobanteTipoNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z462ComprobanteTipoNombre=n)},v2c:function(n){gx.fn.setGridControlValue("COMPROBANTETIPONOMBRE",n||gx.fn.currentGridRowImpl(37),gx.O.A462ComprobanteTipoNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A462ComprobanteTipoNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("COMPROBANTETIPONOMBRE",n||gx.fn.currentGridRowImpl(37))},nac:gx.falseFn};n[45]={id:45,lvl:2,type:"char",len:3,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"COMPROBANTETIPOINTERNO",gxz:"Z1537ComprobanteTipoInterno",gxold:"O1537ComprobanteTipoInterno",gxvar:"A1537ComprobanteTipoInterno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A1537ComprobanteTipoInterno=n)},v2z:function(n){n!==undefined&&(gx.O.Z1537ComprobanteTipoInterno=n)},v2c:function(n){gx.fn.setGridControlValue("COMPROBANTETIPOINTERNO",n||gx.fn.currentGridRowImpl(37),gx.O.A1537ComprobanteTipoInterno,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1537ComprobanteTipoInterno=this.val(n))},val:function(n){return gx.fn.getGridControlValue("COMPROBANTETIPOINTERNO",n||gx.fn.currentGridRowImpl(37))},nac:gx.falseFn};n[46]={id:46,lvl:2,type:"svchar",len:256,dec:0,sign:!1,ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CAJACOMPROBANTEOBS",gxz:"Z463CajaComprobanteObs",gxold:"O463CajaComprobanteObs",gxvar:"A463CajaComprobanteObs",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A463CajaComprobanteObs=n)},v2z:function(n){n!==undefined&&(gx.O.Z463CajaComprobanteObs=n)},v2c:function(n){gx.fn.setGridControlValue("CAJACOMPROBANTEOBS",n||gx.fn.currentGridRowImpl(37),gx.O.A463CajaComprobanteObs,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A463CajaComprobanteObs=this.val(n))},val:function(n){return gx.fn.getGridControlValue("CAJACOMPROBANTEOBS",n||gx.fn.currentGridRowImpl(37))},nac:gx.falseFn};n[47]={id:47,lvl:2,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:this.Valid_Cajafisicaentidadid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CAJAFISICAENTIDADID",gxz:"Z31CajaFisicaEntidadId",gxold:"O31CajaFisicaEntidadId",gxvar:"A31CajaFisicaEntidadId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A31CajaFisicaEntidadId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z31CajaFisicaEntidadId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("CAJAFISICAENTIDADID",n||gx.fn.currentGridRowImpl(37),gx.O.A31CajaFisicaEntidadId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A31CajaFisicaEntidadId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("CAJAFISICAENTIDADID",n||gx.fn.currentGridRowImpl(37),".")},nac:gx.falseFn};n[48]={id:48,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:this.Valid_Cajafisicasucursalid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CAJAFISICASUCURSALID",gxz:"Z32CajaFisicaSucursalId",gxold:"O32CajaFisicaSucursalId",gxvar:"A32CajaFisicaSucursalId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A32CajaFisicaSucursalId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z32CajaFisicaSucursalId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("CAJAFISICASUCURSALID",n||gx.fn.currentGridRowImpl(37),gx.O.A32CajaFisicaSucursalId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A32CajaFisicaSucursalId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("CAJAFISICASUCURSALID",n||gx.fn.currentGridRowImpl(37),".")},nac:gx.falseFn};n[49]={id:49,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:this.Valid_Cajafisicaid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CAJAFISICAID",gxz:"Z33CajaFisicaId",gxold:"O33CajaFisicaId",gxvar:"A33CajaFisicaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A33CajaFisicaId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z33CajaFisicaId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("CAJAFISICAID",n||gx.fn.currentGridRowImpl(37),gx.O.A33CajaFisicaId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A33CajaFisicaId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("CAJAFISICAID",n||gx.fn.currentGridRowImpl(37),".")},nac:gx.falseFn};n[50]={id:50,lvl:2,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:this.Valid_Cajaid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CAJAID",gxz:"Z34CajaId",gxold:"O34CajaId",gxvar:"A34CajaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A34CajaId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z34CajaId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("CAJAID",n||gx.fn.currentGridRowImpl(37),gx.O.A34CajaId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A34CajaId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("CAJAID",n||gx.fn.currentGridRowImpl(37),".")},nac:gx.falseFn};n[51]={id:51,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CAJAFISICANOMBRE",gxz:"Z443CajaFisicaNombre",gxold:"O443CajaFisicaNombre",gxvar:"A443CajaFisicaNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A443CajaFisicaNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z443CajaFisicaNombre=n)},v2c:function(n){gx.fn.setGridControlValue("CAJAFISICANOMBRE",n||gx.fn.currentGridRowImpl(37),gx.O.A443CajaFisicaNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A443CajaFisicaNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("CAJAFISICANOMBRE",n||gx.fn.currentGridRowImpl(37))},nac:gx.falseFn};n[52]={id:52,lvl:2,type:"date",len:10,dec:0,sign:!1,ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CAJACIERREFECHA",gxz:"Z439CajaCierreFecha",gxold:"O439CajaCierreFecha",gxvar:"A439CajaCierreFecha",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A439CajaCierreFecha=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z439CajaCierreFecha=gx.fn.toDatetimeValue(n))},v2c:function(n){gx.fn.setGridControlValue("CAJACIERREFECHA",n||gx.fn.currentGridRowImpl(37),gx.O.A439CajaCierreFecha,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A439CajaCierreFecha=gx.fn.toDatetimeValue(this.val(n)))},val:function(n){return gx.fn.getGridDateTimeValue("CAJACIERREFECHA",n||gx.fn.currentGridRowImpl(37))},nac:gx.falseFn};n[53]={id:53,lvl:2,type:"char",len:3,dec:0,sign:!1,ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CAJACOMPROBANTEESTADO",gxz:"Z2721CajaComprobanteEstado",gxold:"O2721CajaComprobanteEstado",gxvar:"A2721CajaComprobanteEstado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2721CajaComprobanteEstado=n)},v2z:function(n){n!==undefined&&(gx.O.Z2721CajaComprobanteEstado=n)},v2c:function(n){gx.fn.setGridComboBoxValue("CAJACOMPROBANTEESTADO",n||gx.fn.currentGridRowImpl(37),gx.O.A2721CajaComprobanteEstado);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2721CajaComprobanteEstado=this.val(n))},val:function(n){return gx.fn.getGridControlValue("CAJACOMPROBANTEESTADO",n||gx.fn.currentGridRowImpl(37))},nac:gx.falseFn};n[54]={id:54,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CAJACOMPROBANTECANTIDAD",gxz:"Z2105CajaComprobanteCantidad",gxold:"O2105CajaComprobanteCantidad",gxvar:"A2105CajaComprobanteCantidad",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A2105CajaComprobanteCantidad=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z2105CajaComprobanteCantidad=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("CAJACOMPROBANTECANTIDAD",n||gx.fn.currentGridRowImpl(37),gx.O.A2105CajaComprobanteCantidad,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2105CajaComprobanteCantidad=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("CAJACOMPROBANTECANTIDAD",n||gx.fn.currentGridRowImpl(37),".")},nac:gx.falseFn};n[55]={id:55,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:this.Valid_Cajacomprobanteimporte,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CAJACOMPROBANTEIMPORTE",gxz:"Z464CajaComprobanteImporte",gxold:"O464CajaComprobanteImporte",gxvar:"A464CajaComprobanteImporte",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A464CajaComprobanteImporte=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z464CajaComprobanteImporte=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("CAJACOMPROBANTEIMPORTE",n||gx.fn.currentGridRowImpl(37),gx.O.A464CajaComprobanteImporte,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A464CajaComprobanteImporte=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("CAJACOMPROBANTEIMPORTE",n||gx.fn.currentGridRowImpl(37),".",",")},nac:gx.falseFn};n[56]={id:56,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:this.Valid_Cajacomprobantesaldo,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CAJACOMPROBANTESALDO",gxz:"Z2726CajaComprobanteSaldo",gxold:"O2726CajaComprobanteSaldo",gxvar:"A2726CajaComprobanteSaldo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2726CajaComprobanteSaldo=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2726CajaComprobanteSaldo=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("CAJACOMPROBANTESALDO",n||gx.fn.currentGridRowImpl(37),gx.O.A2726CajaComprobanteSaldo,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2726CajaComprobanteSaldo=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("CAJACOMPROBANTESALDO",n||gx.fn.currentGridRowImpl(37),".",",")},nac:gx.falseFn};n[57]={id:57,fld:"",grid:0};n[58]={id:58,fld:"",grid:0};this.AV10CajaComprobanteFecha=gx.date.nullDate();this.ZV10CajaComprobanteFecha=gx.date.nullDate();this.OV10CajaComprobanteFecha=gx.date.nullDate();this.AV11CajaComprobanteFecha_To=gx.date.nullDate();this.ZV11CajaComprobanteFecha_To=gx.date.nullDate();this.OV11CajaComprobanteFecha_To=gx.date.nullDate();this.ZV16Select="";this.OV16Select="";this.Z36CajaComprobanteId=0;this.O36CajaComprobanteId=0;this.Z1150CajaFisicaSucursalNombre="";this.O1150CajaFisicaSucursalNombre="";this.Z460CajaComprobanteFecha=gx.date.nullDate();this.O460CajaComprobanteFecha=gx.date.nullDate();this.Z461CajaComprobanteMov="";this.O461CajaComprobanteMov="";this.Z37ComprobanteTipoId=0;this.O37ComprobanteTipoId=0;this.Z462ComprobanteTipoNombre="";this.O462ComprobanteTipoNombre="";this.Z1537ComprobanteTipoInterno="";this.O1537ComprobanteTipoInterno="";this.Z463CajaComprobanteObs="";this.O463CajaComprobanteObs="";this.Z31CajaFisicaEntidadId=0;this.O31CajaFisicaEntidadId=0;this.Z32CajaFisicaSucursalId=0;this.O32CajaFisicaSucursalId=0;this.Z33CajaFisicaId=0;this.O33CajaFisicaId=0;this.Z34CajaId=0;this.O34CajaId=0;this.Z443CajaFisicaNombre="";this.O443CajaFisicaNombre="";this.Z439CajaCierreFecha=gx.date.nullDate();this.O439CajaCierreFecha=gx.date.nullDate();this.Z2721CajaComprobanteEstado="";this.O2721CajaComprobanteEstado="";this.Z2105CajaComprobanteCantidad=0;this.O2105CajaComprobanteCantidad=0;this.Z464CajaComprobanteImporte=0;this.O464CajaComprobanteImporte=0;this.Z2726CajaComprobanteSaldo=0;this.O2726CajaComprobanteSaldo=0;this.AV10CajaComprobanteFecha=gx.date.nullDate();this.AV11CajaComprobanteFecha_To=gx.date.nullDate();this.AV14GridCurrentPage=0;this.AV7InOutCajaComprobanteId=0;this.AV16Select="";this.A36CajaComprobanteId=0;this.A1150CajaFisicaSucursalNombre="";this.A460CajaComprobanteFecha=gx.date.nullDate();this.A461CajaComprobanteMov="";this.A37ComprobanteTipoId=0;this.A462ComprobanteTipoNombre="";this.A1537ComprobanteTipoInterno="";this.A463CajaComprobanteObs="";this.A31CajaFisicaEntidadId=0;this.A32CajaFisicaSucursalId=0;this.A33CajaFisicaId=0;this.A34CajaId=0;this.A443CajaFisicaNombre="";this.A439CajaCierreFecha=gx.date.nullDate();this.A2721CajaComprobanteEstado="";this.A2105CajaComprobanteCantidad=0;this.A464CajaComprobanteImporte=0;this.A2726CajaComprobanteSaldo=0;this.Events={e11mj2_client:["GRIDPAGINATIONBAR.CHANGEPAGE",!0],e12mj2_client:["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!0],e16mj2_client:["ENTER",!0],e17mj2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV10CajaComprobanteFecha",fld:"vCAJACOMPROBANTEFECHA",pic:""},{av:"AV11CajaComprobanteFecha_To",fld:"vCAJACOMPROBANTEFECHA_TO",pic:""}],[{av:"AV14GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"},{av:"AV15GridPageCount",fld:"vGRIDPAGECOUNT",pic:"ZZZZZZZZZ9"}]];this.EvtParms.START=[[],[{ctrl:"GRID",prop:"Rows"},{ctrl:"FORM",prop:"Caption"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV10CajaComprobanteFecha",fld:"vCAJACOMPROBANTEFECHA",pic:""},{av:"AV11CajaComprobanteFecha_To",fld:"vCAJACOMPROBANTEFECHA_TO",pic:""},{av:"this.GRIDPAGINATIONBARContainer.SelectedPage",ctrl:"GRIDPAGINATIONBAR",prop:"SelectedPage"}],[]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV10CajaComprobanteFecha",fld:"vCAJACOMPROBANTEFECHA",pic:""},{av:"AV11CajaComprobanteFecha_To",fld:"vCAJACOMPROBANTEFECHA_TO",pic:""},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}],[{ctrl:"GRID",prop:"Rows"}]];this.EvtParms["GRID.LOAD"]=[[],[{av:"AV16Select",fld:"vSELECT",pic:""},{av:'gx.fn.getCtrlProperty("vSELECT","Tooltiptext")',ctrl:"vSELECT",prop:"Tooltiptext"}]];this.EvtParms.ENTER=[[{av:"A31CajaFisicaEntidadId",fld:"CAJAFISICAENTIDADID",pic:"Z9",hsh:!0},{av:"A32CajaFisicaSucursalId",fld:"CAJAFISICASUCURSALID",pic:"ZZZ9",hsh:!0},{av:"A36CajaComprobanteId",fld:"CAJACOMPROBANTEID",pic:"ZZZZZZZ9",hsh:!0},{av:"A2726CajaComprobanteSaldo",fld:"CAJACOMPROBANTESALDO",pic:"ZZ,ZZZ,ZZ9.99",hsh:!0}],[{av:"AV7InOutCajaComprobanteId",fld:"vINOUTCAJACOMPROBANTEID",pic:"ZZZZZZZ9"}]];this.EvtParms.VALIDV_CAJACOMPROBANTEFECHA=[[],[]];this.EvtParms.VALIDV_CAJACOMPROBANTEFECHA_TO=[[],[]];this.EvtParms.VALID_CAJACOMPROBANTEID=[[],[]];this.EvtParms.VALID_COMPROBANTETIPOID=[[],[]];this.EvtParms.VALID_CAJAFISICAENTIDADID=[[],[]];this.EvtParms.VALID_CAJAFISICASUCURSALID=[[],[]];this.EvtParms.VALID_CAJAFISICAID=[[],[]];this.EvtParms.VALID_CAJAID=[[],[]];this.EvtParms.VALID_CAJACOMPROBANTEIMPORTE=[[],[]];this.EvtParms.VALID_CAJACOMPROBANTESALDO=[[],[]];this.EnterCtrl=["vSELECT"];this.setVCMap("AV7InOutCajaComprobanteId","vINOUTCAJACOMPROBANTEID",0,"int",8,0);i.addRefreshingVar(this.GXValidFnc[26]);i.addRefreshingVar(this.GXValidFnc[31]);i.addRefreshingParm(this.GXValidFnc[26]);i.addRefreshingParm(this.GXValidFnc[31]);this.Initialize()});gx.wi(function(){gx.createParentObj(promptcajacomprobantedev)})