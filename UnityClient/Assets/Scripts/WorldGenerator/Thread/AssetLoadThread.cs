using Assets.Scripts.Clean;
using System.Collections;
using UnityEngine;
using System.Collections.Generic;

namespace Assets.Scripts.Thread
{
	public class AssetLoadThread : Gltf_Thread_Manager
	{
		private Coroutine _coroutine;

		public void Start()
		{
			ThreadStart(_coroutine, LoadTasks);
		}

		// 작업을 처리하는 메서드
		protected override IEnumerator ProceedTask(LoadTask loadTask)
		{
			// Task가 로드 과정을 거치지 않은 경우
			if (!loadTask.Load_success)
			{
				Debug.Log("Loading...	" + loadTask.ast_id);
				yield return StartCoroutine(LoadGltf(loadTask, glb_data[loadTask.ast_id])); // 에셋 로드
				
				// 로드 실패 혹은 취소한 경우
				if (loadTask.Fail_Stop)
				{
					Debug.LogError("Asset Load Fail or Cancel");
					try
					{
						LoadTasks.RemoveAt(0); // 로드 Task 삭제
					}
					catch { }
				}
			}

			
			if (!Get_ReLoad()) // 리로드를 요청하지 않았을 경우
			{
				// 로드 성공한 경우
				if (loadTask.Load_success)
				{
					WearTasks.Add(loadTask); // Wear 쓰레드에 해당 작업 부여

					Debug.Log("Asset Load Success && Push WearTasks	:" + loadTask.ast_id);
				}
				try
				{
					LoadTasks.RemoveAt(0); // Load 쓰레드에서 해당 작업 삭제
				}
				catch { }
			}
			else // 리로드를 요청한 경우
			{
				LoadTasks = new List<LoadTask>(); // Load 쓰레드의 작업 초기화
			}
		}
	}
}