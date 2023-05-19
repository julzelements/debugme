# Launching a debug config from an aws-vault subshell?

## Background:
All of my current work requires me to run `aws-vault <work-aws-profile>` before any of our processes are started.

Most of the time I'm running various [SST](https://docs.sst.dev) commands.

I'm trying to get the [Live lamda Development](https://docs.sst.dev/live-lambda-development) working.

I can successfully run `aws-vault <work-aws-profile>`, which spawns a new subshell. Then inside the subshell I can run `node --inspect-brk node_modules/.bin/sst dev --increase-timeout`. Then I can use a standard debug process to attach to the debugger with vscode. 

But the real challenge is... Can I do it all in one vscode config? 

I'm a strong believer in getting tooling adoption by having nice automated commands. And a two step process is not good enough. People with just `console.log()` while the world burns...

## Work so far

There are three launch profiles:
* "Launch Program with prelaunch shell task": Does the `aws-vault` step in a shell command and then launches the `debugme.js` file.
* "Launch Program with prelaunch npm task": Does the `aws-vault` step from an npm command and then launches the `debugme.js` file.
These launch profiles start the test `debugme.js` script. But they fail to attatch.
* "Launch Program": No `aws-vault`. Just a control setup to see what should happen if it all works.
