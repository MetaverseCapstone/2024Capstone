using System.Collections;
using UnityEngine;

public class ObjectCRUD : MonoBehaviour
{

    public LayerMask instantiateMask; // ����ĳ��Ʈ ���� ����ũ
    public LayerMask destroyMask; // ����ĳ��Ʈ ���� ����ũ
    public GameObject onMyHand; // ����ĳ��Ʈ�� ������ ������Ʈ ������

    public float maxInstantiateRange = 10.0f; // ����ĳ��Ʈ �ִ� ���� 

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
            if (Input.GetMouseButton(1)) // ������Ʈ ���� (Create)
            {
                Ray ray = cam.ScreenPointToRay(ScreenCenter);
                bool isHit = Physics.Raycast(ray, out RaycastHit hit, maxInstantiateRange, instantiateMask);

                // hit ���� : hit �� ���� + ��ü�� ����
                // hit ���� : �ִ� raycast ���̸�ŭ
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
