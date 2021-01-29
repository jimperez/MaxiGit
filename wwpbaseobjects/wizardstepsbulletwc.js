/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:36:49.73
*/
gx.evt.autoSkip = false;
gx.define('wwpbaseobjects.wizardstepsbulletwc', true, function (CmpContext) {
   this.ServerClass =  "wwpbaseobjects.wizardstepsbulletwc" ;
   this.PackageName =  "GeneXus.Programs" ;
   this.setObjectType("web");
   this.setCmpContext(CmpContext);
   this.ReadonlyForm = true;
   this.hasEnterEvent = false;
   this.skipOnEnter = true;
   this.autoRefresh = true;
   this.fullAjax = true;
   this.supportAjaxEvents =  true ;
   this.ajaxSecurityToken =  true ;
   this.SetStandaloneVars=function()
   {
      this.AV25StepRealNumber=gx.fn.getIntegerValue("vSTEPREALNUMBER",'.') ;
      this.AV12StepNumber=gx.fn.getIntegerValue("vSTEPNUMBER",'.') ;
      this.AV10SelectedStepNumber=gx.fn.getIntegerValue("vSELECTEDSTEPNUMBER",'.') ;
      this.AV27FirstIsDummy=gx.fn.getControlValue("vFIRSTISDUMMY") ;
      this.AV26WizardStepsAux=gx.fn.getControlValue("vWIZARDSTEPSAUX") ;
      this.AV28LastIsDummy=gx.fn.getControlValue("vLASTISDUMMY") ;
      this.AV15WizardSteps=gx.fn.getControlValue("vWIZARDSTEPS") ;
      this.AV29PenultimateIsDummy=gx.fn.getControlValue("vPENULTIMATEISDUMMY") ;
      this.AV6CurrentStep=gx.fn.getControlValue("vCURRENTSTEP") ;
      this.AV25StepRealNumber=gx.fn.getIntegerValue("vSTEPREALNUMBER",'.') ;
      this.AV12StepNumber=gx.fn.getIntegerValue("vSTEPNUMBER",'.') ;
      this.AV10SelectedStepNumber=gx.fn.getIntegerValue("vSELECTEDSTEPNUMBER",'.') ;
      this.AV27FirstIsDummy=gx.fn.getControlValue("vFIRSTISDUMMY") ;
      this.AV26WizardStepsAux=gx.fn.getControlValue("vWIZARDSTEPSAUX") ;
      this.AV28LastIsDummy=gx.fn.getControlValue("vLASTISDUMMY") ;
      this.AV15WizardSteps=gx.fn.getControlValue("vWIZARDSTEPS") ;
      this.AV29PenultimateIsDummy=gx.fn.getControlValue("vPENULTIMATEISDUMMY") ;
   };
   this.e13082_client=function()
   {
      return this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e14082_client=function()
   {
      return this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,11,14,17,19,20,21,22,23,24,26,29,32];
   this.GXLastCtrlId =32;
   this.GridwizardstepsContainer = new gx.grid.grid(this, 2,"WbpLvl2",5,"Gridwizardsteps","Gridwizardsteps","GridwizardstepsContainer",this.CmpContext,this.IsMasterPage,"wwpbaseobjects.wizardstepsbulletwc",[],true,0,false,true,0,false,false,false,"CollWWPBaseObjects\WizardSteps.WizardStepsItem",0,"px",0,"px","Nueva fila",false,false,false,null,null,false,"AV26WizardStepsAux",false,[1,1,1,1],false,0,false,false);
   var GridwizardstepsContainer = this.GridwizardstepsContainer;
   GridwizardstepsContainer.startRow("","","","","","");
   GridwizardstepsContainer.startCell("","","top","","","","","","","");
   GridwizardstepsContainer.startTable("Tblcontainerstep",8,"0px");
   GridwizardstepsContainer.addHtmlCode("<tbody>");
   GridwizardstepsContainer.startRow("","","","","","");
   GridwizardstepsContainer.startCell("","","","","","","","","","");
   GridwizardstepsContainer.startTable("Tablestepbulletline",11,"0px");
   GridwizardstepsContainer.addHtmlCode("<tbody>");
   GridwizardstepsContainer.startRow("","","","","","");
   GridwizardstepsContainer.startCell("","","","","","","","","","TableStepBulletLineCell");
   GridwizardstepsContainer.startTable("Tablestepbulletlineleft",14,"0px");
   GridwizardstepsContainer.addHtmlCode("<tbody>");
   GridwizardstepsContainer.startRow("","","","","","");
   GridwizardstepsContainer.startCell("","","","","","","","","","");
   GridwizardstepsContainer.addTextBlock('DUMMYBULLETLINELEFT',null,17);
   GridwizardstepsContainer.endCell();
   GridwizardstepsContainer.endRow();
   GridwizardstepsContainer.addHtmlCode("</tbody>");
   GridwizardstepsContainer.endTable();
   GridwizardstepsContainer.endCell();
   GridwizardstepsContainer.startCell("","","","","","","","","","");
   GridwizardstepsContainer.startDiv(19,"Layout_tablestepitem","0px","0px");
   GridwizardstepsContainer.startDiv(20,"","0px","0px");
   GridwizardstepsContainer.startDiv(21,"Tablestepitem","0px","0px");
   GridwizardstepsContainer.startDiv(22,"","0px","0px");
   GridwizardstepsContainer.startDiv(23,"","0px","0px");
   GridwizardstepsContainer.addTextBlock('STEPNUMBER',null,24);
   GridwizardstepsContainer.endDiv();
   GridwizardstepsContainer.endDiv();
   GridwizardstepsContainer.endDiv();
   GridwizardstepsContainer.endDiv();
   GridwizardstepsContainer.endDiv();
   GridwizardstepsContainer.endCell();
   GridwizardstepsContainer.startCell("","","","","","","","","","TableStepBulletLineCell");
   GridwizardstepsContainer.startTable("Tablestepbulletlineright",26,"0px");
   GridwizardstepsContainer.addHtmlCode("<tbody>");
   GridwizardstepsContainer.startRow("","","","","","");
   GridwizardstepsContainer.startCell("","","","","","","","","","");
   GridwizardstepsContainer.addTextBlock('DUMMYBULLETLINERIGHT',null,29);
   GridwizardstepsContainer.endCell();
   GridwizardstepsContainer.endRow();
   GridwizardstepsContainer.addHtmlCode("</tbody>");
   GridwizardstepsContainer.endTable();
   GridwizardstepsContainer.endCell();
   GridwizardstepsContainer.endRow();
   GridwizardstepsContainer.addHtmlCode("</tbody>");
   GridwizardstepsContainer.endTable();
   GridwizardstepsContainer.endCell();
   GridwizardstepsContainer.endRow();
   GridwizardstepsContainer.startRow("","","","","","");
   GridwizardstepsContainer.startCell("","","","","","","","","","AttributeStepBulletCell");
   GridwizardstepsContainer.addSingleLineEdit("GXV2",32,"WIZARDSTEPSAUX__TITLE","","","Title","svchar",40,"chr",40,40,"left",null,[],"GXV2","GXV2",true,0,false,false,"",1,"");
   GridwizardstepsContainer.endCell();
   GridwizardstepsContainer.endRow();
   GridwizardstepsContainer.addHtmlCode("</tbody>");
   GridwizardstepsContainer.endTable();
   GridwizardstepsContainer.endCell();
   GridwizardstepsContainer.endRow();
   this.GridwizardstepsContainer.emptyText = "";
   this.setGrid(GridwizardstepsContainer);
   GXValidFnc[2]={ id: 2, fld:"TABLEMAIN",grid:0};
   GXValidFnc[8]={ id: 8, fld:"TBLCONTAINERSTEP",grid:5};
   GXValidFnc[11]={ id: 11, fld:"TABLESTEPBULLETLINE",grid:5};
   GXValidFnc[14]={ id: 14, fld:"TABLESTEPBULLETLINELEFT",grid:5};
   GXValidFnc[17]={ id: 17, fld:"DUMMYBULLETLINELEFT", format:0,grid:5};
   GXValidFnc[19]={ id: 19, fld:"LAYOUT_TABLESTEPITEM",grid:5};
   GXValidFnc[20]={ id: 20, fld:"",grid:5};
   GXValidFnc[21]={ id: 21, fld:"TABLESTEPITEM",grid:5};
   GXValidFnc[22]={ id: 22, fld:"",grid:5};
   GXValidFnc[23]={ id: 23, fld:"",grid:5};
   GXValidFnc[24]={ id: 24, fld:"STEPNUMBER", format:0,grid:5};
   GXValidFnc[26]={ id: 26, fld:"TABLESTEPBULLETLINERIGHT",grid:5};
   GXValidFnc[29]={ id: 29, fld:"DUMMYBULLETLINERIGHT", format:0,grid:5};
   GXValidFnc[32]={ id:32 ,lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:5,gxgrid:this.GridwizardstepsContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"WIZARDSTEPSAUX__TITLE",gxz:"ZV36GXV2",gxold:"OV36GXV2",gxvar:"GXV2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.GXV2=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV36GXV2=Value},v2c:function(row){gx.fn.setGridControlValue("WIZARDSTEPSAUX__TITLE",row || gx.fn.currentGridRowImpl(5),gx.O.GXV2,0)},c2v:function(row){if(this.val(row)!==undefined)gx.O.GXV2=this.val(row)},val:function(row){return gx.fn.getGridControlValue("WIZARDSTEPSAUX__TITLE",row || gx.fn.currentGridRowImpl(5))},nac:gx.falseFn};
   this.AV15WizardSteps = [ ] ;
   this.AV6CurrentStep = "" ;
   this.GXV2 = "" ;
   this.AV25StepRealNumber = 0 ;
   this.AV12StepNumber = 0 ;
   this.AV10SelectedStepNumber = 0 ;
   this.AV27FirstIsDummy = false ;
   this.AV26WizardStepsAux = [ ] ;
   this.AV28LastIsDummy = false ;
   this.AV29PenultimateIsDummy = false ;
   this.Events = {"e13082_client": ["ENTER", true] ,"e14082_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRIDWIZARDSTEPS_nFirstRecordOnPage'},{av:'GRIDWIZARDSTEPS_nEOF'},{av:'AV15WizardSteps',fld:'vWIZARDSTEPS',pic:''},{av:'sPrefix'},{av:'AV25StepRealNumber',fld:'vSTEPREALNUMBER',pic:'ZZZ9',hsh:true},{av:'AV12StepNumber',fld:'vSTEPNUMBER',pic:'ZZZ9',hsh:true},{av:'AV10SelectedStepNumber',fld:'vSELECTEDSTEPNUMBER',pic:'ZZZ9',hsh:true},{av:'AV27FirstIsDummy',fld:'vFIRSTISDUMMY',pic:'',hsh:true},{av:'AV26WizardStepsAux',fld:'vWIZARDSTEPSAUX',grid:5,pic:'',hsh:true},{av:'nRC_GXsfl_5',ctrl:'GRIDWIZARDSTEPS',prop:'GridRC'},{av:'AV28LastIsDummy',fld:'vLASTISDUMMY',pic:'',hsh:true},{av:'AV29PenultimateIsDummy',fld:'vPENULTIMATEISDUMMY',pic:'',hsh:true}],[]];
   this.EvtParms["START"] = [[{av:'AV15WizardSteps',fld:'vWIZARDSTEPS',pic:''},{av:'AV6CurrentStep',fld:'vCURRENTSTEP',pic:''},{av:'AV26WizardStepsAux',fld:'vWIZARDSTEPSAUX',grid:5,pic:'',hsh:true},{av:'GRIDWIZARDSTEPS_nFirstRecordOnPage'},{av:'nRC_GXsfl_5',ctrl:'GRIDWIZARDSTEPS',prop:'GridRC'},{av:'GRIDWIZARDSTEPS_nEOF'},{av:'AV25StepRealNumber',fld:'vSTEPREALNUMBER',pic:'ZZZ9',hsh:true},{av:'AV12StepNumber',fld:'vSTEPNUMBER',pic:'ZZZ9',hsh:true},{av:'AV10SelectedStepNumber',fld:'vSELECTEDSTEPNUMBER',pic:'ZZZ9',hsh:true},{av:'AV27FirstIsDummy',fld:'vFIRSTISDUMMY',pic:'',hsh:true},{av:'AV28LastIsDummy',fld:'vLASTISDUMMY',pic:'',hsh:true},{av:'AV29PenultimateIsDummy',fld:'vPENULTIMATEISDUMMY',pic:'',hsh:true},{av:'sPrefix'}],[{av:'AV10SelectedStepNumber',fld:'vSELECTEDSTEPNUMBER',pic:'ZZZ9',hsh:true},{av:'AV25StepRealNumber',fld:'vSTEPREALNUMBER',pic:'ZZZ9',hsh:true},{av:'AV26WizardStepsAux',fld:'vWIZARDSTEPSAUX',grid:5,pic:'',hsh:true},{av:'GRIDWIZARDSTEPS_nFirstRecordOnPage'},{av:'nRC_GXsfl_5',ctrl:'GRIDWIZARDSTEPS',prop:'GridRC'},{av:'AV27FirstIsDummy',fld:'vFIRSTISDUMMY',pic:'',hsh:true},{av:'AV29PenultimateIsDummy',fld:'vPENULTIMATEISDUMMY',pic:'',hsh:true},{av:'AV28LastIsDummy',fld:'vLASTISDUMMY',pic:'',hsh:true},{av:'AV12StepNumber',fld:'vSTEPNUMBER',pic:'ZZZ9',hsh:true}]];
   this.EvtParms["GRIDWIZARDSTEPS.LOAD"] = [[{av:'AV25StepRealNumber',fld:'vSTEPREALNUMBER',pic:'ZZZ9',hsh:true},{av:'AV12StepNumber',fld:'vSTEPNUMBER',pic:'ZZZ9',hsh:true},{av:'AV10SelectedStepNumber',fld:'vSELECTEDSTEPNUMBER',pic:'ZZZ9',hsh:true},{av:'AV27FirstIsDummy',fld:'vFIRSTISDUMMY',pic:'',hsh:true},{av:'AV26WizardStepsAux',fld:'vWIZARDSTEPSAUX',grid:5,pic:'',hsh:true},{av:'GRIDWIZARDSTEPS_nFirstRecordOnPage'},{av:'nRC_GXsfl_5',ctrl:'GRIDWIZARDSTEPS',prop:'GridRC'},{av:'AV28LastIsDummy',fld:'vLASTISDUMMY',pic:'',hsh:true},{av:'AV15WizardSteps',fld:'vWIZARDSTEPS',pic:''},{av:'AV29PenultimateIsDummy',fld:'vPENULTIMATEISDUMMY',pic:'',hsh:true}],[{av:'gx.fn.getCtrlProperty("STEPNUMBER","Visible")',ctrl:'STEPNUMBER',prop:'Visible'},{av:'gx.fn.getCtrlProperty("STEPNUMBER","Caption")',ctrl:'STEPNUMBER',prop:'Caption'},{av:'gx.fn.getCtrlProperty("TABLESTEPBULLETLINELEFT","Class")',ctrl:'TABLESTEPBULLETLINELEFT',prop:'Class'},{av:'gx.fn.getCtrlProperty("TABLESTEPBULLETLINERIGHT","Class")',ctrl:'TABLESTEPBULLETLINERIGHT',prop:'Class'},{av:'gx.fn.getCtrlProperty("TABLESTEPITEM","Class")',ctrl:'TABLESTEPITEM',prop:'Class'},{ctrl:'WIZARDSTEPSAUX__TITLE',prop:'Class'},{av:'gx.fn.getCtrlProperty("STEPNUMBER","Class")',ctrl:'STEPNUMBER',prop:'Class'},{av:'AV25StepRealNumber',fld:'vSTEPREALNUMBER',pic:'ZZZ9',hsh:true},{av:'AV12StepNumber',fld:'vSTEPNUMBER',pic:'ZZZ9',hsh:true}]];
   this.setVCMap("AV25StepRealNumber", "vSTEPREALNUMBER", 0, "int", 4, 0);
   this.setVCMap("AV12StepNumber", "STEPNUMBER", 0, "int", 4, 0);
   this.setVCMap("AV10SelectedStepNumber", "vSELECTEDSTEPNUMBER", 0, "int", 4, 0);
   this.setVCMap("AV27FirstIsDummy", "vFIRSTISDUMMY", 0, "boolean", 4, 0);
   this.setVCMap("AV26WizardStepsAux", "vWIZARDSTEPSAUX", 0, "CollWWPBaseObjects\WizardSteps.WizardStepsItem", 0, 0);
   this.setVCMap("AV28LastIsDummy", "vLASTISDUMMY", 0, "boolean", 4, 0);
   this.setVCMap("AV15WizardSteps", "vWIZARDSTEPS", 0, "CollWWPBaseObjects\WizardSteps.WizardStepsItem", 0, 0);
   this.setVCMap("AV29PenultimateIsDummy", "vPENULTIMATEISDUMMY", 0, "boolean", 4, 0);
   this.setVCMap("AV6CurrentStep", "vCURRENTSTEP", 0, "svchar", 40, 0);
   this.setVCMap("AV25StepRealNumber", "vSTEPREALNUMBER", 0, "int", 4, 0);
   this.setVCMap("AV12StepNumber", "STEPNUMBER", 0, "int", 4, 0);
   this.setVCMap("AV10SelectedStepNumber", "vSELECTEDSTEPNUMBER", 0, "int", 4, 0);
   this.setVCMap("AV27FirstIsDummy", "vFIRSTISDUMMY", 0, "boolean", 4, 0);
   this.setVCMap("AV26WizardStepsAux", "vWIZARDSTEPSAUX", 0, "CollWWPBaseObjects\WizardSteps.WizardStepsItem", 0, 0);
   this.setVCMap("AV28LastIsDummy", "vLASTISDUMMY", 0, "boolean", 4, 0);
   this.setVCMap("AV15WizardSteps", "vWIZARDSTEPS", 0, "CollWWPBaseObjects\WizardSteps.WizardStepsItem", 0, 0);
   this.setVCMap("AV29PenultimateIsDummy", "vPENULTIMATEISDUMMY", 0, "boolean", 4, 0);
   this.setVCMap("AV25StepRealNumber", "vSTEPREALNUMBER", 0, "int", 4, 0);
   this.setVCMap("AV12StepNumber", "STEPNUMBER", 0, "int", 4, 0);
   this.setVCMap("AV10SelectedStepNumber", "vSELECTEDSTEPNUMBER", 0, "int", 4, 0);
   this.setVCMap("AV27FirstIsDummy", "vFIRSTISDUMMY", 0, "boolean", 4, 0);
   this.setVCMap("AV26WizardStepsAux", "vWIZARDSTEPSAUX", 0, "CollWWPBaseObjects\WizardSteps.WizardStepsItem", 0, 0);
   this.setVCMap("AV28LastIsDummy", "vLASTISDUMMY", 0, "boolean", 4, 0);
   this.setVCMap("AV15WizardSteps", "vWIZARDSTEPS", 0, "CollWWPBaseObjects\WizardSteps.WizardStepsItem", 0, 0);
   this.setVCMap("AV29PenultimateIsDummy", "vPENULTIMATEISDUMMY", 0, "boolean", 4, 0);
   GridwizardstepsContainer.addRefreshingVar({rfrVar:"AV25StepRealNumber"});
   GridwizardstepsContainer.addRefreshingVar({rfrVar:"AV12StepNumber"});
   GridwizardstepsContainer.addRefreshingVar({rfrVar:"AV10SelectedStepNumber"});
   GridwizardstepsContainer.addRefreshingVar({rfrVar:"AV27FirstIsDummy"});
   GridwizardstepsContainer.addRefreshingVar({rfrVar:"AV26WizardStepsAux"});
   GridwizardstepsContainer.addRefreshingVar({rfrVar:"AV28LastIsDummy"});
   GridwizardstepsContainer.addRefreshingVar({rfrVar:"AV15WizardSteps"});
   GridwizardstepsContainer.addRefreshingVar({rfrVar:"AV29PenultimateIsDummy"});
   GridwizardstepsContainer.addRefreshingParm({rfrVar:"AV25StepRealNumber"});
   GridwizardstepsContainer.addRefreshingParm({rfrVar:"AV12StepNumber"});
   GridwizardstepsContainer.addRefreshingParm({rfrVar:"AV10SelectedStepNumber"});
   GridwizardstepsContainer.addRefreshingParm({rfrVar:"AV27FirstIsDummy"});
   GridwizardstepsContainer.addRefreshingParm({rfrVar:"AV26WizardStepsAux"});
   GridwizardstepsContainer.addRefreshingParm({rfrVar:"AV28LastIsDummy"});
   GridwizardstepsContainer.addRefreshingParm({rfrVar:"AV15WizardSteps"});
   GridwizardstepsContainer.addRefreshingParm({rfrVar:"AV29PenultimateIsDummy"});
   this.addGridBCProperty("Wizardstepsaux", ["Title"], this.GXValidFnc[32], "AV26WizardStepsAux");
   this.Initialize( );
});