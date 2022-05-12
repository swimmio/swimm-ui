<script setup>
import { Breadcrumbs } from '@swimm/ui';
</script>

# Breadcrumbs

## One crumb

::: demo
<Breadcrumbs :items="[{icon: 'workspace', name: 'Workspace', link: '#workspace'}]"/>
:::

## Multiple crumbs

::: demo
<Breadcrumbs :items="[
{icon: 'workspace', name: 'Workspace', link: '#workspace'},
{icon: 'github', name: 'repo', link: '#repo'},
{icon: 'branch', name: 'branch', link: '#branch'},
{icon: 'doc', name: 'doc' },
]"/>
:::

## Wrapped crumbs

::: demo
<Breadcrumbs :items="[
{icon: 'workspace', name: 'Workspace', link: '#workspace'},
{icon: 'github', name: 'repo', link: '#repo'},
{icon: 'branch', name: 'branch', link: '#branch'},
{icon: 'folder', name: 'folder', link: '#folder'},
{icon: 'folder', name: 'folder', link: '#folder'},
{icon: 'folder', name: 'folder', link: '#folder'},
{icon: 'folder', name: 'folder', link: '#folder'},
{icon: 'folder', name: 'folder', link: '#folder'},
{icon: 'doc', name: 'doc' },
]"/>
:::
