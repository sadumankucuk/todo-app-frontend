import {shallowMount} from "@vue/test-utils";
import TodoList from "@/components/TodoList";

describe("TodoList.vue", () => {
    test("should component exists", () => {
        const wrapper = shallowMount(TodoList)
        expect(wrapper.exists()).toBeTruthy()
    })
})
