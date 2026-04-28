# Design Brief

## Direction
Cool Serene Educational — clean, accessible mobile-first interface for teachers and students creating and taking quizzes with focused, distraction-free interaction patterns.

## Tone
Calm and approachable. Educational interface designed for clarity and focus with minimal visual noise.

## Differentiation
Progress indicators and quiz status states use warm amber/teal accents to signal completion vs. pending, creating subtle visual feedback without compromising the clean aesthetic.

## Color Palette

| Token      | OKLCH        | Role              |
| ---------- | ------------ | ----------------- |
| background | 0.98 0.008 230 | light off-white, cool undertone |
| foreground | 0.18 0.015 230 | deep cool grey-blue |
| card       | 1.0 0.004 230 | pure white, container |
| primary    | 0.42 0.14 240 | ocean blue, CTAs & headers |
| accent     | 0.6 0.15 170 | teal, success & completion |
| muted      | 0.94 0.01 230 | subtle backgrounds |
| destructive| 0.55 0.22 25 | red for errors |

## Typography

- Display: Space Grotesk — headlines, section titles, role badges
- Body: Figtree — all body text, labels, quiz content
- Scale: hero `text-2xl font-bold tracking-tight`, h2 `text-lg font-semibold`, label `text-xs font-semibold uppercase tracking-widest`, body `text-base`

## Elevation & Depth

Cards elevated via subtle `shadow-md` with soft drop shadows; no stark borders. Background zones use whitespace over visual dividers.

## Structural Zones

| Zone       | Background       | Border         | Notes                        |
| ---------- | ---------------- | -------------- | ---------------------------- |
| Header     | `bg-card` + `shadow-subtle` | none | screen titles, role select |
| Content    | `bg-background` | none | quiz cards, forms, lists |
| Card       | `bg-card` + `shadow-md` | `border-border/50` | quizzes, questions, results |
| Footer/CTA | `bg-muted/30` + `border-t` | `border-border` | persistent Next/Submit buttons |

## Spacing & Rhythm

Spacious 16-24px gaps between card groups; 12px internal card padding; 8px micro-spacing for labels and form inputs. Breathing room prioritized over density.

## Component Patterns

- Buttons: primary (ocean blue, full-width mobile), secondary (muted bg, inline), icon (no fill, text-primary)
- Cards: 8px rounded, 1px subtle border, shadow-md on hover, white background
- Badges: role badges (Space Grotesk, `text-label`, primary blue) + status badges (accent teal for completed)
- Quiz cards: title, quiz count or score, leading/trailing icons, tap to expand

## Motion

- Entrance: cards fade-in with 0.2s ease-out, staggered by 50ms per item
- Hover: cards scale(1.02) + shadow-md elevation, 0.15s smooth
- Tap: ripple effect (opacity pulse) on button press, 0.1s duration

## Constraints

- Mobile-first: design at 375px viewport, ensure full width usage
- No gradient backgrounds; depth via shadows and layered colors only
- All interactive elements contrast-checked (AA+ WCAG)
- Dark mode mirrors light tokens with inverted L values, same hue

## Signature Detail

Warm amber accent on quiz completion badges and progress indicators creates visual delight in an otherwise cool palette, rewarding student success with warmth.

