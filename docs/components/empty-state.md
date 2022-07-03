<script setup>
import { EmptyState, Action, Icon } from '@swimm/ui';
</script>

# EmptyState

::: demo 
<EmptyState title="Empty State" description="This is a description" />
:::

## With Icon

::: demo
<EmptyState title="Empty State with icon" description="This is a description" iconName="gitlab"/>
:::

## Empty Action

::: demo
<EmptyState title="Empty State with Action" description="This is a description">
  <Action>Click Me</Action>
</EmptyState>
:::

## Empty State with both

::: demo
<EmptyState iconName="github" title="Empty State with icon and action" description="This is a description">
  <Action>Click Me</Action>
</EmptyState>
:::


