export async function getJSON(url: string) {
  const res = await fetch(url);
  return res.json();
}

export async function postJSON(url: string, data: any) {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
}
 