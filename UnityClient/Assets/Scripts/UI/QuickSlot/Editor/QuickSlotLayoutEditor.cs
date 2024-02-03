using System.Collections;
using System.Collections.Generic;
using UnityEditor;
using UnityEngine;

[CustomEditor(typeof(QuickSlotLayout), true)]
public class QuickSlotLayoutEditor : Editor
{
	public override void OnInspectorGUI()
	{
		base.OnInspectorGUI();

		QuickSlotLayout quickSlotLayout = (QuickSlotLayout)target;

		quickSlotLayout.AlignLayout();
	}
}
