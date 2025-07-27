type ResumeInput = {
  jobField: string;
  experienceLevel: string;
  skills: string[];
};

type AnalysisResult = {
  template: string;
  keywords: string[];
};

export function validateInput(input: any): string | null {
  if (typeof input.jobField !== 'string' || input.jobField.trim() === '') {
    return 'Invalid job field';
  }
  if (typeof input.experienceLevel !== 'string' || input.experienceLevel.trim() === '') {
    return 'Invalid experience level';
  }
  if (!Array.isArray(input.skills) || input.skills.some(skill => typeof skill !== 'string')) {
    return 'Invalid skills format';
  }
  return null;
}

export function analyzeResumeData(input: ResumeInput): AnalysisResult {
  const template = `Template for ${input.jobField} with ${input.experienceLevel} experience`;
  const keywords = input.skills.map(skill => `${skill} optimization`);
  return {
    template,
    keywords
  };
}