<script setup lang="ts">
import { SwText } from '@swimm/ui';
</script>

<style scoped>
.theme-default-content h1,
.theme-default-content h2,
.theme-default-content h3,
.theme-default-content h4,
.theme-default-content h5,
.theme-default-content h6 {
    margin: 16px 0;
    padding: 0;
    border: none;
}
</style>

# Typography

Typography can get props that will change its appearance.

- **component** - the component that will be displayed `div`/`span`/`h1`/`h2`/`h3`/`h4`/`h5`/`h6`
- **variant** - (default: `VARIANTS.BODY_L`)
- **family** - the font family that will be used for the font
- **weight** - the font weight that will be used for the font

### Basic

::: demo
 <SwText variant="system-headline">system-headline</SwText>
 <SwText variant="system-subtitle">system-subtitle</SwText>
 <SwText variant="system-body">system-body</SwText>
 <SwText variant="title">title</SwText>
 <SwText variant="headline1">headline1</SwText>
 <SwText variant="headline2">headline2</SwText>
 <SwText variant="headline3">headline3</SwText>
 <SwText variant="subtitle-XL">subtitle-XL</SwText>
 <SwText variant="subtitle-L">subtitle-L</SwText>
 <SwText variant="subtitle-S">subtitle-S</SwText>
 <SwText variant="body-L">body-L</SwText>
 <SwText variant="body-S">body-S</SwText>
 <SwText variant="body-XS">body-XS</SwText>
:::

## Props deafult

### Font Family
::: demo
<SwText variant="system-subtitle">Secondary font family</SwText>

<SwText variant="headline3">Primary font family</SwText>

<SwText variant="headline3" :family="fontfamily-secondary">Force Secondary</SwText>

:::
### Font Weights
::: demo
<SwText variant="subtitle-XL">Bold by default</SwText>

<SwText variant="body-L">Regular by default</SwText>

<SwText variant="subtitle-XL" weight="regular">Force regular weight</SwText>
:::

### Component
::: demo
<SwText variant="subtitle-XL">h4 by default</SwText>

<SwText variant="body-L">div by default</SwText>

<SwText variant="subtitle-XL" component="div">
    Force div <small><small>(But keep size)</small></small>
</SwText>

:::

## Empty variant (default)

::: demo
<SwText>Default variant is Body-L</SwText>
:::

## API

<ComponentApi name="SwText" />
