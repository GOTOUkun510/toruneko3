type Item = { name: string; description?: string }

type CategoryData = {
  label: string
  items: Item[]
}

export const itemData: Record<string, CategoryData> = {
  'weapon': { label: '武器', items: [] },
  'claw':   { label: '爪',   items: [] },
  'shield': { label: '盾',   items: [] },
  'ring':   { label: '指輪', items: [] },
  'arrow':  { label: '飛び道具', items: [] },
  'food':   { label: '食料', items: [] },
  'grass':  { label: '草',   items: [] },
  'scroll': { label: '巻物', items: [] },
  'staff':  { label: '杖',   items: [] },
  'pot':    { label: '壷',   items: [] },
  'other':  { label: 'その他', items: [] },
}