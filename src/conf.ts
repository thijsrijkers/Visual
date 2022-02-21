import simpleGit, { SimpleGit, SimpleGitOptions, CleanOptions } from 'simple-git';

export class Configure {
    options: Partial<SimpleGitOptions> = {
        baseDir: process.cwd(),
        binary: 'git',
        maxConcurrentProcesses: 6,
    };

    git: SimpleGit = simpleGit().clean(CleanOptions.FORCE);
}