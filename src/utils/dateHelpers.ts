export const getCurrentDate = () => {
  const today = new Date();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  // (YYYY-MM-DD)
  return `${today.getFullYear()}-${mm}-${dd}`;
};
