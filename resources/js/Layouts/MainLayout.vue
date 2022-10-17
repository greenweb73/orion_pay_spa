<template>
    <div class=" min-h-screen sm:items-center sm:pt-0 overflow-hidden bg-no-repeat bg-cover"
         style="
    background-position: 50%;
    background-image: url('/images/orion-constellation.jpg');
    height: 350px;
  ">
        <slot />
    </div>
</template>
<script>
    export default {
        name: "MainLayout"
    }
</script>

