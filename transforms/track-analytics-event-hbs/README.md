# track-analytics-event-hbs


## Usage

```
npx analytics-helpers-migration track-analytics-event-hbs path/of/files/ or/some**/*glob.hbs

# or

yarn global add analytics-helpers-migration
analytics-helpers-migration track-analytics-event-hbs path/of/files/ or/some**/*glob.hbs
```

## Local Usage
```
node ./bin/cli.js track-analytics-event-hbs path/of/files/ or/some**/*glob.hbs
```

## Input / Output

<!--FIXTURES_TOC_START-->
* [basic](#basic)
<!--FIXTURES_TOC_END-->

<!--FIXTURES_CONTENT_START-->
---
<a id="basic">**basic**</a>

**Input** (<small>[basic.input.hbs](transforms/track-analytics-event-hbs/__testfixtures__/basic.input.hbs)</small>):
```hbs
<a
  {{on "click"
  	(track-analytics-event
    	action="filter_toggled"
        object="answers"
        context="answers_index"
        filter_value=item.status
     )
  }}
>
  Click me
</a>

<SomeComponent @onClick={{track-analytics-event
    	action="filter-toggled"
        object="answers"
        context="answers_index"
        filter_value=item.status}} />

<a
  {{on "click"
  	(track-analytics-event
    	action="filter-toggled"
        object="answers"
        context="answers-index"
        filter_value=item.status
     )
  }}
>
  Click me
</a>

<a
  {{on "click"
  	(track-analytics-event
    	action="filterToggled"
        object="answers"
        context="answersIndex"
        filter_value=item.status
     )
  }}
>
  Click me
</a>

<div data-track-analytics-event-object="intercom-home-logo" test={{test}}></div>

```

**Output** (<small>[basic.output.hbs](transforms/track-analytics-event-hbs/__testfixtures__/basic.output.hbs)</small>):
```hbs
<a
  {{on "click"
  	(track-analytics-event
    	action="filter_toggled"
        object="answers"
        context="answers_index"
        filter_value=item.status
     )
  }}
>
  Click me
</a>

<SomeComponent @onClick={{track-analytics-event
    	action="filter_toggled"
        object="answers"
        context="answers_index"
        filter_value=item.status}} />

<a
  {{on "click"
  	(track-analytics-event
    	action="filter_toggled"
        object="answers"
        context="answers-index"
        filter_value=item.status
     )
  }}
>
  Click me
</a>

<a
  {{on "click"
  	(track-analytics-event
    	action="filter_toggled"
        object="answers"
        context="answersIndex"
        filter_value=item.status
     )
  }}
>
  Click me
</a>

<div data-track-analytics-event-object="intercom_home_logo" test={{test}}></div>

```
<!--FIXTURES_CONTENT_END-->