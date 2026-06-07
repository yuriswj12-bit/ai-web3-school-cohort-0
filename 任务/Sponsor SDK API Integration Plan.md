# Sponsor SDK / API Integration Plan
**Project**: Agent Economy Live

## 1. 计划接入的 Sponsor
**The Graph Protocol**（链上数据索引服务）

## 2. 为什么选择接入 The Graph
- 我们项目核心是**实时展示 Agent 交易流、排行榜和 Agent 终身历史**，需要频繁、高性能地查询和聚合 ERC-8004 事件 + 相关链上交易数据。
- The Graph 是目前以太坊生态最成熟的链上索引协议，支持 GraphQL 查询和实时订阅（Subscription），非常适合做 Live Dashboard。
- 作为 Hackathon 常见 Sponsor，接入后也有加分潜力。

## 3. 具体怎么接（Integration Plan）

**MVP 阶段接入方式**：
1. 在 The Graph Studio 创建 Subgraph 项目
2. 定义 Schema（主要实体：Agent、Transaction、ReputationUpdate、Validation 等）
3. 编写 Mapping 脚本，监听 ERC-8004 的关键事件
4. 前端使用 `@graphprotocol/client` 或 `urql` 进行查询和 Subscription，实现实时活动流和排行榜更新
5. 初期先做 **3 个核心指标**的聚合查询 + Agent 历史数据拉取

**预计工作量**：
- Subgraph 基础搭建 + 核心事件映射：约 1.5–2 天
- 前端查询层集成：约 1 天
- 调试和优化：0.5–1 天

## 4. Week 4 是否能做完？

**结论**：**基础版本可以做完，完整实时版本有风险**。

- **能完成的部分**（Week 4 目标）：
  - Subgraph 部署 + 核心实体和事件映射
  - 3 大指标的历史查询 + 简单聚合
  - Agent 终身历史页面数据拉取

- **有难度 / 可能延后的部分**：
  - 高频实时 Subscription（交易流实时推送）
  - 复杂多维度排序和实时排名计算

## 5. Fallback 方案（如果接不通或时间不够）

如果 The Graph 集成遇到问题或时间紧张，我们准备了三级降级方案：

| 优先级 | 方案 | 说明 | Demo Day 影响 |
|--------|------|------|---------------|
| **Fallback 1** | **Ponder** | 使用 Ponder 替代 The Graph 做索引，更轻量、开发更快 | 几乎无影响，可快速切换 |
| **Fallback 2** | **Mock + Polling** | 先用 Mock 数据 + 定时轮询模拟实时更新 | 视觉效果保留，真实数据延迟 |
| **Fallback 3** | **纯 Mock 数据** | 全部使用预设数据 + 动画模拟实时流 | 保证 Demo 能跑，数据真实性降低 |

** 推荐策略**：
Week 4 **主攻 Ponder**（更快），同时并行搭建 The Graph Subgraph 作为长期方案。实在来不及就直接用 Fallback 2，保证 Demo Day 有流畅的视觉效果。
