<template>
  <div>
    <div class="row">
      <div
        class="color-group"
        v-for="colorGroup in colorsGroups"
        :key="colorGroup.name"
      >
        <h1>{{ colorGroup.name }}</h1>
        <div class="color-row" v-for="color in colorGroup.colors" :key="color">
          <div class="color" :style="`background: var(--${color})`" />
          <div>{{ color }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Buttons",
  data() {
    return {
      colorsGroups: [
        {
          name: "Primary",
          colors: [
            "feet-in-the-water",
            "coastal-shore",
            "swimm-blue",
            "quick-dive",
            "deep-sea",
          ],
        },
        {
          name: "Neutral",
          colors: [
            "clear-white",
            "wash-me",
            "pearl-river",
            "harbor-gray",
            "fifty-shades",
            "fifty-shades-500",
            "high-tide",
            "high-tide-500",
            "gravel-rocks",
            "sea-anchor",
            "dark-charcoal",
          ],
        },
        {
          name: "Accent",
          colors: [
            "safe-zone",
            "safe-zone-100",
            "high-violet",
            "wave-jammer",
            "wild-ultra",
            "fake-caffe-sheva",
            "fake-caffe-sheva-500",
          ],
        },
        {
          name: "Semantic",
          colors: [
            "success-green",
            "success-green-100",
            "success-green-300",
            "success-green-500",
            "success-green-700",
            "success-green-900",
            "warning-yellow",
            "warning-yellow-100",
            "warning-yellow-300",
            "warning-yellow-200",
            "warning-yellow-500",
            "warning-yellow-700",
            "warning-yellow-900",
            "oh-no-red",
            "oh-no-red-100",
            "oh-no-red-200",
            "oh-no-red-300",
            "oh-no-red-500",
            "oh-no-red-700",
            "oh-no-red-900",
          ],
        },
        {
          name: "Gradients",
          colors: [
            "blue-high-from",
            "blue-high-to",
            "blue-high",
            "gradient-from",
            "gradient-middle",
            "gradient-to",
            "gradient",
          ],
        },
      ],
    };
  },
};
</script>

<style>
.row {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.color-group {
  text-align: center;
}

.color-row {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 10px;
}

.color {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid var(--fifty-shades);
}
</style>