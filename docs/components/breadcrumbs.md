# Breadcrumbs

## Default

::: demo
<Breadcrumbs :items="[]"/>
:::

## with item
::: demo
<Breadcrumbs :items="[{icon: 'github', name: 'Workspace', link: '/workspace'}]"/>
:::



## with items
::: demo
<Breadcrumbs :items="[
{icon: 'github', name: 'Github', link: '/workspace'},
{icon: 'team', name: 'Team', link: '/workspace'},
{icon: 'team', name: 'no link' },
]"/>
:::

## stacked
::: demo
<Breadcrumbs :items="[
{icon: 'github', name: 'Github', link: '/workspace'},
{icon: 'team', name: 'Team', link: '/workspace'},
{icon: 'team', name: 'Team', link: '/workspace'},
{icon: 'team', name: 'Team', link: '/workspace'},
{icon: 'team', name: 'Team', link: '/workspace'},
{icon: 'team', name: 'Team', link: '/workspace'},
{icon: 'team', name: 'Team', link: '/workspace'},
{icon: 'team', name: 'Team', link: '/workspace'},
{icon: 'team', name: 'Team', link: '/workspace'},
{icon: 'team', name: 'Team', link: '/workspace'},
{icon: 'team', name: 'Team', link: '/workspace'},
{icon: 'team', name: 'Team', link: '/workspace'},
{icon: 'team', name: 'Team', link: '/workspace'},
{icon: 'team', name: 'no link' },
]"/>
:::
