<script setup>
const props = defineProps({
    href: String
})
</script>

<template>
     <a 
        :href="href" 
        target="_blank" 
        class="px-3 mr-2 py-2 rounded border-2 border-red-600 text-white bg-red-500 hover:bg-red-600"
    >
        <slot>Youtube</slot>
    </a>
</template>