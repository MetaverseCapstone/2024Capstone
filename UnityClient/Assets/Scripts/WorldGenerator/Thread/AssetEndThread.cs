using Assets.Scripts.WorldGenerator.Thread;
using System.Collections;
using System.Collections.Generic;

namespace Assets.Scripts.Thread
{
	public class AssetEndThread : GltfThread
	{
		protected List<LoadTask> EndTasks = new List<LoadTask>();
	
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
				ThreadManager.Get_Thread(0).TaskInsert(endTask); // 작업 재시도
			}
			yield return null;
		}

		protected override void Set_Tasks()
		{
			Tasks = EndTasks;
		}
	}
}