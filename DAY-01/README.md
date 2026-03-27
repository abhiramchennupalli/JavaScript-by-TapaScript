# JavaScript Learning - Day 01

> Learning JavaScript from TapaScript

This file documents my day one learning journey. This text is typed directly from the GitHub repo, and I'll commit and pull from GitHub (remote repository to localhost).

## 4 Ways to Insert Script Tags

There are multiple ways to insert script tags in HTML: 
### Method 1: Script in Head Tag
```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DAY 01</title>
    <script src="script.js"></script>
</head>
```

**How it works:**
- Browser sees HTML tag at the top of head tag and starts creating DOM object
- Sees meta, title tags and creates title  
- Sees script tag, then downloads script
- Once downloading is complete, executes script immediately
- After executing JS code, goes to body tag (which is a problem)

**Issue:** DOM building is blocked while the script is downloaded and executed. The page renders late!### Method 2: Script in Body Tag
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DAY 01</title>
</head>
<body>
    <script src="script.js"></script>
</body>
</html>
```

**How it works:**
- Browser starts building DOM first
- Downloads script and executes it

**Issue:** Not ideal for creating web applications. We need to run (download) both HTML and script at the same time. This is where the 3rd method comes into play.

---

### Method 3: Using `async` Attribute```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DAY 01</title>
    <script async src="script.js"></script>
</head>
<body>
</body>
</html>
```

**How it works:**
- `async` allows both JS and HTML (DOM building) to happen at the same time
- After downloading JS, it starts executing immediately without waiting for DOM building to complete

**Use case:** Good for external JS libraries, so the main HTML is not disturbed with its execution. Ideal for AI bots etc. which are separate from the main HTML page.

---

### Method 4: Using `defer` Attribute (Recommended)```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DAY 01</title>
    <script defer src="script.js"></script>
</head>
<body>
</body>
</html>
```

**How it works:**
- Both JS and DOM building happen in parallel
- JS file waits to execute until HTML file is fully downloaded and DOM is built
- After both are downloaded, the script executes

**Why it's best:** This is the ideal and most useful method because it ensures:
- HTML loads first without interruption
- Script executes only after the DOM is fully ready
- Optimal performance and user experience