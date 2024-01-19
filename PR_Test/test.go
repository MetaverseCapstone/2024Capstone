package main

import (
	"database/sql"
	"fmt"
	"log"
	"strconv"

	_ "github.com/go-sql-driver/mysql"
	"github.com/miekg/dns"
)

// var records = map[string]string{
// 	"test.service.":      "172.17.134.185",
// 	"hgtest.service.":    "192.168.50.96",
// 	"simlab417.service.": "192.168.0.95",
// }


)

var connectingString = fmt.Sprintf("%s:%s@tcp(%s:%s)/%s", user, password, host, port, database)

func parseQuery(m *dns.Msg) {
	for _, q := range m.Question {
		switch q.Qtype {
		case dns.TypeA:
			log.Printf("Query for %s\n", q.Name)

			// MariaDB 연결
			conn, dbErr := sql.Open("mysql", connectingString)

			// conn, dbErr := sql.Open("mysql", "dnsmanager:1111@tcp(192.168.50.96:3306)/dns")

			// 연결 예외처리
			if dbErr != nil {
				fmt.Println(dbErr)
				// os.Exit(1)
			}
			var ip_address string

			dbErr = conn.QueryRow("SELECT ip_address FROM dnsmanage WHERE DOMAIN_NAME = ?", q.Name).Scan(&ip_address)

			if dbErr != nil {
				// log.Fatal(dbErr)
				fmt.Printf("도메인이름이 없습니다. : %s", q.Name)

			}

			if ip_address != "" {
				rr, err := dns.NewRR(fmt.Sprintf("%s A %s", q.Name, ip_address))
				if err == nil {
					m.Answer = append(m.Answer, rr)
				}
			}
		}
	}
}

func handleDnsRequest(w dns.ResponseWriter, r *dns.Msg) {
	m := new(dns.Msg)

	m.SetReply(r)

	m.Compress = false

	switch r.Opcode {
	case dns.OpcodeQuery:
		parseQuery(m)
	}

	w.WriteMsg(m)
}

func main() {

	// // MariaDB 연결
	// conn, dbErr := sql.Open("mysql", connectingString)

	// // 연결 예외처리
	// if dbErr != nil {
	// 	fmt.Println(dbErr)
	// 	os.Exit(1)
	// }

	// // DB 조회 쿼리문
	// rows, dbErr := conn.Query("SELECT DOMAIN_NAME, IP_ADDRESS FROM dnsmanage")

	// // 조회 예회처리
	// if dbErr != nil {
	// 	fmt.Println(dbErr)
	// 	os.Exit(1)
	// }

	// // 쿼리 반환값 처리
	// for rows.Next() {
	// 	var domain_name string
	// 	var ip_address string

	// 	rows.Scan(&domain_name, &ip_address)
	// 	fmt.Printf("도메인이름 : %s, ip주소 : %s\n", domain_name, ip_address)

	// }

	// attach request handler func
	//
	dns.HandleFunc("service.", handleDnsRequest)
	dns.HandleFunc("device.", handleDnsRequest)
	dns.HandleFunc("machine.", handleDnsRequest)

	// start server
	port := 23155
	server := &dns.Server{Addr: ":" + strconv.Itoa(port), Net: "udp"}
	log.Printf("Starting at %d\n", port)
	err := server.ListenAndServe()
	defer server.Shutdown()
	if err != nil {
		log.Fatalf("Failed to start server: %s\n ", err.Error())
	}
}

// Command
// dig @localhost -p 53 test.service
// dig @localhost -p 23155 test1.service +short
