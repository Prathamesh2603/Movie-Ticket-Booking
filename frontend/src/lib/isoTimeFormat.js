export const isoTimeFormat = (dateTime) => {
  const date = new Date(dateTime);
  const localTime = date.toLocaleTimeString( "en-US", {
    hour: "2-digit",
    hour: "2-digit",
    hour: true
  } );
  return localTime;
}
