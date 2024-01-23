using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using TMPro;

public class RegisterPopup : MonoBehaviour
{
    public Button closeBtn;
    public TMP_InputField idField;
    public TMP_InputField emailField;
    public TMP_InputField pwField;
    public TMP_Text successfulTxt;
    public TMP_Text failText;

    private string id;
    private string email;
    private string pw;

    public void Awake()
    {
        
    }

    public void Start()
    {
        
    }

    public void Update()
    {
        
    }


    public void Open()
    {
        this.gameObject.SetActive(true);
    }

    public void Close()
    {
        this.gameObject.SetActive(false);
    }

    public void OnClickRegister()
    {
        Debug.Log("Register Clicked");
    }

    public bool findUserID(string id)
    {
        return true;
    }
}
