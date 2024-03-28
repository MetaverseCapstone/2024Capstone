using System.Collections;
using System.Collections.Generic;
using UnityEngine;


namespace User.Script
{
    [System.Serializable]

    public class UserData
    {
        private int priId; // DB���� �ڵ� �����Ǵ� primary key �ǹ�
        public string id; // ���̵�
        public string pw; // ��й�ȣ

        public UserData()
        {

        }
        public UserData(string _id, string _pw)
        {
            this.id = _id;
            this.pw = _pw;
        }

    }
}

