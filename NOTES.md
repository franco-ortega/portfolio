# Media Queries

## Sass Breakpoints

1. tablet-new: 35rem = 560px
1. desktop-small-new: 56.25rem = 900px
1. desktop-medium-new: 70rem = 1120px
1. desktop-large-new: 85rem = 1360px

## Sass Media Query Mixins

1. Active
   1. @mixin media-query-new($key)
   1. @mixin media-query-landscape-mobile
1. Inactive
   1. @mixin media-maxWidth-orientation($key, $orientation)
   1. @mixin media-maxWidth-minHeight($key1, $key2)
   1. @mixin media-landscape($key)
   1. @mixin media-mobile-landscape()

## Media Queries

1. @media (max-height: 700px) in CartographyPopUp
1. @media (max-height: 650px) in CompassNew
1. @media (min-height: 700px) in Title
1. 1. @media (prefers-reduced-motion: reduce) in Continent and Island

---

## App:

## Buttons x 1 set (2 components)

### ClosePopUp / OpenDetails:

## Continent

1. @media (prefers-reduced-motion: reduce)

### Continents x 4

---

### CartographyDetails:

### Profile:

### ProfileDetails:

### ProjectsDetails:

### ContinentDetails:

---

## Island -> Email / GitHub / LinkedIn / Twitter: 1 -> 4

1. @media (prefers-reduced-motion: reduce)

---

## Map Elements x 4

### BorderCorner: 2

### Compass:

### Legend:

### Scale:

## Maps x 1 set (2 components)

### MapDetails / MapTallDetails: 4

## Ocean: 1

---

## Projects x 6 (6 x 2 components = 10 components)

### Root / Glowing Colors / BeHuman / Ebb / MajorArcana / WeatherBeats
