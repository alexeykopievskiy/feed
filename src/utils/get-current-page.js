export default (currentPath, menu) =>
  menu.find(item => item.path === currentPath);
