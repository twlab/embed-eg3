# WashU Epigenome Browser embedding code boilerplate

## Installation

```sh
yarn add wuepgg
```

or

```sh
npm install --save wuepgg
```

## Basic Example

### render some tracks with urls

```jsx
import { GenomeViewer } from "wuepgg";
```

```jsx
  <GenomeViewer
      viewRegion="chr7:27181545-27245617"
      tracks={[
        {
          url: "https://hicfiles.s3.amazonaws.com/hiseq/gm12878/in-situ/combined.hic",
          name: "hictest",
          type: "hic",
        },
        {
          url: "https://vizhub.wustl.edu/hubSample/hg19/bam1.bam",
          name: "bamtest",
          type: "bam",
        },
        {
          name: "gencodeV47",
          type: "geneannotation",
        },
      ]}
      genomeName="hg19"
   />
```

See below for the full list ofsupported parameters.

### render entire browser with your datahub

```jsx
import { GenomeHub } from "wuepgg";
```

```jsx
<GenomeHub />
```

Will default render the `hg19` genome with default tracks. See below for supported parameters.

## API Reference

### GeneomeViewer

### GenomeHub
