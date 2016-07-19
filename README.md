# Malicious Javascript Dataset

> **DISCLAMER** This repository contains harmful code aka you should know what you are doing! The maintainer cannot be held responsible for *dumb* or *illegal* usage of the content.

This repository contains a list of pseudo-sorted malicious JavaScripts collected from time to time.

## Current dataset size (April 2016):
- 1084 HTML files
- 1350 JS files
- 425 skipped files

## Contributions are very welcome

In order to automatically process the samples I'd like the contributors to keep the following *guidelines*:
* Malicious JavaScript samples must have either `.html` or `.js` extension
* Add the `ignore` keyword in filename if the file is not a JavaScript samples (e.g. your notes)
* If you have the deobfuscated code please submit it with the `deobfuscated` keyword in the filename
* If you don't know which kind of sample it is, please submit it in the `misc` folder
* If you know the date when the sample appeared please either add the date in the filename or (if you have many samples for the same period) submit them in a folder named after that period (following the format `YYYYMMDD`)
* If the sample is an EK landing page either add `lp` or `landingpage` in the sample filename
* If the sample is only the injected JavaScript (e.g. as the first step in a EK chain), please add the `injected` keyword to it
