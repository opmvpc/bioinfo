<template>
  <div class="px-4">
    <div class="font-inter container mx-auto border-4 border-black my-4">
      <div
        class="flex items-center justify-between border-b-4 border-black px-4 py-6 bg-indigo-400"
      >
        <router-link to="/" class="text-5xl font-extrabold font-mono"
          >🧬BioInfo</router-link
        >
      </div>
      <div class="p-4">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
h1 {
  @apply inline-block border-4 border-black bg-yellow-300 px-4 py-2;
}
label {
  @apply block;
}

input.form-input,
textarea.form-input {
  @apply border-2 border-black rounded w-full;
}

button.btn {
  @apply border-2 border-black rounded-full bg-lime-400 px-4 py-2 font-bold text-black hover:bg-lime-300 transition focus:outline-none;
}

button.btn-secondary {
  @apply border-2 border-black rounded-full bg-secondary-400 px-4 py-2 font-bold text-black hover:bg-secondary-300 transition focus:outline-none;
}

button.btn-primary {
  @apply border-2 border-black rounded-full bg-primary-400 px-4 py-2 font-bold text-black hover:bg-primary-300 transition focus:outline-none;
}
</style>
