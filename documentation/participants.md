# Participants

These instructions and documentation are for people looking to participate in
practicing with Katas. Our hope is that this setup makes it easy for you to
quickly get to the kata without having to bother with tedious setup of projects

## Steps to get started

### 1. Install Deno

Deno is the runtime I used for this repository. So you will need this runtime
installed on your machine.

- Follow
  [these steps](https://docs.deno.com/runtime/manual/getting_started/installation)
  to install Deno

### 2. Install the Kata CLI

The Kata CLI(Command Line Interface) is a tool that should make the interaction
with a kata much simpler for you. The below command is going to run some
typescript code that sets up a bash alias. This way you can run the tool in any
bash terminal

```sh
deno install --unstable -A -f -n kata https://raw.githubusercontent.com/rsm-hcd/cop-clean-code-katas/main/kata-cli/main.ts
```

### 2. Begin your first Kata

in an empty directory of your choice run the following command inside of a bash
terminal: `kata begin hello-world`. This will populate your current directory
with the hello-world kata

### 3. Setup VSCode for Deno Development (Optional)

If you are using Visual Studio Code, I highly recommend making sure that your
workspace is using the Deno extensions. Please follow the official setup for
this

- Follow
  [these steps](https://docs.deno.com/runtime/manual/getting_started/setup_your_environment#visual-studio-code)
  to get VSCode setup for Deno
- Look at the [.vscode](../.vscode) directory for other helpful workspace
  settings that might make your developer experience more enjoyable

## Available CLI Commands

In a bash terminal use the command `kata -h` to get a listing of available
commands
