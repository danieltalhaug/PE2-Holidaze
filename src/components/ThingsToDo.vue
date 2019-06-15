<template>
  <div class="column">
    <div class="card height-fix">
      <div class="card-image">
        <figure class="image is-4by3">
          <img :src="image" :alt="imageAlt"><!-- Image and alt -->
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <h4 class="title font-regular is-5">{{ title }}</h4><!--Title -->
          </div>
        </div>
        <p class="content">
        {{ content }}
        </p><!-- Content end -->
      </div><!-- Card Content end -->
    </div><!-- Card end -->
  </div><!-- Column end -->
</template>
<script>

export default {
    name: 'ThingsToDo',
    props: ['title','content','image','imageAlt']
}
</script>

<style lang="scss">
@import "./../scss/variables.scss";
.height-fix {
  height: 480px;
  @media screen and (max-width: $br-large) {
    height: 440px;
  }
  @media screen and (max-width: $br-medium) {
    height: auto;
  }
}
</style>
