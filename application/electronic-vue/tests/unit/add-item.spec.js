import {shallowMount} from '@vue/test-utils'

import {Constant} from "../../src/Constant";
import AddItem from "../../src/components/add-item/AddItem";

jest.mock('axios');

describe('AddItem.vue', () => {
    it('renders Electronic Heading in Home Page', () => {
        const wrapper = shallowMount(AddItem, {
            props: {}
        })
        expect(wrapper.text()).toMatch('Add New Electronic Item')
    })

    it('showAlert should be false by default', () => {
        const wrapper = shallowMount(AddItem);
        const {vm} = wrapper;
        expect(vm.showAlert).toBe(false);
    });
    it('FormData should be false by default', () => {
        const wrapper = shallowMount(AddItem);
        const {vm} = wrapper;
        expect(vm.form).toStrictEqual({
            title: null,
            description: null,
            price: null, rating: null,
            seller: null,
            manufacturer: null,
            additional_information: null,
            image: null,
            uploadImage: null
        });
    });

    it('Img path should be Image path', () => {
        const wrapper = shallowMount(AddItem);
        const {vm} = wrapper;
        expect(vm.imgPath).toBe(Constant.IMG_URL);
    });

    it('should Title exist', () => {
        // render the component
        const wrapper = shallowMount(AddItem)
        expect(wrapper.find("#title").element).toBeDefined();
    });

    it('should Description exist', () => {
        // render the component
        const wrapper = shallowMount(AddItem)
        expect(wrapper.find("#description").element).toBeDefined();
    });

    it('should Price exist', () => {
        // render the component
        const wrapper = shallowMount(AddItem)
        expect(wrapper.find("#price").element).toBeDefined();
    });

    it('Submit async when a button is clicked', () => {
        const wrapper = shallowMount(AddItem);
        const {vm} = wrapper;
        vm.submitForm();
    })
})
