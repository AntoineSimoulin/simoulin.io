<script setup>
import CopyIcon from "./icons/iconCopy.vue";
import CheckIcon from "./icons/iconCheck.vue";
import { ref, onMounted, watch } from 'vue';
import { getHighlighter } from 'shikiji';

const props = defineProps({
    code: {
        type: String,
        required: true
    },
    language: {
        type: String,
        default: 'python'
    }
});

const copied = ref(false);
const highlightedCode = ref('');
const isLoading = ref(true);

const copyToClipboard = async () => {
    try {
        await navigator.clipboard.writeText(props.code);
        copied.value = true;
        setTimeout(() => {
            copied.value = false;
        }, 1000);
    } catch (err) {
        console.error('Failed to copy!', err);
    }
}

const highlight = async () => {
    isLoading.value = true;
    try {
        const highlighter = await getHighlighter({
            themes: ['vitesse-light'],
            langs: [props.language]
        });
        highlightedCode.value = highlighter.codeToHtml(props.code, {
            lang: props.language,
            theme: 'vitesse-light'
        });
    } catch (e) {
        console.error('Shiki highlight error:', e);
        // Fallback to basic display if highlighting fails
        highlightedCode.value = `<pre><code>${props.code}</code></pre>`;
    } finally {
        isLoading.value = false;
    }
};

onMounted(() => {
    highlight();
});

watch(() => props.code, () => {
    highlight();
});
</script>

<template>
  <div class="relative group my-4">
    <div v-if="isLoading" class="p-4 rounded-lg bg-gray-50 border border-gray-100 text-gray-400 font-mono text-sm">
        Loading code...
    </div>
    <div v-else class="shiki-container relative rounded-lg overflow-hidden border border-gray-100 bg-[#ffffff]">
        <div v-html="highlightedCode" class="overflow-x-auto p-4 text-sm font-mono leading-relaxed"></div>
        
        <button 
            @click="copyToClipboard" 
            class="absolute top-2 right-2 p-2 rounded-md bg-white/80 backdrop-blur-sm border border-gray-200 hover:bg-gray-100 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100" 
            :title="copied ? 'Copied!' : 'Copy'"
        >
            <CopyIcon v-if="!copied" class="w-4 h-4 text-gray-500" />
            <CheckIcon v-else class="w-4 h-4 text-green-600"/>
        </button>
    </div>
  </div>
</template>

<style>
/* Shiki output styling overrides if needed */
.shiki-container pre.shiki {
    background-color: transparent !important;
    margin: 0;
    padding: 0;
}
</style>