# Tool registry proyek

Audit: 6 November 2026. Tidak memasang paket atau tool baru.

| Tool | Status | Bukti dan penggunaan |
|---|---|---|
| Python | AVAILABLE | `py --version`: Python 3.14.0; menjalankan lab dan unittest |
| GitHub CLI | AVAILABLE | `gh api repos/kvnlhm/tutorial-ai-engineer/contents/Tutorial-AI-Engineer.md` berhasil membaca sumber |
| Context7 | AVAILABLE | Dokumentasi `/python/cpython` untuk sqlite3 dan `/mdn/content` untuk localStorage/file lokal dibaca |
| Web browsing | AVAILABLE | Roadmap, repo contoh, PortSwigger, OWASP, pwn.college, Bandit dibaca |
| RTK | AVAILABLE | Get-Command menemukan executable; instruksi RTK.md dibaca |
| CodeGraph | SKIPPED | Folder awal kosong; tidak ada indeks kode lintas modul yang relevan |
| Python standard library | AVAILABLE | sqlite3/hashlib/json/unittest dipakai oleh lab yang lulus uji |
| Docker/cloud berbayar | SKIPPED | Tidak diperlukan, tidak dipasang/dijalankan |
| Node.js | AVAILABLE | `node --version`: v24.14.0; test runner bawaan menjalankan 35 test simulator |
| Playwright CLI | AVAILABLE | `playwright-cli --version`: 0.1.22; Chrome headless menjalankan UI simulator, screenshot, console, dan network |
| Impeccable | AVAILABLE | Launcher lokal berhasil menjalankan context dan detect; satu peringatan palet kertas ditinjau sesuai DESIGN.md |
| Blender/cli-anything | SKIPPED | Simulator HTML dapat dijalankan langsung; aset 3D dan otomasi aplikasi tambahan tidak diperlukan |
| UI build/package manager | SKIPPED | Vanilla HTML/CSS/JS tanpa dependency dan tahap build |

Script lokal `tools/build_book.py` menggabungkan sumber, `tools/check_docs.py`
memeriksa struktur dan tautan. Catatan eksekusi ada di task-log. Tidak ada MCP,
provider, model, atau pengaturan permission baru pada proyek ini.
