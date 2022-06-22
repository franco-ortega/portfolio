# Media Queries

## Sass Breakpoints
1. desktop-small: 1200px
1. tablet: 900px
1. junior: 700px
1. mobile: 500px

## Sass Media Query Mixins
1. media-query
1. media-query-landscape
1. media-maxWidth-orientation
1. media-maxWidth-minHeight

---

## App x 1: 3
1. @include media-query(desktop-small) {
1. @include media-maxWidth-orientation(tablet, landscape) {
1. @include media-query(mobile) {


## Buttons x 2
### ClosePopUp: 4
1. @include media-query(desktop-small) {
1. @include media-query(tablet) {
1. @include media-maxWidth-orientation(tablet, landscape) {
1. @include media-query(mobile) {

### OpenDetails: 3
1. @include media-query(desktop-small) {
1. @include media-query(tablet) {
1. @include media-query(mobile) {


## Continents x 7 (3 / 5)
### Cartography / Projects / Resume: 4
1. @include media-maxWidth-minHeight(tablet, mobile) {
1. @media screen and (max-width: 900px) and (max-height: 500px) and (orientation: landscape) {
1. @include media-query(mobile) {
1. @media (prefers-reduced-motion: reduce) {

### CartographyDetails: 3
1. @include media-maxWidth-minHeight(tablet, mobile) {
1. @include media-maxWidth-orientation(tablet, landscape) {
1. @include media-query(mobile) {

### Profile: 4
1. @include media-maxWidth-minHeight(tablet, mobile) {
1. @media screen and (max-width: 900px) and (max-height: 500px) and (orientation: landscape) {
1. @include media-maxWidth-orientation(mobile, portrait) {
1. @media (prefers-reduced-motion: reduce) {

### ProfileDetails: 4
1. @include media-query(desktop-small) {
1. @include media-maxWidth-minHeight(tablet, mobile) {
1. @include media-maxWidth-orientation(tablet, landscape) {
1. @include media-query(mobile) {

### ProjectsDetails: 6
1. @include media-query(desktop-small) {
1. @include media-maxWidth-minHeight(tablet, mobile) {
1. @include media-maxWidth-minHeight(tablet, senior) {
1. @media screen and (max-width: 900px) and (max-height: 500px) and (orientation: landscape) {
1. @include media-query(mobile) {
1. @media screen and (max-width: 400px) and (max-height: 700px) {


### ContinentDetails: 2
1. @include media-query(desktop-small) {
1. @include media-query(tablet) {


## Islands x 2 (1 / 5)
### Island: 4
1. @include media-maxWidth-minHeight(tablet, mobile) {
1. @include media-maxWidth-orientation(tablet, landscape) {
1. @include media-query(mobile) {
1. @media (prefers-reduced-motion: reduce) {

### IslandChain / Email / GitHub / LinkedIn / Twitter: 3
1. @include media-maxWidth-minHeight(tablet, mobile) {
1. @media screen and (max-width: 900px) and (max-height: 500px) and (orientation: landscape) {
1. @include media-query(mobile) {


## Map Elements x 4
### BorderCorner: 2
1. @include media-query(tablet) {
1. @include media-query(mobile) {

### Compass: 6
1. @include media-query(desktop-small) {
1. @include media-query(tablet) {
1. @include media-maxWidth-minHeight(tablet, senior) {
1. @media screen and (max-width: 900px) and (min-width: 700px) and (max-height: 500px) and (orientation: landscape) {
1. @include media-maxWidth-orientation(junior, landscape) {
1. @include media-query(mobile) {

### Legend: 8
1. @include media-query(desktop-small) {
1. @include media-query(tablet) {
1. @include media-maxWidth-minHeight(tablet, senior) {
1. @media screen and (max-width: 900px) and (max-height: 500px) {
1. @media screen and (max-width: 700px) {
1. @include media-query(mobile) {
1. @media screen and (max-width: 500px) and (max-height: 700px) {
1. @include media-query(mobile-narrow) {

### Scale: 3
1. @include media-query(tablet) {
1. @media screen and (max-width: 900px) and (max-height: 500px) and (orientation: landscape) {
1. @include media-query(mobile) {


## Maps x 1 (1 / 1)
### MapDetails / MapTallDetails: 4
1. @include media-query(desktop-small) {
1. @include media-maxWidth-minHeight(tablet, mobile) {
1. @include media-maxWidth-orientation(tablet, landscape) {
1. @include media-query(mobile) {


## Ocean x 1: 3
1. @include media-query(tablet) {
1. @include media-maxWidth-orientation(tablet, landscape) {
1. @include media-query(mobile) {


### Projects x 2 (9 / 1)
## BeHuman / BeHumanDetails / ChooseGif / ChooseGifDetails / Ebb / EbbDetails / MajorArcana / MajorArcanaDetails / WeatherBeats: 3
1. @include media-query(desktop-small) {
1. @include media-query(tablet) {
1. @include media-query(mobile) {

## WeatherBeatsDetails: 4
1. @include media-query(desktop-small) {
1. @media screen and (max-width: 1100px) and (max-height: 1400px) {
1. @include media-query(tablet) {
1. @include media-query(mobile) {
