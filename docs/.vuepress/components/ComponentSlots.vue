<script setup>
const props = defineProps({
  componentSlots: { type: Object, required: true },
});
</script>

<template>
  <h3>Slots</h3>
  <table>
    <thead>
      <th>Name</th>
      <th>Description</th>
    </thead>
    <tbody>
      <tr v-for="{ name, description } in componentSlots">
        <td>
          <strong>{{ name }}</strong>
        </td>
        <td>{{ description }}</td>
      </tr>
    </tbody>
  </table>
</template>
