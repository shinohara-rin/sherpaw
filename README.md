# Sherpaw build for AIRI

Built packages from shinohara-rin/sherpaw at 7fa2661b4114192758fb547cec5b89c0ba7fdb48 (branch claude/project-thread-lragfz, PR #3).
AIRI installs them with git dependencies until a Sherpaw release has rollouts.
Each folder is one npm package. Its `@sherpaw/*` dependencies are peer dependencies, because pnpm blocks git sources for nested dependencies. AIRI lists every `@sherpaw/*` package it needs directly. The version of every package is 0.3.1-fork.7fa2661.
Delete this branch after AIRI moves to a published release.
