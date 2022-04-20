# SwButton

<script>
import { THEMES, SIZES, STATES } from "../../src/components/SwButton/SwButton";
export default {
  setup() {
    return { THEMES, SIZES, STATES }
  }
}
</script>

## Primary

::: demo
<SwButton>Primary Default</SwButton>
:::

### Primary with Icon

::: demo
<SwButton icon="arrow-right">Primary with Icon</SwButton>
:::

::: demo
<SwButton iconOnLeft icon="add">Primary with Left Icon</SwButton>
:::

## Secondary

::: demo
<SwButton :theme="THEMES.SECONDARY">Secondary Default</SwButton>
:::

### Secondary disabled

::: demo
<SwButton :theme="THEMES.SECONDARY" :disabled="true">Secondary Disabled</SwButton>
:::

## Tertiary

::: demo
<SwButton :theme="THEMES.TERTIARY">Tertiary</SwButton>
:::

::: demo
<SwButton :theme="THEMES.TERTIARY" :disabled="true">Tertiary Disabled</SwButton>
:::

## Disabled

::: demo
<SwButton :disabled="true">Primary Disabled</SwButton>
:::

### Destructive

::: demo
<SwButton :state="STATES.DESTRUCTIVE" secondary>Primary Danger</SwButton>
:::

### Success

::: demo
<SwButton :state="STATES.SUCCESS">Primary Success</SwButton>
:::

## Small

:::demo
<SwButton :size="SIZES.SMALL">Small Default</SwButton>
:::

::: demo
<SwButton :size="SIZES.SMALL" :disabled="true">Small Disabled</SwButton>
:::

::: demo
<SwButton :size="SIZES.SMALL" :theme="THEMES.SECONDARY">Secondary Default</SwButton>
:::

::: demo
<SwButton :size="SIZES.SMALL" :theme="THEMES.SECONDARY" :disabled="true">Secondary Disabled</SwButton>
:::

::: demo
<SwButton :size="SIZES.SMALL" :theme="THEMES.TERTIARY">Tertiary</SwButton>
:::

::: demo
<SwButton :size="SIZES.SMALL" :theme="THEMES.TERTIARY" :disabled="true">Tertiary Disabled</SwButton>
:::