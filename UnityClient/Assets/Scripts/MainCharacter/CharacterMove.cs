using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class NewBehaviourScript : MonoBehaviour
{

    public Transform cameraTransform;
    public CharacterController characterController;

    public float moveSpeed = 10f;
    public float jumpSpeed = 10f;
    public float runSpeed = 2f;

    public float gravity = -20f;

    float yVelocity = 0;

    void Start()
    {
        
    }
    void Update()
    {
        float input_h = Input.GetAxis("Horizontal"); // A, DŰ �Է�
        float input_v = Input.GetAxis("Vertical"); // W, SŰ �Է�

        Vector3 moveDirection = new Vector3(input_h, 0, input_v);
        moveDirection = cameraTransform.TransformDirection(moveDirection);
        
        moveDirection *= moveSpeed;
        if (Input.GetKey(KeyCode.LeftShift)) // �� ����Ʈ = �޸���
        {
            moveDirection *= runSpeed;
        }
   
        if (characterController.isGrounded) // ĳ���Ͱ� ���� �پ����� ��
        {
            yVelocity = 0;
            if (Input.GetKeyDown(KeyCode.Space)) // �����̽��� ������ ����
            {
                yVelocity = jumpSpeed;
            }

        }

        yVelocity += (gravity * Time.deltaTime);

        moveDirection.y = yVelocity;

        characterController.Move(moveDirection * Time.deltaTime);

    }
}
