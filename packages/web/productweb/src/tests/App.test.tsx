import React from "react"
import {render, screen} from "@testing-library/react"
import {App} from "../App"

global.fetch = jest.fn(async () => {
    return {
        async json() {
            return {}
        },
    } as Response
})

const AppTestWrapper: any = (): React.ReactElement => {
    return <App />
}

describe("App", () => {
    test("should render <App/>", () => {
        render(<AppTestWrapper />)
        // expect(screen.getByRole("heading", {name: /react application template/i})).toBeDefined()
    })
})
