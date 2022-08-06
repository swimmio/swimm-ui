<script setup>
import { SwText, FONT_FAMILY, FONT_WEIGHTS } from '@swimm/ui';
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
 <sw-text variant="system-headline">system-headline</sw-text>
 <sw-text variant="system-subtitle">system-subtitle</sw-text>
 <sw-text variant="system-body">system-body</sw-text>
 <sw-text variant="title">title</sw-text>
 <sw-text variant="headline1">headline1</sw-text>
 <sw-text variant="headline2">headline2</sw-text>
 <sw-text variant="headline3">headline3</sw-text>
 <sw-text variant="subtitle-XL">subtitle-XL</sw-text>
 <sw-text variant="subtitle-L">subtitle-L</sw-text>
 <sw-text variant="subtitle-S">subtitle-S</sw-text>
 <sw-text variant="body-L">body-L</sw-text>
 <sw-text variant="body-S">body-S</sw-text>
 <sw-text variant="body-XS">body-XS</sw-text>
:::

## Props deafult

### Font Family
::: demo
<sw-text variant="system-subtitle">Secondary font family</sw-text>

<sw-text variant="headline3">Primary font family</sw-text>

<sw-text variant="headline3" :family="FONT_FAMILY.SECONDARY">Force Secondary</sw-text>

:::
### Font Weights
::: demo
<sw-text variant="subtitle-XL">Bold by default</sw-text>

<sw-text variant="body-L">Regular by default</sw-text>

<sw-text variant="subtitle-XL" :weight="FONT_WEIGHTS.REGULAR">Force regular weight</sw-text>
:::

### Component
::: demo
<sw-text variant="subtitle-XL">h4 by default</sw-text>

<sw-text variant="body-L">div by default</sw-text>

<sw-text variant="subtitle-XL" component="div">
    Force div <small><small>(But keep size)</small></small>
</sw-text>

:::

## Empty variant (default)

::: demo
<sw-text>Default variant is Body-L</sw-text>
:::
