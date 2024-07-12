---
title: 关于
---
<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: '/images/hero.svg',
    name: 'Glendia',
    title: '作者',
    links: [
      { icon: 'github', link: 'https://github.com/Glendia' },
      { icon: 'tiktok', link: 'https://twitter.com/youyuxi' }
    ]
  },
]
</script>

# Our Team

Say hello to our awesome team.

<VPTeamMembers size="medium" :members="members" />