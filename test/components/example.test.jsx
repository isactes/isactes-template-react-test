import { render } from "@testing-library/react";
import { describe, test } from "vitest"
import Example from "../../src/components/example";
// import { renderToString } from "react-dom/server";
describe('this is the example', () => {
  test('should render example', () => {
    render(<Example />)
  });
});
