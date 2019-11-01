/*
               File: WWPBaseObjects.WizardStepsArrowWC
        Description: Wizard Steps Arrow WC
             Author: GeneXus C# Generator version 16_0_5-135614
       Generated on: 10/3/2019 15:38:2.59
       Program type: Callable routine
          Main DBMS: SQL Server
*/
using System;
using System.Collections;
using GeneXus.Utils;
using GeneXus.Resources;
using GeneXus.Application;
using GeneXus.Metadata;
using GeneXus.Cryptography;
using System.Data;
using GeneXus.Data;
using com.genexus;
using GeneXus.Data.ADO;
using GeneXus.Data.NTier;
using GeneXus.Data.NTier.ADO;
using GeneXus.WebControls;
using GeneXus.Http;
using GeneXus.XML;
using GeneXus.Search;
using GeneXus.Encryption;
using GeneXus.Http.Client;
using System.Xml.Serialization;
using System.ServiceModel;
using System.ServiceModel.Activation;
using System.Runtime.Serialization;
namespace GeneXus.Programs.wwpbaseobjects {
   public class wizardstepsarrowwc : GXWebComponent, System.Web.SessionState.IRequiresSessionState
   {
      public wizardstepsarrowwc( )
      {
         context = new GxContext(  );
         DataStoreUtil.LoadDataStores( context);
         dsGAM = context.GetDataStore("GAM");
         dsAFIP = context.GetDataStore("AFIP");
         dsDefault = context.GetDataStore("Default");
         IsMain = true;
         if ( StringUtil.Len( (String)(sPrefix)) == 0 )
         {
            context.SetDefaultTheme("WorkWithPlusTheme");
         }
      }

      public wizardstepsarrowwc( IGxContext context )
      {
         this.context = context;
         IsMain = false;
         dsGAM = context.GetDataStore("GAM");
         dsAFIP = context.GetDataStore("AFIP");
         dsDefault = context.GetDataStore("Default");
      }

      public void release( )
      {
      }

      public void execute( GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtWizardSteps_WizardStepsItem> aP0_WizardSteps ,
                           String aP1_SelectedStep )
      {
         this.AV18WizardSteps = aP0_WizardSteps;
         this.AV11SelectedStep = aP1_SelectedStep;
         executePrivate();
      }

      void executePrivate( )
      {
         isStatic = false;
         webExecute();
      }

      public override void SetPrefix( String sPPrefix )
      {
         sPrefix = sPPrefix;
      }

      protected override void createObjects( )
      {
      }

      protected void INITWEB( )
      {
         initialize_properties( ) ;
         if ( StringUtil.Len( (String)(sPrefix)) == 0 )
         {
            if ( nGotPars == 0 )
            {
               entryPointCalled = false;
               gxfirstwebparm = GetNextPar( );
               gxfirstwebparm_bkp = gxfirstwebparm;
               gxfirstwebparm = DecryptAjaxCall( gxfirstwebparm);
               if ( context.isSpaRequest( ) )
               {
                  disableJsOutput();
               }
               if ( StringUtil.StrCmp(gxfirstwebparm, "dyncall") == 0 )
               {
                  setAjaxCallMode();
                  if ( ! IsValidAjaxCall( true) )
                  {
                     GxWebError = 1;
                     return  ;
                  }
                  dyncall( GetNextPar( )) ;
                  return  ;
               }
               else if ( StringUtil.StrCmp(gxfirstwebparm, "dyncomponent") == 0 )
               {
                  setAjaxEventMode();
                  if ( ! IsValidAjaxCall( true) )
                  {
                     GxWebError = 1;
                     return  ;
                  }
                  nDynComponent = 1;
                  sCompPrefix = GetNextPar( );
                  sSFPrefix = GetNextPar( );
                  ajax_req_read_hidden_sdt(GetNextPar( ), AV18WizardSteps);
                  AV11SelectedStep = GetNextPar( );
                  context.httpAjaxContext.ajax_rsp_assign_attri(sPrefix, false, "AV11SelectedStep", AV11SelectedStep);
                  setjustcreated();
                  componentprepare(new Object[] {(String)sCompPrefix,(String)sSFPrefix,(GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtWizardSteps_WizardStepsItem>)AV18WizardSteps,(String)AV11SelectedStep});
                  componentstart();
                  context.httpAjaxContext.ajax_rspStartCmp(sPrefix);
                  componentdraw();
                  context.httpAjaxContext.ajax_rspEndCmp();
                  return  ;
               }
               else if ( StringUtil.StrCmp(gxfirstwebparm, "gxajaxEvt") == 0 )
               {
                  setAjaxEventMode();
                  if ( ! IsValidAjaxCall( true) )
                  {
                     GxWebError = 1;
                     return  ;
                  }
                  gxfirstwebparm = GetNextPar( );
               }
               else if ( StringUtil.StrCmp(gxfirstwebparm, "gxfullajaxEvt") == 0 )
               {
                  if ( ! IsValidAjaxCall( true) )
                  {
                     GxWebError = 1;
                     return  ;
                  }
                  gxfirstwebparm = GetNextPar( );
               }
               else if ( StringUtil.StrCmp(gxfirstwebparm, "gxajaxNewRow_"+"Gridwizardsteps") == 0 )
               {
                  nRC_GXsfl_5 = (int)(NumberUtil.Val( GetNextPar( ), "."));
                  nGXsfl_5_idx = (int)(NumberUtil.Val( GetNextPar( ), "."));
                  sGXsfl_5_idx = GetNextPar( );
                  sPrefix = GetNextPar( );
                  setAjaxCallMode();
                  if ( ! IsValidAjaxCall( true) )
                  {
                     GxWebError = 1;
                     return  ;
                  }
                  gxnrGridwizardsteps_newrow( ) ;
                  return  ;
               }
               else if ( StringUtil.StrCmp(gxfirstwebparm, "gxajaxGridRefresh_"+"Gridwizardsteps") == 0 )
               {
                  AV30StepRealNumber = (short)(NumberUtil.Val( GetNextPar( ), "."));
                  ajax_req_read_hidden_sdt(GetNextPar( ), AV32WizardStepsAux);
                  AV11SelectedStep = GetNextPar( );
                  AV9PreviousSelected = StringUtil.StrToBool( GetNextPar( ));
                  AV14StepNumber = (short)(NumberUtil.Val( GetNextPar( ), "."));
                  AV23FirstIsDummy = StringUtil.StrToBool( GetNextPar( ));
                  AV24LastIsDummy = StringUtil.StrToBool( GetNextPar( ));
                  ajax_req_read_hidden_sdt(GetNextPar( ), AV18WizardSteps);
                  AV27SecondIsDummy = StringUtil.StrToBool( GetNextPar( ));
                  AV26PenultimateIsDummy = StringUtil.StrToBool( GetNextPar( ));
                  sPrefix = GetNextPar( );
                  init_default_properties( ) ;
                  setAjaxCallMode();
                  if ( ! IsValidAjaxCall( true) )
                  {
                     GxWebError = 1;
                     return  ;
                  }
                  gxgrGridwizardsteps_refresh( AV30StepRealNumber, AV32WizardStepsAux, AV11SelectedStep, AV9PreviousSelected, AV14StepNumber, AV23FirstIsDummy, AV24LastIsDummy, AV18WizardSteps, AV27SecondIsDummy, AV26PenultimateIsDummy, sPrefix) ;
                  GXKey = Decrypt64( context.GetCookie( "GX_SESSION_ID"), Crypto.GetServerKey( ));
                  GXKey = Decrypt64( context.GetCookie( "GX_SESSION_ID"), Crypto.GetServerKey( ));
                  context.GX_webresponse.AddString((String)(context.getJSONResponse( )));
                  return  ;
               }
               else
               {
                  if ( ! IsValidAjaxCall( false) )
                  {
                     GxWebError = 1;
                     return  ;
                  }
                  gxfirstwebparm = gxfirstwebparm_bkp;
               }
               if ( context.isSpaRequest( ) )
               {
                  enableJsOutput();
               }
            }
         }
         if ( StringUtil.Len( sPrefix) == 0 )
         {
            if ( ! context.IsLocalStorageSupported( ) )
            {
               context.PushCurrentUrl();
            }
         }
      }

      public override void webExecute( )
      {
         if ( initialized == 0 )
         {
            createObjects();
            initialize();
         }
         INITWEB( ) ;
         if ( ! isAjaxCallMode( ) )
         {
            if ( StringUtil.Len( sPrefix) == 0 )
            {
               ValidateSpaRequest();
            }
            PA072( ) ;
            if ( ( GxWebError == 0 ) && ! isAjaxCallMode( ) )
            {
               /* GeneXus formulas. */
               context.Gx_err = 0;
               edtavWizardstepsaux__title_Enabled = 0;
               context.httpAjaxContext.ajax_rsp_assign_prop(sPrefix, false, edtavWizardstepsaux__title_Internalname, "Enabled", StringUtil.LTrim( StringUtil.Str( (decimal)(edtavWizardstepsaux__title_Enabled), 5, 0)), !bGXsfl_5_Refreshing);
               WS072( ) ;
               if ( ! isAjaxCallMode( ) )
               {
                  if ( nDynComponent == 0 )
                  {
                     throw new System.Net.WebException("WebComponent is not allowed to run") ;
                  }
               }
            }
            if ( ( GxWebError == 0 ) && context.isAjaxRequest( ) )
            {
               enableOutput();
               if ( ! context.isAjaxRequest( ) )
               {
                  context.GX_webresponse.AppendHeader("Cache-Control", "no-store");
               }
               if ( ! context.WillRedirect( ) )
               {
                  context.GX_webresponse.AddString((String)(context.getJSONResponse( )));
               }
               else
               {
                  if ( context.isAjaxRequest( ) )
                  {
                     disableOutput();
                  }
                  RenderHtmlHeaders( ) ;
                  context.Redirect( context.wjLoc );
                  context.DispatchAjaxCommands();
               }
            }
         }
         this.cleanup();
      }

      protected void RenderHtmlHeaders( )
      {
         GxWebStd.gx_html_headers( context, 0, "", "", Form.Meta, Form.Metaequiv, false);
      }

      protected void RenderHtmlOpenForm( )
      {
         if ( StringUtil.Len( sPrefix) == 0 )
         {
            if ( context.isSpaRequest( ) )
            {
               enableOutput();
            }
            context.WriteHtmlText( "<title>") ;
            context.SendWebValue( "Wizard Steps Arrow WC") ;
            context.WriteHtmlTextNl( "</title>") ;
            if ( context.isSpaRequest( ) )
            {
               disableOutput();
            }
            if ( StringUtil.Len( sDynURL) > 0 )
            {
               context.WriteHtmlText( "<BASE href=\""+sDynURL+"\" />") ;
            }
            define_styles( ) ;
         }
         if ( ( ( context.GetBrowserType( ) == 1 ) || ( context.GetBrowserType( ) == 5 ) ) && ( StringUtil.StrCmp(context.GetBrowserVersion( ), "7.0") == 0 ) )
         {
            context.AddJavascriptSource("json2.js", "?"+context.GetBuildNumber( 135614), false, true);
         }
         context.AddJavascriptSource("jquery.js", "?"+context.GetBuildNumber( 135614), false, true);
         context.AddJavascriptSource("gxgral.js", "?"+context.GetBuildNumber( 135614), false, true);
         context.AddJavascriptSource("gxcfg.js", "?20191031538264", false, true);
         if ( context.isSpaRequest( ) )
         {
            enableOutput();
         }
         if ( StringUtil.Len( sPrefix) == 0 )
         {
            context.CloseHtmlHeader();
            if ( context.isSpaRequest( ) )
            {
               disableOutput();
            }
            FormProcess = ((nGXWrapped==0) ? " data-HasEnter=\"false\" data-Skiponenter=\"true\"" : "");
            context.WriteHtmlText( "<body ") ;
            bodyStyle = "";
            if ( nGXWrapped == 0 )
            {
               bodyStyle = bodyStyle + "-moz-opacity:0;opacity:0;";
            }
            context.WriteHtmlText( " "+"class=\"Form\""+" "+ "style='"+bodyStyle+"'") ;
            context.WriteHtmlText( FormProcess+">") ;
            context.skipLines(1);
            if ( nGXWrapped != 1 )
            {
               context.WriteHtmlTextNl( "<form id=\"MAINFORM\" autocomplete=\"off\" name=\"MAINFORM\" method=\"post\" tabindex=-1  class=\"Form\" data-gx-class=\"Form\" novalidate action=\""+formatLink("wwpbaseobjects.wizardstepsarrowwc.aspx") + "?" + UrlEncode(StringUtil.RTrim(AV11SelectedStep))+"\">") ;
               GxWebStd.gx_hidden_field( context, "_EventName", "");
               GxWebStd.gx_hidden_field( context, "_EventGridId", "");
               GxWebStd.gx_hidden_field( context, "_EventRowId", "");
               context.WriteHtmlText( "<input type=\"submit\" title=\"submit\" style=\"display:none\" disabled>") ;
               context.httpAjaxContext.ajax_rsp_assign_prop(sPrefix, false, "FORM", "Class", "Form", true);
            }
         }
         else
         {
            bool toggleHtmlOutput = isOutputEnabled( ) ;
            if ( StringUtil.StringSearch( sPrefix, "MP", 1) == 1 )
            {
               if ( context.isSpaRequest( ) )
               {
                  disableOutput();
               }
            }
            context.WriteHtmlText( "<div") ;
            GxWebStd.ClassAttribute( context, "gxwebcomponent-body"+" "+(String.IsNullOrEmpty(StringUtil.RTrim( Form.Class)) ? "Form" : Form.Class)+"-fx");
            context.WriteHtmlText( ">") ;
            if ( toggleHtmlOutput )
            {
               if ( StringUtil.StringSearch( sPrefix, "MP", 1) == 1 )
               {
                  if ( context.isSpaRequest( ) )
                  {
                     enableOutput();
                  }
               }
            }
            toggleJsOutput = isJsOutputEnabled( );
            if ( context.isSpaRequest( ) )
            {
               disableJsOutput();
            }
         }
         if ( StringUtil.StringSearch( sPrefix, "MP", 1) == 1 )
         {
            if ( context.isSpaRequest( ) )
            {
               disableOutput();
            }
         }
      }

      protected void send_integrity_footer_hashes( )
      {
         GXKey = Decrypt64( context.GetCookie( "GX_SESSION_ID"), Crypto.GetServerKey( ));
      }

      protected void SendCloseFormHiddens( )
      {
         /* Send hidden variables. */
         /* Send saved values. */
         send_integrity_footer_hashes( ) ;
         if ( context.isAjaxRequest( ) )
         {
            context.httpAjaxContext.ajax_rsp_assign_sdt_attri(sPrefix, false, sPrefix+"Wizardstepsaux", AV32WizardStepsAux);
         }
         else
         {
            context.httpAjaxContext.ajax_rsp_assign_hidden_sdt(sPrefix+"Wizardstepsaux", AV32WizardStepsAux);
         }
         GxWebStd.gx_hidden_field( context, sPrefix+"nRC_GXsfl_5", StringUtil.LTrim( StringUtil.NToC( (decimal)(nRC_GXsfl_5), 8, 0, ",", "")));
         GxWebStd.gx_hidden_field( context, sPrefix+"wcpOAV11SelectedStep", wcpOAV11SelectedStep);
         GxWebStd.gx_hidden_field( context, sPrefix+"vSTEPREALNUMBER", StringUtil.LTrim( StringUtil.NToC( (decimal)(AV30StepRealNumber), 4, 0, ",", "")));
         GxWebStd.gx_hidden_field( context, sPrefix+"gxhash_vSTEPREALNUMBER", GetSecureSignedToken( sPrefix, context.localUtil.Format( (decimal)(AV30StepRealNumber), "ZZZ9"), context));
         if ( context.isAjaxRequest( ) )
         {
            context.httpAjaxContext.ajax_rsp_assign_sdt_attri(sPrefix, false, sPrefix+"vWIZARDSTEPSAUX", AV32WizardStepsAux);
         }
         else
         {
            context.httpAjaxContext.ajax_rsp_assign_hidden_sdt(sPrefix+"vWIZARDSTEPSAUX", AV32WizardStepsAux);
         }
         GxWebStd.gx_hidden_field( context, sPrefix+"vSELECTEDSTEP", AV11SelectedStep);
         GxWebStd.gx_boolean_hidden_field( context, sPrefix+"vPREVIOUSSELECTED", AV9PreviousSelected);
         GxWebStd.gx_hidden_field( context, sPrefix+"gxhash_vPREVIOUSSELECTED", GetSecureSignedToken( sPrefix, AV9PreviousSelected, context));
         GxWebStd.gx_hidden_field( context, sPrefix+"vSTEPNUMBER", StringUtil.LTrim( StringUtil.NToC( (decimal)(AV14StepNumber), 4, 0, ",", "")));
         GxWebStd.gx_hidden_field( context, sPrefix+"gxhash_vSTEPNUMBER", GetSecureSignedToken( sPrefix, context.localUtil.Format( (decimal)(AV14StepNumber), "ZZZ9"), context));
         GxWebStd.gx_boolean_hidden_field( context, sPrefix+"vFIRSTISDUMMY", AV23FirstIsDummy);
         GxWebStd.gx_hidden_field( context, sPrefix+"gxhash_vFIRSTISDUMMY", GetSecureSignedToken( sPrefix, AV23FirstIsDummy, context));
         GxWebStd.gx_boolean_hidden_field( context, sPrefix+"vLASTISDUMMY", AV24LastIsDummy);
         GxWebStd.gx_hidden_field( context, sPrefix+"gxhash_vLASTISDUMMY", GetSecureSignedToken( sPrefix, AV24LastIsDummy, context));
         if ( context.isAjaxRequest( ) )
         {
            context.httpAjaxContext.ajax_rsp_assign_sdt_attri(sPrefix, false, sPrefix+"vWIZARDSTEPS", AV18WizardSteps);
         }
         else
         {
            context.httpAjaxContext.ajax_rsp_assign_hidden_sdt(sPrefix+"vWIZARDSTEPS", AV18WizardSteps);
         }
         GxWebStd.gx_boolean_hidden_field( context, sPrefix+"vSECONDISDUMMY", AV27SecondIsDummy);
         GxWebStd.gx_hidden_field( context, sPrefix+"gxhash_vSECONDISDUMMY", GetSecureSignedToken( sPrefix, AV27SecondIsDummy, context));
         GxWebStd.gx_boolean_hidden_field( context, sPrefix+"vPENULTIMATEISDUMMY", AV26PenultimateIsDummy);
         GxWebStd.gx_hidden_field( context, sPrefix+"gxhash_vPENULTIMATEISDUMMY", GetSecureSignedToken( sPrefix, AV26PenultimateIsDummy, context));
      }

      protected void RenderHtmlCloseForm072( )
      {
         SendCloseFormHiddens( ) ;
         if ( ( StringUtil.Len( sPrefix) != 0 ) && ( context.isAjaxRequest( ) || context.isSpaRequest( ) ) )
         {
            context.AddJavascriptSource("wwpbaseobjects/wizardstepsarrowwc.js", "?20191031538267", false, true);
         }
         GxWebStd.gx_hidden_field( context, sPrefix+"GX_FocusControl", GX_FocusControl);
         define_styles( ) ;
         SendSecurityToken(sPrefix);
         if ( StringUtil.Len( sPrefix) == 0 )
         {
            SendAjaxEncryptionKey();
            SendComponentObjects();
            SendServerCommands();
            SendState();
            if ( context.isSpaRequest( ) )
            {
               disableOutput();
            }
            if ( nGXWrapped != 1 )
            {
               context.WriteHtmlTextNl( "</form>") ;
            }
            if ( context.isSpaRequest( ) )
            {
               enableOutput();
            }
            include_jscripts( ) ;
            context.WriteHtmlTextNl( "</body>") ;
            context.WriteHtmlTextNl( "</html>") ;
            if ( context.isSpaRequest( ) )
            {
               enableOutput();
            }
         }
         else
         {
            SendWebComponentState();
            context.WriteHtmlText( "</div>") ;
            if ( toggleJsOutput )
            {
               if ( context.isSpaRequest( ) )
               {
                  enableJsOutput();
               }
            }
         }
      }

      public override String GetPgmname( )
      {
         return "WWPBaseObjects.WizardStepsArrowWC" ;
      }

      public override String GetPgmdesc( )
      {
         return "Wizard Steps Arrow WC" ;
      }

      protected void WB070( )
      {
         if ( context.isAjaxRequest( ) )
         {
            disableOutput();
         }
         if ( ! wbLoad )
         {
            if ( StringUtil.Len( sPrefix) == 0 )
            {
               RenderHtmlHeaders( ) ;
            }
            RenderHtmlOpenForm( ) ;
            if ( StringUtil.Len( sPrefix) != 0 )
            {
               GxWebStd.gx_hidden_field( context, sPrefix+"_CMPPGM", "wwpbaseobjects.wizardstepsarrowwc.aspx");
            }
            GxWebStd.gx_msg_list( context, "", context.GX_msglist.DisplayMode, "", "", sPrefix, "false");
            wb_table1_2_072( true) ;
         }
         else
         {
            wb_table1_2_072( false) ;
         }
         return  ;
      }

      protected void wb_table1_2_072e( bool wbgen )
      {
         if ( wbgen )
         {
         }
         if ( wbEnd == 5 )
         {
            wbEnd = 0;
            if ( isFullAjaxMode( ) )
            {
               if ( GridwizardstepsContainer.GetWrapped() == 1 )
               {
                  context.WriteHtmlText( "</table>") ;
                  context.WriteHtmlText( "</div>") ;
               }
               else
               {
                  AV37GXV1 = nGXsfl_5_idx;
                  sStyleString = "";
                  context.WriteHtmlText( "<div id=\""+sPrefix+"GridwizardstepsContainer"+"Div\" "+sStyleString+">"+"</div>") ;
                  context.httpAjaxContext.ajax_rsp_assign_grid(sPrefix+"_"+"Gridwizardsteps", GridwizardstepsContainer);
                  if ( ! isAjaxCallMode( ) && ! context.isSpaRequest( ) )
                  {
                     GxWebStd.gx_hidden_field( context, sPrefix+"GridwizardstepsContainerData", GridwizardstepsContainer.ToJavascriptSource());
                  }
                  if ( context.isAjaxRequest( ) || context.isSpaRequest( ) )
                  {
                     GxWebStd.gx_hidden_field( context, sPrefix+"GridwizardstepsContainerData"+"V", GridwizardstepsContainer.GridValuesHidden());
                  }
                  else
                  {
                     context.WriteHtmlText( "<input type=\"hidden\" "+"name=\""+sPrefix+"GridwizardstepsContainerData"+"V"+"\" value='"+GridwizardstepsContainer.GridValuesHidden()+"'/>") ;
                  }
               }
            }
         }
         wbLoad = true;
      }

      protected void START072( )
      {
         wbLoad = false;
         wbEnd = 0;
         wbStart = 0;
         if ( StringUtil.Len( sPrefix) == 0 )
         {
            if ( ! context.isSpaRequest( ) )
            {
               Form.Meta.addItem("generator", "GeneXus C# 16_0_5-135614", 0) ;
               Form.Meta.addItem("description", "Wizard Steps Arrow WC", 0) ;
            }
            context.wjLoc = "";
            context.nUserReturn = 0;
            context.wbHandled = 0;
            if ( StringUtil.Len( sPrefix) == 0 )
            {
               sXEvt = cgiGet( "_EventName");
               if ( ! GetJustCreated( ) && ( StringUtil.StrCmp(context.GetRequestMethod( ), "POST") == 0 ) )
               {
               }
            }
         }
         wbErr = false;
         if ( ( StringUtil.Len( sPrefix) == 0 ) || ( nDraw == 1 ) )
         {
            if ( nDoneStart == 0 )
            {
               STRUP070( ) ;
            }
         }
      }

      protected void WS072( )
      {
         START072( ) ;
         EVT072( ) ;
      }

      protected void EVT072( )
      {
         sXEvt = cgiGet( "_EventName");
         if ( ( ( ( StringUtil.Len( sPrefix) == 0 ) ) || ( StringUtil.StringSearch( sXEvt, sPrefix, 1) > 0 ) ) && ! GetJustCreated( ) && ( StringUtil.StrCmp(context.GetRequestMethod( ), "POST") == 0 ) )
         {
            if ( ! context.WillRedirect( ) && ( context.nUserReturn != 1 ) && ! wbErr )
            {
               /* Read Web Panel buttons. */
               if ( context.wbHandled == 0 )
               {
                  if ( StringUtil.Len( sPrefix) == 0 )
                  {
                     sEvt = cgiGet( "_EventName");
                     EvtGridId = cgiGet( "_EventGridId");
                     EvtRowId = cgiGet( "_EventRowId");
                  }
                  if ( StringUtil.Len( sEvt) > 0 )
                  {
                     sEvtType = StringUtil.Left( sEvt, 1);
                     sEvt = StringUtil.Right( sEvt, (short)(StringUtil.Len( sEvt)-1));
                     if ( StringUtil.StrCmp(sEvtType, "E") == 0 )
                     {
                        sEvtType = StringUtil.Right( sEvt, 1);
                        if ( StringUtil.StrCmp(sEvtType, ".") == 0 )
                        {
                           sEvt = StringUtil.Left( sEvt, (short)(StringUtil.Len( sEvt)-1));
                           if ( StringUtil.StrCmp(sEvt, "RFR") == 0 )
                           {
                              if ( ( StringUtil.Len( sPrefix) != 0 ) && ( nDoneStart == 0 ) )
                              {
                                 STRUP070( ) ;
                              }
                              if ( ! context.WillRedirect( ) && ( context.nUserReturn != 1 ) )
                              {
                                 context.wbHandled = 1;
                                 if ( ! wbErr )
                                 {
                                    dynload_actions( ) ;
                                 }
                              }
                           }
                           else if ( StringUtil.StrCmp(sEvt, "LSCR") == 0 )
                           {
                              if ( ( StringUtil.Len( sPrefix) != 0 ) && ( nDoneStart == 0 ) )
                              {
                                 STRUP070( ) ;
                              }
                              if ( ! context.WillRedirect( ) && ( context.nUserReturn != 1 ) )
                              {
                                 context.wbHandled = 1;
                                 if ( ! wbErr )
                                 {
                                    dynload_actions( ) ;
                                 }
                              }
                              dynload_actions( ) ;
                           }
                        }
                        else
                        {
                           sEvtType = StringUtil.Right( sEvt, 4);
                           sEvt = StringUtil.Left( sEvt, (short)(StringUtil.Len( sEvt)-4));
                           if ( ( StringUtil.StrCmp(StringUtil.Left( sEvt, 5), "START") == 0 ) || ( StringUtil.StrCmp(StringUtil.Left( sEvt, 20), "GRIDWIZARDSTEPS.LOAD") == 0 ) || ( StringUtil.StrCmp(StringUtil.Left( sEvt, 5), "ENTER") == 0 ) || ( StringUtil.StrCmp(StringUtil.Left( sEvt, 6), "CANCEL") == 0 ) )
                           {
                              if ( ( StringUtil.Len( sPrefix) != 0 ) && ( nDoneStart == 0 ) )
                              {
                                 STRUP070( ) ;
                              }
                              nGXsfl_5_idx = (int)(NumberUtil.Val( sEvtType, "."));
                              sGXsfl_5_idx = StringUtil.PadL( StringUtil.LTrim( StringUtil.Str( (decimal)(nGXsfl_5_idx), 4, 0)), 4, "0");
                              SubsflControlProps_52( ) ;
                              AV37GXV1 = nGXsfl_5_idx;
                              if ( ( AV32WizardStepsAux.Count >= AV37GXV1 ) && ( AV37GXV1 > 0 ) )
                              {
                                 AV32WizardStepsAux.CurrentItem = ((GeneXus.Programs.wwpbaseobjects.SdtWizardSteps_WizardStepsItem)AV32WizardStepsAux.Item(AV37GXV1));
                              }
                              sEvtType = StringUtil.Right( sEvt, 1);
                              if ( StringUtil.StrCmp(sEvtType, ".") == 0 )
                              {
                                 sEvt = StringUtil.Left( sEvt, (short)(StringUtil.Len( sEvt)-1));
                                 if ( StringUtil.StrCmp(sEvt, "START") == 0 )
                                 {
                                    if ( ! context.WillRedirect( ) && ( context.nUserReturn != 1 ) )
                                    {
                                       context.wbHandled = 1;
                                       if ( ! wbErr )
                                       {
                                          dynload_actions( ) ;
                                          /* Execute user event: Start */
                                          E11072 ();
                                       }
                                    }
                                 }
                                 else if ( StringUtil.StrCmp(sEvt, "GRIDWIZARDSTEPS.LOAD") == 0 )
                                 {
                                    if ( ! context.WillRedirect( ) && ( context.nUserReturn != 1 ) )
                                    {
                                       context.wbHandled = 1;
                                       if ( ! wbErr )
                                       {
                                          dynload_actions( ) ;
                                          E12072 ();
                                       }
                                    }
                                 }
                                 else if ( StringUtil.StrCmp(sEvt, "ENTER") == 0 )
                                 {
                                    if ( ! context.WillRedirect( ) && ( context.nUserReturn != 1 ) )
                                    {
                                       context.wbHandled = 1;
                                       if ( ! wbErr )
                                       {
                                          if ( ! wbErr )
                                          {
                                             Rfr0gs = false;
                                             if ( ! Rfr0gs )
                                             {
                                             }
                                             dynload_actions( ) ;
                                          }
                                       }
                                    }
                                    /* No code required for Cancel button. It is implemented as the Reset button. */
                                 }
                                 else if ( StringUtil.StrCmp(sEvt, "LSCR") == 0 )
                                 {
                                    if ( ( StringUtil.Len( sPrefix) != 0 ) && ( nDoneStart == 0 ) )
                                    {
                                       STRUP070( ) ;
                                    }
                                    if ( ! context.WillRedirect( ) && ( context.nUserReturn != 1 ) )
                                    {
                                       context.wbHandled = 1;
                                       if ( ! wbErr )
                                       {
                                          dynload_actions( ) ;
                                       }
                                    }
                                 }
                              }
                              else
                              {
                              }
                           }
                        }
                     }
                     context.wbHandled = 1;
                  }
               }
            }
         }
      }

      protected void WE072( )
      {
         if ( ! GxWebStd.gx_redirect( context) )
         {
            Rfr0gs = true;
            Refresh( ) ;
            if ( ! GxWebStd.gx_redirect( context) )
            {
               RenderHtmlCloseForm072( ) ;
            }
         }
      }

      protected void PA072( )
      {
         if ( nDonePA == 0 )
         {
            if ( StringUtil.Len( sPrefix) != 0 )
            {
               initialize_properties( ) ;
            }
            if ( StringUtil.Len( sPrefix) == 0 )
            {
               if ( String.IsNullOrEmpty(StringUtil.RTrim( context.GetCookie( "GX_SESSION_ID"))) )
               {
                  gxcookieaux = context.SetCookie( "GX_SESSION_ID", Encrypt64( Crypto.GetEncryptionKey( ), Crypto.GetServerKey( )), "", (DateTime)(DateTime.MinValue), "", 0);
               }
            }
            GXKey = Decrypt64( context.GetCookie( "GX_SESSION_ID"), Crypto.GetServerKey( ));
            toggleJsOutput = isJsOutputEnabled( );
            if ( StringUtil.Len( sPrefix) == 0 )
            {
               if ( context.isSpaRequest( ) )
               {
                  disableJsOutput();
               }
            }
            init_web_controls( ) ;
            if ( StringUtil.Len( sPrefix) == 0 )
            {
               if ( toggleJsOutput )
               {
                  if ( context.isSpaRequest( ) )
                  {
                     enableJsOutput();
                  }
               }
            }
            if ( ! context.isAjaxRequest( ) )
            {
            }
            nDonePA = 1;
         }
      }

      protected void dynload_actions( )
      {
         /* End function dynload_actions */
      }

      protected void gxnrGridwizardsteps_newrow( )
      {
         GxWebStd.set_html_headers( context, 0, "", "");
         SubsflControlProps_52( ) ;
         while ( nGXsfl_5_idx <= nRC_GXsfl_5 )
         {
            sendrow_52( ) ;
            nGXsfl_5_idx = ((subGridwizardsteps_Islastpage==1)&&(nGXsfl_5_idx+1>subGridwizardsteps_Recordsperpage( )) ? 1 : nGXsfl_5_idx+1);
            sGXsfl_5_idx = StringUtil.PadL( StringUtil.LTrim( StringUtil.Str( (decimal)(nGXsfl_5_idx), 4, 0)), 4, "0");
            SubsflControlProps_52( ) ;
         }
         context.GX_webresponse.AddString(context.httpAjaxContext.getJSONContainerResponse( GridwizardstepsContainer));
         /* End function gxnrGridwizardsteps_newrow */
      }

      protected void gxgrGridwizardsteps_refresh( short AV30StepRealNumber ,
                                                  GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtWizardSteps_WizardStepsItem> AV32WizardStepsAux ,
                                                  String AV11SelectedStep ,
                                                  bool AV9PreviousSelected ,
                                                  short AV14StepNumber ,
                                                  bool AV23FirstIsDummy ,
                                                  bool AV24LastIsDummy ,
                                                  GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtWizardSteps_WizardStepsItem> AV18WizardSteps ,
                                                  bool AV27SecondIsDummy ,
                                                  bool AV26PenultimateIsDummy ,
                                                  String sPrefix )
      {
         initialize_formulas( ) ;
         GxWebStd.set_html_headers( context, 0, "", "");
         GRIDWIZARDSTEPS_nCurrentRecord = 0;
         RF072( ) ;
         /* End function gxgrGridwizardsteps_refresh */
      }

      protected void send_integrity_hashes( )
      {
      }

      protected void clear_multi_value_controls( )
      {
         if ( context.isAjaxRequest( ) )
         {
            dynload_actions( ) ;
         }
      }

      protected void fix_multi_value_controls( )
      {
      }

      public void Refresh( )
      {
         send_integrity_hashes( ) ;
         RF072( ) ;
         if ( isFullAjaxMode( ) )
         {
            send_integrity_footer_hashes( ) ;
         }
      }

      protected void initialize_formulas( )
      {
         /* GeneXus formulas. */
         context.Gx_err = 0;
         edtavWizardstepsaux__title_Enabled = 0;
         context.httpAjaxContext.ajax_rsp_assign_prop(sPrefix, false, edtavWizardstepsaux__title_Internalname, "Enabled", StringUtil.LTrim( StringUtil.Str( (decimal)(edtavWizardstepsaux__title_Enabled), 5, 0)), !bGXsfl_5_Refreshing);
      }

      protected void RF072( )
      {
         initialize_formulas( ) ;
         clear_multi_value_controls( ) ;
         if ( isAjaxCallMode( ) )
         {
            GridwizardstepsContainer.ClearRows();
         }
         wbStart = 5;
         nGXsfl_5_idx = 1;
         sGXsfl_5_idx = StringUtil.PadL( StringUtil.LTrim( StringUtil.Str( (decimal)(nGXsfl_5_idx), 4, 0)), 4, "0");
         SubsflControlProps_52( ) ;
         bGXsfl_5_Refreshing = true;
         GridwizardstepsContainer.AddObjectProperty("GridName", "Gridwizardsteps");
         GridwizardstepsContainer.AddObjectProperty("CmpContext", sPrefix);
         GridwizardstepsContainer.AddObjectProperty("InMasterPage", "false");
         GridwizardstepsContainer.AddObjectProperty("Class", StringUtil.RTrim( "FreeStyleSteps"));
         GridwizardstepsContainer.AddObjectProperty("Class", "FreeStyleSteps");
         GridwizardstepsContainer.AddObjectProperty("Cellpadding", StringUtil.LTrim( StringUtil.NToC( (decimal)(1), 4, 0, ".", "")));
         GridwizardstepsContainer.AddObjectProperty("Cellspacing", StringUtil.LTrim( StringUtil.NToC( (decimal)(2), 4, 0, ".", "")));
         GridwizardstepsContainer.AddObjectProperty("Backcolorstyle", StringUtil.LTrim( StringUtil.NToC( (decimal)(subGridwizardsteps_Backcolorstyle), 1, 0, ".", "")));
         GridwizardstepsContainer.PageSize = subGridwizardsteps_Recordsperpage( );
         gxdyncontrolsrefreshing = true;
         fix_multi_value_controls( ) ;
         gxdyncontrolsrefreshing = false;
         if ( ! context.WillRedirect( ) && ( context.nUserReturn != 1 ) )
         {
            SubsflControlProps_52( ) ;
            E12072 ();
            wbEnd = 5;
            WB070( ) ;
         }
         bGXsfl_5_Refreshing = true;
      }

      protected void send_integrity_lvl_hashes072( )
      {
         GxWebStd.gx_hidden_field( context, sPrefix+"vSTEPREALNUMBER", StringUtil.LTrim( StringUtil.NToC( (decimal)(AV30StepRealNumber), 4, 0, ",", "")));
         GxWebStd.gx_hidden_field( context, sPrefix+"gxhash_vSTEPREALNUMBER", GetSecureSignedToken( sPrefix, context.localUtil.Format( (decimal)(AV30StepRealNumber), "ZZZ9"), context));
         GxWebStd.gx_boolean_hidden_field( context, sPrefix+"vPREVIOUSSELECTED", AV9PreviousSelected);
         GxWebStd.gx_hidden_field( context, sPrefix+"gxhash_vPREVIOUSSELECTED", GetSecureSignedToken( sPrefix, AV9PreviousSelected, context));
         GxWebStd.gx_hidden_field( context, sPrefix+"vSTEPNUMBER", StringUtil.LTrim( StringUtil.NToC( (decimal)(AV14StepNumber), 4, 0, ",", "")));
         GxWebStd.gx_hidden_field( context, sPrefix+"gxhash_vSTEPNUMBER", GetSecureSignedToken( sPrefix, context.localUtil.Format( (decimal)(AV14StepNumber), "ZZZ9"), context));
         GxWebStd.gx_boolean_hidden_field( context, sPrefix+"vFIRSTISDUMMY", AV23FirstIsDummy);
         GxWebStd.gx_hidden_field( context, sPrefix+"gxhash_vFIRSTISDUMMY", GetSecureSignedToken( sPrefix, AV23FirstIsDummy, context));
         GxWebStd.gx_boolean_hidden_field( context, sPrefix+"vLASTISDUMMY", AV24LastIsDummy);
         GxWebStd.gx_hidden_field( context, sPrefix+"gxhash_vLASTISDUMMY", GetSecureSignedToken( sPrefix, AV24LastIsDummy, context));
         GxWebStd.gx_boolean_hidden_field( context, sPrefix+"vSECONDISDUMMY", AV27SecondIsDummy);
         GxWebStd.gx_hidden_field( context, sPrefix+"gxhash_vSECONDISDUMMY", GetSecureSignedToken( sPrefix, AV27SecondIsDummy, context));
         GxWebStd.gx_boolean_hidden_field( context, sPrefix+"vPENULTIMATEISDUMMY", AV26PenultimateIsDummy);
         GxWebStd.gx_hidden_field( context, sPrefix+"gxhash_vPENULTIMATEISDUMMY", GetSecureSignedToken( sPrefix, AV26PenultimateIsDummy, context));
      }

      protected int subGridwizardsteps_Pagecount( )
      {
         return (int)(-1) ;
      }

      protected int subGridwizardsteps_Recordcount( )
      {
         return (int)(-1) ;
      }

      protected int subGridwizardsteps_Recordsperpage( )
      {
         return (int)(-1) ;
      }

      protected int subGridwizardsteps_Currentpage( )
      {
         return (int)(-1) ;
      }

      protected void STRUP070( )
      {
         /* Before Start, stand alone formulas. */
         context.Gx_err = 0;
         edtavWizardstepsaux__title_Enabled = 0;
         context.httpAjaxContext.ajax_rsp_assign_prop(sPrefix, false, edtavWizardstepsaux__title_Internalname, "Enabled", StringUtil.LTrim( StringUtil.Str( (decimal)(edtavWizardstepsaux__title_Enabled), 5, 0)), !bGXsfl_5_Refreshing);
         /* Execute Start event if defined. */
         context.wbGlbDoneStart = 0;
         /* Execute user event: Start */
         E11072 ();
         context.wbGlbDoneStart = 1;
         nDoneStart = 1;
         /* After Start, stand alone formulas. */
         sXEvt = cgiGet( "_EventName");
         if ( ! GetJustCreated( ) && ( StringUtil.StrCmp(context.GetRequestMethod( ), "POST") == 0 ) )
         {
            /* Read saved SDTs. */
            ajax_req_read_hidden_sdt(cgiGet( sPrefix+"Wizardstepsaux"), AV32WizardStepsAux);
            /* Read variables values. */
            /* Read saved values. */
            nRC_GXsfl_5 = (int)(context.localUtil.CToN( cgiGet( sPrefix+"nRC_GXsfl_5"), ",", "."));
            wcpOAV11SelectedStep = cgiGet( sPrefix+"wcpOAV11SelectedStep");
            nRC_GXsfl_5 = (int)(context.localUtil.CToN( cgiGet( sPrefix+"nRC_GXsfl_5"), ",", "."));
            nGXsfl_5_fel_idx = 0;
            while ( nGXsfl_5_fel_idx < nRC_GXsfl_5 )
            {
               nGXsfl_5_fel_idx = ((subGridwizardsteps_Islastpage==1)&&(nGXsfl_5_fel_idx+1>subGridwizardsteps_Recordsperpage( )) ? 1 : nGXsfl_5_fel_idx+1);
               sGXsfl_5_fel_idx = StringUtil.PadL( StringUtil.LTrim( StringUtil.Str( (decimal)(nGXsfl_5_fel_idx), 4, 0)), 4, "0");
               SubsflControlProps_fel_52( ) ;
               AV37GXV1 = nGXsfl_5_fel_idx;
               if ( ( AV32WizardStepsAux.Count >= AV37GXV1 ) && ( AV37GXV1 > 0 ) )
               {
                  AV32WizardStepsAux.CurrentItem = ((GeneXus.Programs.wwpbaseobjects.SdtWizardSteps_WizardStepsItem)AV32WizardStepsAux.Item(AV37GXV1));
               }
            }
            if ( nGXsfl_5_fel_idx == 0 )
            {
               nGXsfl_5_idx = 1;
               sGXsfl_5_idx = StringUtil.PadL( StringUtil.LTrim( StringUtil.Str( (decimal)(nGXsfl_5_idx), 4, 0)), 4, "0");
               SubsflControlProps_52( ) ;
            }
            nGXsfl_5_fel_idx = 1;
            /* Read subfile selected row values. */
            /* Read hidden variables. */
            GXKey = Decrypt64( context.GetCookie( "GX_SESSION_ID"), Crypto.GetServerKey( ));
         }
         else
         {
            dynload_actions( ) ;
         }
      }

      protected void GXStart( )
      {
         /* Execute user event: Start */
         E11072 ();
         if (returnInSub) return;
      }

      protected void E11072( )
      {
         /* Start Routine */
         AV25MaxStepsToShow = 8;
         AV32WizardStepsAux = (GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtWizardSteps_WizardStepsItem>)(AV18WizardSteps.Clone());
         gx_BV5 = true;
         AV14StepNumber = 1;
         context.httpAjaxContext.ajax_rsp_assign_attri(sPrefix, false, "AV14StepNumber", StringUtil.LTrim( StringUtil.Str( (decimal)(AV14StepNumber), 4, 0)));
         context.httpAjaxContext.ajax_rsp_assign_attri(sPrefix, false, sPrefix+"gxhash_vSTEPNUMBER", GetSecureSignedToken( sPrefix, context.localUtil.Format( (decimal)(AV14StepNumber), "ZZZ9"), context));
         AV30StepRealNumber = 1;
         context.httpAjaxContext.ajax_rsp_assign_attri(sPrefix, false, "AV30StepRealNumber", StringUtil.LTrim( StringUtil.Str( (decimal)(AV30StepRealNumber), 4, 0)));
         context.httpAjaxContext.ajax_rsp_assign_attri(sPrefix, false, sPrefix+"gxhash_vSTEPREALNUMBER", GetSecureSignedToken( sPrefix, context.localUtil.Format( (decimal)(AV30StepRealNumber), "ZZZ9"), context));
         AV9PreviousSelected = false;
         context.httpAjaxContext.ajax_rsp_assign_attri(sPrefix, false, "AV9PreviousSelected", AV9PreviousSelected);
         context.httpAjaxContext.ajax_rsp_assign_attri(sPrefix, false, sPrefix+"gxhash_vPREVIOUSSELECTED", GetSecureSignedToken( sPrefix, AV9PreviousSelected, context));
         AV23FirstIsDummy = false;
         context.httpAjaxContext.ajax_rsp_assign_attri(sPrefix, false, "AV23FirstIsDummy", AV23FirstIsDummy);
         context.httpAjaxContext.ajax_rsp_assign_attri(sPrefix, false, sPrefix+"gxhash_vFIRSTISDUMMY", GetSecureSignedToken( sPrefix, AV23FirstIsDummy, context));
         AV27SecondIsDummy = false;
         context.httpAjaxContext.ajax_rsp_assign_attri(sPrefix, false, "AV27SecondIsDummy", AV27SecondIsDummy);
         context.httpAjaxContext.ajax_rsp_assign_attri(sPrefix, false, sPrefix+"gxhash_vSECONDISDUMMY", GetSecureSignedToken( sPrefix, AV27SecondIsDummy, context));
         AV26PenultimateIsDummy = false;
         context.httpAjaxContext.ajax_rsp_assign_attri(sPrefix, false, "AV26PenultimateIsDummy", AV26PenultimateIsDummy);
         context.httpAjaxContext.ajax_rsp_assign_attri(sPrefix, false, sPrefix+"gxhash_vPENULTIMATEISDUMMY", GetSecureSignedToken( sPrefix, AV26PenultimateIsDummy, context));
         AV24LastIsDummy = false;
         context.httpAjaxContext.ajax_rsp_assign_attri(sPrefix, false, "AV24LastIsDummy", AV24LastIsDummy);
         context.httpAjaxContext.ajax_rsp_assign_attri(sPrefix, false, sPrefix+"gxhash_vLASTISDUMMY", GetSecureSignedToken( sPrefix, AV24LastIsDummy, context));
         if ( AV32WizardStepsAux.Count > AV25MaxStepsToShow )
         {
            AV25MaxStepsToShow = (short)(AV25MaxStepsToShow-1);
            AV28SelectedStepIndex = 1;
            AV39GXV3 = 1;
            while ( AV39GXV3 <= AV32WizardStepsAux.Count )
            {
               AV31WizardStep = ((GeneXus.Programs.wwpbaseobjects.SdtWizardSteps_WizardStepsItem)AV32WizardStepsAux.Item(AV39GXV3));
               if ( StringUtil.StrCmp(AV31WizardStep.gxTpr_Code, AV11SelectedStep) == 0 )
               {
                  if (true) break;
               }
               AV28SelectedStepIndex = (short)(AV28SelectedStepIndex+1);
               AV39GXV3 = (int)(AV39GXV3+1);
            }
            if ( AV28SelectedStepIndex > AV32WizardStepsAux.Count )
            {
               AV28SelectedStepIndex = 1;
            }
            AV29StartIndex = 1;
            if ( (Convert.ToDecimal( AV28SelectedStepIndex + 1 ) > ( AV25MaxStepsToShow ) /  ( decimal )( 2 ) ) )
            {
               AV29StartIndex = (short)(AV28SelectedStepIndex+1-(AV25MaxStepsToShow)/ (decimal)(2));
               if ( AV29StartIndex + AV25MaxStepsToShow > AV32WizardStepsAux.Count + 1 )
               {
                  AV29StartIndex = (short)(AV32WizardStepsAux.Count+1-AV25MaxStepsToShow);
               }
            }
            AV30StepRealNumber = AV29StartIndex;
            context.httpAjaxContext.ajax_rsp_assign_attri(sPrefix, false, "AV30StepRealNumber", StringUtil.LTrim( StringUtil.Str( (decimal)(AV30StepRealNumber), 4, 0)));
            context.httpAjaxContext.ajax_rsp_assign_attri(sPrefix, false, sPrefix+"gxhash_vSTEPREALNUMBER", GetSecureSignedToken( sPrefix, context.localUtil.Format( (decimal)(AV30StepRealNumber), "ZZZ9"), context));
            if ( AV29StartIndex > 1 )
            {
               AV23FirstIsDummy = true;
               context.httpAjaxContext.ajax_rsp_assign_attri(sPrefix, false, "AV23FirstIsDummy", AV23FirstIsDummy);
               context.httpAjaxContext.ajax_rsp_assign_attri(sPrefix, false, sPrefix+"gxhash_vFIRSTISDUMMY", GetSecureSignedToken( sPrefix, AV23FirstIsDummy, context));
               AV25MaxStepsToShow = (short)(AV25MaxStepsToShow+1);
               if ( AV29StartIndex > 2 )
               {
                  AV27SecondIsDummy = true;
                  context.httpAjaxContext.ajax_rsp_assign_attri(sPrefix, false, "AV27SecondIsDummy", AV27SecondIsDummy);
                  context.httpAjaxContext.ajax_rsp_assign_attri(sPrefix, false, sPrefix+"gxhash_vSECONDISDUMMY", GetSecureSignedToken( sPrefix, AV27SecondIsDummy, context));
                  AV25MaxStepsToShow = (short)(AV25MaxStepsToShow+1);
                  ((GeneXus.Programs.wwpbaseobjects.SdtWizardSteps_WizardStepsItem)AV32WizardStepsAux.Item(2)).gxTpr_Title = "...";
                  while ( AV29StartIndex > 3 )
                  {
                     AV32WizardStepsAux.RemoveItem(3);
                     gx_BV5 = true;
                     AV29StartIndex = (short)(AV29StartIndex-1);
                  }
               }
            }
            if ( AV32WizardStepsAux.Count > AV25MaxStepsToShow )
            {
               AV24LastIsDummy = true;
               context.httpAjaxContext.ajax_rsp_assign_attri(sPrefix, false, "AV24LastIsDummy", AV24LastIsDummy);
               context.httpAjaxContext.ajax_rsp_assign_attri(sPrefix, false, sPrefix+"gxhash_vLASTISDUMMY", GetSecureSignedToken( sPrefix, AV24LastIsDummy, context));
               if ( AV32WizardStepsAux.Count > AV25MaxStepsToShow + 1 )
               {
                  AV26PenultimateIsDummy = true;
                  context.httpAjaxContext.ajax_rsp_assign_attri(sPrefix, false, "AV26PenultimateIsDummy", AV26PenultimateIsDummy);
                  context.httpAjaxContext.ajax_rsp_assign_attri(sPrefix, false, sPrefix+"gxhash_vPENULTIMATEISDUMMY", GetSecureSignedToken( sPrefix, AV26PenultimateIsDummy, context));
                  ((GeneXus.Programs.wwpbaseobjects.SdtWizardSteps_WizardStepsItem)AV32WizardStepsAux.Item(AV32WizardStepsAux.Count-1)).gxTpr_Title = "...";
                  while ( AV32WizardStepsAux.Count > AV25MaxStepsToShow + 2 )
                  {
                     AV32WizardStepsAux.RemoveItem(AV32WizardStepsAux.Count-2);
                     gx_BV5 = true;
                  }
               }
            }
         }
      }

      private void E12072( )
      {
         /* Gridwizardsteps_Load Routine */
         AV37GXV1 = 1;
         while ( AV37GXV1 <= AV32WizardStepsAux.Count )
         {
            AV32WizardStepsAux.CurrentItem = ((GeneXus.Programs.wwpbaseobjects.SdtWizardSteps_WizardStepsItem)AV32WizardStepsAux.Item(AV37GXV1));
            AV16TableContainerStepClass = "TableContainerStep";
            lblStepnumber_Caption = context.localUtil.Format( (decimal)(AV30StepRealNumber), "ZZZ9");
            if ( StringUtil.StrCmp(((GeneXus.Programs.wwpbaseobjects.SdtWizardSteps_WizardStepsItem)(AV32WizardStepsAux.CurrentItem)).gxTpr_Code, AV11SelectedStep) == 0 )
            {
               edtavWizardstepsaux__title_Class = "AttributeStepSelected";
               imgStepimg_Bitmap = context.GetImagePath( "8f7f2ead-3d17-4e23-a450-7d98b62b7f40", "", context.GetTheme( ));
               imgStepimg_Class = "StepImage";
               AV16TableContainerStepClass = "TableContainerStepSelected";
               lblStepnumber_Class = "StepNumberSelected";
               divTblstep_Class = "TableStepSelected";
               context.httpAjaxContext.ajax_rsp_assign_prop(sPrefix, false, divTblstep_Internalname, "Class", divTblstep_Class, !bGXsfl_5_Refreshing);
               AV9PreviousSelected = true;
               context.httpAjaxContext.ajax_rsp_assign_attri(sPrefix, false, "AV9PreviousSelected", AV9PreviousSelected);
               context.httpAjaxContext.ajax_rsp_assign_attri(sPrefix, false, sPrefix+"gxhash_vPREVIOUSSELECTED", GetSecureSignedToken( sPrefix, AV9PreviousSelected, context));
            }
            else
            {
               imgStepimg_Bitmap = context.GetImagePath( "2fe377a7-df7d-42aa-84d4-4f1b853d50aa", "", context.GetTheme( ));
               if ( AV9PreviousSelected )
               {
                  imgStepimg_Class = "StepImage";
               }
               else
               {
                  imgStepimg_Class = "StepImageUnSelected";
               }
               lblStepnumber_Class = "StepNumber";
               divTblstep_Class = "TableStep";
               context.httpAjaxContext.ajax_rsp_assign_prop(sPrefix, false, divTblstep_Internalname, "Class", divTblstep_Class, !bGXsfl_5_Refreshing);
               edtavWizardstepsaux__title_Class = "AttributeStep";
               AV9PreviousSelected = false;
               context.httpAjaxContext.ajax_rsp_assign_attri(sPrefix, false, "AV9PreviousSelected", AV9PreviousSelected);
               context.httpAjaxContext.ajax_rsp_assign_attri(sPrefix, false, sPrefix+"gxhash_vPREVIOUSSELECTED", GetSecureSignedToken( sPrefix, AV9PreviousSelected, context));
            }
            if ( AV14StepNumber == 1 )
            {
               imgStepimg_Visible = 0;
               AV16TableContainerStepClass = AV16TableContainerStepClass + " " + "TableContainerStepFirst";
            }
            else
            {
               if ( AV14StepNumber == AV32WizardStepsAux.Count )
               {
                  AV16TableContainerStepClass = AV16TableContainerStepClass + " " + "TableContainerStepLast";
               }
               imgStepimg_Visible = 1;
            }
            tblTblcontainerstep_Class = AV16TableContainerStepClass;
            context.httpAjaxContext.ajax_rsp_assign_prop(sPrefix, false, tblTblcontainerstep_Internalname, "Class", tblTblcontainerstep_Class, !bGXsfl_5_Refreshing);
            divTblstep_Visible = 1;
            context.httpAjaxContext.ajax_rsp_assign_prop(sPrefix, false, divTblstep_Internalname, "Visible", StringUtil.LTrim( StringUtil.Str( (decimal)(divTblstep_Visible), 5, 0)), !bGXsfl_5_Refreshing);
            lblStepnumber_Visible = 1;
            edtavWizardstepsaux__title_Visible = 1;
            if ( ( AV14StepNumber == 1 ) && AV23FirstIsDummy )
            {
               lblStepnumber_Caption = StringUtil.Trim( StringUtil.Str( (decimal)(AV14StepNumber), 4, 0));
               edtavWizardstepsaux__title_Visible = 0;
            }
            else if ( ( AV14StepNumber == AV32WizardStepsAux.Count ) && AV24LastIsDummy )
            {
               lblStepnumber_Caption = StringUtil.Trim( StringUtil.Str( (decimal)(AV18WizardSteps.Count), 9, 0));
               edtavWizardstepsaux__title_Visible = 0;
            }
            else if ( ( ( AV14StepNumber == 2 ) && AV27SecondIsDummy ) || ( ( AV14StepNumber == AV32WizardStepsAux.Count - 1 ) && AV26PenultimateIsDummy ) )
            {
               lblStepnumber_Visible = 0;
               divTblstep_Visible = 0;
               context.httpAjaxContext.ajax_rsp_assign_prop(sPrefix, false, divTblstep_Internalname, "Visible", StringUtil.LTrim( StringUtil.Str( (decimal)(divTblstep_Visible), 5, 0)), !bGXsfl_5_Refreshing);
            }
            else
            {
               AV30StepRealNumber = (short)(AV30StepRealNumber+1);
               context.httpAjaxContext.ajax_rsp_assign_attri(sPrefix, false, "AV30StepRealNumber", StringUtil.LTrim( StringUtil.Str( (decimal)(AV30StepRealNumber), 4, 0)));
               context.httpAjaxContext.ajax_rsp_assign_attri(sPrefix, false, sPrefix+"gxhash_vSTEPREALNUMBER", GetSecureSignedToken( sPrefix, context.localUtil.Format( (decimal)(AV30StepRealNumber), "ZZZ9"), context));
            }
            AV14StepNumber = (short)(AV14StepNumber+1);
            context.httpAjaxContext.ajax_rsp_assign_attri(sPrefix, false, "AV14StepNumber", StringUtil.LTrim( StringUtil.Str( (decimal)(AV14StepNumber), 4, 0)));
            context.httpAjaxContext.ajax_rsp_assign_attri(sPrefix, false, sPrefix+"gxhash_vSTEPNUMBER", GetSecureSignedToken( sPrefix, context.localUtil.Format( (decimal)(AV14StepNumber), "ZZZ9"), context));
            /* Load Method */
            if ( wbStart != -1 )
            {
               wbStart = 5;
            }
            sendrow_52( ) ;
            if ( isFullAjaxMode( ) && ! bGXsfl_5_Refreshing )
            {
               context.DoAjaxLoad(5, GridwizardstepsRow);
            }
            AV37GXV1 = (int)(AV37GXV1+1);
         }
         /*  Sending Event outputs  */
      }

      protected void wb_table1_2_072( bool wbgen )
      {
         if ( wbgen )
         {
            /* Table start */
            sStyleString = "";
            GxWebStd.gx_table_start( context, tblTablemain_Internalname, tblTablemain_Internalname, "", "TableWizardStepsArrow", 0, "", "", 1, 2, sStyleString, "", "", 0);
            context.WriteHtmlText( "<tbody>") ;
            context.WriteHtmlText( "<tr>") ;
            context.WriteHtmlText( "<td class='WizardStepsContainerCell'>") ;
            /*  Grid Control  */
            GridwizardstepsContainer.SetIsFreestyle(true);
            GridwizardstepsContainer.SetWrapped(nGXWrapped);
            if ( GridwizardstepsContainer.GetWrapped() == 1 )
            {
               context.WriteHtmlText( "<div id=\""+sPrefix+"GridwizardstepsContainer"+"DivS\" data-gxgridid=\"5\">") ;
               sStyleString = "";
               GxWebStd.gx_table_start( context, subGridwizardsteps_Internalname, subGridwizardsteps_Internalname, "", "FreeStyleSteps", 0, "", "", 1, 2, sStyleString, "", "", 0);
               GridwizardstepsContainer.AddObjectProperty("GridName", "Gridwizardsteps");
            }
            else
            {
               GridwizardstepsContainer.AddObjectProperty("GridName", "Gridwizardsteps");
               GridwizardstepsContainer.AddObjectProperty("Header", subGridwizardsteps_Header);
               GridwizardstepsContainer.AddObjectProperty("Class", StringUtil.RTrim( "FreeStyleSteps"));
               GridwizardstepsContainer.AddObjectProperty("Class", "FreeStyleSteps");
               GridwizardstepsContainer.AddObjectProperty("Cellpadding", StringUtil.LTrim( StringUtil.NToC( (decimal)(1), 4, 0, ".", "")));
               GridwizardstepsContainer.AddObjectProperty("Cellspacing", StringUtil.LTrim( StringUtil.NToC( (decimal)(2), 4, 0, ".", "")));
               GridwizardstepsContainer.AddObjectProperty("Backcolorstyle", StringUtil.LTrim( StringUtil.NToC( (decimal)(subGridwizardsteps_Backcolorstyle), 1, 0, ".", "")));
               GridwizardstepsContainer.AddObjectProperty("CmpContext", sPrefix);
               GridwizardstepsContainer.AddObjectProperty("InMasterPage", "false");
               GridwizardstepsColumn = GXWebColumn.GetNew(isAjaxCallMode( ));
               GridwizardstepsContainer.AddColumnProperties(GridwizardstepsColumn);
               GridwizardstepsColumn = GXWebColumn.GetNew(isAjaxCallMode( ));
               GridwizardstepsContainer.AddColumnProperties(GridwizardstepsColumn);
               GridwizardstepsColumn = GXWebColumn.GetNew(isAjaxCallMode( ));
               GridwizardstepsContainer.AddColumnProperties(GridwizardstepsColumn);
               GridwizardstepsColumn = GXWebColumn.GetNew(isAjaxCallMode( ));
               GridwizardstepsContainer.AddColumnProperties(GridwizardstepsColumn);
               GridwizardstepsColumn = GXWebColumn.GetNew(isAjaxCallMode( ));
               GridwizardstepsContainer.AddColumnProperties(GridwizardstepsColumn);
               GridwizardstepsColumn = GXWebColumn.GetNew(isAjaxCallMode( ));
               GridwizardstepsColumn.AddObjectProperty("Value", context.convertURL( context.GetImagePath( "2fe377a7-df7d-42aa-84d4-4f1b853d50aa", "", context.GetTheme( ))));
               GridwizardstepsContainer.AddColumnProperties(GridwizardstepsColumn);
               GridwizardstepsColumn = GXWebColumn.GetNew(isAjaxCallMode( ));
               GridwizardstepsContainer.AddColumnProperties(GridwizardstepsColumn);
               GridwizardstepsColumn = GXWebColumn.GetNew(isAjaxCallMode( ));
               GridwizardstepsContainer.AddColumnProperties(GridwizardstepsColumn);
               GridwizardstepsColumn = GXWebColumn.GetNew(isAjaxCallMode( ));
               GridwizardstepsContainer.AddColumnProperties(GridwizardstepsColumn);
               GridwizardstepsColumn = GXWebColumn.GetNew(isAjaxCallMode( ));
               GridwizardstepsContainer.AddColumnProperties(GridwizardstepsColumn);
               GridwizardstepsColumn = GXWebColumn.GetNew(isAjaxCallMode( ));
               GridwizardstepsContainer.AddColumnProperties(GridwizardstepsColumn);
               GridwizardstepsColumn = GXWebColumn.GetNew(isAjaxCallMode( ));
               GridwizardstepsContainer.AddColumnProperties(GridwizardstepsColumn);
               GridwizardstepsColumn = GXWebColumn.GetNew(isAjaxCallMode( ));
               GridwizardstepsColumn.AddObjectProperty("Value", lblStepnumber_Caption);
               GridwizardstepsContainer.AddColumnProperties(GridwizardstepsColumn);
               GridwizardstepsColumn = GXWebColumn.GetNew(isAjaxCallMode( ));
               GridwizardstepsContainer.AddColumnProperties(GridwizardstepsColumn);
               GridwizardstepsColumn = GXWebColumn.GetNew(isAjaxCallMode( ));
               GridwizardstepsColumn.AddObjectProperty("Class", StringUtil.RTrim( edtavWizardstepsaux__title_Class));
               GridwizardstepsColumn.AddObjectProperty("Enabled", StringUtil.LTrim( StringUtil.NToC( (decimal)(edtavWizardstepsaux__title_Enabled), 5, 0, ".", "")));
               GridwizardstepsColumn.AddObjectProperty("Visible", StringUtil.LTrim( StringUtil.NToC( (decimal)(edtavWizardstepsaux__title_Visible), 5, 0, ".", "")));
               GridwizardstepsContainer.AddColumnProperties(GridwizardstepsColumn);
               GridwizardstepsContainer.AddObjectProperty("Selectedindex", StringUtil.LTrim( StringUtil.NToC( (decimal)(subGridwizardsteps_Selectedindex), 4, 0, ".", "")));
               GridwizardstepsContainer.AddObjectProperty("Allowselection", StringUtil.LTrim( StringUtil.NToC( (decimal)(subGridwizardsteps_Allowselection), 1, 0, ".", "")));
               GridwizardstepsContainer.AddObjectProperty("Selectioncolor", StringUtil.LTrim( StringUtil.NToC( (decimal)(subGridwizardsteps_Selectioncolor), 9, 0, ".", "")));
               GridwizardstepsContainer.AddObjectProperty("Allowhover", StringUtil.LTrim( StringUtil.NToC( (decimal)(subGridwizardsteps_Allowhovering), 1, 0, ".", "")));
               GridwizardstepsContainer.AddObjectProperty("Hovercolor", StringUtil.LTrim( StringUtil.NToC( (decimal)(subGridwizardsteps_Hoveringcolor), 9, 0, ".", "")));
               GridwizardstepsContainer.AddObjectProperty("Allowcollapsing", StringUtil.LTrim( StringUtil.NToC( (decimal)(subGridwizardsteps_Allowcollapsing), 1, 0, ".", "")));
               GridwizardstepsContainer.AddObjectProperty("Collapsed", StringUtil.LTrim( StringUtil.NToC( (decimal)(subGridwizardsteps_Collapsed), 1, 0, ".", "")));
            }
         }
         if ( wbEnd == 5 )
         {
            wbEnd = 0;
            nRC_GXsfl_5 = (int)(nGXsfl_5_idx-1);
            if ( GridwizardstepsContainer.GetWrapped() == 1 )
            {
               context.WriteHtmlText( "</table>") ;
               context.WriteHtmlText( "</div>") ;
            }
            else
            {
               AV37GXV1 = nGXsfl_5_idx;
               sStyleString = "";
               context.WriteHtmlText( "<div id=\""+sPrefix+"GridwizardstepsContainer"+"Div\" "+sStyleString+">"+"</div>") ;
               context.httpAjaxContext.ajax_rsp_assign_grid(sPrefix+"_"+"Gridwizardsteps", GridwizardstepsContainer);
               if ( ! isAjaxCallMode( ) && ! context.isSpaRequest( ) )
               {
                  GxWebStd.gx_hidden_field( context, sPrefix+"GridwizardstepsContainerData", GridwizardstepsContainer.ToJavascriptSource());
               }
               if ( context.isAjaxRequest( ) || context.isSpaRequest( ) )
               {
                  GxWebStd.gx_hidden_field( context, sPrefix+"GridwizardstepsContainerData"+"V", GridwizardstepsContainer.GridValuesHidden());
               }
               else
               {
                  context.WriteHtmlText( "<input type=\"hidden\" "+"name=\""+sPrefix+"GridwizardstepsContainerData"+"V"+"\" value='"+GridwizardstepsContainer.GridValuesHidden()+"'/>") ;
               }
            }
            context.WriteHtmlText( "</td>") ;
            context.WriteHtmlText( "</tr>") ;
            context.WriteHtmlText( "</tbody>") ;
            /* End of table */
            context.WriteHtmlText( "</table>") ;
            wb_table1_2_072e( true) ;
         }
         else
         {
            wb_table1_2_072e( false) ;
         }
      }

      public override void setparameters( Object[] obj )
      {
         createObjects();
         initialize();
         AV18WizardSteps = (GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtWizardSteps_WizardStepsItem>)getParm(obj,0);
         AV11SelectedStep = (String)getParm(obj,1);
         context.httpAjaxContext.ajax_rsp_assign_attri(sPrefix, false, "AV11SelectedStep", AV11SelectedStep);
      }

      public override String getresponse( String sGXDynURL )
      {
         initialize_properties( ) ;
         BackMsgLst = context.GX_msglist;
         context.GX_msglist = LclMsgLst;
         sDynURL = sGXDynURL;
         nGotPars = (short)(1);
         nGXWrapped = (short)(1);
         context.SetWrapped(true);
         PA072( ) ;
         WS072( ) ;
         WE072( ) ;
         this.cleanup();
         context.SetWrapped(false);
         SaveComponentMsgList(sPrefix);
         context.GX_msglist = BackMsgLst;
         return "";
      }

      public void responsestatic( String sGXDynURL )
      {
      }

      public override void componentbind( Object[] obj )
      {
         if ( IsUrlCreated( ) )
         {
            return  ;
         }
         sCtrlAV18WizardSteps = (String)((String)getParm(obj,0));
         sCtrlAV11SelectedStep = (String)((String)getParm(obj,1));
      }

      public override void componentrestorestate( String sPPrefix ,
                                                  String sPSFPrefix )
      {
         sPrefix = sPPrefix + sPSFPrefix;
         PA072( ) ;
         WCParametersGet( ) ;
      }

      public override void componentprepare( Object[] obj )
      {
         wbLoad = false;
         sCompPrefix = (String)getParm(obj,0);
         sSFPrefix = (String)getParm(obj,1);
         sPrefix = sCompPrefix + sSFPrefix;
         AddComponentObject(sPrefix, "wwpbaseobjects\\wizardstepsarrowwc", GetJustCreated( ));
         if ( ( nDoneStart == 0 ) && ( nDynComponent == 0 ) )
         {
            INITWEB( ) ;
         }
         else
         {
            init_default_properties( ) ;
            init_web_controls( ) ;
         }
         PA072( ) ;
         if ( ! GetJustCreated( ) && ( StringUtil.StrCmp(context.GetRequestMethod( ), "POST") == 0 ) && ( context.wbGlbDoneStart == 0 ) )
         {
            WCParametersGet( ) ;
         }
         else
         {
            AV18WizardSteps = (GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtWizardSteps_WizardStepsItem>)getParm(obj,2);
            AV11SelectedStep = (String)getParm(obj,3);
            context.httpAjaxContext.ajax_rsp_assign_attri(sPrefix, false, "AV11SelectedStep", AV11SelectedStep);
         }
         wcpOAV11SelectedStep = cgiGet( sPrefix+"wcpOAV11SelectedStep");
         if ( ! GetJustCreated( ) && ( ( StringUtil.StrCmp(AV11SelectedStep, wcpOAV11SelectedStep) != 0 ) ) )
         {
            setjustcreated();
         }
         wcpOAV11SelectedStep = AV11SelectedStep;
      }

      protected void WCParametersGet( )
      {
         /* Read Component Parameters. */
         sCtrlAV18WizardSteps = cgiGet( sPrefix+"AV18WizardSteps_CTRL");
         if ( StringUtil.Len( sCtrlAV18WizardSteps) > 0 )
         {
            AV18WizardSteps = new GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtWizardSteps_WizardStepsItem>();
         }
         else
         {
            ajax_req_read_hidden_sdt(cgiGet( sPrefix+"AV18WizardSteps_PARM"), AV18WizardSteps);
         }
         sCtrlAV11SelectedStep = cgiGet( sPrefix+"AV11SelectedStep_CTRL");
         if ( StringUtil.Len( sCtrlAV11SelectedStep) > 0 )
         {
            AV11SelectedStep = cgiGet( sCtrlAV11SelectedStep);
            context.httpAjaxContext.ajax_rsp_assign_attri(sPrefix, false, "AV11SelectedStep", AV11SelectedStep);
         }
         else
         {
            AV11SelectedStep = cgiGet( sPrefix+"AV11SelectedStep_PARM");
         }
      }

      public override void componentprocess( String sPPrefix ,
                                             String sPSFPrefix ,
                                             String sCompEvt )
      {
         sCompPrefix = sPPrefix;
         sSFPrefix = sPSFPrefix;
         sPrefix = sCompPrefix + sSFPrefix;
         BackMsgLst = context.GX_msglist;
         context.GX_msglist = LclMsgLst;
         INITWEB( ) ;
         nDraw = 0;
         PA072( ) ;
         sEvt = sCompEvt;
         WCParametersGet( ) ;
         WS072( ) ;
         if ( isFullAjaxMode( ) )
         {
            componentdraw();
         }
         SaveComponentMsgList(sPrefix);
         context.GX_msglist = BackMsgLst;
      }

      public override void componentstart( )
      {
         if ( nDoneStart == 0 )
         {
            WCStart( ) ;
         }
      }

      protected void WCStart( )
      {
         nDraw = 1;
         BackMsgLst = context.GX_msglist;
         context.GX_msglist = LclMsgLst;
         WS072( ) ;
         SaveComponentMsgList(sPrefix);
         context.GX_msglist = BackMsgLst;
      }

      protected void WCParametersSet( )
      {
         if ( context.isAjaxRequest( ) )
         {
            context.httpAjaxContext.ajax_rsp_assign_sdt_attri(sPrefix, false, sPrefix+"AV18WizardSteps_PARM", AV18WizardSteps);
         }
         else
         {
            context.httpAjaxContext.ajax_rsp_assign_hidden_sdt(sPrefix+"AV18WizardSteps_PARM", AV18WizardSteps);
         }
         if ( StringUtil.Len( StringUtil.RTrim( sCtrlAV18WizardSteps)) > 0 )
         {
            GxWebStd.gx_hidden_field( context, sPrefix+"AV18WizardSteps_CTRL", StringUtil.RTrim( sCtrlAV18WizardSteps));
         }
         GxWebStd.gx_hidden_field( context, sPrefix+"AV11SelectedStep_PARM", AV11SelectedStep);
         if ( StringUtil.Len( StringUtil.RTrim( sCtrlAV11SelectedStep)) > 0 )
         {
            GxWebStd.gx_hidden_field( context, sPrefix+"AV11SelectedStep_CTRL", StringUtil.RTrim( sCtrlAV11SelectedStep));
         }
      }

      public override void componentdraw( )
      {
         if ( nDoneStart == 0 )
         {
            WCStart( ) ;
         }
         BackMsgLst = context.GX_msglist;
         context.GX_msglist = LclMsgLst;
         WCParametersSet( ) ;
         WE072( ) ;
         SaveComponentMsgList(sPrefix);
         context.GX_msglist = BackMsgLst;
      }

      public override String getstring( String sGXControl )
      {
         String sCtrlName ;
         if ( StringUtil.StrCmp(StringUtil.Substring( sGXControl, 1, 1), "&") == 0 )
         {
            sCtrlName = StringUtil.Substring( sGXControl, 2, StringUtil.Len( sGXControl)-1);
         }
         else
         {
            sCtrlName = sGXControl;
         }
         return cgiGet( sPrefix+"v"+StringUtil.Upper( sCtrlName)) ;
      }

      public override void componentjscripts( )
      {
         include_jscripts( ) ;
      }

      public override void componentthemes( )
      {
         define_styles( ) ;
      }

      protected void define_styles( )
      {
         AddThemeStyleSheetFile("", context.GetTheme( )+".css", "?"+GetCacheInvalidationToken( ));
         bool outputEnabled = isOutputEnabled( ) ;
         if ( context.isSpaRequest( ) )
         {
            enableOutput();
         }
         idxLst = 1;
         while ( idxLst <= Form.Jscriptsrc.Count )
         {
            context.AddJavascriptSource(StringUtil.RTrim( ((String)Form.Jscriptsrc.Item(idxLst))), "?20191031538292", true, true);
            idxLst = (int)(idxLst+1);
         }
         if ( ! outputEnabled )
         {
            if ( context.isSpaRequest( ) )
            {
               disableOutput();
            }
         }
         /* End function define_styles */
      }

      protected void include_jscripts( )
      {
         if ( nGXWrapped != 1 )
         {
            context.AddJavascriptSource("wwpbaseobjects/wizardstepsarrowwc.js", "?20191031538292", false, true);
         }
         /* End function include_jscripts */
      }

      protected void SubsflControlProps_52( )
      {
         imgStepimg_Internalname = sPrefix+"STEPIMG_"+sGXsfl_5_idx;
         lblStepnumber_Internalname = sPrefix+"STEPNUMBER_"+sGXsfl_5_idx;
         edtavWizardstepsaux__title_Internalname = sPrefix+"WIZARDSTEPSAUX__TITLE_"+sGXsfl_5_idx;
      }

      protected void SubsflControlProps_fel_52( )
      {
         imgStepimg_Internalname = sPrefix+"STEPIMG_"+sGXsfl_5_fel_idx;
         lblStepnumber_Internalname = sPrefix+"STEPNUMBER_"+sGXsfl_5_fel_idx;
         edtavWizardstepsaux__title_Internalname = sPrefix+"WIZARDSTEPSAUX__TITLE_"+sGXsfl_5_fel_idx;
      }

      protected void sendrow_52( )
      {
         SubsflControlProps_52( ) ;
         WB070( ) ;
         GridwizardstepsRow = GXWebRow.GetNew(context,GridwizardstepsContainer);
         if ( subGridwizardsteps_Backcolorstyle == 0 )
         {
            /* None style subfile background logic. */
            subGridwizardsteps_Backstyle = 0;
            if ( StringUtil.StrCmp(subGridwizardsteps_Class, "") != 0 )
            {
               subGridwizardsteps_Linesclass = subGridwizardsteps_Class+"Odd";
            }
         }
         else if ( subGridwizardsteps_Backcolorstyle == 1 )
         {
            /* Uniform style subfile background logic. */
            subGridwizardsteps_Backstyle = 0;
            subGridwizardsteps_Backcolor = subGridwizardsteps_Allbackcolor;
            if ( StringUtil.StrCmp(subGridwizardsteps_Class, "") != 0 )
            {
               subGridwizardsteps_Linesclass = subGridwizardsteps_Class+"Uniform";
            }
         }
         else if ( subGridwizardsteps_Backcolorstyle == 2 )
         {
            /* Header style subfile background logic. */
            subGridwizardsteps_Backstyle = 1;
            if ( StringUtil.StrCmp(subGridwizardsteps_Class, "") != 0 )
            {
               subGridwizardsteps_Linesclass = subGridwizardsteps_Class+"Odd";
            }
            subGridwizardsteps_Backcolor = (int)(0xFFFFFF);
         }
         else if ( subGridwizardsteps_Backcolorstyle == 3 )
         {
            /* Report style subfile background logic. */
            subGridwizardsteps_Backstyle = 1;
            subGridwizardsteps_Backcolor = (int)(0xFFFFFF);
            if ( StringUtil.StrCmp(subGridwizardsteps_Class, "") != 0 )
            {
               subGridwizardsteps_Linesclass = subGridwizardsteps_Class+"Odd";
            }
         }
         /* Start of Columns property logic. */
         GridwizardstepsRow.AddColumnProperties("row", -1, isAjaxCallMode( ), new Object[] {(String)"",(String)subGridwizardsteps_Linesclass,(String)""});
         GridwizardstepsRow.AddColumnProperties("cell", -1, isAjaxCallMode( ), new Object[] {(String)"",(String)"",(String)""});
         /* Table start */
         GridwizardstepsRow.AddColumnProperties("table", -1, isAjaxCallMode( ), new Object[] {(String)tblTblcontainerstep_Internalname+"_"+sGXsfl_5_idx,(short)1,(String)tblTblcontainerstep_Class,(String)"",(String)"",(String)"",(String)"",(String)"",(String)"",(short)0,(short)0,(String)"",(String)"",(String)"",(String)"px",(String)"px",(String)""});
         GridwizardstepsRow.AddColumnProperties("row", -1, isAjaxCallMode( ), new Object[] {(String)"",(String)"",(String)""});
         GridwizardstepsRow.AddColumnProperties("cell", -1, isAjaxCallMode( ), new Object[] {(String)"",(String)"",(String)""});
         /* Static images/pictures */
         ClassString = imgStepimg_Class;
         StyleString = "";
         sImgUrl = imgStepimg_Bitmap;
         GridwizardstepsRow.AddColumnProperties("bitmap", 1, isAjaxCallMode( ), new Object[] {(String)imgStepimg_Internalname,(String)sImgUrl,(String)"",(String)"",(String)"",context.GetTheme( ),(int)imgStepimg_Visible,(short)1,(String)"",(String)"",(short)0,(short)0,(short)0,(String)"px",(short)0,(String)"px",(short)0,(short)0,(short)0,(String)"",(String)"",(String)StyleString,(String)ClassString,(String)"",(String)"",(String)"",(String)"",(String)"",(String)"",(String)"",(short)1,(bool)false,(bool)false,context.GetImageSrcSet( sImgUrl)});
         if ( GridwizardstepsContainer.GetWrapped() == 1 )
         {
            GridwizardstepsContainer.CloseTag("cell");
         }
         GridwizardstepsRow.AddColumnProperties("cell", -1, isAjaxCallMode( ), new Object[] {(String)"",(String)"",(String)""});
         /* Div Control */
         GridwizardstepsRow.AddColumnProperties("div_start", -1, isAjaxCallMode( ), new Object[] {(String)divLayout_tblstep_Internalname+"_"+sGXsfl_5_idx,(short)1,(short)0,(String)"px",(short)0,(String)"px",(String)"Section",(String)"left",(String)"top",(String)"",(String)"",(String)"div"});
         /* Div Control */
         GridwizardstepsRow.AddColumnProperties("div_start", -1, isAjaxCallMode( ), new Object[] {(String)"",(short)1,(short)0,(String)"px",(short)0,(String)"px",(String)"Section",(String)"left",(String)"top",(String)" "+"data-gx-base-lib=\"bootstrapv3\""+" "+"data-abstract-form"+" ",(String)"",(String)"div"});
         /* Div Control */
         GridwizardstepsRow.AddColumnProperties("div_start", -1, isAjaxCallMode( ), new Object[] {(String)divTblstep_Internalname+"_"+sGXsfl_5_idx,(int)divTblstep_Visible,(short)0,(String)"px",(short)0,(String)"px",(String)divTblstep_Class,(String)"left",(String)"top",(String)"",(String)"",(String)"div"});
         /* Div Control */
         GridwizardstepsRow.AddColumnProperties("div_start", -1, isAjaxCallMode( ), new Object[] {(String)"",(short)1,(short)0,(String)"px",(short)0,(String)"px",(String)"row",(String)"left",(String)"top",(String)"",(String)"",(String)"div"});
         /* Div Control */
         GridwizardstepsRow.AddColumnProperties("div_start", -1, isAjaxCallMode( ), new Object[] {(String)"",(short)1,(short)0,(String)"px",(short)0,(String)"px",(String)"col-xs-12 StepNumberCell",(String)"left",(String)"top",(String)"",(String)"",(String)"div"});
         /* Text block */
         GridwizardstepsRow.AddColumnProperties("label", 1, isAjaxCallMode( ), new Object[] {(String)lblStepnumber_Internalname,(String)lblStepnumber_Caption,(String)"",(String)"",(String)lblStepnumber_Jsonclick,(String)"'"+sPrefix+"'"+",false,"+"'"+""+"'",(String)"",(String)lblStepnumber_Class,(short)0,(String)"",(int)lblStepnumber_Visible,(short)1,(short)0});
         GridwizardstepsRow.AddColumnProperties("div_end", -1, isAjaxCallMode( ), new Object[] {(String)"left",(String)"top",(String)"div"});
         GridwizardstepsRow.AddColumnProperties("div_end", -1, isAjaxCallMode( ), new Object[] {(String)"left",(String)"top",(String)"div"});
         GridwizardstepsRow.AddColumnProperties("div_end", -1, isAjaxCallMode( ), new Object[] {(String)"left",(String)"top",(String)"div"});
         GridwizardstepsRow.AddColumnProperties("div_end", -1, isAjaxCallMode( ), new Object[] {(String)"left",(String)"top",(String)"div"});
         GridwizardstepsRow.AddColumnProperties("div_end", -1, isAjaxCallMode( ), new Object[] {(String)"left",(String)"top",(String)"div"});
         if ( GridwizardstepsContainer.GetWrapped() == 1 )
         {
            GridwizardstepsContainer.CloseTag("cell");
         }
         GridwizardstepsRow.AddColumnProperties("cell", -1, isAjaxCallMode( ), new Object[] {(String)"",(String)"",(String)""});
         /* Single line edit */
         ROClassString = edtavWizardstepsaux__title_Class;
         GridwizardstepsRow.AddColumnProperties("edit", 1, isAjaxCallMode( ), new Object[] {(String)edtavWizardstepsaux__title_Internalname,((GeneXus.Programs.wwpbaseobjects.SdtWizardSteps_WizardStepsItem)AV32WizardStepsAux.Item(AV37GXV1)).gxTpr_Title,(String)"",(String)"",(String)"'"+sPrefix+"'"+",false,"+"'"+""+"'",(String)"",(String)"",(String)"",(String)"",(String)edtavWizardstepsaux__title_Jsonclick,(short)0,(String)edtavWizardstepsaux__title_Class,(String)"",(String)ROClassString,(String)"",(String)"",(int)edtavWizardstepsaux__title_Visible,(int)edtavWizardstepsaux__title_Enabled,(short)0,(String)"text",(String)"",(short)40,(String)"chr",(short)1,(String)"row",(short)40,(short)0,(short)0,(short)5,(short)1,(short)-1,(short)-1,(bool)false,(String)"",(String)"left",(bool)true});
         if ( GridwizardstepsContainer.GetWrapped() == 1 )
         {
            GridwizardstepsContainer.CloseTag("cell");
         }
         if ( GridwizardstepsContainer.GetWrapped() == 1 )
         {
            GridwizardstepsContainer.CloseTag("row");
         }
         if ( GridwizardstepsContainer.GetWrapped() == 1 )
         {
            GridwizardstepsContainer.CloseTag("table");
         }
         /* End of table */
         if ( GridwizardstepsContainer.GetWrapped() == 1 )
         {
            GridwizardstepsContainer.CloseTag("cell");
         }
         if ( GridwizardstepsContainer.GetWrapped() == 1 )
         {
            GridwizardstepsContainer.CloseTag("row");
         }
         send_integrity_lvl_hashes072( ) ;
         /* End of Columns property logic. */
         GridwizardstepsContainer.AddRow(GridwizardstepsRow);
         nGXsfl_5_idx = ((subGridwizardsteps_Islastpage==1)&&(nGXsfl_5_idx+1>subGridwizardsteps_Recordsperpage( )) ? 1 : nGXsfl_5_idx+1);
         sGXsfl_5_idx = StringUtil.PadL( StringUtil.LTrim( StringUtil.Str( (decimal)(nGXsfl_5_idx), 4, 0)), 4, "0");
         SubsflControlProps_52( ) ;
         /* End function sendrow_52 */
      }

      protected void init_web_controls( )
      {
         /* End function init_web_controls */
      }

      protected void init_default_properties( )
      {
         imgStepimg_Internalname = sPrefix+"STEPIMG";
         lblStepnumber_Internalname = sPrefix+"STEPNUMBER";
         divTblstep_Internalname = sPrefix+"TBLSTEP";
         divLayout_tblstep_Internalname = sPrefix+"LAYOUT_TBLSTEP";
         edtavWizardstepsaux__title_Internalname = sPrefix+"WIZARDSTEPSAUX__TITLE";
         tblTblcontainerstep_Internalname = sPrefix+"TBLCONTAINERSTEP";
         tblTablemain_Internalname = sPrefix+"TABLEMAIN";
         Form.Internalname = sPrefix+"FORM";
         subGridwizardsteps_Internalname = sPrefix+"GRIDWIZARDSTEPS";
      }

      public override void initialize_properties( )
      {
         if ( StringUtil.Len( sPrefix) == 0 )
         {
            context.SetDefaultTheme("WorkWithPlusTheme");
         }
         if ( StringUtil.Len( sPrefix) == 0 )
         {
            if ( context.isSpaRequest( ) )
            {
               disableJsOutput();
            }
         }
         init_default_properties( ) ;
         edtavWizardstepsaux__title_Jsonclick = "";
         lblStepnumber_Class = "StepNumber";
         lblStepnumber_Caption = "1";
         lblStepnumber_Visible = 1;
         divTblstep_Visible = 1;
         imgStepimg_Class = "StepImageUnSelected";
         imgStepimg_Visible = 1;
         imgStepimg_Bitmap = (String)(context.GetImagePath( "2fe377a7-df7d-42aa-84d4-4f1b853d50aa", "", context.GetTheme( )));
         subGridwizardsteps_Class = "FreeStyleSteps";
         subGridwizardsteps_Allowcollapsing = 0;
         edtavWizardstepsaux__title_Visible = 1;
         edtavWizardstepsaux__title_Enabled = 0;
         edtavWizardstepsaux__title_Class = "AttributeStep";
         lblStepnumber_Caption = "1";
         tblTblcontainerstep_Class = "TableContainerStep";
         divTblstep_Class = "TableStep";
         subGridwizardsteps_Backcolorstyle = 0;
         edtavWizardstepsaux__title_Enabled = -1;
         if ( StringUtil.Len( sPrefix) == 0 )
         {
            if ( context.isSpaRequest( ) )
            {
               enableJsOutput();
            }
         }
      }

      public override bool SupportAjaxEvent( )
      {
         return true ;
      }

      public override void InitializeDynEvents( )
      {
         setEventMetadata("REFRESH","{handler:'Refresh',iparms:[{av:'GRIDWIZARDSTEPS_nFirstRecordOnPage'},{av:'GRIDWIZARDSTEPS_nEOF'},{av:'AV32WizardStepsAux',fld:'vWIZARDSTEPSAUX',grid:5,pic:''},{av:'nRC_GXsfl_5',ctrl:'GRIDWIZARDSTEPS',prop:'GridRC'},{av:'AV11SelectedStep',fld:'vSELECTEDSTEP',pic:''},{av:'AV18WizardSteps',fld:'vWIZARDSTEPS',pic:''},{av:'sPrefix'},{av:'AV30StepRealNumber',fld:'vSTEPREALNUMBER',pic:'ZZZ9',hsh:true},{av:'AV9PreviousSelected',fld:'vPREVIOUSSELECTED',pic:'',hsh:true},{av:'AV14StepNumber',fld:'vSTEPNUMBER',pic:'ZZZ9',hsh:true},{av:'AV23FirstIsDummy',fld:'vFIRSTISDUMMY',pic:'',hsh:true},{av:'AV24LastIsDummy',fld:'vLASTISDUMMY',pic:'',hsh:true},{av:'AV27SecondIsDummy',fld:'vSECONDISDUMMY',pic:'',hsh:true},{av:'AV26PenultimateIsDummy',fld:'vPENULTIMATEISDUMMY',pic:'',hsh:true}]");
         setEventMetadata("REFRESH",",oparms:[]}");
         setEventMetadata("GRIDWIZARDSTEPS.LOAD","{handler:'E12072',iparms:[{av:'AV30StepRealNumber',fld:'vSTEPREALNUMBER',pic:'ZZZ9',hsh:true},{av:'AV32WizardStepsAux',fld:'vWIZARDSTEPSAUX',grid:5,pic:''},{av:'GRIDWIZARDSTEPS_nFirstRecordOnPage'},{av:'nRC_GXsfl_5',ctrl:'GRIDWIZARDSTEPS',prop:'GridRC'},{av:'AV11SelectedStep',fld:'vSELECTEDSTEP',pic:''},{av:'AV9PreviousSelected',fld:'vPREVIOUSSELECTED',pic:'',hsh:true},{av:'AV14StepNumber',fld:'vSTEPNUMBER',pic:'ZZZ9',hsh:true},{av:'AV23FirstIsDummy',fld:'vFIRSTISDUMMY',pic:'',hsh:true},{av:'AV24LastIsDummy',fld:'vLASTISDUMMY',pic:'',hsh:true},{av:'AV18WizardSteps',fld:'vWIZARDSTEPS',pic:''},{av:'AV27SecondIsDummy',fld:'vSECONDISDUMMY',pic:'',hsh:true},{av:'AV26PenultimateIsDummy',fld:'vPENULTIMATEISDUMMY',pic:'',hsh:true}]");
         setEventMetadata("GRIDWIZARDSTEPS.LOAD",",oparms:[{av:'lblStepnumber_Caption',ctrl:'STEPNUMBER',prop:'Caption'},{ctrl:'WIZARDSTEPSAUX__TITLE',prop:'Class'},{av:'imgStepimg_Class',ctrl:'STEPIMG',prop:'Class'},{av:'lblStepnumber_Class',ctrl:'STEPNUMBER',prop:'Class'},{av:'divTblstep_Class',ctrl:'TBLSTEP',prop:'Class'},{av:'AV9PreviousSelected',fld:'vPREVIOUSSELECTED',pic:'',hsh:true},{av:'imgStepimg_Visible',ctrl:'STEPIMG',prop:'Visible'},{av:'tblTblcontainerstep_Class',ctrl:'TBLCONTAINERSTEP',prop:'Class'},{av:'divTblstep_Visible',ctrl:'TBLSTEP',prop:'Visible'},{av:'lblStepnumber_Visible',ctrl:'STEPNUMBER',prop:'Visible'},{ctrl:'WIZARDSTEPSAUX__TITLE',prop:'Visible'},{av:'AV30StepRealNumber',fld:'vSTEPREALNUMBER',pic:'ZZZ9',hsh:true},{av:'AV14StepNumber',fld:'vSTEPNUMBER',pic:'ZZZ9',hsh:true}]}");
         setEventMetadata("NULL","{handler:'Validv_Gxv2',iparms:[]");
         setEventMetadata("NULL",",oparms:[]}");
         return  ;
      }

      public override void cleanup( )
      {
         flushBuffer();
         CloseOpenCursors();
         if ( IsMain )
         {
            context.CloseConnections() ;
         }
      }

      protected void CloseOpenCursors( )
      {
      }

      public override void initialize( )
      {
         AV18WizardSteps = new GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtWizardSteps_WizardStepsItem>( context, "WizardStepsItem", "SIGMA");
         wcpOAV11SelectedStep = "";
         gxfirstwebparm = "";
         gxfirstwebparm_bkp = "";
         sPrefix = "";
         AV32WizardStepsAux = new GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtWizardSteps_WizardStepsItem>( context, "WizardStepsItem", "SIGMA");
         GXKey = "";
         sDynURL = "";
         FormProcess = "";
         bodyStyle = "";
         GX_FocusControl = "";
         GridwizardstepsContainer = new GXWebGrid( context);
         sStyleString = "";
         Form = new GXWebForm();
         sXEvt = "";
         sEvt = "";
         EvtGridId = "";
         EvtRowId = "";
         sEvtType = "";
         AV31WizardStep = new GeneXus.Programs.wwpbaseobjects.SdtWizardSteps_WizardStepsItem(context);
         AV16TableContainerStepClass = "";
         GridwizardstepsRow = new GXWebRow();
         subGridwizardsteps_Header = "";
         GridwizardstepsColumn = new GXWebColumn();
         BackMsgLst = new msglist();
         LclMsgLst = new msglist();
         sCtrlAV18WizardSteps = "";
         sCtrlAV11SelectedStep = "";
         subGridwizardsteps_Linesclass = "";
         ClassString = "";
         StyleString = "";
         sImgUrl = "";
         lblStepnumber_Jsonclick = "";
         ROClassString = "";
         /* GeneXus formulas. */
         context.Gx_err = 0;
         edtavWizardstepsaux__title_Enabled = 0;
      }

      private short nGotPars ;
      private short GxWebError ;
      private short nDynComponent ;
      private short AV30StepRealNumber ;
      private short AV14StepNumber ;
      private short initialized ;
      private short nGXWrapped ;
      private short wbEnd ;
      private short wbStart ;
      private short nDraw ;
      private short nDoneStart ;
      private short nDonePA ;
      private short gxcookieaux ;
      private short subGridwizardsteps_Backcolorstyle ;
      private short AV25MaxStepsToShow ;
      private short AV28SelectedStepIndex ;
      private short AV29StartIndex ;
      private short subGridwizardsteps_Allowselection ;
      private short subGridwizardsteps_Allowhovering ;
      private short subGridwizardsteps_Allowcollapsing ;
      private short subGridwizardsteps_Collapsed ;
      private short subGridwizardsteps_Backstyle ;
      private short GRIDWIZARDSTEPS_nEOF ;
      private int nRC_GXsfl_5 ;
      private int nGXsfl_5_idx=1 ;
      private int edtavWizardstepsaux__title_Enabled ;
      private int AV37GXV1 ;
      private int subGridwizardsteps_Islastpage ;
      private int nGXsfl_5_fel_idx=1 ;
      private int AV39GXV3 ;
      private int imgStepimg_Visible ;
      private int divTblstep_Visible ;
      private int lblStepnumber_Visible ;
      private int edtavWizardstepsaux__title_Visible ;
      private int subGridwizardsteps_Selectedindex ;
      private int subGridwizardsteps_Selectioncolor ;
      private int subGridwizardsteps_Hoveringcolor ;
      private int idxLst ;
      private int subGridwizardsteps_Backcolor ;
      private int subGridwizardsteps_Allbackcolor ;
      private long GRIDWIZARDSTEPS_nCurrentRecord ;
      private long GRIDWIZARDSTEPS_nFirstRecordOnPage ;
      private String gxfirstwebparm ;
      private String gxfirstwebparm_bkp ;
      private String sPrefix ;
      private String sCompPrefix ;
      private String sSFPrefix ;
      private String sGXsfl_5_idx="0001" ;
      private String GXKey ;
      private String edtavWizardstepsaux__title_Internalname ;
      private String sDynURL ;
      private String FormProcess ;
      private String bodyStyle ;
      private String GX_FocusControl ;
      private String sStyleString ;
      private String sXEvt ;
      private String sEvt ;
      private String EvtGridId ;
      private String EvtRowId ;
      private String sEvtType ;
      private String sGXsfl_5_fel_idx="0001" ;
      private String lblStepnumber_Caption ;
      private String edtavWizardstepsaux__title_Class ;
      private String imgStepimg_Class ;
      private String lblStepnumber_Class ;
      private String divTblstep_Class ;
      private String divTblstep_Internalname ;
      private String tblTblcontainerstep_Class ;
      private String tblTblcontainerstep_Internalname ;
      private String tblTablemain_Internalname ;
      private String subGridwizardsteps_Internalname ;
      private String subGridwizardsteps_Header ;
      private String sCtrlAV18WizardSteps ;
      private String sCtrlAV11SelectedStep ;
      private String imgStepimg_Internalname ;
      private String lblStepnumber_Internalname ;
      private String subGridwizardsteps_Class ;
      private String subGridwizardsteps_Linesclass ;
      private String ClassString ;
      private String StyleString ;
      private String sImgUrl ;
      private String divLayout_tblstep_Internalname ;
      private String lblStepnumber_Jsonclick ;
      private String ROClassString ;
      private String edtavWizardstepsaux__title_Jsonclick ;
      private bool entryPointCalled ;
      private bool AV9PreviousSelected ;
      private bool AV23FirstIsDummy ;
      private bool AV24LastIsDummy ;
      private bool AV27SecondIsDummy ;
      private bool AV26PenultimateIsDummy ;
      private bool bGXsfl_5_Refreshing=false ;
      private bool toggleJsOutput ;
      private bool wbLoad ;
      private bool Rfr0gs ;
      private bool wbErr ;
      private bool gxdyncontrolsrefreshing ;
      private bool returnInSub ;
      private bool gx_BV5 ;
      private String AV11SelectedStep ;
      private String wcpOAV11SelectedStep ;
      private String AV16TableContainerStepClass ;
      private String imgStepimg_Bitmap ;
      private GXWebGrid GridwizardstepsContainer ;
      private GXWebRow GridwizardstepsRow ;
      private GXWebColumn GridwizardstepsColumn ;
      private GXWebForm Form ;
      private IGxDataStore dsGAM ;
      private IGxDataStore dsAFIP ;
      private IGxDataStore dsDefault ;
      private msglist BackMsgLst ;
      private msglist LclMsgLst ;
      private GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtWizardSteps_WizardStepsItem> AV18WizardSteps ;
      private GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtWizardSteps_WizardStepsItem> AV32WizardStepsAux ;
      private GeneXus.Programs.wwpbaseobjects.SdtWizardSteps_WizardStepsItem AV31WizardStep ;
   }

}
