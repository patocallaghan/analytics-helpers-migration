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

this.intercomEventService.trackAnalyticsEvent({
  ...this.step.analyticsMetadata,
  action: 'clicked',
  object,
});
