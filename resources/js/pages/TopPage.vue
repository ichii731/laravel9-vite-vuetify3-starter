    <template>
  <p>Top Page</p>
  <h1>{{ count }}</h1>
  <v-btn color="blue" @click="count++">Increment</v-btn>

  <router-link to="/next">To Next Page →</router-link>
</template>

    <script setup lang="ts">
import { ref } from "vue";

const count = ref<number>(0);
</script>
