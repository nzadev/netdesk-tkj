# NetDesk TKJ
### Sistem Manajemen Infrastruktur Jaringan & IT Helpdesk Troubleshooting

Aplikasi web dashboard terpadu yang dirancang untuk mendukung operasional laboratorium Teknik Komputer dan Jaringan (TKJ) serta kebutuhan administrasi kearsipan digital perkantoran/instansi. Dikembangkan oleh **Muhammad Fariz Ramadhan** (Siswa Terbaik TKJ SMK Kartika X-1, Praktik Kerja Lapangan di Direktorat Jenderal Pemasyarakatan - DITJENPAS).

---

## Modul & Fitur Utama

- **Executive Operations Dashboard:**
  - KPI metrik real-time: Total Aset IT, Node Online, Tiket Troubleshooting Aktif, dan Tingkat Penyelesaian.
  - Ringkasan topologi infrastruktur utama (MikroTik Core, Switch Cisco, AP UniFi, Server NAS).
  - Visualisasi simulasi latency & ICMP round-trip time (RTT) berbasis Canvas grafis.
  - Alokasi subnetting VLAN 10 (Server), VLAN 20 (Lab 1), dan VLAN 30 (Kearsipan Ditjenpas).

- **Live ICMP Node Monitor:**
  - Pemantauan berkala status online/degraded perangkat jaringan.
  - Pengecekan latency (ms), packet loss (%), dan estimasi status kabel fisik (RJ45).
  - Fitur "Ping All Nodes" dan uji probe per perangkat secara instan.

- **Manajemen Inventaris Aset IT:**
  - Pencatatan Router, Switch, Server/NAS, Access Point, PC Client, dan Printer/Scanner Kearsipan.
  - Lengkap dengan IP Address, MAC Address, Lokasi Fisik, Penanggung Jawab, dan Spesifikasi Teknis.
  - Cetak Label QR Identifikasi Fisik Perangkat.
  - Ekspor data inventaris ke format CSV.

- **IT Helpdesk & Troubleshooting Log:**
  - Siklus penanganan tiket (Open, In Progress, Resolved).
  - Klasifikasi tingkat urgensi (Low, Medium, High, Critical) serta kategori masalah.
  - Log tindakan teknisi nyata (crimping kabel UTP, perbaikan SMB file share, konfigurasi VLAN).
  - Cetak Laporan Servis/Audit berkas PDF.

- **TKJ Pro Toolbox & Subnet Calculator:**
  - Kalkulator Subnet IPv4 (VLSM / CIDR /16 sampai /30) menghitung Network ID, Netmask, Broadcast ID, Wildcard, dan Usable Host.
  - Panduan interaktif urutan warna crimping kabel UTP (RJ45) standar T-568A dan T-568B.
  - Lembar referensi port protokol jaringan standar industri (SSH 22, DNS 53, DHCP 67/68, SMB 445, Winbox 8291).

---

## Cara Menjalankan

Aplikasi ini dibangun murni menggunakan standar web modern (HTML5, Vanilla CSS Glassmorphic, Vanilla JavaScript) tanpa dependensi runtime pihak ketiga.

Cukup buka file `index.html` langsung di browser, atau gunakan live server sederhana:

```bash
cd ~/Projects/netdesk-tkj
npx serve .
# atau
python3 -m http.server 3000
```
Buka browser di `http://localhost:3000`.
