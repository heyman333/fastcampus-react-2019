export default function filter(previousState, action) {
  if (previousState === undefined) {
    return "SHOW_ALL";
  }
  return previousState;
}
