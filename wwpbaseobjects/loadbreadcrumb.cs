/*
               File: WWPBaseObjects.LoadBreadcrumb
        Description: Load Breadcrumb
             Author: GeneXus C# Generator version 16_0_5-135614
       Generated on: 10/30/2019 19:1:55.39
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
   public class loadbreadcrumb : GXProcedure
   {
      public loadbreadcrumb( )
      {
         context = new GxContext(  );
         DataStoreUtil.LoadDataStores( context);
         IsMain = true;
         context.SetDefaultTheme("WorkWithPlusTheme");
      }

      public loadbreadcrumb( IGxContext context )
      {
         this.context = context;
         IsMain = false;
      }

      public void release( )
      {
      }

      public void execute( GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtDVelop_Menu_Item> aP0_DVelop_Menu ,
                           String aP1_MenuOptionToFind ,
                           ref String aP2_Breadcrumb ,
                           ref bool aP3_MenuOptionFounded )
      {
         this.AV9DVelop_Menu = aP0_DVelop_Menu;
         this.AV12MenuOptionToFind = aP1_MenuOptionToFind;
         this.AV8Breadcrumb = aP2_Breadcrumb;
         this.AV11MenuOptionFounded = aP3_MenuOptionFounded;
         initialize();
         executePrivate();
         aP2_Breadcrumb=this.AV8Breadcrumb;
         aP3_MenuOptionFounded=this.AV11MenuOptionFounded;
      }

      public bool executeUdp( GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtDVelop_Menu_Item> aP0_DVelop_Menu ,
                              String aP1_MenuOptionToFind ,
                              ref String aP2_Breadcrumb )
      {
         this.AV9DVelop_Menu = aP0_DVelop_Menu;
         this.AV12MenuOptionToFind = aP1_MenuOptionToFind;
         this.AV8Breadcrumb = aP2_Breadcrumb;
         this.AV11MenuOptionFounded = aP3_MenuOptionFounded;
         initialize();
         executePrivate();
         aP2_Breadcrumb=this.AV8Breadcrumb;
         aP3_MenuOptionFounded=this.AV11MenuOptionFounded;
         return AV11MenuOptionFounded ;
      }

      public void executeSubmit( GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtDVelop_Menu_Item> aP0_DVelop_Menu ,
                                 String aP1_MenuOptionToFind ,
                                 ref String aP2_Breadcrumb ,
                                 ref bool aP3_MenuOptionFounded )
      {
         loadbreadcrumb objloadbreadcrumb;
         objloadbreadcrumb = new loadbreadcrumb();
         objloadbreadcrumb.AV9DVelop_Menu = aP0_DVelop_Menu;
         objloadbreadcrumb.AV12MenuOptionToFind = aP1_MenuOptionToFind;
         objloadbreadcrumb.AV8Breadcrumb = aP2_Breadcrumb;
         objloadbreadcrumb.AV11MenuOptionFounded = aP3_MenuOptionFounded;
         objloadbreadcrumb.context.SetSubmitInitialConfig(context);
         objloadbreadcrumb.initialize();
         ThreadPool.QueueUserWorkItem( PropagateCulture(new WaitCallback( executePrivateCatch )),objloadbreadcrumb);
         aP2_Breadcrumb=this.AV8Breadcrumb;
         aP3_MenuOptionFounded=this.AV11MenuOptionFounded;
      }

      void executePrivateCatch( object stateInfo )
      {
         try
         {
            ((loadbreadcrumb)stateInfo).executePrivate();
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
         AV11MenuOptionFounded = false;
         AV15GXV1 = 1;
         while ( AV15GXV1 <= AV9DVelop_Menu.Count )
         {
            AV10DVelop_Menu_Item = ((GeneXus.Programs.wwpbaseobjects.SdtDVelop_Menu_Item)AV9DVelop_Menu.Item(AV15GXV1));
            if ( StringUtil.StrCmp(StringUtil.Trim( AV10DVelop_Menu_Item.gxTpr_Link), StringUtil.Lower( AV12MenuOptionToFind)) == 0 )
            {
               AV8Breadcrumb = StringUtil.Format( "<span class=\"BreadCrumb\">%1</span>", AV10DVelop_Menu_Item.gxTpr_Caption, "", "", "", "", "", "", "", "");
               AV11MenuOptionFounded = true;
               if (true) break;
            }
            else
            {
               new GeneXus.Programs.wwpbaseobjects.loadbreadcrumb(context ).execute(  AV10DVelop_Menu_Item.gxTpr_Subitems,  AV12MenuOptionToFind, ref  AV8Breadcrumb, ref  AV11MenuOptionFounded) ;
               if ( AV11MenuOptionFounded )
               {
                  AV8Breadcrumb = StringUtil.Format( "<span class=\"%3\">%1</span><i class=\"fa fa-angle-right %4\"></i>%2", AV10DVelop_Menu_Item.gxTpr_Caption, AV8Breadcrumb, "BreadCrumb", "BreadCrumbIcon", "", "", "", "", "");
                  if (true) break;
               }
            }
            AV15GXV1 = (int)(AV15GXV1+1);
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
         AV10DVelop_Menu_Item = new GeneXus.Programs.wwpbaseobjects.SdtDVelop_Menu_Item(context);
         /* GeneXus formulas. */
         context.Gx_err = 0;
      }

      private int AV15GXV1 ;
      private bool AV11MenuOptionFounded ;
      private String AV12MenuOptionToFind ;
      private String AV8Breadcrumb ;
      private String aP2_Breadcrumb ;
      private bool aP3_MenuOptionFounded ;
      private GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtDVelop_Menu_Item> AV9DVelop_Menu ;
      private GeneXus.Programs.wwpbaseobjects.SdtDVelop_Menu_Item AV10DVelop_Menu_Item ;
   }

}
