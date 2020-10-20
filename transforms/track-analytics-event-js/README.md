# track-analytics-event-js


## Usage

```
npx analytics-helpers-migration track-analytics-event-js path/of/files/ or/some**/*glob.js

# or

yarn global add analytics-helpers-migration
analytics-helpers-migration track-analytics-event-js path/of/files/ or/some**/*glob.js
```

## Local Usage
```
node ./bin/cli.js track-analytics-event-js path/of/files/ or/some**/*glob.js
```

## Input / Output

<!--FIXTURES_TOC_START-->
* [basic](#basic)
<!--FIXTURES_TOC_END-->

<!--FIXTURES_CONTENT_START-->
---
<a id="basic">**basic**</a>

**Input** (<small>[basic.input.js](transforms/track-analytics-event-js/__testfixtures__/basic.input.js)</small>):
```js
this.intercomEventService.trackAnalyticsEvent({
  action: 'viewed',
  object: 'tour_splash_screen',
});

this.intercomEventService.trackAnalyticsEvent({
  action: 'viewed',
  object: 'tour-splash-screen',
});

this.intercomEventService.trackAnalyticsEvent({
  action: 'viewed',
  object: 'tourSplashScreen',
});

this.trackAnalyticsEvent({
  action: 'viewed',
  object: 'tour_splash_screen',
});

```

**Output** (<small>[basic.output.js](transforms/track-analytics-event-js/__testfixtures__/basic.output.js)</small>):
```js
this.intercomEventService.trackAnalyticsEvent({
  action: 'viewed',
  object: 'tour_splash_screen',
});

this.intercomEventService.trackAnalyticsEvent({
  action: 'viewed',
  object: 'tour_splash_screen',
});

this.intercomEventService.trackAnalyticsEvent({
  action: 'viewed',
  object: 'tour_splash_screen',
});

this.trackAnalyticsEvent({
  action: 'viewed',
  object: 'tour_splash_screen',
});

```
<!--FIXTURES_CONTENT_END-->