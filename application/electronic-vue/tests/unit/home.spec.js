import {shallowMount} from '@vue/test-utils'
import Home from "../../src/components/home/Home";
import {Constant} from "../../src/Constant";

jest.mock('axios');

describe('Home.vue', () => {
    it('renders Electronic Heading in Home Page', () => {
        const wrapper = shallowMount(Home, {
            props: {}
        })
        expect(wrapper.text()).toMatch('Electronics')
    })

    it('isSearching should be false by default', () => {
        const wrapper = shallowMount(Home);
        const {vm} = wrapper;
        expect(vm.isSearching).toBe(true);
    });
    it('noData should be false by default', () => {
        const wrapper = shallowMount(Home);
        const {vm} = wrapper;
        expect(vm.noData).toBe(false);
    });

    it('Img path should be Image path', () => {
        const wrapper = shallowMount(Home);
        const {vm} = wrapper;
        expect(vm.imgPath).toBe(Constant.IMG_URL);
    });

    it('should input search box exist', () => {
        // render the component
        const wrapper = shallowMount(Home)
        expect(wrapper.find('input').element).toBeDefined();
    });

    it('should not be visible "Please wait" initially ', () => {
        const wrapper = shallowMount(Home);
        const {vm} = wrapper;
        const button = wrapper.find('#please-wait-block');
        expect(button.text()).toMatch('Please wait...');
    });

    it('should not be visible "No Results Found" initially ', () => {
        const wrapper = shallowMount(Home);
        expect(wrapper.text()).not.toMatch('No Results Found');
    });

    it('Items should be empty initially', () => {
        const wrapper = shallowMount(Home);
        const {vm} = wrapper;
        expect(vm.items).toStrictEqual([]);
    });

    it('fetches async when a button is clicked', () => {
        const wrapper = shallowMount(Home);
        const {vm} = wrapper;
        vm.fetchData()
            .then(() => {
                expect(vm.isSearching).toBe(false);
            })
    })
})
