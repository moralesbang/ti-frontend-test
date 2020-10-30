export const createRoute = (to, name, icon = undefined, parentId = null) => ({
  to,
  itemId: to,
  parentId,
  children: name,
  leftAddon: icon,
});
