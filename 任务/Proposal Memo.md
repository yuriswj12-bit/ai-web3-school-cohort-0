# Proposal Memo (1 页式) - Agent Economy Live

**项目名称**：Agent Economy Live  
**一句话定位**：让 1.65 亿笔交易、6.9 万个 Agent 的隐形经济「看得见、跟得住、能下注」。

## 1. 目标用户
- **主要用户**：人类交易者 / 研究者（想了解 Agent Economy 动态并进行预测）
- **次要用户**：其他 AI Agent（需要实时数据做决策）
- **潜在用户**：Agent 项目方、协议方（想展示自身 Agent 数据）

## 2. 真实场景
- 用户想知道「哪个 Agent 的服务正在崛起」，并愿意用资金进行判断和博弈。
- Research Agent 需要快速获取市场数据和 Agent 表现来辅助决策。
- Agent 项目方希望自己的 Agent 能被更多人看到和使用。

## 3. 最小功能（Week 4 MVP）
- 实时/准实时 Agent 活动流 + 动态服务排行榜
- 点击任意 Agent 查看其「一生」历史（交易记录 + 声誉变化）
- 基础预测下注入口（支持 CAW 模拟资金流）
- 大屏 Demo 模式（适合展示）
- 清晰的风险边界与 CAW 使用说明

## 4. 验证方式
- **技术验证**：能稳定展示实时/准实时数据 + Agent 历史钻取
- **赛道验证**：通过 CAW 完成预测下注的资金流模拟，体现 Agent 持有资金、执行支付的能力
- **用户价值验证**：Demo 时让评委感受到「隐形经济正在跳动」，并理解 CAW 在其中的关键作用

## 5. 风险边界
- **数据风险**：真实 Agent 数据量不足 → 使用 Mock 数据 + 部分真实 ERC-8004 数据结合
- **CAW 集成风险**：真实链上资金闭环难以在 Week 4 完成 → 使用 CAW Sandbox / 测试网模拟 + 清晰流程说明
- **实时性风险**：高频实时推送实现困难 → 采用 Polling + 动画模拟，核心数据使用真实查询
- **范围风险**：功能膨胀导致 Demo 不完整 → 严格执行 Scope Review，砍掉多链、复杂 AI 决策、高级 3D 可视化等

## 6. 可能赛道
- **Cobo Agentic Economy × Cobo Agentic Wallet**（主攻赛道）
- Agentic Commerce / Autonomous Agent 相关赛道
- DeFi + AI Agent 交叉赛道
