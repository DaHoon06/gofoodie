export function createTransactionId() {
  const date = new Date();
  return date.getTime().toString();
}
