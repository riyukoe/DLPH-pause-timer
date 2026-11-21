TWO STOPWATCHES

Open this folder in your IDE. No dependencies or build step are needed.

PROJECT STRUCTURE
index.html           Page structure, labels, and accessible controls.
css/styles.css       All styles and responsive layout rules.
js/app.js            Entry point connecting timers, storage, and controls.
js/stopwatch.js      Timer state and start/pause/reset calculations.
js/storage.js        Loading, validating, and saving browser storage.
js/view.js           Page events, control rendering, and time formatting.
README.txt           Local setup, file guide, and hosting instructions.

RUN LOCALLY
JavaScript uses native ES modules. Serve the folder over HTTP rather than
double-clicking index.html; browsers restrict module imports from file URLs.

Option A: In VS Code, install Live Server and select "Open with Live Server"
on index.html.

Option B: If Python is installed, open a terminal in this folder and run:
  python -m http.server 3000
On Windows you can also use:
  py -m http.server 3000
Then visit http://localhost:3000. Press Ctrl+C in the terminal to stop.

EDITING GUIDE
- Change page content or add controls in index.html.
- Change colors, spacing, and layout in css/styles.css.
- Change timer behavior in js/stopwatch.js.
- Change saved-data behavior in js/storage.js.
- Change display formatting or input handling in js/view.js.
- Wire new functionality together in js/app.js.
Keep relative import paths, filename case, and .js extensions intact.
Save your changes and refresh the browser (Live Server reloads automatically).

FEATURES
- Two independent stopwatches, both able to run at the same time.
- Start, pause, resume, and reset each stopwatch separately.
- Edit timer names.
- Automatic saving in the current browser, including running timers.
- Keyboard-accessible buttons and a layout that works on phones.

GITHUB PAGES HOSTING
1. Create a GitHub repository, for example "dual-stopwatch".
   A public repository works with GitHub Free.
2. Upload index.html, README.txt, and the complete css/ and js/ folders to the
   root of the repository's main branch and commit.
3. Open the repository's Settings > Pages.
4. Under Build and deployment, choose "Deploy from a branch".
5. Select the main branch and the / (root) folder, then Save.
6. When deployment finishes, GitHub Pages shows your website link:
   https://YOUR-USERNAME.github.io/dual-stopwatch/

Extract the ZIP before uploading; preserve the folder structure.
For future updates, commit and push whichever source files you changed.

NOTES
Timer state is stored locally, separately for each browser and website address.
It does not sync between devices or tabs. Use one tab per browser.
Clearing browser data removes saved progress. Private browsing may not retain it.
Background timing uses the device clock; changing that clock can affect elapsed time.
Display updates may pause in a hidden tab, but elapsed time catches up on return.
Reset immediately stops and clears the selected timer; it cannot be undone.
