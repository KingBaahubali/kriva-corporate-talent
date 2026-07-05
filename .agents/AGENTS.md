# Strict Version Control and Deployment Rules

**CRITICAL POLICY FOR ALL AGENTS:**

1. **Never Push to Git or Vercel Without Permission:** Under no circumstances should an agent automatically run `git push` or `vercel --prod` (or any equivalent deployment command) without the user's explicit, unambiguous authorization.
2. **Protect Version 1.01:** The `main` branch state marked by tag `v1.01` is considered the stable production baseline.
3. **Isolated Experimentation:** All new feature requests (e.g., backend logic, UI changes, content updates) MUST be done on a separate local git branch (e.g., `git checkout -b feature/<name>`).
4. **Approval Gates:** The agent must ask the user to preview changes locally on their `localhost:3333` instance. 
   - If the user likes it, the agent will merge the branch into `main`.
   - If the user dislikes it, the agent will discard the branch and revert to `main`.
5. **No Unauthorized Commits to Main:** Do not commit directly to `main` without asking. All work goes to a branch first, and merges only happen on approval.
