export const validatorURL = (url) => {
  const expresionRegular = /^(https?:\/\/)?([\w-]+\.+[\w-]+)+([/?#].*)?$/;

  return expresionRegular.test(url);
};
