<template>
    <div class="mb-3">
        <input
            v-model="searchQuery"
            type="text"
            class="form-control"
            id="searchInput"
            placeholder="Enter GitHub username"
        />
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            searchQuery: '',
        };
    },
    watch: {
            searchQuery(newQuery) {
            this.$emit('search', newQuery);
        },
    },
});
</script>
