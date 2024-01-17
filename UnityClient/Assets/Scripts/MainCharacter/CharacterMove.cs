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
        float input_h = Input.GetAxis("Horizontal"); // A, D키 입력
        float input_v = Input.GetAxis("Vertical"); // W, S키 입력

        Vector3 moveDirection = new Vector3(input_h, 0, input_v);
        moveDirection = cameraTransform.TransformDirection(moveDirection);
        
        moveDirection *= moveSpeed;
        if (Input.GetKey(KeyCode.LeftShift)) // 좌 쉬프트 = 달리기
        {
            moveDirection *= runSpeed;
        }
   
        if (characterController.isGrounded) // 캐릭터가 땅에 붙어있을 때
        {
            yVelocity = 0;
            if (Input.GetKeyDown(KeyCode.Space)) // 스페이스바 누르면 점프
            {
                yVelocity = jumpSpeed;
            }

        }

        yVelocity += (gravity * Time.deltaTime);

        moveDirection.y = yVelocity;

        characterController.Move(moveDirection * Time.deltaTime);

    }
}
