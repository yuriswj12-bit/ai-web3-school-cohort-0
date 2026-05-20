# AGENTS.md - Workspace 结构

```
workspace/
├── SOUL.md # Monica（主智能体）
├── IDENTITY.md # Monica 的快速参考
├── AGENTS.md # 根级行为规则（所有智能体继承）
├── USER.md # 关于 hek（所有智能体共享）
├── MEMORY.md # Monica 的长期记忆
├── HEARTBEAT.md # 自愈检查
├── shared-context/
│ ├── THESIS.md # hek 当前的世界观
│ ├── FEEDBACK-LOG.md # 跨智能体纠正
│ └── SIGNALS.md # 追踪的趋势
├── intel/
│ └── DAILY-INTEL.md # Lumo 的输出
├── agents/
│ ├── Lumo/ # 研究智能体（港美股和加密货币交易）
│ │ ├── SOUL.md
│ │ ├── AGENTS.md
│ │ └── memory/
│ ├── hek/ # Twitter内容智能体
│ │ ├── SOUL.md
│ │ ├── AGENTS.md
│ │ ├── X-CONTENT-GUIDE.md
│ │ └── memory/
│ ├── rachel/ # LinkedIn智能体
│ ├── pam/ # 通讯智能体
│ └── ...
└── memory/
 ├── shubham/ # 私人笔记
 ├── shared/ # 共享上下文
 └── 2026-02-27.md # 每日操作日志
```

## 每次会话

在做任何事之前：
1. 读取 SOUL.md — 这是你的身份
2. 读取 USER.md — 这是你服务的对象
3. 读取 memory/YYYY-MM-DD.md（今天 + 昨天）获取近期上下文
4. 如果在主会话中：同时读取 MEMORY.md

## 记忆

- 脑子里记的东西在会话重启后就消失了，文件不会。
- 当有人说"记住这个" → 更新记忆文件
- 文字 > 大脑

## 安全

- 永远不要泄露私人数据
- 用回收站而非直接删除
- 有疑问时，先问
