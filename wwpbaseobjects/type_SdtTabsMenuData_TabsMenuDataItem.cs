/*
				   File: type_SdtTabsMenuData_TabsMenuDataItem
			Description: TabsMenuData
				 Author: Nemo 🐠 for C# version 16.0.6.136889
		   Program type: Callable routine
			  Main DBMS: 
*/
using System;
using System.Collections;
using GeneXus.Utils;
using GeneXus.Resources;
using GeneXus.Application;
using GeneXus.Metadata;
using GeneXus.Cryptography;
using GeneXus.Encryption;
using GeneXus.Http.Client;
using GeneXus.Http.Server;
using System.Reflection;
using System.Xml.Serialization;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Activation;
using System.Web.Services.Protocols;

using GeneXus.Programs;
namespace GeneXus.Programs.wwpbaseobjects
{
	[XmlSerializerFormat]
	[XmlRoot(ElementName="TabsMenuDataItem")]
	[XmlType(TypeName="TabsMenuDataItem" , Namespace="SIGMA" )]
	[Serializable]
	public class SdtTabsMenuData_TabsMenuDataItem : GxUserType
	{
		public SdtTabsMenuData_TabsMenuDataItem( )
		{
			/* Constructor for serialization */
			gxTv_SdtTabsMenuData_TabsMenuDataItem_Menutitle = "";

			gxTv_SdtTabsMenuData_TabsMenuDataItem_Menudescription = "";

			gxTv_SdtTabsMenuData_TabsMenuDataItem_Menuurl = "";

		}

		public SdtTabsMenuData_TabsMenuDataItem(IGxContext context)
		{
			this.context = context;
			initialize();
		}

		#region Json
		private static Hashtable mapper;
		public override String JsonMap(String value)
		{
			if (mapper == null)
			{
				mapper = new Hashtable();
			}
			return (String)mapper[value]; ;
		}

		public override void ToJSON()
		{
			ToJSON(true) ;
			return;
		}

		public override void ToJSON(bool includeState)
		{
			AddObjectProperty("MenuId", gxTpr_Menuid, false);


			AddObjectProperty("MenuTitle", gxTpr_Menutitle, false);


			AddObjectProperty("MenuDescription", gxTpr_Menudescription, false);


			AddObjectProperty("MenuURL", gxTpr_Menuurl, false);

			if (gxTv_SdtTabsMenuData_TabsMenuDataItem_Sections != null)
			{
				AddObjectProperty("Sections", gxTv_SdtTabsMenuData_TabsMenuDataItem_Sections, false);  
			}
			return;
		}
		#endregion

		#region Properties

		[SoapElement(ElementName="MenuId")]
		[XmlElement(ElementName="MenuId")]
		public short gxTpr_Menuid
		{
			get { 
				return gxTv_SdtTabsMenuData_TabsMenuDataItem_Menuid; 
			}
			set { 
				gxTv_SdtTabsMenuData_TabsMenuDataItem_Menuid = value;
				SetDirty("Menuid");
			}
		}




		[SoapElement(ElementName="MenuTitle")]
		[XmlElement(ElementName="MenuTitle")]
		public String gxTpr_Menutitle
		{
			get { 
				return gxTv_SdtTabsMenuData_TabsMenuDataItem_Menutitle; 
			}
			set { 
				gxTv_SdtTabsMenuData_TabsMenuDataItem_Menutitle = value;
				SetDirty("Menutitle");
			}
		}




		[SoapElement(ElementName="MenuDescription")]
		[XmlElement(ElementName="MenuDescription")]
		public String gxTpr_Menudescription
		{
			get { 
				return gxTv_SdtTabsMenuData_TabsMenuDataItem_Menudescription; 
			}
			set { 
				gxTv_SdtTabsMenuData_TabsMenuDataItem_Menudescription = value;
				SetDirty("Menudescription");
			}
		}




		[SoapElement(ElementName="MenuURL")]
		[XmlElement(ElementName="MenuURL")]
		public String gxTpr_Menuurl
		{
			get { 
				return gxTv_SdtTabsMenuData_TabsMenuDataItem_Menuurl; 
			}
			set { 
				gxTv_SdtTabsMenuData_TabsMenuDataItem_Menuurl = value;
				SetDirty("Menuurl");
			}
		}




		[SoapElement(ElementName="Sections" )]
		[XmlArray(ElementName="Sections"  )]
		[XmlArrayItemAttribute(ElementName="SectionsItem" , IsNullable=false )]
		public GXBaseCollection<SdtTabsMenuData_TabsMenuDataItem_SectionsItem> gxTpr_Sections
		{
			get {
				if ( gxTv_SdtTabsMenuData_TabsMenuDataItem_Sections == null )
				{
					gxTv_SdtTabsMenuData_TabsMenuDataItem_Sections = new GXBaseCollection<SdtTabsMenuData_TabsMenuDataItem_SectionsItem>( context, "TabsMenuData.TabsMenuDataItem.SectionsItem", "");
				}
				return gxTv_SdtTabsMenuData_TabsMenuDataItem_Sections;
			}
			set {
				if ( gxTv_SdtTabsMenuData_TabsMenuDataItem_Sections == null )
				{
					gxTv_SdtTabsMenuData_TabsMenuDataItem_Sections = new GXBaseCollection<SdtTabsMenuData_TabsMenuDataItem_SectionsItem>( context, "TabsMenuData.TabsMenuDataItem.SectionsItem", "");
				}
				gxTv_SdtTabsMenuData_TabsMenuDataItem_Sections_N = 0;

				gxTv_SdtTabsMenuData_TabsMenuDataItem_Sections = value;
				SetDirty("Sections");
			}
		}

		public void gxTv_SdtTabsMenuData_TabsMenuDataItem_Sections_SetNull()
		{
			gxTv_SdtTabsMenuData_TabsMenuDataItem_Sections_N = 1;

			gxTv_SdtTabsMenuData_TabsMenuDataItem_Sections = null;
			return  ;
		}

		public bool gxTv_SdtTabsMenuData_TabsMenuDataItem_Sections_IsNull()
		{
			if (gxTv_SdtTabsMenuData_TabsMenuDataItem_Sections == null)
			{
				return true ;
			}
			return false ;
		}

		public bool ShouldSerializegxTpr_Sections_GxSimpleCollection_Json()
		{
				return gxTv_SdtTabsMenuData_TabsMenuDataItem_Sections != null && gxTv_SdtTabsMenuData_TabsMenuDataItem_Sections.Count > 0;

		}



		#endregion

		#region Initialization

		public void initialize( )
		{
			gxTv_SdtTabsMenuData_TabsMenuDataItem_Menutitle = "";
			gxTv_SdtTabsMenuData_TabsMenuDataItem_Menudescription = "";
			gxTv_SdtTabsMenuData_TabsMenuDataItem_Menuurl = "";

			gxTv_SdtTabsMenuData_TabsMenuDataItem_Sections_N = 1;

			return  ;
		}



		#endregion

		#region Declaration

		protected short gxTv_SdtTabsMenuData_TabsMenuDataItem_Menuid;
		 

		protected String gxTv_SdtTabsMenuData_TabsMenuDataItem_Menutitle;
		 

		protected String gxTv_SdtTabsMenuData_TabsMenuDataItem_Menudescription;
		 

		protected String gxTv_SdtTabsMenuData_TabsMenuDataItem_Menuurl;
		 
		protected short gxTv_SdtTabsMenuData_TabsMenuDataItem_Sections_N;
		protected GXBaseCollection<SdtTabsMenuData_TabsMenuDataItem_SectionsItem> gxTv_SdtTabsMenuData_TabsMenuDataItem_Sections = null; 



		#endregion
	}
	#region Rest interface
	[DataContract(Name=@"TabsMenuDataItem", Namespace="SIGMA")]
	public class SdtTabsMenuData_TabsMenuDataItem_RESTInterface : GxGenericCollectionItem<SdtTabsMenuData_TabsMenuDataItem>, System.Web.SessionState.IRequiresSessionState
	{
		public SdtTabsMenuData_TabsMenuDataItem_RESTInterface( ) : base()
		{
		}

		public SdtTabsMenuData_TabsMenuDataItem_RESTInterface( SdtTabsMenuData_TabsMenuDataItem psdt ) : base(psdt)
		{
		}

		#region Rest Properties
		[DataMember(Name="MenuId", Order=0)]
		public short gxTpr_Menuid
		{
			get { 
				return sdt.gxTpr_Menuid;

			}
			set { 
				sdt.gxTpr_Menuid = value;
			}
		}

		[DataMember(Name="MenuTitle", Order=1)]
		public  String gxTpr_Menutitle
		{
			get { 
				return StringUtil.RTrim( sdt.gxTpr_Menutitle);

			}
			set { 
				 sdt.gxTpr_Menutitle = value;
			}
		}

		[DataMember(Name="MenuDescription", Order=2)]
		public  String gxTpr_Menudescription
		{
			get { 
				return StringUtil.RTrim( sdt.gxTpr_Menudescription);

			}
			set { 
				 sdt.gxTpr_Menudescription = value;
			}
		}

		[DataMember(Name="MenuURL", Order=3)]
		public  String gxTpr_Menuurl
		{
			get { 
				return sdt.gxTpr_Menuurl;

			}
			set { 
				 sdt.gxTpr_Menuurl = value;
			}
		}

		[DataMember(Name="Sections", Order=4, EmitDefaultValue=false)]
		public GxGenericCollection<SdtTabsMenuData_TabsMenuDataItem_SectionsItem_RESTInterface> gxTpr_Sections
		{
			get {
				if (sdt.ShouldSerializegxTpr_Sections_GxSimpleCollection_Json())
					return new GxGenericCollection<SdtTabsMenuData_TabsMenuDataItem_SectionsItem_RESTInterface>(sdt.gxTpr_Sections);
				else
					return null;

			}
			set {
				value.LoadCollection(sdt.gxTpr_Sections);
			}
		}


		#endregion

		public SdtTabsMenuData_TabsMenuDataItem sdt
		{
			get { 
				return (SdtTabsMenuData_TabsMenuDataItem)Sdt;
			}
			set { 
				Sdt = value;
			}
		}

		[OnDeserializing]
		void checkSdt( StreamingContext ctx )
		{
			if ( sdt == null )
			{
				sdt = new SdtTabsMenuData_TabsMenuDataItem() ;
			}
		}
	}
	#endregion
}