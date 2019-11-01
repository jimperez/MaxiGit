/*
               File: WWPBaseObjects.ColumnsSelector
        Description: Selector de Columnas
             Author: GeneXus C# Generator version 16_0_5-135614
       Generated on: 10/2/2019 19:19:48.99
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
using GeneXus.Http.Server;
using System.Xml.Serialization;
using System.ServiceModel;
using System.ServiceModel.Activation;
using System.Runtime.Serialization;
namespace GeneXus.Programs.wwpbaseobjects {
   public class columnsselector : GXDataArea, System.Web.SessionState.IRequiresSessionState
   {
      public columnsselector( )
      {
         context = new GxContext(  );
         DataStoreUtil.LoadDataStores( context);
         dsGAM = context.GetDataStore("GAM");
         dsAFIP = context.GetDataStore("AFIP");
         dsDefault = context.GetDataStore("Default");
         IsMain = true;
         context.SetDefaultTheme("WorkWithPlusTheme");
      }

      public columnsselector( IGxContext context )
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

      public void execute( String aP0_SessionKey )
      {
         this.AV12SessionKey = aP0_SessionKey;
         executePrivate();
      }

      void executePrivate( )
      {
         isStatic = false;
         webExecute();
      }

      protected override void createObjects( )
      {
         chkavVisible = new GXCheckbox();
      }

      protected void INITWEB( )
      {
         initialize_properties( ) ;
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
            else if ( StringUtil.StrCmp(gxfirstwebparm, "gxajaxNewRow_"+"Grid") == 0 )
            {
               nRC_GXsfl_11 = (int)(NumberUtil.Val( GetNextPar( ), "."));
               nGXsfl_11_idx = (int)(NumberUtil.Val( GetNextPar( ), "."));
               sGXsfl_11_idx = GetNextPar( );
               edtavColumnname_Visible = (int)(NumberUtil.Val( GetNextPar( ), "."));
               context.httpAjaxContext.ajax_rsp_assign_prop("", false, edtavColumnname_Internalname, "Visible", StringUtil.LTrim( StringUtil.Str( (decimal)(edtavColumnname_Visible), 5, 0)), !bGXsfl_11_Refreshing);
               setAjaxCallMode();
               if ( ! IsValidAjaxCall( true) )
               {
                  GxWebError = 1;
                  return  ;
               }
               gxnrGrid_newrow( ) ;
               return  ;
            }
            else if ( StringUtil.StrCmp(gxfirstwebparm, "gxajaxGridRefresh_"+"Grid") == 0 )
            {
               subGrid_Rows = (int)(NumberUtil.Val( GetNextPar( ), "."));
               AV8ColumnsSelectorXML = GetNextPar( );
               edtavColumnname_Visible = (int)(NumberUtil.Val( GetNextPar( ), "."));
               context.httpAjaxContext.ajax_rsp_assign_prop("", false, edtavColumnname_Internalname, "Visible", StringUtil.LTrim( StringUtil.Str( (decimal)(edtavColumnname_Visible), 5, 0)), !bGXsfl_11_Refreshing);
               ajax_req_read_hidden_sdt(GetNextPar( ), AV16ColumnsSelectorSDT);
               AV12SessionKey = GetNextPar( );
               setAjaxCallMode();
               if ( ! IsValidAjaxCall( true) )
               {
                  GxWebError = 1;
                  return  ;
               }
               gxgrGrid_refresh( subGrid_Rows, AV8ColumnsSelectorXML, AV16ColumnsSelectorSDT, AV12SessionKey) ;
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
            if ( ! entryPointCalled && ! ( isAjaxCallMode( ) || isFullAjaxMode( ) ) )
            {
               AV12SessionKey = gxfirstwebparm;
               context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV12SessionKey", AV12SessionKey);
               context.httpAjaxContext.ajax_rsp_assign_attri("", false, "gxhash_vSESSIONKEY", GetSecureSignedToken( "", StringUtil.RTrim( context.localUtil.Format( AV12SessionKey, "")), context));
            }
            if ( context.isSpaRequest( ) )
            {
               enableJsOutput();
            }
         }
         if ( ! context.IsLocalStorageSupported( ) )
         {
            context.PushCurrentUrl();
         }
      }

      protected override bool IntegratedSecurityEnabled
      {
         get {
            return true ;
         }

      }

      protected override GAMSecurityLevel IntegratedSecurityLevel
      {
         get {
            return GAMSecurityLevel.SecurityHigh ;
         }

      }

      protected override string IntegratedSecurityPermissionName
      {
         get {
            return "columnsselector_Execute" ;
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
            MasterPageObj = (GXMasterPage) ClassLoader.GetInstance("wwpbaseobjects.workwithplusmasterpage", "GeneXus.Programs.wwpbaseobjects.workwithplusmasterpage", new Object[] {new GxContext( context.handle, context.DataStores, context.HttpContext)});
            MasterPageObj.setDataArea(this,false);
            ValidateSpaRequest();
            MasterPageObj.webExecute();
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

      public override short ExecuteStartEvent( )
      {
         PALU2( ) ;
         gxajaxcallmode = (short)((isAjaxCallMode( ) ? 1 : 0));
         if ( ( gxajaxcallmode == 0 ) && ( GxWebError == 0 ) )
         {
            STARTLU2( ) ;
         }
         return gxajaxcallmode ;
      }

      public override void RenderHtmlHeaders( )
      {
         GxWebStd.gx_html_headers( context, 0, "", "", Form.Meta, Form.Metaequiv, false);
      }

      public override void RenderHtmlOpenForm( )
      {
         if ( context.isSpaRequest( ) )
         {
            enableOutput();
         }
         context.WriteHtmlText( "<title>") ;
         context.SendWebValue( Form.Caption) ;
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
         if ( nGXWrapped != 1 )
         {
            MasterPageObj.master_styles();
         }
         if ( ( ( context.GetBrowserType( ) == 1 ) || ( context.GetBrowserType( ) == 5 ) ) && ( StringUtil.StrCmp(context.GetBrowserVersion( ), "7.0") == 0 ) )
         {
            context.AddJavascriptSource("json2.js", "?"+context.GetBuildNumber( 135614), false, true);
         }
         context.AddJavascriptSource("jquery.js", "?"+context.GetBuildNumber( 135614), false, true);
         context.AddJavascriptSource("gxgral.js", "?"+context.GetBuildNumber( 135614), false, true);
         context.AddJavascriptSource("gxcfg.js", "?20191021919494", false, true);
         if ( context.isSpaRequest( ) )
         {
            enableOutput();
         }
         context.WriteHtmlText( Form.Headerrawhtml) ;
         context.CloseHtmlHeader();
         if ( context.isSpaRequest( ) )
         {
            disableOutput();
         }
         FormProcess = " data-HasEnter=\"true\" data-Skiponenter=\"true\"";
         context.WriteHtmlText( "<body ") ;
         bodyStyle = "" + "background-color:" + context.BuildHTMLColor( Form.Backcolor) + ";color:" + context.BuildHTMLColor( Form.Textcolor) + ";";
         if ( nGXWrapped == 0 )
         {
            bodyStyle = bodyStyle + "-moz-opacity:0;opacity:0;";
         }
         if ( ! ( String.IsNullOrEmpty(StringUtil.RTrim( Form.Background)) ) )
         {
            bodyStyle = bodyStyle + " background-image:url(" + context.convertURL( Form.Background) + ")";
         }
         context.WriteHtmlText( " "+"class=\"Form\""+" "+ "style='"+bodyStyle+"'") ;
         context.WriteHtmlText( FormProcess+">") ;
         context.skipLines(1);
         context.WriteHtmlTextNl( "<form id=\"MAINFORM\" autocomplete=\"off\" name=\"MAINFORM\" method=\"post\" tabindex=-1  class=\"Form\" data-gx-class=\"Form\" novalidate action=\""+formatLink("wwpbaseobjects.columnsselector.aspx") + "?" + UrlEncode(StringUtil.RTrim(AV12SessionKey))+"\">") ;
         GxWebStd.gx_hidden_field( context, "_EventName", "");
         GxWebStd.gx_hidden_field( context, "_EventGridId", "");
         GxWebStd.gx_hidden_field( context, "_EventRowId", "");
         context.WriteHtmlText( "<input type=\"submit\" title=\"submit\" style=\"display:none\" disabled>") ;
         context.httpAjaxContext.ajax_rsp_assign_prop("", false, "FORM", "Class", "Form", true);
         toggleJsOutput = isJsOutputEnabled( );
         if ( context.isSpaRequest( ) )
         {
            disableJsOutput();
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
         GxWebStd.gx_hidden_field( context, "nRC_GXsfl_11", StringUtil.LTrim( StringUtil.NToC( (decimal)(nRC_GXsfl_11), 8, 0, ",", "")));
         if ( context.isAjaxRequest( ) )
         {
            context.httpAjaxContext.ajax_rsp_assign_sdt_attri("", false, "vCOLUMNSSELECTORSDT", AV16ColumnsSelectorSDT);
         }
         else
         {
            context.httpAjaxContext.ajax_rsp_assign_hidden_sdt("vCOLUMNSSELECTORSDT", AV16ColumnsSelectorSDT);
         }
         GxWebStd.gx_hidden_field( context, "vSESSIONKEY", AV12SessionKey);
         GxWebStd.gx_hidden_field( context, "gxhash_vSESSIONKEY", GetSecureSignedToken( "", StringUtil.RTrim( context.localUtil.Format( AV12SessionKey, "")), context));
         GxWebStd.gx_hidden_field( context, "GRID_nFirstRecordOnPage", StringUtil.LTrim( StringUtil.NToC( (decimal)(GRID_nFirstRecordOnPage), 15, 0, ",", "")));
         GxWebStd.gx_hidden_field( context, "GRID_nEOF", StringUtil.LTrim( StringUtil.NToC( (decimal)(GRID_nEOF), 1, 0, ",", "")));
         GxWebStd.gx_hidden_field( context, "vCOLUMNNAME_Visible", StringUtil.LTrim( StringUtil.NToC( (decimal)(edtavColumnname_Visible), 5, 0, ".", "")));
      }

      public override void RenderHtmlCloseForm( )
      {
         SendCloseFormHiddens( ) ;
         GxWebStd.gx_hidden_field( context, "GX_FocusControl", GX_FocusControl);
         SendAjaxEncryptionKey();
         SendSecurityToken((String)(sPrefix));
         SendComponentObjects();
         SendServerCommands();
         SendState();
         if ( context.isSpaRequest( ) )
         {
            disableOutput();
         }
         context.WriteHtmlTextNl( "</form>") ;
         if ( context.isSpaRequest( ) )
         {
            enableOutput();
         }
         include_jscripts( ) ;
      }

      public override void RenderHtmlContent( )
      {
         gxajaxcallmode = (short)((isAjaxCallMode( ) ? 1 : 0));
         if ( ( gxajaxcallmode == 0 ) && ( GxWebError == 0 ) )
         {
            context.WriteHtmlText( "<div") ;
            GxWebStd.ClassAttribute( context, "gx-ct-body"+" "+(String.IsNullOrEmpty(StringUtil.RTrim( Form.Class)) ? "Form" : Form.Class)+"-fx");
            context.WriteHtmlText( ">") ;
            WELU2( ) ;
            context.WriteHtmlText( "</div>") ;
         }
      }

      public override void DispatchEvents( )
      {
         EVTLU2( ) ;
      }

      public override bool HasEnterEvent( )
      {
         return true ;
      }

      public override GXWebForm GetForm( )
      {
         return Form ;
      }

      public override String GetSelfLink( )
      {
         return formatLink("wwpbaseobjects.columnsselector.aspx") + "?" + UrlEncode(StringUtil.RTrim(AV12SessionKey)) ;
      }

      public override String GetPgmname( )
      {
         return "WWPBaseObjects.ColumnsSelector" ;
      }

      public override String GetPgmdesc( )
      {
         return "Selector de Columnas" ;
      }

      protected void WBLU0( )
      {
         if ( context.isAjaxRequest( ) )
         {
            disableOutput();
         }
         if ( ! wbLoad )
         {
            if ( nGXWrapped == 1 )
            {
               RenderHtmlHeaders( ) ;
               RenderHtmlOpenForm( ) ;
            }
            wb_table1_2_LU2( true) ;
         }
         else
         {
            wb_table1_2_LU2( false) ;
         }
         return  ;
      }

      protected void wb_table1_2_LU2e( bool wbgen )
      {
         if ( wbgen )
         {
            /* Multiple line edit */
            TempTags = "  onfocus=\"gx.evt.onfocus(this, 30,'',false,'" + sGXsfl_11_idx + "',0)\"";
            ClassString = "Attribute";
            StyleString = "";
            ClassString = "Attribute";
            StyleString = "";
            GxWebStd.gx_html_textarea( context, edtavColumnsselectorxml_Internalname, AV8ColumnsSelectorXML, "", TempTags+" onchange=\""+""+";gx.evt.onchange(this, event)\" "+" onblur=\""+""+";gx.evt.onblur(this,30);\"", 0, edtavColumnsselectorxml_Visible, 1, 0, 80, "chr", 10, "row", StyleString, ClassString, "", "", "1000", -1, 0, "", "", -1, true, "", "'"+""+"'"+",false,"+"'"+""+"'", 0, "HLP_WWPBaseObjects\\ColumnsSelector.htm");
         }
         if ( wbEnd == 11 )
         {
            wbEnd = 0;
            if ( isFullAjaxMode( ) )
            {
               if ( GridContainer.GetWrapped() == 1 )
               {
                  context.WriteHtmlText( "</table>") ;
                  context.WriteHtmlText( "</div>") ;
               }
               else
               {
                  sStyleString = "";
                  context.WriteHtmlText( "<div id=\""+"GridContainer"+"Div\" "+sStyleString+">"+"</div>") ;
                  context.httpAjaxContext.ajax_rsp_assign_grid("_"+"Grid", GridContainer);
                  if ( ! context.isAjaxRequest( ) && ! context.isSpaRequest( ) )
                  {
                     GxWebStd.gx_hidden_field( context, "GridContainerData", GridContainer.ToJavascriptSource());
                  }
                  if ( context.isAjaxRequest( ) || context.isSpaRequest( ) )
                  {
                     GxWebStd.gx_hidden_field( context, "GridContainerData"+"V", GridContainer.GridValuesHidden());
                  }
                  else
                  {
                     context.WriteHtmlText( "<input type=\"hidden\" "+"name=\""+"GridContainerData"+"V"+"\" value='"+GridContainer.GridValuesHidden()+"'/>") ;
                  }
               }
            }
         }
         wbLoad = true;
      }

      protected void STARTLU2( )
      {
         wbLoad = false;
         wbEnd = 0;
         wbStart = 0;
         if ( ! context.isSpaRequest( ) )
         {
            Form.Meta.addItem("generator", "GeneXus C# 16_0_5-135614", 0) ;
            Form.Meta.addItem("description", "Selector de Columnas", 0) ;
         }
         context.wjLoc = "";
         context.nUserReturn = 0;
         context.wbHandled = 0;
         if ( StringUtil.StrCmp(context.GetRequestMethod( ), "POST") == 0 )
         {
         }
         wbErr = false;
         STRUPLU0( ) ;
      }

      protected void WSLU2( )
      {
         STARTLU2( ) ;
         EVTLU2( ) ;
      }

      protected void EVTLU2( )
      {
         if ( StringUtil.StrCmp(context.GetRequestMethod( ), "POST") == 0 )
         {
            if ( ! context.WillRedirect( ) && ( context.nUserReturn != 1 ) && ! wbErr )
            {
               /* Read Web Panel buttons. */
               sEvt = cgiGet( "_EventName");
               EvtGridId = cgiGet( "_EventGridId");
               EvtRowId = cgiGet( "_EventRowId");
               if ( StringUtil.Len( sEvt) > 0 )
               {
                  sEvtType = StringUtil.Left( sEvt, 1);
                  sEvt = StringUtil.Right( sEvt, (short)(StringUtil.Len( sEvt)-1));
                  if ( StringUtil.StrCmp(sEvtType, "M") != 0 )
                  {
                     if ( StringUtil.StrCmp(sEvtType, "E") == 0 )
                     {
                        sEvtType = StringUtil.Right( sEvt, 1);
                        if ( StringUtil.StrCmp(sEvtType, ".") == 0 )
                        {
                           sEvt = StringUtil.Left( sEvt, (short)(StringUtil.Len( sEvt)-1));
                           if ( StringUtil.StrCmp(sEvt, "RFR") == 0 )
                           {
                              context.wbHandled = 1;
                              dynload_actions( ) ;
                           }
                           else if ( StringUtil.StrCmp(sEvt, "ENTER") == 0 )
                           {
                              context.wbHandled = 1;
                              if ( ! wbErr )
                              {
                                 Rfr0gs = false;
                                 if ( ! Rfr0gs )
                                 {
                                    /* Execute user event: Enter */
                                    E11LU2 ();
                                 }
                                 dynload_actions( ) ;
                              }
                              /* No code required for Cancel button. It is implemented as the Reset button. */
                           }
                           else if ( StringUtil.StrCmp(sEvt, "LSCR") == 0 )
                           {
                              context.wbHandled = 1;
                              dynload_actions( ) ;
                              dynload_actions( ) ;
                           }
                        }
                        else
                        {
                           sEvtType = StringUtil.Right( sEvt, 4);
                           sEvt = StringUtil.Left( sEvt, (short)(StringUtil.Len( sEvt)-4));
                           if ( ( StringUtil.StrCmp(StringUtil.Left( sEvt, 5), "START") == 0 ) || ( StringUtil.StrCmp(StringUtil.Left( sEvt, 9), "GRID.LOAD") == 0 ) || ( StringUtil.StrCmp(StringUtil.Left( sEvt, 12), "'DOMOVEDOWN'") == 0 ) || ( StringUtil.StrCmp(StringUtil.Left( sEvt, 10), "'DOMOVEUP'") == 0 ) || ( StringUtil.StrCmp(StringUtil.Left( sEvt, 7), "REFRESH") == 0 ) || ( StringUtil.StrCmp(StringUtil.Left( sEvt, 12), "'DOMOVEDOWN'") == 0 ) || ( StringUtil.StrCmp(StringUtil.Left( sEvt, 10), "'DOMOVEUP'") == 0 ) )
                           {
                              nGXsfl_11_idx = (int)(NumberUtil.Val( sEvtType, "."));
                              sGXsfl_11_idx = StringUtil.PadL( StringUtil.LTrim( StringUtil.Str( (decimal)(nGXsfl_11_idx), 4, 0)), 4, "0");
                              SubsflControlProps_112( ) ;
                              AV23Visible = StringUtil.StrToBool( cgiGet( chkavVisible_Internalname));
                              context.httpAjaxContext.ajax_rsp_assign_attri("", false, chkavVisible_Internalname, AV23Visible);
                              AV27ColumnDisplayName = cgiGet( edtavColumndisplayname_Internalname);
                              context.httpAjaxContext.ajax_rsp_assign_attri("", false, edtavColumndisplayname_Internalname, AV27ColumnDisplayName);
                              AV5ColumnName = cgiGet( edtavColumnname_Internalname);
                              context.httpAjaxContext.ajax_rsp_assign_attri("", false, edtavColumnname_Internalname, AV5ColumnName);
                              context.httpAjaxContext.ajax_rsp_assign_attri("", false, "gxhash_vCOLUMNNAME"+"_"+sGXsfl_11_idx, GetSecureSignedToken( sGXsfl_11_idx, StringUtil.RTrim( context.localUtil.Format( AV5ColumnName, "")), context));
                              sEvtType = StringUtil.Right( sEvt, 1);
                              if ( StringUtil.StrCmp(sEvtType, ".") == 0 )
                              {
                                 sEvt = StringUtil.Left( sEvt, (short)(StringUtil.Len( sEvt)-1));
                                 if ( StringUtil.StrCmp(sEvt, "START") == 0 )
                                 {
                                    context.wbHandled = 1;
                                    dynload_actions( ) ;
                                    /* Execute user event: Start */
                                    E12LU2 ();
                                 }
                                 else if ( StringUtil.StrCmp(sEvt, "GRID.LOAD") == 0 )
                                 {
                                    context.wbHandled = 1;
                                    dynload_actions( ) ;
                                    E13LU2 ();
                                 }
                                 else if ( StringUtil.StrCmp(sEvt, "'DOMOVEDOWN'") == 0 )
                                 {
                                    context.wbHandled = 1;
                                    dynload_actions( ) ;
                                    /* Execute user event: 'DoMoveDown' */
                                    E14LU2 ();
                                 }
                                 else if ( StringUtil.StrCmp(sEvt, "'DOMOVEUP'") == 0 )
                                 {
                                    context.wbHandled = 1;
                                    dynload_actions( ) ;
                                    /* Execute user event: 'DoMoveUp' */
                                    E15LU2 ();
                                 }
                                 else if ( StringUtil.StrCmp(sEvt, "REFRESH") == 0 )
                                 {
                                    context.wbHandled = 1;
                                    dynload_actions( ) ;
                                    /* Execute user event: Refresh */
                                    E16LU2 ();
                                 }
                                 else if ( StringUtil.StrCmp(sEvt, "LSCR") == 0 )
                                 {
                                    context.wbHandled = 1;
                                    dynload_actions( ) ;
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

      protected void WELU2( )
      {
         if ( ! GxWebStd.gx_redirect( context) )
         {
            Rfr0gs = true;
            Refresh( ) ;
            if ( ! GxWebStd.gx_redirect( context) )
            {
               if ( nGXWrapped == 1 )
               {
                  RenderHtmlCloseForm( ) ;
               }
            }
         }
      }

      protected void PALU2( )
      {
         if ( nDonePA == 0 )
         {
            if ( String.IsNullOrEmpty(StringUtil.RTrim( context.GetCookie( "GX_SESSION_ID"))) )
            {
               gxcookieaux = context.SetCookie( "GX_SESSION_ID", Encrypt64( Crypto.GetEncryptionKey( ), Crypto.GetServerKey( )), "", (DateTime)(DateTime.MinValue), "", 0);
            }
            GXKey = Decrypt64( context.GetCookie( "GX_SESSION_ID"), Crypto.GetServerKey( ));
            toggleJsOutput = isJsOutputEnabled( );
            if ( context.isSpaRequest( ) )
            {
               disableJsOutput();
            }
            init_web_controls( ) ;
            if ( toggleJsOutput )
            {
               if ( context.isSpaRequest( ) )
               {
                  enableJsOutput();
               }
            }
            if ( ! context.isAjaxRequest( ) )
            {
               GX_FocusControl = edtavColumnsselectorxml_Internalname;
               context.httpAjaxContext.ajax_rsp_assign_attri("", false, "GX_FocusControl", GX_FocusControl);
            }
            nDonePA = 1;
         }
      }

      protected void dynload_actions( )
      {
         /* End function dynload_actions */
      }

      protected void gxnrGrid_newrow( )
      {
         GxWebStd.set_html_headers( context, 0, "", "");
         SubsflControlProps_112( ) ;
         while ( nGXsfl_11_idx <= nRC_GXsfl_11 )
         {
            sendrow_112( ) ;
            nGXsfl_11_idx = ((subGrid_Islastpage==1)&&(nGXsfl_11_idx+1>subGrid_Recordsperpage( )) ? 1 : nGXsfl_11_idx+1);
            sGXsfl_11_idx = StringUtil.PadL( StringUtil.LTrim( StringUtil.Str( (decimal)(nGXsfl_11_idx), 4, 0)), 4, "0");
            SubsflControlProps_112( ) ;
         }
         context.GX_webresponse.AddString(context.httpAjaxContext.getJSONContainerResponse( GridContainer));
         /* End function gxnrGrid_newrow */
      }

      protected void gxgrGrid_refresh( int subGrid_Rows ,
                                       String AV8ColumnsSelectorXML ,
                                       GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtColumnsSelectorSDT_ColumnsSelectorSDTItem> AV16ColumnsSelectorSDT ,
                                       String AV12SessionKey )
      {
         initialize_formulas( ) ;
         GxWebStd.set_html_headers( context, 0, "", "");
         GRID_nCurrentRecord = 0;
         RFLU2( ) ;
         /* End function gxgrGrid_refresh */
      }

      protected void send_integrity_hashes( )
      {
         GxWebStd.gx_hidden_field( context, "gxhash_vCOLUMNNAME", GetSecureSignedToken( "", StringUtil.RTrim( context.localUtil.Format( AV5ColumnName, "")), context));
         GxWebStd.gx_hidden_field( context, "vCOLUMNNAME", AV5ColumnName);
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
         RFLU2( ) ;
         if ( isFullAjaxMode( ) )
         {
            send_integrity_footer_hashes( ) ;
         }
      }

      protected void initialize_formulas( )
      {
         /* GeneXus formulas. */
         context.Gx_err = 0;
         edtavColumndisplayname_Enabled = 0;
         context.httpAjaxContext.ajax_rsp_assign_prop("", false, edtavColumndisplayname_Internalname, "Enabled", StringUtil.LTrim( StringUtil.Str( (decimal)(edtavColumndisplayname_Enabled), 5, 0)), !bGXsfl_11_Refreshing);
      }

      protected void RFLU2( )
      {
         initialize_formulas( ) ;
         clear_multi_value_controls( ) ;
         if ( isAjaxCallMode( ) )
         {
            GridContainer.ClearRows();
         }
         wbStart = 11;
         /* Execute user event: Refresh */
         E16LU2 ();
         nGXsfl_11_idx = 1;
         sGXsfl_11_idx = StringUtil.PadL( StringUtil.LTrim( StringUtil.Str( (decimal)(nGXsfl_11_idx), 4, 0)), 4, "0");
         SubsflControlProps_112( ) ;
         bGXsfl_11_Refreshing = true;
         GridContainer.AddObjectProperty("GridName", "Grid");
         GridContainer.AddObjectProperty("SflColumns", subGrid_Columns);
         GridContainer.AddObjectProperty("CmpContext", "");
         GridContainer.AddObjectProperty("InMasterPage", "false");
         GridContainer.AddObjectProperty("Class", StringUtil.RTrim( "FreeStyleGrid"));
         GridContainer.AddObjectProperty("Cellpadding", StringUtil.LTrim( StringUtil.NToC( (decimal)(0), 4, 0, ".", "")));
         GridContainer.AddObjectProperty("Cellspacing", StringUtil.LTrim( StringUtil.NToC( (decimal)(0), 4, 0, ".", "")));
         GridContainer.AddObjectProperty("Class", "FreeStyleGrid");
         GridContainer.AddObjectProperty("Cellpadding", StringUtil.LTrim( StringUtil.NToC( (decimal)(0), 4, 0, ".", "")));
         GridContainer.AddObjectProperty("Cellspacing", StringUtil.LTrim( StringUtil.NToC( (decimal)(0), 4, 0, ".", "")));
         GridContainer.AddObjectProperty("Backcolorstyle", StringUtil.LTrim( StringUtil.NToC( (decimal)(subGrid_Backcolorstyle), 1, 0, ".", "")));
         GridContainer.PageSize = subGrid_Recordsperpage( );
         gxdyncontrolsrefreshing = true;
         fix_multi_value_controls( ) ;
         gxdyncontrolsrefreshing = false;
         if ( ! context.WillRedirect( ) && ( context.nUserReturn != 1 ) )
         {
            SubsflControlProps_112( ) ;
            E13LU2 ();
            wbEnd = 11;
            WBLU0( ) ;
         }
         bGXsfl_11_Refreshing = true;
      }

      protected void send_integrity_lvl_hashesLU2( )
      {
         GxWebStd.gx_hidden_field( context, "gxhash_vCOLUMNNAME"+"_"+sGXsfl_11_idx, GetSecureSignedToken( sGXsfl_11_idx, StringUtil.RTrim( context.localUtil.Format( AV5ColumnName, "")), context));
         GxWebStd.gx_hidden_field( context, "vSESSIONKEY", AV12SessionKey);
         GxWebStd.gx_hidden_field( context, "gxhash_vSESSIONKEY", GetSecureSignedToken( "", StringUtil.RTrim( context.localUtil.Format( AV12SessionKey, "")), context));
      }

      protected int subGrid_Pagecount( )
      {
         GRID_nRecordCount = subGrid_Recordcount( );
         if ( ((int)((GRID_nRecordCount) % (subGrid_Recordsperpage( )))) == 0 )
         {
            return (int)(NumberUtil.Int( (long)(GRID_nRecordCount/ (decimal)(subGrid_Recordsperpage( ))))) ;
         }
         return (int)(NumberUtil.Int( (long)(GRID_nRecordCount/ (decimal)(subGrid_Recordsperpage( ))))+1) ;
      }

      protected int subGrid_Recordcount( )
      {
         return (int)(GRID_nFirstRecordOnPage+1) ;
      }

      protected int subGrid_Recordsperpage( )
      {
         if ( 0 > 0 )
         {
            if ( subGrid_Columns > 0 )
            {
               return (int)(0*subGrid_Columns) ;
            }
            else
            {
               return (int)(0) ;
            }
         }
         else
         {
            return (int)(-1) ;
         }
      }

      protected int subGrid_Currentpage( )
      {
         return (int)(NumberUtil.Int( (long)(GRID_nFirstRecordOnPage/ (decimal)(subGrid_Recordsperpage( ))))+1) ;
      }

      protected short subgrid_firstpage( )
      {
         GRID_nFirstRecordOnPage = 0;
         GxWebStd.gx_hidden_field( context, "GRID_nFirstRecordOnPage", StringUtil.LTrim( StringUtil.NToC( (decimal)(GRID_nFirstRecordOnPage), 15, 0, ".", "")));
         if ( isFullAjaxMode( ) )
         {
            gxgrGrid_refresh( subGrid_Rows, AV8ColumnsSelectorXML, AV16ColumnsSelectorSDT, AV12SessionKey) ;
         }
         send_integrity_footer_hashes( ) ;
         return 0 ;
      }

      protected short subgrid_nextpage( )
      {
         if ( GRID_nEOF == 0 )
         {
            GRID_nFirstRecordOnPage = (long)(GRID_nFirstRecordOnPage+subGrid_Recordsperpage( ));
         }
         GxWebStd.gx_hidden_field( context, "GRID_nFirstRecordOnPage", StringUtil.LTrim( StringUtil.NToC( (decimal)(GRID_nFirstRecordOnPage), 15, 0, ".", "")));
         GridContainer.AddObjectProperty("GRID_nFirstRecordOnPage", GRID_nFirstRecordOnPage);
         if ( isFullAjaxMode( ) )
         {
            gxgrGrid_refresh( subGrid_Rows, AV8ColumnsSelectorXML, AV16ColumnsSelectorSDT, AV12SessionKey) ;
         }
         send_integrity_footer_hashes( ) ;
         return (short)(((GRID_nEOF==0) ? 0 : 2)) ;
      }

      protected short subgrid_previouspage( )
      {
         if ( GRID_nFirstRecordOnPage >= subGrid_Recordsperpage( ) )
         {
            GRID_nFirstRecordOnPage = (long)(GRID_nFirstRecordOnPage-subGrid_Recordsperpage( ));
         }
         else
         {
            return 2 ;
         }
         GxWebStd.gx_hidden_field( context, "GRID_nFirstRecordOnPage", StringUtil.LTrim( StringUtil.NToC( (decimal)(GRID_nFirstRecordOnPage), 15, 0, ".", "")));
         if ( isFullAjaxMode( ) )
         {
            gxgrGrid_refresh( subGrid_Rows, AV8ColumnsSelectorXML, AV16ColumnsSelectorSDT, AV12SessionKey) ;
         }
         send_integrity_footer_hashes( ) ;
         return 0 ;
      }

      protected short subgrid_lastpage( )
      {
         subGrid_Islastpage = 1;
         if ( isFullAjaxMode( ) )
         {
            gxgrGrid_refresh( subGrid_Rows, AV8ColumnsSelectorXML, AV16ColumnsSelectorSDT, AV12SessionKey) ;
         }
         send_integrity_footer_hashes( ) ;
         return 0 ;
      }

      protected int subgrid_gotopage( int nPageNo )
      {
         if ( nPageNo > 0 )
         {
            GRID_nFirstRecordOnPage = (long)(subGrid_Recordsperpage( )*(nPageNo-1));
         }
         else
         {
            GRID_nFirstRecordOnPage = 0;
         }
         GxWebStd.gx_hidden_field( context, "GRID_nFirstRecordOnPage", StringUtil.LTrim( StringUtil.NToC( (decimal)(GRID_nFirstRecordOnPage), 15, 0, ".", "")));
         if ( isFullAjaxMode( ) )
         {
            gxgrGrid_refresh( subGrid_Rows, AV8ColumnsSelectorXML, AV16ColumnsSelectorSDT, AV12SessionKey) ;
         }
         send_integrity_footer_hashes( ) ;
         return (int)(0) ;
      }

      protected void STRUPLU0( )
      {
         /* Before Start, stand alone formulas. */
         context.Gx_err = 0;
         edtavColumnname_Enabled = 0;
         context.httpAjaxContext.ajax_rsp_assign_prop("", false, edtavColumnname_Internalname, "Enabled", StringUtil.LTrim( StringUtil.Str( (decimal)(edtavColumnname_Enabled), 5, 0)), !bGXsfl_11_Refreshing);
         edtavColumndisplayname_Enabled = 0;
         context.httpAjaxContext.ajax_rsp_assign_prop("", false, edtavColumndisplayname_Internalname, "Enabled", StringUtil.LTrim( StringUtil.Str( (decimal)(edtavColumndisplayname_Enabled), 5, 0)), !bGXsfl_11_Refreshing);
         /* Execute Start event if defined. */
         context.wbGlbDoneStart = 0;
         /* Execute user event: Start */
         E12LU2 ();
         context.wbGlbDoneStart = 1;
         /* After Start, stand alone formulas. */
         if ( StringUtil.StrCmp(context.GetRequestMethod( ), "POST") == 0 )
         {
            /* Read saved SDTs. */
            /* Read variables values. */
            AV8ColumnsSelectorXML = cgiGet( edtavColumnsselectorxml_Internalname);
            context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV8ColumnsSelectorXML", AV8ColumnsSelectorXML);
            /* Read saved values. */
            nRC_GXsfl_11 = (int)(context.localUtil.CToN( cgiGet( "nRC_GXsfl_11"), ",", "."));
            GRID_nFirstRecordOnPage = (long)(context.localUtil.CToN( cgiGet( "GRID_nFirstRecordOnPage"), ",", "."));
            GRID_nEOF = (short)(context.localUtil.CToN( cgiGet( "GRID_nEOF"), ",", "."));
            /* Read subfile selected row values. */
            /* Read hidden variables. */
            GXKey = Decrypt64( context.GetCookie( "GX_SESSION_ID"), Crypto.GetServerKey( ));
            /* Check if conditions changed and reset current page numbers */
         }
         else
         {
            dynload_actions( ) ;
         }
      }

      protected void GXStart( )
      {
         /* Execute user event: Start */
         E12LU2 ();
         if (returnInSub) return;
      }

      protected void E12LU2( )
      {
         /* Start Routine */
         if ( ( StringUtil.StrCmp(AV21HttpRequest.Method, "GET") == 0 ) && String.IsNullOrEmpty(StringUtil.RTrim( AV8ColumnsSelectorXML)) )
         {
            AV8ColumnsSelectorXML = AV15ws.Get(AV12SessionKey);
            context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV8ColumnsSelectorXML", AV8ColumnsSelectorXML);
            AV16ColumnsSelectorSDT.Clear();
            AV6ColumnsSelector2.FromXml(AV8ColumnsSelectorXML, null, "WWPColumnsSelector", "SIGMA");
            AV9i = 1;
            AV38GXV1 = 1;
            while ( AV38GXV1 <= AV6ColumnsSelector2.gxTpr_Visiblecolumns.Count )
            {
               AV13VisibleColumn = ((GeneXus.Programs.wwpbaseobjects.SdtWWPColumnsSelector_VisibleColumn)AV6ColumnsSelector2.gxTpr_Visiblecolumns.Item(AV38GXV1));
               AV17ColumnsSelectorSDTItem = new GeneXus.Programs.wwpbaseobjects.SdtColumnsSelectorSDT_ColumnsSelectorSDTItem(context);
               AV17ColumnsSelectorSDTItem.gxTpr_Columnname = AV13VisibleColumn.gxTpr_Columnname;
               AV17ColumnsSelectorSDTItem.gxTpr_Visible = true;
               AV16ColumnsSelectorSDT.Add(AV17ColumnsSelectorSDTItem, AV9i);
               AV9i = (short)(AV9i+1);
               AV38GXV1 = (int)(AV38GXV1+1);
            }
            AV39GXV2 = 1;
            while ( AV39GXV2 <= AV6ColumnsSelector2.gxTpr_Invisiblecolumns.Count )
            {
               AV10InvisibleColumn = ((GeneXus.Programs.wwpbaseobjects.SdtWWPColumnsSelector_InvisibleColumn)AV6ColumnsSelector2.gxTpr_Invisiblecolumns.Item(AV39GXV2));
               AV17ColumnsSelectorSDTItem = new GeneXus.Programs.wwpbaseobjects.SdtColumnsSelectorSDT_ColumnsSelectorSDTItem(context);
               AV17ColumnsSelectorSDTItem.gxTpr_Columnname = AV10InvisibleColumn.gxTpr_Columnname;
               AV17ColumnsSelectorSDTItem.gxTpr_Visible = false;
               AV16ColumnsSelectorSDT.Add(AV17ColumnsSelectorSDTItem, AV9i);
               AV9i = (short)(AV9i+1);
               AV39GXV2 = (int)(AV39GXV2+1);
            }
            AV8ColumnsSelectorXML = AV16ColumnsSelectorSDT.ToXml(false, true, "ColumnsSelectorSDT", "SIGMA");
            context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV8ColumnsSelectorXML", AV8ColumnsSelectorXML);
         }
         AV33FSColumns = 4;
         subGrid_Columns = AV33FSColumns;
         imgMovedown_Visible = 0;
         context.httpAjaxContext.ajax_rsp_assign_prop("", false, imgMovedown_Internalname, "Visible", StringUtil.LTrim( StringUtil.Str( (decimal)(imgMovedown_Visible), 5, 0)), !bGXsfl_11_Refreshing);
         imgMoveup_Visible = 0;
         context.httpAjaxContext.ajax_rsp_assign_prop("", false, imgMoveup_Internalname, "Visible", StringUtil.LTrim( StringUtil.Str( (decimal)(imgMoveup_Visible), 5, 0)), !bGXsfl_11_Refreshing);
         edtavColumnsselectorxml_Visible = 0;
         context.httpAjaxContext.ajax_rsp_assign_prop("", false, edtavColumnsselectorxml_Internalname, "Visible", StringUtil.LTrim( StringUtil.Str( (decimal)(edtavColumnsselectorxml_Visible), 5, 0)), true);
         edtavColumnname_Visible = 0;
         context.httpAjaxContext.ajax_rsp_assign_prop("", false, edtavColumnname_Internalname, "Visible", StringUtil.LTrim( StringUtil.Str( (decimal)(edtavColumnname_Visible), 5, 0)), !bGXsfl_11_Refreshing);
         if ( 1 == 0 )
         {
            subgrid_nextpage( ) ;
         }
      }

      private void E13LU2( )
      {
         /* Grid_Load Routine */
         AV40GXV3 = 1;
         while ( AV40GXV3 <= AV16ColumnsSelectorSDT.Count )
         {
            AV17ColumnsSelectorSDTItem = ((GeneXus.Programs.wwpbaseobjects.SdtColumnsSelectorSDT_ColumnsSelectorSDTItem)AV16ColumnsSelectorSDT.Item(AV40GXV3));
            AV5ColumnName = AV17ColumnsSelectorSDTItem.gxTpr_Columnname;
            context.httpAjaxContext.ajax_rsp_assign_attri("", false, edtavColumnname_Internalname, AV5ColumnName);
            context.httpAjaxContext.ajax_rsp_assign_attri("", false, "gxhash_vCOLUMNNAME"+"_"+sGXsfl_11_idx, GetSecureSignedToken( sGXsfl_11_idx, StringUtil.RTrim( context.localUtil.Format( AV5ColumnName, "")), context));
            AV27ColumnDisplayName = context.GetMessage( AV17ColumnsSelectorSDTItem.gxTpr_Columnname, "");
            context.httpAjaxContext.ajax_rsp_assign_attri("", false, edtavColumndisplayname_Internalname, AV27ColumnDisplayName);
            AV23Visible = AV17ColumnsSelectorSDTItem.gxTpr_Visible;
            context.httpAjaxContext.ajax_rsp_assign_attri("", false, chkavVisible_Internalname, AV23Visible);
            /* Load Method */
            if ( wbStart != -1 )
            {
               wbStart = 11;
            }
            if ( ( subGrid_Islastpage == 1 ) || ( 0 == 0 ) || ( ( GRID_nCurrentRecord >= GRID_nFirstRecordOnPage ) && ( GRID_nCurrentRecord < GRID_nFirstRecordOnPage + subGrid_Recordsperpage( ) ) ) )
            {
               sendrow_112( ) ;
               GRID_nEOF = 1;
               GxWebStd.gx_hidden_field( context, "GRID_nEOF", StringUtil.LTrim( StringUtil.NToC( (decimal)(GRID_nEOF), 1, 0, ".", "")));
               if ( ( subGrid_Islastpage == 1 ) && ( ((int)((GRID_nCurrentRecord) % (subGrid_Recordsperpage( )))) == 0 ) )
               {
                  GRID_nFirstRecordOnPage = GRID_nCurrentRecord;
               }
            }
            if ( GRID_nCurrentRecord >= GRID_nFirstRecordOnPage + subGrid_Recordsperpage( ) )
            {
               GRID_nEOF = 0;
               GxWebStd.gx_hidden_field( context, "GRID_nEOF", StringUtil.LTrim( StringUtil.NToC( (decimal)(GRID_nEOF), 1, 0, ".", "")));
            }
            GRID_nCurrentRecord = (long)(GRID_nCurrentRecord+1);
            if ( isFullAjaxMode( ) && ! bGXsfl_11_Refreshing )
            {
               context.DoAjaxLoad(11, GridRow);
            }
            AV40GXV3 = (int)(AV40GXV3+1);
         }
         /*  Sending Event outputs  */
      }

      protected void E14LU2( )
      {
         /* 'DoMoveDown' Routine */
         AV25SelectedColumnName = AV5ColumnName;
         AV26SelectedVisible = AV23Visible;
         /* Execute user subroutine: 'LOADCOLUMNSSELECTORSDT' */
         S112 ();
         if (returnInSub) return;
         AV9i = 1;
         AV41GXV4 = 1;
         while ( AV41GXV4 <= AV16ColumnsSelectorSDT.Count )
         {
            AV17ColumnsSelectorSDTItem = ((GeneXus.Programs.wwpbaseobjects.SdtColumnsSelectorSDT_ColumnsSelectorSDTItem)AV16ColumnsSelectorSDT.Item(AV41GXV4));
            if ( StringUtil.StrCmp(AV25SelectedColumnName, AV17ColumnsSelectorSDTItem.gxTpr_Columnname) == 0 )
            {
               if (true) break;
            }
            else
            {
               AV9i = (short)(AV9i+1);
            }
            AV41GXV4 = (int)(AV41GXV4+1);
         }
         if ( AV9i < AV16ColumnsSelectorSDT.Count )
         {
            AV16ColumnsSelectorSDT.RemoveItem(AV9i);
            AV17ColumnsSelectorSDTItem = new GeneXus.Programs.wwpbaseobjects.SdtColumnsSelectorSDT_ColumnsSelectorSDTItem(context);
            AV17ColumnsSelectorSDTItem.gxTpr_Columnname = AV25SelectedColumnName;
            AV17ColumnsSelectorSDTItem.gxTpr_Visible = AV26SelectedVisible;
            AV16ColumnsSelectorSDT.Add(AV17ColumnsSelectorSDTItem, AV9i+1);
         }
         AV8ColumnsSelectorXML = AV16ColumnsSelectorSDT.ToXml(false, true, "ColumnsSelectorSDT", "SIGMA");
         context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV8ColumnsSelectorXML", AV8ColumnsSelectorXML);
         gxgrGrid_refresh( subGrid_Rows, AV8ColumnsSelectorXML, AV16ColumnsSelectorSDT, AV12SessionKey) ;
         /*  Sending Event outputs  */
         context.httpAjaxContext.ajax_rsp_assign_sdt_attri("", false, "AV16ColumnsSelectorSDT", AV16ColumnsSelectorSDT);
      }

      protected void E15LU2( )
      {
         /* 'DoMoveUp' Routine */
         AV25SelectedColumnName = AV5ColumnName;
         AV26SelectedVisible = AV23Visible;
         /* Execute user subroutine: 'LOADCOLUMNSSELECTORSDT' */
         S112 ();
         if (returnInSub) return;
         AV9i = 1;
         AV42GXV5 = 1;
         while ( AV42GXV5 <= AV16ColumnsSelectorSDT.Count )
         {
            AV17ColumnsSelectorSDTItem = ((GeneXus.Programs.wwpbaseobjects.SdtColumnsSelectorSDT_ColumnsSelectorSDTItem)AV16ColumnsSelectorSDT.Item(AV42GXV5));
            if ( StringUtil.StrCmp(AV25SelectedColumnName, AV17ColumnsSelectorSDTItem.gxTpr_Columnname) == 0 )
            {
               if (true) break;
            }
            else
            {
               AV9i = (short)(AV9i+1);
            }
            AV42GXV5 = (int)(AV42GXV5+1);
         }
         if ( AV9i > 1 )
         {
            AV16ColumnsSelectorSDT.RemoveItem(AV9i);
            AV17ColumnsSelectorSDTItem = new GeneXus.Programs.wwpbaseobjects.SdtColumnsSelectorSDT_ColumnsSelectorSDTItem(context);
            AV17ColumnsSelectorSDTItem.gxTpr_Columnname = AV25SelectedColumnName;
            AV17ColumnsSelectorSDTItem.gxTpr_Visible = AV26SelectedVisible;
            AV16ColumnsSelectorSDT.Add(AV17ColumnsSelectorSDTItem, AV9i-1);
         }
         AV8ColumnsSelectorXML = AV16ColumnsSelectorSDT.ToXml(false, true, "ColumnsSelectorSDT", "SIGMA");
         context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV8ColumnsSelectorXML", AV8ColumnsSelectorXML);
         gxgrGrid_refresh( subGrid_Rows, AV8ColumnsSelectorXML, AV16ColumnsSelectorSDT, AV12SessionKey) ;
         /*  Sending Event outputs  */
         context.httpAjaxContext.ajax_rsp_assign_sdt_attri("", false, "AV16ColumnsSelectorSDT", AV16ColumnsSelectorSDT);
      }

      protected void E16LU2( )
      {
         if ( gx_refresh_fired )
         {
            return  ;
         }
         gx_refresh_fired = true;
         /* Refresh Routine */
         AV16ColumnsSelectorSDT.Clear();
         AV16ColumnsSelectorSDT.FromXml(AV8ColumnsSelectorXML, null, "ColumnsSelectorSDT", "SIGMA");
         /*  Sending Event outputs  */
         context.httpAjaxContext.ajax_rsp_assign_sdt_attri("", false, "AV16ColumnsSelectorSDT", AV16ColumnsSelectorSDT);
      }

      public void GXEnter( )
      {
         /* Execute user event: Enter */
         E11LU2 ();
         if (returnInSub) return;
      }

      protected void E11LU2( )
      {
         /* Enter Routine */
         /* Execute user subroutine: 'LOADCOLUMNSSELECTORSDT' */
         S112 ();
         if (returnInSub) return;
         AV22AtLeastAColumnVisible = false;
         AV43GXV6 = 1;
         while ( AV43GXV6 <= AV16ColumnsSelectorSDT.Count )
         {
            AV17ColumnsSelectorSDTItem = ((GeneXus.Programs.wwpbaseobjects.SdtColumnsSelectorSDT_ColumnsSelectorSDTItem)AV16ColumnsSelectorSDT.Item(AV43GXV6));
            if ( AV17ColumnsSelectorSDTItem.gxTpr_Visible )
            {
               AV22AtLeastAColumnVisible = true;
               if (true) break;
            }
            AV43GXV6 = (int)(AV43GXV6+1);
         }
         if ( AV22AtLeastAColumnVisible )
         {
            AV6ColumnsSelector2 = new GeneXus.Programs.wwpbaseobjects.SdtWWPColumnsSelector(context);
            AV44GXV7 = 1;
            while ( AV44GXV7 <= AV16ColumnsSelectorSDT.Count )
            {
               AV17ColumnsSelectorSDTItem = ((GeneXus.Programs.wwpbaseobjects.SdtColumnsSelectorSDT_ColumnsSelectorSDTItem)AV16ColumnsSelectorSDT.Item(AV44GXV7));
               if ( AV17ColumnsSelectorSDTItem.gxTpr_Visible )
               {
                  AV13VisibleColumn = new GeneXus.Programs.wwpbaseobjects.SdtWWPColumnsSelector_VisibleColumn(context);
                  AV13VisibleColumn.gxTpr_Columnname = AV17ColumnsSelectorSDTItem.gxTpr_Columnname;
                  AV6ColumnsSelector2.gxTpr_Visiblecolumns.Add(AV13VisibleColumn, 0);
               }
               else
               {
                  AV10InvisibleColumn = new GeneXus.Programs.wwpbaseobjects.SdtWWPColumnsSelector_InvisibleColumn(context);
                  AV10InvisibleColumn.gxTpr_Columnname = AV17ColumnsSelectorSDTItem.gxTpr_Columnname;
                  AV6ColumnsSelector2.gxTpr_Invisiblecolumns.Add(AV10InvisibleColumn, 0);
               }
               AV44GXV7 = (int)(AV44GXV7+1);
            }
            new GeneXus.Programs.wwpbaseobjects.savecolumnsselectorstate(context ).execute(  AV12SessionKey,  AV6ColumnsSelector2.ToXml(false, true, "WWPColumnsSelector", "SIGMA")) ;
            context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV12SessionKey", AV12SessionKey);
            context.httpAjaxContext.ajax_rsp_assign_attri("", false, "gxhash_vSESSIONKEY", GetSecureSignedToken( "", StringUtil.RTrim( context.localUtil.Format( AV12SessionKey, "")), context));
            AV15ws.Set(AV12SessionKey, AV6ColumnsSelector2.ToXml(false, true, "WWPColumnsSelector", "SIGMA"));
            context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV12SessionKey", AV12SessionKey);
            context.httpAjaxContext.ajax_rsp_assign_attri("", false, "gxhash_vSESSIONKEY", GetSecureSignedToken( "", StringUtil.RTrim( context.localUtil.Format( AV12SessionKey, "")), context));
            context.setWebReturnParms(new Object[] {});
            context.setWebReturnParmsMetadata(new Object[] {});
            context.wjLocDisableFrm = 1;
            context.nUserReturn = 1;
            returnInSub = true;
            if (true) return;
         }
         else
         {
            GX_msglist.addItem("At least one column must be shown");
         }
         /*  Sending Event outputs  */
         context.httpAjaxContext.ajax_rsp_assign_sdt_attri("", false, "AV16ColumnsSelectorSDT", AV16ColumnsSelectorSDT);
      }

      protected void S112( )
      {
         /* 'LOADCOLUMNSSELECTORSDT' Routine */
         AV16ColumnsSelectorSDT = new GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtColumnsSelectorSDT_ColumnsSelectorSDTItem>( context, "ColumnsSelectorSDTItem", "SIGMA");
         AV9i = 1;
         /* Start For Each Line in Grid */
         nRC_GXsfl_11 = (int)(context.localUtil.CToN( cgiGet( "nRC_GXsfl_11"), ",", "."));
         nGXsfl_11_fel_idx = 0;
         while ( nGXsfl_11_fel_idx < nRC_GXsfl_11 )
         {
            nGXsfl_11_fel_idx = ((subGrid_Islastpage==1)&&(nGXsfl_11_fel_idx+1>subGrid_Recordsperpage( )) ? 1 : nGXsfl_11_fel_idx+1);
            sGXsfl_11_fel_idx = StringUtil.PadL( StringUtil.LTrim( StringUtil.Str( (decimal)(nGXsfl_11_fel_idx), 4, 0)), 4, "0");
            SubsflControlProps_fel_112( ) ;
            AV23Visible = StringUtil.StrToBool( cgiGet( chkavVisible_Internalname));
            AV27ColumnDisplayName = cgiGet( edtavColumndisplayname_Internalname);
            AV5ColumnName = cgiGet( edtavColumnname_Internalname);
            AV17ColumnsSelectorSDTItem = new GeneXus.Programs.wwpbaseobjects.SdtColumnsSelectorSDT_ColumnsSelectorSDTItem(context);
            AV17ColumnsSelectorSDTItem.gxTpr_Columnname = AV5ColumnName;
            AV17ColumnsSelectorSDTItem.gxTpr_Visible = AV23Visible;
            AV16ColumnsSelectorSDT.Add(AV17ColumnsSelectorSDTItem, AV9i);
            AV9i = (short)(AV9i+1);
            /* End For Each Line */
         }
         if ( nGXsfl_11_fel_idx == 0 )
         {
            nGXsfl_11_idx = 1;
            sGXsfl_11_idx = StringUtil.PadL( StringUtil.LTrim( StringUtil.Str( (decimal)(nGXsfl_11_idx), 4, 0)), 4, "0");
            SubsflControlProps_112( ) ;
         }
         nGXsfl_11_fel_idx = 1;
         AV8ColumnsSelectorXML = AV16ColumnsSelectorSDT.ToXml(false, true, "ColumnsSelectorSDT", "SIGMA");
         context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV8ColumnsSelectorXML", AV8ColumnsSelectorXML);
      }

      protected void wb_table1_2_LU2( bool wbgen )
      {
         if ( wbgen )
         {
            /* Table start */
            sStyleString = "";
            GxWebStd.gx_table_start( context, tblTablemain_Internalname, tblTablemain_Internalname, "", "TableMain", 0, "", "", 1, 2, sStyleString, "", "", 0);
            context.WriteHtmlText( "<tbody>") ;
            context.WriteHtmlText( "<tr>") ;
            context.WriteHtmlText( "<td>") ;
            wb_table2_5_LU2( true) ;
         }
         else
         {
            wb_table2_5_LU2( false) ;
         }
         return  ;
      }

      protected void wb_table2_5_LU2e( bool wbgen )
      {
         if ( wbgen )
         {
            context.WriteHtmlText( "</td>") ;
            context.WriteHtmlText( "</tr>") ;
            context.WriteHtmlText( "<tr>") ;
            context.WriteHtmlText( "<td>") ;
            /* Div Control */
            GxWebStd.gx_div_start( context, divActiongroup_actions_Internalname, 1, 0, "px", 0, "px", "ActionGroupRight", "left", "top", "", "", "div");
            TempTags = "  onfocus=\"gx.evt.onfocus(this, 28,'',false,'',0)\"";
            ClassString = "Button";
            StyleString = "";
            GxWebStd.gx_button_ctrl( context, bttBtnenter_Internalname, "gx.evt.setGridEvt("+StringUtil.Str( (decimal)(11), 2, 0)+","+"null"+");", "Actualizar columnas", bttBtnenter_Jsonclick, 5, "Confirmar", "", StyleString, ClassString, 1, 1, "standard", "'"+""+"'"+",false,"+"'"+"EENTER."+"'", TempTags, "", context.GetButtonType( ), "HLP_WWPBaseObjects\\ColumnsSelector.htm");
            TempTags = "  onfocus=\"gx.evt.onfocus(this, 29,'',false,'',0)\"";
            ClassString = "BtnDefault";
            StyleString = "";
            GxWebStd.gx_button_ctrl( context, bttBtncancel_Internalname, "gx.evt.setGridEvt("+StringUtil.Str( (decimal)(11), 2, 0)+","+"null"+");", "Cancelar", bttBtncancel_Jsonclick, 1, "Cancelar", "", StyleString, ClassString, 1, 1, "standard", "'"+""+"'"+",false,"+"'"+"ECANCEL."+"'", TempTags, "", context.GetButtonType( ), "HLP_WWPBaseObjects\\ColumnsSelector.htm");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            context.WriteHtmlText( "</td>") ;
            context.WriteHtmlText( "</tr>") ;
            context.WriteHtmlText( "</tbody>") ;
            /* End of table */
            context.WriteHtmlText( "</table>") ;
            wb_table1_2_LU2e( true) ;
         }
         else
         {
            wb_table1_2_LU2e( false) ;
         }
      }

      protected void wb_table2_5_LU2( bool wbgen )
      {
         if ( wbgen )
         {
            /* Table start */
            sStyleString = "";
            GxWebStd.gx_table_start( context, tblTablecontent_Internalname, tblTablecontent_Internalname, "", "Table100x100", 0, "", "", 1, 2, sStyleString, "", "", 0);
            context.WriteHtmlText( "<tbody>") ;
            context.WriteHtmlText( "<tr>") ;
            context.WriteHtmlText( "<td>") ;
            ClassString = "ErrorViewer";
            StyleString = "";
            GxWebStd.gx_msg_list( context, "", context.GX_msglist.DisplayMode, StyleString, ClassString, "", "false");
            context.WriteHtmlText( "</td>") ;
            context.WriteHtmlText( "</tr>") ;
            context.WriteHtmlText( "<tr>") ;
            context.WriteHtmlText( "<td>") ;
            /*  Grid Control  */
            GridContainer.SetIsFreestyle(true);
            GridContainer.SetWrapped(nGXWrapped);
            if ( GridContainer.GetWrapped() == 1 )
            {
               context.WriteHtmlText( "<div id=\""+"GridContainer"+"DivS\" data-gxgridid=\"11\">") ;
               sStyleString = "";
               GxWebStd.gx_table_start( context, subGrid_Internalname, subGrid_Internalname, "", "FreeStyleGrid", 0, "", "", 0, 0, sStyleString, "", "", 0);
               GridContainer.AddObjectProperty("GridName", "Grid");
            }
            else
            {
               GridContainer.AddObjectProperty("GridName", "Grid");
               GridContainer.AddObjectProperty("Header", subGrid_Header);
               GridContainer.AddObjectProperty("SflColumns", subGrid_Columns);
               GridContainer.AddObjectProperty("Class", StringUtil.RTrim( "FreeStyleGrid"));
               GridContainer.AddObjectProperty("Cellpadding", StringUtil.LTrim( StringUtil.NToC( (decimal)(0), 4, 0, ".", "")));
               GridContainer.AddObjectProperty("Cellspacing", StringUtil.LTrim( StringUtil.NToC( (decimal)(0), 4, 0, ".", "")));
               GridContainer.AddObjectProperty("Class", "FreeStyleGrid");
               GridContainer.AddObjectProperty("Cellpadding", StringUtil.LTrim( StringUtil.NToC( (decimal)(0), 4, 0, ".", "")));
               GridContainer.AddObjectProperty("Cellspacing", StringUtil.LTrim( StringUtil.NToC( (decimal)(0), 4, 0, ".", "")));
               GridContainer.AddObjectProperty("Backcolorstyle", StringUtil.LTrim( StringUtil.NToC( (decimal)(subGrid_Backcolorstyle), 1, 0, ".", "")));
               GridContainer.AddObjectProperty("CmpContext", "");
               GridContainer.AddObjectProperty("InMasterPage", "false");
               GridColumn = GXWebColumn.GetNew(isAjaxCallMode( ));
               GridContainer.AddColumnProperties(GridColumn);
               GridColumn = GXWebColumn.GetNew(isAjaxCallMode( ));
               GridContainer.AddColumnProperties(GridColumn);
               GridColumn = GXWebColumn.GetNew(isAjaxCallMode( ));
               GridContainer.AddColumnProperties(GridColumn);
               GridColumn = GXWebColumn.GetNew(isAjaxCallMode( ));
               GridContainer.AddColumnProperties(GridColumn);
               GridColumn = GXWebColumn.GetNew(isAjaxCallMode( ));
               GridContainer.AddColumnProperties(GridColumn);
               GridColumn = GXWebColumn.GetNew(isAjaxCallMode( ));
               GridColumn.AddObjectProperty("Value", context.convertURL( context.GetImagePath( "2aa88aca-af12-4417-abf9-461bf944ba5d", "", context.GetTheme( ))));
               GridContainer.AddColumnProperties(GridColumn);
               GridColumn = GXWebColumn.GetNew(isAjaxCallMode( ));
               GridContainer.AddColumnProperties(GridColumn);
               GridColumn = GXWebColumn.GetNew(isAjaxCallMode( ));
               GridColumn.AddObjectProperty("Value", context.convertURL( context.GetImagePath( "18fea524-2fca-4d65-a716-0747be033f02", "", context.GetTheme( ))));
               GridContainer.AddColumnProperties(GridColumn);
               GridColumn = GXWebColumn.GetNew(isAjaxCallMode( ));
               GridContainer.AddColumnProperties(GridColumn);
               GridColumn = GXWebColumn.GetNew(isAjaxCallMode( ));
               GridColumn.AddObjectProperty("Value", StringUtil.BoolToStr( AV23Visible));
               GridContainer.AddColumnProperties(GridColumn);
               GridColumn = GXWebColumn.GetNew(isAjaxCallMode( ));
               GridContainer.AddColumnProperties(GridColumn);
               GridColumn = GXWebColumn.GetNew(isAjaxCallMode( ));
               GridColumn.AddObjectProperty("Value", AV27ColumnDisplayName);
               GridColumn.AddObjectProperty("Enabled", StringUtil.LTrim( StringUtil.NToC( (decimal)(edtavColumndisplayname_Enabled), 5, 0, ".", "")));
               GridContainer.AddColumnProperties(GridColumn);
               GridColumn = GXWebColumn.GetNew(isAjaxCallMode( ));
               GridColumn.AddObjectProperty("Value", AV5ColumnName);
               GridColumn.AddObjectProperty("Enabled", StringUtil.LTrim( StringUtil.NToC( (decimal)(edtavColumnname_Enabled), 5, 0, ".", "")));
               GridColumn.AddObjectProperty("Visible", StringUtil.LTrim( StringUtil.NToC( (decimal)(edtavColumnname_Visible), 5, 0, ".", "")));
               GridContainer.AddColumnProperties(GridColumn);
               GridContainer.AddObjectProperty("Selectedindex", StringUtil.LTrim( StringUtil.NToC( (decimal)(subGrid_Selectedindex), 4, 0, ".", "")));
               GridContainer.AddObjectProperty("Allowselection", StringUtil.LTrim( StringUtil.NToC( (decimal)(subGrid_Allowselection), 1, 0, ".", "")));
               GridContainer.AddObjectProperty("Selectioncolor", StringUtil.LTrim( StringUtil.NToC( (decimal)(subGrid_Selectioncolor), 9, 0, ".", "")));
               GridContainer.AddObjectProperty("Allowhover", StringUtil.LTrim( StringUtil.NToC( (decimal)(subGrid_Allowhovering), 1, 0, ".", "")));
               GridContainer.AddObjectProperty("Hovercolor", StringUtil.LTrim( StringUtil.NToC( (decimal)(subGrid_Hoveringcolor), 9, 0, ".", "")));
               GridContainer.AddObjectProperty("Allowcollapsing", StringUtil.LTrim( StringUtil.NToC( (decimal)(subGrid_Allowcollapsing), 1, 0, ".", "")));
               GridContainer.AddObjectProperty("Collapsed", StringUtil.LTrim( StringUtil.NToC( (decimal)(subGrid_Collapsed), 1, 0, ".", "")));
            }
         }
         if ( wbEnd == 11 )
         {
            wbEnd = 0;
            nRC_GXsfl_11 = (int)(nGXsfl_11_idx-1);
            if ( GridContainer.GetWrapped() == 1 )
            {
               context.WriteHtmlText( "</table>") ;
               context.WriteHtmlText( "</div>") ;
            }
            else
            {
               sStyleString = "";
               context.WriteHtmlText( "<div id=\""+"GridContainer"+"Div\" "+sStyleString+">"+"</div>") ;
               context.httpAjaxContext.ajax_rsp_assign_grid("_"+"Grid", GridContainer);
               if ( ! context.isAjaxRequest( ) && ! context.isSpaRequest( ) )
               {
                  GxWebStd.gx_hidden_field( context, "GridContainerData", GridContainer.ToJavascriptSource());
               }
               if ( context.isAjaxRequest( ) || context.isSpaRequest( ) )
               {
                  GxWebStd.gx_hidden_field( context, "GridContainerData"+"V", GridContainer.GridValuesHidden());
               }
               else
               {
                  context.WriteHtmlText( "<input type=\"hidden\" "+"name=\""+"GridContainerData"+"V"+"\" value='"+GridContainer.GridValuesHidden()+"'/>") ;
               }
            }
            context.WriteHtmlText( "</td>") ;
            context.WriteHtmlText( "</tr>") ;
            context.WriteHtmlText( "</tbody>") ;
            /* End of table */
            context.WriteHtmlText( "</table>") ;
            wb_table2_5_LU2e( true) ;
         }
         else
         {
            wb_table2_5_LU2e( false) ;
         }
      }

      public override void setparameters( Object[] obj )
      {
         createObjects();
         initialize();
         AV12SessionKey = (String)getParm(obj,0);
         context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV12SessionKey", AV12SessionKey);
         context.httpAjaxContext.ajax_rsp_assign_attri("", false, "gxhash_vSESSIONKEY", GetSecureSignedToken( "", StringUtil.RTrim( context.localUtil.Format( AV12SessionKey, "")), context));
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
         PALU2( ) ;
         WSLU2( ) ;
         WELU2( ) ;
         this.cleanup();
         context.SetWrapped(false);
         context.GX_msglist = BackMsgLst;
         return "";
      }

      public void responsestatic( String sGXDynURL )
      {
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
            context.AddJavascriptSource(StringUtil.RTrim( ((String)Form.Jscriptsrc.Item(idxLst))), "?201910219194939", true, true);
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
         context.AddJavascriptSource("messages.spa.js", "?"+GetCacheInvalidationToken( ), false, true);
         context.AddJavascriptSource("wwpbaseobjects/columnsselector.js", "?201910219194939", false, true);
         /* End function include_jscripts */
      }

      protected void SubsflControlProps_112( )
      {
         imgMovedown_Internalname = "MOVEDOWN_"+sGXsfl_11_idx;
         imgMoveup_Internalname = "MOVEUP_"+sGXsfl_11_idx;
         chkavVisible_Internalname = "vVISIBLE_"+sGXsfl_11_idx;
         edtavColumndisplayname_Internalname = "vCOLUMNDISPLAYNAME_"+sGXsfl_11_idx;
         edtavColumnname_Internalname = "vCOLUMNNAME_"+sGXsfl_11_idx;
      }

      protected void SubsflControlProps_fel_112( )
      {
         imgMovedown_Internalname = "MOVEDOWN_"+sGXsfl_11_fel_idx;
         imgMoveup_Internalname = "MOVEUP_"+sGXsfl_11_fel_idx;
         chkavVisible_Internalname = "vVISIBLE_"+sGXsfl_11_fel_idx;
         edtavColumndisplayname_Internalname = "vCOLUMNDISPLAYNAME_"+sGXsfl_11_fel_idx;
         edtavColumnname_Internalname = "vCOLUMNNAME_"+sGXsfl_11_fel_idx;
      }

      protected void sendrow_112( )
      {
         SubsflControlProps_112( ) ;
         WBLU0( ) ;
         if ( ( 0 * 1 == 0 ) || ( nGXsfl_11_idx <= subGrid_Recordsperpage( ) * 1 ) )
         {
            GridRow = GXWebRow.GetNew(context,GridContainer);
            if ( subGrid_Backcolorstyle == 0 )
            {
               /* None style subfile background logic. */
               subGrid_Backstyle = 0;
               if ( StringUtil.StrCmp(subGrid_Class, "") != 0 )
               {
                  subGrid_Linesclass = subGrid_Class+"Odd";
               }
            }
            else if ( subGrid_Backcolorstyle == 1 )
            {
               /* Uniform style subfile background logic. */
               subGrid_Backstyle = 0;
               subGrid_Backcolor = subGrid_Allbackcolor;
               if ( StringUtil.StrCmp(subGrid_Class, "") != 0 )
               {
                  subGrid_Linesclass = subGrid_Class+"Uniform";
               }
            }
            else if ( subGrid_Backcolorstyle == 2 )
            {
               /* Header style subfile background logic. */
               subGrid_Backstyle = 1;
               if ( StringUtil.StrCmp(subGrid_Class, "") != 0 )
               {
                  subGrid_Linesclass = subGrid_Class+"Odd";
               }
               subGrid_Backcolor = (int)(0xFFFFFF);
            }
            else if ( subGrid_Backcolorstyle == 3 )
            {
               /* Report style subfile background logic. */
               subGrid_Backstyle = 1;
               if ( subGrid_Columns <= 0 )
               {
                  subGrid_Backcolor = (int)(0xFFFFFF);
                  if ( StringUtil.StrCmp(subGrid_Class, "") != 0 )
                  {
                     subGrid_Linesclass = subGrid_Class+"Odd";
                  }
               }
               else if ( subGrid_Columns == 1 )
               {
                  if ( ((int)((nGXsfl_11_idx) % (2))) == 0 )
                  {
                     subGrid_Backcolor = (int)(0x0);
                     if ( StringUtil.StrCmp(subGrid_Class, "") != 0 )
                     {
                        subGrid_Linesclass = subGrid_Class+"Even";
                     }
                  }
                  else
                  {
                     subGrid_Backcolor = (int)(0xFFFFFF);
                     if ( StringUtil.StrCmp(subGrid_Class, "") != 0 )
                     {
                        subGrid_Linesclass = subGrid_Class+"Odd";
                     }
                  }
               }
               else
               {
                  if ( ((int)(((nGXsfl_11_idx-1)/ (decimal)(subGrid_Columns)) % (2))) == 0 )
                  {
                     subGrid_Backcolor = (int)(0xFFFFFF);
                     if ( StringUtil.StrCmp(subGrid_Class, "") != 0 )
                     {
                        subGrid_Linesclass = subGrid_Class+"Odd";
                     }
                  }
                  else
                  {
                     subGrid_Backcolor = (int)(0x0);
                     if ( StringUtil.StrCmp(subGrid_Class, "") != 0 )
                     {
                        subGrid_Linesclass = subGrid_Class+"Even";
                     }
                  }
               }
            }
            /* Start of Columns property logic. */
            if ( GridContainer.GetWrapped() == 1 )
            {
               if ( ( subGrid_Columns == 0 ) && ( nGXsfl_11_idx == 1 ) )
               {
                  context.WriteHtmlText( "<tr"+" class=\""+subGrid_Linesclass+"\" style=\""+""+"\""+" data-gxrow=\""+sGXsfl_11_idx+"\">") ;
               }
               if ( subGrid_Columns > 0 )
               {
                  if ( ( subGrid_Columns == 1 ) || ( ((int)((nGXsfl_11_idx) % (subGrid_Columns))) - 1 == 0 ) )
                  {
                     context.WriteHtmlText( "<tr"+" class=\""+subGrid_Linesclass+"\" style=\""+""+"\""+" data-gxrow=\""+sGXsfl_11_idx+"\">") ;
                  }
               }
            }
            GridRow.AddColumnProperties("row", -1, isAjaxCallMode( ), new Object[] {(String)"",(String)subGrid_Linesclass,(String)""});
            GridRow.AddColumnProperties("cell", -1, isAjaxCallMode( ), new Object[] {(String)"",(String)"",(String)""});
            /* Table start */
            GridRow.AddColumnProperties("table", -1, isAjaxCallMode( ), new Object[] {(String)tblUnnamedtable1_Internalname+"_"+sGXsfl_11_idx,(short)1,(String)"",(String)"",(String)"",(String)"",(String)"",(String)"",(String)"",(short)1,(short)2,(String)"",(String)"",(String)"",(String)"px",(String)"px",(String)""});
            GridRow.AddColumnProperties("row", -1, isAjaxCallMode( ), new Object[] {(String)"",(String)"",(String)""});
            GridRow.AddColumnProperties("cell", -1, isAjaxCallMode( ), new Object[] {(String)"",(String)"",(String)""});
            /* Active images/pictures */
            TempTags = " " + ((imgMovedown_Enabled!=0)&&(imgMovedown_Visible!=0) ? " onfocus=\"gx.evt.onfocus(this, 17,'',false,'',0)\"" : " ");
            ClassString = "Image";
            StyleString = "";
            sImgUrl = (String)(context.GetImagePath( "2aa88aca-af12-4417-abf9-461bf944ba5d", "", context.GetTheme( )));
            GridRow.AddColumnProperties("bitmap", 1, isAjaxCallMode( ), new Object[] {(String)imgMovedown_Internalname,(String)sImgUrl,(String)"",(String)"",(String)"",context.GetTheme( ),(int)imgMovedown_Visible,(short)1,(String)"",(String)"",(short)0,(short)0,(short)0,(String)"px",(short)0,(String)"px",(short)0,(short)0,(short)5,(String)imgMovedown_Jsonclick,"'"+""+"'"+",false,"+"'"+"E\\'DOMOVEDOWN\\'."+"'",(String)StyleString,(String)ClassString,(String)"",(String)"",(String)"",(String)"",(String)""+TempTags,(String)"",(String)"",(short)1,(bool)false,(bool)false,context.GetImageSrcSet( sImgUrl)});
            if ( GridContainer.GetWrapped() == 1 )
            {
               GridContainer.CloseTag("cell");
            }
            GridRow.AddColumnProperties("cell", -1, isAjaxCallMode( ), new Object[] {(String)"",(String)"",(String)""});
            /* Active images/pictures */
            TempTags = " " + ((imgMoveup_Enabled!=0)&&(imgMoveup_Visible!=0) ? " onfocus=\"gx.evt.onfocus(this, 19,'',false,'',0)\"" : " ");
            ClassString = "Image";
            StyleString = "";
            sImgUrl = (String)(context.GetImagePath( "18fea524-2fca-4d65-a716-0747be033f02", "", context.GetTheme( )));
            GridRow.AddColumnProperties("bitmap", 1, isAjaxCallMode( ), new Object[] {(String)imgMoveup_Internalname,(String)sImgUrl,(String)"",(String)"",(String)"",context.GetTheme( ),(int)imgMoveup_Visible,(short)1,(String)"",(String)"",(short)0,(short)0,(short)0,(String)"px",(short)0,(String)"px",(short)0,(short)0,(short)5,(String)imgMoveup_Jsonclick,"'"+""+"'"+",false,"+"'"+"E\\'DOMOVEUP\\'."+"'",(String)StyleString,(String)ClassString,(String)"",(String)"",(String)"",(String)"",(String)""+TempTags,(String)"",(String)"",(short)1,(bool)false,(bool)false,context.GetImageSrcSet( sImgUrl)});
            if ( GridContainer.GetWrapped() == 1 )
            {
               GridContainer.CloseTag("cell");
            }
            GridRow.AddColumnProperties("cell", -1, isAjaxCallMode( ), new Object[] {(String)"",(String)"",(String)""});
            /* Check box */
            TempTags = " " + ((chkavVisible.Enabled!=0)&&(chkavVisible.Visible!=0) ? " onfocus=\"gx.evt.onfocus(this, 21,'',false,'"+sGXsfl_11_idx+"',11)\"" : " ");
            ClassString = "AttributeRealWidthCheckBox";
            StyleString = "";
            GXCCtl = "vVISIBLE_" + sGXsfl_11_idx;
            chkavVisible.Name = GXCCtl;
            chkavVisible.WebTags = "";
            chkavVisible.Caption = "";
            context.httpAjaxContext.ajax_rsp_assign_prop("", false, chkavVisible_Internalname, "TitleCaption", chkavVisible.Caption, !bGXsfl_11_Refreshing);
            chkavVisible.CheckedValue = "false";
            AV23Visible = StringUtil.StrToBool( StringUtil.BoolToStr( AV23Visible));
            context.httpAjaxContext.ajax_rsp_assign_attri("", false, chkavVisible_Internalname, AV23Visible);
            GridRow.AddColumnProperties("checkbox", 1, isAjaxCallMode( ), new Object[] {(String)chkavVisible_Internalname,StringUtil.BoolToStr( AV23Visible),(String)"",(String)"",(short)1,(short)1,(String)"true",(String)"",(String)StyleString,(String)ClassString,(String)"",(String)"",TempTags+" onclick=\"gx.fn.checkboxClick(21, this, 'true', 'false');gx.evt.onchange(this, event);\" "+((chkavVisible.Enabled!=0)&&(chkavVisible.Visible!=0) ? " onblur=\""+""+";gx.evt.onblur(this,21);\"" : " ")});
            if ( GridContainer.GetWrapped() == 1 )
            {
               GridContainer.CloseTag("cell");
            }
            GridRow.AddColumnProperties("cell", -1, isAjaxCallMode( ), new Object[] {(String)"",(String)"",(String)""});
            /* Single line edit */
            TempTags = " " + ((edtavColumndisplayname_Enabled!=0)&&(edtavColumndisplayname_Visible!=0) ? " onfocus=\"gx.evt.onfocus(this, 23,'',false,'"+sGXsfl_11_idx+"',11)\"" : " ");
            ROClassString = "AttributeNoWrap";
            GridRow.AddColumnProperties("edit", 1, isAjaxCallMode( ), new Object[] {(String)edtavColumndisplayname_Internalname,(String)AV27ColumnDisplayName,(String)"",TempTags+" onchange=\""+""+";gx.evt.onchange(this, event)\" "+((edtavColumndisplayname_Enabled!=0)&&(edtavColumndisplayname_Visible!=0) ? " onblur=\""+""+";gx.evt.onblur(this,23);\"" : " "),(String)"'"+""+"'"+",false,"+"'"+""+"'",(String)"",(String)"",(String)"",(String)"",(String)edtavColumndisplayname_Jsonclick,(short)0,(String)"AttributeNoWrap",(String)"",(String)ROClassString,(String)"",(String)"",(short)1,(int)edtavColumndisplayname_Enabled,(short)0,(String)"text",(String)"",(short)80,(String)"chr",(short)1,(String)"row",(short)100,(short)0,(short)0,(short)11,(short)1,(short)-1,(short)-1,(bool)true,(String)"",(String)"left",(bool)true});
            if ( GridContainer.GetWrapped() == 1 )
            {
               GridContainer.CloseTag("cell");
            }
            if ( GridContainer.GetWrapped() == 1 )
            {
               GridContainer.CloseTag("row");
            }
            if ( GridContainer.GetWrapped() == 1 )
            {
               GridContainer.CloseTag("table");
            }
            /* End of table */
            /* Single line edit */
            ROClassString = "Attribute";
            GridRow.AddColumnProperties("edit", 1, isAjaxCallMode( ), new Object[] {(String)edtavColumnname_Internalname,(String)AV5ColumnName,(String)"",(String)"",(String)"'"+""+"'"+",false,"+"'"+""+"'",(String)"",(String)"",(String)"",(String)"",(String)edtavColumnname_Jsonclick,(short)0,(String)"Attribute",(String)"",(String)ROClassString,(String)"",(String)"",(int)edtavColumnname_Visible,(int)edtavColumnname_Enabled,(short)0,(String)"text",(String)"",(short)80,(String)"chr",(short)1,(String)"row",(short)100,(short)0,(short)0,(short)11,(short)1,(short)-1,(short)-1,(bool)true,(String)"",(String)"left",(bool)true});
            if ( GridContainer.GetWrapped() == 1 )
            {
               GridContainer.CloseTag("cell");
            }
            if ( GridContainer.GetWrapped() == 1 )
            {
               GridContainer.CloseTag("row");
            }
            send_integrity_lvl_hashesLU2( ) ;
            /* End of Columns property logic. */
            if ( GridContainer.GetWrapped() == 1 )
            {
               if ( subGrid_Columns > 0 )
               {
                  if ( ((int)((nGXsfl_11_idx) % (subGrid_Columns))) == 0 )
                  {
                     context.WriteHtmlTextNl( "</tr>") ;
                  }
               }
            }
            GridContainer.AddRow(GridRow);
            nGXsfl_11_idx = ((subGrid_Islastpage==1)&&(nGXsfl_11_idx+1>subGrid_Recordsperpage( )) ? 1 : nGXsfl_11_idx+1);
            sGXsfl_11_idx = StringUtil.PadL( StringUtil.LTrim( StringUtil.Str( (decimal)(nGXsfl_11_idx), 4, 0)), 4, "0");
            SubsflControlProps_112( ) ;
         }
         /* End function sendrow_112 */
      }

      protected void init_web_controls( )
      {
         GXCCtl = "vVISIBLE_" + sGXsfl_11_idx;
         chkavVisible.Name = GXCCtl;
         chkavVisible.WebTags = "";
         chkavVisible.Caption = "";
         context.httpAjaxContext.ajax_rsp_assign_prop("", false, chkavVisible_Internalname, "TitleCaption", chkavVisible.Caption, !bGXsfl_11_Refreshing);
         chkavVisible.CheckedValue = "false";
         AV23Visible = StringUtil.StrToBool( StringUtil.BoolToStr( AV23Visible));
         context.httpAjaxContext.ajax_rsp_assign_attri("", false, chkavVisible_Internalname, AV23Visible);
         /* End function init_web_controls */
      }

      protected void init_default_properties( )
      {
         imgMovedown_Internalname = "MOVEDOWN";
         imgMoveup_Internalname = "MOVEUP";
         chkavVisible_Internalname = "vVISIBLE";
         edtavColumndisplayname_Internalname = "vCOLUMNDISPLAYNAME";
         tblUnnamedtable1_Internalname = "UNNAMEDTABLE1";
         edtavColumnname_Internalname = "vCOLUMNNAME";
         tblTablecontent_Internalname = "TABLECONTENT";
         bttBtnenter_Internalname = "BTNENTER";
         bttBtncancel_Internalname = "BTNCANCEL";
         divActiongroup_actions_Internalname = "ACTIONGROUP_ACTIONS";
         tblTablemain_Internalname = "TABLEMAIN";
         edtavColumnsselectorxml_Internalname = "vCOLUMNSSELECTORXML";
         Form.Internalname = "FORM";
         subGrid_Internalname = "GRID";
      }

      public override void initialize_properties( )
      {
         context.SetDefaultTheme("WorkWithPlusTheme");
         if ( context.isSpaRequest( ) )
         {
            disableJsOutput();
         }
         init_default_properties( ) ;
         edtavColumnname_Jsonclick = "";
         edtavColumndisplayname_Jsonclick = "";
         edtavColumndisplayname_Visible = 1;
         chkavVisible.Caption = "";
         chkavVisible.Visible = 1;
         chkavVisible.Enabled = 1;
         imgMoveup_Visible = 1;
         imgMovedown_Visible = 1;
         subGrid_Class = "FreeStyleGrid";
         subGrid_Allowcollapsing = 0;
         edtavColumnname_Enabled = 0;
         edtavColumndisplayname_Enabled = 1;
         subGrid_Backcolorstyle = 0;
         subGrid_Columns = 1;
         edtavColumnsselectorxml_Visible = 1;
         Form.Headerrawhtml = "";
         Form.Background = "";
         Form.Textcolor = 0;
         Form.Backcolor = (int)(0xFFFFFF);
         Form.Caption = "Selector de Columnas";
         subGrid_Rows = 0;
         edtavColumnname_Visible = 1;
         context.GX_msglist.DisplayMode = 1;
         if ( context.isSpaRequest( ) )
         {
            enableJsOutput();
         }
      }

      public override bool SupportAjaxEvent( )
      {
         return true ;
      }

      public override void InitializeDynEvents( )
      {
         setEventMetadata("REFRESH","{handler:'Refresh',iparms:[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows',ctrl:'GRID',prop:'Rows'},{av:'edtavColumnname_Visible',ctrl:'vCOLUMNNAME',prop:'Visible'},{av:'AV16ColumnsSelectorSDT',fld:'vCOLUMNSSELECTORSDT',pic:''},{av:'AV8ColumnsSelectorXML',fld:'vCOLUMNSSELECTORXML',pic:''},{av:'AV12SessionKey',fld:'vSESSIONKEY',pic:'',hsh:true}]");
         setEventMetadata("REFRESH",",oparms:[{av:'AV16ColumnsSelectorSDT',fld:'vCOLUMNSSELECTORSDT',pic:''}]}");
         setEventMetadata("GRID.LOAD","{handler:'E13LU2',iparms:[{av:'AV16ColumnsSelectorSDT',fld:'vCOLUMNSSELECTORSDT',pic:''}]");
         setEventMetadata("GRID.LOAD",",oparms:[{av:'AV5ColumnName',fld:'vCOLUMNNAME',pic:'',hsh:true},{av:'AV27ColumnDisplayName',fld:'vCOLUMNDISPLAYNAME',pic:''},{av:'AV23Visible',fld:'vVISIBLE',pic:''}]}");
         setEventMetadata("'DOMOVEDOWN'","{handler:'E14LU2',iparms:[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows',ctrl:'GRID',prop:'Rows'},{av:'AV8ColumnsSelectorXML',fld:'vCOLUMNSSELECTORXML',pic:''},{av:'edtavColumnname_Visible',ctrl:'vCOLUMNNAME',prop:'Visible'},{av:'AV16ColumnsSelectorSDT',fld:'vCOLUMNSSELECTORSDT',pic:''},{av:'AV12SessionKey',fld:'vSESSIONKEY',pic:'',hsh:true},{av:'AV5ColumnName',fld:'vCOLUMNNAME',grid:11,pic:'',hsh:true},{av:'nRC_GXsfl_11',ctrl:'GRID',grid:11,prop:'GridRC'},{av:'AV23Visible',fld:'vVISIBLE',grid:11,pic:''}]");
         setEventMetadata("'DOMOVEDOWN'",",oparms:[{av:'AV16ColumnsSelectorSDT',fld:'vCOLUMNSSELECTORSDT',pic:''},{av:'AV8ColumnsSelectorXML',fld:'vCOLUMNSSELECTORXML',pic:''}]}");
         setEventMetadata("'DOMOVEUP'","{handler:'E15LU2',iparms:[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows',ctrl:'GRID',prop:'Rows'},{av:'AV8ColumnsSelectorXML',fld:'vCOLUMNSSELECTORXML',pic:''},{av:'edtavColumnname_Visible',ctrl:'vCOLUMNNAME',prop:'Visible'},{av:'AV16ColumnsSelectorSDT',fld:'vCOLUMNSSELECTORSDT',pic:''},{av:'AV12SessionKey',fld:'vSESSIONKEY',pic:'',hsh:true},{av:'AV5ColumnName',fld:'vCOLUMNNAME',grid:11,pic:'',hsh:true},{av:'nRC_GXsfl_11',ctrl:'GRID',grid:11,prop:'GridRC'},{av:'AV23Visible',fld:'vVISIBLE',grid:11,pic:''}]");
         setEventMetadata("'DOMOVEUP'",",oparms:[{av:'AV16ColumnsSelectorSDT',fld:'vCOLUMNSSELECTORSDT',pic:''},{av:'AV8ColumnsSelectorXML',fld:'vCOLUMNSSELECTORXML',pic:''}]}");
         setEventMetadata("ENTER","{handler:'E11LU2',iparms:[{av:'AV16ColumnsSelectorSDT',fld:'vCOLUMNSSELECTORSDT',pic:''},{av:'AV12SessionKey',fld:'vSESSIONKEY',pic:'',hsh:true},{av:'AV5ColumnName',fld:'vCOLUMNNAME',grid:11,pic:'',hsh:true},{av:'GRID_nFirstRecordOnPage'},{av:'nRC_GXsfl_11',ctrl:'GRID',grid:11,prop:'GridRC'},{av:'AV23Visible',fld:'vVISIBLE',grid:11,pic:''}]");
         setEventMetadata("ENTER",",oparms:[{av:'AV16ColumnsSelectorSDT',fld:'vCOLUMNSSELECTORSDT',pic:''},{av:'AV8ColumnsSelectorXML',fld:'vCOLUMNSSELECTORXML',pic:''}]}");
         setEventMetadata("NULL","{handler:'Validv_Columnname',iparms:[]");
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
         wcpOAV12SessionKey = "";
         gxfirstwebparm = "";
         gxfirstwebparm_bkp = "";
         AV8ColumnsSelectorXML = "";
         AV16ColumnsSelectorSDT = new GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtColumnsSelectorSDT_ColumnsSelectorSDTItem>( context, "ColumnsSelectorSDTItem", "SIGMA");
         GXKey = "";
         sDynURL = "";
         FormProcess = "";
         bodyStyle = "";
         GX_FocusControl = "";
         Form = new GXWebForm();
         sPrefix = "";
         TempTags = "";
         ClassString = "";
         StyleString = "";
         GridContainer = new GXWebGrid( context);
         sStyleString = "";
         sEvt = "";
         EvtGridId = "";
         EvtRowId = "";
         sEvtType = "";
         AV27ColumnDisplayName = "";
         AV5ColumnName = "";
         AV21HttpRequest = new GxHttpRequest( context);
         AV15ws = context.GetSession();
         AV6ColumnsSelector2 = new GeneXus.Programs.wwpbaseobjects.SdtWWPColumnsSelector(context);
         AV13VisibleColumn = new GeneXus.Programs.wwpbaseobjects.SdtWWPColumnsSelector_VisibleColumn(context);
         AV17ColumnsSelectorSDTItem = new GeneXus.Programs.wwpbaseobjects.SdtColumnsSelectorSDT_ColumnsSelectorSDTItem(context);
         AV10InvisibleColumn = new GeneXus.Programs.wwpbaseobjects.SdtWWPColumnsSelector_InvisibleColumn(context);
         GridRow = new GXWebRow();
         AV25SelectedColumnName = "";
         bttBtnenter_Jsonclick = "";
         bttBtncancel_Jsonclick = "";
         subGrid_Header = "";
         GridColumn = new GXWebColumn();
         BackMsgLst = new msglist();
         LclMsgLst = new msglist();
         subGrid_Linesclass = "";
         sImgUrl = "";
         imgMovedown_Jsonclick = "";
         imgMoveup_Jsonclick = "";
         GXCCtl = "";
         ROClassString = "";
         /* GeneXus formulas. */
         context.Gx_err = 0;
         edtavColumndisplayname_Enabled = 0;
      }

      private short nGotPars ;
      private short GxWebError ;
      private short GRID_nEOF ;
      private short initialized ;
      private short gxajaxcallmode ;
      private short wbEnd ;
      private short wbStart ;
      private short nDonePA ;
      private short gxcookieaux ;
      private short subGrid_Columns ;
      private short subGrid_Backcolorstyle ;
      private short AV9i ;
      private short AV33FSColumns ;
      private short subGrid_Allowselection ;
      private short subGrid_Allowhovering ;
      private short subGrid_Allowcollapsing ;
      private short subGrid_Collapsed ;
      private short nGXWrapped ;
      private short subGrid_Backstyle ;
      private int edtavColumnname_Visible ;
      private int nRC_GXsfl_11 ;
      private int nGXsfl_11_idx=1 ;
      private int subGrid_Rows ;
      private int edtavColumnsselectorxml_Visible ;
      private int subGrid_Islastpage ;
      private int edtavColumndisplayname_Enabled ;
      private int edtavColumnname_Enabled ;
      private int AV38GXV1 ;
      private int AV39GXV2 ;
      private int imgMovedown_Visible ;
      private int imgMoveup_Visible ;
      private int AV40GXV3 ;
      private int AV41GXV4 ;
      private int AV42GXV5 ;
      private int AV43GXV6 ;
      private int AV44GXV7 ;
      private int nGXsfl_11_fel_idx=1 ;
      private int subGrid_Selectedindex ;
      private int subGrid_Selectioncolor ;
      private int subGrid_Hoveringcolor ;
      private int idxLst ;
      private int subGrid_Backcolor ;
      private int subGrid_Allbackcolor ;
      private int imgMovedown_Enabled ;
      private int imgMoveup_Enabled ;
      private int edtavColumndisplayname_Visible ;
      private long GRID_nFirstRecordOnPage ;
      private long GRID_nCurrentRecord ;
      private long GRID_nRecordCount ;
      private String gxfirstwebparm ;
      private String gxfirstwebparm_bkp ;
      private String sGXsfl_11_idx="0001" ;
      private String edtavColumnname_Internalname ;
      private String GXKey ;
      private String sDynURL ;
      private String FormProcess ;
      private String bodyStyle ;
      private String GX_FocusControl ;
      private String sPrefix ;
      private String TempTags ;
      private String ClassString ;
      private String StyleString ;
      private String edtavColumnsselectorxml_Internalname ;
      private String sStyleString ;
      private String sEvt ;
      private String EvtGridId ;
      private String EvtRowId ;
      private String sEvtType ;
      private String chkavVisible_Internalname ;
      private String edtavColumndisplayname_Internalname ;
      private String imgMovedown_Internalname ;
      private String imgMoveup_Internalname ;
      private String sGXsfl_11_fel_idx="0001" ;
      private String tblTablemain_Internalname ;
      private String divActiongroup_actions_Internalname ;
      private String bttBtnenter_Internalname ;
      private String bttBtnenter_Jsonclick ;
      private String bttBtncancel_Internalname ;
      private String bttBtncancel_Jsonclick ;
      private String tblTablecontent_Internalname ;
      private String subGrid_Internalname ;
      private String subGrid_Header ;
      private String subGrid_Class ;
      private String subGrid_Linesclass ;
      private String tblUnnamedtable1_Internalname ;
      private String sImgUrl ;
      private String imgMovedown_Jsonclick ;
      private String imgMoveup_Jsonclick ;
      private String GXCCtl ;
      private String ROClassString ;
      private String edtavColumndisplayname_Jsonclick ;
      private String edtavColumnname_Jsonclick ;
      private bool entryPointCalled ;
      private bool bGXsfl_11_Refreshing=false ;
      private bool toggleJsOutput ;
      private bool wbLoad ;
      private bool Rfr0gs ;
      private bool wbErr ;
      private bool AV23Visible ;
      private bool gxdyncontrolsrefreshing ;
      private bool returnInSub ;
      private bool AV26SelectedVisible ;
      private bool gx_refresh_fired ;
      private bool AV22AtLeastAColumnVisible ;
      private String AV12SessionKey ;
      private String wcpOAV12SessionKey ;
      private String AV8ColumnsSelectorXML ;
      private String AV27ColumnDisplayName ;
      private String AV5ColumnName ;
      private String AV25SelectedColumnName ;
      private IGxSession AV15ws ;
      private GXWebGrid GridContainer ;
      private GXWebRow GridRow ;
      private GXWebColumn GridColumn ;
      private IGxDataStore dsGAM ;
      private IGxDataStore dsAFIP ;
      private IGxDataStore dsDefault ;
      private GXCheckbox chkavVisible ;
      private msglist BackMsgLst ;
      private msglist LclMsgLst ;
      private GxHttpRequest AV21HttpRequest ;
      private GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtColumnsSelectorSDT_ColumnsSelectorSDTItem> AV16ColumnsSelectorSDT ;
      private GXWebForm Form ;
      private GeneXus.Programs.wwpbaseobjects.SdtWWPColumnsSelector AV6ColumnsSelector2 ;
      private GeneXus.Programs.wwpbaseobjects.SdtWWPColumnsSelector_VisibleColumn AV13VisibleColumn ;
      private GeneXus.Programs.wwpbaseobjects.SdtWWPColumnsSelector_InvisibleColumn AV10InvisibleColumn ;
      private GeneXus.Programs.wwpbaseobjects.SdtColumnsSelectorSDT_ColumnsSelectorSDTItem AV17ColumnsSelectorSDTItem ;
   }

}
