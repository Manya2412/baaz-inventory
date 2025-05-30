export async function GET() {
    const res = await fetch('https://dev.electorq.com/dummy/inventory', {
      cache: 'no-store',
    });
  
    const data = await res.json();
    return new Response(JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }