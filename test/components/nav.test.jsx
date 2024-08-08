import { describe, test } from "vitest"
import Nav from "../../src/components/nav"
import { render } from "@testing-library/react";

describe("Unit test of nav", () => {
  test('should render ', () => {
    render(<Nav toggleNav={() => {}}/>);
  });
})