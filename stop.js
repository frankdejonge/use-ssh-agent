import { execFileSync } from 'child_process';

try {
    if (process.env.SSH_AGENT_PID !== undefined) {
        execFileSync('kill', [process.env.SSH_AGENT_PID], { stdio: 'inherit' });
    }
} catch (error) {
    console.log(error.message);
}
