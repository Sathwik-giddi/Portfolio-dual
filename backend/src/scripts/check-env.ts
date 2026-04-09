
import 'dotenv/config';
console.log('OPENROUTER_API_KEY present:', !!process.env.OPENROUTER_API_KEY);
if (process.env.OPENROUTER_API_KEY) {
    console.log('Key length:', process.env.OPENROUTER_API_KEY.length);
    console.log('Key start:', process.env.OPENROUTER_API_KEY.substring(0, 5) + '...');
}
