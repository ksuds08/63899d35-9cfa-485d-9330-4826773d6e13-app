// Auto-generated entrypoint for Cloudflare Worker

import { AIAnalysisEngineHandler } from './api/AIAnalysisEngine';
import { KeywordOptimizationToolHandler } from './api/KeywordOptimizationTool';
import { ContentSuggestionsAPIHandler } from './api/ContentSuggestionsAPI';
import { ResumeTemplateRendererHandler } from './api/ResumeTemplateRenderer';

const INDEX_HTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <title>ResumeCraft AI</title>
    <link rel="icon" href="https://oaidalleapiprodscus.blob.core.windows.net/private/org-eeM7RLe3Wv2HZ7Toub47POas/user-rnGwZEmjnwoUoF8lEvadvt0O/img-isSim9bu9zN1p3AT5cYmvzZf.png?st=2025-07-27T20%3A53%3A15Z&se=2025-07-27T22%3A53%3A15Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=cc612491-d948-4d2e-9821-2683df3719f5&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-27T14%3A54%3A09Z&ske=2025-07-28T14%3A54%3A09Z&sks=b&skv=2024-08-04&sig=lWaVcDVgtSCLVMGY%2BoRvsYv3Jrvo2Ylyi8V4AVlV3cw%3D">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');
        body { font-family: 'Inter', sans-serif; }
    </style>
</head>
<body class="bg-gray-100 text-gray-800">
    <header class="bg-blue-500 p-4 text-white flex justify-between items-center">
        <div class="flex items-center">
            <img src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-eeM7RLe3Wv2HZ7Toub47POas/user-rnGwZEmjnwoUoF8lEvadvt0O/img-isSim9bu9zN1p3AT5cYmvzZf.png?st=2025-07-27T20%3A53%3A15Z&se=2025-07-27T22%3A53%3A15Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=cc612491-d948-4d2e-9821-2683df3719f5&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-27T14%3A54%3A09Z&ske=2025-07-28T14%3A54%3A09Z&sks=b&skv=2024-08-04&sig=lWaVcDVgtSCLVMGY%2BoRvsYv3Jrvo2Ylyi8V4AVlV3cw%3D" alt="ResumeCraft AI Logo" class="h-10 mr-2">
            <h1 class="font-bold text-xl">ResumeCraft AI</h1>
        </div>
        <p class="italic">Crafting Your Future with Intelligence</p>
    </header>

    <main class="max-w-4xl mx-auto p-4">
        <section class="my-8">
            <h2 class="text-2xl font-semibold text-blue-500">Get Started</h2>
            <form id="resumeForm" class="bg-white p-6 rounded shadow-md mt-4">
                <div class="mb-4">
                    <label for="jobField" class="block text-sm font-medium text-gray-700">Job Field</label>
                    <input type="text" id="jobField" name="jobField" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" required>
                </div>
                <div class="mb-4">
                    <label for="experienceLevel" class="block text-sm font-medium text-gray-700">Experience Level</label>
                    <select id="experienceLevel" name="experienceLevel" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" required>
                        <option value="">Select</option>
                        <option value="entry">Entry</option>
                        <option value="mid">Mid</option>
                        <option value="senior">Senior</option>
                    </select>
                </div>
                <div class="mb-4">
                    <label for="skills" class="block text-sm font-medium text-gray-700">Skills</label>
                    <input type="text" id="skills" name="skills" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" required>
                </div>
                <button type="submit" class="bg-teal-500 text-white font-semibold px-4 py-2 rounded hover:bg-teal-600">Generate Resume</button>
            </form>
        </section>

        <section id="resumeOutput" class="my-8 hidden">
            <h2 class="text-2xl font-semibold text-blue-500">Your Tailored Resume</h2>
            <div id="resumeTemplate" class="bg-white p-6 rounded shadow-md mt-4">
                <!-- Resume output will be displayed here -->
            </div>
        </section>
    </main>

    <footer class="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2023 ResumeCraft AI. All rights reserved.</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
`;
const STYLE_CSS = ``;
const SCRIPT_JS = `
document.getElementById('resumeForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const jobField = document.getElementById('jobField').value;
    const experienceLevel = document.getElementById('experienceLevel').value;
    const skills = document.getElementById('skills').value;

    const response = await fetch('/functions/api/handler.ts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ jobField, experienceLevel, skills })
    });

    if (response.ok) {
        const resume = await response.json();
        document.getElementById('resumeOutput').classList.remove('hidden');
        document.getElementById('resumeTemplate').innerHTML = resume.template;
    } else {
        console.error('Error fetching resume template');
    }
});
`;

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = url.pathname;
    if (path === '/') return new Response(INDEX_HTML, { headers: { 'Content-Type': 'text/html' } });
    if (path === '/style.css') return new Response(STYLE_CSS, { headers: { 'Content-Type': 'text/css' } });
    if (path === '/script.js') return new Response(SCRIPT_JS, { headers: { 'Content-Type': 'application/javascript' } });
    if (path === '/api/AIAnalysisEngine') return AIAnalysisEngineHandler(request);
    if (path === '/api/KeywordOptimizationTool') return KeywordOptimizationToolHandler(request);
    if (path === '/api/ContentSuggestionsAPI') return ContentSuggestionsAPIHandler(request);
    if (path === '/api/ResumeTemplateRenderer') return ResumeTemplateRendererHandler(request);
    return new Response('Not found', { status: 404 });
  }
};
