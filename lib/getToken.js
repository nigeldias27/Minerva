export default function getJwtToken() {
  return `Bearer ${localStorage?.getItem("token") || ""}`;
}
