using System.Collections;
using UnityEngine;
using System.Collections.Generic;
using Assets.Scripts.WorldGenerator.Thread;

namespace Assets.Scripts.Thread
{
	public class AssetDownThread : GltfThread
	{
		private List<LoadTask> DownTasks = new List<LoadTask>();

		// 작업을 처리하는 메서드
		protected override IEnumerator ProceedTask(LoadTask downTask)
		{
			// Task가 다운로드 과정을 거치지 않은 경우
			if (!downTask.Down_success)
			{
				Debug.Log("DownLoad...	" + downTask.ast_id);
				yield return StartCoroutine(DownGltf(downTask)); // 에셋 다운로드

				// 다운로드 실패 혹은 취소한 경우
				if (downTask.Fail_Stop)
				{
					Debug.LogError("Asset Download Fail or Cancel");
					try
					{
						DownTasks.RemoveAt(0); // 다운로드 Task 삭제
					}
					catch { }
				}
			}

			if (!Get_ReLoad()) // 리로드를 요청하지 않았을 경우
			{
				// 다운로드 성공한 경우
				if (downTask.Down_success)
				{
					ThreadManager.Get_Thread(1).TaskInsert(downTask); // Load 쓰레드에 해당 작업 부여

					Debug.Log("Asset Down Success && Push LoadTasks	:" + downTask.ast_id);
				}
				try
				{
					DownTasks.RemoveAt(0); // Down 쓰레드에서 해당 작업 삭제
				}
				catch { }
			}
			else // 리로드를 요청한 경우
			{
				DownTasks = new List<LoadTask>(); // Down 쓰레드의 작업 초기화
			}
		}

		protected override void Set_Tasks()
		{
			Tasks = DownTasks;
		}
	}
}