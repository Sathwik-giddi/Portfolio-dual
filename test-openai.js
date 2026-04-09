const OpenAI = require('openai');

const openai = new OpenAI({
    apiKey: '21b840f8ab8f47f4ade4fe4830becc6c.q7TdVXcw3ylBMc8o',
});

async function main() {
    try {
        const completion = await openai.chat.completions.create({
            messages: [{ role: 'system', content: 'You are a helpful assistant.' }],
            model: 'gpt-3.5-turbo',
        });
        console.log("Success:", completion.choices[0].message);
    } catch (error) {
        console.error("Error:", error);
    }
}

main();
