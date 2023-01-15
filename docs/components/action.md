<script setup lang="ts">
import { Action } from '@swimm/ui';
</script>

# Action

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
<Action type="a" href="#">Link Default</Action>
:::

### Link disabled

::: demo
<Action type="a" :disabled="true">Link Disabled</Action>
:::

## Variants

### Danger

::: demo
<Action variant="danger" secondary>Primary Danger</Action>
:::

### Success

::: demo
<Action variant="success">Primary Success</Action>
:::

## Small

:::demo
<Action size="small">Small Default</Action>
:::

::: demo
<Action size="small" :disabled="true">Small Disabled</Action>
:::

::: demo
<Action size="small" secondary>Secondary Default</Action>
:::

::: demo
<Action size="small" secondary :disabled="true">Secondary Disabled</Action>
:::

::: demo
<Action size="small" type="a" href="#">Link Default</Action>
:::

::: demo
<Action size="small" type="a" :disabled="true">Link Disabled</Action>
:::

## API

<ComponentApi name="Action" />
