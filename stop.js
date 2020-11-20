import { execFileSync } from 'child_process';

try {
    if (process.env.SSH_AGENT_PID !== undefined) {
        process.kill(process.env.SSH_AGENT_PID);
    }
} catch (error) {
    console.log(error.message);
}
