using System.Collections;
using UnityEngine;
using System.Collections.Generic;
using Assets.Scripts.WorldGenerator.Routine;

namespace Assets.Scripts.Routine
{
	public class AssetWearRoutine : GltfRoutine
	{
		protected Queue<LoadTask> WearTasks = new Queue<LoadTask>();


		// 작업을 처리하는 메서드
		protected override IEnumerator ProceedTask(LoadTask wearTask)
		{
			// Task가 에셋 적용 과정을 거치지 않은 경우
			if (!wearTask.Wear_success)
			{
				Debug.Log("Wearing...	" + wearTask.ast_id);
				yield return StartCoroutine(WearGltf(wearTask)); // 에셋 적용

				// 에셋 적용 실패 혹은 취소한 경우
				if (wearTask.Fail_Stop)
				{
					Debug.LogError("Asset Wear Fail or Cancel");
				}
			}

			if (!Get_ReLoad()) // 리로드를 요청하지 않았을 경우
			{
				if (wearTask.Wear_success)
				{
					wearTask.All_success = true;
					RoutineManager.Get_Routine(3).TaskInsert(wearTask); // End Routine에 해당 작업 부여

					Debug.Log("Asset Wear Success && Push EndTasks	:" + wearTask.ast_id);
				}
			}
			else // 리로드를 요청한 경우
			{
				WearTasks.Clear(); // Wear Routine의 작업 초기화
			}
		}

		protected override void Set_Tasks()
		{
			Tasks = WearTasks;
		}
	}
}