import { validateRequest } from '../functions/api/validateRequest';
import { generateContentSuggestions } from '../functions/api/generateContentSuggestions';

export async function ContentSuggestionsAPIHandler(req: Request): Promise<Response> {
  try {
    const { isValid, errors, data } = await validateRequest(req);

    if (!isValid) {
      return new Response(JSON.stringify({ errors }), { status: 400, headers: { 'Content-Type': 'application/json' } });
    }

    const suggestions = await generateContentSuggestions(data);
    return new Response(JSON.stringify({ suggestions }), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}
