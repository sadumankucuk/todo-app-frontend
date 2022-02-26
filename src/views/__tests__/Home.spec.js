import {shallowMount} from "@vue/test-utils";
import Home from "@/views/Home";
import TodoList from "@/components/TodoList";

describe("Home.vue", () => {
    let wrapper
    beforeEach(()=> {
        wrapper = shallowMount(Home)
    })

    test("should component exists", () => {
        expect(wrapper.exists()).toBeTruthy()
    })

    test("should todo textBox exists", () => {
        const todoTextBox = wrapper.find("#todo-input")
        expect(todoTextBox.exists()).toBeTruthy()
    })

    test("should add button exists", () => {
        const addButton = wrapper.find("#add-todo")
        expect(addButton.exists()).toBeTruthy()
    })

    test("should todoList component exists", () => {
        const todoList = wrapper.findComponent(TodoList)
        expect(todoList.exists()).toBeTruthy()
    })
})
