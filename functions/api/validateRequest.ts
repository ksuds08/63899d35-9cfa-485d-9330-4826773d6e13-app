export async function validateRequest<T>(req: Request): Promise<{ valid: boolean; errors: string[]; data?: T }> {
  try {
    const contentType = req.headers.get('Content-Type') || '';
    if (!contentType.includes('application/json')) {
      return { valid: false, errors: ['Content-Type must be application/json'] };
    }
    const body = await req.json();
    const errors = [];
    if (!body.resumeContent || typeof body.resumeContent !== 'string') {
      errors.push('resumeContent is required and must be a string');
    }
    if (!body.jobField || typeof body.jobField !== 'string') {
      errors.push('jobField is required and must be a string');
    }
    if (!body.experienceLevel || typeof body.experienceLevel !== 'string') {
      errors.push('experienceLevel is required and must be a string');
    }
    return { valid: errors.length === 0, errors, data: body };
  } catch (error) {
    return { valid: false, errors: ['Invalid JSON format'] };
  }
}