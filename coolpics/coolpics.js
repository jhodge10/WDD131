const menuContainer = document.getElementById('Menu');

const menuItems = ['Home', 'About', 'Contact'];

menuItems.forEach(item => {
  const menuItem = document.createElement('li');
  menuItem.textContent = item;
});