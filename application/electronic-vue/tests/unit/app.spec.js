import {mount} from "@vue/test-utils";
import App from '../../src/App'

const mockRoute = {
    params: {
        id: 1
    }
}
const mockRouter = {
    push: jest.fn()
}

const wrapper = mount(App, {
    global: {
        mocks: {
            $route: mockRoute,
            $router: mockRouter
        }
    }
})

test('App renders', () => {
    expect(wrapper.exists()).toBe(true)
})

test('App logo should exist', () => {
    expect(wrapper.find('.navbar-brand').text()).toBe('Electronic Store')
})

test('Add Electronic item should exist', () => {
    expect(wrapper.find('.nav-link').text()).toBe('Add Electronic Item')
})
