# Border Documentary Website - Project Prompt

## Project Overview
Create an immersive, scroll-based documentary website showcasing a four-part series titled **"Border: A Chronicle of the Dividing Line"** about the US-Mexico borderlands. The site features sticky video backgrounds with scrollable text overlays, creating a cinematic storytelling experience.

---

## Design Requirements

### 1. Landing Page
- **Title**: "Geography of Hope and Steel"
- **Subtitle**: "A Four-Part Chronicle of the Borderlands"
- **Background**: Linear gradient from `#8B7355` to `#5D4E37` (desert/earth tones)
- **Layout**: Full viewport height (100vh), centered content
- **Typography**: Bold, large heading (4rem desktop, 2.5rem mobile)

### 2. Documentary Overview Section
- **Title**: "Documentary Series"
- **Layout**: 
  - Left side (8 columns): 2x2 grid of video previews
  - Right side (4 columns): Text description box
- **Videos**: 
  - Four preview videos (`video01.mp4` - `video04.mp4`)
  - Set to `muted` and autoplay when 50% visible (Intersection Observer)
  - Square aspect ratio with controls
- **Description Box**:
  - White background with rounded corners
  - Heading color: `#8B7355`
  - Contains series overview text

### 3. Core Narrative Chapters (4 Sections)

#### Technical Structure
- **Height**: Each chapter is `300vh` (3x viewport height) to allow extensive scrolling
- **Video Background**: 
  - Sticky positioned at top
  - Full viewport dimensions (100vh)
  - Autoplay, muted, looping
  - Videos: `https://lhy-sara.github.io/as08/video01.mp4` through `video04.mp4`
- **Text Overlay**:
  - Semi-transparent background: `rgba(139, 115, 85, 0.65)` (65% opacity)
  - Backdrop blur: 10px
  - Max width: 700px
  - White text with shadow for readability
  - Multiple text blocks per chapter for scrolling effect

#### Chapter Content

**Chapter 1: The Compass of the Cacti**
- Director's First Sketch
- The Emotional North Star
- The Challenge of Editing
- A Testament to Resilience

**Chapter 2: The Unseen Path**
- Tracking the Ghost Train
- Alma and Mateo's Journey
- Voices Along the Way

**Chapter 3: The Architecture of Separation**
- The Paradox of the Steel
- The Environmental Perspective
- Art as Resistance

**Chapter 4: Anchor and Horizon**
- Finding the Ground
- The Festival and the Horizon
- The Second Generation
- Seeds of Hope

---

## Technical Specifications

### Color Palette
- Primary earth tone: `#8B7355` (brown-tan)
- Dark earth tone: `#5D4E37` (dark brown)
- Text overlay: `rgba(139, 115, 85, 0.65)` with 10px blur
- White text: `#ffffff`, `#f0f0f0`, `#e0e0e0` (various shades)

### Typography
- Headings: Bold, large (2.5rem for h2, 1.8rem for h3)
- Body text: 1.1rem with 1.9 line-height
- Responsive scaling for mobile devices

### Video Behavior
1. **Preview videos** (grid section):
   - Autoplay when 50% visible in viewport
   - Pause when scrolled out of view
   - User controls enabled
   - Muted by default

2. **Background videos** (chapter sections):
   - Sticky positioned
   - Continuous autoplay loop
   - Muted
   - `playsinline` attribute for mobile compatibility

### Scroll Interaction
- **Text scroll container**: Starts at 100vh offset (initially hidden behind video)
- **Text blocks**: Appear as user scrolls, creating parallax effect
- Video remains fixed until all chapter text has been scrolled through
- Smooth transitions between chapters

### Responsive Design
- Desktop: Full 2-column layout
- Tablet (≤768px): Single column, stacked layout
- Mobile: Reduced font sizes, adjusted padding
- Grid videos: 2 columns on desktop, 1 column on mobile

---

## Dependencies
- **Bootstrap 4.1.3**: Grid system, utilities
- **jQuery 3.6.0**: Video autoplay logic, smooth scrolling
- **Intersection Observer API**: Viewport detection for video autoplay

---

## Key Features
1. **Sticky Video Backgrounds**: Videos remain fixed while text scrolls over them
2. **Scroll-Based Narrative**: Long-form text content reveals as user scrolls
3. **Automatic Video Playback**: Videos play/pause based on viewport visibility
4. **Cinematic Presentation**: Semi-transparent overlays maintain video visibility
5. **Responsive Design**: Adapts to all screen sizes
6. **Thematic Consistency**: Earth-tone color scheme reflects border/desert theme

---

## File Structure
```
as08/
├── index.html           # Main HTML file
├── video01.mp4          # Chapter 1 video
├── video02.mp4          # Chapter 2 video
├── video03.mp4          # Chapter 3 video
├── video04.mp4          # Chapter 4 video
└── PROJECT_PROMPT.md    # This file
```

---

## Implementation Notes
- Each chapter requires approximately 300vh of scroll space
- Text blocks use `backdrop-filter: blur(10px)` for glass-morphism effect
- Videos set to `object-fit: cover` to maintain aspect ratio
- Smooth scrolling enabled for anchor links
- All video sources must be accessible via HTTPS for autoplay to work

---

**Last Updated**: November 13, 2025  
**Project Type**: Documentary Website / Scroll-Based Storytelling  
**Framework**: Bootstrap 4.1.3 + jQuery 3.6.0
