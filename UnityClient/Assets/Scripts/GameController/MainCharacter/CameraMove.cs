using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CameraMove : MonoBehaviour
{
    float sensitivity;
    float rotationY;

    bool cursorLock = false;

    GameObject parentCharacter;

    private void Awake()
    {
        // �θ� ��ü (ĳ����) ��������
        parentCharacter = Camera.main.transform.parent.gameObject;
        // ĳ������ sensitivity�� �״�� ������
        sensitivity = parentCharacter.GetComponent<CharacterMove>().sensitivity;
    }

    void Start()
    {
        
    }

    void Update()
    {
        CameraRotationY();
        if (Input.GetKeyDown(KeyCode.Tab))
        {
            CursorOnOff();
        }
    }

    void CameraRotationY()
    {
        float mouseY = Input.GetAxis("Mouse Y");

        rotationY += mouseY * sensitivity * Time.deltaTime;

        Vector3 parentAngle = parentCharacter.transform.eulerAngles;

        // ī�޶� ��, �Ʒ��� ȸ����ų �� ������ ����
        rotationY = rotationY > 35f ? 35f : rotationY;
        rotationY = rotationY < -30f ? -30f : rotationY;

        transform.eulerAngles = new Vector3(-rotationY, parentAngle.y, 0);
    }

    void CursorOnOff()
    {
        // cursor on -> off
        if (cursorLock)
        {
            Cursor.visible = true;
            Cursor.lockState = CursorLockMode.None;
            Cursor.visible = false;
        }
        // cursor off -> on
        else if (!cursorLock)
        {
            Cursor.visible = false;
            Cursor.lockState = CursorLockMode.Locked;
            cursorLock = true;
        }
    }
}
