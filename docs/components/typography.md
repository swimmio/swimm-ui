<script setup>
import { SwText, FONT_FAMILY, FONT_WEIGHTS, FONT_VARIANTS } from '@swimm/ui';
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
 <sw-text :variant="FONT_VARIANTS.SYSTEM_HEADLINE">{{ FONT_VARIANTS.SYSTEM_HEADLINE }}</sw-text>
 <sw-text :variant="FONT_VARIANTS.SYSTEM_SUBTITLE">{{ FONT_VARIANTS.SYSTEM_SUBTITLE }}</sw-text>
 <sw-text :variant="FONT_VARIANTS.SYSTEM_BODY">{{ FONT_VARIANTS.SYSTEM_BODY }}</sw-text>
 <sw-text :variant="FONT_VARIANTS.TITLE">{{ FONT_VARIANTS.TITLE }}</sw-text>
 <sw-text :variant="FONT_VARIANTS.HEADLINE_1">{{ FONT_VARIANTS.HEADLINE_1 }}</sw-text>
 <sw-text :variant="FONT_VARIANTS.HEADLINE_2">{{ FONT_VARIANTS.HEADLINE_2 }}</sw-text>
 <sw-text :variant="FONT_VARIANTS.HEADLINE_3">{{ FONT_VARIANTS.HEADLINE_3 }}</sw-text>
 <sw-text :variant="FONT_VARIANTS.SUBTITLE_XL">{{ FONT_VARIANTS.SUBTITLE_XL }}</sw-text>
 <sw-text :variant="FONT_VARIANTS.SUBTITLE_L">{{ FONT_VARIANTS.SUBTITLE_L }}</sw-text>
 <sw-text :variant="FONT_VARIANTS.SUBTITLE_S">{{ FONT_VARIANTS.SUBTITLE_S }}</sw-text>
 <sw-text :variant="FONT_VARIANTS.BODY_L">{{ FONT_VARIANTS.BODY_L }}</sw-text>
 <sw-text :variant="FONT_VARIANTS.BODY_S">{{ FONT_VARIANTS.BODY_S }}</sw-text>
 <sw-text :variant="FONT_VARIANTS.BODY_XS">{{ FONT_VARIANTS.BODY_XS }}</sw-text>
:::

## Props deafult

### Font Family
::: demo
<sw-text :variant="FONT_VARIANTS.SYSTEM_SUBTITLE">Secondary font family</sw-text>

<sw-text :variant="FONT_VARIANTS.HEADLINE_3">Primary font family</sw-text>

<sw-text :variant="FONT_VARIANTS.HEADLINE_3" :family="FONT_FAMILY.SECONDARY">Force Secondary</sw-text>

:::
### Font Weights
::: demo
<sw-text :variant="FONT_VARIANTS.SUBTITLE_XL">Bold by default</sw-text>

<sw-text :variant="FONT_VARIANTS.BODY_L">Regular by default</sw-text>

<sw-text :variant="FONT_VARIANTS.SUBTITLE_XL" :weight="FONT_WEIGHTS.REGULAR">Force regular weight</sw-text>
:::

### Component
::: demo
<sw-text :variant="FONT_VARIANTS.SUBTITLE_XL">h4 by default</sw-text>

<sw-text :variant="FONT_VARIANTS.BODY_L">div by default</sw-text>

<sw-text :variant="FONT_VARIANTS.SUBTITLE_XL" component="div">
    Force div <small><small>(But keep size)</small></small>
</sw-text>

:::

## Empty variant (default)

::: demo
<sw-text>Default variant is Body-L</sw-text>
:::

## API

<ComponentApi name="SwText" />
