<script setup lang="ts">
import { SwToggle } from '@swimm/ui';
</script>

# Toggle

Toggle can get props that will define the appearance and behavior of the component.

- **value** - Required. The value of the toggle.
- **disabled** - Optional. Whether the toggle should be disabled.
- **size** - Optional. Defaults to `TOGGLE_SIZE.MEDIUM`. Can be one of the sizes (`TOGGLE_SIZE`) defined on the component.

## On

::: demo
<sw-toggle :value="true" />
:::

## Off

::: demo
<sw-toggle :value="false" />
:::

## Disabled & On

::: demo
<sw-toggle :value="true" disabled />
:::

## Disabled & Off

::: demo
<sw-toggle :value="false" disabled />
:::

## Sizes

::: demo

<div style="display: flex; justify-content: space-between; align-items: center" >
    <sw-toggle :value="true" size="large" />
    <sw-toggle :value="true" size="medium" />
    <sw-toggle :value="true" size="small" />
    <sw-toggle :value="true" size="xsmall" />
</div>
:::

## API

<ComponentApi name="SwToggle" />
