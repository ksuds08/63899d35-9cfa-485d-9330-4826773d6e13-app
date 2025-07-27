export function validateRequestBody(body: any): { valid: boolean, errors?: string[] } {
  const errors: string[] = [];
  if (!body.jobField) {
    errors.push('Job field is required.');
  }
  if (!body.experienceLevel) {
    errors.push('Experience level is required.');
  }
  if (!body.skills || !Array.isArray(body.skills)) {
    errors.push('Skills must be provided as an array.');
  }
  return { valid: errors.length === 0, errors };
}