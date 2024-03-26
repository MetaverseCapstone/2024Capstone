using Assets.Scripts.Routine;
using Assets.Scripts.WorldGenerator.Routine;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using UnityEngine;

namespace Assets.Scripts.Routine
{
	public class Gltf_Routine_Manager : MonoBehaviour
	{
		private static readonly List<GltfRoutine> AssetRoutines = new List<GltfRoutine>(); // Routine를 관리하는 리스트

		GameObject main;

		private void Start()
		{
			main = GameObject.FindWithTag("Player");

			GltfRoutine.Set_Environment();
			GltfRoutine.Set_Routine_Manager(main.GetComponent<Gltf_Routine_Manager>());

			AssetRoutines.Add(main.AddComponent<AssetDownRoutine>());
			AssetRoutines.Add(main.AddComponent<AssetLoadRoutine>());
			AssetRoutines.Add(main.AddComponent<AssetWearRoutine>());
			AssetRoutines.Add(main.AddComponent<AssetEndRoutine>());

			for (int i = 0; i < AssetRoutines.Count; i++)
			{
				RoutineStart(Get_Routine(i));
			}
		}

		// Routine를 시작하는 메서드
		public void RoutineStart(GltfRoutine Routine)
		{
			Coroutine cor = StartCoroutine(Routine.GltfTaskCoroutine());
			Routine.SetCoroutine(cor);
		}

		// Routine를 멈추는 메서드
		public void RoutineStop(GltfRoutine Routine)
		{
			StopCoroutine(Routine.GetCoroutine());
		}

		public GltfRoutine Get_Routine(int index)
		{
			return AssetRoutines[index];
		}

		// 리로드 메서드
		public IEnumerator RoutineInit()
		{
			GltfRoutine.Set_ReLoad();
			yield return new WaitUntil(() => AssetRoutines[0].TaskCount() == 0
											&& AssetRoutines[0].TaskCount() == 0
											&& AssetRoutines[0].TaskCount() == 0); // Routine의 모든 작업이 취소되기를 기다림
		}

		public void LoadTaskInsert(LoadTask task)
		{
			Get_Routine(0).TaskInsert(task);
		}
	}
}