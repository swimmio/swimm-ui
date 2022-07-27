<template>
  <ClientOnly>
    <table>
      <thead>
        <tr>
          <th>Reference</th>
          <th>Token</th>
          <th>PX</th>
          <th>EM</th>
          <th>Use Case</th>
        </tr>
      </thead>
      <tbody>
        <slot />
      </tbody>
    </table>
  </ClientOnly>
</template>
