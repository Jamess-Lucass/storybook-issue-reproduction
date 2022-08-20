# storybook-issue-reproduction

## How to reproduce
1. `git clone https://github.com/Jamess-Lucass/storybook-issue-reproduction.git`
2. `npm install` _(`pnpm install`, `yarn install`)_
3. `npm run storybook` _(`pnpm storybook`, `yarn run storybook`)_
4. Navigate to http://localhost:6006/?path=/docs/button--default
5. Click on `Show Code`

> ![1](https://user-images.githubusercontent.com/23193271/185721467-5fad9a90-9cd1-405a-9376-a0d3df8563d3.png)

6. Will see the component display name is not correct

> ![2](https://user-images.githubusercontent.com/23193271/185721526-accb3889-955f-4417-bd55-43440fa1417f.png)

`button.tsx` and `button.stories.tsx` are both located in the `src` directory.

_The commented lines in both those files refer to the code that will cause the correct component to show in the docs_
