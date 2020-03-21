export const getShortDate = isoDate => {
  const date = new Date(isoDate);
  const month = date.toLocaleString('de-DE', { month: 'long' });;
  const day = date.getDate();
  return `${day}. ${month}`;
}

export const getTimeString = isoDate => {
  const date = new Date(isoDate);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${hours}:${!minutes ? "00" : minutes}`;
};

export const formatSlot = slot => {
  const formattedSlot = `${getTimeString(slot.start)} - ${getTimeString(slot.end)} Uhr`;
  return formattedSlot;
};