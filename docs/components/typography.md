<script setup>
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

## Headline1

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

## Headline2

::: demo
<sw-text> TEST</sw-text>
:::

## Headline3

::: demo
<sw-text> TEST</sw-text>
:::

## System subtitle

::: demo
<sw-text> TEST</sw-text>
:::

## VARIANTS

::: demo

<div style="display: flex; justify-content: space-between; align-items: center" >
    <sw-text> TEST</sw-text>
    <sw-text> TEST</sw-text>
    <sw-text> TEST</sw-text>
    <sw-text> TEST</sw-text>
</div>
:::
