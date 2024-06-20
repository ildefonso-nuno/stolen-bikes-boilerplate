# stolen-bikes-boilerplate

### GitFlow Workflow

#### 1. **Branches in GitFlow**

- **Main Branches:**

  - **master:** Represents production-ready code. Should always reflect what is currently in production.
  - **develop:** Integration branch for ongoing development. All feature branches are merged into this branch.

- **Feature Branches:**

  - **feature-\<feature-name\>:** Branch off from develop to develop new features. Once completed, merge back into develop.

- **Bug Fix Branches:**
  - **bugfix-\<issue-number\>:** Branch off from develop to fix bugs found in the develop branch. Once fixed, merge back into develop.

#### 2. **Workflow Overview**

- **Start a New Feature:**

  ```bash
  git checkout develop
  git pull origin develop
  git checkout -b feature-new-feature
  ```

  Work on your feature branch (`feature-new-feature`).

- **Finish a Feature:**

  ```bash
  git checkout develop
  git pull origin develop
  git merge --no-ff feature-new-feature
  git push origin develop
  git branch -d feature-new-feature
  ```

  Delete the feature branch after merging into `develop`.

- **Start a Bug Fix:**

  ```bash
  git checkout develop
  git pull origin develop
  git checkout -b bugfix-123
  ```

  Work on fixing the bug on the `bugfix-123` branch.

- **Finish a Bug Fix:**
  ```bash
  git checkout develop
  git pull origin develop
  git merge --no-ff bugfix-123
  git push origin develop
  git branch -d bugfix-123
  ```
  Delete the bug fix branch after merging into `develop`.
