using System.Collections;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;

public class QuickSlotLayout : MonoBehaviour
{
	[SerializeField] protected float _space;
	public float space
	{
		get { return _space; }
		set { _space = value; AlignLayout(); }
	}

	[SerializeField] protected Vector2 _slotSize;
	public Vector2 slotSize
	{
		get { return _slotSize; }
		set { _slotSize = value; AlignLayout(); }
	}

	protected QuickSlot[] quickSlots;

	protected RectTransform _rectTransform;
	public RectTransform rectTransform { get { if (_rectTransform == null) _rectTransform = GetComponent<RectTransform>(); return _rectTransform; } }


	public virtual void AlignLayout()
	{
		float preferWidth = 0;
		float slotX = 0;
		float preferHeight = _slotSize.y;

		int childCount = transform.childCount;

		if (quickSlots == null || quickSlots.Length != childCount)
		{
			quickSlots = new QuickSlot[childCount];
			for (int i = 0; i < childCount; i++)
			{
				quickSlots[i] = transform.GetChild(i).GetComponent<QuickSlot>();
			}
		}

		for (int i = 0; i < quickSlots.Length; i++)
		{
			quickSlots[i].SetRect();
			quickSlots[i].rectTransform.sizeDelta = _slotSize;
			quickSlots[i].rectTransform.anchoredPosition = new Vector2(slotX, 0);

			preferWidth = GetPrefeWidth(preferWidth, i);
			slotX = GetSlotX(slotX, i);
		}
		preferWidth -= _space;

		rectTransform.sizeDelta = new Vector2(preferWidth, preferHeight);

	}

	protected virtual float GetPrefeWidth(float prevWidth, int curIndex)
	{
		return prevWidth + _slotSize.x + _space;
	}
	protected virtual float GetSlotX(float prevX, int curIndex)
	{
		return prevX + slotSize.x + _space;
	}
}