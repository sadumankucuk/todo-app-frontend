import {pactWith} from "jest-pact";
import {API} from "@/api";
import {eachLike, like, integer} from "@pact-foundation/pact/src/dsl/matchers";

pactWith({
    consumer: "TodoApp",
    provider: "TodoService"
}, provider => {
    describe("todos", () => {
        let api
        beforeEach(() => {
            api = new API(provider.mockService.baseUrl)
        })

        test("add todo", async () => {
            const requestObj = {
                task: like("buy some milk")
            }
            await provider.addInteraction({
                state: "add todo successfully",
                uponReceiving: "a request to create a new todo",
                withRequest: {
                    method: "POST",
                    path: "/api/v1/todos",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: like(requestObj)
                },
                willRespondWith: {
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json; charset=UTF-8',
                    },
                    body: {
                        id: integer(1),
                        task: like("buy some milk")
                    }
                }
            })
            const res = await api.addTodo({task: "buy some milk"})
            expect(res.task).toEqual("buy some milk")
        })
        test("get todo list", async () => {
            await provider.addInteraction({
                state: "get todo list successfully",
                uponReceiving: "a request not empty for todo list",
                withRequest: {
                    method:"GET",
                    path:"/api/v1/todos"
                },
                willRespondWith: {
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json; charset=UTF-8',
                    },
                    body: eachLike({
                        id: integer(1),
                        task: like("buy some milk")
                    })
                }
            })

            const res = await api.getTodoList()
            expect(res[0].id).toEqual(1)
        })
    })
})
