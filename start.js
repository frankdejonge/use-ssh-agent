import * as core from '@actions/core';
import { execFileSync } from 'child_process';

(async () => {
    let output = execFileSync('ssh-agent').toString();
    let [, sockKey, sockValue] = /(SSH_AUTH_SOCK)=(.*); export SSH_AUTH_SOCK/g.exec(output) || [];
    let [, pidKey, pidValue] = /(SSH_AGENT_PID)=(.*); export SSH_AGENT_PID/g.exec(output) || [];

    if (pidValue !== undefined) {
        console.log('Exporting PID variable...');
        core.exportVariable(pidKey, pidValue);
    }

    if(sockValue !== undefined) {
        console.log('Exporting SOCK variable...');
        core.exportVariable(sockKey, sockValue);
    }
})().catch(error => {
    console.log('Something went wrong...');
    core.setFailed(error.message);
});
