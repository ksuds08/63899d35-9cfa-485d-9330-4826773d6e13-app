
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
