/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:54:38.4
*/
gx.evt.autoSkip = false;
gx.define('wwpbaseobjects.columnsselector', false, function () {
   this.ServerClass =  "wwpbaseobjects.columnsselector" ;
   this.PackageName =  "GeneXus.Programs" ;
   this.setObjectType("web");
   this.hasEnterEvent = true;
   this.skipOnEnter = true;
   this.autoRefresh = true;
   this.fullAjax = true;
   this.supportAjaxEvents =  true ;
   this.ajaxSecurityToken =  true ;
   this.SetStandaloneVars=function()
   {
      this.AV16ColumnsSelectorSDT=gx.fn.getControlValue("vCOLUMNSSELECTORSDT") ;
      this.AV12SessionKey=gx.fn.getControlValue("vSESSIONKEY") ;
      this.AV16ColumnsSelectorSDT=gx.fn.getControlValue("vCOLUMNSSELECTORSDT") ;
   };
   this.e14lu2_client=function()
   {
      return this.executeServerEvent("'DOMOVEDOWN'", true, arguments[0], false, false);
   };
   this.e15lu2_client=function()
   {
      return this.executeServerEvent("'DOMOVEUP'", true, arguments[0], false, false);
   };
   this.e11lu2_client=function()
   {
      return this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e17lu1_client=function()
   {
      return this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,14,17,19,21,23,24,27,28,29,30];
   this.GXLastCtrlId =30;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",11,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"wwpbaseobjects.columnsselector",[],true,1,false,true,0,false,false,false,"",0,"px",0,"px","Nueva fila",true,false,true,null,null,false,"",false,[1,1,1,1],false,0,false,false);
   var GridContainer = this.GridContainer;
   GridContainer.startRow("","","","","","");
   GridContainer.startCell("","","","","","","","","","FSLineSeparatorCell");
   GridContainer.startTable("Unnamedtable1",14,"0px");
   GridContainer.addHtmlCode("<tbody>");
   GridContainer.startRow("","","","","","");
   GridContainer.startCell("","","","","","","","","","");
   GridContainer.addBitmap("Movedown","MOVEDOWN",17,0,"px",0,"px","e14lu2_client","","","Image","");
   GridContainer.endCell();
   GridContainer.startCell("","","","","","","","","","");
   GridContainer.addBitmap("Moveup","MOVEUP",19,0,"px",0,"px","e15lu2_client","","","Image","");
   GridContainer.endCell();
   GridContainer.startCell("","","","","","","","","","");
   GridContainer.addCheckBox("Visible",21,"vVISIBLE","","","Visible","boolean","true","false",null,true,false,4,"chr","");
   GridContainer.endCell();
   GridContainer.startCell("","","","","","","","","","");
   GridContainer.addSingleLineEdit("Columndisplayname",23,"vCOLUMNDISPLAYNAME","","","ColumnDisplayName","svchar",80,"chr",100,80,"left",null,[],"Columndisplayname","ColumnDisplayName",true,0,false,false,"AttributeNoWrap",1,"");
   GridContainer.endCell();
   GridContainer.endRow();
   GridContainer.addHtmlCode("</tbody>");
   GridContainer.endTable();
   GridContainer.addSingleLineEdit("Columnname",24,"vCOLUMNNAME","","","ColumnName","svchar",80,"chr",100,80,"left",null,[],"Columnname","ColumnName",true,0,false,false,"Attribute",1,"");
   GridContainer.endCell();
   GridContainer.endRow();
   this.GridContainer.emptyText = "";
   this.setGrid(GridContainer);
   GXValidFnc[2]={ id: 2, fld:"TABLEMAIN",grid:0};
   GXValidFnc[5]={ id: 5, fld:"TABLECONTENT",grid:0};
   GXValidFnc[14]={ id: 14, fld:"UNNAMEDTABLE1",grid:11};
   GXValidFnc[17]={ id: 17, fld:"MOVEDOWN",grid:11,evt:"e14lu2_client"};
   GXValidFnc[19]={ id: 19, fld:"MOVEUP",grid:11,evt:"e15lu2_client"};
   GXValidFnc[21]={ id:21 ,lvl:2,type:"boolean",len:4,dec:0,sign:false,ro:0,isacc:0,grid:11,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vVISIBLE",gxz:"ZV23Visible",gxold:"OV23Visible",gxvar:"AV23Visible",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.AV23Visible=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV23Visible=gx.lang.booleanValue(Value)},v2c:function(row){gx.fn.setGridCheckBoxValue("vVISIBLE",row || gx.fn.currentGridRowImpl(11),gx.O.AV23Visible,true)},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV23Visible=gx.lang.booleanValue(this.val(row))},val:function(row){return gx.fn.getGridControlValue("vVISIBLE",row || gx.fn.currentGridRowImpl(11))},nac:gx.falseFn,values:['true','false']};
   GXValidFnc[23]={ id:23 ,lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:0,isacc:0,grid:11,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCOLUMNDISPLAYNAME",gxz:"ZV27ColumnDisplayName",gxold:"OV27ColumnDisplayName",gxvar:"AV27ColumnDisplayName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV27ColumnDisplayName=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV27ColumnDisplayName=Value},v2c:function(row){gx.fn.setGridControlValue("vCOLUMNDISPLAYNAME",row || gx.fn.currentGridRowImpl(11),gx.O.AV27ColumnDisplayName,0)},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV27ColumnDisplayName=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vCOLUMNDISPLAYNAME",row || gx.fn.currentGridRowImpl(11))},nac:gx.falseFn};
   GXValidFnc[24]={ id:24 ,lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:1,isacc:0,grid:11,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCOLUMNNAME",gxz:"ZV5ColumnName",gxold:"OV5ColumnName",gxvar:"AV5ColumnName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV5ColumnName=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV5ColumnName=Value},v2c:function(row){gx.fn.setGridControlValue("vCOLUMNNAME",row || gx.fn.currentGridRowImpl(11),gx.O.AV5ColumnName,0)},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV5ColumnName=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vCOLUMNNAME",row || gx.fn.currentGridRowImpl(11))},nac:gx.falseFn};
   GXValidFnc[27]={ id: 27, fld:"ACTIONGROUP_ACTIONS",grid:0};
   GXValidFnc[28]={ id: 28, fld:"BTNENTER",grid:0,evt:"e11lu2_client",std:"ENTER"};
   GXValidFnc[29]={ id: 29, fld:"BTNCANCEL",grid:0,evt:"e17lu1_client"};
   GXValidFnc[30]={ id:30 ,lvl:0,type:"svchar",len:1000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCOLUMNSSELECTORXML",gxz:"ZV8ColumnsSelectorXML",gxold:"OV8ColumnsSelectorXML",gxvar:"AV8ColumnsSelectorXML",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV8ColumnsSelectorXML=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV8ColumnsSelectorXML=Value},v2c:function(){gx.fn.setControlValue("vCOLUMNSSELECTORXML",gx.O.AV8ColumnsSelectorXML,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV8ColumnsSelectorXML=this.val()},val:function(){return gx.fn.getControlValue("vCOLUMNSSELECTORXML")},nac:gx.falseFn};
   this.ZV23Visible = false ;
   this.OV23Visible = false ;
   this.ZV27ColumnDisplayName = "" ;
   this.OV27ColumnDisplayName = "" ;
   this.ZV5ColumnName = "" ;
   this.OV5ColumnName = "" ;
   this.AV8ColumnsSelectorXML = "" ;
   this.ZV8ColumnsSelectorXML = "" ;
   this.OV8ColumnsSelectorXML = "" ;
   this.AV8ColumnsSelectorXML = "" ;
   this.AV12SessionKey = "" ;
   this.AV23Visible = false ;
   this.AV27ColumnDisplayName = "" ;
   this.AV5ColumnName = "" ;
   this.AV16ColumnsSelectorSDT = [ ] ;
   this.Events = {"e14lu2_client": ["'DOMOVEDOWN'", true] ,"e15lu2_client": ["'DOMOVEUP'", true] ,"e11lu2_client": ["ENTER", true] ,"e17lu1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'gx.fn.getCtrlProperty("vCOLUMNNAME","Visible")',ctrl:'vCOLUMNNAME',prop:'Visible'},{av:'AV16ColumnsSelectorSDT',fld:'vCOLUMNSSELECTORSDT',pic:''},{av:'AV8ColumnsSelectorXML',fld:'vCOLUMNSSELECTORXML',pic:''},{av:'AV12SessionKey',fld:'vSESSIONKEY',pic:'',hsh:true}],[{av:'AV16ColumnsSelectorSDT',fld:'vCOLUMNSSELECTORSDT',pic:''}]];
   this.EvtParms["START"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV8ColumnsSelectorXML',fld:'vCOLUMNSSELECTORXML',pic:''},{av:'gx.fn.getCtrlProperty("vCOLUMNNAME","Visible")',ctrl:'vCOLUMNNAME',prop:'Visible'},{av:'AV16ColumnsSelectorSDT',fld:'vCOLUMNSSELECTORSDT',pic:''},{av:'AV12SessionKey',fld:'vSESSIONKEY',pic:'',hsh:true}],[{av:'AV8ColumnsSelectorXML',fld:'vCOLUMNSSELECTORXML',pic:''},{av:'AV16ColumnsSelectorSDT',fld:'vCOLUMNSSELECTORSDT',pic:''},{ctrl:'GRID',prop:'Columns'},{av:'gx.fn.getCtrlProperty("MOVEDOWN","Visible")',ctrl:'MOVEDOWN',prop:'Visible'},{av:'gx.fn.getCtrlProperty("MOVEUP","Visible")',ctrl:'MOVEUP',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vCOLUMNSSELECTORXML","Visible")',ctrl:'vCOLUMNSSELECTORXML',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vCOLUMNNAME","Visible")',ctrl:'vCOLUMNNAME',prop:'Visible'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'AV16ColumnsSelectorSDT',fld:'vCOLUMNSSELECTORSDT',pic:''}],[{av:'AV5ColumnName',fld:'vCOLUMNNAME',pic:'',hsh:true},{av:'AV27ColumnDisplayName',fld:'vCOLUMNDISPLAYNAME',pic:''},{av:'AV23Visible',fld:'vVISIBLE',pic:''}]];
   this.EvtParms["'DOMOVEDOWN'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV8ColumnsSelectorXML',fld:'vCOLUMNSSELECTORXML',pic:''},{av:'gx.fn.getCtrlProperty("vCOLUMNNAME","Visible")',ctrl:'vCOLUMNNAME',prop:'Visible'},{av:'AV16ColumnsSelectorSDT',fld:'vCOLUMNSSELECTORSDT',pic:''},{av:'AV12SessionKey',fld:'vSESSIONKEY',pic:'',hsh:true},{av:'AV5ColumnName',fld:'vCOLUMNNAME',grid:11,pic:'',hsh:true},{av:'nRC_GXsfl_11',ctrl:'GRID',grid:11,prop:'GridRC'},{av:'AV23Visible',fld:'vVISIBLE',grid:11,pic:''}],[{av:'AV16ColumnsSelectorSDT',fld:'vCOLUMNSSELECTORSDT',pic:''},{av:'AV8ColumnsSelectorXML',fld:'vCOLUMNSSELECTORXML',pic:''}]];
   this.EvtParms["'DOMOVEUP'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV8ColumnsSelectorXML',fld:'vCOLUMNSSELECTORXML',pic:''},{av:'gx.fn.getCtrlProperty("vCOLUMNNAME","Visible")',ctrl:'vCOLUMNNAME',prop:'Visible'},{av:'AV16ColumnsSelectorSDT',fld:'vCOLUMNSSELECTORSDT',pic:''},{av:'AV12SessionKey',fld:'vSESSIONKEY',pic:'',hsh:true},{av:'AV5ColumnName',fld:'vCOLUMNNAME',grid:11,pic:'',hsh:true},{av:'nRC_GXsfl_11',ctrl:'GRID',grid:11,prop:'GridRC'},{av:'AV23Visible',fld:'vVISIBLE',grid:11,pic:''}],[{av:'AV16ColumnsSelectorSDT',fld:'vCOLUMNSSELECTORSDT',pic:''},{av:'AV8ColumnsSelectorXML',fld:'vCOLUMNSSELECTORXML',pic:''}]];
   this.EvtParms["ENTER"] = [[{av:'AV16ColumnsSelectorSDT',fld:'vCOLUMNSSELECTORSDT',pic:''},{av:'AV12SessionKey',fld:'vSESSIONKEY',pic:'',hsh:true},{av:'AV5ColumnName',fld:'vCOLUMNNAME',grid:11,pic:'',hsh:true},{av:'GRID_nFirstRecordOnPage'},{av:'nRC_GXsfl_11',ctrl:'GRID',grid:11,prop:'GridRC'},{av:'AV23Visible',fld:'vVISIBLE',grid:11,pic:''}],[{av:'AV16ColumnsSelectorSDT',fld:'vCOLUMNSSELECTORSDT',pic:''},{av:'AV8ColumnsSelectorXML',fld:'vCOLUMNSSELECTORXML',pic:''}]];
   this.EnterCtrl = ["BTNENTER"];
   this.setVCMap("AV16ColumnsSelectorSDT", "vCOLUMNSSELECTORSDT", 0, "CollWWPBaseObjects\ColumnsSelectorSDT.ColumnsSelectorSDTItem", 0, 0);
   this.setVCMap("AV12SessionKey", "vSESSIONKEY", 0, "svchar", 40, 0);
   this.setVCMap("AV16ColumnsSelectorSDT", "vCOLUMNSSELECTORSDT", 0, "CollWWPBaseObjects\ColumnsSelectorSDT.ColumnsSelectorSDTItem", 0, 0);
   this.setVCMap("AV16ColumnsSelectorSDT", "vCOLUMNSSELECTORSDT", 0, "CollWWPBaseObjects\ColumnsSelectorSDT.ColumnsSelectorSDTItem", 0, 0);
   GridContainer.addRefreshingVar(this.GXValidFnc[30]);
   GridContainer.addRefreshingVar({rfrVar:"AV5ColumnName", rfrProp:"Visible", gxAttId:"Columnname"});
   GridContainer.addRefreshingVar({rfrVar:"AV16ColumnsSelectorSDT"});
   GridContainer.addRefreshingVar({rfrVar:"AV12SessionKey"});
   GridContainer.addRefreshingParm(this.GXValidFnc[30]);
   GridContainer.addRefreshingParm({rfrVar:"AV5ColumnName", rfrProp:"Visible", gxAttId:"Columnname"});
   GridContainer.addRefreshingParm({rfrVar:"AV16ColumnsSelectorSDT"});
   GridContainer.addRefreshingParm({rfrVar:"AV12SessionKey"});
   this.Initialize( );
});
gx.wi( function() { gx.createParentObj(wwpbaseobjects.columnsselector);});
