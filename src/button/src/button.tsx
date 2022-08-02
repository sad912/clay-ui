import { defineComponent, toRefs } from 'vue'
import { ButtonProps, buttonProps } from './button-type'

export default defineComponent({
  name: 'ClayButton',
  props: buttonProps,
  setup(props: ButtonProps, { slots }) {
    const { type, size, disabled, block } = toRefs(props)
    const blockClass = block.value ? 's-btn--block' : '' // 新增
    return () => {
      const defaultSlot = slots.default ? slots.default() : '按钮'
      return (
        <button
          class={`s-btn s-btn--${type.value} s-btn--${size.value} ${blockClass}`}
          disabled={disabled.value}
        >
          {defaultSlot}
        </button>
      )
    }
  }
})
