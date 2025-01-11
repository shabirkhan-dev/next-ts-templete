module.exports = {
    types: [
      { value: 'feat', name: 'feat:     A new feature' },
      { value: 'fix', name: 'fix:      A bug fix' },
      { value: 'docs', name: 'docs:     Documentation only changes' },
      { value: 'style', name: 'style:    Changes that do not affect the meaning of the code' },
      { value: 'refactor', name: 'refactor: A code change that neither fixes a bug nor adds a feature' },
      { value: 'perf', name: 'perf:     A code change that improves performance' },
      { value: 'test', name: 'test:     Adding missing tests or correcting existing tests' },
      { value: 'chore', name: 'chore:    Changes to the build process or auxiliary tools' },
      { value: 'revert', name: 'revert:   Revert to a commit' },
      { value: 'ci', name: 'ci:       Changes to CI configuration files and scripts' },
      { value: 'build', name: 'build:    Changes that affect the build system or external dependencies' }
    ],
    allowCustomScopes: false,
    allowBreakingChanges: ['feat', 'fix'],
    skipQuestions: ['body', 'footer'],
    subjectLimit: 72
  };