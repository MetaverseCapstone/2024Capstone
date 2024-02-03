using System.Collections;
using System.Collections.Generic;
using UnityEditor;
using UnityEngine;

[CustomEditor(typeof(QuickSlotLayoutBase), true)]
public class QuickSlotLayoutEditor : Editor
{
	public override void OnInspectorGUI()
	{
		base.OnInspectorGUI();

		QuickSlotLayoutBase quickSlotLayout = (QuickSlotLayoutBase)target;

		quickSlotLayout.AlignLayout();
	}
}
