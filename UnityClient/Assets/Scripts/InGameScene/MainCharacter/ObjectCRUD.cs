using System.Collections;
using UnityEngine;

public class ObjectCRUD : MonoBehaviour
{

    public LayerMask instantiateMask; // 레이캐스트 생성 마스크
    public LayerMask destroyMask; // 레이캐스트 삭제 마스크
    public GameObject onMyHand; // 레이캐스트로 생성할 오브젝트 프리팹

    public float maxInstantiateRange = 10.0f; // 레이캐스트 최대 범위 

    Camera cam;
    Vector3 ScreenCenter;

    


    private void Awake()
    {

    }

    // Start is called before the first frame update
    void Start()
    {
        cam = Camera.main;

        ScreenCenter = new Vector3(cam.pixelWidth / 2, cam.pixelHeight / 2);
        StartCoroutine(ObjectCreate());
        StartCoroutine(ObjectDelete());
    }

    // Update is called once per frame
    void Update()
    {

    }

    IEnumerator ObjectCreate()
    {
        while (Application.isPlaying)
        {
            if (Input.GetMouseButton(1)) // 오브젝트 생성 (Create)
            {
                Ray ray = cam.ScreenPointToRay(ScreenCenter);
                bool isHit = Physics.Raycast(ray, out RaycastHit hit, maxInstantiateRange, instantiateMask);

                // hit 성공 : hit 한 지점 + 물체의 높이
                // hit 실패 : 최대 raycast 길이만큼
                Vector3 spawn_point = isHit
                        ? hit.point + new Vector3(0, onMyHand.transform.localScale.y / 2, 0)
                        : cam.transform.position + cam.transform.forward * maxInstantiateRange;
                Instantiate(onMyHand, spawn_point, Quaternion.identity);
                yield return new WaitForSecondsRealtime(0.3f);
            }
            yield return null;
        }
    }
    IEnumerator ObjectDelete()
    {
        while (Application.isPlaying)
        {
            if (Input.GetMouseButton(0))
            {
                Ray ray = cam.ScreenPointToRay(ScreenCenter);
                bool isHit = Physics.Raycast(ray, out RaycastHit hit, maxInstantiateRange, destroyMask);
                if (isHit)
                {
                    Destroy(hit.transform.gameObject);
                    yield return new WaitForSecondsRealtime(0.3f);
                }
                else
                {
                    yield return null;
                }
                
            }
            yield return null;
        }
    }
}
