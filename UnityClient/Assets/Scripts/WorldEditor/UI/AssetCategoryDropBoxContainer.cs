using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace WorldEditor
{
	public class AssetCategoryDropBoxContainer : MonoBehaviour
	{
		[SerializeField] AssetCategoryDropBox assetDropBoxPrefab;
		[SerializeField] AssetCategoryDropBox[] assetDropBoxes = new AssetCategoryDropBox[0];

		[SerializeField] private Transform _container;

		AssetCategory[] assetCategories;

		AssetCategory selectedCategory;

		int curDepth = 0;

		// Start is called before the first frame update
		void Start()
		{

		}

		public void SetCategory(AssetCategory[] _assetCategories)
		{
			assetCategories = _assetCategories;
		}

		public void RequireChildCategory(int depth, AssetCategory[] assetCategories )
		{
			// Depth ũ�⸸ŭ DropBox ����
			if (assetDropBoxes.Length < depth)
			{
				AssetCategoryDropBox[] newArray = new AssetCategoryDropBox[depth];
				Array.Copy(assetDropBoxes, newArray, assetDropBoxes.Length);
				for (int i = assetDropBoxes.Length - 1; i < depth; i++)
				{
					newArray[i] = Instantiate(assetDropBoxPrefab, _container).InitCategoryContainer(this);
				}
			}

			for (int i = 0; i < assetDropBoxes.Length; i++)
			{
				if (i < depth)
				{
					assetDropBoxes[i].SetActive(true);
				}
				else
				{
					assetDropBoxes[i].SetActive(false);
				}
			} 

			assetDropBoxes[depth].SetActive(true);
			assetDropBoxes[depth].SetCategoryArray(assetCategories, depth);
		}

		public void ClearChildCategory(int curDepth)
		{
			int nextDepth = curDepth + 1;
			for (int i = 0; i < assetDropBoxes.Length; i++)
			{
				if (i < nextDepth)
				{
					assetDropBoxes[i].SetActive(true);
				}
				else
				{
					assetDropBoxes[i].SetActive(false);
				}
			}
		}

		//public void AlignCategoryContainer()
		//{
		//	// ������ ī�װ��� Depth �˾Ƴ���
		//	if (selectedCategory == null) return;
		//	int depth = 0;
		//	do
		//	{
		//		depth++;
		//	} while(selectedCategory.parentAssetCategory != null);

		//	// Depth ũ�⸸ŭ DropBox ����
		//	if (assetDropBoxes == null || assetDropBoxes.Length < depth )
		//	{
		//		AssetCategoryDropBox[] newArray = new AssetCategoryDropBox[depth];
		//		if(assetDropBoxes != null)
		//		{
		//			Array.Copy(assetDropBoxes, newArray, assetDropBoxes.Length);
		//			for(int i = assetDropBoxes.Length -1; i < depth; i++)
		//			{
		//				newArray[i] = Instantiate(assetDropBoxPrefab, container);
		//			}
		//		}
		//	}

		//	for(int i = 0;i<assetDropBoxes.Length;i++)
		//	{
		//		if(i<depth)
		//		{
		//			assetDropBoxes[i].SetActive(true);
		//			/////////
		//		}
		//              else
		//              {
		//			assetDropBoxes[i].SetActive(false);
		//              }
		//          }
		//}

	}
}

