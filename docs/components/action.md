# Action

<script>
import { Action, TYPES, SIZES, VARIANTS } from "@swimm/ui";
export default {
  components: { Action },
  setup() {
    console.log(TYPES)
    return { TYPES, SIZES, VARIANTS }
  }
}
</script>

## Primary

::: demo
<Action>Primary Default</Action>
:::

### Primary with Icon

::: demo
<Action trailing-icon="arrow-right">Primary with Icon</Action>
:::

## Secondary

::: demo
<Action secondary>Secondary Default</Action>
:::

### Secondary disabled

::: demo
<Action secondary :disabled="true">Secondary Disabled</Action>
:::

## Disabled

::: demo
<Action :disabled="true">Primary Disabled</Action>
:::

## Link

::: demo
<Action :type="TYPES.LINK" href="#">Link Default</Action>
:::

### Link disabled

::: demo
<Action :type="TYPES.LINK" :disabled="true">Link Disabled</Action>
:::

## Variants

### Danger

::: demo
<Action :variant="VARIANTS.DANGER" secondary>Primary Danger</Action>
:::

### Success

::: demo
<Action :variant="VARIANTS.SUCCESS">Primary Success</Action>
:::

## Small

:::demo
<Action :size="SIZES.SMALL">Small Default</Action>
:::

::: demo
<Action :size="SIZES.SMALL" :disabled="true">Small Disabled</Action>
:::

::: demo
<Action :size="SIZES.SMALL" secondary>Secondary Default</Action>
:::

::: demo
<Action :size="SIZES.SMALL" secondary :disabled="true">Secondary Disabled</Action>
:::

::: demo
<Action :size="SIZES.SMALL" :type="TYPES.LINK" href="#">Link Default</Action>
:::

::: demo
<Action :size="SIZES.SMALL" :type="TYPES.LINK" :disabled="true">Link Disabled</Action>
:::
