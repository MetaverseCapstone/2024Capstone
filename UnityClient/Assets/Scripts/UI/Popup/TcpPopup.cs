using System;
using System.Net.Sockets;
using System.Text;
using System.Threading;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class TcpPopup : MonoBehaviour
{
    public Button closeBtn;

    public TMP_InputField commandField;
    public Button enterBtn;
    public TMP_Text responseTxt;

    public GameSceneCanvas gameSceneCanvas;
    public TcpClient socket;

    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
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


    public void OnClickEnter()
    {
        TcpClient socket = gameSceneCanvas.socket;
        sendMessage(socket, commandField.text);
    }

    


    private void sendMessage(TcpClient socket, string message)
    {
        if (socket == null)
        {
            Debug.Log("socket null!");
            return;
        }
        try
        {
            NetworkStream stream = socket.GetStream();
            if (stream.CanWrite)
            {
                // 문자열 -> 바이트로 변경
                byte[] buffer = Encoding.UTF8.GetBytes(message);
                stream.Write(buffer, 0, buffer.Length);

                Debug.Log("[Client] : " + message);
            }
        }
        catch (SocketException e)
        {
            Debug.Log("send message exception : " + e);
        }
    }

    

}
