import {shallowMount} from "@vue/test-utils";
import TodoList from "@/components/TodoList";

describe("TodoList.vue", () => {
    test("should component exists", () => {
        const wrapper = shallowMount(TodoList,{
                propsData: {
                    todo: {
                        id: 1,
                        task: ""
                    }
                }
            }
        )
        expect(wrapper.exists()).toBeTruthy()
    })
})
