<template>
    <div class="field">
        <label class="label">{{ label }}</label>
        <div class="control has-icons-right">
            <input v-on:keyup="$emit('validate')" class="input" type="text" placeholder="test"> <!-- Establishment Name Input -->
            <span v-if="required" class="help has-text-danger">{{ requiredText }}</span> <!-- Required -->
            <span v-if="help" class="help">{{ helpText }}</span> <!-- Help -->
            <span v-if="success" class="icon is-small is-right">
                <i class="fas fa-check has-text-success"></i> <!-- Check Icon -->
            </span>
            <span v-if="error" class="icon is-small is-right">
                <i class="fas fa-times has-text-danger"></i><!-- X icon -->
            </span>
        </div>
    </div><!-- Field end -->
</template>
<script>
export default {
    name: 'InputField',
    props: ['value','required','help','error','success','label','requiredText','helpText'],
    data () {
        return {
            content: this.value
        }
    },
    methods: {
        handleInput (e) {
            this.$emit('input', this.content)
        }
    }
}
</script>