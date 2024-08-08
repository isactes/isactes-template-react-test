import { render } from "@testing-library/react";
import { describe, test } from "vitest"
import NavSide from "../../src/components/nav/navSide";
describe("Unit test of navSide", () => {
  test('should render', () => {
    render(<NavSide isSideNavOpen={true} toggleSideNav={() => {}}/>)
  });
})