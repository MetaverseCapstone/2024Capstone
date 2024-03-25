using System.Collections;
using UnityEngine;
using System.Collections.Generic;
using Assets.Scripts.WorldGenerator.Thread;

namespace Assets.Scripts.Thread
{
	public class AssetWearThread : GltfThread
	{
		protected List<LoadTask> WearTasks = new List<LoadTask>();


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
					try
					{
						WearTasks.RemoveAt(0); // 에셋 적용 Task 삭제
					}
					catch { }
				}
			}

			if (!Get_ReLoad()) // 리로드를 요청하지 않았을 경우
			{
				if (wearTask.Wear_success)
				{
					wearTask.All_success = true;
					ThreadManager.Get_Thread(3).TaskInsert(wearTask); // End 쓰레드에 해당 작업 부여

					Debug.Log("Asset Wear Success && Push EndTasks	:" + wearTask.ast_id);
				}
				try
				{
					WearTasks.RemoveAt(0); // Wear 쓰레드에서 해당 작업 삭제
				}
				catch { }
			}
			else // 리로드를 요청한 경우
			{
				WearTasks = new List<LoadTask>();
			}
		}

		protected override void Set_Tasks()
		{
			Tasks = WearTasks;
		}
	}
}