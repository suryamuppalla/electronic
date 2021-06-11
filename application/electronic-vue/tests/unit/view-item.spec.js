import {mount} from '@vue/test-utils';
import ViewItem from "../../src/components/view-item/ViewItem";
import {flushPromises} from '@vue/test-utils'
import axios from 'axios'
import {Constant} from "../../src/Constant";

jest.mock('axios', () => ({
    get: () => Promise.resolve({data: 'some mocked data!'})
}))

const mockRoute = {
    params: {
        id: 1
    }
}
const mockRouter = {
    push: jest.fn()
}

const wrapper = mount(ViewItem, {
    global: {
        mocks: {
            $route: mockRoute,
            $router: mockRouter,
            fetchData: () => {
            }
        }
    }
})

test('Renders ViewItem', () => {
    expect(wrapper.exists()).toBe(true);
})

test('H2 item should contain View Electronic Item Details', () => {
    expect(wrapper.find('h2').text()).toBe('View Electronic Item Details')
})

test('uses a mocked axios HTTP client and flush-promises', async () => {
    await flushPromises()
})

test('IMG Url exist', () => {
    const {vm} = wrapper;
    expect(vm.imgUrl).toStrictEqual(Constant.IMG_URL)
})
