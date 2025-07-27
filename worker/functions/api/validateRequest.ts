export async function validateRequest(req: Request): Promise<{ isValid: boolean; errors: string[]; data: any }> {
  try {
    const contentType = req.headers.get('Content-Type');
    if (!contentType || contentType !== 'application/json') {
      return { isValid: false, errors: ['Invalid Content-Type. Expected application/json.'], data: null };
    }

    const body = await req.json();
    const { jobField, experienceLevel, skills } = body;

    const errors = [];
    if (!jobField) errors.push('Missing required field: jobField');
    if (!experienceLevel) errors.push('Missing required field: experienceLevel');
    if (!skills || !Array.isArray(skills)) errors.push('Missing or invalid field: skills');

    if (errors.length) {
      return { isValid: false, errors, data: null };
    }

    return { isValid: true, errors: [], data: { jobField, experienceLevel, skills } };
  } catch (error) {
    return { isValid: false, errors: ['Invalid JSON body'], data: null };
  }
}
