<template>
  <svg v-if="useSvg" class="icon" aria-hidden="true">
    <use :href="iconname"></use>
  </svg>
  <i v-else class="iconfont" :class="iconname"></i>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "icon",
  props: {
    type: {
      type: String,
      default: "svg",
    },
    name: {
      type: String,
      default: "",
      required: true,
    },
    prefix: {
      type: String,
      default: "icon",
    },
  },
  setup(props) {
    const iconname = computed(() => {
      let hash = props.type === "svg" ? "#" : "";
      console.log(hash);
      return `${hash}${props.prefix}-${props.name}`;
    });
    const useSvg = computed(() => {
      let type = props.type;
      return type === "svg";
    });
    return {
      iconname,
      useSvg,
      msg: "Invalid icon",
    };
  },
});
</script>

<style scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>