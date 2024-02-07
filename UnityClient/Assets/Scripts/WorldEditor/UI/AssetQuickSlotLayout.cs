using System.Collections;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;

namespace WorldEditor
{
	public class AssetQuickSlotLayout : QuickSlotLayout<AssetQuickSlot>
	{
		[SerializeField] protected float _rightSpace;

		public float rightSpace
		{
			get { return _rightSpace; }
			set { _rightSpace = value; AlignLayout(); }
		}

		public QuickSlot RightQuickSlot
		{
			get { return quickSlots.Last(); }
		}

		protected override float GetPrefeWidth(float prevWidth, int curIndex)
		{
			if (curIndex < quickSlots.Length - 1)
			{
				return prevWidth + _slotSize.x + _space;
			}

			return prevWidth;
		}
		protected override float GetSlotX(float prevX, int curIndex)
		{
			if (curIndex < quickSlots.Length - 1)
			{
				return prevX + _slotSize.x + (curIndex == quickSlots.Length - 2 ? _rightSpace : _space);
			}

			return prevX;
		}

		private void InitSlots()
		{
			for(int i =0;i<quickSlots.Length;i++)
			{
				quickSlots[i].SetSlotLayout(this);
			}
		}

		public override void AlignLayout()
		{
			base.AlignLayout();
			InitSlots();
		}
	}
}

