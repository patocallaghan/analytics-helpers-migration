# analytics-helpers-migration


A collection of codemods for analytics-helpers-migration.

## Usage

To run a specific codemod from this project, you would run the following:

```
npx analytics-helpers-migration <TRANSFORM NAME> path/of/files/ or/some**/*glob.js

# or

yarn global add analytics-helpers-migration
analytics-helpers-migration <TRANSFORM NAME> path/of/files/ or/some**/*glob.js
```

## Local Usage
```
node ./bin/cli.js <TRANSFORM NAME> path/of/files/ or/some**/*glob.js
```

## Transforms

<!--TRANSFORMS_START-->
* [track-analytics-event-hbs](transforms/track-analytics-event-hbs/README.md)
* [track-analytics-event-js](transforms/track-analytics-event-js/README.md)
<!--TRANSFORMS_END-->

## Contributing

### Installation

* clone the repo
* change into the repo directory
* `yarn`

### Running tests

* `yarn test`

### Update Documentation

* `yarn update-docs`