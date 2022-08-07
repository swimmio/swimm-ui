<script setup>
const props = defineProps({
  componentProps: { type: Object, required: true },
});
</script>

<template>
  <h3>Props</h3>
  <table v-if="componentProps">
    <thead>
      <th>Name</th>
      <th>Description</th>
      <th>Type</th>
      <th>Default</th>
    </thead>
    <tbody>
      <tr
        v-for="{
          name,
          type,
          description,
          required,
          defaultValue,
        } in componentProps"
      >
        <td>
          <strong>{{ name }}</strong>
        </td>
        <td>{{ description }}</td>
        <td>{{ type.name }}</td>
        <td v-if="required"></td>
        <td v-else>
          {{ defaultValue?.value !== 'null' ? defaultValue.value : '' }}
        </td>
      </tr>
    </tbody>
  </table>
</template>
