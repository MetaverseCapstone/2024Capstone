using Assets.Scripts.Clean;
using System.Collections;
using UnityEngine;

namespace Assets.Scripts.Thread
{
	public class AssetEndThread : Gltf_Thread_Manager
	{
		private Coroutine _coroutine;

		public void Start()
		{
			ThreadStart(_coroutine, EndTasks);
		}

		// 작업을 처리하는 메서드
		protected override IEnumerator ProceedTask(LoadTask endTask)
		{
			// 작업이 모두 완료되었을 경우
			if (endTask.All_success)
			{
				EndTasks.RemoveAt(0); // End 쓰레드에서 해당 작업 삭제
			}
			else
			{
				endTask.TaskInit(); // 작업 초기화
				DownTasks.Add(endTask); // 작업 재시도
			}
			yield return null;
		}
	}
}