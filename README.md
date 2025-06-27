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

### Render some tracks with URLs

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

See below for the full list of supported parameters.

### Render the entire browser as a react component

```jsx
import { GenomeHub } from "wuepgg";
```

```jsx
<GenomeHub />
```

Render the browser's landing page where user can choose a genome
to view

## API Reference

### GenomeViewer

A React component for visualizing genomes

**Props:**

- **genomeName** (`string`, required)  
  Name of the genome to display (e.g., `"hg38"`, `"mm10"`).  
  Example: `"hg38"`

- **tracks** (`TracksProps[]`, required)  
  An array of track configuration objects. Each object describes a data track to display in the viewer.

  **TypeScript interface:**

  ```ts
  interface TracksProps {
    url?: string; // Optional: Data file URL, (track types such as geneannotation, ruler do not need a URL)
    name?: string; // Optional: Legend display name
    options?: { [key: string]: any }; // Optional: Track-specific options (e.g., color)
    type: string; // Required: Track type (e.g., "ruler", "bam", "hic", "geneannotation", "bigwig", "longrange"...)
  }
  ```

  **Example:**

  ```json
  [
    {
      "type": "track_type1",
      "name": "track_name1",
      "url": "track_url1",
      "options": {}
    },
    {
      "type": "track_type2",
      "name": "track_name2",
      "url": "track_url2",
      "options": {}
    }
  ]
  ```

  For more details on track formatting, see the [Epigenome Gateway Datahub documentation](https://epigenomegateway.readthedocs.io/en/latest/datahub.html).

- **viewRegion** (`string`, optional)  
  Genomic region to display, as a string.

  **Template:**

  ```
  "chr<chromosome>:<start>-<end>"
  ```

  **Example:**

  ```
  "chr7:27053397-27373765"
  ```

  _Default:_ Uses the genomeConfig’s default region if not provided.

- **windowWidth** (`number`, optional)  
  Width of the genome viewer in pixels.  
  Default: `1200`

- **customGenome** (`any`, optional)  
  Optional custom genome object if the user created their own genome matching the current formatting.

### GenomeHub

A React component that renders the full genome browser interface.  
No props are required.  
Future updates will add options for customizing the appearance and behavior of the browser.
