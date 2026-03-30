# JavaScript by TapaScript

## Daily Practice Log

I am practicing daily by creating folders like `DAY-01`, `DAY-02`, etc. Each day folder includes `index.html` and `script.js`, with the key learning details summarized here.

### DAY-01
- `index.html`: imports `script.js` using `async` in `<head>`.
- `script.js`: `console.log("This is my first Java Script code")`.
- Focus: script tagging behavior, basic console output.

### DAY-02
- `index.html`: imports `script.js` using `defer` in `<head>`.
- `script.js`: variables and object manipulation:
  - `let name = "Abhiram"`, `let age = 23`, `let isStudent = true`
  - database object `student1` with properties `name`, `age`, `address`
  - property read/write with `student1.age = 11`
  - string assignment example `fruit` and `vegitable` (carrot)
- Focus: variables, const object mutation, assignments, console logging.

---

## Essential Git Commands

### Basic Setup
```bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

### Repository Basics
```bash
git init                    # Initialize a new repo
git clone <url>            # Clone a remote repository
git status                 # Check working tree status
git log                    # View commit history
git log --oneline          # Short commit history
```

### Staging & Committing
```bash
git add <file>             # Stage specific file
git add .                  # Stage all changes
git commit -m "message"    # Commit with message
git commit -am "message"   # Stage and commit tracked files
git amend                  # Modify last commit
```

### Branches
```bash
git branch                 # List local branches
git branch <branch-name>   # Create new branch
git checkout <branch>      # Switch to branch
git checkout -b <branch>   # Create and switch to branch
git merge <branch>         # Merge branch into current
git branch -d <branch>     # Delete branch
```

### Remote Operations
```bash
git remote -v              # View remote repositories
git pull                   # Fetch and merge from origin
git push                   # Push commits to remote
git push -u origin <branch> # Push and set upstream
git fetch                  # Fetch without merging
```

### Undoing Changes
```bash
git restore <file>         # Discard changes in working directory
git reset HEAD <file>      # Unstage file
git revert <commit>        # Create new commit that undoes changes
git reset --hard <commit>  # Reset to specific commit (⚠️ destructive)
```

### Checking Differences
```bash
git diff                   # Show unstaged changes
git diff --staged          # Show staged changes
git diff <branch1> <branch2>  # Compare branches
```

---

## How to add a new day
1. Create folder `DAY-XX`.
2. Add `index.html` and `script.js`.
3. Follow code style and include a short summary in the main README.
4. Commit and push with descriptive message.

## Progress tracking
- Updated on: March 27, 2026
- Total days logged: 2 (See individual DAY-XX folders for complete content)
- Continue adding one folder per day and watch this README grow.
