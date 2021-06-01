<template>
  <div class="mt-12 xl:mt-0" v-if="resultMatrix.length > 0">
    <table>
      <tr>
        <td></td>
        <td></td>
        <td class="char" v-for="(char, indexChar) in chaine1" :key="indexChar">
          {{ char }}
        </td>
      </tr>
      <tr v-for="indexRow in resultMatrix.length + 1" :key="indexRow">
        <td class="char" v-if="indexRow < resultMatrix.length">
          {{ chaine2[indexRow - 1] }}
        </td>
        <td v-for="(col, indexCol) in resultMatrix[indexRow]" :key="indexCol">
          {{ resultMatrix[indexRow][indexCol] }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: ["chaine1", "chaine2", "resultMatrix"]
};
</script>

<style lang="postcss" scoped>
td {
  @apply text-xl border-2 border-app-200 h-16 w-16 text-center;
}

td.char {
  @apply text-2xl font-bold border-2 border-app-200 h-16 w-16 text-center text-app-700 bg-app-50;
}
</style>
