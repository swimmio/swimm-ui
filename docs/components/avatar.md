<script setup>
import { SwAvatar, AVATAR_SIZE } from '@swimm/ui';
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
    <sw-avatar text="Swimm" :size="AVATAR_SIZE.HUGE" />
    <sw-avatar text="Swimm" :size="AVATAR_SIZE.XLARGE" />
    <sw-avatar text="Swimm" :size="AVATAR_SIZE.LARGE" />
    <sw-avatar text="Swimm" :size="AVATAR_SIZE.MEDIUM"/>
    <sw-avatar text="Swimm" :size="AVATAR_SIZE.SMALL" />
    <sw-avatar text="Swimm" :size="AVATAR_SIZE.XSMALL" />
</div>
:::

## Squared With Text

::: demo
<div style="display: flex; justify-content: space-between; align-items: center" >
	<sw-avatar text="Swimm" :size="AVATAR_SIZE.HUGE" square />
	<sw-avatar text="Swimm" :size="AVATAR_SIZE.XLARGE" square />
	<sw-avatar text="Swimm" :size="AVATAR_SIZE.LARGE" square />
	<sw-avatar text="Swimm" :size="AVATAR_SIZE.MEDIUM" square />
	<sw-avatar text="Swimm" :size="AVATAR_SIZE.SMALL" square />
	<sw-avatar text="Swimm" :size="AVATAR_SIZE.XSMALL" square />
</div>
:::

## Rounded With Image

::: demo

<div style="display: flex; justify-content: space-between; align-items: center" >
	<sw-avatar text="Swimm" :src="img" :size="AVATAR_SIZE.HUGE" />
	<sw-avatar text="Swimm" :src="img" :size="AVATAR_SIZE.XLARGE" />
	<sw-avatar text="Swimm" :src="img" :size="AVATAR_SIZE.LARGE" />
	<sw-avatar text="Swimm" :src="img" :size="AVATAR_SIZE.MEDIUM"/>
	<sw-avatar text="Swimm" :src="img" :size="AVATAR_SIZE.SMALL" />
	<sw-avatar text="Swimm" :src="img" :size="AVATAR_SIZE.XSMALL" />
</div>
:::

## Squared With Image

::: demo

<div style="display: flex; justify-content: space-between; align-items: center" >
	<sw-avatar text="Swimm" :src="img" :size="AVATAR_SIZE.HUGE" square />
	<sw-avatar text="Swimm" :src="img" :size="AVATAR_SIZE.XLARGE" square />
	<sw-avatar text="Swimm" :src="img" :size="AVATAR_SIZE.LARGE" square />
	<sw-avatar text="Swimm" :src="img" :size="AVATAR_SIZE.MEDIUM" square />
	<sw-avatar text="Swimm" :src="img" :size="AVATAR_SIZE.SMALL" square />
	<sw-avatar text="Swimm" :src="img" :size="AVATAR_SIZE.XSMALL" square />
</div>
:::

## API

<ComponentApi name="SwAvatar" />