# Toggle

<script>
import { SwToggle, SIZE } from '@swimm/ui';

export default {
  components: { SwToggle },
	setup() {
  	return { SIZE }
  }
}
</script>

Toggle can get props that will define the appearance and behavior of the component.

- **value** - Required. The value of the toggle.
- **disabled** - Optional. Whether the toggle should be disabled.
- **size** - Optional. Defaults to `SIZE.MEDIUM`. Can be one of the sizes (`SIZE`) defined on the component.

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
    <sw-toggle :value="true" :size="SIZE.LARGE" />
    <sw-toggle :value="true" :size="SIZE.MEDIUM" />
    <sw-toggle :value="true" :size="SIZE.SMALL" />
    <sw-toggle :value="true" :size="SIZE.XSMALL" />
</div>
:::
