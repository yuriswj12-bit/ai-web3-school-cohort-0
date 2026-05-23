#!/bin/bash
# wcb-checkin-prep.sh
# 生成当日打卡原料

DATE=$(date +%Y-%m-%d)
OUT="/tmp/wcb-checkin-${DATE}.md"

echo "# WCB Checkin Prep - ${DATE}" > $OUT
echo "" >> $OUT
echo "## Git Log (最近 5 条)" >> $OUT
git log --oneline -5 >> $OUT 2>/dev/null || echo "无 git log" >> $OUT

echo "" >> $OUT
echo "## 今日笔记" >> $OUT
if [ -f "每日笔记/${DATE}.md" ]; then
  cat "每日笔记/${DATE}.md" >> $OUT
else
  echo "今日笔记不存在" >> $OUT
fi

echo "" >> $OUT
echo "原料已生成: $OUT"
