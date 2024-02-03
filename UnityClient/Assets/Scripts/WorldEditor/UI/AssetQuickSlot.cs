using System;
using System.Collections;
using System.Collections.Generic;
using UnityEditor;
using UnityEngine;
using UnityEngine.EventSystems;

namespace WorldEditor
{
	public class AssetQuickSlot : QuickSlot, IDropHandler, IBeginDragHandler, IDragHandler, IEndDragHandler
	{
		AssetItem targetAssetItem;
		public AssetItem TargetAssetItem { get { return targetAssetItem; } }

		private AssetQuickSlotLayout layout;

		public void OnDrop(PointerEventData eventData)
		{
			Debug.Log("QuickSlot DropDown");
			var item = WorldEditorController.Instance.AssetItemCursor.PopAssetItem();
			if (item != null && item != targetAssetItem)
			{

				var prevQuickSlot = Array.Find(layout.QuickSlots, element => element.targetAssetItem == item && element != this);

				if(prevQuickSlot != null)
				{
					prevQuickSlot.SetAsset(targetAssetItem);
				}

				SetAsset(item);
			}
		}
		public void OnDrag(PointerEventData eventData)
		{
			if (targetAssetItem == null) return;
			WorldEditorController.Instance.DragAssetItemCursor(targetAssetItem, eventData.position);
		}

		public void OnBeginDrag(PointerEventData eventData)
		{
			if (targetAssetItem == null) return;
			WorldEditorController.Instance.DragAssetItemCursor(targetAssetItem, eventData.position);

		}

		public void OnEndDrag(PointerEventData eventData)

		{
			WorldEditorController.Instance.EndDragAssetItemCursor();
		}

		void Start()
		{
			SetAsset(null);
		}

		public void SetAsset(AssetItem asset)
		{
			targetAssetItem = asset;
			SetItemImage(asset?.thumbnail ?? null);
		}

		public void SetSlotLayout(AssetQuickSlotLayout _layout)
		{
			layout = _layout;
		}
	}
}

