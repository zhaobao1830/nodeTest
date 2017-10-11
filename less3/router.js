function route(handle, pathname) {
  if (typeof handle[pathname] === 'function') {
    handle[pathname]();
  } else {
    console.log('Not request handler found for ' + pathname);
  }
}
exports.route = route;