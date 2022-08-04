<script setup>
import { SwTypography } from '@swimm/ui';
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
 <sw-typography variant="system-headline">system-headline</sw-typography>
 <sw-typography variant="system-subtitle">system-subtitle</sw-typography>
 <sw-typography variant="system-body">system-body</sw-typography>
 <sw-typography variant="title">title</sw-typography>
 <sw-typography variant="headline1">headline1</sw-typography>
 <sw-typography variant="headline2">headline2</sw-typography>
 <sw-typography variant="headline3">headline3</sw-typography>
 <sw-typography variant="subtitle-XL">subtitle-XL</sw-typography>
 <sw-typography variant="subtitle-L">subtitle-L</sw-typography>
 <sw-typography variant="subtitle-S">subtitle-S</sw-typography>
 <sw-typography variant="body-L">body-L</sw-typography>
 <sw-typography variant="body-S">body-S</sw-typography>
 <sw-typography variant="body-XS">body-XS</sw-typography>
:::

## Headline2

::: demo
<sw-typography> TEST</sw-typography>
:::

## Headline3

::: demo
<sw-typography> TEST</sw-typography>
:::

## System subtitle

::: demo
<sw-typography> TEST</sw-typography>
:::

## VARIANTS

::: demo

<div style="display: flex; justify-content: space-between; align-items: center" >
    <sw-typography> TEST</sw-typography>
    <sw-typography> TEST</sw-typography>
    <sw-typography> TEST</sw-typography>
    <sw-typography> TEST</sw-typography>
</div>
:::
