# Sherpaw build for AIRI

Built packages from shinohara-rin/sherpaw at 2ff318db306906e27f6ee6c3124efc7f3faf1a28 (branch claude/project-thread-lragfz, PR #3).
AIRI installs them with git dependencies until a Sherpaw release has rollouts.
Each folder is one npm package. Its `@sherpaw/*` dependencies are peer dependencies, because pnpm blocks git sources for nested dependencies. AIRI lists every `@sherpaw/*` package it needs directly. The version of every package is 0.3.1-fork.2ff318d.
Delete this branch after AIRI moves to a published release.
