/*!   GeneXus C# 16_0_5-135614 on 10/2/2019 19:9:37.64
*/
gx.evt.autoSkip=!1;gx.define("telefono_p",!0,function(n){var t,r,i;this.ServerClass="telefono_p";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.setCmpContext(n);this.ReadonlyForm=!0;this.anyGridBaseTable=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV44Pgmname=gx.fn.getControlValue("vPGMNAME");this.AV36IsAuthorized_Delete=gx.fn.getControlValue("vISAUTHORIZED_DELETE");this.AV37IsAuthorized_Update=gx.fn.getControlValue("vISAUTHORIZED_UPDATE");this.AV41IsAuthorized_Display=gx.fn.getControlValue("vISAUTHORIZED_DISPLAY");this.AV7PersonaId=gx.fn.getIntegerValue("vPERSONAID",".");this.AV7PersonaId=gx.fn.getIntegerValue("vPERSONAID",".");this.AV44Pgmname=gx.fn.getControlValue("vPGMNAME");this.AV36IsAuthorized_Delete=gx.fn.getControlValue("vISAUTHORIZED_DELETE");this.AV37IsAuthorized_Update=gx.fn.getControlValue("vISAUTHORIZED_UPDATE");this.AV41IsAuthorized_Display=gx.fn.getControlValue("vISAUTHORIZED_DISPLAY")};this.Validv_Personateltipo=function(){return this.validCliEvt("Validv_Personateltipo",0,function(){try{var n=gx.util.balloon.getNew("vPERSONATELTIPO");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e11cp2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEPAGE",!1,null,!0,!0)};this.e12cp2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!1,null,!0,!0)};this.e13cp2_client=function(){return this.executeServerEvent("'DOINSERT'",!1,null,!1,!1)};this.e17cp2_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e18cp2_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,27,30,31,32,33,34,35,36,37,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,58,59,60,61];this.GXLastCtrlId=61;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",38,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"telefono_p",[],!1,1,!1,!0,0,!1,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);r=this.GridContainer;r.addSingleLineEdit("Delete",39,"vDELETE","","Eliminar","Delete","char",0,"px",20,20,"left",null,[],"Delete","Delete",!0,0,!1,!1,"Attribute",1,"WWIconActionColumn");r.addSingleLineEdit("Update",40,"vUPDATE","","Modificar","Update","char",0,"px",20,20,"left",null,[],"Update","Update",!0,0,!1,!1,"Attribute",1,"WWIconActionColumn");r.addSingleLineEdit("Display",41,"vDISPLAY","","Visualizar","Display","char",0,"px",20,20,"left",null,[],"Display","Display",!0,0,!1,!1,"Attribute",1,"WWIconActionColumn");r.addSingleLineEdit(138,42,"PERSONATEL095","Fecha","","PersonaTel095","dtime",0,"px",14,14,"right",null,[],138,"PersonaTel095",!0,5,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addComboBox(937,43,"PERSONATELTIPO","Tipo","PersonaTelTipo","int",null,0,!0,!1,0,"px","WWColumn");r.addCheckBox(938,44,"PERSONATELCONFIRMADO","Confirmado","","PersonaTelConfirmado","boolean","true","false",null,!1,!1,0,"px","WWColumn hidden-xs");r.addSingleLineEdit(939,45,"PERSONATELCODAREA","Código Area","","PersonaTelCodArea","int",0,"px",4,4,"right",null,[],939,"PersonaTelCodArea",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(940,46,"PERSONATELNRO","Número","","PersonaTelNro","char",0,"px",20,20,"left",null,[],940,"PersonaTelNro",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(941,47,"PERSONATELREFERENCIA","Nº Referencia","","PersonaTelReferencia","char",0,"px",20,20,"left",null,[],941,"PersonaTelReferencia",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(942,48,"PERSONATELINTERNO","Interno","","PersonaTelInterno","int",0,"px",4,4,"right",null,[],942,"PersonaTelInterno",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(139,49,"PERSONATELENTIDAD","Entidad","","PersonaTelEntidad","int",0,"px",2,2,"right",null,[],139,"PersonaTelEntidad",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addCheckBox(943,50,"PERSONATELULTCONTACTO","Último Contacto","","PersonaTelUltContacto","boolean","true","false",null,!1,!1,0,"px","WWColumn hidden-xs");r.addCheckBox(944,51,"PERSONATELCONMENSAJEAUTOMATICO","Mensaje Automático","","PersonaTelConMensajeAutomatico","boolean","true","false",null,!1,!1,0,"px","WWColumn hidden-xs");r.addSingleLineEdit(945,52,"PERSONATEL094","Usuario Crea","","PersonaTel094","char",0,"px",15,15,"left",null,[],945,"PersonaTel094",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(946,53,"PERSONATEL097","Usuario Modifica","","PersonaTel097","char",0,"px",15,15,"left",null,[],946,"PersonaTel097",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(947,54,"PERSONATEL098","Fecha/Hora Modifica","","PersonaTel098","dtime",0,"px",14,14,"right",null,[],947,"PersonaTel098",!1,5,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");this.GridContainer.emptyText="";this.setGrid(r);this.GRIDPAGINATIONBARContainer=gx.uc.getNew(this,57,32,"DVelop_DVPaginationBar",this.CmpContext+"GRIDPAGINATIONBARContainer","Gridpaginationbar","GRIDPAGINATIONBAR");i=this.GRIDPAGINATIONBARContainer;i.setProp("Enabled","Enabled",!0,"boolean");i.setProp("Class","Class","PaginationBar","str");i.setProp("ShowFirst","Showfirst",!1,"bool");i.setProp("ShowPrevious","Showprevious",!0,"bool");i.setProp("ShowNext","Shownext",!0,"bool");i.setProp("ShowLast","Showlast",!1,"bool");i.setProp("PagesToShow","Pagestoshow",5,"num");i.setProp("PagingButtonsPosition","Pagingbuttonsposition","Right","str");i.setProp("PagingCaptionPosition","Pagingcaptionposition","Left","str");i.setProp("EmptyGridClass","Emptygridclass","PaginationBarEmptyGrid","str");i.setProp("SelectedPage","Selectedpage","","char");i.setProp("RowsPerPageSelector","Rowsperpageselector",!0,"bool");i.setDynProp("RowsPerPageSelectedValue","Rowsperpageselectedvalue",10,"num");i.setProp("RowsPerPageOptions","Rowsperpageoptions","5:WWP_Rows5,10:WWP_Rows10,20:WWP_Rows20,50:WWP_Rows50","str");i.setProp("First","First","First","str");i.setProp("Previous","Previous","WWP_PagingPreviousCaption","str");i.setProp("Next","Next","WWP_PagingNextCaption","str");i.setProp("Last","Last","Last","str");i.setProp("Caption","Caption","Página <CURRENT_PAGE> de <TOTAL_PAGES>","str");i.setProp("EmptyGridCaption","Emptygridcaption","WWP_PagingEmptyGridCaption","str");i.setProp("RowsPerPageCaption","Rowsperpagecaption","WWP_PagingRowsPerPage","str");i.addV2CFunction("AV33GridCurrentPage","vGRIDCURRENTPAGE","SetCurrentPage");i.addC2VFunction(function(n){n.ParentObject.AV33GridCurrentPage=n.GetCurrentPage();gx.fn.setControlValue("vGRIDCURRENTPAGE",n.ParentObject.AV33GridCurrentPage)});i.addV2CFunction("AV34GridPageCount","vGRIDPAGECOUNT","SetPageCount");i.addC2VFunction(function(n){n.ParentObject.AV34GridPageCount=n.GetPageCount();gx.fn.setControlValue("vGRIDPAGECOUNT",n.ParentObject.AV34GridPageCount)});i.setProp("RecordCount","Recordcount","","str");i.setProp("Page","Page","","str");i.setProp("Visible","Visible",!0,"bool");i.setProp("Gx Control Type","Gxcontroltype","","int");i.setC2ShowFunction(function(n){n.show()});i.addEventHandler("ChangePage",this.e11cp2_client);i.addEventHandler("ChangeRowsPerPage",this.e12cp2_client);this.setUserControl(i);t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"",grid:0};t[6]={id:6,fld:"TABLEGRIDHEADER",grid:0};t[7]={id:7,fld:"",grid:0};t[8]={id:8,fld:"",grid:0};t[10]={id:10,fld:"",grid:0};t[11]={id:11,fld:"",grid:0};t[12]={id:12,fld:"TABLEHEADER",grid:0};t[13]={id:13,fld:"",grid:0};t[14]={id:14,fld:"",grid:0};t[15]={id:15,fld:"TABLEACTIONS",grid:0};t[16]={id:16,fld:"",grid:0};t[17]={id:17,fld:"",grid:0};t[18]={id:18,fld:"PERSONATELEFONOTITLE",format:0,grid:0};t[19]={id:19,fld:"",grid:0};t[20]={id:20,fld:"",grid:0};t[21]={id:21,fld:"",grid:0};t[22]={id:22,fld:"BTNINSERT",grid:0,evt:"e13cp2_client"};t[23]={id:23,fld:"",grid:0};t[24]={id:24,fld:"TABLERIGHTHEADER",grid:0};t[27]={id:27,fld:"TABLEFILTERS",grid:0};t[30]={id:30,fld:"",grid:0};t[31]={id:31,fld:"",grid:0};t[32]={id:32,lvl:0,type:"int",len:1,dec:0,sign:!1,pic:"9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Personateltipo,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vPERSONATELTIPO",gxz:"ZV15PersonaTelTipo",gxold:"OV15PersonaTelTipo",gxvar:"AV15PersonaTelTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.AV15PersonaTelTipo=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV15PersonaTelTipo=gx.num.intval(n))},v2c:function(){gx.fn.setComboBoxValue("vPERSONATELTIPO",gx.O.AV15PersonaTelTipo)},c2v:function(){this.val()!==undefined&&(gx.O.AV15PersonaTelTipo=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vPERSONATELTIPO",".")},nac:gx.falseFn};t[33]={id:33,fld:"",grid:0};t[34]={id:34,fld:"",grid:0};t[35]={id:35,fld:"GRIDTABLEWITHPAGINATIONBAR",grid:0};t[36]={id:36,fld:"",grid:0};t[37]={id:37,fld:"",grid:0};t[39]={id:39,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:38,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDELETE",gxz:"ZV16Delete",gxold:"OV16Delete",gxvar:"AV16Delete",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV16Delete=n)},v2z:function(n){n!==undefined&&(gx.O.ZV16Delete=n)},v2c:function(n){gx.fn.setGridControlValue("vDELETE",n||gx.fn.currentGridRowImpl(38),gx.O.AV16Delete,1)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV16Delete=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vDELETE",n||gx.fn.currentGridRowImpl(38))},nac:gx.falseFn};t[40]={id:40,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:38,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUPDATE",gxz:"ZV17Update",gxold:"OV17Update",gxvar:"AV17Update",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV17Update=n)},v2z:function(n){n!==undefined&&(gx.O.ZV17Update=n)},v2c:function(n){gx.fn.setGridControlValue("vUPDATE",n||gx.fn.currentGridRowImpl(38),gx.O.AV17Update,1)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV17Update=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vUPDATE",n||gx.fn.currentGridRowImpl(38))},nac:gx.falseFn};t[41]={id:41,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:38,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDISPLAY",gxz:"ZV18Display",gxold:"OV18Display",gxvar:"AV18Display",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV18Display=n)},v2z:function(n){n!==undefined&&(gx.O.ZV18Display=n)},v2c:function(n){gx.fn.setGridControlValue("vDISPLAY",n||gx.fn.currentGridRowImpl(38),gx.O.AV18Display,1)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV18Display=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vDISPLAY",n||gx.fn.currentGridRowImpl(38))},nac:gx.falseFn};t[42]={id:42,lvl:2,type:"dtime",len:8,dec:5,sign:!1,ro:1,isacc:0,grid:38,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERSONATEL095",gxz:"Z138PersonaTel095",gxold:"O138PersonaTel095",gxvar:"A138PersonaTel095",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A138PersonaTel095=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z138PersonaTel095=gx.fn.toDatetimeValue(n))},v2c:function(n){gx.fn.setGridControlValue("PERSONATEL095",n||gx.fn.currentGridRowImpl(38),gx.O.A138PersonaTel095,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A138PersonaTel095=gx.fn.toDatetimeValue(this.val(n)))},val:function(n){return gx.fn.getGridDateTimeValue("PERSONATEL095",n||gx.fn.currentGridRowImpl(38))},nac:gx.falseFn};t[43]={id:43,lvl:2,type:"int",len:1,dec:0,sign:!1,pic:"9",ro:1,isacc:0,grid:38,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERSONATELTIPO",gxz:"Z937PersonaTelTipo",gxold:"O937PersonaTelTipo",gxvar:"A937PersonaTelTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A937PersonaTelTipo=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z937PersonaTelTipo=gx.num.intval(n))},v2c:function(n){gx.fn.setGridComboBoxValue("PERSONATELTIPO",n||gx.fn.currentGridRowImpl(38),gx.O.A937PersonaTelTipo);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A937PersonaTelTipo=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("PERSONATELTIPO",n||gx.fn.currentGridRowImpl(38),".")},nac:gx.falseFn};t[44]={id:44,lvl:2,type:"boolean",len:4,dec:0,sign:!1,ro:1,isacc:0,grid:38,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERSONATELCONFIRMADO",gxz:"Z938PersonaTelConfirmado",gxold:"O938PersonaTelConfirmado",gxvar:"A938PersonaTelConfirmado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A938PersonaTelConfirmado=gx.lang.booleanValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z938PersonaTelConfirmado=gx.lang.booleanValue(n))},v2c:function(n){gx.fn.setGridCheckBoxValue("PERSONATELCONFIRMADO",n||gx.fn.currentGridRowImpl(38),gx.O.A938PersonaTelConfirmado,!0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A938PersonaTelConfirmado=gx.lang.booleanValue(this.val(n)))},val:function(n){return gx.fn.getGridControlValue("PERSONATELCONFIRMADO",n||gx.fn.currentGridRowImpl(38))},nac:gx.falseFn,values:["true","false"]};t[45]={id:45,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:38,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERSONATELCODAREA",gxz:"Z939PersonaTelCodArea",gxold:"O939PersonaTelCodArea",gxvar:"A939PersonaTelCodArea",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A939PersonaTelCodArea=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z939PersonaTelCodArea=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("PERSONATELCODAREA",n||gx.fn.currentGridRowImpl(38),gx.O.A939PersonaTelCodArea,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A939PersonaTelCodArea=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("PERSONATELCODAREA",n||gx.fn.currentGridRowImpl(38),".")},nac:gx.falseFn};t[46]={id:46,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:38,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERSONATELNRO",gxz:"Z940PersonaTelNro",gxold:"O940PersonaTelNro",gxvar:"A940PersonaTelNro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A940PersonaTelNro=n)},v2z:function(n){n!==undefined&&(gx.O.Z940PersonaTelNro=n)},v2c:function(n){gx.fn.setGridControlValue("PERSONATELNRO",n||gx.fn.currentGridRowImpl(38),gx.O.A940PersonaTelNro,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A940PersonaTelNro=this.val(n))},val:function(n){return gx.fn.getGridControlValue("PERSONATELNRO",n||gx.fn.currentGridRowImpl(38))},nac:gx.falseFn};t[47]={id:47,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:38,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERSONATELREFERENCIA",gxz:"Z941PersonaTelReferencia",gxold:"O941PersonaTelReferencia",gxvar:"A941PersonaTelReferencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A941PersonaTelReferencia=n)},v2z:function(n){n!==undefined&&(gx.O.Z941PersonaTelReferencia=n)},v2c:function(n){gx.fn.setGridControlValue("PERSONATELREFERENCIA",n||gx.fn.currentGridRowImpl(38),gx.O.A941PersonaTelReferencia,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A941PersonaTelReferencia=this.val(n))},val:function(n){return gx.fn.getGridControlValue("PERSONATELREFERENCIA",n||gx.fn.currentGridRowImpl(38))},nac:gx.falseFn};t[48]={id:48,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:38,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERSONATELINTERNO",gxz:"Z942PersonaTelInterno",gxold:"O942PersonaTelInterno",gxvar:"A942PersonaTelInterno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A942PersonaTelInterno=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z942PersonaTelInterno=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("PERSONATELINTERNO",n||gx.fn.currentGridRowImpl(38),gx.O.A942PersonaTelInterno,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A942PersonaTelInterno=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("PERSONATELINTERNO",n||gx.fn.currentGridRowImpl(38),".")},nac:gx.falseFn};t[49]={id:49,lvl:2,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:1,isacc:0,grid:38,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERSONATELENTIDAD",gxz:"Z139PersonaTelEntidad",gxold:"O139PersonaTelEntidad",gxvar:"A139PersonaTelEntidad",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A139PersonaTelEntidad=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z139PersonaTelEntidad=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("PERSONATELENTIDAD",n||gx.fn.currentGridRowImpl(38),gx.O.A139PersonaTelEntidad,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A139PersonaTelEntidad=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("PERSONATELENTIDAD",n||gx.fn.currentGridRowImpl(38),".")},nac:gx.falseFn};t[50]={id:50,lvl:2,type:"boolean",len:4,dec:0,sign:!1,ro:1,isacc:0,grid:38,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERSONATELULTCONTACTO",gxz:"Z943PersonaTelUltContacto",gxold:"O943PersonaTelUltContacto",gxvar:"A943PersonaTelUltContacto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A943PersonaTelUltContacto=gx.lang.booleanValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z943PersonaTelUltContacto=gx.lang.booleanValue(n))},v2c:function(n){gx.fn.setGridCheckBoxValue("PERSONATELULTCONTACTO",n||gx.fn.currentGridRowImpl(38),gx.O.A943PersonaTelUltContacto,!0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A943PersonaTelUltContacto=gx.lang.booleanValue(this.val(n)))},val:function(n){return gx.fn.getGridControlValue("PERSONATELULTCONTACTO",n||gx.fn.currentGridRowImpl(38))},nac:gx.falseFn,values:["true","false"]};t[51]={id:51,lvl:2,type:"boolean",len:4,dec:0,sign:!1,ro:1,isacc:0,grid:38,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERSONATELCONMENSAJEAUTOMATICO",gxz:"Z944PersonaTelConMensajeAutomatico",gxold:"O944PersonaTelConMensajeAutomatico",gxvar:"A944PersonaTelConMensajeAutomatico",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A944PersonaTelConMensajeAutomatico=gx.lang.booleanValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z944PersonaTelConMensajeAutomatico=gx.lang.booleanValue(n))},v2c:function(n){gx.fn.setGridCheckBoxValue("PERSONATELCONMENSAJEAUTOMATICO",n||gx.fn.currentGridRowImpl(38),gx.O.A944PersonaTelConMensajeAutomatico,!0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A944PersonaTelConMensajeAutomatico=gx.lang.booleanValue(this.val(n)))},val:function(n){return gx.fn.getGridControlValue("PERSONATELCONMENSAJEAUTOMATICO",n||gx.fn.currentGridRowImpl(38))},nac:gx.falseFn,values:["true","false"]};t[52]={id:52,lvl:2,type:"char",len:15,dec:0,sign:!1,ro:1,isacc:0,grid:38,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERSONATEL094",gxz:"Z945PersonaTel094",gxold:"O945PersonaTel094",gxvar:"A945PersonaTel094",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A945PersonaTel094=n)},v2z:function(n){n!==undefined&&(gx.O.Z945PersonaTel094=n)},v2c:function(n){gx.fn.setGridControlValue("PERSONATEL094",n||gx.fn.currentGridRowImpl(38),gx.O.A945PersonaTel094,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A945PersonaTel094=this.val(n))},val:function(n){return gx.fn.getGridControlValue("PERSONATEL094",n||gx.fn.currentGridRowImpl(38))},nac:gx.falseFn};t[53]={id:53,lvl:2,type:"char",len:15,dec:0,sign:!1,ro:1,isacc:0,grid:38,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERSONATEL097",gxz:"Z946PersonaTel097",gxold:"O946PersonaTel097",gxvar:"A946PersonaTel097",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A946PersonaTel097=n)},v2z:function(n){n!==undefined&&(gx.O.Z946PersonaTel097=n)},v2c:function(n){gx.fn.setGridControlValue("PERSONATEL097",n||gx.fn.currentGridRowImpl(38),gx.O.A946PersonaTel097,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A946PersonaTel097=this.val(n))},val:function(n){return gx.fn.getGridControlValue("PERSONATEL097",n||gx.fn.currentGridRowImpl(38))},nac:gx.falseFn};t[54]={id:54,lvl:2,type:"dtime",len:8,dec:5,sign:!1,ro:1,isacc:0,grid:38,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERSONATEL098",gxz:"Z947PersonaTel098",gxold:"O947PersonaTel098",gxvar:"A947PersonaTel098",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A947PersonaTel098=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z947PersonaTel098=gx.fn.toDatetimeValue(n))},v2c:function(n){gx.fn.setGridControlValue("PERSONATEL098",n||gx.fn.currentGridRowImpl(38),gx.O.A947PersonaTel098,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A947PersonaTel098=gx.fn.toDatetimeValue(this.val(n)))},val:function(n){return gx.fn.getGridDateTimeValue("PERSONATEL098",n||gx.fn.currentGridRowImpl(38))},nac:gx.falseFn};t[55]={id:55,fld:"",grid:0};t[56]={id:56,fld:"",grid:0};t[58]={id:58,fld:"",grid:0};t[59]={id:59,fld:"",grid:0};t[60]={id:60,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};t[61]={id:61,lvl:0,type:"int",len:15,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERSONAID",gxz:"Z63PersonaId",gxold:"O63PersonaId",gxvar:"A63PersonaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A63PersonaId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z63PersonaId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("PERSONAID",gx.O.A63PersonaId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A63PersonaId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("PERSONAID",".")},nac:gx.falseFn};this.AV15PersonaTelTipo=0;this.ZV15PersonaTelTipo=0;this.OV15PersonaTelTipo=0;this.ZV16Delete="";this.OV16Delete="";this.ZV17Update="";this.OV17Update="";this.ZV18Display="";this.OV18Display="";this.Z138PersonaTel095=gx.date.nullDate();this.O138PersonaTel095=gx.date.nullDate();this.Z937PersonaTelTipo=0;this.O937PersonaTelTipo=0;this.Z938PersonaTelConfirmado=!1;this.O938PersonaTelConfirmado=!1;this.Z939PersonaTelCodArea=0;this.O939PersonaTelCodArea=0;this.Z940PersonaTelNro="";this.O940PersonaTelNro="";this.Z941PersonaTelReferencia="";this.O941PersonaTelReferencia="";this.Z942PersonaTelInterno=0;this.O942PersonaTelInterno=0;this.Z139PersonaTelEntidad=0;this.O139PersonaTelEntidad=0;this.Z943PersonaTelUltContacto=!1;this.O943PersonaTelUltContacto=!1;this.Z944PersonaTelConMensajeAutomatico=!1;this.O944PersonaTelConMensajeAutomatico=!1;this.Z945PersonaTel094="";this.O945PersonaTel094="";this.Z946PersonaTel097="";this.O946PersonaTel097="";this.Z947PersonaTel098=gx.date.nullDate();this.O947PersonaTel098=gx.date.nullDate();this.A63PersonaId=0;this.Z63PersonaId=0;this.O63PersonaId=0;this.AV15PersonaTelTipo=0;this.AV33GridCurrentPage=0;this.A63PersonaId=0;this.AV7PersonaId=0;this.AV16Delete="";this.AV17Update="";this.AV18Display="";this.A138PersonaTel095=gx.date.nullDate();this.A937PersonaTelTipo=0;this.A938PersonaTelConfirmado=!1;this.A939PersonaTelCodArea=0;this.A940PersonaTelNro="";this.A941PersonaTelReferencia="";this.A942PersonaTelInterno=0;this.A139PersonaTelEntidad=0;this.A943PersonaTelUltContacto=!1;this.A944PersonaTelConMensajeAutomatico=!1;this.A945PersonaTel094="";this.A946PersonaTel097="";this.A947PersonaTel098=gx.date.nullDate();this.AV44Pgmname="";this.AV36IsAuthorized_Delete=!1;this.AV37IsAuthorized_Update=!1;this.AV41IsAuthorized_Display=!1;this.Events={e11cp2_client:["GRIDPAGINATIONBAR.CHANGEPAGE",!0],e12cp2_client:["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!0],e13cp2_client:["'DOINSERT'",!0],e17cp2_client:["ENTER",!0],e18cp2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV7PersonaId",fld:"vPERSONAID",pic:"ZZZZZZZZZZZZZZ9"},{av:"AV36IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:""},{av:"AV37IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:""},{av:"AV41IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:""},{av:"sPrefix"},{ctrl:"GRID",prop:"Rows"},{ctrl:"vPERSONATELTIPO"},{av:"AV15PersonaTelTipo",fld:"vPERSONATELTIPO",pic:"9"},{av:"AV44Pgmname",fld:"vPGMNAME",pic:""},{av:"A63PersonaId",fld:"PERSONAID",pic:"ZZZZZZZZZZZZZZ9"}],[{av:"AV33GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"},{av:"AV34GridPageCount",fld:"vGRIDPAGECOUNT",pic:"ZZZZZZZZZ9"},{av:"AV36IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:""},{av:'gx.fn.getCtrlProperty("vDELETE","Visible")',ctrl:"vDELETE",prop:"Visible"},{av:"AV37IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:""},{av:'gx.fn.getCtrlProperty("vUPDATE","Visible")',ctrl:"vUPDATE",prop:"Visible"},{av:"AV41IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:""},{av:'gx.fn.getCtrlProperty("vDISPLAY","Visible")',ctrl:"vDISPLAY",prop:"Visible"},{ctrl:"BTNINSERT",prop:"Visible"}]];this.EvtParms.START=[[{ctrl:"vPERSONATELTIPO"},{av:"AV15PersonaTelTipo",fld:"vPERSONATELTIPO",pic:"9"},{av:"AV44Pgmname",fld:"vPGMNAME",pic:""},{av:"AV7PersonaId",fld:"vPERSONAID",pic:"ZZZZZZZZZZZZZZ9"}],[{ctrl:"GRID",prop:"Rows"},{ctrl:"vPERSONATELTIPO"},{av:"AV15PersonaTelTipo",fld:"vPERSONATELTIPO",pic:"9"},{av:'gx.fn.getCtrlProperty("PERSONAID","Visible")',ctrl:"PERSONAID",prop:"Visible"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{ctrl:"vPERSONATELTIPO"},{av:"AV15PersonaTelTipo",fld:"vPERSONATELTIPO",pic:"9"},{av:"AV7PersonaId",fld:"vPERSONAID",pic:"ZZZZZZZZZZZZZZ9"},{av:"AV44Pgmname",fld:"vPGMNAME",pic:""},{av:"AV36IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:""},{av:"AV37IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:""},{av:"AV41IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:""},{av:"A63PersonaId",fld:"PERSONAID",pic:"ZZZZZZZZZZZZZZ9"},{av:"sPrefix"},{av:"this.GRIDPAGINATIONBARContainer.SelectedPage",ctrl:"GRIDPAGINATIONBAR",prop:"SelectedPage"}],[]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{ctrl:"vPERSONATELTIPO"},{av:"AV15PersonaTelTipo",fld:"vPERSONATELTIPO",pic:"9"},{av:"AV7PersonaId",fld:"vPERSONAID",pic:"ZZZZZZZZZZZZZZ9"},{av:"AV44Pgmname",fld:"vPGMNAME",pic:""},{av:"AV36IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:""},{av:"AV37IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:""},{av:"AV41IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:""},{av:"A63PersonaId",fld:"PERSONAID",pic:"ZZZZZZZZZZZZZZ9"},{av:"sPrefix"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}],[{ctrl:"GRID",prop:"Rows"}]];this.EvtParms["GRID.LOAD"]=[[{av:"AV36IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:""},{av:"A63PersonaId",fld:"PERSONAID",pic:"ZZZZZZZZZZZZZZ9"},{av:"A138PersonaTel095",fld:"PERSONATEL095",pic:"99/99/99 99:99",hsh:!0},{av:"AV37IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:""},{av:"AV41IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:""}],[{av:"AV16Delete",fld:"vDELETE",pic:""},{av:'gx.fn.getCtrlProperty("vDELETE","Link")',ctrl:"vDELETE",prop:"Link"},{av:"AV17Update",fld:"vUPDATE",pic:""},{av:'gx.fn.getCtrlProperty("vUPDATE","Link")',ctrl:"vUPDATE",prop:"Link"},{av:"AV18Display",fld:"vDISPLAY",pic:""},{av:'gx.fn.getCtrlProperty("vDISPLAY","Link")',ctrl:"vDISPLAY",prop:"Link"}]];this.EvtParms["'DOINSERT'"]=[[{av:"AV7PersonaId",fld:"vPERSONAID",pic:"ZZZZZZZZZZZZZZ9"},{av:"A138PersonaTel095",fld:"PERSONATEL095",pic:"99/99/99 99:99",hsh:!0}],[]];this.EvtParms.VALIDV_PERSONATELTIPO=[[],[]];this.setVCMap("AV44Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV36IsAuthorized_Delete","vISAUTHORIZED_DELETE",0,"boolean",4,0);this.setVCMap("AV37IsAuthorized_Update","vISAUTHORIZED_UPDATE",0,"boolean",4,0);this.setVCMap("AV41IsAuthorized_Display","vISAUTHORIZED_DISPLAY",0,"boolean",4,0);this.setVCMap("AV7PersonaId","vPERSONAID",0,"int",15,0);this.setVCMap("AV7PersonaId","vPERSONAID",0,"int",15,0);this.setVCMap("AV44Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV36IsAuthorized_Delete","vISAUTHORIZED_DELETE",0,"boolean",4,0);this.setVCMap("AV37IsAuthorized_Update","vISAUTHORIZED_UPDATE",0,"boolean",4,0);this.setVCMap("AV41IsAuthorized_Display","vISAUTHORIZED_DISPLAY",0,"boolean",4,0);this.setVCMap("AV7PersonaId","vPERSONAID",0,"int",15,0);this.setVCMap("AV44Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV36IsAuthorized_Delete","vISAUTHORIZED_DELETE",0,"boolean",4,0);this.setVCMap("AV37IsAuthorized_Update","vISAUTHORIZED_UPDATE",0,"boolean",4,0);this.setVCMap("AV41IsAuthorized_Display","vISAUTHORIZED_DISPLAY",0,"boolean",4,0);r.addRefreshingVar(this.GXValidFnc[32]);r.addRefreshingVar({rfrVar:"AV7PersonaId"});r.addRefreshingVar({rfrVar:"AV44Pgmname"});r.addRefreshingVar({rfrVar:"AV36IsAuthorized_Delete"});r.addRefreshingVar({rfrVar:"AV37IsAuthorized_Update"});r.addRefreshingVar({rfrVar:"AV41IsAuthorized_Display"});r.addRefreshingVar(this.GXValidFnc[61]);r.addRefreshingParm(this.GXValidFnc[32]);r.addRefreshingParm({rfrVar:"AV7PersonaId"});r.addRefreshingParm({rfrVar:"AV44Pgmname"});r.addRefreshingParm({rfrVar:"AV36IsAuthorized_Delete"});r.addRefreshingParm({rfrVar:"AV37IsAuthorized_Update"});r.addRefreshingParm({rfrVar:"AV41IsAuthorized_Display"});r.addRefreshingParm(this.GXValidFnc[61]);this.Initialize()})