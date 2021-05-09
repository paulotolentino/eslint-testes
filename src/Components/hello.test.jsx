// hello.test.js

import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
// import pretty from "pretty";

import Hello from "./hello";

let container = null;
beforeEach(() => {
  // configurar o elemento do DOM como o alvo da renderização
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // Limpar ao sair
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with or without a name", () => {
  act(() => {
    render(<Hello />, container);
  });
  expect(container.textContent).toBe("Hey, stranger");

  act(() => {
    render(<Hello name="Jenny" />, container);
  });
  expect(container.textContent).toBe("Hello, Jenny!");

  act(() => {
    render(<Hello name="Margaret" />, container);
  });
  expect(container.textContent).toBe("Hello, Margaret!");
});

it("should render a greeting", () => {
  act(() => {
    render(<Hello />, container);
  });

  expect(container.innerHTML).toMatchInlineSnapshot(
    `"<span>Hey, stranger</span>"`
  ); /* ... gets filled automatically by jest ... */

  act(() => {
    render(<Hello name="Jenny" />, container);
  });

  expect(container.innerHTML).toMatchInlineSnapshot(
    `"<h1>Hello, Jenny!</h1>"`
  ); /* ... gets filled automatically by jest ... */

  act(() => {
    render(<Hello name="Margaret" />, container);
  });

  expect(container.innerHTML).toMatchInlineSnapshot(
    `"<h1>Hello, Margaret!</h1>"`
  ); /* ... gets filled automatically by jest ... */
});
