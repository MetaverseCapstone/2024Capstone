using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace WorldEditor
{
	public class AssetCategory
	{
		public int id;
		public string categoryName;
		public string categoryCode;
		public AssetCategory parentAssetCategory = null;
		public List<AssetCategory> childAssetCategories = null;

		AssetCategory(
			int _id,
			string _categoryName,
			string _categoryCode,
			AssetCategory _parentAssetCategory = null
		)
		{
			id = _id;
			categoryName = _categoryName;
			categoryCode = _categoryCode;

			parentAssetCategory = _parentAssetCategory;

			if(parentAssetCategory.childAssetCategories == null || parentAssetCategory.childAssetCategories.Count == 0)
				parentAssetCategory.childAssetCategories = new List<AssetCategory>();
			parentAssetCategory.childAssetCategories.Add(this);
		}

		AssetCategory(RawAssetCategory raw, AssetCategory parent = null)
		{
			categoryName = raw.categoryName;
			categoryCode = raw.categoryCode;
			id = raw.id;
			if(parent != null) parentAssetCategory = parent;
			if(raw.child.Length>0)
			{
				childAssetCategories = new List<AssetCategory>(raw.child.Length);
				for(int i =0;i<childAssetCategories.Count;i++)
				{
					childAssetCategories[0] = new AssetCategory(raw.child[i], this);
				}
			}
		}
	}
}

