export function formatDate(dateStr, type) {
  // Create Date object and format with Intl.DateTimeFormat
  const date = new Date(dateStr);
  let options;
  if (type === 'date-time') {
    options = {
      year: 'numeric',
      month: 'long',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZone: 'UTC',
    };
  } else if (type === 'date') {
    options = {
      year: 'numeric',
      month: 'long',
      day: '2-digit',
    };
  } else if (type === 'year') {
    options = {
      year: 'numeric',
    };
  }

  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);

  return formattedDate;
}
