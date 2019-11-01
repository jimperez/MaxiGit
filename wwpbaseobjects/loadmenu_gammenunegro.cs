/*
               File: WWPBaseObjects.LoadMenu_GAMMenuNegro
        Description: Load Menu_GAMMenu Negro
             Author: GeneXus C# Generator version 16_0_5-135614
       Generated on: 10/21/2019 11:48:5.29
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
using com.genexus;
using GeneXus.Data.ADO;
using GeneXus.Data.NTier;
using GeneXus.Data.NTier.ADO;
using GeneXus.WebControls;
using GeneXus.Http;
using GeneXus.Procedure;
using GeneXus.XML;
using GeneXus.Search;
using GeneXus.Encryption;
using GeneXus.Http.Client;
using System.Threading;
using System.Xml.Serialization;
using System.ServiceModel;
using System.ServiceModel.Activation;
using System.Runtime.Serialization;
namespace GeneXus.Programs.wwpbaseobjects {
   public class loadmenu_gammenunegro : GXProcedure
   {
      public loadmenu_gammenunegro( )
      {
         context = new GxContext(  );
         DataStoreUtil.LoadDataStores( context);
         IsMain = true;
         context.SetDefaultTheme("WorkWithPlusTheme");
      }

      public loadmenu_gammenunegro( IGxContext context )
      {
         this.context = context;
         IsMain = false;
      }

      public void release( )
      {
      }

      public void execute( GXExternalCollection<GeneXus.Programs.genexussecurity.SdtGAMMenuOptionList> aP0_GAMMenu ,
                           long aP1_MenuId ,
                           long aP2_MinMenuId ,
                           out GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtDVelop_Menu_Item> aP3_Gxm2rootcol )
      {
         this.AV5GAMMenu = aP0_GAMMenu;
         this.AV9MenuId = aP1_MenuId;
         this.AV12MinMenuId = aP2_MinMenuId;
         this.Gxm2rootcol = new GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtDVelop_Menu_Item>( context, "Item", "SIGMA") ;
         initialize();
         executePrivate();
         aP3_Gxm2rootcol=this.Gxm2rootcol;
      }

      public GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtDVelop_Menu_Item> executeUdp( GXExternalCollection<GeneXus.Programs.genexussecurity.SdtGAMMenuOptionList> aP0_GAMMenu ,
                                                                                               long aP1_MenuId ,
                                                                                               long aP2_MinMenuId )
      {
         this.AV5GAMMenu = aP0_GAMMenu;
         this.AV9MenuId = aP1_MenuId;
         this.AV12MinMenuId = aP2_MinMenuId;
         this.Gxm2rootcol = new GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtDVelop_Menu_Item>( context, "Item", "SIGMA") ;
         initialize();
         executePrivate();
         aP3_Gxm2rootcol=this.Gxm2rootcol;
         return Gxm2rootcol ;
      }

      public void executeSubmit( GXExternalCollection<GeneXus.Programs.genexussecurity.SdtGAMMenuOptionList> aP0_GAMMenu ,
                                 long aP1_MenuId ,
                                 long aP2_MinMenuId ,
                                 out GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtDVelop_Menu_Item> aP3_Gxm2rootcol )
      {
         loadmenu_gammenunegro objloadmenu_gammenunegro;
         objloadmenu_gammenunegro = new loadmenu_gammenunegro();
         objloadmenu_gammenunegro.AV5GAMMenu = aP0_GAMMenu;
         objloadmenu_gammenunegro.AV9MenuId = aP1_MenuId;
         objloadmenu_gammenunegro.AV12MinMenuId = aP2_MinMenuId;
         objloadmenu_gammenunegro.Gxm2rootcol = new GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtDVelop_Menu_Item>( context, "Item", "SIGMA") ;
         objloadmenu_gammenunegro.context.SetSubmitInitialConfig(context);
         objloadmenu_gammenunegro.initialize();
         ThreadPool.QueueUserWorkItem( PropagateCulture(new WaitCallback( executePrivateCatch )),objloadmenu_gammenunegro);
         aP3_Gxm2rootcol=this.Gxm2rootcol;
      }

      void executePrivateCatch( object stateInfo )
      {
         try
         {
            ((loadmenu_gammenunegro)stateInfo).executePrivate();
         }
         catch ( Exception e )
         {
            GXUtil.SaveToEventLog( "Design", e);
            throw e ;
         }
      }

      void executePrivate( )
      {
         /* GeneXus formulas */
         /* Output device settings */
         AV8GAMApplication = new GeneXus.Programs.genexussecurity.SdtGAMApplication(context).get();
         AV13MinMenuIdAux = AV12MinMenuId;
         AV18GXV1 = 1;
         while ( AV18GXV1 <= AV5GAMMenu.Count )
         {
            AV6GAMMenuItem = ((GeneXus.Programs.genexussecurity.SdtGAMMenuOptionList)AV5GAMMenu.Item(AV18GXV1));
            Gxm1dvelop_menu = new GeneXus.Programs.wwpbaseobjects.SdtDVelop_Menu_Item(context);
            Gxm2rootcol.Add(Gxm1dvelop_menu, 0);
            AV13MinMenuIdAux = (long)(AV13MinMenuIdAux+1);
            Gxm1dvelop_menu.gxTpr_Id = StringUtil.Trim( StringUtil.Str( (decimal)(AV13MinMenuIdAux), 10, 0));
            Gxm1dvelop_menu.gxTpr_Link = AV6GAMMenuItem.gxTpr_Link;
            if ( AV6GAMMenuItem.gxTpr_Properties.Count > 0 )
            {
               Gxm1dvelop_menu.gxTpr_Iconclass = ((GeneXus.Programs.genexussecurity.SdtGAMProperty)AV6GAMMenuItem.gxTpr_Properties.Item(1)).gxTpr_Value;
            }
            else
            {
               if ( ( AV9MenuId > 0 ) && ( AV6GAMMenuItem.gxTpr_Properties.Count == 0 ) )
               {
                  Gxm1dvelop_menu.gxTpr_Iconclass = "menu-icon fa fa-bullseye";
               }
               else
               {
                  Gxm1dvelop_menu.gxTpr_Iconclass = "";
               }
            }
            if ( AV6GAMMenuItem.gxTpr_Properties.Count > 0 )
            {
               Gxm1dvelop_menu.gxTpr_Linktarget = ((GeneXus.Programs.genexussecurity.SdtGAMProperty)AV6GAMMenuItem.gxTpr_Properties.Item(2)).gxTpr_Value;
            }
            else
            {
               Gxm1dvelop_menu.gxTpr_Linktarget = "";
            }
            Gxm1dvelop_menu.gxTpr_Caption = AV6GAMMenuItem.gxTpr_Name;
            GXt_objcol_SdtDVelop_Menu_Item1 = new GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtDVelop_Menu_Item>();
            new GeneXus.Programs.wwpbaseobjects.loadmenu_gammenu(context ).execute(  AV6GAMMenuItem.gxTpr_Nodes,  0,  AV13MinMenuIdAux*100, out  GXt_objcol_SdtDVelop_Menu_Item1) ;
            Gxm1dvelop_menu.gxTpr_Subitems = GXt_objcol_SdtDVelop_Menu_Item1;
            AV18GXV1 = (int)(AV18GXV1+1);
         }
         this.cleanup();
      }

      public override void cleanup( )
      {
         CloseOpenCursors();
         if ( IsMain )
         {
            context.CloseConnections() ;
         }
         exitApplication();
      }

      protected void CloseOpenCursors( )
      {
      }

      public override void initialize( )
      {
         AV8GAMApplication = new GeneXus.Programs.genexussecurity.SdtGAMApplication(context);
         AV6GAMMenuItem = new GeneXus.Programs.genexussecurity.SdtGAMMenuOptionList(context);
         Gxm1dvelop_menu = new GeneXus.Programs.wwpbaseobjects.SdtDVelop_Menu_Item(context);
         GXt_objcol_SdtDVelop_Menu_Item1 = new GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtDVelop_Menu_Item>( context, "Item", "SIGMA");
         /* GeneXus formulas. */
         context.Gx_err = 0;
      }

      private int AV18GXV1 ;
      private long AV9MenuId ;
      private long AV12MinMenuId ;
      private long AV13MinMenuIdAux ;
      private GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtDVelop_Menu_Item> aP3_Gxm2rootcol ;
      private GXExternalCollection<GeneXus.Programs.genexussecurity.SdtGAMMenuOptionList> AV5GAMMenu ;
      private GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtDVelop_Menu_Item> Gxm2rootcol ;
      private GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtDVelop_Menu_Item> GXt_objcol_SdtDVelop_Menu_Item1 ;
      private GeneXus.Programs.genexussecurity.SdtGAMMenuOptionList AV6GAMMenuItem ;
      private GeneXus.Programs.genexussecurity.SdtGAMApplication AV8GAMApplication ;
      private GeneXus.Programs.wwpbaseobjects.SdtDVelop_Menu_Item Gxm1dvelop_menu ;
   }

}
