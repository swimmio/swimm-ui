<script setup lang="ts">
import { SwAvatar } from '@swimm/ui';
const img = 'https://www.w3schools.com/howto/img_avatar2.png';
</script>

# Avatar

Avatar can get props that will define the appearance and behavior of the component.

- **text** - Required. The text that would be rendered, or be used as alt-text for the img.
- **src** - Optional. The source for the image to be rendered.
- **size** - Optional. Defaults to `AVATAR_SIZE.LARGE`. Can be one of the sizes (`AVATAR_SIZE`) defined on the component.
- **tooltip** - Optional. Defaults to empty string. in case empty or not supplied by consumer of the component, `text` prop would be shown as tooltip text
- **hideTooltip** - Optional. Defaults to `false`.
- **square** - Optional. Defaults to `false`. Square shape instead of default rounded circle.
- **border** - Optional. Defaults to `false`. A gentle secondary border.

## Rounded With Text

::: demo
<div style="display: flex; justify-content: space-between; align-items: center" >
    <sw-avatar text="Swimm" size="huge" />
    <sw-avatar text="Swimm" size="xlarge" />
    <sw-avatar text="Swimm" size="large" />
    <sw-avatar text="Swimm" size="medium"/>
    <sw-avatar text="Swimm" size="small" />
    <sw-avatar text="Swimm" size="xsmall" />
</div>
:::

## Squared With Text

::: demo
<div style="display: flex; justify-content: space-between; align-items: center" >
	<sw-avatar text="Swimm" size="huge" square />
	<sw-avatar text="Swimm" size="xlarge" square />
	<sw-avatar text="Swimm" size="large" square />
	<sw-avatar text="Swimm" size="medium" square />
	<sw-avatar text="Swimm" size="small" square />
	<sw-avatar text="Swimm" size="xsmall" square />
</div>
:::

## Rounded With Image

::: demo

<div style="display: flex; justify-content: space-between; align-items: center" >
	<sw-avatar text="Swimm" :src="img" size="huge" />
	<sw-avatar text="Swimm" :src="img" size="xlarge" />
	<sw-avatar text="Swimm" :src="img" size="large" />
	<sw-avatar text="Swimm" :src="img" size="medium"/>
	<sw-avatar text="Swimm" :src="img" size="small" />
	<sw-avatar text="Swimm" :src="img" size="xsmall" />
</div>
:::

## Squared With Image

::: demo

<div style="display: flex; justify-content: space-between; align-items: center" >
	<sw-avatar text="Swimm" :src="img" size="huge" square />
	<sw-avatar text="Swimm" :src="img" size="xlarge" square />
	<sw-avatar text="Swimm" :src="img" size="large" square />
	<sw-avatar text="Swimm" :src="img" size="medium" square />
	<sw-avatar text="Swimm" :src="img" size="small" square />
	<sw-avatar text="Swimm" :src="img" size="xsmall" square />
</div>
:::

## API

<ComponentApi name="SwAvatar" />
