/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:51:25.19
*/
gx.evt.autoSkip=!1;gx.define("wwextraautorizacionegresocaja",!1,function(){var n,i,r,t;this.ServerClass="wwextraautorizacionegresocaja";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.anyGridBaseTable=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV28Pgmname=gx.fn.getControlValue("vPGMNAME");this.AV23IsAuthorized_Display=gx.fn.getControlValue("vISAUTHORIZED_DISPLAY");this.AV28Pgmname=gx.fn.getControlValue("vPGMNAME");this.AV23IsAuthorized_Display=gx.fn.getControlValue("vISAUTHORIZED_DISPLAY")};this.Validv_Autorizacionfecha=function(){return this.validCliEvt("Validv_Autorizacionfecha",0,function(){try{var n=gx.util.balloon.getNew("vAUTORIZACIONFECHA");if(this.AnyError=0,!(new gx.date.gxdate("").compare(this.AV12AutorizacionFecha)==0||new gx.date.gxdate(this.AV12AutorizacionFecha).compare(gx.date.ymdtod(1753,01,01))>=0))try{n.setError("Campo Autorizacion Fecha fuera de rango");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Validv_Autorizacionfecha_to=function(){return this.validCliEvt("Validv_Autorizacionfecha_to",0,function(){try{var n=gx.util.balloon.getNew("vAUTORIZACIONFECHA_TO");if(this.AnyError=0,!(new gx.date.gxdate("").compare(this.AV13AutorizacionFecha_To)==0||new gx.date.gxdate(this.AV13AutorizacionFecha_To).compare(gx.date.ymdtod(1753,01,01))>=0))try{n.setError("Campo Autorizacion Fecha_To fuera de rango");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Autorizacionentidadid=function(){var n=gx.fn.currentGridRowImpl(40);return this.validCliEvt("Valid_Autorizacionentidadid",40,function(){try{if(gx.fn.currentGridRowImpl(40)===0)return!0;var n=gx.util.balloon.getNew("AUTORIZACIONENTIDADID",gx.fn.currentGridRowImpl(40));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Autorizacionsucursalid=function(){var n=gx.fn.currentGridRowImpl(40);return this.validCliEvt("Valid_Autorizacionsucursalid",40,function(){try{if(gx.fn.currentGridRowImpl(40)===0)return!0;var n=gx.util.balloon.getNew("AUTORIZACIONSUCURSALID",gx.fn.currentGridRowImpl(40));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e116g2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEPAGE",!1,null,!0,!0)};this.e126g2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!1,null,!0,!0)};this.e166g2_client=function(){return this.executeServerEvent("VIMPRIMIR.CLICK",!0,arguments[0],!1,!1)};this.e176g2_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e186g2_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,11,12,13,14,15,16,17,18,19,20,21,22,25,26,28,30,31,32,33,35,36,37,38,39,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57];this.GXLastCtrlId=57;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",40,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"wwextraautorizacionegresocaja",[],!1,1,!1,!0,0,!1,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);i=this.GridContainer;i.addBitmap("&Imprimir","vIMPRIMIR",41,0,"px",17,"px","e166g2_client","","","DeleteAttribute ActionBaseColorAttribute","WWActionColumn");i.addSingleLineEdit("Display",42,"vDISPLAY","","Visualizar","Display","char",0,"px",20,20,"left",null,[],"Display","Display",!0,0,!1,!1,"Attribute",1,"WWIconActionColumn");i.addSingleLineEdit(293,43,"AUTORIZACIONID","Ide.","","AutorizacionId","int",0,"px",8,8,"right",null,[],293,"AutorizacionId",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");i.addSingleLineEdit(2348,44,"AUTORIZACIONFECHA","Fecha","Fecha ...","AutorizacionFecha","date",0,"px",10,10,"right",null,[],2348,"AutorizacionFecha",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");i.addComboBox(2349,45,"AUTORIZACIONTIPO","Tipo","AutorizacionTipo","char",null,0,!0,!1,0,"px","WWColumn");i.addSingleLineEdit(294,46,"AUTORIZACIONENTIDADID","Empresa","","AutorizacionEntidadId","int",0,"px",2,2,"right",null,[],294,"AutorizacionEntidadId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(2355,47,"AUTORIZACIONENTIDADNOMBRE","Empresa","","AutorizacionEntidadNombre","svchar",0,"px",64,64,"left",null,[],2355,"AutorizacionEntidadNombre",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(295,48,"AUTORIZACIONSUCURSALID","Sucursal","","AutorizacionSucursalId","int",0,"px",4,4,"right",null,[],295,"AutorizacionSucursalId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(2356,49,"AUTORIZACIONSUCURSALNOMBRE","Sucursal","","AutorizacionSucursalNombre","svchar",0,"px",64,64,"left",null,[],2356,"AutorizacionSucursalNombre",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");i.addSingleLineEdit(2350,50,"AUTORIZACIONUSUARIO","Usuario","","AutorizacionUsuario","char",0,"px",15,15,"left",null,[],2350,"AutorizacionUsuario",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn");i.addSingleLineEdit(2351,51,"AUTORIZACIONHORA","Hora","","AutorizacionHora","char",0,"px",8,8,"left",null,[],2351,"AutorizacionHora",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");i.addSingleLineEdit(2352,52,"AUTORIZACIONOBS","Observación","","AutorizacionObs","vchar",0,"px",500,80,"left",null,[],2352,"AutorizacionObs",!0,100,!1,!1,"AttributeRealWidth",1,"WWColumn");i.addSingleLineEdit(2353,53,"AUTORIZACIONIMPORTE","Importe","","AutorizacionImporte","decimal",0,"px",13,13,"right",null,[],2353,"AutorizacionImporte",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn");i.addSingleLineEdit(2354,54,"AUTORIZACIONORIGENID","Origen","","AutorizacionOrigenId","int",0,"px",8,8,"right",null,[],2354,"AutorizacionOrigenId",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addComboBox(2379,55,"AUTORIZACIONESTADO","Respuesta","AutorizacionEstado","char",null,0,!0,!1,0,"px","WWColumn hidden-xs");this.GridContainer.emptyText="";this.setGrid(i);this.DVPANEL_TABLEHEADERContainer=gx.uc.getNew(this,9,0,"BootstrapPanel","DVPANEL_TABLEHEADERContainer","Dvpanel_tableheader","DVPANEL_TABLEHEADER");r=this.DVPANEL_TABLEHEADERContainer;r.setProp("Class","Class","","char");r.setProp("Enabled","Enabled",!0,"boolean");r.setProp("Width","Width","100%","str");r.setProp("Height","Height","100","str");r.setProp("AutoWidth","Autowidth",!1,"bool");r.setProp("AutoHeight","Autoheight",!0,"bool");r.setProp("Cls","Cls","PanelFilled_BaseColor","str");r.setProp("ShowHeader","Showheader",!0,"bool");r.setProp("Title","Title","Opciones","str");r.setProp("Collapsible","Collapsible",!0,"bool");r.setProp("Collapsed","Collapsed",!1,"bool");r.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");r.setProp("IconPosition","Iconposition","Right","str");r.setProp("AutoScroll","Autoscroll",!1,"bool");r.setProp("Visible","Visible",!0,"bool");r.setC2ShowFunction(function(n){n.show()});this.setUserControl(r);this.GRIDPAGINATIONBARContainer=gx.uc.getNew(this,58,26,"DVelop_DVPaginationBar","GRIDPAGINATIONBARContainer","Gridpaginationbar","GRIDPAGINATIONBAR");t=this.GRIDPAGINATIONBARContainer;t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("Class","Class","PaginationBar","str");t.setProp("ShowFirst","Showfirst",!1,"bool");t.setProp("ShowPrevious","Showprevious",!0,"bool");t.setProp("ShowNext","Shownext",!0,"bool");t.setProp("ShowLast","Showlast",!1,"bool");t.setProp("PagesToShow","Pagestoshow",5,"num");t.setProp("PagingButtonsPosition","Pagingbuttonsposition","Right","str");t.setProp("PagingCaptionPosition","Pagingcaptionposition","Left","str");t.setProp("EmptyGridClass","Emptygridclass","PaginationBarEmptyGrid","str");t.setProp("SelectedPage","Selectedpage","","char");t.setProp("RowsPerPageSelector","Rowsperpageselector",!0,"bool");t.setDynProp("RowsPerPageSelectedValue","Rowsperpageselectedvalue",10,"num");t.setProp("RowsPerPageOptions","Rowsperpageoptions","5:WWP_Rows5,10:WWP_Rows10,20:WWP_Rows20,50:WWP_Rows50","str");t.setProp("First","First","First","str");t.setProp("Previous","Previous","WWP_PagingPreviousCaption","str");t.setProp("Next","Next","WWP_PagingNextCaption","str");t.setProp("Last","Last","Last","str");t.setProp("Caption","Caption","Página <CURRENT_PAGE> de <TOTAL_PAGES>","str");t.setProp("EmptyGridCaption","Emptygridcaption","WWP_PagingEmptyGridCaption","str");t.setProp("RowsPerPageCaption","Rowsperpagecaption","WWP_PagingRowsPerPage","str");t.addV2CFunction("AV16GridCurrentPage","vGRIDCURRENTPAGE","SetCurrentPage");t.addC2VFunction(function(n){n.ParentObject.AV16GridCurrentPage=n.GetCurrentPage();gx.fn.setControlValue("vGRIDCURRENTPAGE",n.ParentObject.AV16GridCurrentPage)});t.addV2CFunction("AV17GridPageCount","vGRIDPAGECOUNT","SetPageCount");t.addC2VFunction(function(n){n.ParentObject.AV17GridPageCount=n.GetPageCount();gx.fn.setControlValue("vGRIDPAGECOUNT",n.ParentObject.AV17GridPageCount)});t.setProp("RecordCount","Recordcount","","str");t.setProp("Page","Page","","str");t.setProp("Visible","Visible",!0,"bool");t.setC2ShowFunction(function(n){n.show()});t.addEventHandler("ChangePage",this.e116g2_client);t.addEventHandler("ChangeRowsPerPage",this.e126g2_client);this.setUserControl(t);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLEMAIN",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[11]={id:11,fld:"TABLEHEADER",grid:0};n[12]={id:12,fld:"",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"TABLEFILTERS",grid:0};n[15]={id:15,fld:"",grid:0};n[16]={id:16,fld:"",grid:0};n[17]={id:17,fld:"TABLESPLITTEDFILTERTEXTAUTORIZACIONFECHA",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,fld:"",grid:0};n[20]={id:20,fld:"FILTERTEXTAUTORIZACIONFECHA",format:0,grid:0};n[21]={id:21,fld:"",grid:0};n[22]={id:22,fld:"TABLEMERGEDAUTORIZACIONFECHA",grid:0};n[25]={id:25,fld:"",grid:0};n[26]={id:26,lvl:0,type:"date",len:10,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Autorizacionfecha,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vAUTORIZACIONFECHA",gxz:"ZV12AutorizacionFecha",gxold:"OV12AutorizacionFecha",gxvar:"AV12AutorizacionFecha",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[26],ip:[26],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV12AutorizacionFecha=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.ZV12AutorizacionFecha=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("vAUTORIZACIONFECHA",gx.O.AV12AutorizacionFecha,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV12AutorizacionFecha=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getControlValue("vAUTORIZACIONFECHA")},nac:gx.falseFn};n[28]={id:28,fld:"AUTORIZACIONFECHA_RANGEMIDDLETEXT",format:0,grid:0};n[30]={id:30,fld:"",grid:0};n[31]={id:31,lvl:0,type:"date",len:10,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Autorizacionfecha_to,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vAUTORIZACIONFECHA_TO",gxz:"ZV13AutorizacionFecha_To",gxold:"OV13AutorizacionFecha_To",gxvar:"AV13AutorizacionFecha_To",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[31],ip:[31],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV13AutorizacionFecha_To=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.ZV13AutorizacionFecha_To=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("vAUTORIZACIONFECHA_TO",gx.O.AV13AutorizacionFecha_To,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV13AutorizacionFecha_To=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getControlValue("vAUTORIZACIONFECHA_TO")},nac:gx.falseFn};n[32]={id:32,fld:"",grid:0};n[33]={id:33,fld:"",grid:0};n[35]={id:35,fld:"",grid:0};n[36]={id:36,fld:"",grid:0};n[37]={id:37,fld:"GRIDTABLEWITHPAGINATIONBAR",grid:0};n[38]={id:38,fld:"",grid:0};n[39]={id:39,fld:"",grid:0};n[41]={id:41,lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vIMPRIMIR",gxz:"ZV19Imprimir",gxold:"OV19Imprimir",gxvar:"AV19Imprimir",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.AV19Imprimir=n)},v2z:function(n){n!==undefined&&(gx.O.ZV19Imprimir=n)},v2c:function(n){gx.fn.setGridMultimediaValue("vIMPRIMIR",n||gx.fn.currentGridRowImpl(40),gx.O.AV19Imprimir,gx.O.AV27Imprimir_GXI)},c2v:function(n){gx.O.AV27Imprimir_GXI=this.val_GXI();this.val(n)!==undefined&&(gx.O.AV19Imprimir=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vIMPRIMIR",n||gx.fn.currentGridRowImpl(40))},val_GXI:function(n){return gx.fn.getGridControlValue("vIMPRIMIR_GXI",n||gx.fn.currentGridRowImpl(40))},gxvar_GXI:"AV27Imprimir_GXI",nac:gx.falseFn,evt:"e166g2_client"};n[42]={id:42,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:0,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDISPLAY",gxz:"ZV18Display",gxold:"OV18Display",gxvar:"AV18Display",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV18Display=n)},v2z:function(n){n!==undefined&&(gx.O.ZV18Display=n)},v2c:function(n){gx.fn.setGridControlValue("vDISPLAY",n||gx.fn.currentGridRowImpl(40),gx.O.AV18Display,1)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV18Display=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vDISPLAY",n||gx.fn.currentGridRowImpl(40))},nac:gx.falseFn};n[43]={id:43,lvl:2,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"AUTORIZACIONID",gxz:"Z293AutorizacionId",gxold:"O293AutorizacionId",gxvar:"A293AutorizacionId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A293AutorizacionId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z293AutorizacionId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("AUTORIZACIONID",n||gx.fn.currentGridRowImpl(40),gx.O.A293AutorizacionId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A293AutorizacionId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("AUTORIZACIONID",n||gx.fn.currentGridRowImpl(40),".")},nac:gx.falseFn};n[44]={id:44,lvl:2,type:"date",len:10,dec:0,sign:!1,ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"AUTORIZACIONFECHA",gxz:"Z2348AutorizacionFecha",gxold:"O2348AutorizacionFecha",gxvar:"A2348AutorizacionFecha",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2348AutorizacionFecha=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z2348AutorizacionFecha=gx.fn.toDatetimeValue(n))},v2c:function(n){gx.fn.setGridControlValue("AUTORIZACIONFECHA",n||gx.fn.currentGridRowImpl(40),gx.O.A2348AutorizacionFecha,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2348AutorizacionFecha=gx.fn.toDatetimeValue(this.val(n)))},val:function(n){return gx.fn.getGridDateTimeValue("AUTORIZACIONFECHA",n||gx.fn.currentGridRowImpl(40))},nac:gx.falseFn};n[45]={id:45,lvl:2,type:"char",len:3,dec:0,sign:!1,ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"AUTORIZACIONTIPO",gxz:"Z2349AutorizacionTipo",gxold:"O2349AutorizacionTipo",gxvar:"A2349AutorizacionTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2349AutorizacionTipo=n)},v2z:function(n){n!==undefined&&(gx.O.Z2349AutorizacionTipo=n)},v2c:function(n){gx.fn.setGridComboBoxValue("AUTORIZACIONTIPO",n||gx.fn.currentGridRowImpl(40),gx.O.A2349AutorizacionTipo);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2349AutorizacionTipo=this.val(n))},val:function(n){return gx.fn.getGridControlValue("AUTORIZACIONTIPO",n||gx.fn.currentGridRowImpl(40))},nac:gx.falseFn};n[46]={id:46,lvl:2,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:this.Valid_Autorizacionentidadid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"AUTORIZACIONENTIDADID",gxz:"Z294AutorizacionEntidadId",gxold:"O294AutorizacionEntidadId",gxvar:"A294AutorizacionEntidadId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A294AutorizacionEntidadId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z294AutorizacionEntidadId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("AUTORIZACIONENTIDADID",n||gx.fn.currentGridRowImpl(40),gx.O.A294AutorizacionEntidadId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A294AutorizacionEntidadId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("AUTORIZACIONENTIDADID",n||gx.fn.currentGridRowImpl(40),".")},nac:gx.falseFn};n[47]={id:47,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"AUTORIZACIONENTIDADNOMBRE",gxz:"Z2355AutorizacionEntidadNombre",gxold:"O2355AutorizacionEntidadNombre",gxvar:"A2355AutorizacionEntidadNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A2355AutorizacionEntidadNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z2355AutorizacionEntidadNombre=n)},v2c:function(n){gx.fn.setGridControlValue("AUTORIZACIONENTIDADNOMBRE",n||gx.fn.currentGridRowImpl(40),gx.O.A2355AutorizacionEntidadNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2355AutorizacionEntidadNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("AUTORIZACIONENTIDADNOMBRE",n||gx.fn.currentGridRowImpl(40))},nac:gx.falseFn};n[48]={id:48,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:this.Valid_Autorizacionsucursalid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"AUTORIZACIONSUCURSALID",gxz:"Z295AutorizacionSucursalId",gxold:"O295AutorizacionSucursalId",gxvar:"A295AutorizacionSucursalId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A295AutorizacionSucursalId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z295AutorizacionSucursalId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("AUTORIZACIONSUCURSALID",n||gx.fn.currentGridRowImpl(40),gx.O.A295AutorizacionSucursalId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A295AutorizacionSucursalId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("AUTORIZACIONSUCURSALID",n||gx.fn.currentGridRowImpl(40),".")},nac:gx.falseFn};n[49]={id:49,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"AUTORIZACIONSUCURSALNOMBRE",gxz:"Z2356AutorizacionSucursalNombre",gxold:"O2356AutorizacionSucursalNombre",gxvar:"A2356AutorizacionSucursalNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A2356AutorizacionSucursalNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z2356AutorizacionSucursalNombre=n)},v2c:function(n){gx.fn.setGridControlValue("AUTORIZACIONSUCURSALNOMBRE",n||gx.fn.currentGridRowImpl(40),gx.O.A2356AutorizacionSucursalNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2356AutorizacionSucursalNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("AUTORIZACIONSUCURSALNOMBRE",n||gx.fn.currentGridRowImpl(40))},nac:gx.falseFn};n[50]={id:50,lvl:2,type:"char",len:15,dec:0,sign:!1,ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"AUTORIZACIONUSUARIO",gxz:"Z2350AutorizacionUsuario",gxold:"O2350AutorizacionUsuario",gxvar:"A2350AutorizacionUsuario",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A2350AutorizacionUsuario=n)},v2z:function(n){n!==undefined&&(gx.O.Z2350AutorizacionUsuario=n)},v2c:function(n){gx.fn.setGridControlValue("AUTORIZACIONUSUARIO",n||gx.fn.currentGridRowImpl(40),gx.O.A2350AutorizacionUsuario,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2350AutorizacionUsuario=this.val(n))},val:function(n){return gx.fn.getGridControlValue("AUTORIZACIONUSUARIO",n||gx.fn.currentGridRowImpl(40))},nac:gx.falseFn};n[51]={id:51,lvl:2,type:"char",len:8,dec:0,sign:!1,pic:"99:99:99",ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"AUTORIZACIONHORA",gxz:"Z2351AutorizacionHora",gxold:"O2351AutorizacionHora",gxvar:"A2351AutorizacionHora",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A2351AutorizacionHora=n)},v2z:function(n){n!==undefined&&(gx.O.Z2351AutorizacionHora=n)},v2c:function(n){gx.fn.setGridControlValue("AUTORIZACIONHORA",n||gx.fn.currentGridRowImpl(40),gx.O.A2351AutorizacionHora,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2351AutorizacionHora=this.val(n))},val:function(n){return gx.fn.getGridControlValue("AUTORIZACIONHORA",n||gx.fn.currentGridRowImpl(40))},nac:gx.falseFn};n[52]={id:52,lvl:2,type:"vchar",len:500,dec:100,sign:!1,ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"AUTORIZACIONOBS",gxz:"Z2352AutorizacionObs",gxold:"O2352AutorizacionObs",gxvar:"A2352AutorizacionObs",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A2352AutorizacionObs=n)},v2z:function(n){n!==undefined&&(gx.O.Z2352AutorizacionObs=n)},v2c:function(n){gx.fn.setGridControlValue("AUTORIZACIONOBS",n||gx.fn.currentGridRowImpl(40),gx.O.A2352AutorizacionObs,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2352AutorizacionObs=this.val(n))},val:function(n){return gx.fn.getGridControlValue("AUTORIZACIONOBS",n||gx.fn.currentGridRowImpl(40))},nac:gx.falseFn};n[53]={id:53,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"AUTORIZACIONIMPORTE",gxz:"Z2353AutorizacionImporte",gxold:"O2353AutorizacionImporte",gxvar:"A2353AutorizacionImporte",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2353AutorizacionImporte=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2353AutorizacionImporte=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("AUTORIZACIONIMPORTE",n||gx.fn.currentGridRowImpl(40),gx.O.A2353AutorizacionImporte,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2353AutorizacionImporte=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("AUTORIZACIONIMPORTE",n||gx.fn.currentGridRowImpl(40),".",",")},nac:gx.falseFn};n[54]={id:54,lvl:2,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"AUTORIZACIONORIGENID",gxz:"Z2354AutorizacionOrigenId",gxold:"O2354AutorizacionOrigenId",gxvar:"A2354AutorizacionOrigenId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A2354AutorizacionOrigenId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z2354AutorizacionOrigenId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("AUTORIZACIONORIGENID",n||gx.fn.currentGridRowImpl(40),gx.O.A2354AutorizacionOrigenId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2354AutorizacionOrigenId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("AUTORIZACIONORIGENID",n||gx.fn.currentGridRowImpl(40),".")},nac:gx.falseFn};n[55]={id:55,lvl:2,type:"char",len:3,dec:0,sign:!1,ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"AUTORIZACIONESTADO",gxz:"Z2379AutorizacionEstado",gxold:"O2379AutorizacionEstado",gxvar:"A2379AutorizacionEstado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2379AutorizacionEstado=n)},v2z:function(n){n!==undefined&&(gx.O.Z2379AutorizacionEstado=n)},v2c:function(n){gx.fn.setGridComboBoxValue("AUTORIZACIONESTADO",n||gx.fn.currentGridRowImpl(40),gx.O.A2379AutorizacionEstado);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2379AutorizacionEstado=this.val(n))},val:function(n){return gx.fn.getGridControlValue("AUTORIZACIONESTADO",n||gx.fn.currentGridRowImpl(40))},nac:gx.falseFn};n[56]={id:56,fld:"",grid:0};n[57]={id:57,fld:"",grid:0};this.AV12AutorizacionFecha=gx.date.nullDate();this.ZV12AutorizacionFecha=gx.date.nullDate();this.OV12AutorizacionFecha=gx.date.nullDate();this.AV13AutorizacionFecha_To=gx.date.nullDate();this.ZV13AutorizacionFecha_To=gx.date.nullDate();this.OV13AutorizacionFecha_To=gx.date.nullDate();this.ZV19Imprimir="";this.OV19Imprimir="";this.ZV18Display="";this.OV18Display="";this.Z293AutorizacionId=0;this.O293AutorizacionId=0;this.Z2348AutorizacionFecha=gx.date.nullDate();this.O2348AutorizacionFecha=gx.date.nullDate();this.Z2349AutorizacionTipo="";this.O2349AutorizacionTipo="";this.Z294AutorizacionEntidadId=0;this.O294AutorizacionEntidadId=0;this.Z2355AutorizacionEntidadNombre="";this.O2355AutorizacionEntidadNombre="";this.Z295AutorizacionSucursalId=0;this.O295AutorizacionSucursalId=0;this.Z2356AutorizacionSucursalNombre="";this.O2356AutorizacionSucursalNombre="";this.Z2350AutorizacionUsuario="";this.O2350AutorizacionUsuario="";this.Z2351AutorizacionHora="";this.O2351AutorizacionHora="";this.Z2352AutorizacionObs="";this.O2352AutorizacionObs="";this.Z2353AutorizacionImporte=0;this.O2353AutorizacionImporte=0;this.Z2354AutorizacionOrigenId=0;this.O2354AutorizacionOrigenId=0;this.Z2379AutorizacionEstado="";this.O2379AutorizacionEstado="";this.AV12AutorizacionFecha=gx.date.nullDate();this.AV13AutorizacionFecha_To=gx.date.nullDate();this.AV16GridCurrentPage=0;this.AV19Imprimir="";this.AV18Display="";this.A293AutorizacionId=0;this.A2348AutorizacionFecha=gx.date.nullDate();this.A2349AutorizacionTipo="";this.A294AutorizacionEntidadId=0;this.A2355AutorizacionEntidadNombre="";this.A295AutorizacionSucursalId=0;this.A2356AutorizacionSucursalNombre="";this.A2350AutorizacionUsuario="";this.A2351AutorizacionHora="";this.A2352AutorizacionObs="";this.A2353AutorizacionImporte=0;this.A2354AutorizacionOrigenId=0;this.A2379AutorizacionEstado="";this.AV28Pgmname="";this.AV23IsAuthorized_Display=!1;this.Events={e116g2_client:["GRIDPAGINATIONBAR.CHANGEPAGE",!0],e126g2_client:["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!0],e166g2_client:["VIMPRIMIR.CLICK",!0],e176g2_client:["ENTER",!0],e186g2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV12AutorizacionFecha",fld:"vAUTORIZACIONFECHA",pic:""},{av:"AV13AutorizacionFecha_To",fld:"vAUTORIZACIONFECHA_TO",pic:""},{av:"AV28Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV23IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0}],[{av:"AV16GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"},{av:"AV17GridPageCount",fld:"vGRIDPAGECOUNT",pic:"ZZZZZZZZZ9"},{av:"AV23IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:'gx.fn.getCtrlProperty("vDISPLAY","Visible")',ctrl:"vDISPLAY",prop:"Visible"}]];this.EvtParms.START=[[{av:"AV28Pgmname",fld:"vPGMNAME",pic:"",hsh:!0}],[{ctrl:"GRID",prop:"Rows"},{ctrl:"FORM",prop:"Caption"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"},{av:"AV12AutorizacionFecha",fld:"vAUTORIZACIONFECHA",pic:""},{av:"AV13AutorizacionFecha_To",fld:"vAUTORIZACIONFECHA_TO",pic:""},{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV28Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV23IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0}]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV12AutorizacionFecha",fld:"vAUTORIZACIONFECHA",pic:""},{av:"AV13AutorizacionFecha_To",fld:"vAUTORIZACIONFECHA_TO",pic:""},{av:"AV28Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV23IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:"this.GRIDPAGINATIONBARContainer.SelectedPage",ctrl:"GRIDPAGINATIONBAR",prop:"SelectedPage"}],[]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV12AutorizacionFecha",fld:"vAUTORIZACIONFECHA",pic:""},{av:"AV13AutorizacionFecha_To",fld:"vAUTORIZACIONFECHA_TO",pic:""},{av:"AV28Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV23IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}],[{ctrl:"GRID",prop:"Rows"}]];this.EvtParms["GRID.LOAD"]=[[{av:"AV23IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:"A293AutorizacionId",fld:"AUTORIZACIONID",pic:"ZZZZZZZ9",hsh:!0}],[{av:"AV19Imprimir",fld:"vIMPRIMIR",pic:""},{av:'gx.fn.getCtrlProperty("vIMPRIMIR","Tooltiptext")',ctrl:"vIMPRIMIR",prop:"Tooltiptext"},{av:"AV18Display",fld:"vDISPLAY",pic:""},{av:'gx.fn.getCtrlProperty("vDISPLAY","Link")',ctrl:"vDISPLAY",prop:"Link"}]];this.EvtParms["VIMPRIMIR.CLICK"]=[[{av:"A293AutorizacionId",fld:"AUTORIZACIONID",pic:"ZZZZZZZ9",hsh:!0}],[]];this.EvtParms.VALIDV_AUTORIZACIONFECHA=[[],[]];this.EvtParms.VALIDV_AUTORIZACIONFECHA_TO=[[],[]];this.EvtParms.VALID_AUTORIZACIONENTIDADID=[[],[]];this.EvtParms.VALID_AUTORIZACIONSUCURSALID=[[],[]];this.setVCMap("AV28Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV23IsAuthorized_Display","vISAUTHORIZED_DISPLAY",0,"boolean",4,0);this.setVCMap("AV28Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV23IsAuthorized_Display","vISAUTHORIZED_DISPLAY",0,"boolean",4,0);this.setVCMap("AV28Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV23IsAuthorized_Display","vISAUTHORIZED_DISPLAY",0,"boolean",4,0);i.addRefreshingVar(this.GXValidFnc[26]);i.addRefreshingVar(this.GXValidFnc[31]);i.addRefreshingVar({rfrVar:"AV28Pgmname"});i.addRefreshingVar({rfrVar:"AV23IsAuthorized_Display"});i.addRefreshingParm(this.GXValidFnc[26]);i.addRefreshingParm(this.GXValidFnc[31]);i.addRefreshingParm({rfrVar:"AV28Pgmname"});i.addRefreshingParm({rfrVar:"AV23IsAuthorized_Display"});this.Initialize()});gx.wi(function(){gx.createParentObj(wwextraautorizacionegresocaja)})