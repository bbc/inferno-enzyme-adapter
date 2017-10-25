import Enzyme from 'enzyme';
import Inferno from 'inferno';
import InfernoAdapter from '../../src/InfernoEnzymeAdapter';

Enzyme.configure({ adapter: new InfernoAdapter() });

describe.skip('shallow.simulate', () => {
  it('simulates clicks', () => {
    const stub = jest.fn();

    const App = () => (
       <div onClick={stub} />
    );

    const wrapper = Enzyme.shallow(<App />);
    wrapper.simulate('click');

    expect(stub).toHaveBeenCalled();
  });

  it('simulates change', () => {
    const stub = jest.fn();

    const App = () => (
       <div onChange={stub} />
    );

    const wrapper = Enzyme.shallow(<App />);
    wrapper.simulate('change');

    expect(stub).toHaveBeenCalled();
  });

  it('calls event with args', () => {
    const stub = jest.fn();

    const App = () => (
       <div onClick={stub} />
    );
    const argumentObj = { event: {} };
    const wrapper = Enzyme.shallow(<App />);
    wrapper.simulate('click', argumentObj);

    expect(stub).toHaveBeenCalledWith(argumentObj);
  });
});
