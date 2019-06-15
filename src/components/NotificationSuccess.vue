<template>
    <div v-if="showNotification" class="notification notification__border notification__border--success has-text-centered">
        <button v-on:click="$emit('closeNotification')" class="delete"></button>
        <p>{{ notificationText }}</p>
    </div>
</template>
<script>
export default {
    name: 'NotificationSuccess',
    props: [
      'notificationText',
      'showNotification',
      'closeNotification'
      ]
}
</script>

<style lang="scss">
@import "./../scss/variables.scss";
.notification {
  &__border {
    border-left: 1px solid gray !important;
    &--success {
      border-left: 6px solid $success !important;
    }
  }
}
</style>
