import(/* webpackChunkName: "gavin-chunk-sub" */ "./sub").then((module) => {
  const hello = module.default;
  hello();
  document.open();
  document.write("<h1>Hello World</h1>");
  document.close();
});
