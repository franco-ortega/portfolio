# Media Queries

## Sass Breakpoints

1. desktop-medium: 1200px
1. tablet-wide: 1000px
1. tablet: 900px
1. junior: 700px
1. mobile: 500px
1. mobile-narrow: 300px

## Sass Media Query Mixins

1. media-query(key)
1. media-maxWidth-orientation(key, orientation)
1. media-maxWidth-minHeight(key1, key2)
1. media-mobile-landscape()

## Media Queries

1. @include media-query(desktop-medium) {
1. @include media-query(tablet) {
1. @include media-maxWidth-orientation(tablet, landscape) {
1. @include media-maxWidth-minHeight(tablet, tablet-wide) {
1. @include media-maxWidth-minHeight(tablet, mobile) {
1. @media screen and (max-width: 900px) and (max-height: 500px) {
1. @media screen and (max-width: 900px) and (min-width: 700px) and (max-height: 500px) and (orientation: landscape) {
1. @include media-query(junior) {
1. @include media-maxWidth-orientation(junior, landscape) {
1. @media screen and (max-width: 500px) and (max-height: 700px) {
1. @include media-query(mobile) {
1. @include media-mobile-landscape() {
1. @include media-maxWidth-orientation(mobile, portrait) {
1. @include media-query(mobile-narrow) {
1. @media (prefers-reduced-motion: reduce) {

---

## App: 3

1. @include media-query(desktop-medium) {
1. @include media-maxWidth-orientation(tablet, landscape) {
1. @include media-query(mobile) {

## Buttons x 1 set (2 components)

### ClosePopUp / OpenDetails: 3

1. @include media-query(desktop-medium) {
1. @include media-query(tablet) {
1. @include media-query(mobile) {

## Continents x 6 sets (3 components / 1 / 1 / 1 / 1 / 1)

### Cartography / Projects / Resume: 4

1. @include media-maxWidth-minHeight(tablet, mobile) {
1. @include media-mobile-landscape() {
1. @include media-query(mobile) {
1. @media (prefers-reduced-motion: reduce) {

### CartographyDetails: 3

1. @include media-maxWidth-minHeight(tablet, mobile) {
1. @include media-maxWidth-orientation(tablet, landscape) {
1. @include media-query(mobile) {

### Profile: 4

1. @include media-maxWidth-minHeight(tablet, mobile) {
1. @include media-mobile-landscape() {
1. @include media-maxWidth-orientation(mobile, portrait) {
1. @media (prefers-reduced-motion: reduce) {

### ProfileDetails: 4

1. @include media-query(desktop-medium) {
1. @include media-maxWidth-minHeight(tablet, mobile) {
1. @include media-maxWidth-orientation(tablet, landscape) {
1. @include media-query(mobile) {

### ProjectsDetails: 5

1. @include media-query(desktop-medium) {
1. @include media-maxWidth-minHeight(tablet, mobile) {
1. @include media-maxWidth-minHeight(tablet, tablet-wide) {
1. @include media-mobile-landscape() {
1. @include media-query(mobile) {

### ContinentDetails: 2

1. @include media-query(desktop-medium) {
1. @include media-query(tablet) {

## Islands x 2 sets (1 component / 5 components)

### Island: 4

1. @include media-maxWidth-minHeight(tablet, mobile) {
1. @include media-maxWidth-orientation(tablet, landscape) {
1. @include media-query(mobile) {
1. @media (prefers-reduced-motion: reduce) {

### IslandChain / Email / GitHub / LinkedIn / Twitter: 3

1. @include media-maxWidth-minHeight(tablet, mobile) {
1. @include media-mobile-landscape() {
1. @include media-query(mobile) {

## Map Elements x 4

### BorderCorner: 2

1. @include media-query(tablet) {
1. @include media-query(mobile) {

### Compass: 6

1. @include media-query(desktop-medium) {
1. @include media-query(tablet) {
1. @include media-maxWidth-minHeight(tablet, tablet-wide) {
1. @media screen and (max-width: 900px) and (min-width: 700px) and (max-height: 500px) and (orientation: landscape) {
1. @include media-maxWidth-orientation(junior, landscape) {
1. @include media-query(mobile) {

### Legend: 8

1. @include media-query(desktop-medium) {
1. @include media-query(tablet) {
1. @include media-maxWidth-minHeight(tablet, tablet-wide) {
1. @media screen and (max-width: 900px) and (max-height: 500px) {
1. @include media-query(junior) {
1. @include media-query(mobile) {
1. @media screen and (max-width: 500px) and (max-height: 700px) {
1. @include media-query(mobile-narrow) {

### Scale: 3

1. @include media-query(tablet) {
1. @include media-mobile-landscape() {
1. @include media-query(mobile) {

## Maps x 1 set (2 components)

### MapDetails / MapTallDetails: 4

1. @include media-query(desktop-medium) {
1. @include media-maxWidth-minHeight(tablet, mobile) {
1. @include media-maxWidth-orientation(tablet, landscape) {
1. @include media-query(mobile) {

## Ocean: 3

1. @include media-query(tablet) {
1. @include media-maxWidth-orientation(tablet, landscape) {
1. @include media-query(mobile) {

---

## Projects x 1 set (10 components)

### BeHuman / BeHumanDetails / ChooseGif / ChooseGifDetails / Ebb / EbbDetails / MajorArcana / MajorArcanaDetails / WeatherBeats / WeatherBeatsDetails: 3

1. @include media-query(desktop-medium) {
1. @include media-query(tablet) {
1. @include media-query(mobile) {
