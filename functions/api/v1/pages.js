export function onRequest(context) {
    return new Response(JSON.stringify({
        'response': {
            pages: []
        }
    }))
  }