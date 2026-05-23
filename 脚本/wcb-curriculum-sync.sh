#!/bin/bash
# wcb-curriculum-sync.sh
# 同步 WCB 课程大纲

set -e

if [ -z "$WCB_KEY" ]; then
  echo "请先 export WCB_KEY=你的WCB_AGENT_SECRET_API_KEY"
  exit 1
fi

PROGRAM_ID="cmnx791nl008sru0167pzp4ki"
WEEK=$1

if [ -z "$WEEK" ]; then
  echo "用法: ./wcb-curriculum-sync.sh week1"
  exit 1
fi

echo "正在同步 Week $WEEK ..."

curl -s -X POST https://web3career.build/api/agent/call \
  -H "Authorization: Bearer $WCB_KEY" \
  -H "Content-Type: application/json" \
  -d '{"procedure":"program.getById","input":{"idOrSlug":"AI-Web3-School"}}' \
  | jq -r ".result.metadata.curriculumWeekI18n.en" > "课程大纲/.cache/week${WEEK}.en.json" 2>/dev/null || echo "需要安装 jq"

echo "已保存到 课程大纲/.cache/week${WEEK}.en.json"
