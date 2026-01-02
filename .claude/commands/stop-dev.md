---
allowed-tools: Bash(pkill:*)
description: Stop all npm dev and Vite servers
---

Stop all running development servers by killing npm dev and Vite processes.

Run these commands:
- `pkill -f "npm run dev" || true`
- `pkill -f "vite" || true`
