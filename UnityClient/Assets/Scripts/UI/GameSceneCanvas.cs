using System;
using System.Collections;
using System.Collections.Generic;
using System.Net.Sockets;
using System.Text;
using System.Threading;
using UnityEditor.Experimental.GraphView;
using UnityEngine;

public class GameSceneCanvas : MonoBehaviour
{

    public TcpPopup tcpPopup;
    public UploadPopup uploadPopup;
    public TcpClient socket;

    private string ip = "192.168.50.140";
    private int port = 8000;

    private bool popup = false;

    // Start is called before the first frame update
    void Start()
    {
        Thread connectThread = new Thread(new ThreadStart(ConnectToTcpServer));
        connectThread.IsBackground = false;
        connectThread.Start();
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetKeyDown(KeyCode.T))
        {
            this.tcpPopup.closeBtn.onClick.AddListener(() =>
            {
                this.tcpPopup.Close();
                popup = false;
            });
            this.tcpPopup.Open();
            popup = true;
        }

        if (Input.GetKeyDown(KeyCode.U))
        {
            this.uploadPopup.closeBtn.onClick.AddListener(() =>
            {
                this.uploadPopup.Close();
            });
            this.uploadPopup.Open();
        }

    }

    public void ConnectToTcpServer()
    {

        try
        {
            socket = new TcpClient(ip, port);
            Debug.Log("Connected!");
            
        }
        catch (Exception e)
        {
            Debug.Log("Error : " + e);
        }
    }

    private void recvMessage(TcpClient socket)
    {
        while (true)
        {
            try
            {
                NetworkStream stream = socket.GetStream();
                if (stream.CanRead)
                {
                    byte[] buffer = new byte[4098];
                    int bytes = stream.Read(buffer, 0, buffer.Length);
                    if (bytes <= 0) { continue; }
                    string message = Encoding.UTF8.GetString(buffer, 0, bytes);
                    if (message != null)
                    {
                        if (popup)
                        {
                            tcpPopup.responseTxt.text = message;
                            tcpPopup.responseTxt.color = Color.black;
                            tcpPopup.responseTxt.gameObject.SetActive(true);
                        }
                        else
                        {
                            tcpPopup.responseTxt.gameObject.SetActive(false);
                        }
                    }
                }
            }
            catch (Exception e)
            {
                Debug.Log("recv message exception : " + e);
                if (popup)
                {
                    tcpPopup.responseTxt.text = "Error : " + e;
                    tcpPopup.responseTxt.color = Color.red;
                    tcpPopup.responseTxt.gameObject.SetActive(true);
                }
                else
                {
                    tcpPopup.responseTxt.gameObject.SetActive (false);
                }
            }
        }
    }

}
