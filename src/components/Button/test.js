import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Button from "./index";

Enzyme.configure({ adapter: new Adapter() });

describe("Button", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Button>Give Me More!!</Button>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test("has a vaild Snapshot", () => {
    const component = renderer.create(<Button>Give Me More</Button>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("render children when pass in", () => {
    const element = shallow(<Button>More</Button>);
    expect(element.contains("More")).toBe(true);
  });
});
