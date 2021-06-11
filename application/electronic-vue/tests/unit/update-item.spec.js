import {mount} from '@vue/test-utils';
import {flushPromises} from '@vue/test-utils'
import axios from 'axios'
import {Constant} from "../../src/Constant";
import UpdateItem from "../../src/components/update-item/UpdateItem";

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

const wrapper = mount(UpdateItem, {
    global: {
        mocks: {
            $route: mockRoute,
            $router: mockRouter,
            fetchData: () => {
            }
        }
    }
})

test('Renders UpdateItem', () => {
    expect(wrapper.exists()).toBe(true);
})

test('H2 item should contain Update Item Information', () => {
    expect(wrapper.find('h2').text()).toBe('Update Item Information')
})

test('axios HTTP client and flush-promises', async () => {
    await flushPromises()
})

test('Title input exist', () => {
    expect(wrapper.find('[placeholder=Title]')).toBeDefined()
})

test('Description input exist', () => {
    expect(wrapper.find('[placeholder=Description]')).toBeDefined()
})

test('Price input exist', () => {
    expect(wrapper.find('[placeholder=Price]')).toBeDefined()
})

test('Rating input exist', () => {
    expect(wrapper.find('[placeholder=Rating]')).toBeDefined()
})

test('Seller input exist', () => {
    expect(wrapper.find('[placeholder=Seller]')).toBeDefined()
})

test('Manufacturer input exist', () => {
    expect(wrapper.find('[placeholder=Manufacturer]')).toBeDefined()
})

test('Images input exist', () => {
    expect(wrapper.find('[ref=Images]')).toBeDefined()
})

test('Additional Information input exist', () => {
    expect(wrapper.find('[placeholder="Additional Information"]')).toBeDefined()
})

test('Additional Information input exist', () => {
    expect(wrapper.find('[placeholder="Additional Information"]')).toBeDefined()
})

test('ShowAlert by default should be False', () => {
    const {vm} = wrapper;
    expect(vm.showAlert).toBe(false)
})

test('ShowDeleteContext', () => {
    const {vm} = wrapper;
    expect(vm.showDeleteContext).toBe(false)
})
