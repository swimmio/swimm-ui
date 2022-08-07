<script setup>
const props = defineProps({
  componentEvents: { type: Object, required: true },
});
</script>

<template>
  <h3>Events</h3>
  <table>
    <thead>
      <th>Name</th>
      <th>Description</th>
    </thead>
    <tbody>
      <tr v-for="{ name, description } in componentEvents">
        <td>
          <strong>{{ name }}</strong>
        </td>
        <td>{{ description }}</td>
      </tr>
    </tbody>
  </table>
</template>
