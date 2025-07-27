import { validateRequest } from '../functions/api/validateRequest';
import { optimizeKeywords } from '../functions/api/optimizeKeywords';

interface KeywordOptimizationRequest {
  resumeContent: string;
  jobField: string;
  experienceLevel: string;
}

export async function KeywordOptimizationToolHandler(req: Request): Promise<Response> {
  try {
    const { valid, errors, data } = await validateRequest<KeywordOptimizationRequest>(req);
    if (!valid) {
      return new Response(JSON.stringify({ error: 'Invalid request', details: errors }), { status: 400 });
    }
    const optimizedContent = optimizeKeywords(data.resumeContent, data.jobField, data.experienceLevel);
    return new Response(JSON.stringify({ optimizedContent }), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal Server Error', details: error.message }), { status: 500 });
  }
}