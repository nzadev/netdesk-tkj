/**
 * NETDESK TKJ - IT Infrastructure & Support Management
 * Lead Developer: Muhammad Fariz Ramadhan (Siswa Terbaik TKJ SMK Kartika X-1)
 */

(function () {
  'use strict';

  // --- DEFAULT SEED DATA ---
  const INITIAL_ASSETS = [
    {
      id: 'ast-1',
      tag: 'NET-RTR-01',
      name: 'MikroTik CCR-1009-7G-1C-1S+ (Core Gateway)',
      category: 'Router',
      status: 'Active',
      ip: '192.168.10.1',
      mac: '48:8F:5A:21:40:9B',
      location: 'Server Room',
      admin: 'Fariz Ramadhan (TKJ)',
      specs: '9-Core Tilera CPU, 2GB RAM, 8x GbE, 1x SFP+, RouterOS v7.14, Dual Redundant PSU',
      latency: 1.2,
      loss: '0%',
      lastChecked: 'Baru saja'
    },
    {
      id: 'ast-2',
      tag: 'NET-SW-01',
      name: 'Cisco Catalyst 2960-X 48-Port PoE+ (Distribusi Lab 1)',
      category: 'Switch',
      status: 'Active',
      ip: '192.168.10.2',
      mac: '00:2A:6A:11:8F:33',
      location: 'Server Room',
      admin: 'Fariz Ramadhan (TKJ)',
      specs: '48-Port Gigabit PoE 370W, 4x 1G SFP, VLAN 10/20/30 Configured, Stackable',
      latency: 1.4,
      loss: '0%',
      lastChecked: 'Baru saja'
    },
    {
      id: 'ast-3',
      tag: 'NET-SW-02',
      name: 'D-Link DGS-1210-28 Smart Managed (Switch Lab TKJ 2)',
      category: 'Switch',
      status: 'Active',
      ip: '192.168.10.3',
      mac: '14:D6:4D:88:2E:10',
      location: 'Lab TKJ 2',
      admin: 'Fariz Ramadhan (TKJ)',
      specs: '24-Port 10/100/1000 + 4 Gigabit SFP, 802.1Q VLAN, Loopback Detection',
      latency: 2.1,
      loss: '0%',
      lastChecked: 'Baru saja'
    },
    {
      id: 'ast-4',
      tag: 'SRV-STORAGE-01',
      name: 'Synology DiskStation DS923+ (Storage Arsip & Server)',
      category: 'Server',
      status: 'Active',
      ip: '192.168.10.50',
      mac: '00:11:32:D8:1A:4C',
      location: 'Server Room',
      admin: 'Fariz Ramadhan (TKJ)',
      specs: 'AMD Ryzen R1600, 16GB ECC DDR4, 4x 8TB IronWolf RAID 5 (24TB Usable), SMB3 Share',
      latency: 1.8,
      loss: '0%',
      lastChecked: 'Baru saja'
    },
    {
      id: 'ast-5',
      tag: 'NET-AP-01',
      name: 'Ubiquiti UniFi U6 Pro (Access Point Lab TKJ 1)',
      category: 'Access Point',
      status: 'Active',
      ip: '192.168.10.15',
      mac: '74:83:C2:5F:AA:12',
      location: 'Lab TKJ 1',
      admin: 'Fariz Ramadhan (TKJ)',
      specs: 'Dual-band Wi-Fi 6, 5.3 Gbps aggregate throughput rate, PoE 802.3af',
      latency: 3.2,
      loss: '0%',
      lastChecked: 'Baru saja'
    },
    {
      id: 'ast-6',
      tag: 'PC-TKJ-01',
      name: 'Workstation Master Instruktur Lab 1',
      category: 'Workstation',
      status: 'Active',
      ip: '192.168.20.10',
      mac: 'D8:5E:D3:45:90:01',
      location: 'Lab TKJ 1',
      admin: 'Fariz Ramadhan (TKJ)',
      specs: 'Intel Core i5-12400, 16GB DDR4, Dual Gigabit NIC, Windows 11 Pro + Linux Debian',
      latency: 2.4,
      loss: '0%',
      lastChecked: 'Baru saja'
    },
    {
      id: 'ast-7',
      tag: 'PC-TKJ-14',
      name: 'Client PC Lab TKJ 1 (Unit Meja 14)',
      category: 'Workstation',
      status: 'Maintenance',
      ip: '192.168.20.24',
      mac: 'D8:5E:D3:45:90:14',
      location: 'Lab TKJ 1',
      admin: 'Fariz Ramadhan (TKJ)',
      specs: 'Intel Core i3-10100, 8GB RAM, Realtek GbE LAN, Kendala: Pin RJ45 longgar',
      latency: 89.5,
      loss: '25%',
      lastChecked: '3 menit lalu'
    },
    {
      id: 'ast-8',
      tag: 'PC-PAS-02',
      name: 'Workstation Entri Berkas Pembebasan Tahanan DITJENPAS',
      category: 'Workstation',
      status: 'Active',
      ip: '192.168.30.12',
      mac: '50:EB:71:09:A1:88',
      location: 'Ruang Kearsipan & Admin',
      admin: 'Fariz Ramadhan (TKJ)',
      specs: 'Dell OptiPlex 7090, Core i7, 16GB RAM, Dedicated VPN & Encrypted BitLocker',
      latency: 2.6,
      loss: '0%',
      lastChecked: 'Baru saja'
    },
    {
      id: 'ast-9',
      tag: 'PRN-SCAN-01',
      name: 'Canon imageRUNNER Advance DX (Scanner Kearsipan)',
      category: 'Printer/Scanner',
      status: 'Active',
      ip: '192.168.30.5',
      mac: '00:00:85:6B:44:21',
      location: 'Ruang Kearsipan & Admin',
      admin: 'Fariz Ramadhan (TKJ)',
      specs: 'Multi-function High Speed A4/A3 Duplex Scanner, Scan-to-SMB NAS Synology',
      latency: 4.5,
      loss: '0%',
      lastChecked: 'Baru saja'
    }
  ];

  const INITIAL_TICKETS = [
    {
      id: 'TKJ-2026-001',
      requester: 'Pak Joko (Guru Kejuruan TKJ)',
      location: 'Lab TKJ 1',
      category: 'Jaringan / Internet',
      urgency: 'High',
      title: 'PC-14 Lab TKJ 1 kabel LAN un-plugged & sering RTO',
      desc: 'Saat praktikum konfigurasi Mikrotik, PC-14 tiba-tiba putus dari jaringan lab dan tidak dapat DHCP lease.',
      technician: 'Fariz Ramadhan',
      status: 'In Progress',
      solution: 'Sedang proses crimping ulang konektor RJ45 standar T-568B, verifikasi dengan LAN Tester 8 pin, serta pengecekan port 14 di switch Cisco Catalyst 2960.',
      created: '02 Okt 2026 10:15'
    },
    {
      id: 'TKJ-2026-002',
      requester: 'Pak Hendra (Staf Registrasi Arsip DITJENPAS)',
      location: 'Ruang Kearsipan & Admin',
      category: 'Kearsipan & Database',
      urgency: 'Critical',
      title: 'Scanner kearsipan gagal kirim hasil scan ke Server NAS Synology',
      desc: 'Proses digitalisasi berkas pembebasan tahanan tertunda karena scanner menampilkan error koneksi SMB share folder //192.168.10.50/arsip_bebas.',
      technician: 'Fariz Ramadhan',
      status: 'Resolved',
      solution: 'Memperbaiki permission user Samba di Synology DSM, menyelaraskan SMB v2/v3 protocol dialect, dan mapping ulang shortcut network drive di PC-PAS-02. Berkas kembali tersinkronisasi 100%.',
      created: '01 Okt 2026 14:30'
    },
    {
      id: 'TKJ-2026-003',
      requester: 'Fariz Ramadhan (Pemeriksaan Rutin)',
      location: 'Lab TKJ 1',
      category: 'Switch & Router',
      urgency: 'Medium',
      title: 'Optimasi frekuensi Access Point UniFi U6 Pro saat 40 user bersamaan',
      desc: 'Terjadi co-channel interference pada frekuensi 2.4GHz saat ujian berbasis CBT.',
      technician: 'Fariz Ramadhan',
      status: 'Resolved',
      solution: 'Memindahkan channel 5GHz ke DFS Channel 52 bebas interferensi, mengaktifkan fitur Band Steering, serta membatasi client per AP maksimal 45 perangkat.',
      created: '30 Sep 2026 09:00'
    },
    {
      id: 'TKJ-2026-004',
      requester: 'Asisten Lab TKJ 2',
      location: 'Lab TKJ 2',
      category: 'Jaringan / Internet',
      urgency: 'Low',
      title: 'Permintaan alokasi IP Static untuk Server Simulasi Cisco Packet Tracer',
      desc: 'Dibutuhkan alokasi static IP range 192.168.10.60-192.168.10.65 untuk server materi routing dinamis OSPF/BGP.',
      technician: 'Fariz Ramadhan',
      status: 'Open',
      solution: '',
      created: '02 Okt 2026 11:20'
    }
  ];

  const INITIAL_ACTIVITIES = [
    {
      text: 'Fariz Ramadhan menyelesaikan tiket <strong>TKJ-2026-002</strong> (Perbaikan koneksi SMB Server Arsip Ditjenpas).',
      time: '1 jam yang lalu'
    },
    {
      text: 'Fariz Ramadhan melakukan audit konfigurasi VLAN Trunking di Cisco Catalyst 2960.',
      time: '3 jam yang lalu'
    },
    {
      text: 'Backup otomatis database inventaris aset dan tiket tersimpan di local cache.',
      time: '5 jam yang lalu'
    }
  ];

  // --- STATE MANAGER ---
  const state = {
    assets: JSON.parse(localStorage.getItem('netdesk_assets')) || INITIAL_ASSETS,
    tickets: JSON.parse(localStorage.getItem('netdesk_tickets')) || INITIAL_TICKETS,
    activities: JSON.parse(localStorage.getItem('netdesk_activities')) || INITIAL_ACTIVITIES,
    activeTab: 'tab-overview',
    ticketFilter: 'all',
    monitorFilter: 'all',
    showOnlyIssuesInMonitor: false,
    assetFilterType: 'all',
    assetFilterStatus: 'all',
    assetSearchQuery: '',
    globalSearchQuery: ''
  };

  function persistData() {
    localStorage.setItem('netdesk_assets', JSON.stringify(state.assets));
    localStorage.setItem('netdesk_tickets', JSON.stringify(state.tickets));
    localStorage.setItem('netdesk_activities', JSON.stringify(state.activities));
  }

  // --- TOAST NOTIFICATIONS ---
  function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
      <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none">
        ${type === 'success' ? '<polyline points="20 6 9 17 4 12"></polyline>' : 
          type === 'alert' ? '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>' : 
          '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>'}
      </svg>
      <span>${message}</span>
    `;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(20px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  // --- CLOCK RUNNER ---
  function updateClock() {
    const clockEl = document.getElementById('system-clock');
    if (!clockEl) return;
    const now = new Date();
    const timeStr = now.toLocaleTimeString('id-ID', { hour12: false });
    const dateStr = now.toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' });
    const timeSpan = clockEl.querySelector('.clock-time');
    const dateSpan = clockEl.querySelector('.clock-date');
    if (timeSpan) timeSpan.textContent = timeStr;
    if (dateSpan) dateSpan.textContent = dateStr + ' WIB';
  }

  // --- LIVE CANVAS LATENCY GRAPH ---
  let latencyHistory = [1.2, 1.4, 2.0, 1.5, 1.8, 1.3, 1.6, 2.2, 1.4, 1.3, 1.7, 1.9, 1.5, 2.1, 1.4];
  function initLatencyGraph() {
    const canvas = document.getElementById('latencyCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    function draw() {
      const parent = canvas.parentElement;
      const parentW = parent ? parent.clientWidth : 300;
      canvas.width = Math.max(120, parentW - 32);
      canvas.height = 70;

      const w = canvas.width;
      const h = canvas.height;
      if (w <= 0 || h <= 0) return;

      ctx.clearRect(0, 0, w, h);

      // Grid lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.lineWidth = 1;
      for (let y = 15; y < h; y += 20) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // Draw Wave Path
      ctx.beginPath();
      const step = w / (latencyHistory.length - 1);
      const maxVal = Math.max(...latencyHistory, 5.0);

      latencyHistory.forEach((val, idx) => {
        const x = idx * step;
        const y = h - (val / maxVal) * (h - 20) - 10;
        if (idx === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });

      // Line style
      ctx.strokeStyle = '#00f0ff';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Gradient Fill
      ctx.lineTo(w, h);
      ctx.lineTo(0, h);
      const gradient = ctx.createLinearGradient(0, 0, 0, h);
      gradient.addColorStop(0, 'rgba(0, 240, 255, 0.25)');
      gradient.addColorStop(1, 'rgba(0, 240, 255, 0.0)');
      ctx.fillStyle = gradient;
      ctx.fill();

      // Highlight Last Point
      const lastX = (latencyHistory.length - 1) * step;
      const lastY = h - (latencyHistory[latencyHistory.length - 1] / maxVal) * (h - 20) - 10;
      ctx.beginPath();
      ctx.arc(lastX, lastY, 4, 0, Math.PI * 2);
      ctx.fillStyle = '#00f0ff';
      ctx.shadowColor = '#00f0ff';
      ctx.shadowBlur = 8;
      ctx.fill();
      ctx.shadowBlur = 0;
    }

    draw();

    // Pulse new ping reading every 3 seconds
    setInterval(() => {
      const jitter = (Math.random() * 0.8 - 0.3);
      let nextPing = +(Math.max(1.0, 1.6 + jitter)).toFixed(1);
      if (Math.random() > 0.92) nextPing = +(nextPing * 2.1).toFixed(1); // occasional mini spike
      latencyHistory.shift();
      latencyHistory.push(nextPing);
      draw();

      const statEl = document.getElementById('live-rtt-stat');
      if (statEl) {
        statEl.textContent = `RTT: ${nextPing} ms | Jitter: ${(Math.abs(jitter)).toFixed(2)} ms`;
      }
    }, 3000);

    window.addEventListener('resize', draw);
  }

  // --- RENDER FUNCTIONS ---
  function renderAll() {
    renderKPIs();
    renderOverviewTopology();
    renderOverviewRecentTickets();
    renderActivities();
    renderMonitorTable();
    renderAssetsTable();
    renderTickets();
    updateBadges();
  }

  function updateBadges() {
    const totalAssets = state.assets.length;
    const onlineNodes = state.assets.filter(a => a.status === 'Active').length;
    const openTickets = state.tickets.filter(t => t.status !== 'Resolved').length;

    const bAssets = document.getElementById('badge-assets-count');
    const bOnline = document.getElementById('badge-online-count');
    const bTickets = document.getElementById('badge-tickets-open');

    if (bAssets) bAssets.textContent = totalAssets;
    if (bOnline) bOnline.textContent = onlineNodes;
    if (bTickets) bTickets.textContent = openTickets;
  }

  function renderKPIs() {
    const totalAssets = state.assets.length;
    const onlineNodes = state.assets.filter(a => a.status === 'Active').length;
    const openTickets = state.tickets.filter(t => t.status !== 'Resolved').length;
    const criticalTickets = state.tickets.filter(t => t.urgency === 'Critical' && t.status !== 'Resolved').length;
    const resolvedTickets = state.tickets.filter(t => t.status === 'Resolved').length;

    const elTotal = document.getElementById('kpi-total-assets');
    const elOnline = document.getElementById('kpi-online-nodes');
    const elOpen = document.getElementById('kpi-open-tickets');
    const elCrit = document.getElementById('kpi-critical-tickets');
    const elRes = document.getElementById('kpi-resolved-tickets');

    if (elTotal) elTotal.textContent = totalAssets;
    if (elOnline) elOnline.textContent = `${onlineNodes} / ${totalAssets}`;
    if (elOpen) elOpen.textContent = openTickets;
    if (elCrit) elCrit.textContent = criticalTickets;
    if (elRes) elRes.textContent = resolvedTickets;
  }

  function renderOverviewTopology() {
    const matrix = document.getElementById('topology-matrix');
    if (!matrix) return;

    // Display primary nodes (Gateway, Switches, Server, Key Clients)
    const primaryNodes = state.assets.slice(0, 6);
    matrix.innerHTML = primaryNodes.map(node => {
      const isOnline = node.status === 'Active';
      return `
        <div class="topo-node" onclick="window.NetDesk.pingNode('${node.id}')" title="Klik untuk Ping Uji Koneksi">
          <div class="topo-head">
            <span class="status-dot ${isOnline ? 'online' : 'offline'}"></span>
            <span class="topo-ip">${node.ip}</span>
          </div>
          <div class="topo-name">${node.name}</div>
          <div class="topo-meta">
            <span>${node.category}</span>
            <span class="${isOnline ? 'text-green' : 'text-rose'}">${isOnline ? node.latency + ' ms' : 'Degraded'}</span>
          </div>
        </div>
      `;
    }).join('');
  }

  function renderOverviewRecentTickets() {
    const feed = document.getElementById('recent-tickets-feed');
    if (!feed) return;

    const activeTickets = state.tickets
      .filter(t => t.status !== 'Resolved')
      .slice(0, 4);

    if (activeTickets.length === 0) {
      feed.innerHTML = `
        <div class="text-center p-3">
          <span class="text-green font-bold">Semua Tiket Tuntas</span>
          <p class="text-muted-xs mt-2">Tidak ada kendala aktif saat ini. Jaringan berjalan optimal.</p>
        </div>
      `;
      return;
    }

    feed.innerHTML = activeTickets.map(t => `
      <div class="ticket-feed-item" onclick="window.NetDesk.editTicket('${t.id}')">
        <div class="ticket-feed-head">
          <span class="ticket-id">${t.id}</span>
          <span class="urgency-badge urgency-${t.urgency}">${t.urgency}</span>
        </div>
        <div class="ticket-feed-title">${t.title}</div>
        <div class="topo-meta">
          <span>${t.location}</span>
          <span class="text-cyan">${t.technician}</span>
        </div>
      </div>
    `).join('');
  }

  function renderActivities() {
    const timeline = document.getElementById('activity-timeline');
    if (!timeline) return;

    timeline.innerHTML = state.activities.map(act => `
      <div class="activity-entry">
        <div class="activity-dot"></div>
        <div class="activity-body">
          <div>${act.text}</div>
          <span class="activity-time">${act.time}</span>
        </div>
      </div>
    `).join('');
  }

  function renderMonitorTable() {
    const tbody = document.getElementById('monitor-tbody');
    if (!tbody) return;

    let items = state.assets;
    if (state.showOnlyIssuesInMonitor) {
      items = items.filter(a => a.status !== 'Active' || a.loss !== '0%');
    }
    if (state.monitorFilter !== 'all') {
      items = items.filter(a => (a.location || '').toLowerCase().includes(state.monitorFilter.toLowerCase()));
    }
    if (state.globalSearchQuery) {
      const q = state.globalSearchQuery.toLowerCase();
      items = items.filter(a => 
        (a.name || '').toLowerCase().includes(q) || 
        (a.ip || '').includes(q) || 
        (a.location || '').toLowerCase().includes(q) ||
        (a.tag || '').toLowerCase().includes(q)
      );
    }

    if (items.length === 0) {
      tbody.innerHTML = `<tr><td colspan="9" class="text-center p-4 text-muted-xs">Tidak ada node yang sesuai kriteria pencarian / filter.</td></tr>`;
      return;
    }

    tbody.innerHTML = items.map(item => {
      const isOnline = item.status === 'Active';
      return `
        <tr>
          <td>
            <span class="status-tag ${isOnline ? 'online' : 'degraded'}">
              <span class="status-dot ${isOnline ? 'online' : 'offline'}"></span>
              ${isOnline ? 'Online' : 'Check Cable'}
            </span>
          </td>
          <td><strong>${item.name}</strong><br><small class="mono text-muted-xs">${item.tag}</small></td>
          <td class="mono text-cyan">${item.ip}</td>
          <td>${item.location || '-'}</td>
          <td class="text-muted-xs">${(item.specs || '').split(',')[0]}</td>
          <td class="mono font-bold ${item.latency > 50 ? 'text-rose' : 'text-green'}">${item.latency} ms</td>
          <td class="mono ${item.loss !== '0%' ? 'text-rose font-bold' : 'text-muted-xs'}">${item.loss}</td>
          <td class="text-muted-xs">${item.lastChecked}</td>
          <td class="text-right">
            <button class="btn btn-xs btn-secondary" onclick="window.NetDesk.pingNode('${item.id}')" title="Kirim paket ICMP">
              <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" stroke-width="2" fill="none"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
              Ping
            </button>
          </td>
        </tr>
      `;
    }).join('');
  }

  function renderAssetsTable() {
    const tbody = document.getElementById('assets-tbody');
    if (!tbody) return;

    let items = state.assets;

    if (state.assetFilterType !== 'all') {
      items = items.filter(a => a.category === state.assetFilterType);
    }
    if (state.assetFilterStatus !== 'all') {
      items = items.filter(a => a.status === state.assetFilterStatus);
    }
    if (state.assetSearchQuery) {
      const q = state.assetSearchQuery.toLowerCase();
      items = items.filter(a => 
        (a.name || '').toLowerCase().includes(q) || 
        (a.tag || '').toLowerCase().includes(q) || 
        (a.ip || '').includes(q) || 
        (a.mac || '').toLowerCase().includes(q) ||
        (a.location || '').toLowerCase().includes(q)
      );
    }
    if (state.globalSearchQuery) {
      const q = state.globalSearchQuery.toLowerCase();
      items = items.filter(a => 
        (a.name || '').toLowerCase().includes(q) || 
        (a.tag || '').toLowerCase().includes(q) || 
        (a.ip || '').includes(q) || 
        (a.location || '').toLowerCase().includes(q)
      );
    }

    if (items.length === 0) {
      tbody.innerHTML = `<tr><td colspan="8" class="text-center p-4 text-muted-xs">Tidak ada perangkat yang sesuai dengan filter.</td></tr>`;
      return;
    }

    tbody.innerHTML = items.map(item => `
      <tr>
        <td class="mono font-bold text-cyan">${item.tag}</td>
        <td>
          <div style="font-weight: 600;">${item.name}</div>
          <div class="text-muted-xs">${item.admin || '-'}</div>
        </td>
        <td><span class="pill pill-cyan">${item.category}</span></td>
        <td>
          <div class="mono font-bold">${item.ip}</div>
          <div class="mono text-muted-xs">${item.mac || '-'}</div>
        </td>
        <td>${item.location || '-'}</td>
        <td class="text-muted-xs" style="max-width: 200px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${item.specs || ''}">${item.specs || '-'}</td>
        <td>
          <span class="status-tag ${(item.status || 'Active').toLowerCase()}">
            <span class="status-dot ${item.status === 'Active' ? 'online' : 'offline'}"></span>
            ${item.status}
          </span>
        </td>
        <td class="text-right">
          <button class="btn btn-xs btn-secondary" onclick="window.NetDesk.showQR('${item.id}')" title="Lihat Label QR">
            Label
          </button>
          <button class="btn btn-xs btn-secondary" onclick="window.NetDesk.editAsset('${item.id}')" title="Edit Aset">
            Edit
          </button>
          <button class="btn btn-xs btn-secondary" onclick="window.NetDesk.deleteAsset('${item.id}')" title="Hapus Aset" style="color: var(--rose-accent);">
            &times;
          </button>
        </td>
      </tr>
    `).join('');
  }

  function renderTickets() {
    const container = document.getElementById('tickets-container');
    if (!container) return;

    let items = state.tickets;

    // Filter counts
    const countAll = state.tickets.length;
    const countOpen = state.tickets.filter(t => t.status === 'Open').length;
    const countProgress = state.tickets.filter(t => t.status === 'In Progress').length;
    const countResolved = state.tickets.filter(t => t.status === 'Resolved').length;

    const elAll = document.getElementById('t-count-all');
    const elOpen = document.getElementById('t-count-open');
    const elProg = document.getElementById('t-count-progress');
    const elRes = document.getElementById('t-count-resolved');

    if (elAll) elAll.textContent = countAll;
    if (elOpen) elOpen.textContent = countOpen;
    if (elProg) elProg.textContent = countProgress;
    if (elRes) elRes.textContent = countResolved;

    if (state.ticketFilter !== 'all') {
      items = items.filter(t => t.status === state.ticketFilter);
    }
    if (state.globalSearchQuery) {
      const q = state.globalSearchQuery.toLowerCase();
      items = items.filter(t => 
        (t.title || '').toLowerCase().includes(q) || 
        (t.id || '').toLowerCase().includes(q) || 
        (t.requester || '').toLowerCase().includes(q) || 
        (t.location || '').toLowerCase().includes(q) ||
        (t.desc || '').toLowerCase().includes(q) ||
        (t.technician || '').toLowerCase().includes(q)
      );
    }

    if (items.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 40px;" class="panel">
          <p class="text-muted-xs">Tidak ada tiket troubleshooting pada kategori ini.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = items.map(ticket => `
      <div class="ticket-card">
        <div class="ticket-card-header">
          <span class="ticket-id">${ticket.id}</span>
          <div style="display: flex; gap: 6px;">
            <span class="urgency-badge urgency-${ticket.urgency}">${ticket.urgency}</span>
            <span class="status-tag ${ticket.status === 'Resolved' ? 'active' : ticket.status === 'In Progress' ? 'maintenance' : 'broken'}">
              ${ticket.status}
            </span>
          </div>
        </div>

        <h4 class="ticket-card-title">${ticket.title}</h4>
        <p class="ticket-card-desc">${ticket.desc}</p>

        <div class="ticket-meta-grid">
          <div class="meta-field">
            <span>Pelapor</span>
            <span>${ticket.requester}</span>
          </div>
          <div class="meta-field">
            <span>Lokasi / Divisi</span>
            <span>${ticket.location}</span>
          </div>
          <div class="meta-field">
            <span>Kategori Masalah</span>
            <span>${ticket.category}</span>
          </div>
          <div class="meta-field">
            <span>Teknisi Ditugaskan</span>
            <span class="text-cyan">${ticket.technician}</span>
          </div>
        </div>

        ${ticket.solution ? `
          <div class="ticket-solution-box">
            <strong>Solusi Penanganan:</strong><br>
            ${ticket.solution}
          </div>
        ` : ''}

        <div class="ticket-actions">
          <span class="text-muted-xs">${ticket.created}</span>
          <div style="display: flex; gap: 6px;">
            <button class="btn btn-xs btn-secondary" onclick="window.NetDesk.editTicket('${ticket.id}')">
              Update / Tindakan
            </button>
            <button class="btn btn-xs btn-secondary" onclick="window.NetDesk.deleteTicket('${ticket.id}')" style="color: var(--rose-accent);">
              Hapus
            </button>
          </div>
        </div>
      </div>
    `).join('');
  }

  // --- SUBNET CALCULATOR LOGIC ---
  function calculateSubnet() {
    const ipInput = document.getElementById('calc-ip');
    const cidrSelect = document.getElementById('calc-cidr');
    const resultBox = document.getElementById('subnet-results');
    if (!ipInput || !cidrSelect || !resultBox) return;

    const ip = ipInput.value.trim();
    const prefix = parseInt(cidrSelect.value, 10);

    const octets = ip.split('.').map(Number);
    if (octets.length !== 4 || octets.some(o => isNaN(o) || o < 0 || o > 255)) {
      resultBox.innerHTML = `<div style="grid-column: 1/-1; color: var(--rose-accent);">Format IP address tidak valid. Gunakan format IPv4 seperti 192.168.10.15</div>`;
      return;
    }

    const ipInt = (octets[0] << 24) | (octets[1] << 16) | (octets[2] << 8) | octets[3];
    const maskInt = prefix === 0 ? 0 : (~0 << (32 - prefix));
    const wildcardInt = ~maskInt;

    const networkInt = ipInt & maskInt;
    const broadcastInt = networkInt | wildcardInt;

    function intToIp(int) {
      return [
        (int >>> 24) & 255,
        (int >>> 16) & 255,
        (int >>> 8) & 255,
        int & 255
      ].join('.');
    }

    const netmask = intToIp(maskInt);
    const wildcard = intToIp(wildcardInt);
    const network = intToIp(networkInt);
    const broadcast = intToIp(broadcastInt);

    const totalHosts = prefix === 32 ? 1 : prefix === 31 ? 2 : Math.pow(2, 32 - prefix);
    const usableHosts = prefix >= 31 ? (prefix === 31 ? 2 : 1) : Math.max(0, totalHosts - 2);

    const firstHost = prefix >= 31 ? network : intToIp(networkInt + 1);
    const lastHost = prefix >= 31 ? broadcast : intToIp(broadcastInt - 1);

    resultBox.innerHTML = `
      <div class="sub-res-item">
        <span class="sub-res-label">Network ID</span>
        <span class="sub-res-val text-cyan">${network}</span>
      </div>
      <div class="sub-res-item">
        <span class="sub-res-label">Subnet Mask</span>
        <span class="sub-res-val">${netmask}</span>
      </div>
      <div class="sub-res-item">
        <span class="sub-res-label">Broadcast ID</span>
        <span class="sub-res-val text-amber">${broadcast}</span>
      </div>
      <div class="sub-res-item">
        <span class="sub-res-label">Range Usable Host</span>
        <span class="sub-res-val text-green">${firstHost} - ${lastHost}</span>
      </div>
      <div class="sub-res-item">
        <span class="sub-res-label">Jumlah Host Tersedia</span>
        <span class="sub-res-val">${usableHosts.toLocaleString()} Host</span>
      </div>
      <div class="sub-res-item">
        <span class="sub-res-label">Wildcard Mask</span>
        <span class="sub-res-val mono">${wildcard}</span>
      </div>
    `;
  }

  // --- UTP CABLE PINOUT DIAGRAM ---
  const CABLE_STANDARDS = {
    t568b: [
      { pin: 1, name: 'Putih - Orange', color: '#ff8c00', stripe: 'repeating-linear-gradient(45deg, #fff, #fff 4px, #ff8c00 4px, #ff8c00 8px)' },
      { pin: 2, name: 'Orange Solid', color: '#ff8c00', stripe: '#ff8c00' },
      { pin: 3, name: 'Putih - Hijau', color: '#10b981', stripe: 'repeating-linear-gradient(45deg, #fff, #fff 4px, #10b981 4px, #10b981 8px)' },
      { pin: 4, name: 'Biru Solid', color: '#0284c7', stripe: '#0284c7' },
      { pin: 5, name: 'Putih - Biru', color: '#0284c7', stripe: 'repeating-linear-gradient(45deg, #fff, #fff 4px, #0284c7 4px, #0284c7 8px)' },
      { pin: 6, name: 'Hijau Solid', color: '#10b981', stripe: '#10b981' },
      { pin: 7, name: 'Putih - Cokelat', color: '#92400e', stripe: 'repeating-linear-gradient(45deg, #fff, #fff 4px, #92400e 4px, #92400e 8px)' },
      { pin: 8, name: 'Cokelat Solid', color: '#92400e', stripe: '#92400e' }
    ],
    t568a: [
      { pin: 1, name: 'Putih - Hijau', color: '#10b981', stripe: 'repeating-linear-gradient(45deg, #fff, #fff 4px, #10b981 4px, #10b981 8px)' },
      { pin: 2, name: 'Hijau Solid', color: '#10b981', stripe: '#10b981' },
      { pin: 3, name: 'Putih - Orange', color: '#ff8c00', stripe: 'repeating-linear-gradient(45deg, #fff, #fff 4px, #ff8c00 4px, #ff8c00 8px)' },
      { pin: 4, name: 'Biru Solid', color: '#0284c7', stripe: '#0284c7' },
      { pin: 5, name: 'Putih - Biru', color: '#0284c7', stripe: 'repeating-linear-gradient(45deg, #fff, #fff 4px, #0284c7 4px, #0284c7 8px)' },
      { pin: 6, name: 'Orange Solid', color: '#ff8c00', stripe: '#ff8c00' },
      { pin: 7, name: 'Putih - Cokelat', color: '#92400e', stripe: 'repeating-linear-gradient(45deg, #fff, #fff 4px, #92400e 4px, #92400e 8px)' },
      { pin: 8, name: 'Cokelat Solid', color: '#92400e', stripe: '#92400e' }
    ]
  };

  function renderCableDiagram(standard = 't568b') {
    const container = document.getElementById('cable-diagram');
    if (!container) return;

    const wires = CABLE_STANDARDS[standard];
    container.innerHTML = wires.map(w => `
      <div class="wire-item">
        <span class="wire-pin">Pin ${w.pin}</span>
        <div class="wire-stripe" style="background: ${w.stripe};"></div>
        <span class="wire-name">${w.name}</span>
      </div>
    `).join('');
  }

  // --- ACTIONS EXPOSED TO WINDOW ---
  window.NetDesk = {
    // Navigation
    switchTab: function (tabId) {
      document.querySelectorAll('.nav-item').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tabId);
      });
      document.querySelectorAll('.mb-nav-item').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tabId);
      });
      document.querySelectorAll('.tab-pane').forEach(pane => {
        pane.classList.toggle('active', pane.id === tabId);
      });
      state.activeTab = tabId;

      // Close mobile drawer & backdrop
      document.getElementById('sidebar')?.classList.remove('mobile-open');
      document.getElementById('sidebar-backdrop')?.classList.remove('active');

      // Scroll smoothly to top
      window.scrollTo({ top: 0, behavior: 'smooth' });

      if (tabId === 'tab-toolbox') {
        calculateSubnet();
      }
    },

    // Ping Simulation
    pingNode: function (nodeId) {
      const node = state.assets.find(a => a.id === nodeId);
      if (!node) return;

      showToast(`Mengirim ICMP echo packet ke ${node.name} (${node.ip})...`, 'info');

      setTimeout(() => {
        const jitter = (Math.random() * 0.8 - 0.4);
        if (node.status === 'Active') {
          node.latency = +(Math.max(1.0, 1.8 + jitter)).toFixed(1);
          node.loss = '0%';
          node.lastChecked = 'Baru saja';
          showToast(`Reply from ${node.ip}: bytes=32 time=${node.latency}ms TTL=64 (OK)`, 'success');
        } else {
          node.latency = 95.0;
          node.loss = '25%';
          node.lastChecked = 'Baru saja';
          showToast(`Ping ${node.ip}: Request timed out / High Jitter (${node.loss} loss)`, 'alert');
        }
        persistData();
        renderAll();
      }, 700);
    },

    pingAll: function () {
      showToast('Menjalankan subnet scanner ICMP ke seluruh node...', 'info');
      setTimeout(() => {
        state.assets.forEach(a => {
          if (a.status === 'Active') {
            a.latency = +(Math.max(1.0, 1.5 + (Math.random() * 1.5))).toFixed(1);
            a.loss = '0%';
          }
          a.lastChecked = 'Baru saja';
        });
        persistData();
        renderAll();
        showToast('Ping cycle selesai: 8 node online, 1 node butuh pemeriksaan fisik.', 'success');
      }, 1000);
    },

    // QR Label Modal
    showQR: function (assetId) {
      const asset = state.assets.find(a => a.id === assetId);
      if (!asset) return;

      document.getElementById('qr-tag-display').textContent = asset.tag;
      document.getElementById('qr-name-display').textContent = asset.name;
      document.getElementById('qr-ip-display').textContent = `IP: ${asset.ip}`;
      document.getElementById('qr-loc-display').textContent = `Lokasi: ${asset.location}`;

      document.getElementById('modal-qr').classList.add('active');
    },

    // Asset CRUD
    openAddAsset: function () {
      document.getElementById('form-asset').reset();
      document.getElementById('asset-id').value = '';
      document.getElementById('modal-asset-title').textContent = 'Tambah Aset Perangkat Jaringan';
      document.getElementById('asset-admin').value = 'Fariz Ramadhan (TKJ)';
      document.getElementById('modal-asset').classList.add('active');
    },

    editAsset: function (id) {
      const asset = state.assets.find(a => a.id === id);
      if (!asset) return;

      document.getElementById('asset-id').value = asset.id;
      document.getElementById('asset-tag').value = asset.tag;
      document.getElementById('asset-name').value = asset.name;
      document.getElementById('asset-category').value = asset.category;
      document.getElementById('asset-status').value = asset.status;
      document.getElementById('asset-ip').value = asset.ip;
      document.getElementById('asset-mac').value = asset.mac || '';
      document.getElementById('asset-location').value = asset.location;
      document.getElementById('asset-admin').value = asset.admin || 'Fariz Ramadhan (TKJ)';
      document.getElementById('asset-specs').value = asset.specs || '';

      document.getElementById('modal-asset-title').textContent = 'Edit Data Aset';
      document.getElementById('modal-asset').classList.add('active');
    },

    deleteAsset: function (id) {
      if (!confirm('Apakah yakin ingin menghapus data perangkat ini dari inventaris?')) return;
      state.assets = state.assets.filter(a => a.id !== id);
      persistData();
      renderAll();
      showToast('Perangkat berhasil dihapus dari inventaris.', 'info');
    },

    // Ticket CRUD
    openAddTicket: function () {
      document.getElementById('form-ticket').reset();
      document.getElementById('ticket-id').value = '';
      document.getElementById('modal-ticket-title').textContent = 'Buat Tiket Kendala Troubleshooting';
      document.getElementById('ticket-technician').value = 'Fariz Ramadhan';
      document.getElementById('modal-ticket').classList.add('active');
    },

    editTicket: function (id) {
      const ticket = state.tickets.find(t => t.id === id);
      if (!ticket) return;

      document.getElementById('ticket-id').value = ticket.id;
      document.getElementById('ticket-requester').value = ticket.requester;
      document.getElementById('ticket-location').value = ticket.location;
      document.getElementById('ticket-category').value = ticket.category;
      document.getElementById('ticket-urgency').value = ticket.urgency;
      document.getElementById('ticket-title').value = ticket.title;
      document.getElementById('ticket-desc').value = ticket.desc || '';
      document.getElementById('ticket-technician').value = ticket.technician;
      document.getElementById('ticket-status').value = ticket.status;
      document.getElementById('ticket-solution').value = ticket.solution || '';

      document.getElementById('modal-ticket-title').textContent = `Tindakan Tiket: ${ticket.id}`;
      document.getElementById('modal-ticket').classList.add('active');
    },

    deleteTicket: function (id) {
      if (!confirm('Hapus tiket troubleshooting ini?')) return;
      state.tickets = state.tickets.filter(t => t.id !== id);
      persistData();
      renderAll();
      showToast('Tiket troubleshooting dihapus.', 'info');
    },

    // CSV & Backup Export
    exportAssetsCSV: function () {
      let csv = 'Tag ID,Nama Perangkat,Kategori,Alamat IP,MAC Address,Lokasi,Status,Spesifikasi\n';
      state.assets.forEach(a => {
        csv += `"${a.tag}","${a.name}","${a.category}","${a.ip}","${a.mac || ''}","${a.location}","${a.status}","${(a.specs || '').replace(/"/g, '""')}"\n`;
      });
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `inventaris_aset_tkj_${new Date().toISOString().slice(0, 10)}.csv`;
      link.click();
      URL.revokeObjectURL(url);
      showToast('File CSV inventaris aset berhasil diunduh.', 'success');
    },

    exportFullBackup: function () {
      const backup = {
        exportedAt: new Date().toISOString(),
        system: 'NetDesk TKJ - SMK Kartika X-1 & Ditjenpas',
        leadTech: 'Muhammad Fariz Ramadhan',
        assets: state.assets,
        tickets: state.tickets,
        activities: state.activities
      };
      const jsonStr = JSON.stringify(backup, null, 2);
      const blob = new Blob([jsonStr], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `backup_netdesk_tkj_${Date.now()}.json`;
      link.click();
      URL.revokeObjectURL(url);
      showToast('Full backup JSON berhasil diekspor.', 'success');
    },

    printReport: function () {
      try {
        window.print();
      } catch (e) {
        showToast('Pencetakan tidak didukung di webview perangkat ini. Silakan gunakan ekspor CSV / Backup.', 'alert');
      }
    },

    printLabel: function () {
      try {
        window.print();
      } catch (e) {
        showToast('Gunakan screenshot layar untuk menyimpan dan mencetak label ini di HP.', 'info');
      }
    }
  };

  // --- EVENT LISTENERS INITIALIZATION ---
  document.addEventListener('DOMContentLoaded', function () {
    // 1. Navigation items
    document.querySelectorAll('.nav-item').forEach(btn => {
      btn.addEventListener('click', () => {
        window.NetDesk.switchTab(btn.dataset.tab);
      });
    });

    // 2. Mobile drawer & backdrop
    const sidebar = document.getElementById('sidebar');
    const backdrop = document.getElementById('sidebar-backdrop');

    document.getElementById('btn-mobile-toggle')?.addEventListener('click', () => {
      sidebar?.classList.toggle('mobile-open');
      backdrop?.classList.toggle('active');
    });

    document.getElementById('btn-sidebar-close')?.addEventListener('click', () => {
      sidebar?.classList.remove('mobile-open');
      backdrop?.classList.remove('active');
    });

    backdrop?.addEventListener('click', () => {
      sidebar?.classList.remove('mobile-open');
      backdrop?.classList.remove('active');
    });

    // 2b. Mobile Bottom Nav buttons
    document.querySelectorAll('.mb-nav-item').forEach(btn => {
      btn.addEventListener('click', () => {
        window.NetDesk.switchTab(btn.dataset.tab);
      });
    });

    // 3. Quick buttons in header
    document.getElementById('btn-quick-ticket')?.addEventListener('click', () => {
      window.NetDesk.openAddTicket();
    });

    document.getElementById('btn-open-ticket-modal')?.addEventListener('click', () => {
      window.NetDesk.openAddTicket();
    });

    document.getElementById('btn-add-asset-modal')?.addEventListener('click', () => {
      window.NetDesk.openAddAsset();
    });

    document.getElementById('btn-ping-all')?.addEventListener('click', () => {
      window.NetDesk.pingAll();
    });

    document.getElementById('btn-ping-now-all')?.addEventListener('click', () => {
      window.NetDesk.pingAll();
    });

    document.getElementById('btn-export-backup')?.addEventListener('click', () => {
      window.NetDesk.exportFullBackup();
    });

    document.getElementById('btn-export-assets-csv')?.addEventListener('click', () => {
      window.NetDesk.exportAssetsCSV();
    });

    document.getElementById('btn-print-audit-report')?.addEventListener('click', () => {
      window.NetDesk.printReport();
    });

    // 4. KPI Card shortcuts
    document.querySelectorAll('.kpi-card').forEach(card => {
      card.addEventListener('click', () => {
        const action = card.dataset.action;
        if (action === 'goto-assets') window.NetDesk.switchTab('tab-assets');
        else if (action === 'goto-monitor') window.NetDesk.switchTab('tab-monitor');
        else if (action === 'goto-tickets') window.NetDesk.switchTab('tab-tickets');
      });
    });

    // 5. Global Search input
    document.getElementById('global-search')?.addEventListener('input', (e) => {
      state.globalSearchQuery = e.target.value.trim();
      renderAll();
    });

    // 6. Monitor Filter
    document.getElementById('monitor-location-filter')?.addEventListener('change', (e) => {
      state.monitorFilter = e.target.value;
      renderMonitorTable();
    });

    document.getElementById('btn-filter-offline')?.addEventListener('click', () => {
      state.showOnlyIssuesInMonitor = !state.showOnlyIssuesInMonitor;
      const btn = document.getElementById('btn-filter-offline');
      if (btn) {
        const span = btn.querySelector('span');
        if (state.showOnlyIssuesInMonitor) {
          btn.classList.add('active', 'btn-primary');
          btn.classList.remove('btn-secondary');
          if (span) span.textContent = 'Tampilkan Semua Node';
          showToast('Menampilkan node jaringan yang mengalami gangguan / degradasi.', 'alert');
        } else {
          btn.classList.remove('active', 'btn-primary');
          btn.classList.add('btn-secondary');
          if (span) span.textContent = 'Hanya Tampilkan Masalah';
          showToast('Menampilkan seluruh node jaringan.', 'info');
        }
      }
      renderMonitorTable();
    });

    // 7. Asset Filters
    document.getElementById('asset-type-filter')?.addEventListener('change', (e) => {
      state.assetFilterType = e.target.value;
      renderAssetsTable();
    });

    document.getElementById('asset-status-filter')?.addEventListener('change', (e) => {
      state.assetFilterStatus = e.target.value;
      renderAssetsTable();
    });

    document.getElementById('asset-search-input')?.addEventListener('input', (e) => {
      state.assetSearchQuery = e.target.value.trim();
      renderAssetsTable();
    });

    // 8. Ticket Status Filter Pills
    document.querySelectorAll('.status-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        document.querySelectorAll('.status-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        state.ticketFilter = pill.dataset.ticketFilter;
        renderTickets();
      });
    });

    // 9. Forms Submission
    // Asset Form
    document.getElementById('form-asset')?.addEventListener('submit', (e) => {
      e.preventDefault();
      const id = document.getElementById('asset-id').value;
      const tag = document.getElementById('asset-tag').value.trim();
      const name = document.getElementById('asset-name').value.trim();
      const category = document.getElementById('asset-category').value;
      const status = document.getElementById('asset-status').value;
      const ip = document.getElementById('asset-ip').value.trim();
      const mac = document.getElementById('asset-mac').value.trim();
      const location = document.getElementById('asset-location').value.trim();
      const admin = document.getElementById('asset-admin').value.trim();
      const specs = document.getElementById('asset-specs').value.trim();

      if (id) {
        // Edit existing
        const index = state.assets.findIndex(a => a.id === id);
        if (index !== -1) {
          state.assets[index] = { ...state.assets[index], tag, name, category, status, ip, mac, location, admin, specs };
          showToast(`Data perangkat ${tag} diperbarui.`, 'success');
        }
      } else {
        // New asset
        const newAsset = {
          id: 'ast-' + Date.now(),
          tag,
          name,
          category,
          status,
          ip,
          mac,
          location,
          admin,
          specs,
          latency: +(Math.max(1.0, 1.5 + Math.random())).toFixed(1),
          loss: '0%',
          lastChecked: 'Baru saja'
        };
        state.assets.unshift(newAsset);
        showToast(`Perangkat ${name} berhasil ditambahkan ke inventaris!`, 'success');
      }

      persistData();
      renderAll();
      document.getElementById('modal-asset').classList.remove('active');
    });

    // Ticket Form
    document.getElementById('form-ticket')?.addEventListener('submit', (e) => {
      e.preventDefault();
      const id = document.getElementById('ticket-id').value;
      const requester = document.getElementById('ticket-requester').value.trim();
      const location = document.getElementById('ticket-location').value.trim();
      const category = document.getElementById('ticket-category').value;
      const urgency = document.getElementById('ticket-urgency').value;
      const title = document.getElementById('ticket-title').value.trim();
      const desc = document.getElementById('ticket-desc').value.trim();
      const technician = document.getElementById('ticket-technician').value.trim();
      const status = document.getElementById('ticket-status').value;
      const solution = document.getElementById('ticket-solution').value.trim();

      if (id) {
        // Update ticket
        const index = state.tickets.findIndex(t => t.id === id);
        if (index !== -1) {
          state.tickets[index] = { ...state.tickets[index], requester, location, category, urgency, title, desc, technician, status, solution };
          if (status === 'Resolved' && solution) {
            state.activities.unshift({
              text: `${technician} menyelesaikan tiket <strong>${id}</strong> (${title}).`,
              time: 'Baru saja'
            });
          }
          showToast(`Tiket ${id} berhasil diperbarui.`, 'success');
        }
      } else {
        // Create new ticket
        const newId = `TKJ-2026-00${state.tickets.length + 1}`;
        const newTicket = {
          id: newId,
          requester,
          location,
          category,
          urgency,
          title,
          desc,
          technician,
          status,
          solution,
          created: new Date().toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' }) + ' ' + new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
        };
        state.tickets.unshift(newTicket);
        state.activities.unshift({
          text: `Tiket baru <strong>${newId}</strong> dibuka oleh ${requester}: ${title}`,
          time: 'Baru saja'
        });
        showToast(`Tiket ${newId} berhasil dibuat!`, 'success');
      }

      persistData();
      renderAll();
      document.getElementById('modal-ticket').classList.remove('active');
    });

    // 10. Modal Close buttons
    document.querySelectorAll('.modal-close, [data-close]').forEach(btn => {
      btn.addEventListener('click', () => {
        const modalId = btn.dataset.close || btn.closest('.modal-backdrop').id;
        document.getElementById(modalId)?.classList.remove('active');
      });
    });

    // Close on backdrop click
    document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
      backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) backdrop.classList.remove('active');
      });
    });

    // 11. Subnet Calculator Events
    document.getElementById('calc-ip')?.addEventListener('input', calculateSubnet);
    document.getElementById('calc-cidr')?.addEventListener('change', calculateSubnet);

    // 12. Cable diagram switcher
    document.getElementById('btn-t568b')?.addEventListener('click', (e) => {
      document.getElementById('btn-t568a')?.classList.remove('active', 'btn-primary');
      document.getElementById('btn-t568a')?.classList.add('btn-secondary');
      e.target.classList.add('active', 'btn-primary');
      e.target.classList.remove('btn-secondary');
      renderCableDiagram('t568b');
    });

    document.getElementById('btn-t568a')?.addEventListener('click', (e) => {
      document.getElementById('btn-t568b')?.classList.remove('active', 'btn-primary');
      document.getElementById('btn-t568b')?.classList.add('btn-secondary');
      e.target.classList.add('active', 'btn-primary');
      e.target.classList.remove('btn-secondary');
      renderCableDiagram('t568a');
    });

    // Initialize systems
    setInterval(updateClock, 1000);
    updateClock();
    initLatencyGraph();
    renderCableDiagram('t568b');
    calculateSubnet();
    renderAll();
  });

})();
