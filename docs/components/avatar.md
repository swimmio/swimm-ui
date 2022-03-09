# Avatar

Avatar can get props that will define the appearance and behavior of the component.

- **text** - Required. The text that would be rendered, or be used as alt-text for the img.
- **src** - Optional. The source for the image to be rendered.
- **size** - Optional. Defaults to `SIZE.LARGE`. Can be one of the sizes (`SIZE`) defined on the component.
- **shape** - Optional. Defaults to `SHAPE.ROUND`. Can be one of the shapes (`SHAPE`) defined on the component.

<script>
import SwAvatar, { SHAPE, SIZE } from '../../src/components/Avatar/SwAvatar';
const img = 'https://www.w3schools.com/howto/img_avatar2.png';
export default {
  components: { SwAvatar },
  setup() {
    return { SHAPE, SIZE, img }
  }
}
</script>

## Rounded With Text

::: demo
<div style="display: flex; justify-content: space-between; align-items: center" >
    <sw-avatar text="Swimm" :size="SIZE.HUGE" />
    <sw-avatar text="Swimm" :size="SIZE.XLARGE" />
    <sw-avatar text="Swimm" :size="SIZE.LARGE" />
    <sw-avatar text="Swimm" :size="SIZE.MEDIUM"/>
    <sw-avatar text="Swimm" :size="SIZE.SMALL" />
    <sw-avatar text="Swimm" :size="SIZE.XSMALL" />
</div>
:::

## Squared With Text

::: demo
<div style="display: flex; justify-content: space-between; align-items: center" >
    <sw-avatar text="Swimm" :size="SIZE.HUGE" :shape="SHAPE.SQUARE" />
    <sw-avatar text="Swimm" :size="SIZE.XLARGE" :shape="SHAPE.SQUARE" />
    <sw-avatar text="Swimm" :size="SIZE.LARGE" :shape="SHAPE.SQUARE" />
    <sw-avatar text="Swimm" :size="SIZE.MEDIUM" :shape="SHAPE.SQUARE" />
    <sw-avatar text="Swimm" :size="SIZE.SMALL" :shape="SHAPE.SQUARE" />
    <sw-avatar text="Swimm" :size="SIZE.XSMALL" :shape="SHAPE.SQUARE" />
</div>
:::

## Rounded With Image

::: demo
<div style="display: flex; justify-content: space-between; align-items: center" >
    <sw-avatar text="Swimm" :src="img" :size="SIZE.HUGE" />
    <sw-avatar text="Swimm" :src="img" :size="SIZE.XLARGE" />
    <sw-avatar text="Swimm" :src="img" :size="SIZE.LARGE" />
    <sw-avatar text="Swimm" :src="img" :size="SIZE.MEDIUM"/>
    <sw-avatar text="Swimm" :src="img" :size="SIZE.SMALL" />
    <sw-avatar text="Swimm" :src="img" :size="SIZE.XSMALL" />
</div>
:::

## Squared With Image

::: demo
<div style="display: flex; justify-content: space-between; align-items: center" >
    <sw-avatar text="Swimm" :src="img" :size="SIZE.HUGE" :shape="SHAPE.SQUARE" />
    <sw-avatar text="Swimm" :src="img" :size="SIZE.XLARGE" :shape="SHAPE.SQUARE" />
    <sw-avatar text="Swimm" :src="img" :size="SIZE.LARGE" :shape="SHAPE.SQUARE" />
    <sw-avatar text="Swimm" :src="img" :size="SIZE.MEDIUM" :shape="SHAPE.SQUARE" />
    <sw-avatar text="Swimm" :src="img" :size="SIZE.SMALL" :shape="SHAPE.SQUARE" />
    <sw-avatar text="Swimm" :src="img" :size="SIZE.XSMALL" :shape="SHAPE.SQUARE" />
</div>
:::