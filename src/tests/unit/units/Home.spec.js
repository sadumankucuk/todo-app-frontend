import {shallowMount} from "@vue/test-utils";
import Home from "@/views/Home";
import TodoList from "@/components/TodoList";
import flushPromises from "flush-promises";
import API from "@/api";

jest.mock("@/api")


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
        const todoList = wrapper.find("#todo-list")
        expect(todoList.exists()).toBeTruthy()
    })

    test("should render todo list item components correctly", async () => {
        const mockResponse = [
            {
                id: 1,
                task: "go to the market"
            },
            {
                id: 2,
                task: "buy some milk"
            }
        ]

        API.getTodoList.mockResolvedValue(mockResponse)
        const wrapper = shallowMount(Home)
        await flushPromises()

        const todoListItemComponents = wrapper.findAllComponents(TodoList)
        expect(todoListItemComponents).toHaveLength(mockResponse.length)
    })

    test("should add a todo when user enters input and clicks the button", async () => {
        const newTodo = {id: 1, task: "buy some milk"}

        API.addTodo.mockResolvedValue(newTodo)
        API.getTodoList.mockResolvedValue([])
        const wrapper = shallowMount(Home)

        const todoTextBox = wrapper.find('#todo-input')
        await todoTextBox.setValue(newTodo.task)

        const addButton = wrapper.find("#add-todo")
        await addButton.trigger('click')

        await flushPromises()

        expect(wrapper.find('#todo-input').element.value).toBe('')

        const todoListItemComponents = wrapper.findAllComponents(TodoList)
        expect(todoListItemComponents).toHaveLength(1)
    })


})
